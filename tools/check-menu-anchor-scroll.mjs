#!/usr/bin/env node
/* Musurgia Mundi — regressione della navigazione ai capitoli.
 *
 * Regola: clic sui link di indice = salto verticale immediato, senza
 * scroll fluido e senza «frenata» finale.
 *
 * Sono consentiti gli scorrimenti smooth LOCALIZZATI: caroselli orizzontali,
 * anteprime multimediali, pulsanti di ritorno in alto e attività didattiche.
 * Non si può però assegnare scroll-behavior:smooth al documento html/body,
 * perché animerebbe tutte le ancore native, inclusi gli indici.
 *
 * Eseguire dalla radice: node tools/check-menu-anchor-scroll.mjs
 * Non richiede dipendenze esterne.
 */
import { readdir, readFile } from 'node:fs/promises';
import { join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const excluded = new Set(['.git', 'node_modules', '.next', 'dist', '.cache']);
let checked = 0;
const violations = [];

const rootSelector = /^(?:html|body|:root|\*|html:focus-within)$/i;
const smoothDecl = /(?:^|;)\s*scroll-behavior\s*:\s*smooth\b/i;
function scanStyles(path, css, lineStart) {
  const stripped = css.replace(/\/\*[\s\S]*?\*\//g, match => match.replace(/[^\n]/g, ' '));
  for (const rule of stripped.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    const selectors = rule[1].trim().split(',').map(x => x.trim());
    if (!selectors.some(x => rootSelector.test(x)) || !smoothDecl.test(rule[2])) continue;
    const line = lineStart + css.slice(0, rule.index).split('\n').length - 1;
    violations.push(path + ':' + line +
      ' — scorrimento smooth vietato su html/body/:root; usare scroll-behavior:auto');
  }
}
async function walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      if (!excluded.has(e.name)) await walk(join(dir, e.name));
      continue;
    }
    if (!e.isFile() || !/\.(?:html|css|js)$/i.test(e.name)) continue;
    const filename = join(dir, e.name);
    const short = relative(root, filename);
    const source = await readFile(filename, 'utf8');
    checked++;
    if (/\.css$/i.test(e.name)) {
      scanStyles(short, source, 1);
    } else if (/\.html$/i.test(e.name)) {
      for (const m of source.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style\s*>/gi)) {
        const offset = m.index + m[0].indexOf(m[1]);
        const startLine = source.slice(0, offset).split('\n').length;
        scanStyles(short, m[1], startLine);
      }
      if (/<(?:html|body)\b[^>]*\bstyle\s*=\s*["'][^"']*scroll-behavior\s*:\s*smooth\b/i.test(source)) {
        violations.push(short + ' — stile inline smooth vietato su html/body');
      }
    }
    if (/\.(?:html|js)$/i.test(e.name) &&
        /document\.(?:documentElement|body)\.style\.scrollBehavior\s*=\s*["']smooth["']/i.test(source)) {
      violations.push(short + ' — scrollBehavior smooth assegnato al documento via JavaScript');
    }
  }
}
await walk(root);

// I due gestori condivisi delle ancore non possono introdurre una nuova
// animazione di navigazione. Restano liberi di usare auto, instant o lo
// scorrimento nativo, purché non richiedano esplicitamente smooth.
for (const name of ['shared/atlas-autonav-v1.js', 'shared/atlas-anchor-arrival-v1.js']) {
  const src = await readFile(join(root, name), 'utf8');
  if (/\bbehavior\s*:\s*['"]smooth['"]/.test(src)) {
    violations.push(name + ' — nei gestori condivisi dei menu non è ammesso behavior:smooth');
  }
}

if (violations.length) {
  console.error('MENU CON SCORRIMENTO FLUIDO NON AMMESSO (' + violations.length + '):\n' +
    violations.join('\n'));
  process.exitCode = 1;
} else {
  console.log('OK · ' + checked +
    ' file HTML/CSS/JS controllati. Ancore di capitoli e paragrafi senza frenata.');
}
