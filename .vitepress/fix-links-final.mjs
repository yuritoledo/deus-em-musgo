/**
 * Fix all internal links after slug rename + number strip.
 * Handles URL-encoded, literal, and mixed-encoding variants.
 * No external deps — uses only fs + path.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

// ─── FILE WALKER (recursive, no glob dep) ──────────────

function walk(dir, files = []) {
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.name.startsWith('.') || e.name === 'node_modules') continue;
    const fp = join(dir, e.name);
    if (e.isDirectory()) walk(fp, files);
    else if (e.name.endsWith('.md')) files.push(fp);
  }
  return files;
}

const mdFiles = walk('.').filter(f =>
  !f.startsWith('.vitepress') && !f.startsWith('_reviews') && !f.startsWith('_templates')
);

// ─── MAPPING DATA ──────────────────────────────────────

const DIRS = [
  ['6 - Oráculo Solo',   '6-oraculo-solo',    'oraculo-solo'],
  ['5 - Mecânicas',      '5-mecanicas',       'mecanicas'],
  ['4 - Bestiário',      '4-bestiario',       'bestiario'],
  ['3 - Masmorras',      '3-masmorras',       'masmorras'],
  ['2 - Locais & Regiões', '2-locais-e-regioes', 'locais-e-regioes'],
  ['1 - Facções',        '1-faccoes',         'faccoes'],
  ['0 - Visão Geral',    '0-visao-geral',     'visao-geral'],
  ['8 - Classes',        '8-classes',         'classes'],
];

const FILES = [
  ['6.1 - O Oráculo',                '6.1-o-oraculo',                         'o-oraculo'],
  ['6.2 - Tabela de Encontros',      '6.2-tabela-de-encontros',              'tabela-de-encontros'],
  ['6.3 - Rumores e Ganchos',        '6.3-rumores-e-ganchos',                'rumores-e-ganchos'],
  ['6.4 - Tesouros & Relíquias',     '6.4-tesouros-e-reliquias',             'tesouros-e-reliquias'],
  ['6.5 - Resolução de Desafios',    '6.5-resolucao-de-desafios',            'resolucao-de-desafios'],
  ['6.6 - Gerador de Missão',        '6.6-gerador-de-missao',                'gerador-de-missao'],
  ['5.1 - Encontros Aleatórios',     '5.1-encontros-aleatorios',             'encontros-aleatorios'],
  ['5.2 - Progressão & XP',          '5.2-progressao-e-xp',                  'progressao-e-xp'],
  ['5.3 - Reputação & Facções',      '5.3-reputacao-e-faccoes',             'reputacao-e-faccoes'],
  ['4.0 - Encontros por Região',     '4.0-encontros-por-regiao',            'encontros-por-regiao'],
  ['4.1 - Criaturas',                '4.1-criaturas',                        'criaturas'],
  ['3.0 - Gerador de Masmorras',     '3.0-gerador-de-masmorras',            'gerador-de-masmorras'],
  ['3.1 - Mapa do Local (Método dos Dados)', '3.1-mapa-do-local-metodo-dos-dados', 'mapa-do-local-metodo-dos-dados'],
  ['3.2 - Descrevendo a Sala',       '3.2-descrevendo-a-sala',              'descrevendo-a-sala'],
  ['2.0 - Mapa da Região',           '2.0-mapa-da-regiao',                  'mapa-da-regiao'],
  ['1.0 - Index das Facções',        '1.0-index-das-faccoes',              'index-das-faccoes'],
  ['1.1 - Mosteiro da Chama Perpétua', '1.1-mosteiro-da-chama-perpetua',   'mosteiro-da-chama-perpetua'],
  ['1.2 - Devotos do Verde',         '1.2-devotos-do-verde',               'devotos-do-verde'],
  ['1.3 - Os Seguidores da Nieda',   '1.3-os-seguidores-da-nieda',        'os-seguidores-da-nieda'],
  ['1.4 - Emissários do Sol',        '1.4-emissarios-do-sol',             'emissarios-do-sol'],
  ['1.5 - Mercadores do Norte',      '1.5-mercadores-do-norte',            'mercadores-do-norte'],
  ['1.6 - Capuz Vermelho',           '1.6-capuz-vermelho',                  'capuz-vermelho'],
  ['0.0 - Premissa',                '0.0-premissa',                        'premissa'],
];

// Files that DON'T have number prefixes and are already correct
const KNOWN_CORRECT = new Set([
  'devotos-do-verde.md',
  'os-seguidores-da-nieda.md',
  'mercadores-do-norte.md',
  'capuz-vermelho.md',
]);

// ─── VARIANT GENERATORS ────────────────────────────────

function genDirVariants(oldName, slugName) {
  const s = new Set();
  s.add(oldName);                                              // literal
  s.add(slugName);                                             // slug
  s.add(encodeURI(oldName));                                    // encodeURI: keeps (), & etc literal
  s.add(oldName.replace(/ /g, '%20'));                          // mixed: spaces→%20, accents literal
  if (oldName.includes('&')) {
    s.add(oldName.replace(/ /g, '%20').replace('&', '%26'));
    s.add(oldName.replace('&', '%26'));
    s.add(encodeURI(oldName).replace(/&/g, '%26'));            // &→%26 in encodeURI output
  }
  const na = oldName.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  s.add(na);
  s.add(encodeURI(na));
  s.add(na.replace(/ /g, '%20'));
  return [...s];
}

function genFileVariants(oldName, slugName) {
  const s = new Set();
  for (const base of [oldName, oldName + '.md', slugName, slugName + '.md']) {
    s.add(base);
  }
  s.add(encodeURI(oldName) + '.md');
  s.add(encodeURI(oldName));
  const mixed = oldName.replace(/ /g, '%20');
  s.add(mixed + '.md');
  s.add(mixed);
  if (oldName.includes('&')) {
    for (const base of [oldName, mixed, encodeURI(oldName)]) {
      s.add(base.replace('&', '%26') + '.md');
      s.add(base.replace('&', '%26'));
    }
  }
  const na = oldName.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  s.add(na);
  s.add(na + '.md');
  s.add(encodeURI(na));
  s.add(encodeURI(na) + '.md');
  s.add(na.replace(/ /g, '%20'));
  s.add(na.replace(/ /g, '%20') + '.md');
  return [...s];
}

// ─── BUILD REPLACEMENT MAPS ────────────────────────────

const dirMap = new Map();
for (const [oldName, slugName, newName] of DIRS) {
  for (const v of genDirVariants(oldName, slugName)) {
    dirMap.set((v.endsWith('/') ? v : v + '/'), newName + '/');
  }
}

const fileMap = new Map();
for (const [oldName, slugName, newName] of FILES) {
  for (const v of genFileVariants(oldName, slugName)) {
    if (!fileMap.has(v)) fileMap.set(v, newName);
  }
}
const fileEntries = [...fileMap.entries()].sort((a, b) => b[0].length - a[0].length);

// ─── FIX A SINGLE LINK TARGET ──────────────────────────

function fixTarget(path) {
  let r = path;
  
  // 1. Replace file name at end
  for (const [old, newest] of fileEntries) {
    if (r.endsWith(old)) {
      const idx = r.length - old.length;
      if (idx === 0 || r[idx - 1] === '/') {
        r = r.slice(0, idx) + newest;
        break;
      }
    }
  }
  
  // 2. Replace directory prefixes
  for (const [oldDir, newestDir] of dirMap) {
    if (r.includes(oldDir)) {
      r = r.split(oldDir).join(newestDir);
    }
  }
  
  return r;
}

// ─── PROCESS FILES ─────────────────────────────────────

let changed = 0;

for (const file of mdFiles) {
  let content = readFileSync(file, 'utf-8');
  let original = content;
  
  // Regex that handles one level of nested parentheses in markdown link targets.
  // Target can be: path, path "title", path#anchor, path#anchor "title"
  content = content.replace(
    /\[([^\]]*)\]\(((?:[^()]|\([^()]*\))*)\)/g,
    (match, text, target) => {
      // Strip optional "title" suffix
      const t = target.replace(/\s+"[^"]*"$/, '');
      const hash = t.indexOf('#');
      const path = hash >= 0 ? t.slice(0, hash) : t;
      const anchor = hash >= 0 ? t.slice(hash) : '';
      
      const fixed = fixTarget(path);
      if (fixed !== path) {
        return `[${text}](${fixed}${anchor})`;
      }
      return match;
    }
  );
  
  if (content !== original) {
    writeFileSync(file, content, 'utf-8');
    changed++;
    process.stdout.write('.');
  }
}

// ─── PROCESS CONFIG ────────────────────────────────────

const configPath = '.vitepress/config.js';
let config = readFileSync(configPath, 'utf-8');
let origConfig = config;

for (const [oldDir, newestDir] of dirMap) {
  const oldUrl = '/' + oldDir;
  const newUrl = '/' + newestDir;
  if (config.includes(oldUrl)) {
    config = config.split(oldUrl).join(newUrl);
  }
}

if (config !== origConfig) {
  writeFileSync(configPath, config, 'utf-8');
  changed++;
}

console.log(`\nDone. ${changed} files modified.`);
