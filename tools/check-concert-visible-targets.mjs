#!/usr/bin/env node
/**
 * Musurgia Mundi — impedisce rimandi Atlante a schede dell'archivio nascosto.
 * node tools/check-concert-visible-targets.mjs
 * Non attesta che YouTube o siti esterni siano raggiungibili.
 */
import {readFileSync} from 'node:fs';
import {resolve,join} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=resolve(fileURLToPath(new URL('..',import.meta.url)));
const html=readFileSync(join(root,'concerti/index.html'),'utf8');
const registry=JSON.parse(readFileSync(join(root,'atlante3d/database/collegamenti-sito.json'),'utf8'));
const beginning=html.indexOf('<div id="archivio-schede-sorgente"');
if(beginning<0)throw Error('Archivio storico non individuato: aggiornare il test, non ignorare il controllo');
const closeOfTag=html.indexOf('>',beginning)+1;
let depth=1,archiveEnd=-1;
for(const tag of html.slice(closeOfTag).matchAll(/<\/?div\b[^>]*>/gi)){
  depth+=tag[0].startsWith('</')?-1:1;
  if(depth===0){archiveEnd=closeOfTag+tag.index+tag[0].length;break;}
}
if(archiveEnd<0)throw Error('Archivio storico non chiuso');
const ids=new Map(),dups=new Set();
for(const m of html.matchAll(/\bid\s*=\s*(["'])([^"']+)\1/g)){
  if(ids.has(m[2]))dups.add(m[2]);
  else ids.set(m[2],m.index);
}
const problems=[],checked=[];
for(const [node,links] of Object.entries(registry.byNode||{})){
  for(const item of links){
    if(!item.url?.startsWith('../concerti/#'))continue;
    const raw=item.url.slice('../concerti/#'.length);
    let id;try{id=decodeURIComponent(raw)}catch{problems.push(node+': hash non valido '+raw);continue;}
    checked.push(id);
    if(!ids.has(id)){problems.push(node+': manca l’ID '+id);continue;}
    const at=ids.get(id);
    if(at>=beginning&&at<archiveEnd)problems.push(node+': ancora NASCOSTA '+id);
    if(dups.has(id))problems.push(node+': ID duplicato '+id);
  }
}
console.log('Musurgia Mundi · Concerti: '+checked.length+' rimandi attivi, '+
  ids.size+' ID nel documento, '+problems.length+' errori');
console.log('Archivio nascosto: caratteri '+beginning+'–'+archiveEnd+'; nessun rimando attivo può cadervi.');
if(problems.length){
  for(const msg of problems.slice(0,80))console.error('ERRORE: '+msg);
  if(problems.length>80)console.error('Altre anomalie: '+(problems.length-80));
  process.exitCode=1;
}else console.log('OK: tutte le ancore dei Concerti usate dall’Atlante esistono fuori dall’archivio nascosto.');
