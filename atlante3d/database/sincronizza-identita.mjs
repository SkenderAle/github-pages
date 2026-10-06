#!/usr/bin/env node
/* Aggiorna l'indice esterno ogni volta che entra un nuovo compositore.
 * node atlante3d/database/sincronizza-identita.mjs --check
 * node atlante3d/database/sincronizza-identita.mjs --write --new-ids=output/nuovi.json
 * Mantiene i QID/MBID verificati, mai li sostituisce con risultati automatici.
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
const graph=JSON.parse(fs.readFileSync(path.join(root,'grafo.json'),'utf8'));
const relations=JSON.parse(fs.readFileSync(path.join(root,'relazioni.json'),'utf8'));
const file=path.join(root,'identita-esterne.json');
const ledger=JSON.parse(fs.readFileSync(file,'utf8'));
const args=process.argv.slice(2),write=args.includes('--write'),check=args.includes('--check');
const newOutput=args.find(a=>a.startsWith('--new-ids='))?.split('=').slice(1).join('=')||null;
const existing=new Map(ledger.items.map(e=>[e.id,e]));
const oldIds=new Set(existing.keys());
const next=graph.nodes.filter(n=>n.type==='compositore').map(n=>{
 const saved=existing.get(n.id)||{};
 const matched=relations.relations.filter(r=>r.source===n.id||r.target===n.id);
 const audit=Object.fromEntries(['scuole','formazione','influenze','genealogie','collaborazioni'].map(g=>[g,matched.filter(r=>r.group===g).length]));
 return {...saved,id:n.id,label:n.label,aliases:n.aliases||[],
  wikidata_id:saved.wikidata_id||null,musicbrainz_id:saved.musicbrainz_id||null,
  identity_status:saved.identity_status||'da-riconciliare',
  identity_sources:saved.identity_sources||[],audit};
});
const created=next.filter(n=>!oldIds.has(n.id)).map(n=>n.id);
const retired=ledger.items.filter(e=>!next.some(n=>n.id===e.id));
const stale=next.some(x=>JSON.stringify(existing.get(x.id)||null)!==JSON.stringify(x))||retired.length>0;
const news={generated:new Date().toISOString(),composers:created};
if(newOutput){fs.mkdirSync(path.dirname(path.resolve(newOutput)),{recursive:true});fs.writeFileSync(newOutput,JSON.stringify(news,null,2)+'\n');}
if(write){
 ledger.items=next;ledger.updated=new Date().toISOString().slice(0,10);
 if(retired.length)ledger.retired=[...(ledger.retired||[]),...retired];
 fs.writeFileSync(file,JSON.stringify(ledger,null,2)+'\n');
}
console.log(JSON.stringify({composers:next.length,created,retired:retired.map(x=>x.id),needs_sync:stale,write}));
if(check&&stale){console.error('Registro identità non sincronizzato: eseguire --write, revisionare e committare.');process.exitCode=1;}
