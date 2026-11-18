// Vocale sacro/profano: test del builder sui JSON reali, NON browser/WebGL.
// Dalla radice: node musurgia-atlantis/audit-integrazione/TEST_VOCALE_SACRO_PROFANO_RUNTIME_2026-11-18.mjs
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {dirname,resolve} from "node:path";
import {fileURLToPath} from "node:url";
import {sourcePaths,buildUnifiedDatabase} from "./DB_UNIFICATO_MUNDI_ATLANTIS_LOTTO01_2026-11-15.mjs";
const here=dirname(fileURLToPath(import.meta.url)),root=resolve(here,"../..");
const data=Object.fromEntries(sourcePaths.map(({key,path})=>[
 key,JSON.parse(readFileSync(resolve(root,path),"utf8"))]));
assert.equal(sourcePaths.length,17);
const db=buildUnifiedDatabase(data);
assert.equal(db.counts.nodes,2897);assert.equal(db.counts.links,8725);
assert.equal(db.counts.vocal_staging_nodes,20);
assert.equal(db.counts.vocal_staging_links,49);
assert.equal(db.counts.flaminio_source_records,500);
assert.equal(db.counts.orphan_links,0);
assert.equal(db.counts.duplicate_link_ids,0);
assert.equal(db.nodes.filter(n=>n.layer==="vocal_staging"&&n.category==="opere").length,0);
assert.ok(!db.nodes.some(n=>n.id==="tax20261115vf::genre:magnificat"));
const a=db.links.filter(e=>e.layer==="vocal_staging");
assert.ok(a.every(e=>!/same_as|candidate_alignment|canonical_role_alignment/.test(e.relation)));
assert.ok(a.some(e=>e.source==="atlantis::senso:cantata"||
 e.target==="atlantis::senso:cantata"));
assert.ok(!a.some(e=>[e.source,e.target].includes("flaminio::audit:fl01:jsb04:genre:magnificat")));
const html=readFileSync(resolve(here,"VISTA_DB_FEDERATO_LOTTO01_2026-11-15.html"),"utf8");
const begin=html.indexOf("function vocalScopedProjection(");
const end=html.indexOf("function rootedProjection(",begin);
assert.ok(begin>0&&end>begin);
const fn=new Function("state",html.slice(begin,end)+"\nreturn vocalScopedProjection;");
const index=new Map(db.nodes.map(n=>[n.id,n])),cats=new Set(db.nodes.map(n=>n.category));
const edges=db.links.filter(e=>e.visibility!=="documentary"&&
 !/(HOLD|SOSPES|CONTESTAT|REJECTED)/i.test(e.quality||""));
function project(root){return fn({root,focus:null,trail:[root],trailEdges:[],depth:5,cats})(
 db,edges,index,index.get(root));}
const p="tax20261115vf::",has=(v,id)=>v.nodes.some(n=>n.id===id);
const sacro=project(p+"family:sacro"),profano=project(p+"family:profano");
assert.ok(has(sacro,"mundi::genere-messa"));
assert.ok(has(sacro,p+"genre:cantata-sacra"));
assert.ok(has(profano,p+"genre:cantata-profana"));
const cantata=project("atlantis::senso:cantata");
assert.ok(has(cantata,p+"genre:cantata-sacra"));
assert.ok(has(cantata,p+"genre:cantata-profana"));
assert.ok(!has(cantata,"atlantis::senso:oratorio"));
const org=project(p+"genre:preludio-corale-organo");
assert.ok(has(org,p+"genre:corale-luterano"));
assert.ok(!has(sacro,p+"genre:preludio-corale-organo"));
const lied=project("atlantis::senso:lied");
assert.ok(has(lied,p+"genre:lied-ciclo"));
const war=project(p+"genre:requiem");
assert.ok(has(war,"atlantis::opera:britten-war-requiem-op66-1962"));
console.log(JSON.stringify({status:"PASS_REAL_DATA_LOGICAL_NOT_BROWSER",counts:db.counts,
 tests:{crosswalk_reused:true,functions_not_genres:true,organ_not_vocal:true,
 no_auto_works:true,magnificat_held:true}},null,2));
