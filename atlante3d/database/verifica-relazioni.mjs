#!/usr/bin/env node
/**
 * Musurgia Mundi – verifica delle lenti.
 * Uso: node atlante3d/database/verifica-relazioni.mjs
 * Non richiede pacchetti esterni.
 */
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {dirname,join} from 'node:path';

const base=dirname(fileURLToPath(import.meta.url));
const graph=JSON.parse(readFileSync(join(base,'grafo.json'),'utf8'));
const lens=JSON.parse(readFileSync(join(base,'relazioni.json'),'utf8'));
const ids=new Set(graph.nodes.map(n=>n.id));
const groups=new Set((lens.groups||[]).map(g=>g.id));
const errors=[],warnings=[],seen=new Set();
const https=/^https:\/\/[^\s/]+(?:\/.*)?$/i;
for(const r of lens.relations||[]){
 if(!r.id||seen.has(r.id))errors.push('ID relazione duplicato/mancante: '+r.id);
 seen.add(r.id);
 if(!ids.has(r.source)||!ids.has(r.target))errors.push(r.id+': ID nodo sconosciuto');
 if(r.source===r.target)errors.push(r.id+': auto-relazione');
 if(!groups.has(r.group))errors.push(r.id+': lente inesistente');
 if(!r.forward||!r.reverse)errors.push(r.id+': spiegazione direzionale mancante');
 if(!r.kind||!r.note||r.note.length<20)errors.push(r.id+': rapporto non spiegato');
 if(!Array.isArray(r.sources)||!r.sources.some(x=>https.test(x)))errors.push(r.id+': fonte HTTPS assente');
 if(r.group==='famiglia'&&r.kind==='genitore'&&r.forward===r.reverse)errors.push(r.id+': inversione parentela incoerente');
 if(r.status!=='documentato')warnings.push(r.id+': relazione non ancora documentata');
}
for(const n of graph.nodes.filter(n=>n.type==='persona')){
 if(!lens.relations.some(r=>r.source===n.id||r.target===n.id))warnings.push(n.id+': persona senza alcuna lente');
}
console.log('Nodi '+graph.nodes.length+' · Lenti '+groups.size+' · Relazioni '+seen.size);
for(const warning of warnings)console.warn('ATTENZIONE: '+warning);
for(const error of errors)console.error('ERRORE: '+error);
if(errors.length)process.exitCode=1;
else console.log('OK: fonti, etichette, direzionalità e riferimenti strutturalmente verificati.');
