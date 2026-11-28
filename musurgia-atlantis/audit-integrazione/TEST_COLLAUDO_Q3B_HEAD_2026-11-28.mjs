// Q2: node musurgia-atlantis/audit-integrazione/TEST_COLLAUDO_Q3B_HEAD_2026-11-28.mjs
// Checkpoint fisso; non test browser.
import {readFileSync} from "node:fs";
import {dirname,resolve} from "node:path";
import {fileURLToPath} from "node:url";
import {createHash} from "node:crypto";
import {sourcePaths,buildUnifiedDatabase} from "./DB_UNIFICATO_MUNDI_ATLANTIS_LOTTO01_2026-11-15.mjs";
const here=dirname(fileURLToPath(import.meta.url)),root=resolve(here,"../..");
const sha=b=>createHash("sha1").update("blob "+b.length+"\0").update(b).digest("hex");
function load(path,expected){const b=readFileSync(path);if(expected&&sha(b)!==expected)throw Error("Blob non corrispondente: "+path);return b.toString("utf8")}
const manifest={
  "mundi": "57c65e209628b0fe43d0d5040bd27deb7e1624c8",
  "extension": "0fa3fa708c0fc45ef2d8f0a24221c8dcf3290f13",
  "special": "b25f0487d05bdab261d2e0df9044fff5aaf98e47",
  "atlantis": "4863b3fe263154387de3388c0b813b5f94546f12",
  "staging": "6f1793f3d8b07469a458c7bbbd768eb8cb37050e",
  "registry": "25cafe3ebff7a19ab4ee207342071decd8971e2d",
  "crosswalk": "8519681db00f905423bd27db85c0a4c7b9d997f4",
  "curated": "798383b821d773fb00160b8081b7a58b960b2019",
  "sonata_overlay": "913f8c6223619ef0f62f4baa14b2fdf25d2628b7",
  "sonata_works": "58b2445ca2d049743b6dcbea8024f37b2752e902",
  "suite_overlay": "c17e0436ba2c18806ceb9ee0e738593bfa8527aa",
  "structures_overlay": "3b5095912f780887ee8ea1ca6c6aa57aef6b28e0",
  "counterpoint_overlay": "590086595aece327967d7d6115299508aebd13fd",
  "dance_overlay": "8211a62fd33460ece41f20b691b38d738679a8a6",
  "short_overlay": "95bc8d23bd1932a855309f07a44bc012ee2cd96d",
  "scene_overlay": "2d340cc68ae88c74d489c06e680e7428a041fa6a",
  "vocal_overlay": "4f69147f4f3d41af3c38aeee9cb08881dc3a9859"
};
const db=buildUnifiedDatabase(Object.fromEntries(sourcePaths.map(({key,path})=>[key,JSON.parse(load(resolve(root,path),manifest[key]))])));
const html=load(resolve(here,"VISTA_DB_FEDERATO_LOTTO01_2026-11-15.html"),"166b4b0bb09c0288716370ff7ca40c74b1a3b8c7");
load(resolve(here,"DB_UNIFICATO_MUNDI_ATLANTIS_LOTTO01_2026-11-15.mjs"),"3ba6cf270c11786cc6061257c73f2d5835f24e22");
const baseline=JSON.parse(load(resolve(here,"REGRESSIONE_RICONCILIAZIONE_531_PERSONE_2026-11-21.json"),"1c59051f0097e50c2eb670d8d39d39fae7eb5be2"));
const residual=JSON.parse(load(resolve(here,"REGISTRO_210_RESIDUI_POST_SEI_GRUPPI_2026-11-28.json"),"e0526829d0d610934daf09a564fba5a0537d6335"));
function runQ2(db,html,baseline){
 const slice=(a,z)=>{const i=html.indexOf(a),j=html.indexOf(z,i);if(i<0||j<=i)throw Error("Sezione assente "+a);return html.slice(i,j)};
 const logic=slice("const lensGroupToUI=","function availableLensCounts(")+slice("function comparisonProjection(","// Il doppio clic crea")+slice("function sonataScopedProjection(","function recordNodePosition(")+slice("function selectSubnode(","function edgeReason(")+slice("function restartFromNode(","let delayedWebGLClick");
 const state={db,manualPositions:new Map()},ui={};const $=id=>ui[id]??={value:"",disabled:false};let view;
 const api=new Function("state","$","draw","showNode","openDetails","restoreComparisonLabels","selectRoot",logic+"\nreturn {rootedProjection,lensBucket,selectSubnode,goBackFocus,restartFromNode};")(state,$,()=>{view=api.rootedProjection(db);state.renderedLinks=view.links},()=>{},()=>{},()=>{},id=>{state.root=id;state.focus=null;state.trail=[id];state.trailEdges=[];state.comparison=null;state.focusHistory=[];view=api.rootedProjection(db);state.renderedLinks=view.links});
 const cats=new Set(db.nodes.filter(n=>n.visibility!=="documentary").map(n=>n.category)),lenses=new Set(["musica","trasmissioni","genealogie","collaborazioni"]),edgeIndex=new Map(db.links.map(e=>[e.id,e])),adj=new Map();
 const failures=[],counts={};function check(name,ok,detail){counts[name]??={pass:0,fail:0};counts[name][ok?"pass":"fail"]++;if(!ok)failures.push({name,detail})}
 const blocked=e=>e.visibility==="documentary"||/(HOLD|SOSPES|CONTESTAT|REJECTED|STAGING_CANDIDATE_FORM_LINK_NOT_IDENTITY)/i.test([e.quality,e.relation,e.original?.relation,e.original?.quality_gate,e.original?.status,e.original?.verification_status].filter(Boolean).join(" "));
 for(const e of db.links)for(const id of [e.source,e.target]){if(!adj.has(id))adj.set(id,[]);adj.get(id).push(e)}
 function project(root,opts={}){Object.assign(state,{root,focus:null,trail:root?[root]:[],trailEdges:[],focusHistory:[],depth:5,cats,lenses,comparison:null},opts);view=api.rootedProjection(db);state.renderedLinks=view.links;return view}
 function valid(q,root){const ids=new Set(q.nodes.map(n=>n.id));return ids.size===q.nodes.length&&(!root||ids.has(root))&&q.links.every(e=>ids.has(e.source)&&ids.has(e.target)&&!blocked(e))&&new Set(q.links.map(e=>e.id)).size===q.links.length}
 const oldIDs=new Set(baseline.records.map(r=>r.root_id+"|"+r.edge_id)),now=new Set(),layers=new Set(["mundi","mundi_extension","atlantis"]);
 check("db_integrity",db.counts.nodes===2897&&db.counts.links===8743&&db.counts.unique_flaminio_source_records===500&&db.counts.missing_source_rows===0&&db.counts.orphan_links===0&&db.counts.duplicate_link_ids===0,db.counts);
 for(const r of baseline.roots){
  for(let depth=1;depth<=5;depth++){const q=project(r.id,{depth});check("root_depth_integrity",valid(q,r.id),{root:r.id,depth});if(depth===5){const vis=new Set(q.links.map(e=>e.id));for(const e of adj.get(r.id)||[])if(layers.has(e.layer)&&!blocked(e)&&!vis.has(e.id))now.add(r.id+"|"+e.id)}}
  const off=project(r.id,{lenses:new Set()});check("all_lenses_off",off.nodes.length===1&&off.links.length===0&&off.nodes[0].id===r.id,r.id);
  for(const l of lenses){const q=project(r.id,{depth:1,lenses:new Set([l])});check("single_lens",valid(q,r.id)&&q.links.every(e=>api.lensBucket(e)===null||api.lensBucket(e)===l),{root:r.id,l})}
 }
 check("no_new_exclusions",[...now].every(k=>oldIDs.has(k)),[...now].filter(k=>!oldIDs.has(k)));
 const recovered=baseline.records.filter(r=>!now.has(r.root_id+"|"+r.edge_id));check("recovered_494",recovered.length===494&&now.size===210,recovered.length);
 const maps=new Map();for(const m of html.matchAll(/const (macro[A-F]FormRules|macroGLFormRules)=new Map\((\[\[.*?\]\])\);/g))for(const [id,rule] of JSON.parse(m[2])){if(maps.has(id))throw Error("Duplicate "+id);maps.set(id,rule)}
 for(const [id,rule] of maps){
  const edge=edgeIndex.get(id),root=rule.root,person=rule.person;
  const base=project(root);check("allowlist_direction_visibility",!!edge&&edge.source===person&&edge.target===root&&edge.relation===rule.relation&&edge.quality===rule.quality&&base.links.some(e=>e.id===id),{id,root,person});
  const q=project(root,{focus:person,trail:[root,person],trailEdges:[id]});check("allowlist_focus",q.nodes.some(n=>n.id===root)&&q.nodes.some(n=>n.id===person)&&q.links.some(e=>e.id===id),id);
  const hidden=project(root,{cats:new Set([...cats].filter(x=>x!=="persone"))});check("allowlist_filter_people",!hidden.links.some(e=>e.id===id),id);
  const off=project(root,{lenses:new Set([...lenses].filter(x=>x!=="musica"))});check("allowlist_music_off",!off.links.some(e=>e.id===id),id);
 }
 const clickRoots=[...new Set([...maps.values()].map(x=>x.root))];
 for(const root of clickRoots){const base=project(root);const chosen=[...maps].find(([id,r])=>r.root===root&&base.links.some(e=>e.id===id));if(!chosen)continue;const [id,r]=chosen;
  api.selectSubnode(r.person);const current=view;const trailOk=state.trail[0]===root&&state.trail.at(-1)===r.person&&state.trailEdges.length===state.trail.length-1&&state.trailEdges.every(k=>current.links.some(e=>e.id===k));
  check("click_breadcrumb",trailOk&&state.focus===r.person,{root,person:r.person,trail:state.trail,edges:state.trailEdges});
  api.goBackFocus();check("back_focus",state.root===root&&state.focus===null&&state.trail.length===1&&state.trailEdges.length===0,root);
  api.restartFromNode(r.person);check("restart_state",state.root===r.person&&state.depth===1&&state.trail.length===1&&!state.focus&&!state.trailEdges.length,root);
 }
 const bach=project("atlantis::pers:bach");check("bach_469_470",bach.nodes.length===469&&bach.links.length===470,[bach.nodes.length,bach.links.length]);
 const overview=project(null);check("overview_integrity",valid(overview,null)&&overview.overview===true,{n:overview.nodes.length,e:overview.links.length});
 check("overview_no_lenses",project(null,{lenses:new Set()}).links.length===0,null);
 return {counts,details:{residuals:now.size,recovered:recovered.length,allowlist:maps.size,clickRoots:clickRoots.length,overview:{nodes:overview.nodes.length,links:overview.links.length}},failures,residualKeys:[...now].sort()};
}
const report=runQ2(db,html,baseline);
const expected=new Set(residual.records.map(r=>r.root_id+"|"+r.edge_id));
const actual=new Set(report.residualKeys);
const exact=actual.size===expected.size&&[...actual].every(k=>expected.has(k));
report.counts.exact_residual_set={pass:Number(exact),fail:Number(!exact)};
if(!exact)report.failures.push({name:"exact_residual_set",missing:[...expected].filter(k=>!actual.has(k)),extra:[...actual].filter(k=>!expected.has(k))});
console.log(JSON.stringify(report,null,2));
if(report.failures.length)process.exitCode=1;
