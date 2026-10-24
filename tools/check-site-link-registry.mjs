#!/usr/bin/env node
/* Musurgia Mundi — controllo di coerenza del registro Atlante ⇄ percorsi.
   Eseguire dalla radice: node tools/check-site-link-registry.mjs.
   Non attribuisce automaticamente nodi, opere o relazioni storiche.
*/
import {readFileSync} from 'node:fs';
import {resolve,join} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=resolve(fileURLToPath(new URL('..',import.meta.url)));
const path=join(root,'atlante3d/database/collegamenti-sito.json');
const db=JSON.parse(readFileSync(path,'utf8'));
const issues=[];
const activeKeys=new Set(),pendingKeys=new Set();
const counts={active:0,pending:0,activeNodes:0,emptyNodes:0,duplicateActive:0,duplicatePending:0,overlap:0};
for(const [node,links] of Object.entries(db.byNode||{})){
 if(!Array.isArray(links)){issues.push('Lista attiva non valida: '+node);continue;}
 if(links.length)counts.activeNodes++;else counts.emptyNodes++;
 for(const item of links){
  counts.active++;
  const k=node+'|'+item.url;
  if(activeKeys.has(k)){counts.duplicateActive++;issues.push('Link attivo duplicato: '+k)}
  activeKeys.add(k);
  if(!item.url||!item.url.startsWith('../')||!item.url.includes('/#'))
   issues.push('Link attivo malformato: '+k);
 }
}
for(const item of db.pendingReview||[]){
 counts.pending++;
 const k=item.node_id+'|'+item.url;
 if(pendingKeys.has(k)){counts.duplicatePending++;issues.push('Riserva duplicata: '+k)}
 pendingKeys.add(k);
 if(!Object.hasOwn(db.byNode||{},item.node_id))issues.push('Nodo sospeso sconosciuto: '+k);
 if(!item.reason||typeof item.reason!=='string')issues.push('Motivo di riserva assente: '+k);
 if(activeKeys.has(k)){counts.overlap++;issues.push('Riserva già attiva: '+k)}
}
if(counts.pending!==db.validation?.pending_review)
 issues.push('Conteggio pendingReview incoerente: '+counts.pending+' elementi contro '+db.validation?.pending_review+' dichiarati');
if(!db.updated)issues.push('Data del registro non indicata');
console.log('Musurgia Mundi · registro collegamenti-sito');
console.log('Nodi censiti: '+Object.keys(db.byNode||{}).length+
  ', con rimandi: '+counts.activeNodes+', senza: '+counts.emptyNodes);
console.log('Rimandi attivi: '+counts.active+', sospesi: '+counts.pending+
  ', duplicati attivi/sospesi: '+counts.duplicateActive+'/'+counts.duplicatePending+
  ', presenti in entrambe le liste: '+counts.overlap);
if(issues.length){
 for(const msg of issues.slice(0,70))console.error('ERRORE: '+msg);
 if(issues.length>70)console.error('... altre anomalie: '+(issues.length-70));
 process.exitCode=1;
}else{
 console.log('OK · Tutte le riserve sono isolate dalle destinazioni pubblicate; nessuna promozione automatica.');
}
