// Gate Hilverding and Moliere historical genre roles. Node CLI, 17 sources.
// Run: node musurgia-atlantis/audit-integrazione/TEST_DUE_RUOLI_STORICI_GENERE_2026-11-24.mjs
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
assert.equal(db.counts.nodes,2897);
assert.equal(db.counts.links,8743);
assert.equal(db.counts.orphan_links,0);
assert.equal(db.counts.duplicate_link_ids,0);
assert.equal(db.counts.flaminio_source_records,500);
const html=readFileSync(resolve(here,"VISTA_DB_FEDERATO_LOTTO01_2026-11-15.html"),"utf8");
const begin=html.indexOf("const verifiedRootGenreContextRules=");
const end=html.indexOf("function withVerifiedRootRelations(",begin);
assert.ok(begin>=0&&end>begin);
const block=html.slice(begin,end);
const cases=[
 ["L02-A20","atlantis::senso:ballet-daction","atlantis::pers:franz-anton-hilverding","contribuisce_alle_prime_riforme_del_balletto_pantomimico"],
 ["L02-A31","atlantis::senso:comedie-ballet","atlantis::pers:moliere","scrive_testi_per_la_comedie_ballet"]
];
const idx=new Map(db.nodes.map(n=>[n.id,n]));
for(const [sourceId,rootId,personId,relation] of cases){
 const root=idx.get(rootId),person=idx.get(personId);
 assert.ok(root,"No genre "+rootId);
 assert.equal(person?.category,"persone");
 const links=db.links.filter(e=>e.layer==="atlantis"&&e.original?.id===sourceId);
 assert.equal(links.length,1,"Original missing/duplicate: "+sourceId);
 const edge=links[0];
 assert.equal(edge.relation,relation);
 assert.equal(edge.quality,"riscontro_storico_indipendente");
 assert.deepEqual(new Set([edge.source,edge.target]),new Set([rootId,personId]));
 assert.equal(edge.original?.historical_verified_independently,true);
 assert.match(edge.original?.verification_status||"",/^confermato_da_/);
 assert.ok(edge.original?.evidence_urls?.length>0);
 const state={root:rootId,focus:null,trail:[rootId],trailEdges:[],
  depth:1,lenses:new Set(["musica"]),cats:new Set(["generi_forme","persone"])};
 const fn=new Function("state",block+"\nreturn withVerifiedRootGenreContexts;")(state);
 const base={nodes:[root],links:[],parents:new Map(),distance:new Map([[root.id,0]])};
 const project=()=>fn(db,db.links,idx,root,base);
 let v=project();
 assert.ok(v.nodes.some(n=>n.id===personId));
 assert.equal(v.links.filter(e=>e.id===edge.id).length,1);
 state.cats.delete("persone");v=project();
 assert.ok(!v.nodes.some(n=>n.id===personId));
 state.cats.add("persone");state.lenses.clear();v=project();
 assert.ok(!v.nodes.some(n=>n.id===personId));
 state.lenses.add("musica");state.depth=0;v=project();
 assert.ok(!v.nodes.some(n=>n.id===personId));
 state.depth=1;state.focus=personId;state.trail=[rootId,personId];state.trailEdges=[edge.id];
 v=project();assert.equal(v.links.filter(e=>e.id===edge.id).length,1);
}
const editorial=db.links.filter(e=>e.relation==="accesso_indiretto_alla_famiglia"&&e.quality==="DERIVED_NAVIGATION_NOT_DIRECT");
assert.ok(editorial.length>=8,"Derived links lost from source builder");
console.log("PASS: two contextual genre roles, all 8+ editorial links retained in source");
