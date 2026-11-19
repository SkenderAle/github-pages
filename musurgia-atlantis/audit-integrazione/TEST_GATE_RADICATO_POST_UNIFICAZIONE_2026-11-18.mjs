// Gate riproducibile su tutte le 17 sorgenti del Lotto 1, branch main.
// Eseguire dalla radice del repository:
// node musurgia-atlantis/audit-integrazione/TEST_GATE_RADICATO_POST_UNIFICAZIONE_2026-11-18.mjs
// Esercita il builder e la proiezione estratta dall'HTML reale.
// NON e' un collaudo browser / WebGL / Canvas / Android.
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {dirname,resolve} from "node:path";
import {fileURLToPath} from "node:url";
import {sourcePaths,buildUnifiedDatabase,projectForViewer}
  from "./DB_UNIFICATO_MUNDI_ATLANTIS_LOTTO01_2026-11-15.mjs";

const here=dirname(fileURLToPath(import.meta.url));
const rootDir=resolve(here,"../..");
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
assert.equal(db.counts.missing_source_rows,0);

const html=readFileSync(resolve(here,"VISTA_DB_FEDERATO_LOTTO01_2026-11-15.html"),"utf8");
const begin=html.indexOf("function sonataScopedProjection(");
const end=html.indexOf("function recordNodePosition(",begin);
assert.ok(begin>=0&&end>begin,"Impossibile estrarre la proiezione HTML reale");
const logic=html.slice(begin,end);
const categories=new Set(db.nodes.map(n=>n.category));
// Per i test tutte le quattro lenti Mundi sono attive: il bucket
// equivalente 'musica' preserva la selezione di ogni arco Mundi.
const lensBucket=e=>["mundi","mundi_extension"].includes(e.layer)?"musica":null;
const lensSet=()=>new Set(["musica","trasmissioni","genealogie","collaborazioni"]);
const rootEdge=(a,b)=>db.links.find(e=>(e.source===a&&e.target===b)||
                                      (e.source===b&&e.target===a));
function project(rootId,focusId=null,depth=5){
 let trail=[rootId],trailEdges=[];
 if(focusId){
   const edge=rootEdge(rootId,focusId);
   assert.ok(edge,"Manca l'arco tra "+rootId+" e "+focusId);
   trail=[rootId,focusId];trailEdges=[edge.id];
 }
 const state={root:rootId,focus:focusId,trail,trailEdges,depth,
   cats:categories,lenses:lensSet(),comparison:null};
 const fn=new Function("state","lensBucket","comparisonProjection",
   logic+"\nreturn rootedProjection;")(state,lensBucket,()=>null);
 return fn(db);
}
const works=v=>v.nodes.filter(n=>n.category==="opere");
const roots={
 singspiel:project("atlantis::senso:singspiel"),
 mozart:project("atlantis::pers:mozart"),
 opera:project("atlantis::senso:opera"),
 concerto:project("atlantis::senso:concerto"),
 flauto:project("atlantis::opera:flauto-magico"),
 bach:project("atlantis::pers:bach"),
 sonata:project("atlantis::senso:sonata"),
 suite:project("mundi::genere-suite")
};
assert.equal(roots.singspiel.nodes.length,6);
assert.equal(roots.mozart.nodes.length,62);
assert.equal(works(roots.mozart).length,6);
assert.ok(works(roots.mozart).some(n=>n.name==="Il flauto magico"));
assert.ok(!works(roots.mozart).some(n=>n.name==="Aida"));
assert.ok(roots.opera.nodes.length<=250);
assert.ok(roots.concerto.nodes.length<=200);
assert.equal(roots.flauto.nodes.length,6);
assert.equal(roots.bach.scope,"bach");
assert.equal(roots.sonata.scope,"sonata");
assert.equal(roots.suite.scope,"suite_sinfonico");

const mozartOwned=new Set(works(roots.mozart).map(n=>n.id));
const singspielWorks=new Set(works(roots.singspiel).map(n=>n.id));
const focusCases=[
 ["mozart_concerto","atlantis::pers:mozart","atlantis::senso:concerto"],
 ["mozart_opera","atlantis::pers:mozart","atlantis::senso:opera"],
 ["singspiel_mozart","atlantis::senso:singspiel","atlantis::pers:mozart"],
 ["singspiel_opera","atlantis::senso:singspiel","atlantis::senso:opera"],
 ["flauto_mozart","atlantis::opera:flauto-magico","atlantis::pers:mozart"]
];
const focuses={};
for(const [name,rootId,center] of focusCases){
 const v=project(rootId,center),ids=works(v).map(n=>n.id);
 const allowed=rootId==="atlantis::pers:mozart"?mozartOwned:
   rootId==="atlantis::senso:singspiel"?singspielWorks:
   new Set(["atlantis::opera:flauto-magico"]);
 assert.ok(ids.every(id=>allowed.has(id)),name+": opera non pertinente alla radice");
 assert.ok(v.nodes.length<100,name+": espansione generica non radicata");
 focuses[name]={nodes:v.nodes.length,links:v.links.length,works:ids};
}
// Gate opera-specifico: Mozart -> Opera ha esattamente quattro composizioni
// già presenti e assegnate individualmente a questo genere.
const fourMozartOperas=new Set([
 "atlantis::opera:figaro",
 "atlantis::opera:Don-giovanni",
 "atlantis::opera:flauto-magico",
 "atlantis::opera:cosi-fan-tutte-1790"
]);
assert.deepEqual(new Set(focuses.mozart_opera.works),fourMozartOperas);
assert.equal(focuses.mozart_opera.works.length,4);
assert.ok(!focuses.mozart_opera.works.some(id=>/petits-riens|quartetti/i.test(id)));

// Gate delle classificazioni opera-specifiche dopo la riconciliazione.
// Due archi nuovi: Figaro -> Opera buffa, Così -> Dramma giocoso.
// Don Giovanni e Flauto magico erano già correttamente classificati.
const workIDs=v=>new Set(works(v).map(n=>n.id));
// Gate di regressione: L02-A35 e' un arco storico gia' presente in Atlantis.
// La vista specializzata Scena/Danza deve visualizzarlo senza generare
// un ulteriore raccordo, ne' portare opere non pertinenti nel sottogenere.
const sourceIndes=db.links.filter(e=>e.layer==="atlantis"&&e.original?.id==="L02-A35");
assert.equal(sourceIndes.length,1,"Arco Atlantis L02-A35 assente o duplicato");
assert.equal(sourceIndes[0].source,"atlantis::opera:indes-galantes");
assert.equal(sourceIndes[0].target,"atlantis::senso:opera-ballet");
const operaBalletRoot=project("atlantis::senso:opera-ballet");
assert.equal(operaBalletRoot.scope,"scena_danza");
assert.ok(workIDs(operaBalletRoot).has("atlantis::opera:indes-galantes"));
assert.ok(operaBalletRoot.links.some(e=>e.original?.id==="L02-A35"));
assert.ok(!workIDs(operaBalletRoot).has("atlantis::opera:aida"));
const operaBalletFocus=project("tax20261115scena::family:spettacolo","atlantis::senso:opera-ballet");
assert.ok(workIDs(operaBalletFocus).has("atlantis::opera:indes-galantes"));
assert.ok(!workIDs(operaBalletFocus).has("atlantis::opera:aida"));

const buffaWorks=workIDs(project("atlantis::senso:opera-buffa"));
const giocosoWorks=workIDs(project("atlantis::senso:dramma-giocoso"));
const singspielWorksAfter=workIDs(project("atlantis::senso:singspiel"));
const mozartBuffaWorks=workIDs(project("atlantis::pers:mozart","atlantis::senso:opera-buffa"));
assert.deepEqual(buffaWorks,new Set(["atlantis::opera:figaro"]));
assert.deepEqual(mozartBuffaWorks,new Set(["atlantis::opera:figaro"]));
assert.deepEqual(giocosoWorks,new Set([
 "atlantis::opera:Don-giovanni",
 "atlantis::opera:cosi-fan-tutte-1790"
]));
assert.deepEqual(singspielWorksAfter,new Set(["atlantis::opera:flauto-magico"]));
for(const [id,source,target] of [
 ["curated-opera09-figaro-opera-buffa","atlantis::senso:opera-buffa","atlantis::opera:figaro"],
 ["curated-opera09-cosi-dramma-giocoso","atlantis::senso:dramma-giocoso","atlantis::opera:cosi-fan-tutte-1790"]
]){
 const links=db.links.filter(e=>e.original?.id===id&&e.layer==="crosswalk");
 assert.equal(links.length,1,id+": raccordo assente o duplicato");
 assert.equal(links[0].source,source);
 assert.equal(links[0].target,target);
 assert.match(links[0].quality,/PRIMARY_AUTHORITY/);
}


 // Gate di pertinenza interautore: opere già esistenti, non nuovi nodi.
 const newOperas=new Set([
  "atlantis::opera:barbiere-rossini",
  "atlantis::opera:carmen",
  "atlantis::opera:freischutz",
  "atlantis::opera:l-orfeo",
  "atlantis::opera:fidelio",
  "atlantis::opera:indes-galantes",
  "atlantis::opera:aida",
  "atlantis::opera:boheme"
 ]);
 const operaWorkSet=workIDs(project("atlantis::senso:opera"));
 assert.ok([...newOperas].every(id=>operaWorkSet.has(id)));
 assert.deepEqual(workIDs(project("atlantis::senso:opera-buffa")),new Set([
   "atlantis::opera:figaro","atlantis::opera:barbiere-rossini"
 ]));
 assert.deepEqual(workIDs(project("atlantis::senso:opera-comique")),new Set([
   "atlantis::opera:carmen"
 ]));
 assert.deepEqual(workIDs(project("atlantis::senso:opera-romantica")),new Set([
   "atlantis::opera:freischutz"
 ]));
 assert.deepEqual(workIDs(project("atlantis::pers:beethoven","atlantis::senso:opera")),
   new Set(["atlantis::opera:fidelio"]));
 assert.deepEqual(workIDs(project("atlantis::pers:rossini","atlantis::senso:opera-buffa")),
   new Set(["atlantis::opera:barbiere-rossini"]));
 assert.deepEqual(workIDs(project("atlantis::pers:bizet","atlantis::senso:opera")),
   new Set(["atlantis::opera:carmen"]));
 assert.deepEqual(workIDs(project("atlantis::pers:weber","atlantis::senso:opera")),
   new Set(["atlantis::opera:freischutz"]));
 assert.deepEqual(workIDs(project("atlantis::pers:verdi","atlantis::senso:opera")),
   new Set(["atlantis::opera:aida"]));
 assert.deepEqual(workIDs(project("atlantis::pers:puccini","atlantis::senso:opera")),
   new Set(["atlantis::opera:boheme"]));
 assert.deepEqual(workIDs(project("atlantis::pers:mozart","atlantis::senso:opera")),
   fourMozartOperas);
 // "Il barbiere" di Paisiello resta una composizione diversa, senza propagazione.
 assert.ok(!workIDs(project("atlantis::senso:opera-buffa"))
   .has("atlantis::opera:barbiere-paisiello-1782"));
 for(const [suffix,source,target] of [["rossini-barbiere-genere","atlantis::senso:opera","atlantis::opera:barbiere-rossini"],["rossini-barbiere-buffa","atlantis::senso:opera-buffa","atlantis::opera:barbiere-rossini"],["bizet-carmen-genere","atlantis::senso:opera","atlantis::opera:carmen"],["bizet-carmen-comique","atlantis::senso:opera-comique","atlantis::opera:carmen"],["weber-freischutz-genere","atlantis::senso:opera","atlantis::opera:freischutz"],["weber-freischutz-romantica","atlantis::senso:opera-romantica","atlantis::opera:freischutz"],["monteverdi-orfeo-genere","atlantis::senso:opera","atlantis::opera:l-orfeo"],["beethoven-fidelio-genere","atlantis::senso:opera","atlantis::opera:fidelio"],["rameau-indes-genere","atlantis::senso:opera","atlantis::opera:indes-galantes"],["verdi-aida-genere","atlantis::senso:opera","atlantis::opera:aida"],["puccini-boheme-genere","atlantis::senso:opera","atlantis::opera:boheme"],["beethoven-opera-repertorio","atlantis::pers:beethoven","atlantis::senso:opera"]]){
   const id="curated-opera10-"+suffix;
   const edges=db.links.filter(e=>e.layer==="crosswalk"&&e.original?.id===id);
   assert.equal(edges.length,1,id+": arco assente o duplicato");
   assert.equal(edges[0].source,source);
   assert.equal(edges[0].target,target);
   assert.ok(edges[0].original?.source_urls?.length>0,id+": fonte assente");
   assert.equal(edges[0].visibility,"musical");
 }

for(const id of ["counterpoint_staging::cf20261115:030",
                 "counterpoint_staging::cf20261115:031"]){
 const edge=db.links.find(e=>e.id===id);
 assert.ok(edge,id+" non conservato nel database");
 assert.match(edge.quality,/CANDIDATE/);
 assert.ok(!projectForViewer(db,{rootId:edge.source,depth:1})
   .links.some(e=>e.id===id),id+" visibile nel builder");
 assert.ok(!project(edge.source,null,1)
   .links.some(e=>e.id===id),id+" visibile nella vista HTML");
}

console.log(JSON.stringify({
 schema:"musurgia-unified-real-data-rooted-focus-gate-v1",
 status:"PASS_LOGICAL_RUNTIME_NOT_BROWSER",
 counts:db.counts,
 roots:Object.fromEntries(Object.entries(roots).map(([name,v])=>
   [name,{nodes:v.nodes.length,links:v.links.length,works:works(v).length}])),
 focuses,
 candidate_form_edges_hidden:2,
 production_graphs_written:false
},null,2));
