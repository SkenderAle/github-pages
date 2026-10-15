#!/usr/bin/env node
/* Musurgia Mundi — regressione: nessun avvio automatico di audio o video.
   Usa solo Node.js; riproduzione esclusivamente dopo un gesto esplicito. */
import { readdir, readFile } from 'node:fs/promises';
import { resolve, relative, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const ignoreDirs = new Set(['.git', 'node_modules', '.next', 'dist', '.cache']);
const forbidden = [
  ['parametro che forza l’avvio di un embed', /(?:[?&]|&amp;)autoplay\s*=\s*(?:1|true)\b/gi],
  ['permesso autoplay di un iframe', /\ballow\s*=\s*["'][^"']*\bautoplay\b/gi],
  ['attributo autoplay in audio/video HTML', /<(?:audio|video)\b[^>]*\sautoplay(?:\s|>|=)/gi],
  ['attivazione JavaScript di autoplay', /\bautoplay\s*[:=]\s*(?:true|1)\b/gi],
];
let checked = 0;
const violations = [];
async function walk(folder) {
  for (const entry of await readdir(folder, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!ignoreDirs.has(entry.name)) await walk(join(folder, entry.name));
      continue;
    }
    if (!entry.isFile() || !/\.(html|js|mjs)$/i.test(entry.name)) continue;
    const file = join(folder, entry.name);
    if (file === fileURLToPath(import.meta.url)) continue; // i regex stessi contengono le stringhe vietate
    const text = await readFile(file, 'utf8');
    const short = relative(root, file);
    checked++;
    for (const [why, pattern] of forbidden) {
      pattern.lastIndex = 0;
      for (const match of text.matchAll(pattern)) {
        const line = text.slice(0, match.index).split('\n').length;
        violations.push(short + ':' + line + ' — ' + why);
      }
    }
  }
}
await walk(root);
if (violations.length) {
  console.error('AUTOPLAY NON CONSENTITO (' + violations.length + '):\n' + violations.join('\n'));
  process.exitCode = 1;
} else {
  console.log('OK · ' + checked + ' file HTML/JS controllati. Nessun autoplay obbligato o permesso.');
}
