#!/usr/bin/env node
/**
 * Musurgia Mundi — audit delle ancore interne ai percorsi principali.
 * Eseguire: node tools/check-page-deeplinks.mjs
 * Controllo statico: non sostituisce il collaudo browser o delle API esterne.
 */
import { readFileSync } from 'node:fs';
import { resolve, join, posix } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const sourcePages = [
  'index.html', 'medioevo/index.html', 'rinascimento/index.html',
  'barocco/index.html', 'classicismo/index.html', 'romanticismo/index.html',
  'melodramma/index.html', 'melodramma-classico/index.html',
  'anatomia-del-melodramma/index.html', 'musica-da-camera/index.html',
  'dalla-sinfonia-alla-rapsodia/index.html', 'parola-e-canto/index.html',
  'concerti/index.html', 'risorgimento/index.html',
  'dal-musical-al-film/index.html', 'opera-lirica/index.html'
];
const cached = new Map(), idCache = new Map(), failures = [];
function content(path) {
  if (!cached.has(path)) cached.set(path, readFileSync(join(root,path),'utf8'));
  return cached.get(path);
}
function ids(path) {
  if (!idCache.has(path)) {
    idCache.set(path,new Set([...content(path).matchAll(/\bid\s*=\s*(["'])([^"']+)\1/g)].map(x=>x[2])));
  }
  return idCache.get(path);
}
function target(from, href) {
  if (!href || /^(mailto:|tel:|javascript:|data:|blob:|\/\/)/i.test(href)) return null;
  let link = href;
  if (/^https?:\/\//i.test(link)) {
    const url = new URL(link);
    if (url.host !== 'skenderale.github.io' || !url.pathname.startsWith('/github-pages/')) return null;
    link = url.pathname.replace(/^\/github-pages\//,'/') + url.hash;
  }
  const split = link.split('#');
  if (split.length < 2 || !split[1]) return null;
  const relative = split[0].split('?')[0].replace(/^\/github-pages\//,'/');
  const unresolved = relative.startsWith('/') ? relative.slice(1) : posix.join(posix.dirname(from),relative);
  let page = posix.normalize(unresolved);
  if (!page || page.endsWith('/')) page += 'index.html';
  if (!page.endsWith('.html')) page = page.replace(/\/?$/, '/') + 'index.html';
  return { page, id: decodeURIComponent(split.slice(1).join('#')) };
}
function generatedGuide(id) {
  if (!id.startsWith('guida-')) return false;
  const key = id.slice('guida-'.length);
  if (!/^[A-Za-z0-9_-]+$/.test(key)) return false;
  return content('musica-da-camera/index.html').includes('"' + key + '":{');
}
let checked=0,valid=0,dynamic=0,redirects=0;
for (const from of sourcePages) {
  const html = content(from);
  for (const found of html.matchAll(/\bhref\s*=\s*(["'])(.*?)\1/gi)) {
    let loc;
    try { loc = target(from,found[2]); }
    catch (err) { failures.push(from + ': URL non valido ' + found[2]); continue; }
    if (!loc) continue;
    checked++;
    if (loc.page === 'post-romanticismo/index.html') {
      if (!content(loc.page).includes('location.search+location.hash')) {
        failures.push(from + ': redirect non conserva il segnalibro: ' + found[2]);
        continue;
      }
      loc.page='verso-le-avanguardie/index.html';
      redirects++;
    }
    try {
      if (ids(loc.page).has(loc.id)) valid++;
      else if (loc.page === 'musica-da-camera/index.html' && generatedGuide(loc.id)) dynamic++;
      else failures.push(from + ': ancora assente: ' + found[2]);
    } catch (err) {
      failures.push(from + ': pagina non trovata: ' + found[2]);
    }
  }
}
console.log('Musurgia Mundi — ' + sourcePages.length +
  ' pagine principali, ' + checked + ' deep link, ' + valid +
  ' ancore statiche, ' + dynamic + ' guide dinamiche, ' +
  redirects + ' redirect storici, ' + failures.length + ' errori.');
for (const message of failures.slice(0,75)) console.error('ERRORE: ' + message);
if (failures.length > 75) console.error('Altri errori: ' + (failures.length - 75));
if (failures.length) process.exitCode=1;
else console.log('OK. Restano necessari test visuali e di caricamento delle risorse esterne.');
