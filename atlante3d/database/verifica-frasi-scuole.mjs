#!/usr/bin/env node
/**
 * Musurgia Mundi — controllo delle 784 frasi effettivamente generate dalla lente Scuole.
 * Usa la funzione relationSentence dell'applicazione, non una sua imitazione.
 * node atlante3d/database/verifica-frasi-scuole.mjs [--tsv]
 * Solo lettura: non altera il grafo o le relazioni.
 */
import {readFileSync,writeFileSync} from 'node:fs';
import {dirname,join} from 'node:path';
import {fileURLToPath} from 'node:url';
const base=dirname(fileURLToPath(import.meta.url));
const grafo=JSON.parse(readFileSync(join(base,'grafo.json'),'utf8'));
const relazioni=JSON.parse(readFileSync(join(base,'relazioni.json'),'utf8'));
const byId=new Map(grafo.nodes.map(n=>[n.id,n]));
const file=readFileSync(join(base,'../app-livelli.js'),'utf8');
const start=file.indexOf('function relationSentence(');
const stop=file.indexOf('function dedupeEdges(',start);
if(start<0||stop<start)throw Error('Funzione relationSentence non trovata');
const sentence=new Function('byId',file.slice(start,stop)+'\nreturn relationSentence;')(byId);
const scuole=relazioni.relations.filter(e=>e.group==='scuole'&&e.status==='documentato');
const rows=[['id','direzione','soggetto','oggetto','frase','segnalazioni']];
const problems=[];
let incomplete=0;
for(const e of scuole)for(const reverse of [false,true]){
 const subject=byId.get(reverse?e.target:e.source)?.label;
 const object=byId.get(reverse?e.source:e.target)?.label;
 const phrase=sentence(e,reverse?e.target:e.source);
 const flags=[];
 if(!subject||!object)flags.push('etichetta assente');
 if(!e.forward?.trim()||!e.reverse?.trim())flags.push('frammento assente');
 if(!phrase?.trim())flags.push('frase assente');
 if(/\bdi\s+Scuola\b/.test(phrase))flags.push('preposizione non articolata');
 if(/\.\./.test(phrase))flags.push('punto doppio');
 if(flags.length){incomplete++;problems.push(e.id+' '+(reverse?'reverse':'forward')+': '+flags.join(', '));}
 rows.push([e.id,reverse?'reverse':'forward',subject||'',object||'',phrase||'',flags.join('; ')]);
}
console.log('Scuole:',scuole.length,'· frasi:',rows.length-1,'· anomalie strutturali:',incomplete);
for(const line of problems.slice(0,30))console.error('ANOMALIA:',line);
if(process.argv.includes('--tsv')){
 const clean=x=>String(x??'').replace(/[\r\n\t]+/g,' ').trim();
 writeFileSync('audit-frasi-scuole.tsv',rows.map(r=>r.map(clean).join('\t')).join('\n')+'\n');
 console.log('Report: audit-frasi-scuole.tsv');
}
if(scuole.length!==392||rows.length!==785||incomplete)process.exitCode=1;
