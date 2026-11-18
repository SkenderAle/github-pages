// Scena e danza: runtime sui JSON reali. Eseguire dalla radice repository:
// node musurgia-atlantis/audit-integrazione/TEST_SCENA_DANZA_RUNTIME_2026-11-18.mjs
// NON sostituisce il collaudo browser, WebGL o Android.
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {dirname,resolve} from "node:path";
import {fileURLToPath} from "node:url";
import {sourcePaths,buildUnifiedDatabase} from "./DB_UNIFICATO_MUNDI_ATLANTIS_LOTTO01_2026-11-15.mjs";
const here=dirname(fileURLToPath(import.meta.url)),root=resolve(here,"../..");
const input=Object.fromEntries(sourcePaths.map(({key,path})=>[
 key,JSON.parse(readFileSync(resolve(root,path),"utf8"))]));
assert.equal(sourcePaths.length,17);
const db=buildUnifiedDatabase(input);
assert.equal(db.counts.nodes,2897);
assert.equal(db.counts.links,8725);
assert.equal(db.counts.scene_staging_nodes,15);
assert.equal(db.counts.scene_staging_links,38);
assert.equal(db.counts.flaminio_source_records,500);
assert.equal(db.counts.orphan_links,0);
assert.equal(db.counts.duplicate_link_ids,0);
assert.equal(db.nodes.filter(n=>n.layer==="scene_staging"&&
 ["opere","eventi"].includes(n.category)).length,0);
assert.ok(db.nodes.some(n=>n.id==="mundi::genere-balletto"));
assert.ok(db.nodes.some(n=>n.id==="atlantis::senso:balletto"));
const links=db.links.filter(e=>e.layer==="scene_staging");
assert.ok(links.every(e=>!/same_as|candidate_same_arrangement|candidate_alignment/.test(e.relation)));
assert.ok(!links.some(e=>[e.source,e.target].includes("mundi::genere-balletto")&&
 [e.source,e.target].includes("atlantis::senso:balletto")));
const html=readFileSync(resolve(here,"VISTA_DB_FEDERATO_LOTTO01_2026-11-15.html"),"utf8");
const begin=html.indexOf("function sceneScopedProjection(");
const end=html.indexOf("function rootedProjection(",begin);
assert.ok(begin>0&&end>begin);
const fn=new Function("state",html.slice(begin,end)+"\nreturn sceneScopedProjection;");
const index=new Map(db.nodes.map(n=>[n.id,n])),cats=new Set(db.nodes.map(n=>n.category));
const usable=db.links.filter(e=>e.visibility!=="documentary"&&
 !/(HOLD|SOSPES|CONTESTAT|REJECTED)/i.test(e.quality||""));
function project(id){return fn({root:id,focus:null,trail:[id],trailEdges:[],depth:5,cats})(
 db,usable,index,index.get(id))}
const p="tax20261115scena::",has=(v,id)=>v.nodes.some(n=>n.id===id);
const danza=project(p+"family:danza");
assert.ok(has(danza,"atlantis::senso:balletto"));
assert.ok(has(danza,p+"form:suite-balletto"));
assert.ok(has(danza,"mundi::genere-balletto"));
const spettacolo=project(p+"family:spettacolo");
assert.ok(has(spettacolo,"atlantis::senso:operetta"));
assert.ok(has(spettacolo,"atlantis::senso:musical"));
const suite=project(p+"form:suite-balletto");
assert.ok(has(suite,"atlantis::opera:daphnis-suite-1"));
assert.ok(has(suite,"atlantis::opera:daphnis-suite-2"));
const stage=project(p+"kind:produzione");
assert.ok(has(stage,"atlantis::produzione:sagra-bausch-1975"));
assert.ok(has(stage,"atlantis::produzione:sagra-nizinskij-1913"));
const laValse=project(p+"kind:opera-coreografica");
assert.ok(has(laValse,"atlantis::opera:la-valse-ravel-1920"));
assert.ok(!has(laValse,"atlantis::produzione:la-valse-rubinstein-nizinska-1929"));
const mundiBalletto=project("mundi::genere-balletto");
assert.ok(!has(mundiBalletto,"atlantis::senso:balletto"));
const suiteMain=project("mundi::genere-suite");
assert.equal(suiteMain,null); // la radice Suite e' gestita dalla proiezione Suite precedente
console.log(JSON.stringify({status:"PASS_REAL_DATA_LOGIC_NOT_BROWSER",counts:db.counts,
 checks:{source_identity_reused:true,mundi_atlantis_balletto_hold:true,
 original_score_and_production_distinct:true,derived_suites_distinct:true,
 no_new_work_or_production:true,hold_no_identity_merge:true}},null,2));
