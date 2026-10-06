// node atlante3d/database/verifica-nomi.mjs [database-attuale.json] [database-precedente.json]
import fs from "node:fs";
const currentFile=process.argv[2]||"atlante3d/database/grafo.json";
const d=JSON.parse(fs.readFileSync(currentFile,"utf8"));
const previous=process.argv[3]?JSON.parse(fs.readFileSync(process.argv[3],"utf8")):null;
const originalIds=new Set(previous?.nodes?.map(n=>n.id)||[]);
const composers=d.nodes.filter(n=>n.type==="compositore");
const ids=new Set(d.nodes.map(n=>n.id));
const errors=[],warnings=[],names=new Map();
function norm(t){return String(t).normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[ł]/g,"l").replace(/ß/g,"ss").replace(/[ʹʺ'’ʼ`´]/g,"").replace(/[^\p{L}\p{N}]+/gu," ").trim();}
for(const n of composers){
 if(!Array.isArray(n.aliases))errors.push(n.id+": aliases deve essere un array");
 if(!n.name_review||!Array.isArray(n.name_review.sources))errors.push(n.id+": manca name_review.sources");
 if(previous&&!originalIds.has(n.id)){
  if(n.name_review?.status!=="verificato"||!n.name_review?.sources?.some(url=>/^https:\/\//.test(url)))errors.push(n.id+": NUOVO compositore privo di verifica bibliografica con fonte");
 }
 if(n.name_review?.status!=="verificato")warnings.push(n.id+": catalogazione onomastica ancora da verificare");
 for(const name of [n.label,...(n.aliases||[])]){
  const key=norm(name);if(!key)continue;
  if(names.has(key)&&names.get(key)!==n.id)errors.push("Alias ambiguo "+JSON.stringify(name)+": "+names.get(key)+" / "+n.id);
  names.set(key,n.id);
 }
}
for(const e of d.edges)if(!ids.has(e.source)||!ids.has(e.target))errors.push("Arco verso nodo inesistente: "+e.source+" / "+e.target);
for(const [former,canonical] of Object.entries(d.legacy_node_ids||{}))if(!ids.has(canonical))errors.push("Alias storico senza ID: "+former);
console.log(composers.length+" compositori, "+names.size+" denominazioni indicizzate, "+warnings.length+" schede da verificare, "+errors.length+" errori.");
if(warnings.length)console.log("Nota: le schede storiche da verificare non impediscono il rilascio, ma i nuovi ingressi sì.");
if(errors.length){console.error(errors.join("\n"));process.exitCode=1;}
