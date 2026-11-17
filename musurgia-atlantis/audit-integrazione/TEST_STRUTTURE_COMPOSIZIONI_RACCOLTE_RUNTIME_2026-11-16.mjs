// Test riproducibile su tutte le sorgenti JSON reali.
// node musurgia-atlantis/audit-integrazione/TEST_STRUTTURE_COMPOSIZIONI_RACCOLTE_RUNTIME_2026-11-16.mjs
// Collaudo della logica reale della vista di staging, non del rendering browser/WebGL.
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {dirname,resolve} from "node:path";
import {fileURLToPath} from "node:url";
import {sourcePaths,buildUnifiedDatabase} from "./DB_UNIFICATO_MUNDI_ATLANTIS_LOTTO01_2026-11-15.mjs";

const here=dirname(fileURLToPath(import.meta.url));
const root=resolve(here,"../..");
const input=Object.fromEntries(sourcePaths.map(({key,path})=>[
 key,JSON.parse(readFileSync(resolve(root,path),"utf8"))
]));
assert.equal(sourcePaths.length,14);
const db=buildUnifiedDatabase(input);
assert.equal(db.counts.nodes,2853);
assert.equal(db.counts.links,8624);
assert.equal(db.counts.structure_staging_nodes,5);
assert.equal(db.counts.structure_staging_links,13);
assert.equal(db.counts.flaminio_source_records,500);
assert.equal(db.counts.orphan_links,0);
assert.equal(db.counts.duplicate_link_ids,0);
const index=new Map(db.nodes.map(n=>[n.id,n]));
const actual=readFileSync(resolve(here,"VISTA_DB_FEDERATO_LOTTO01_2026-11-15.html"),"utf8");
const start=actual.indexOf("function sonataScopedProjection(");
const end=actual.indexOf("function recordNodePosition(",start);
assert.ok(start>0&&end>start);
const functions=actual.slice(start,end);
const categories=new Set(db.nodes.map(n=>n.category));
const lensBucket=e=>["mundi","mundi_extension"].includes(e.layer)?"musica":null;
function project(rootID,depth=5,focus=null,trail=[rootID],trailEdges=[]){
 const state={root:rootID,depth,focus,trail,trailEdges,cats:categories,
  lenses:new Set(["musica","trasmissioni","genealogie","collaborazioni"]),comparison:null};
 const rooted=new Function("state","lensBucket","comparisonProjection",
   functions+"\nreturn rootedProjection;")(state,lensBucket,()=>null);
 return rooted(db);
}
const p="tax20261115strutture::", has=(v,id)=>v.nodes.some(n=>n.id===id);
const named=(v,name)=>v.nodes.some(n=>n.name===name);
const roots=["composition","multipart_work","integrated_cycle","editorial_collection","group_of_works"];
const report={};
for(const item of roots){
 const id=p+item,series=[];
 for(let depth=1;depth<=5;depth++){
  const view=project(id,depth);
  assert.equal(view.scope,"structural_types");
  assert.equal(view.links.length,view.nodes.length-1);
  assert.ok(!named(view,"Aida")&&!named(view,"Don Giovanni"));
  assert.ok(view.links.every(e=>!/HOLD|SOSPES|REJECTED/i.test(e.relation||"")));
  assert.ok(view.nodes.every(n=>n.visibility!=="documentary"));
  series.push({depth,nodes:view.nodes.length,links:view.links.length});
 }
 report[item]=series;
}
const cycles=project(p+"integrated_cycle");
assert.ok(named(cycles,"Má vlast (Smetana, ciclo di sei poemi sinfonici, 1874–1879)"));
assert.ok(named(cycles,"An die ferne Geliebte, op. 98"));
assert.ok(!named(cycles,"An die ferne Geliebte (All'amata lontana)"));
const collections=project(p+"editorial_collection");
assert.ok(named(collections,"Beethoven, tre Sonate per pianoforte op. 2 (ed. 1796)"));
assert.ok(named(collections,"Mozart, sei quartetti dedicati a Haydn (1782–1785)"));
assert.ok(!named(collections,"Le quattro stagioni"));
const composition=project(p+"composition");
assert.ok(has(composition,p+"multipart_work"));
assert.ok(named(composition,"Concerto brandeburghese n. 1 in fa maggiore"));
assert.ok(named(composition,"Concerto brandeburghese n. 2 in fa maggiore"));
assert.ok(named(composition,"Suite per pianoforte in quattro movimenti"));

const wq43=collections.nodes.find(n=>n.name==="Sei concerti per il cembalo concertato, Wq 43");
assert.ok(wq43);
const knownMember=db.links.find(e=>e.source===wq43.id&&e.relation==="contiene_numero_documentato");
assert.ok(knownMember,"Raccolta Wq43 priva di componente documentata");
assert.ok(!has(collections,knownMember.target),"Componenti espansi senza focus");
const parent=collections.parents.get(wq43.id);
const focused=project(p+"editorial_collection",3,wq43.id,
 [p+"editorial_collection",wq43.id],[parent.edge.id]);
assert.ok(has(focused,knownMember.target),"Membro documentato non visibile su focus");
assert.ok(!named(focused,"Aida"));

const sonata=project("atlantis::senso:sonata");
assert.equal(sonata.scope,"sonata");
assert.equal(sonata.nodes.length,109);
const suite=project("mundi::genere-suite");
assert.equal(suite.scope,"suite_sinfonico");
assert.ok(suite.nodes.length>=35&&suite.nodes.some(n=>n.id==="tax20261115danze::suite-dances"));

console.log(JSON.stringify({
 status:"PASS_REAL_DATA_LOGICAL_RUNTIME_NOT_BROWSER",
 counts:{nodes:db.counts.nodes,links:db.counts.links,structureNodes:5,structureLinks:13,
  flaminioRows:500,orphans:0,duplicates:0},
 tests:report,cycles:true,collections:true,wq43FocusOpensMember:true,
 unclassifiedFourSeasonsNotInvented:true,holdProtected:true,sonataSuiteRegression:true
},null,2));
