"use strict";
/**
 * CHECKPOINT 06 — PURE, READ-ONLY, STAGING ONLY.
 * Do not wire this into the live Atlantis UI before a browser/mobile acceptance test.
 * ProofRegistry must be loaded from a curated, version-controlled audit file,
 * NEVER constructed from user input or a browser filter.
 */
const SPECIFIC_GATES=new Set([
 "riscontro_storico_indipendente","versione_gluck_verificata",
 "redazione_o_ouverture_verificata","compositore_opera_rossini",
 "compositore_opera_paisiello","arrangiamento_non_composizione_originale",
 "versione_di_un_opera","versione_o_completamento_documentato"
]);
const COMPARATIVE_GATES=new Set([
 "stesso_soggetto_non_stessa_opera","stesso_soggetto_differenti_opere"
]);
const CONTEXT_CATEGORIES=new Set(["nodo-di-senso","luogo","strumento","rete-culturale"]);
const SPECIFIC_BRIDGES=new Set([
 "opera","versione-opera","parte-di-opera",
 "evento-storico","allestimento","produzione","documento-storico"
]);
const isEditorial=n=>n.category==="capitolo"||n.id.startsWith("cap:");
const safeUrl=u=>typeof u==="string"&&/^https:\/\/[^/]+/.test(u);
const validDepth=x=>Number.isInteger(x)&&x>=0&&x<=5;
function createRootedExplorer(graph,proofRegistry={schema:"root-evidence-v1",witnesses:[]}){
 if(!graph||!Array.isArray(graph.nodes)||!Array.isArray(graph.links))throw Error("Expected Atlantis {nodes,links}");
 if(!proofRegistry||proofRegistry.schema!=="root-evidence-v1"||!Array.isArray(proofRegistry.witnesses))throw Error("Invalid proof registry");
 const byId=new Map(),byEdgeId=new Set(),adj=new Map(),stats={specific:0,comparison:0,excluded:0};
 for(const n of graph.nodes){
  if(!n||typeof n.id!=="string"||!n.id||typeof n.category!=="string"||byId.has(n.id))throw Error("Invalid or duplicate node id");
  byId.set(n.id,n);
 }
 for(const e of graph.links){
  if(!e||typeof e.id!=="string"||!e.id||byEdgeId.has(e.id))throw Error("Invalid or duplicate edge id");
  byEdgeId.add(e.id);
  if(!byId.has(e.source)||!byId.has(e.target))throw Error("Unresolved endpoint: "+e.id);
  const classification=(isEditorial(byId.get(e.source))||isEditorial(byId.get(e.target))||
   e.historical_verified_independently!==true||
   !Array.isArray(e.evidence_urls)||!e.evidence_urls.some(safeUrl))?null:
   SPECIFIC_GATES.has(e.quality_gate)?"specific":
   COMPARATIVE_GATES.has(e.quality_gate)?"comparison":null;
  if(!classification){stats.excluded++;continue}
  stats[classification]++;
  for(const [from,to]of [[e.source,e.target],[e.target,e.source]]){
   if(!adj.has(from))adj.set(from,[]);
   adj.get(from).push({edge:e,other:to,classification});
  }
 }
 const evidence=new Map();
 for(const w of proofRegistry.witnesses){
  if(!w||w.status!=="approved"||typeof w.root!=="string"||!Array.isArray(w.path)||w.path.length<2||
    typeof w.edge_id!=="string"||typeof w.root_specific_claim!=="string"||w.root_specific_claim.trim().length<15||
    !Array.isArray(w.evidence_urls)||!w.evidence_urls.some(safeUrl)||
    !Array.isArray(w.reviewers)||new Set(w.reviewers).size<2||
    !w.reviewers.every(x=>typeof x==="string"&&x.trim().length>0))continue;
  const key=JSON.stringify([w.root,w.path,w.edge_id]);
  if(!evidence.has(key))evidence.set(key,w);
 }
 function explore(rootId,options={}){
  if(!byId.has(rootId))throw Error("Unknown root "+rootId);
  if(isEditorial(byId.get(rootId)))throw Error("Editorial chapter cannot be a historical root");
  const maxDepth=options.maxDepth??5;if(!validDepth(maxDepth))throw Error("maxDepth must be 0..5");
  const categoryLimits=options.depthByCategory||{};
  for(const [k,v]of Object.entries(categoryLimits))if(!validDepth(v))throw Error("Invalid category depth for "+k);
  const muted=new Set(options.mutedCategories||[]);
  const selected=new Map([[rootId,{depth:0,path:[rootId],from:null,reason:"root"}]]);
  const links=new Map(),queue=[rootId];
  for(let qi=0;qi<queue.length;qi++){
   const from=queue[qi],state=selected.get(from),node=byId.get(from),depth=state.depth;
   if(depth>=maxDepth)continue;
   if(depth>0&&CONTEXT_CATEGORIES.has(node.category))continue;
   for(const {edge,other,classification}of adj.get(from)||[]){
    const next=depth+1,otherNode=byId.get(other);
    if(next>maxDepth||next>(categoryLimits[otherNode.category]??maxDepth)||state.path.includes(other))continue;
    let permission=null;
    if(depth===0)permission=classification==="specific"?"direct_specific":"direct_comparison";
    else if(classification==="specific"&&depth===1&&SPECIFIC_BRIDGES.has(node.category)&&
      state.path.length===2&&state.path[0]===rootId)permission="same_specific_work_or_event";
    else if(classification==="specific"){
      const nextPath=[...state.path,other];
      const w=evidence.get(JSON.stringify([rootId,nextPath,edge.id]));
      if(w)permission="root_specific_evidence:"+w.edge_id;
    }
    if(!permission)continue;
    // A comparison is a visible statement but never an automatic transit bridge.
    const key=edge.id;
    if(!links.has(key))links.set(key,{...edge,root_permission:permission,at_root_depth:next,statement_type:classification});
    if(!selected.has(other)){
      selected.set(other,{depth:next,path:[...state.path,other],from,reason:permission});
      queue.push(other);
    }
   }
  }
  return {root:rootId,maxDepth,
    nodes:[...selected].map(([id,s])=>({...byId.get(id),_depth:s.depth,_path:s.path,_bridge:muted.has(byId.get(id).category),_permission:s.reason})),
    links:[...links.values()],catalogue:{...stats},note:"Audit-only. No legacy relation inferred or auto-merged."};
 }
 function relationDetail(edge,perspectiveId){
  if(!edge||![edge.source,edge.target].includes(perspectiveId))throw Error("Perspective must be an endpoint");
  const forward=perspectiveId===edge.source;
  return {edge_id:edge.id,from:perspectiveId,to:forward?edge.target:edge.source,
   direction:forward?"forward":"reverse",phrase:forward?(edge.forward??null):(edge.reverse??null),
   description:edge.description??null,note:edge.note??null,
   sources:[...(Array.isArray(edge.sources)?edge.sources:edge.evidence_urls||[])],
   original_relation:edge};
 }
 return {explore,relationDetail,catalogue:{...stats},registered_proofs:evidence.size};
}
module.exports={createRootedExplorer};
