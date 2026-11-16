// Test end-to-end per il database unificato e la funzione UI effettiva.
// Eseguire dalla radice del repository:
// node musurgia-atlantis/audit-integrazione/TEST_SUITE_SINFONICO_RADICATO_RUNTIME_2026-11-16.mjs
// Nota: creato con audit statico e prova sintetica V8; prova su JSON reali ancora necessaria.
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {dirname,resolve} from "node:path";
import {fileURLToPath} from "node:url";
import {sourcePaths,buildUnifiedDatabase} from "./DB_UNIFICATO_MUNDI_ATLANTIS_LOTTO01_2026-11-15.mjs";

const here=dirname(fileURLToPath(import.meta.url)),root=resolve(here,"../..");
const inputs=Object.fromEntries(sourcePaths.map(({key,path})=>[
  key,JSON.parse(readFileSync(resolve(root,path),"utf8"))
]));
assert.equal(sourcePaths.length,11);
const db=buildUnifiedDatabase(inputs);
assert.equal(db.counts.nodes,2827);
assert.equal(db.counts.links,8565);
assert.equal(db.counts.suite_staging_nodes,8);
assert.equal(db.counts.suite_staging_links,21);
assert.equal(db.counts.flaminio_source_records,500);
assert.equal(db.counts.orphan_links,0);
assert.equal(db.counts.duplicate_link_ids,0);

const html=readFileSync(resolve(here,"VISTA_DB_FEDERATO_LOTTO01_2026-11-15.html"),"utf8");
const start=html.indexOf("function suiteScopedProjection(");
const end=html.indexOf("function rootedProjection(",start);
assert.ok(start>0&&end>start);
const src=html.slice(start,end);
const nodeByID=new Map(db.nodes.map(n=>[n.id,n]));
const categories=new Set(db.nodes.map(n=>n.category));
const withheld=new Set((db.crosswalk?.sonata_work_pending||[]).map(x=>x.source_excel_row));
const isBlocked=e=>e.visibility==="documentary"||
  /(HOLD|SOSPES|CONTESTAT|REJECTED)/i.test(
    [e.quality,e.relation,e.original?.relation,e.original?.quality_gate,
     e.original?.status,e.original?.verification_status].filter(Boolean).join(" "));
const usable=db.links.filter(e=>!isBlocked(e));
const fn=new Function("state",src+"\nreturn suiteScopedProjection;");

function project(rootID,depth=5,focus=null,trail=[rootID],trailEdges=[]){
  const state={root:rootID,focus,trail,trailEdges,depth,cats:categories,lenses:new Set(["musica"])};
  return fn(state)(db,usable,nodeByID,nodeByID.get(rootID));
}
function e(id){
  const link=db.links.find(x=>x.id==="suite_staging::"+id);
  assert.ok(link,"Manca raccordo Suite/Sinfonico: "+id);return link;
}
function has(v,id){return v.nodes.some(n=>n.id===id)}
function named(v,name){return v.nodes.some(n=>n.name===name)}
function noHOLD(v){
  assert.ok(v.links.every(x=>!isBlocked(x)));
  for(const n of v.nodes)if(n.category==="opere")
    assert.ok(!(n.provenance||[]).some(p=>withheld.has(p.payload?.source_excel_row)));
}
const suite=e("tax20261115:e001").source;
const partita=e("tax20261115:e001").target;
const suiteOrchestra=e("tax20261115:e002").target;
const suiteSinfonica=e("tax20261115:e003").target;
const sinfonico=e("tax20261115:e015").target;
const sinfonia=e("tax20261115:e015").source;
const poema=e("tax20261115:e016").source;
const concertante=e("tax20261115:e021").source;
const repertorioConcertante=e("tax20261115:e021").target;
const suiteView=project(suite);
assert.equal(suiteView.scope,"suite_sinfonico");
for(const x of [partita,suiteOrchestra,suiteSinfonica])assert.ok(has(suiteView,x),"Suite non raggiunge "+x);
assert.ok(!has(suiteView,sinfonia)&&!has(suiteView,poema),
  "Suite non deve espandersi nell'intero Repertorio sinfonico");
assert.ok(!named(suiteView,"Aida")&&!named(suiteView,"Don Giovanni"));
noHOLD(suiteView);

const repertoireView=project(sinfonico);
for(const x of [sinfonia,poema,suiteOrchestra,suiteSinfonica,concertante])
  assert.ok(has(repertoireView,x),"Repertorio sinfonico non raggiunge "+x);
assert.ok(!named(repertoireView,"Aida")&&!named(repertoireView,"Don Giovanni"));
noHOLD(repertoireView);

const concertanteView=project(concertante);
assert.ok(has(concertanteView,sinfonico)&&has(concertanteView,repertorioConcertante));
assert.ok(!concertanteView.nodes.some(n=>n.id==="atlantis::senso:sonata"),
  "Relazione indebita Sonata/Repertorio sinfonico");
noHOLD(concertanteView);

const suiteWork=project(suiteSinfonica);
assert.ok(has(suiteWork,e("tax20261115:e013").source),
  "Shéhérazade non raggiunta dalla Suite sinfonica");
const orchestralWork=project(suiteOrchestra);
assert.ok(has(orchestralWork,e("tax20261115:e014").source),
  "Peer Gynt non raggiunto dalla Suite orchestrale");

console.log(JSON.stringify({schema:"musurgia-suite-sinfonico-runtime-v1",status:"PASS_LOGICAL_NOT_BROWSER",
 counts:db.counts,tests:{
 suite:{nodes:suiteView.nodes.length,links:suiteView.links.length,no_symphony_spill:true},
 repertorio_sinfonico:{nodes:repertoireView.nodes.length,links:repertoireView.links.length},
 sinfonia_concertante:{nodes:concertanteView.nodes.length,links:concertanteView.links.length},
 suite_works:true,hold_excluded:true,sonata_separated:true
}},null,2));
