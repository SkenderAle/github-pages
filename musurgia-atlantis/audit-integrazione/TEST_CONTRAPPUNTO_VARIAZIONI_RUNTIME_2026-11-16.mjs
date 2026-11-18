// Staging Mundi–Atlantis–Flaminio, 13 file reali.
// Eseguire dalla radice repository:
// node musurgia-atlantis/audit-integrazione/TEST_CONTRAPPUNTO_VARIAZIONI_RUNTIME_2026-11-16.mjs
// Non sostituisce collaudo DOM, WebGL o Android.
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {dirname,resolve} from "node:path";
import {fileURLToPath} from "node:url";
import {sourcePaths,buildUnifiedDatabase} from "./DB_UNIFICATO_MUNDI_ATLANTIS_LOTTO01_2026-11-15.mjs";

const here=dirname(fileURLToPath(import.meta.url)),root=resolve(here,"../..");
const input=Object.fromEntries(sourcePaths.map(({key,path})=>
 [key,JSON.parse(readFileSync(resolve(root,path),"utf8"))]));
assert.equal(sourcePaths.length,17);
const db=buildUnifiedDatabase(input);
assert.equal(db.counts.nodes,2897);
assert.equal(db.counts.links,8729);
assert.equal(db.counts.counterpoint_staging_nodes,11);
assert.equal(db.counts.counterpoint_staging_links,36);
assert.equal(db.counts.counterpoint_documentary_links,5);
assert.equal(db.counts.flaminio_source_records,500);
assert.equal(db.counts.orphan_links,0);
assert.equal(db.counts.duplicate_link_ids,0);

const index=new Map(db.nodes.map(n=>[n.id,n]));
const html=readFileSync(resolve(here,"VISTA_DB_FEDERATO_LOTTO01_2026-11-15.html"),"utf8");
const start=html.indexOf("function sonataScopedProjection(");
const end=html.indexOf("function recordNodePosition(",start);
assert.ok(start>0&&end>start,"Funzione di proiezione non trovata");
const code=html.slice(start,end);
const cats=new Set(db.nodes.map(n=>n.category));
const lensBucket=e=>["mundi","mundi_extension"].includes(e.layer)?"musica":null;
function project(rootID,depth=5,focus=null,trail=[rootID],trailEdges=[]){
 const state={root:rootID,focus,trail,trailEdges,depth,cats,
   lenses:new Set(["musica","trasmissioni","genealogie","collaborazioni"]),comparison:null};
 const view=new Function("state","lensBucket","comparisonProjection",
   code+"\nreturn rootedProjection;")(state,lensBucket,()=>null);
 return view(db);
}
const p="tax20261115cf::";
const ids={
 contrappunto:p+"family:contrappunto",variazioni:p+"family:variazione",
 fuga:"mundi::forma-fuga",ricercare:"atlantis::senso:ricercare",
 passacaglia:p+"form:passacaglia",ciaccona:p+"form:ciaccona",
 corale:"flaminio::audit:fl01:jsb03:genre:partita-corale",
 canone:p+"form:variazioni-canoniche",
 toccataFuga:"flaminio::audit:fl01:jsb06:genre:toccata-fuga-organo",
 passacagliaFuga:"flaminio::audit:fl01:jsb06:genre:passacaglia-fuga-organo",
 mundiVariazioni:"mundi::forma-variazioni"};
const expected={
 contrappunto:[21,20],variazioni:[28,27],fuga:[17,16],ricercare:[2,1],
 passacaglia:[9,8],ciaccona:[4,3],corale:[7,6],canone:[7,6],
 toccataFuga:[7,6],passacagliaFuga:[5,4],mundiVariazioni:[11,10]};
const output={};
for(const [name,rootID] of Object.entries(ids)){
 const r=project(rootID);
 assert.equal(r.scope,"counterpoint_variation",name);
 assert.deepEqual([r.nodes.length,r.links.length],expected[name],name);
 assert.ok(!r.nodes.some(n=>n.name==="Aida"||n.name==="Don Giovanni"),name);
 assert.ok(r.links.every(e=>e.visibility!=="documentary"),name+" document edges");
 assert.ok(r.nodes.every(n=>!(n.provenance||[]).some(p=>p.payload?.documentary_only===true)),
   name+" documentary-only node surfaced");
 output[name]={nodes:r.nodes.length,links:r.links.length};
}
const names=(r,name)=>r.nodes.filter(n=>n.name===name);
const fuga=project(ids.fuga);
assert.equal(names(fuga,"Fuga per organo").length,2); // fonti jsb05 e jsb06 separate
assert.equal(index.get(ids.fuga).name,"Fuga");
assert.equal(db.nodes.filter(n=>n.name==="Fuga").length,1);
assert.equal(db.nodes.filter(n=>n.name==="Ricercare").length,1);
const organFugueSources=names(fuga,"Fuga per organo");
assert.ok(organFugueSources.every(n=>n.layer==="flaminio"));
const fugitives=names(fuga,"Fuga in do minore");
assert.equal(fugitives.length,2);
assert.deepEqual(fugitives.map(n=>String(n.provenance.find(p=>p.layer==="flaminio")?.payload?.bwv_source_literal)).sort(),["574","575"]);
assert.ok(!db.links.some(e=>
  ["counterpoint_staging::cf20261115:041","counterpoint_staging::cf20261115:042"].includes(e.id)));
const partita=project(ids.corale);
assert.ok(names(partita,"Variazioni su corale").length===1);
assert.ok(names(partita,"Procedimenti di variazione").length===1);
assert.ok(names(partita,"Partita per strumento solo").length===0);
const toccata=project(ids.toccataFuga);
assert.ok(names(toccata,"Fuga").length===1);
assert.ok(names(toccata,"Toccata").length===1);
assert.ok(names(toccata,"Fuga per organo").length===0);
assert.ok(names(project(ids.passacagliaFuga),"Fuga per organo").length===0);
const compositeToFuga=db.links.find(e=>
  e.source===ids.toccataFuga&&e.target===ids.fuga&&e.relation==="composite_type_contains_form");
assert.ok(compositeToFuga);
const focused=project(ids.toccataFuga,5,ids.fuga,[ids.toccataFuga,ids.fuga],[compositeToFuga.id]);
assert.equal(names(focused,"Fuga per organo").length,2,
 "Solo il focus esplicito su Fuga apre il relativo repertorio");
for(const [rootID,n,l] of [
 ["atlantis::senso:sonata",109,108],
 ["tax20261115strutture::editorial_collection",5,4]]){
 const r=project(rootID);assert.equal(r.nodes.length,n);assert.equal(r.links.length,l);
}
const suiteView=project("mundi::genere-suite");
assert.ok(suiteView.nodes.length>=35);
assert.ok(suiteView.nodes.some(n=>n.id==="tax20261115danze::suite-dances"));
assert.equal(suiteView.links.length,suiteView.nodes.length-1);
assert.equal(db.links.filter(e=>e.layer==="counterpoint_staging"&&e.visibility==="documentary").length,5);
console.log(JSON.stringify({status:"PASS_REAL_DATA_LOGIC_NOT_BROWSER",counts:db.counts,
 projections:output,composition_types_protected:true,partita_corale_not_suite:true,
 fugues_BWV574_and_575_distinct:true,documentary_parts_hidden:true,composite_focus_safe:true,
 sonata_suite_collections_regression:true},null,2));
