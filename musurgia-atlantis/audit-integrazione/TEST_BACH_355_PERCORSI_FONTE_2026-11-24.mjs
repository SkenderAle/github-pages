// Regression gate on the actual 17-source Bach rooted projection.
// Run from the repository root:
// node musurgia-atlantis/audit-integrazione/TEST_BACH_355_PERCORSI_FONTE_2026-11-24.mjs
// Does not certify Bach's authorship externally; no DOM/WebGL/Android.
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {dirname,resolve} from "node:path";
import {fileURLToPath} from "node:url";
import {sourcePaths,buildUnifiedDatabase} from "./DB_UNIFICATO_MUNDI_ATLANTIS_LOTTO01_2026-11-15.mjs";
const here=dirname(fileURLToPath(import.meta.url));
const rootDir=resolve(here,"../..");
assert.equal(sourcePaths.length,17);
const inputs=Object.fromEntries(sourcePaths.map(({key,path})=>
 [key,JSON.parse(readFileSync(resolve(rootDir,path),"utf8"))]));
const db=buildUnifiedDatabase(inputs);
assert.equal(db.counts.nodes,2897);
assert.equal(db.counts.links,8743);
assert.equal(db.counts.flaminio_source_records,500);
assert.equal(db.counts.orphan_links,0);
assert.equal(db.counts.duplicate_link_ids,0);
const html=readFileSync(resolve(here,"VISTA_DB_FEDERATO_LOTTO01_2026-11-15.html"),"utf8");
const start=html.indexOf("function sonataScopedProjection(");
const end=html.indexOf("function recordNodePosition(",start);
assert.ok(start>=0&&end>start,"Missing HTML rooted projection");
const logic=html.slice(start,end);
const categories=new Set(db.nodes.map(n=>n.category));
const lensBucket=e=>["mundi","mundi_extension"].includes(e.layer)?"musica":null;
function project(depth){
 const root="atlantis::pers:bach";
 const state={root,focus:null,trail:[root],trailEdges:[],depth,
   cats:categories,lenses:new Set(["musica","trasmissioni","genealogie","collaborazioni"]),comparison:null};
 const fn=new Function("state","lensBucket","comparisonProjection",logic+"\nreturn rootedProjection;")(state,lensBucket,()=>null);
 return fn(db);
}
const v=project(5),works=v.nodes.filter(n=>n.category==="opere");
assert.equal(v.nodes.length,469);
assert.equal(v.links.length,470);
assert.equal(works.length,355);
const author=/compone|ha_composto|composizione_|autore_di|musica_composta|composed_by|written_by|opera_di|attribuita_/i;
const bach="atlantis::pers:bach";
const contextual=new Set(["L175-A02","L177-A01"]);
const idx=new Map(db.nodes.map(n=>[n.id,n]));
let directAuthored=0,directContext=0,indirect=0;
for(const n of works){
 const parent=v.parents.get(n.id);
 assert.ok(parent?.edge,"Parent missing for "+n.id);
 if(parent.from===bach){
  if(contextual.has(parent.edge.original?.id))directContext++;
  else {assert.match(parent.edge.relation||"",author,"Unexpected direct Bach→work predicate "+n.id);directAuthored++}
 }else {
  indirect++;
  const seen=new Set([n.id]);let current=n.id,steps=0;
  while(current!==bach&&steps++<20){
   const p=v.parents.get(current);
   assert.ok(p?.from&&!seen.has(p.from),"Broken or cyclical path to Bach: "+n.id);
   seen.add(p.from);current=p.from;
  }
  assert.equal(current,bach,"Indirect node not rooted in Bach: "+n.id);
 }
}
assert.equal(directAuthored,269);
assert.equal(directContext,2);
assert.equal(indirect,84);
const directWorkIDs=new Set(works.map(n=>n.id));
const foreign=[];
for(const e of db.links){
 if(!author.test(e.relation||""))continue;
 if(directWorkIDs.has(e.source)&&idx.get(e.target)?.category==="persone"&&e.target!==bach)
   foreign.push({work:e.source,person:e.target,edge:e.id});
 if(directWorkIDs.has(e.target)&&idx.get(e.source)?.category==="persone"&&e.source!==bach)
   foreign.push({work:e.target,person:e.source,edge:e.id});
}
assert.deepEqual(foreign,[],"Potential attribution to other named composers");
assert.equal(project(1).nodes.filter(n=>n.category==="opere").length,271);
assert.equal(project(2).nodes.filter(n=>n.category==="opere").length,350);
console.log("PASS Bach view: 355 work-category nodes; 269 direct author predicates; 2 context actions; 84 indirect; no explicit foreign authorship edges.");
