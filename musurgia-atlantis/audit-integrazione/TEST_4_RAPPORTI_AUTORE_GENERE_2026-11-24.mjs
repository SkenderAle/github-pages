// Run from the repository root:
// node musurgia-atlantis/audit-integrazione/TEST_4_RAPPORTI_AUTORE_GENERE_2026-11-24.mjs
// 17 original JSON sources; this is not a browser/WebGL/Android test.
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {dirname,resolve} from "node:path";
import {fileURLToPath} from "node:url";
import {sourcePaths,buildUnifiedDatabase}
  from "./DB_UNIFICATO_MUNDI_ATLANTIS_LOTTO01_2026-11-15.mjs";
const here=dirname(fileURLToPath(import.meta.url)),rootDir=resolve(here,"../..");
assert.equal(sourcePaths.length,17);
const inputs=Object.fromEntries(sourcePaths.map(({key,path})=>[
 key,JSON.parse(readFileSync(resolve(rootDir,path),"utf8"))
]));
const db=buildUnifiedDatabase(inputs);
assert.equal(db.counts.nodes,2897);
assert.equal(db.counts.links,8743);
assert.equal(db.counts.orphan_links,0);
assert.equal(db.counts.duplicate_link_ids,0);
assert.equal(db.counts.flaminio_source_records,500);
const html=readFileSync(resolve(here,"VISTA_DB_FEDERATO_LOTTO01_2026-11-15.html"),"utf8");
const start=html.indexOf("const verifiedRootGenrePracticeRules=");
const end=html.indexOf("function withVerifiedRootRelations(",start);
assert.ok(start>=0&&end>start);
const section=html.slice(start,end);
const cases=[
 ["atlantis::senso:comedie-ballet","atlantis::pers:lully","L02-A30","compone_musiche_per_la_comedie_ballet"],
 ["atlantis::senso:opera-ballet","atlantis::pers:rameau","L02-A34","compone_nel_genere_opera_ballet"],
 ["atlantis::senso:ricercare","atlantis::pers:frescobaldi","L07-A071","compone_e_pubblica_ricercari"],
 ["atlantis::senso:ricercare","atlantis::pers:bach","L07-A072","compone_ricercari_nell_offerta_musicale"]
];
assert.equal(cases.length,4);
const index=new Map(db.nodes.map(n=>[n.id,n]));
for(const [rootId,personId,sourceID,predicate] of cases){
 const root=index.get(rootId),person=index.get(personId);
 assert.ok(root,"Missing genre "+rootId);
 assert.equal(person?.category,"persone","Missing person "+personId);
 const matches=db.links.filter(e=>e.layer==="atlantis"&&e.original?.id===sourceID);
 assert.equal(matches.length,1,"Missing/duplicate historical edge "+sourceID);
 const edge=matches[0];
 assert.deepEqual(new Set([edge.source,edge.target]),new Set([rootId,personId]));
 assert.equal(edge.relation,predicate);
 assert.equal(edge.quality,"riscontro_storico_indipendente");
 assert.equal(edge.original?.historical_verified_independently,true);
 assert.match(edge.original?.verification_status||"",/^confermato_da_/);
 assert.ok(edge.original?.evidence_urls?.length>0);
 const state={root:rootId,focus:null,trail:[rootId],trailEdges:[],
   lenses:new Set(["musica"]),depth:1,cats:new Set(["generi_forme","persone"])};
 const fn=new Function("state",section+"\nreturn withVerifiedRootGenrePractices;")(state);
 const base={nodes:[root],links:[],parents:new Map(),distance:new Map([[rootId,0]])};
 const project=()=>fn(db,db.links,index,root,base);
 let v=project();
 assert.ok(v.nodes.some(n=>n.id===personId));
 assert.equal(v.links.filter(e=>e.id===edge.id).length,1);
 state.cats.delete("persone");v=project();
 assert.ok(!v.nodes.some(n=>n.id===personId));
 state.cats.add("persone");state.lenses.clear();v=project();
 assert.ok(!v.nodes.some(n=>n.id===personId));
 state.lenses.add("musica");state.depth=0;v=project();
 assert.ok(!v.nodes.some(n=>n.id===personId));
 state.depth=1;state.focus=personId;state.trail=[rootId,personId];state.trailEdges=[edge.id];v=project();
 assert.equal(v.links.filter(e=>e.id===edge.id).length,1);
 state.focus=null;state.trail=[rootId];state.trailEdges=[];
 const tampered={...edge,original:{...edge.original,id:"tampered"}};
 v=fn(db,[tampered],index,root,base);
 assert.ok(!v.nodes.some(n=>n.id===personId));
}
// The Mundi author–genre links remain in the builder, not merged or deleted.
for(const id of ["mundi::grafo::1878","mundi::grafo::1880"])
 assert.equal(db.links.filter(e=>e.id===id).length,1,"Original Mundi link lost: "+id);
console.log("PASS: four exact Atlantis genre practices, source integrity and filters");
