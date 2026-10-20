#!/usr/bin/env node
/** Musurgia Mundi — audit riproducibile della lente Formazione.
 * node atlante3d/database/verifica-audit-formazione.mjs [--tsv]
 * Controlla la struttura; NON certifica la verità storico-musicologica.
 */
import {readFileSync,writeFileSync} from 'node:fs';
import {join,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
const base=dirname(fileURLToPath(import.meta.url));
const db=JSON.parse(readFileSync(join(base,'relazioni.json'),'utf8'));
const g=JSON.parse(readFileSync(join(base,'grafo.json'),'utf8'));
const byId=new Map(g.nodes.map(n=>[n.id,n]));
const names=new Map(g.nodes.map(n=>[n.id,n.label]));
// La funzione usata dall'app evita divergenze rispetto alla lettura grafica.
const app=readFileSync(join(base,'../app-livelli.js'),'utf8');
const start=app.indexOf('function relationSentence(');
const stop=app.indexOf('function dedupeEdges(',start);
if(start<0||stop<start)throw Error('relationSentence non trovata');
const sentence=new Function('byId',app.slice(start,stop)+'\nreturn relationSentence;')(byId);
const items=db.relations.filter(e=>e.group==='formazione');
const errors=[],rows=[['id','direzione','frase','qualificazione']];
const reviewed=items.filter(e=>e.formation_review?.date==='2026-10-20');
for(const e of items){
 if(!e.sources?.length||!names.has(e.source)||!names.has(e.target)||!e.forward?.trim()||!e.reverse?.trim())errors.push('Incompleto: '+e.id);
 const v=e.formation_review;
 if(v){
  if(v.scope==='redazione-da-note'&&(!v.prior_forward||!v.prior_reverse))errors.push('Cronologia editoriale incompleta: '+e.id);
  if(v.scope==='rafforzamento-fonti'&&(!v.prior_sources?.length||e.sources.length<=v.prior_sources.length))errors.push('Fonti integrative assenti: '+e.id);
  if(v.scope==='qualificazione-epistemica'&&(!v.evidence||!v.limit||!v.mode))errors.push('Qualificazione assente: '+e.id);
 }
 const subject=names.get(e.source),object=names.get(e.target);
 for(const [dir,phrase] of [
  ['forward',sentence(e,e.source)],
  ['reverse',sentence(e,e.target)]
 ]){
  if(/\.\.|\bundefined\b/.test(phrase))errors.push('Frase malformata: '+e.id+'/'+dir);
  rows.push([e.id,dir,phrase,v?.mode||v?.scope||'']);
 }
}
if(items.length!==233)errors.push('Regressione: attese 233 relazioni di formazione');
if(reviewed.length!==45)errors.push('Regressione: attesi 45 record del primo lotto');
const scopes={};for(const e of reviewed)scopes[e.formation_review.scope]=(scopes[e.formation_review.scope]||0)+1;
for(const [type,n] of [['redazione-da-note',31],['qualificazione-epistemica',11],['rafforzamento-fonti',3]])
 if(scopes[type]!==n)errors.push('Regressione lotto '+type+': '+scopes[type]+' invece di '+n);
console.log('Formazione:',items.length,'· frasi:',rows.length-1,'· revisionati nel lotto:',reviewed.length,'· errori:',errors.length);
for(const error of errors.slice(0,25))console.error('ERRORE:',error);
if(process.argv.includes('--tsv')){
 const clean=x=>String(x??'').replace(/[\r\n\t]+/g,' ').trim();
 writeFileSync('audit-frasi-formazione.tsv',rows.map(r=>r.map(clean).join('\t')).join('\n')+'\n');
}
if(errors.length)process.exitCode=1;
