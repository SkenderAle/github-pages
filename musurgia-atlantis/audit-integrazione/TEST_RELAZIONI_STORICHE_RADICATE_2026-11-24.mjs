// Gate 13 relazioni storiche Mundi nella vista radicata di staging.
// Esecuzione: node musurgia-atlantis/audit-integrazione/TEST_RELAZIONI_STORICHE_RADICATE_2026-11-24.mjs
// Richiede 17 file sorgente locali. Non è un collaudo del browser.
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {dirname,resolve} from "node:path";
import {fileURLToPath} from "node:url";
import {sourcePaths,buildUnifiedDatabase}
  from "./DB_UNIFICATO_MUNDI_ATLANTIS_LOTTO01_2026-11-15.mjs";

const here=dirname(fileURLToPath(import.meta.url));
const rootDir=resolve(here,"../..");
assert.equal(sourcePaths.length,17);
const input=Object.fromEntries(sourcePaths.map(({key,path})=>[
 key,JSON.parse(readFileSync(resolve(rootDir,path),"utf8"))
]));
const db=buildUnifiedDatabase(input);
assert.equal(db.counts.nodes,2897);
assert.equal(db.counts.links,8743);
assert.equal(db.counts.orphan_links,0);
assert.equal(db.counts.duplicate_link_ids,0);
assert.equal(db.counts.flaminio_source_records,500);
const html=readFileSync(resolve(here,"VISTA_DB_FEDERATO_LOTTO01_2026-11-15.html"),"utf8");
const begin=html.indexOf("const verifiedRootHistoricalRelations=");
const end=html.indexOf("function withVerifiedRootRelations(",begin);
assert.ok(begin>=0&&end>begin);
const code=html.slice(begin,end);
const cases=[
 ["atlantis::pers:bach","atlantis::pers:telemann","mundi::relazioni-specialistiche::lotto02-infl-telemann-bach-concerto","ricezione-composizione-copiata"],
 ["atlantis::pers:bach","mundi::compositore-johann-kuhnau","mundi::relazioni-specialistiche::audit26-kuhnau-bach-precedente-lipsia","precedente-thomaskantorat-e-cantata-lipsia"],
 ["atlantis::senso:madrigale","atlantis::pers:adriano-willaert","mundi::relazioni-specialistiche::audit8f-madrigale-willaert","musica-nova-e-madrigale-colto"],
 ["atlantis::senso:madrigale","atlantis::pers:strozzi","mundi::relazioni-specialistiche::audit8f-madrigale-barbara-strozzi","primo-libro-di-madrigali-1644"],
 ["atlantis::senso:madrigale","mundi::compositore-carlo-gesualdo","mundi::relazioni-specialistiche::audit8f-madrigale-gesualdo","cromatismo-madrigalistico-tardo-cinquecento"],
 ["atlantis::senso:madrigale","mundi::compositore-cipriano-de-rore","mundi::relazioni-specialistiche::audit8f-madrigale-rore","madrigale-cromatico-cinquecentesco"],
 ["atlantis::senso:madrigale","atlantis::pers:monteverdi","mundi::relazioni-specialistiche::audit8f-madrigale-monteverdi","trasformazione-madrigale-tra-cinque-e-seicento"],
 ["atlantis::senso:madrigale","mundi::compositore-costanzo-festa","mundi::relazioni-specialistiche::audit8g-festa-madrigale-primo-cinquecento","madrigali-cinquecenteschi-prima-generazione"],
 ["atlantis::senso:madrigale","mundi::compositore-luca-marenzio","mundi::relazioni-specialistiche::audit8f-madrigale-marenzio","perfezionamento-madrigale-polifonico"],
 ["atlantis::senso:madrigale","mundi::compositore-maddalena-casulana","mundi::relazioni-specialistiche::audit8f-madrigale-casulana","primo-libro-madrigali-femminili-1568"],
 ["atlantis::senso:madrigale","atlantis::pers:orlando-di-lasso","mundi::relazioni-specialistiche::audit8f-madrigale-lasso","madrigale-europeo-del-cinquecento"],
 ["atlantis::senso:madrigale","mundi::compositore-vittoria-aleotti","mundi::relazioni-specialistiche::audit8f-madrigale-vittoria-aleotti","madrigali-pubblicati-1593"],
 ["mundi::toccata-organistica-rinascimentale","mundi::compositore-claudio-merulo","mundi::relazioni-specialistiche::audit8g-merulo-toccata-organo","toccate-organistiche-stampate"]
];
assert.equal(cases.length,13);
let assertions=7;
const index=new Map(db.nodes.map(n=>[n.id,n]));
for(const [rootId,personId,linkId,relation] of cases){
 const root=index.get(rootId),person=index.get(personId);
 assert.ok(root,"Root not found "+rootId);assertions++;
 assert.ok(person?.category==="persone","Person not found "+personId);assertions++;
 const matches=db.links.filter(e=>e.id===linkId);
 assert.equal(matches.length,1,"Edge missing or repeated "+linkId);assertions++;
 const edge=matches[0];
 assert.equal(edge.layer,"mundi");assertions++;
 assert.equal(edge.quality,"documentato");assertions++;
 assert.equal(edge.relation,relation);assertions++;
 assert.deepEqual(new Set([edge.source,edge.target]),new Set([rootId,personId]));assertions++;
 const state={depth:1,focus:null,trail:[rootId],trailEdges:[],
   cats:new Set(["persone","generi_forme"]),lenses:new Set(["musica"])};
 const f=new Function("state",code+"\nreturn withVerifiedRootHistoricalRelations;")(state);
 const empty={nodes:[root],links:[],parents:new Map(),distance:new Map([[rootId,0]])};
 const project=()=>f(db,db.links,index,root,empty);
 let view=project();
 assert.ok(view.nodes.some(n=>n.id===personId),"Person not shown "+linkId);assertions++;
 assert.equal(view.links.filter(e=>e.id===linkId).length,1);assertions++;
 state.cats.delete("persone");view=project();
 assert.ok(!view.nodes.some(n=>n.id===personId));assertions++;
 state.cats.add("persone");state.lenses.clear();view=project();
 assert.ok(!view.nodes.some(n=>n.id===personId));assertions++;
 state.lenses.add("musica");state.depth=0;view=project();
 assert.ok(!view.nodes.some(n=>n.id===personId));assertions++;
 state.depth=1;state.focus=personId;state.trail=[rootId,personId];state.trailEdges=[linkId];
 view=project();
 assert.ok(view.links.some(e=>e.id===linkId),"Focused historical link not retained");assertions++;
}
console.log("PASS 13 historical relations, "+assertions+" assertions");
