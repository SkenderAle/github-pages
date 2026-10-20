#!/usr/bin/env node
/** Musurgia Mundi — audit semantico scuole del 20 ottobre 2026.
 * Controllo di integrità e regressione: non certifica filologicamente
 * l'intero catalogo di appartenenze storiche.
 */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const base = dirname(fileURLToPath(import.meta.url));
const graph = JSON.parse(readFileSync(join(base, 'grafo.json'), 'utf8'));
const data = JSON.parse(readFileSync(join(base, 'relazioni.json'), 'utf8'));
const nodes = new Set(graph.nodes.map(n => n.id));
const relations = data.relations;
const errors = [];
const archived = data.semantic_school_audit_20261020;
const groups = {scuole:392, formazione:233, influenze:186, genealogie:303, collaborazioni:274};
const counts = {};
const ids = new Set();
const schoolPairs = new Set();
for (const e of relations) {
  counts[e.group] = (counts[e.group] || 0) + 1;
  if (ids.has(e.id)) errors.push('ID relazione duplicato: ' + e.id);
  ids.add(e.id);
  if (!nodes.has(e.source) || !nodes.has(e.target))
    errors.push('Relazione con estremo inesistente: ' + e.id);
  if (!e.kind || !e.forward || !e.reverse || !e.note || !Array.isArray(e.sources) || !e.sources.length)
    errors.push('Relazione con semantica o fonti mancanti: ' + e.id);
  if (e.group === 'scuole') {
    const key = [e.source, e.target].sort().join(' | ');
    if (schoolPairs.has(key)) errors.push('Coppia scolastica duplicata: ' + key);
    schoolPairs.add(key);
  }
  if (e.semantic_review?.date === '2026-10-20') {
    if (!e.natura_semantica || !e.semantic_review.prior_forward ||
        !e.semantic_review.prior_reverse || e.semantic_review.prior_status !== e.status)
      errors.push('Tracciabilità semantica incompleta: ' + e.id);
    if (e.forward === 'include fra i protagonisti' ||
        e.reverse === 'partecipa alla tradizione di')
      errors.push('Frase generica ripristinata: ' + e.id);
  }
}
for (const [group, minimum] of Object.entries(groups))
  if ((counts[group] || 0) < minimum)
    errors.push('Regressione della lente ' + group + ': ' + counts[group] + ' < ' + minimum);
const reviewed = relations.filter(e => e.semantic_review?.date === '2026-10-20');
if (reviewed.length < 96) errors.push('Attese almeno 96 formulazioni controllate, trovate ' + reviewed.length);
const secondBatch = relations.filter(e => e.semantic_review?.review_batch === 'scuole-lotto2-20261020');
if (secondBatch.length < 64 || data.semantic_school_audit_lotto2_20261020?.semantics_precised !== 64)
  errors.push('Secondo lotto semantico scuole non integro: ' + secondBatch.length);
for (const e of secondBatch)
  if (!e.natura_semantica || !e.semantic_review.prior_forward ||
      !e.semantic_review.prior_reverse || !e.sources?.length)
    errors.push('Tracciabilità del secondo lotto mancante: ' + e.id);
const thirdBatch=relations.filter(e=>e.semantic_review?.review_batch === 'scuole-lotto3-20261020');
if (thirdBatch.length < 111 || data.semantic_school_audit_lotto3_20261020?.semantics_precised !== 111)
  errors.push('Lotto semantico III incompleto: ' + thirdBatch.length);
const reviewedTotal=relations.filter(e=>e.group === 'scuole' && e.semantic_review).length;
if (reviewedTotal < 207) errors.push('Regressione numero di relazioni semantiche revisionate: ' + reviewedTotal);
for (const e of thirdBatch) {
 if (!e.natura_semantica || !e.semantic_review.prior_forward ||
     !e.semantic_review.prior_reverse || e.semantic_review.prior_status !== e.status ||
     !e.sources?.length || !e.note)
   errors.push('Tracciabilità del lotto III: ' + e.id);
}
const bachGrosso = graph.edges.find(e => e.source === 'compositore-johann-sebastian-bach' && e.target === 'forma-concerto-grosso');
if (!bachGrosso?.catalogue_review?.reviewed || 
    bachGrosso.evidence_status !== 'opera-verificata-con-qualificazione-tipologica' ||
    !bachGrosso.catalogue_review.work_level_sources?.length ||
    !/BWV 1046/.test(bachGrosso.note) || !/BWV 1051/.test(bachGrosso.note))
  errors.push('Rischio regressione: Bach e i Brandeburghesi nel concerto grosso');
const obsolete = [
  'lotto02-sc-boccherini-italy',
  'daily01-bridge-british',
  'catalogo-riforma-operistica-gluck-niccolo-piccinni'
];
for (const id of obsolete) if (ids.has(id)) errors.push('Legame scolastico improprio riattivato: ' + id);
if (!archived || archived.removed_as_active_school_relations?.length !== 3 ||
    archived.phrases_precised !== 32)
  errors.push('Archivio revisioni scuola mancante o incompleto');
else for (const id of obsolete) {
  const found = archived.removed_as_active_school_relations.find(x=>x.id === id);
  if (!found?.original_record?.sources?.length || !found?.reason || !found?.preserved_by?.length)
    errors.push('Documentazione del ritiro mancante: ' + id);
}
const required = ['audit8c-bridge-britten', 'audit09-bridge-britten-variations',
 'audit4-britten-opera-inglese', 'lotto02-sc-boccherini-chamber',
 'lotto02-sc-boccherini-madrid', 'lotto06-gluck-piccinni-querelle',
 'scuola-napoletana-niccolo-piccinni'];
for (const id of required) if (!ids.has(id))
  errors.push('Perdita del percorso storico alternativo: ' + id);
console.log('Scuole:', counts.scuole, '· relazioni totali:', relations.length);
console.log('Formulazioni chiarite:', reviewed.length, '· relazioni archiviate:', obsolete.length);
if (errors.length) {
  for (const message of errors) console.error('ERRORE:', message);
  process.exit(1);
}
console.log('Controllo di integrità e regressione semantica: OK.');
