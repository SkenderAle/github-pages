#!/usr/bin/env node
/**
 * Musurgia Mundi — test locale permanente dei rimandi Atlante ↔ pagine.
 * Solo librerie Node.js. Da root: node tools/check-atlante-site-links.mjs
 *
 * Distinguere corrispondenza del modello dati da collaudo DOM/browser:
 * il test valida ID statici e ID dinamici ricostruiti dai cataloghi originali.
 */
import { readFileSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const text = (path) => readFileSync(join(root, path), 'utf8');
const json = (path) => JSON.parse(text(path));
const errors = [];
const htmlCache = new Map();

function html(page) {
  if (!htmlCache.has(page)) htmlCache.set(page, text(page + '/index.html'));
  return htmlCache.get(page);
}
function slug(value) {
  // Identica alla normalizzazione in shared/atlas-anchor-arrival-v1.js.
  return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 125);
}
function jsArray(page, name) {
  const source = html(page);
  const marker = 'const ' + name + '=';
  const index = source.indexOf(marker);
  if (index < 0) throw Error(page + ': non trovo ' + marker);
  const start = source.indexOf('[', index + marker.length);
  if (start < 0) throw Error(page + ': array ' + name + ' non trovato');
  let level = 0, quoted = false, escaped = false;
  for (let pos = start; pos < source.length; pos++) {
    const c = source[pos];
    if (quoted) {
      if (escaped) escaped = false;
      else if (c === '\\') escaped = true;
      else if (c === '"') quoted = false;
    } else {
      if (c === '"') quoted = true;
      else if (c === '[') level++;
      else if (c === ']') {
        level--;
        if (level === 0) return JSON.parse(source.slice(start, pos + 1));
      }
    }
  }
  throw Error(page + ': array ' + name + ' non terminato');
}
function unique(ids, label) {
  const out = new Set();
  for (const id of ids) {
    if (!id) errors.push(label + ': identificativo vuoto');
    if (out.has(id)) errors.push(label + ': ID dinamico duplicato ' + id);
    out.add(id);
  }
  return out;
}
const canto = jsArray('parola-e-canto', 'repertoire');
const camera = jsArray('musica-da-camera', 'works');
const sinfonica = JSON.parse(
  html('dalla-sinfonia-alla-rapsodia').match(
    /<script\s+type="application\/json"\s+id="catalog-data">([\s\S]*?)<\/script>/
  )?.[1] || 'null'
)?.works;
if (!sinfonica) throw Error('Catalogo sinfonico mancante');
const dynamic = {
  'parola-e-canto': unique(canto.map(w => 'mm-opera-canto-' + slug(w[1]) + '-' + slug(w[2])), 'Parola e canto'),
  'musica-da-camera': unique(camera.map(w => 'mm-opera-camera-' + slug(w[3])), 'Musica da camera'),
  'dalla-sinfonia-alla-rapsodia': unique(sinfonica.map(w => w.id), 'Sinfonica')
};
function staticIds(page) {
  const ids = new Set();
  for (const m of html(page).matchAll(/\bid\s*=\s*(["'])([^"']+)\1/g)) ids.add(m[2]);
  return ids;
}
const staticCache = new Map();
const staticFor = page => {
  if (!staticCache.has(page)) staticCache.set(page, staticIds(page));
  return staticCache.get(page);
};

const all = json('atlante3d/database/collegamenti-sito.json');
const byPage = new Map();
let checked = 0, fixed = 0, generated = 0, redirects = 0;
for (const [node, destinations] of Object.entries(all.byNode || {})) {
  if (!Array.isArray(destinations)) {
    errors.push(node + ': lista di destinazioni non valida');
    continue;
  }
  for (const dest of destinations) {
    checked++;
    const match = /^\.\.\/([^/]+)\/#(.+)$/.exec(dest.url || '');
    if (!match) { errors.push(node + ': URL non riconosciuto ' + dest.url); continue; }
    const [, page, encodedAnchor] = match;
    let anchor;
    try { anchor = decodeURIComponent(encodedAnchor); }
    catch { errors.push(node + ': hash non decodificabile ' + dest.url); continue; }
    const target = page === 'post-romanticismo' ? 'verso-le-avanguardie' : page;
    if (page === 'post-romanticismo') {
      const redirect = html('post-romanticismo');
      if (!redirect.includes('location.search+location.hash')) {
        errors.push('Redirect post-romanticismo: parametro/hash non conservato');
      }
      redirects++;
    }
    const stats = byPage.get(page) || { references: 0, static: 0, dynamic: 0 };
    stats.references++;
    if (staticFor(target).has(anchor)) { fixed++; stats.static++; }
    else if (dynamic[page]?.has(anchor)) { generated++; stats.dynamic++; }
    else errors.push(node + ': destinazione assente ' + dest.url);
    byPage.set(page, stats);
  }
}
console.log('Musurgia Mundi — audit Atlante → pagine');
console.log('Rimandi: ' + checked + ', ancore HTML: ' + fixed +
            ', ID generati dal modello: ' + generated +
            ', redirect storici: ' + redirects + ', errori: ' + errors.length);
for (const [page, row] of [...byPage].sort((a,b) => a[0].localeCompare(b[0]))) {
  console.log('  ' + page + ': ' + row.references + ' (' +
              row.static + ' HTML, ' + row.dynamic + ' dinamici)');
}
if (errors.length) {
  for (const e of errors.slice(0, 80)) console.error('ERRORE: ' + e);
  if (errors.length > 80) console.error('... altre anomalie: ' + (errors.length - 80));
  process.exitCode = 1;
} else {
  console.log('OK: riferimenti verificati contro le ancore statiche e i dati dei cataloghi.');
  console.log('Il test NON attesta il caricamento reale, lo scroll, i media o la visibilità sul browser.');
}
