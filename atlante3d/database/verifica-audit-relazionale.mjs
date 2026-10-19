#!/usr/bin/env node
/**
 * Musurgia Mundi — controllo strutturale dell'audit inverso.
 * Esecuzione: node atlante3d/database/verifica-audit-relazionale.mjs
 * Nessuna dipendenza esterna. I controlli automatici NON attestano la verità musicologica.
 */
import {readFileSync} from 'node:fs';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';

const base = dirname(fileURLToPath(import.meta.url));
const graph = JSON.parse(readFileSync(join(base, 'grafo.json'), 'utf8'));
const nodes = graph.nodes || [];
const edges = graph.edges || [];
const byId = new Map(nodes.map(n => [n.id, n]));
const errors = [];
const warnings = [];
const categories = {
  'genere-messa': 27,
  'genere-cantata': 14,
  'genere-oratorio': 15,
  'genere-mottetto': 22,
  'genere-quartetto-archi': 27,
  'genere-suite': 17,
  'forma-fuga': 15,
  'forma-variazioni': 22,
  'genere-balletto': 20
};
const checks = Object.keys(categories);
const isComposer = id => byId.get(id)?.type === 'compositore';
const isCategory = id => byId.get(id)?.type === 'corrente';
const hasPair = (a, b) => edges.some(e =>
  (e.source === a && e.target === b) || (e.source === b && e.target === a));

if (byId.size !== nodes.length) errors.push('Identificativi dei nodi ripetuti');
for (const n of nodes) if (!n.id || !n.label) errors.push('Nodo privo di ID o etichetta: ' + String(n.id));
const pairSeen = new Set();
for (const e of edges) {
  if (!byId.has(e.source) || !byId.has(e.target))
    errors.push('Arco con estremo inesistente: ' + e.source + ' -> ' + e.target);
  if (isComposer(e.source) && isCategory(e.target) || isComposer(e.target) && isCategory(e.source)) {
    const key = [e.source, e.target].sort().join(' | ');
    if (pairSeen.has(key)) errors.push('Arco compositore/categoria duplicato: ' + key);
    pairSeen.add(key);
  }
  if (e.audit_category === 'audit-inverso-consolidamento' &&
      (!Array.isArray(e.sources) || !e.sources.some(s => /^https:\/\/[^\s]+$/.test(s)) ||
       typeof e.note !== 'string' || e.note.length < 35))
    errors.push('Evidenza del consolidamento mancante: ' + e.source + ' -> ' + e.target);
}
for (const [id, minimum] of Object.entries(categories)) {
  if (!isCategory(id)) {errors.push('Categoria mancante: ' + id); continue;}
  const count = edges.filter(e =>
    (e.source === id && isComposer(e.target)) || (e.target === id && isComposer(e.source))).length;
  if (count < minimum) errors.push('Regressione ' + id + ': ' + count + ' invece di almeno ' + minimum);
  console.log(id + ': ' + count + ' compositori con arco diretto');
}
const composers = nodes.filter(n => n.type === 'compositore');
const works = nodes.filter(n => n.work_archive?.kind === 'opera-specifica');
const documents = nodes.filter(n => n.document_archive?.presentation === 'scheda');
for (const work of works) {
  const author = work.work_archive.composer_id;
  if (!isComposer(author)) errors.push('Autore archivistico inesistente: ' + work.id + ' -> ' + author);
  for (const id of checks) if (hasPair(work.id, id) && !hasPair(author, id))
    errors.push('Genere di opera non navigabile da compositore: ' + work.id + ' / ' + id + ' / ' + author);
}
for (const document of documents)
  for (const contact of document.document_archive.contacts || [])
    if (!byId.has(contact.node_id) || !contact.role)
      errors.push('Contatto archivistico invalido: ' + document.id);
if (hasPair('compositore-pierre-henry', 'genere-messa'))
  errors.push('Pierre Henry / Messe pour le temps présent: falsa messa liturgica');
if (!hasPair('compositore-pierre-henry', 'genere-balletto'))
  errors.push('Perdita del collegamento coreografico di Pierre Henry');
if (!hasPair('compositore-horatio-parker', 'genere-oratorio'))
  errors.push('Parker / Hora novissima scollegati dall’oratorio');
if (!hasPair('compositore-giacomo-antonio-perti', 'genere-oratorio'))
  errors.push('Perti / repertorio oratoriale scollegati');
if (composers.length < 393 || works.length < 52 || documents.length < 21)
  errors.push('Regressione del catalogo di autori o schede archiviate');
// Qualità dell'evidenza editoriale: non scambiare la fonte genericamente biografica
// per la prova del singolo titolo catalografico già sottoposto alla seconda passata.
const workReviewed = edges.filter(e => e.catalogue_review?.reviewed === '2026-10-19');
for (const e of workReviewed) {
  const review=e.catalogue_review;
  if (!Array.isArray(review.work_level_sources) || !review.work_level_sources.length ||
      review.work_level_sources.some(url=>!/^https:\/\/[^\s/]+(?:\/|$)/.test(url)) ||
      !Array.isArray(review.prior_sources) || typeof review.prior_note !== 'string' ||
      !review.review_status || e.evidence_status!==review.review_status)
    errors.push('Verifica filologica con dati mancanti: ' + e.source + ' -> ' + e.target);
  if (!review.work_level_sources.every(url => (e.sources||[]).includes(url)))
    errors.push('Fonte puntuale persa: ' + e.source + ' -> ' + e.target);
}
if (workReviewed.length < 16) errors.push('Regressione seconda passata filologica: ' + workReviewed.length + ' archi verificati invece di almeno 16');
const noCategory = composers.filter(n => !edges.some(e =>
  (e.source === n.id && isCategory(e.target)) ||
  (e.target === n.id && isCategory(e.source))));
if (noCategory.length) warnings.push(noCategory.length +
  ' musicisti senza categoria diretta: non inventare collegamenti per eliminare l’avviso');
console.log('Nodi: ' + nodes.length + ' | Compositori: ' + composers.length +
  ' | Archi: ' + edges.length + ' | Opere archiviate: ' + works.length +
  ' | Documenti: ' + documents.length);
for (const w of warnings) console.warn('AVVISO: ' + w);
for (const err of errors) console.error('ERRORE: ' + err);
if (errors.length) process.exitCode = 1;
else console.log('OK strutturale: nove categorie, archivi, duplicati e vincoli storici controllati.');
console.log('Limite: attendibilità delle singole fonti, qualità dei titoli e navigazione browser richiedono audit manuale.');
