// Gate delle 169 radici dopo tutte le correzioni del 24 novembre.
// Eseguire dalla radice del repository:
// node musurgia-atlantis/audit-integrazione/TEST_169_RADICI_POST_CORREZIONI_2026-11-24.mjs
// Usa 17 JSON effettivi, il builder e il codice HTML; non prova browser/WebGL/Android.
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {dirname,resolve} from "node:path";
import {fileURLToPath} from "node:url";
import {sourcePaths,buildUnifiedDatabase}
 from "./DB_UNIFICATO_MUNDI_ATLANTIS_LOTTO01_2026-11-15.mjs";

const here=dirname(fileURLToPath(import.meta.url));
const rootDir=resolve(here,"../..");
assert.equal(sourcePaths.length,17);
const data=Object.fromEntries(sourcePaths.map(({key,path})=>
 [key,JSON.parse(readFileSync(resolve(rootDir,path),"utf8"))]));
const db=buildUnifiedDatabase(data);
const old=JSON.parse(readFileSync(resolve(here,
 "REGRESSIONE_RICONCILIAZIONE_531_PERSONE_2026-11-21.json"),"utf8"));
assert.equal(db.counts.nodes,2897);
assert.equal(db.counts.links,8743);
assert.equal(db.counts.flaminio_source_records,500);
assert.equal(db.counts.missing_source_rows,0);
assert.equal(db.counts.orphan_links,0);
assert.equal(db.counts.duplicate_link_ids,0);
assert.equal(old.roots.length,169);
const html=readFileSync(resolve(here,"VISTA_DB_FEDERATO_LOTTO01_2026-11-15.html"),"utf8");
const start=html.indexOf("function sonataScopedProjection(");
const end=html.indexOf("function recordNodePosition(",start);
assert.ok(start>=0&&end>start);
const logic=html.slice(start,end);
const cats=new Set(db.nodes.map(n=>n.category));
const lensBucket=e=>["mundi","mundi_extension"].includes(e.layer)?"musica":null;
const oldIDs=new Set(old.records.map(r=>r.root_id+"|"+r.edge_id));
const nowIDs=new Set();
const byCategory={},nodeById=new Map(db.nodes.map(n=>[n.id,n]));
const originalLayers=new Set(["mundi","mundi_extension","atlantis"]);
const bad=/(HOLD|SOSPES|CONTESTAT|REJECTED|STAGING_CANDIDATE_FORM_LINK_NOT_IDENTITY)/i;
const adj=new Map();
for(const e of db.links)for(const id of [e.source,e.target]){
 if(!adj.has(id))adj.set(id,[]);
 adj.get(id).push(e);
}
function project(root,depth=5){
 const state={root,focus:null,trail:[root],trailEdges:[],depth,
   cats,lenses:new Set(["musica","trasmissioni","genealogie","collaborazioni"]),comparison:null};
 const fn=new Function("state","lensBucket","comparisonProjection",
   logic+"\nreturn rootedProjection;")(state,lensBucket,()=>null);
 return fn(db);
}
let rootCount=0;
for(const r of old.roots){
 const view=project(r.id);
 assert.ok(view.nodes.some(n=>n.id===r.id),"Root absent "+r.id);
 rootCount++;
 const visible=new Set(view.links.map(e=>e.id));
 for(const e of adj.get(r.id)||[]){
  if(!originalLayers.has(e.layer)||e.visibility==="documentary"||visible.has(e.id))continue;
  const gate=[e.quality,e.relation,e.original?.relation,e.original?.quality_gate,
    e.original?.status,e.original?.verification_status].filter(Boolean).join(" ");
  if(bad.test(gate))continue;
  const key=r.id+"|"+e.id;
  assert.ok(!nowIDs.has(key),"Duplicate root-edge occurrence "+key);
  nowIDs.add(key);
  const other=e.source===r.id?e.target:e.source;
  const category=nodeById.get(other)?.category||"UNKNOWN";
  byCategory[category]=(byCategory[category]||0)+1;
 }
}
const recovered=old.records.filter(r=>!nowIDs.has(r.root_id+"|"+r.edge_id));
const newlyHidden=[...nowIDs].filter(id=>!oldIDs.has(id));
assert.equal(rootCount,169);
assert.equal(newlyHidden.length,0,"Unexpected newly hidden source edges");
assert.equal(recovered.length,57);
assert.equal(nowIDs.size,647);
assert.equal(byCategory.persone,475);
assert.equal(byCategory.opere,3);
assert.equal(byCategory.generi_forme,33);
assert.equal(byCategory.capitoli,49);
assert.equal(byCategory.eventi,4);
assert.equal(byCategory.concetti,39);
assert.equal(byCategory.reti_culturali,44);
const productionRoles=old.records.filter(r=>
 r.root_id.startsWith("atlantis::produzione:")&&
 ["RUOLO_LETTERARIO_LIBRETTISTICO","RUOLO_SCENICO_STORICO_O_OCCASIONE"].includes(r.preclassification));
assert.equal(productionRoles.length,8);
for(const r of productionRoles)
 assert.ok(!nowIDs.has(r.root_id+"|"+r.edge_id),"Production role hidden: "+r.edge_id);
const bach=project("atlantis::pers:bach");
assert.equal(bach.nodes.length,469);
assert.equal(bach.links.length,470);
console.log("PASS 169 roots; 57 restored, 647 still archived, 475 toward people; production roles 8/8; Bach 469/470.");
