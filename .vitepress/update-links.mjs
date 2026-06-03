import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

// Build old→new mapping from git renames
const output = execSync('git diff --cached --name-status', { encoding: 'utf8' })
const pathMap = new Map() // old string → new string

for (const line of output.trim().split('\n')) {
  const parts = line.split('\t')
  if (parts.length < 2) continue
  const status = parts[0]
  if (!status.startsWith('R')) continue

  const oldPath = parts[1]
  const newPath = parts[2]

  // Full path variants
  const oldEncoded = oldPath.replace(/ /g, '%20')
  const newClean = newPath // already slugified, no URL encoding needed

  pathMap.set(oldPath, newClean)
  if (oldEncoded !== oldPath) pathMap.set(oldEncoded, newClean)

  // Just filename (no dir prefix)
  const oldBase = path.basename(oldPath)
  const newBase = path.basename(newClean)
  if (oldBase !== oldPath && oldBase !== newBase) {
    pathMap.set(oldBase, newBase)
    const oldBaseEncoded = oldBase.replace(/ /g, '%20')
    if (oldBaseEncoded !== oldBase) pathMap.set(oldBaseEncoded, newBase)
  }

  // Wiki link variants (without extension)
  const oldNoExt = oldPath.replace(/\.md$/i, '')
  const newNoExt = newClean.replace(/\.md$/i, '')
  if (oldNoExt !== oldPath) {
    pathMap.set(oldNoExt, newNoExt)
    const oldNoExtEncoded = oldNoExt.replace(/ /g, '%20')
    if (oldNoExtEncoded !== oldNoExt) pathMap.set(oldNoExtEncoded, newNoExt)
  }
  const oldBaseNoExt = oldBase.replace(/\.md$/i, '')
  const newBaseNoExt = newBase.replace(/\.md$/i, '')
  if (oldBaseNoExt !== oldBase && oldBaseNoExt !== newBaseNoExt) {
    pathMap.set(oldBaseNoExt, newBaseNoExt)
    const oldBaseNoExtEncoded = oldBaseNoExt.replace(/ /g, '%20')
    if (oldBaseNoExtEncoded !== oldBaseNoExt) pathMap.set(oldBaseNoExtEncoded, newBaseNoExt)
  }
}

// Also add directory-only replacements (for links like `(dir/)`)
const dirs = new Set()
for (const [oldPath] of pathMap) {
  const dir = path.dirname(oldPath)
  if (dir !== '.') dirs.add(dir)
}
const newDirs = new Set()
for (const [oldPath, newPath] of pathMap) {
  const dir = path.dirname(newPath)
  if (dir !== '.') newDirs.add(dir)
}

// Build dir mapping from old dir names to new ones
const dirMap = new Map()
const oldDirList = Array.from(dirs).sort((a, b) => b.length - a.length)
const newDirList = Array.from(newDirs).sort((a, b) => b.length - a.length)

// Infer mapping from the file renames
for (const [oldPath, newPath] of pathMap) {
  const oldDir = path.dirname(oldPath)
  const newDir = path.dirname(newPath)
  if (oldDir !== '.' && oldDir !== newDir) {
    dirMap.set(oldDir, newDir)
    const oldDirEncoded = oldDir.replace(/ /g, '%20')
    if (oldDirEncoded !== oldDir) dirMap.set(oldDirEncoded, newDir)
  }
}

// Merge into single map (longest matches first)
const allReplacements = [...pathMap.entries(), ...dirMap.entries()]
allReplacements.sort((a, b) => b[0].length - a[0].length)

// Walk all .md files (currently at new paths after renames)
const mdFiles = []
function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules' || entry.name === '.vitepress') continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full)
    else if (entry.isFile() && entry.name.endsWith('.md')) mdFiles.push(full)
  }
}
walk('.')

let totalReplacements = 0

for (const file of mdFiles) {
  let content = fs.readFileSync(file, 'utf8')
  let modified = false

  for (const [oldStr, newStr] of allReplacements) {
    if (content.includes(oldStr)) {
      content = content.replaceAll(oldStr, newStr)
      modified = true
    }
  }

  if (modified) {
    fs.writeFileSync(file, content, 'utf8')
    totalReplacements++
    console.log(`✔ ${file}`)
  }
}

console.log(`\n${totalReplacements} files updated.`)
console.log('Replacement map:')
for (const [old, next] of allReplacements) {
  console.log(`  "${old}" → "${next}"`)
}
