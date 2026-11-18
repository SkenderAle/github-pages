// Riproduzione locale del collaudo UI Sonata, sui JSON REALI del repository.
// Esecuzione: node musurgia-atlantis/audit-integrazione/TEST_SONATA_RADICATA_RUNTIME_2026-11-16.mjs
// Non usa WebGL: esegue il builder e la funzione di proiezione estratta
// dall'HTML effettivo, non una sua copia semplificata.
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {dirname,resolve} from "node:path";
import {fileURLToPath} from "node:url";
import {sourcePaths,buildUnifiedDatabase} from "./DB_UNIFICATO_MUNDI_ATLANTIS_LOTTO01_2026-11-15.mjs";

const here=dirname(fileURLToPath(import.meta.url));
const repoRoot=resolve(here,"../..");
const source=Object.fromEntries(sourcePaths.map(({key,path})=>[
 key,JSON.parse(readFileSync(resolve(repoRoot,path),"utf8"))
]));
const db=buildUnifiedDatabase(source);
// Lo staging include Suite/Sinfonico e Strutture delle composizioni: Sonata invariata.
assert.equal(db.counts.nodes,2897);
assert.equal(db.counts.links,8725);
assert.equal(db.counts.flaminio_source_records,500);
assert.equal(db.counts.orphan_links,0);
assert.equal(db.counts.duplicate_link_ids,0);

const html=readFileSync(resolve(here,"VISTA_DB_FEDERATO_LOTTO01_2026-11-15.html"),"utf8");
const start=html.indexOf("function sonataScopedProjection(db,edges,index,root)");
const end=html.indexOf("function recordNodePosition");
assert.ok(start>0&&end>start,"Funzioni di proiezione non localizzabili nell'HTML");
const actualProjection=html.slice(start,end);
const catList=new Set(db.nodes.map(n=>n.category));
const lensBucket=e=>/^(?:mundi|mundi_extension)$/.test(e.layer)?"musica":null;

function project(root,depth=5,focus=null,trail=[root],trailEdges=[],
  categories=catList,lenses=new Set(["musica"])){
 const state={root,focus,trail,trailEdges,depth,cats:categories,lenses,comparison:null};
 const fn=new Function("state","lensBucket","comparisonProjection",
   actualProjection+"\nreturn rootedProjection;")(state,lensBucket,()=>null);
 return fn(db);
}
function has(v,id){return v.nodes.some(n=>n.id===id)}
function named(v,name){return v.nodes.some(n=>n.name===name)}
function assertNoHolds(v){
 const pending=[3641,3645,3654,3946];
 for(const row of pending)assert.ok(!v.nodes.some(n=>n.id.endsWith("work:excel"+row)),"Scheda HOLD visibile: "+row);
 assert.ok(v.links.every(e=>!/HOLD/i.test(e.relation||"")),"Arco HOLD visibile");
}
function countSourceOps(v){return v.nodes.filter(n=>n.category==="opere").length;}
const s=project("atlantis::senso:sonata");
assert.equal(s.scope,"sonata");
assertNoHolds(s);
assert.ok(has(s,"flaminio::audit:fl01:jsb05:work:excel3675")); // BWV 1001
assert.ok(has(s,"flaminio::audit:fl01:jsb06:work:excel3938")); // BWV 525
assert.ok(has(s,"flaminio::audit:fl01:bbb:work:excel4219"));  // Bartók per violino solo
assert.ok(!named(s,"Don Giovanni")&&!named(s,"Aida"));
assert.ok(!s.nodes.some(n=>/^Partita n\./.test(n.name)),"Partite aperte dalla Sonata generale");
const organ=project("tax20261115sc::form:sonata-trio-organo");
assertNoHolds(organ);
for(const id of ["flaminio::audit:fl01:jsb03:doc:bwv527",
                 "flaminio::audit:fl01:jsb06:work:excel3938",
                 "flaminio::audit:fl01:jsb06:work:excel3941"])
 assert.ok(has(organ,id),"Manca una sonata d'organo: "+id);
assert.ok(!has(organ,"flaminio::audit:fl01:jsb05:work:excel3675"));
assert.ok(!has(organ,"flaminio::audit:fl01:bbb:work:excel4219"));
assert.ok(!organ.nodes.some(n=>/BWV1044/i.test(n.name)),"Riuso verso concerto aperto troppo presto");
const violin=project("flaminio::audit:fl01:jsb05:genre:sonata-violino-solo");
assertNoHolds(violin);
assert.ok(has(violin,"flaminio::audit:fl01:jsb05:work:excel3675"));
assert.ok(has(violin,"flaminio::audit:fl01:bbb:work:excel4219"));
assert.ok(!violin.nodes.some(n=>/^Partita n\./.test(n.name)),"Partite aperte dal genere Sonata");
const bartok=project("tax20261116son::due-pianoforti-percussioni");
assert.ok(has(bartok,"flaminio::audit:fl01:bbb:work:excel4232"));
assert.ok(!has(bartok,"flaminio::audit:fl01:jsb05:work:excel3675"));
const bach=project("atlantis::pers:bach");
assertNoHolds(bach);
assert.ok(has(bach,"flaminio::audit:fl01:jsb05:work:excel3675"));
assert.ok(!has(bach,"flaminio::audit:fl01:bbb:work:excel4219"));
assert.ok(!named(bach,"Don Giovanni")&&!named(bach,"Aida"));
const bachSonata=project("atlantis::pers:bach",5,"atlantis::senso:sonata",
 ["atlantis::pers:bach","atlantis::senso:sonata"]);
assertNoHolds(bachSonata);
assert.ok(has(bachSonata,"flaminio::audit:fl01:jsb05:work:excel3675"));
assert.ok(!has(bachSonata,"flaminio::audit:fl01:bbb:work:excel4219"));

function focusFrom(baseRoot,target,depth=4){
 const initial=project(baseRoot);
 assert.ok(has(initial,target),"Nodo da focalizzare assente: "+target);
 const trail=[target],trailEdges=[];
 for(let cursor=target,i=0;cursor!==baseRoot&&i<12;i++){
   const prev=initial.parents.get(cursor);
   assert.ok(prev,"Traccia interrotta: "+cursor);
   trail.unshift(prev.from);trailEdges.unshift(prev.edge.id);cursor=prev.from;
 }
 assert.equal(trail[0],baseRoot);
 return project(baseRoot,depth,target,trail,trailEdges);
}
const collection=focusFrom("atlantis::senso:sonata",
 "flaminio::audit:fl01:jsb05:collection:sei-sonate-partite-violino");
assert.ok(collection.nodes.some(n=>/^Partita n\./.test(n.name)),
 "Le Partite devono essere navigabili quando si apre esplicitamente la raccolta");
const bwv527=focusFrom("atlantis::senso:sonata","flaminio::audit:fl01:jsb03:doc:bwv527");
assert.ok(bwv527.nodes.some(n=>/BWV1044/.test(n.name)),
 "Il riuso verso BWV1044 deve apparire all'apertura di BWV 527");

const results={
 schema:"musurgia-sonata-runtime-projection-regression-v1",
 status:"PASS_LOGIC_NOT_WEBGL",nodes:db.counts.nodes,links:db.counts.links,
 tests:{sonata:{nodes:s.nodes.length,works:countSourceOps(s)},
        trioOrgano:{nodes:organ.nodes.length,works:countSourceOps(organ)},
        violinoSolo:{nodes:violin.nodes.length,works:countSourceOps(violin)},
        bartokDuePianoforti:{nodes:bartok.nodes.length},
        bach:{nodes:bach.nodes.length},bachFocusSonata:{nodes:bachSonata.nodes.length},
        focusCollectionPartite:true,focusBWV527Reuse:true,holdExcluded:true}
};
console.log(JSON.stringify(results,null,2));
