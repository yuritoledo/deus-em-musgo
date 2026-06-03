import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

const ROOT = '.'
const SKIP_DIRS = ['.git', 'node_modules', '.vitepress', '.vercel', '_templates', '_reviews', '.obsidian']
const SKIP_FILES = ['AGENTS.md', 'package.json', 'package-lock.json', 'vercel.json', '.gitignore', 'index.md', '.npmrc']

function slugify(name) {
  // NFD decompose, remove combining marks
  let s = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

  // Remove common emoji ranges
  s = s.replace(/[\u{1F000}-\u{1FFFF}]/gu, '')
  s = s.replace(/[\u2600-\u27BF]/gu, '')
  s = s.replace(/[\u{FE00}-\u{FE0F}]/gu, '')
  s = s.replace(/[\u2702-\u27B0]/gu, '')
  s = s.replace(/⚰/g, '')
  s = s.replace(/🐾/g, '')
  s = s.replace(/🌙/g, '')
  s = s.replace(/🖤/g, '')
  s = s.replace(/🍄/g, '')
  s = s.replace(/🌬️/g, '')
  s = s.replace(/☠/g, '')

  s = s.toLowerCase()
  s = s.replace(/&/g, 'e')
  s = s.replace(/[''"„“”«»]/g, '')
  s = s.replace(/[()]/g, '')
  s = s.replace(/:/g, '')
  s = s.replace(/\s+/g, '-')
  s = s.replace(/[^a-z0-9/.\-_]/g, '')
  s = s.replace(/-+/g, '-')
  s = s.replace(/^[-.]+|[-.]+$/g, '')

  return s
}

// Collect all files
const files = []
function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    if (SKIP_DIRS.includes(entry.name)) continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walk(full)
    } else if (entry.isFile()) {
      files.push(full)
    }
  }
}
walk(ROOT)

// Build rename mapping (old → new with slugified path)
const mapping = []
for (const file of files) {
  const parsed = path.parse(file)
  const baseName = parsed.base
  if (SKIP_FILES.includes(baseName)) continue
  if (!baseName.endsWith('.md')) continue

  const parts = file.split(path.sep)
  const newParts = parts.map(p => slugify(p))
  const newPath = newParts.join(path.sep)

  if (newPath !== file) {
    mapping.push({ old: file, new: newPath })
  }
}

// Sort deepest first so parent dirs are created before siblings
mapping.sort((a, b) => b.new.split('/').length - a.new.split('/').length)

console.log('=== RENAME PLAN ===')
for (const m of mapping) {
  console.log(`  ${m.old}`)
  console.log(`  → ${m.new}`)
  console.log()
}

console.log(`Total: ${mapping.length} files`)

// Execute
for (const m of mapping) {
  const newDir = path.dirname(m.new)
  if (!fs.existsSync(newDir)) {
    fs.mkdirSync(newDir, { recursive: true })
  }
  try {
    execSync(`git mv "${m.old}" "${m.new}"`, { stdio: 'pipe' })
    console.log(`✔ ${m.old} → ${m.new}`)
  } catch (e) {
    console.error(`✖ ${m.old} → ${m.new}: ${e.stderr?.toString().trim() || e.message}`)
  }
}

console.log('\n=== DONE ===')
