import {auditQ7B} from "./TEST_Q7B_LOTTO03_A420.mjs";
import assert from "node:assert/strict";
import {readFileSync,writeFileSync} from "node:fs";
import {resolve,dirname} from "node:path";
import {fileURLToPath} from "node:url";
import {createHash} from "node:crypto";
import {buildUnifiedDatabase,sourcePaths,projectForViewer} from "../DB_UNIFICATO_MUNDI_ATLANTIS_LOTTO01_2026-11-15.mjs";
import {withLot02A17,candidatePins} from "./LOTTO02_LOADER_A17_PREVIEW_2026-11-28.mjs";
import {applyLot03A400} from "./APPLICA_LOTTO03_A400_PREVIEW.mjs";
import {applyReviewA25} from "./APPLICA_REVISIONE_A25.mjs";
import {applyReviewA24} from "./APPLICA_REVISIONE_A24.mjs";
import {applyReviewA21} from "./APPLICA_REVISIONE_A21.mjs";
const here=dirname(fileURLToPath(import.meta.url)),root=resolve(here,"../../..");
const read=(p,pin)=>{const b=readFileSync(p);const actual=createHash("sha1").update("blob "+b.length+"\0").update(b).digest("hex");assert.equal(actual,pin,p);return b;};
const cert=JSON.parse(readFileSync(resolve(here,"../CERTIFICAZIONE_FASE1_2026-11-28.json"),"utf8"));
const gate=JSON.parse(readFileSync(resolve(here,"LOTTO02_A17_GATE_PREVIEW_2026-11-28.json"),"utf8"));
const report={schema:"flaminio-ci-v1",lot:3,node:process.version,checks:[],modes:{},status:"FAIL"};
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
const review=JSON.parse(read(resolve(here,"LOTTO02_A21_REVISIONE.json"),"bfb721eddfdb50edbc30b83c8864ff4576d7d4e5"));
const overlayBefore=JSON.stringify(overlays);
const revised=applyReviewA21(overlays,review);
const a21=mode=>withLot02A17(base,mode,revised[0],revised[1],revised[2],revised.slice(3));
const oldFull=apply("full-review-preview");
const oldLimited=apply("corroborated-preview");
const newFull=a21("full-review-preview"),newLimited=a21("corroborated-preview");
const targets=new Set(review.decisions.map(d=>d.id));
const oldNodes=new Map(oldFull.nodes.map(n=>[n.id,n]));
check("A21 original overlays unchanged",()=>assert.equal(JSON.stringify(overlays),overlayBefore));
check("A21 full graph cardinality",()=>{assert.equal(newFull.nodes.length,3849);assert.equal(newFull.links.length,9739);});
check("A21 reviewed coverage",()=>{assert.equal(newLimited.lot02_a17.candidate_source_nodes,275);assert.equal(newLimited.lot02_a17.index_only_deferred,126);});
for(const g of [newFull,newLimited]){
 const ids=new Set(g.nodes.map(n=>n.id));
 check("A21 "+g.lot02_a17.mode+" integrity",()=>{assert.equal(ids.size,g.nodes.length);assert.equal(new Set(g.links.map(e=>e.id)).size,g.links.length);assert.ok(g.links.every(e=>ids.has(e.source)&&ids.has(e.target)&&e.source!==e.target));});
 check("A21 "+g.lot02_a17.mode+" preserves raw payloads",()=>{for(const n of g.nodes)if(oldNodes.has(n.id))assert.deepEqual(n.provenance,oldNodes.get(n.id).provenance);});
 check("A21 "+g.lot02_a17.mode+" patch present",()=>assert.ok(g.links.some(e=>e.id===review.taxonomy_patch.id)));
 for(const d of review.decisions)check("A21 "+g.lot02_a17.mode+" "+d.id,()=>{const n=g.nodes.find(n=>n.id===d.id);assert.ok(n);assert.ok(d.aliases.every(a=>n.aliases.includes(a)));assert.ok(d.independent_evidence.every(u=>n.metadata.evidence_urls.includes(u)));assert.ok(!n.metadata.quality.includes("PENDING_INDEPENDENT_REVIEW"));});
}
check("A21 all previous limited nodes retained",()=>{const ids=new Set(newLimited.nodes.map(n=>n.id));assert.ok(oldLimited.nodes.every(n=>ids.has(n.id)));});
check("A21 full graph adds only one edge",()=>{const prior=new Set(oldFull.links.map(e=>e.id));assert.deepEqual(newFull.links.filter(e=>!prior.has(e.id)).map(e=>e.id),[review.taxonomy_patch.id]);});
report.a21={reviewed:7,remaining:126,full:{nodes:newFull.nodes.length,links:newFull.links.length},limited:{nodes:newLimited.nodes.length,links:newLimited.links.length},status:"STRUCTURAL_PREVIEW_ONLY"};

read(resolve(here,"APPLICA_REVISIONE_A24.mjs"),"9223d24a7f899b96c800dd71e9b2f7073d36bd98");
const r23=JSON.parse(read(resolve(here,"LOTTO02_A23_CONFRONTO_OVERLAY_2026-11-28.json"),"cf4b29c35a79b808f9b0e6e452602d4bcc171b0f"));
const a21Before=JSON.stringify(revised),a24overlays=applyReviewA24(revised,r23);
const a24=mode=>withLot02A17(base,mode,a24overlays[0],a24overlays[1],a24overlays[2],a24overlays.slice(3));
const f24=a24("full-review-preview"),l24=a24("corroborated-preview"),selected=r23.rows.filter(r=>r.status==="IDENTITY_AND_SCOPE_CORROBORATED_PENDING_CI");
check("A24 A21 unchanged",()=>assert.equal(JSON.stringify(revised),a21Before));
check("A24 coverage",()=>{assert.equal(l24.lot02_a17.candidate_source_nodes,318);assert.equal(l24.lot02_a17.index_only_deferred,83);assert.equal(f24.nodes.length,newFull.nodes.length);assert.equal(f24.links.length,newFull.links.length);});
check("A24 preserves previous limited graph",()=>{const n=new Set(l24.nodes.map(n=>n.id)),e=new Set(l24.links.map(e=>e.id));assert.ok(newLimited.nodes.every(x=>n.has(x.id)));assert.ok(newLimited.links.every(x=>e.has(x.id)));});
for(const g of [f24,l24]){
 const ids=new Set(g.nodes.map(n=>n.id)),emap=new Map(g.links.map(e=>[e.id,e])),nmap=new Map(g.nodes.map(n=>[n.id,n]));
 check("A24 "+g.lot02_a17.mode+" integrity",()=>{assert.equal(ids.size,g.nodes.length);assert.equal(emap.size,g.links.length);assert.ok(g.links.every(e=>ids.has(e.source)&&ids.has(e.target)&&e.source!==e.target));});
 for(const d of selected)check("A24 "+g.lot02_a17.mode+" "+d.id,()=>{const n=nmap.get(d.id);assert.ok(n);assert.ok(n.metadata.evidence_urls.includes(d.independent_record));assert.deepEqual(n.provenance,oldNodes.get(n.id).provenance);assert.ok(d.edge_ids.every(id=>emap.has(id)&&!emap.get(id).quality.includes("PENDING_INDEPENDENT_REVIEW")));});
}
check("A24 held exceptions remain excluded",()=>{for(const d of r23.rows.filter(r=>r.status==="HOLD_REVIEW"))assert.ok(!l24.nodes.some(n=>n.id===d.id));});
report.a24={reviewed:43,remaining:83,full:{nodes:f24.nodes.length,links:f24.links.length},limited:{nodes:l24.nodes.length,links:l24.links.length},status:"STRUCTURAL_PREVIEW_ONLY"};


read(resolve(here,"APPLICA_REVISIONE_A25.mjs"),"ff9138eb6004be0a7bfba95b39f90850e47a4bc8");
const r25=JSON.parse(read(resolve(here,"LOTTO02_A25_RESIDUI_CLORI_2026-11-28.json"),"49d3a77def29307c2764f8249da12561e07d184c"));
const prior24=JSON.stringify(a24overlays),o25=applyReviewA25(a24overlays,r25),a25=mode=>withLot02A17(base,mode,o25[0],o25[1],o25[2],o25.slice(3)),f25=a25("full-review-preview"),l25=a25("corroborated-preview");
check("A25 preserves A24",()=>assert.equal(JSON.stringify(a24overlays),prior24));
check("A25 coverage",()=>{assert.equal(l25.lot02_a17.candidate_source_nodes,398);assert.equal(l25.lot02_a17.index_only_deferred,3);assert.equal(f25.nodes.length,f24.nodes.length);assert.equal(f25.links.length,f24.links.length);});
for(const g of [f25,l25]){
 const ids=new Set(g.nodes.map(n=>n.id)),emap=new Map(g.links.map(e=>[e.id,e])),nmap=new Map(g.nodes.map(n=>[n.id,n]));
 check("A25 "+g.lot02_a17.mode+" integrity",()=>{assert.equal(ids.size,g.nodes.length);assert.equal(emap.size,g.links.length);assert.ok(g.links.every(e=>ids.has(e.source)&&ids.has(e.target)&&e.source!==e.target));});
 check("A25 "+g.lot02_a17.mode+" serenata correction",()=>{assert.ok(!ids.has(r25.parent_patch.id));assert.equal(nmap.get(r25.parent_patch.replacement_id).metadata.year,1693);assert.ok(r25.parent_patch.affected_edges.every(id=>[emap.get(id).source,emap.get(id).target].includes(r25.parent_patch.replacement_id)));});
 for(const d of r25.rows.filter(r=>r.status!=="HOLD_REVIEW"))check("A25 "+g.lot02_a17.mode+" "+d.id,()=>{const n=nmap.get(d.id);assert.ok(n);assert.ok(d.evidence.every(u=>n.metadata.evidence_urls.includes(u)));assert.deepEqual(n.provenance,oldNodes.get(n.id).provenance);assert.ok(d.edge_ids.every(id=>emap.has(id)&&!emap.get(id).quality.includes("PENDING_INDEPENDENT_REVIEW")));});
}
check("A25 held exceptions excluded",()=>{for(const d of r25.rows.filter(r=>r.status==="HOLD_REVIEW"))assert.ok(!l25.nodes.some(n=>n.id===d.id));});
report.a25={reviewed:80,remaining:3,full:{nodes:f25.nodes.length,links:f25.links.length},limited:{nodes:l25.nodes.length,links:l25.links.length},status:"STRUCTURAL_PREVIEW_ONLY"};


read(resolve(here,"APPLICA_LOTTO03_A400_PREVIEW.mjs"),"89543452d95350676e373272ea07959d0cfc137b");
const doc03=JSON.parse(read(resolve(here,"LOTTO03_A43_OVERLAY_DOCUMENTARIO_2026-11-28.json"),"3a38827f8293d61eec8f33abaf6a7165fa9bff96"));
const preview03=JSON.parse(read(resolve(here,"LOTTO03_A350_GRAFO_PREVIEW_RUOLI_TASSONOMIA_2026-11-28.json"),"ac31bb2b61f9170d7402017a96d673922d2cacbd"));
const ledger03=JSON.parse(read(resolve(here,"LOTTO03_A250_LEDGER_REVISIONE_500_2026-11-28.json"),"6f83de85543dc18fa0ceccd1b9651b19bacfe8de"));
const old25=JSON.stringify(l25),a400=applyLot03A400(l25,"isolated-audit-preview",doc03,preview03,ledger03),a400nodes=new Map(a400.nodes.map(n=>[n.id,n]));
const added400=a400.links.slice(l25.links.length);
check("A400 off exact identity",()=>assert.equal(applyLot03A400(l25,"off",doc03,preview03,ledger03),l25));
check("A400 A25 immutable",()=>assert.equal(JSON.stringify(l25),old25));
check("A400 counts",()=>{assert.equal(a400.nodes.length,4891);assert.equal(a400.links.length,10934);assert.equal(added400.length,1213);});
check("A400 IDs and endpoints",()=>{assert.equal(a400nodes.size,a400.nodes.length);assert.equal(new Set(a400.links.map(e=>e.id)).size,a400.links.length);assert.ok(a400.links.every(e=>a400nodes.has(e.source)&&a400nodes.has(e.target)&&e.source!==e.target));});
check("A400 raw documentary exact",()=>{for(const n of doc03.nodes)assert.deepEqual(a400nodes.get(n.id),n);});
check("A400 roles and documentary",()=>{assert.equal(added400.filter(e=>e.relation==="elabora_melodia_tradizionale").length,48);assert.equal(added400.filter(e=>e.visibility==="documentary").length,6);});
check("A400 HOLD not musical",()=>{for(const r of ledger03.rows.filter(r=>r.disposition==="HOLD"))assert.ok(!a400nodes.has("flaminio_lot03::preview:work:"+r.source_id.split(":").pop()));});
const roots400=[...new Set(preview03.external_edge_proposals.filter(e=>["compone","elabora_melodia_tradizionale"].includes(e.relation)).map(e=>e.source)),...preview03.taxonomy_node_proposals.map(n=>n.id)];
check("A400 expected roots",()=>assert.equal(roots400.length,12));
for(const rootId of roots400)for(let depth=1;depth<=5;depth++)check("A400 projection "+rootId+" "+depth,()=>{const p=projectForViewer(a400,{rootId,depth});const ids=new Set(p.nodes.map(n=>n.id));assert.ok(ids.has(rootId));assert.ok(p.nodes.every(n=>n.visibility!=="documentary"));assert.ok(p.links.every(e=>ids.has(e.source)&&ids.has(e.target)));});
check("A400 vocal family reaches all four works at depth 2",()=>{const ids=new Set(projectForViewer(a400,{rootId:preview03.taxonomy_node_proposals[0].id,depth:2}).nodes.map(n=>n.id));for(const n of ["8204","8205","8209","8756"])assert.ok(ids.has("flaminio_lot03::preview:work:"+n));});
report.a400={nodes:a400.nodes.length,links:a400.links.length,added:added400.length,roots:roots400.length,redirected:a400.lot03_a400.redirected,status:"STRUCTURAL_PREVIEW_ONLY"};

// A420: Q7B is a separate diagnostic; failures explicitly prevent GUI certification, not structural certification.
try{report.q7b=auditQ7B(a400,preview03);report.q7b.status=report.q7b.fail?"BLOCKED_Q7B":"PASS_LOGIC_ONLY";}catch(e){report.q7b={status:"BLOCKED_Q7B_EXECUTION",error:String(e.stack||e)};}
writeFileSync("flaminio-q7b-a420-report.json",JSON.stringify(report.q7b,null,2)+"\n");
check("base unchanged",()=>assert.equal(JSON.stringify(base),before));
}catch(e){report.checks.push({name:"execution",pass:false,detail:String(e.stack||e)});}
report.pass=report.checks.filter(c=>c.pass).length;report.fail=report.checks.length-report.pass;report.status=report.fail?"FAIL":"PASS_STRUCTURAL_PREVIEW_NOT_GUI_CERTIFIED";
writeFileSync("flaminio-a400-ci-report.json",JSON.stringify(report,null,2)+"\n");
console.log(JSON.stringify(report,null,2));if(report.fail)process.exitCode=1;
