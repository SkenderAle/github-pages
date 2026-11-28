import assert from "node:assert/strict";
import {readFileSync,writeFileSync} from "node:fs";
import {resolve,dirname} from "node:path";
import {fileURLToPath} from "node:url";
import {createHash} from "node:crypto";
import {buildUnifiedDatabase,sourcePaths,projectForViewer} from "../DB_UNIFICATO_MUNDI_ATLANTIS_LOTTO01_2026-11-15.mjs";
import {withLot02A17,candidatePins} from "./LOTTO02_LOADER_A17_PREVIEW_2026-11-28.mjs";
const here=dirname(fileURLToPath(import.meta.url)),root=resolve(here,"../../..");
const read=(p,pin)=>{const b=readFileSync(p);const actual=createHash("sha1").update("blob "+b.length+"\0").update(b).digest("hex");assert.equal(actual,pin,p);return b;};
const cert=JSON.parse(readFileSync(resolve(here,"../CERTIFICAZIONE_FASE1_2026-11-28.json"),"utf8"));
const gate=JSON.parse(readFileSync(resolve(here,"LOTTO02_A17_GATE_PREVIEW_2026-11-28.json"),"utf8"));
const report={schema:"flaminio-ci-v1",lot:2,node:process.version,checks:[],modes:{},status:"FAIL"};
const check=(name,fn)=>{try{fn();report.checks.push({name,pass:true});}catch(e){report.checks.push({name,pass:false,detail:String(e)});}};
try{
for(const p of cert.pins)read(resolve(root,p.path),p.sha);
for(const [file,key] of [["LOTTO02_OVERLAY_LOADER_A4_2026-11-28.mjs","loader_a4"],["APPLICA_CROSSWALK_A7_2026-11-28.mjs","applicator_a7"],["LOTTO02_LOADER_A17_PREVIEW_2026-11-28.mjs","loader_a17"]])read(resolve(here,file),gate.inputs[key]);
const data=Object.fromEntries(sourcePaths.map(({key,path})=>[key,JSON.parse(read(resolve(root,path),cert.pins.find(p=>p.key===key).sha))]));
const base=buildUnifiedDatabase(data),before=JSON.stringify(base);
const overlays=candidatePins.map(({path,blob})=>JSON.parse(read(resolve(here,path),blob)));
const apply=mode=>withLot02A17(base,mode,overlays[0],overlays[1],overlays[2],overlays.slice(3));
check("baseline cardinality",()=>{assert.equal(base.nodes.length,2897);assert.equal(base.links.length,8743);assert.equal(base.flaminio_records.length,500);});
check("off identity",()=>assert.equal(apply("off"),base));
const modes=[["corroborated-preview",3711,9373,268],["full-review-preview",3849,9738,401]];
for(const [mode,nc,ec,sc] of modes){
 const g=apply(mode),ids=new Set(g.nodes.map(n=>n.id)),edges=new Set(g.links.map(e=>e.id));
 report.modes[mode]={nodes:g.nodes.length,links:g.links.length,...g.lot02_a17};
 check(mode+" expected counts",()=>{assert.equal(g.nodes.length,nc);assert.equal(g.links.length,ec);assert.equal(g.lot02_a17.candidate_source_nodes,sc);});
 check(mode+" integrity",()=>{assert.equal(ids.size,g.nodes.length);assert.equal(edges.size,g.links.length);assert.ok(g.links.every(e=>ids.has(e.source)&&ids.has(e.target)&&e.source!==e.target));});
 check(mode+" old records unchanged",()=>assert.deepEqual(g.flaminio_records,base.flaminio_records));
 check(mode+" baseline provenance retained",()=>{const alias=g.semantic_a7.redirect;const index=new Map(g.nodes.map(n=>[n.id,n]));for(const n of base.nodes){const t=index.get(alias[n.id]||n.id);assert.ok(t,n.id);for(const p of n.provenance||[])assert.ok(t.provenance?.some(q=>JSON.stringify(q)===JSON.stringify(p)),n.id);}});
 check(mode+" documentary source coverage",()=>{const docs=overlays[0].nodes;assert.equal(docs.length,500);for(const n of docs){const t=g.nodes.find(x=>x.id===n.id);assert.ok(t,n.id);assert.deepEqual(t.provenance,n.provenance);}});
 const roots=g.nodes.filter(n=>/^(Johann Sebastian Bach|Wolfgang Amadeus Mozart|Ludwig van Beethoven|Giovanni Bononcini|Ernest Bloch|Sonata|Concerto|Suite|Cantata|Musica da camera)$/i.test(n.name)&&["persone","generi_forme"].includes(n.category));
 check(mode+" roots found",()=>assert.ok(roots.length>=5));
 for(const n of roots)for(let depth=1;depth<=5;depth++)check(mode+" projection "+n.id+" "+depth,()=>{const p=projectForViewer(g,{rootId:n.id,depth});const s=new Set(p.nodes.map(x=>x.id));assert.ok(s.has(n.id));assert.ok(p.nodes.every(x=>x.visibility!=="documentary"));assert.ok(p.links.every(e=>s.has(e.source)&&s.has(e.target)));});
}
check("base unchanged",()=>assert.equal(JSON.stringify(base),before));
}catch(e){report.checks.push({name:"execution",pass:false,detail:String(e.stack||e)});}
report.pass=report.checks.filter(c=>c.pass).length;report.fail=report.checks.length-report.pass;report.status=report.fail?"FAIL":"PASS_STRUCTURAL_PREVIEW_NOT_GUI_CERTIFIED";
writeFileSync("flaminio-ci-report.json",JSON.stringify(report,null,2)+"\n");
console.log(JSON.stringify(report,null,2));if(report.fail)process.exitCode=1;
