/* Musurgia Atlantis — read-only federation / Checkpoint 12.
 * ORIGINAL SOURCE DATA STAYS IN ITS EXISTING REPOSITORY FILES.
 * This adapter never modifies production datasets and never certifies identity.
 */
(function(){
"use strict";
const otherGen=new Set(["madrigale","opera-buffa","opera-seria","opera-semiseria","dramma-giocoso"]);
const isGenre=id=>/^(genere-|forma-)/.test(id)||otherGen.has(id);
const fieldUrls=e=>(Array.isArray(e.evidence_urls)?e.evidence_urls:Array.isArray(e.sources)?e.sources:[]).filter(u=>typeof u==="string"&&/^https:\/\//.test(u));
const nodeCategory=n=>{
 if(n.type==="compositore"||n.type==="persona")return "persona";
 if(n.type==="geografia")return "luogo";
 if(isGenre(n.id))return "genere-forma";
 if(n.type==="periodo")return "epoca";
 if(n.type==="ambito")return "ambito";
 return n.type==="corrente"?"nodo-di-senso":"altra-categoria-legacy";
};
function createFederation({atlantis,legacy,relations,extension,identityAudit,workAudit,rootedExplorer}){
 if(!atlantis||!legacy||!relations||!extension||!identityAudit||!workAudit||typeof rootedExplorer!=="function")throw Error("Missing federation inputs");
 const nodes=new Map(),edges=[],incident=new Map(),atlasEdges=new Map();
 const addNode=n=>{if(nodes.has(n.id))throw Error("duplicate federated node ID "+n.id);nodes.set(n.id,n)};
 for(const n of atlantis.nodes)addNode({...n,provenance:"atlantis",origin_id:n.id});
 const baseIds=new Set(legacy.nodes.map(n=>n.id));
 const extAdds=extension.nodes.filter(n=>!baseIds.has(n.id)),variants=extension.nodes.filter(n=>baseIds.has(n.id));
 for(const n of [...legacy.nodes,...extAdds])
  addNode({...n,id:"mm:"+n.id,name:n.label||n.name||n.id,category:nodeCategory(n),
   subtype:n.subtype||(n.type==="compositore"?"compositore":""),
   provenance:baseIds.has(n.id)?"musurgia_mundi_base":"musurgia_mundi_extension",origin_id:n.id,
   description:n.description||n.desc||null});
 const addEdge=(e,prefix,i,provenance,source,target)=>{
  const id=prefix+i;
  if(!nodes.has(source)||!nodes.has(target))throw Error("Missing endpoint "+id);
  const item={...e,id,source,target,original_id:e.id||null,original_source:e.source,
   original_target:e.target,provenance,statement_type:provenance==="atlantis"?"atlantis_original":"legacy_original",
   historical_verified_independently:provenance==="atlantis"?e.historical_verified_independently===true:false,
   evidence_urls:fieldUrls(e),root_permission:"federated_original_only",
   provenance_note:provenance==="atlantis"?"Original Atlantis":
    "Relazione originale Musurgia Mundi; integrazione storica non ancora certificata"};
  edges.push(item);
  for(const k of [source,target]){if(!incident.has(k))incident.set(k,[]);incident.get(k).push(item)}
 };
 for(const [i,e]of atlantis.links.entries()){atlasEdges.set(e.id,e);addEdge(e,"fd:a:",i,"atlantis",e.source,e.target)}
 for(const [i,e]of legacy.edges.entries())addEdge(e,"fd:mb:",i,"musurgia_mundi_base","mm:"+e.source,"mm:"+e.target);
 for(const [i,e]of relations.relations.entries())addEdge(e,"fd:mr:",i,"musurgia_mundi_specialist","mm:"+e.source,"mm:"+e.target);
 for(const [i,e]of extension.relations.entries())addEdge(e,"fd:mx:",i,"musurgia_mundi_extension","mm:"+e.source,"mm:"+e.target);
 const pairs=(identityAudit.pairs||[]).map(x=>({...x,original_legacy_id:"mm:"+x.source_id,provisional_identity:true}));
 const legacyToAtlantis=new Map(),atlasToLegacy=new Map();
 for(const x of pairs){
  if(!nodes.has(x.original_legacy_id)||!nodes.has(x.target_id))continue;
  // Explicit identity-audit pairs are NEVER production record mergers.
  if(!legacyToAtlantis.has(x.original_legacy_id))legacyToAtlantis.set(x.original_legacy_id,x.target_id);
  if(!atlasToLegacy.has(x.target_id))atlasToLegacy.set(x.target_id,[]);
  atlasToLegacy.get(x.target_id).push(x.original_legacy_id);
 }
 const certifiedExplorer=rootedExplorer(atlantis);
 const candidates=[];
 for(const w of workAudit.work_candidates||[]){
  const support=w.supporting_atlantis_edge_ids.map(id=>atlasEdges.get(id));
  if(!nodes.has(w.work_id)||!nodes.has(w.genre_legacy_id)||support.some(x=>!x))
   throw Error("Unresolved staged work classification "+w.work_id);
  for(const [kind,genreId]of [["broad",w.genre_legacy_id],["specific",w.specific_genre_legacy_id],["alternate",w.alternate_genre_legacy_id]]){
   if(!genreId)continue;
   if(!nodes.has(genreId))throw Error("Unresolved classification target "+genreId);
   candidates.push({...w,id:"fd:proposal:"+kind+":"+w.work_id,
    source:w.work_id,target:genreId,category:"preview_classification",
    relation:kind==="specific"?"e_classificata_nella_forma_specfica":w.relationship,
    forward:kind==="specific"?"è classificata come":"appartiene a",
    reverse:kind==="specific"?"comprende l'esempio":"comprende l'opera",
    note:w.fact,evidence_urls:[...new Set([...support.flatMap(fieldUrls),...(w.classification_sources||[])])],
    historical_verified_independently:false,provenance:"editorial_audit_candidate",
    statement_type:"derived_classification_preview",root_permission:"classification_proposed_not_certified",
    classification_scope:kind,
    evidence_status:kind==="specific"&&w.classification_context?"attested_historical_genre_designation":"editorial_preview_unconfirmed",
    classification_context:w.classification_context||null,supporting_edges:w.supporting_atlantis_edge_ids});
  }
 }
 // A second, explicitly separate set of PROPOSED taxonomy relations.
 // These are not copies of original historical arcs and do NOT certify traversal.
 const taxonomy=[];
 for(const [i,t]of (workAudit.future_taxonomy_audit||[]).entries()){
  if(t.preview_visible!==true)continue;
  if(!nodes.has(t.source)||!nodes.has(t.target))throw Error("Unknown genus taxonomy ID "+i);
  taxonomy.push({...t,id:"fd:proposal:taxonomy:"+i,relation:t.proposed_relation,
    original_id:null,forward:"è una forma o tradizione compresa nell'ambito di",
    reverse:"comprende anche la forma o tradizione di",
    note:t.reason,description:t.reason,evidence_urls:fieldUrls(t),
    statement_type:"preview_taxonomy_proposal",provenance:"editorial_audit_candidate",
    historical_verified_independently:false,root_permission:"taxonomy_proposed_not_certified"});
 }
 const candidateByWork=new Map();
 for(const c of candidates){if(!candidateByWork.has(c.source))candidateByWork.set(c.source,[]);candidateByWork.get(c.source).push(c)}
 const totals={nodes:nodes.size,original_edges:edges.length,preview_classification_candidates:candidates.length,
  preview_taxonomy_candidates:taxonomy.length,
  atlantis_nodes:atlantis.nodes.length,atlantis_edges:atlantis.links.length,
  legacy_base_nodes:legacy.nodes.length,legacy_extension_new_nodes:extAdds.length,legacy_variants:variants.length,
  base_edges:legacy.edges.length,specialist_edges:relations.relations.length,extension_edges:extension.relations.length,
  identity_pairs:pairs.length};
 if(totals.nodes!==1637||totals.original_edges!==5574)
  throw Error("Unexpected source totals: "+JSON.stringify(totals));
 // Views use projected IDs for alias candidates, but raw nodes and original edges remain unchanged.
 function view(root,options={}){
  if(!nodes.has(root))throw Error("Root not in federation "+root);
  const maxDepth=options.maxDepth??5,relevance=options.relevance??2;
  const depthByCategory=options.depthByCategory||{};
  const selected=new Map(),visibleEdges=new Map();
  const takeNode=(id,depth,path,details)=>{
   const n=nodes.get(id);if(!n)return false;
   if(depth>maxDepth||depth>(depthByCategory[n.category]??maxDepth))return false;
   if(!selected.has(id))selected.set(id,{...n,_depth:depth,_path:path,_permission:details});
   return true;
  };
  takeNode(root,0,[root],"root");
  const takeEdge=(e,src,dst,depth,details)=>{
   const other=dst===root?src:dst;
   if(!takeNode(other,depth,[root,other],details))return;
   visibleEdges.set(e.id,{...e,source:src,target:dst,at_root_depth:depth,root_permission:details,
    projected_source:src!==e.source||dst!==e.target,provisional_identity_projection:src!==e.source||dst!==e.target});
  };
  if(!root.startsWith("mm:")){
   if(root.startsWith("pers:")||root.startsWith("opera:")||root.startsWith("senso:")){
    const core=certifiedExplorer.explore(root,{maxDepth,relevance,depthByCategory});
    for(const n of core.nodes)if(n.id!==root)selected.set(n.id,n);
    for(const e of core.links)visibleEdges.set(e.id,e);
   }
  }
  if(maxDepth>=1){
   const alias=[root,...(atlasToLegacy.get(root)||[])];
   for(const legacyRoot of alias){
    for(const e of incident.get(legacyRoot)||[]){
     // When viewing a person from Atlantis, use a provisional *visual* alias,
     // with original IDs preserved. No source node is deleted or changed.
     const src=e.source===legacyRoot?root:(legacyToAtlantis.get(e.source)||e.source);
     const dst=e.target===legacyRoot?root:(legacyToAtlantis.get(e.target)||e.target);
     const other=src===root?dst:src;
     const sourceNode=nodes.get(other);
     if(!sourceNode||sourceNode.category==="capitolo")continue;
     takeEdge(e,src,dst,1,e.provenance==="atlantis"?"original_direct":"legacy_direct");
    }
   }
  }
  const workIds=[...selected.values()].filter(n=>n.category==="opera"&&n.id.startsWith("opera:"))
   .map(n=>({id:n.id,depth:n._depth}));
  for(const w of workIds){
   if(w.depth+1>maxDepth)continue;
   for(const c of candidateByWork.get(w.id)||[]){
    const target=nodes.get(c.target);
    if(!target||(w.depth+1)>(depthByCategory[target.category]??maxDepth))continue;
    if(!selected.has(target.id))selected.set(target.id,{...target,_depth:w.depth+1,
      _path:[root,...(w.id===root?[]:[w.id]),target.id],_permission:"preview_work_genre_classification"});
    visibleEdges.set(c.id,{...c,at_root_depth:w.depth+1,root_permission:"preview_work_genre_classification"});
   }
  }
  // Complete the visible induced subgraph: display cycles/triangles, do not
  // mistake a breadth-first traversal tree for the entire set of facts.
  // Taxonomy links are shown only when both endpoints are already visible.
  for(const e of taxonomy){
   if(selected.has(e.source)&&selected.has(e.target)){
    visibleEdges.set(e.id,{...e,at_root_depth:Math.max(selected.get(e.source)._depth,selected.get(e.target)._depth),
      root_permission:"taxonomy_display_between_existing_nodes"});
   }
  }
  // If a genre is the root, show its explicitly indexed works as candidates,
  // but DO NOT expand to all composers via those works.
  for(const c of candidates){
   if(c.target!==root||selected.has(c.source)||maxDepth<1)continue;
   const work=nodes.get(c.source);
   if(!work||1>(depthByCategory[work.category]??maxDepth))continue;
   selected.set(work.id,{...work,_depth:1,_path:[root,work.id],_permission:"preview_reverse_work_classification"});
   visibleEdges.set(c.id,{...c,at_root_depth:1,root_permission:"preview_reverse_work_classification"});
  }
  // Other pre-existing provenance-preserving edges between visible endpoints
  // are still retained, but we never create transitive historical assertions.
  for(const e of edges){
   if(selected.has(e.source)&&selected.has(e.target)&&!visibleEdges.has(e.id)){
    if(e.provenance==="atlantis"&&e.statement_type==="legacy_original")continue;
    if(e.source.startsWith("cap:")||e.target.startsWith("cap:"))continue;
    visibleEdges.set(e.id,{...e,at_root_depth:Math.max(selected.get(e.source)._depth,selected.get(e.target)._depth),
     root_permission:"federated_existing_endpoints"});
   }
  }
  return {root,nodes:[...selected.values()],links:[...visibleEdges.values()],
   source_totals:totals,notes:"Full source federation, projected identities provisional, work classification proposals isolated."};
 }
 function describe(edge,anchor){
  const forward=edge.source===anchor;
  return {phrase:forward?(edge.forward||null):(edge.reverse||null),
   description:edge.description||edge.note||null, note:edge.note||null,
   evidence_urls:fieldUrls(edge),provenance:edge.provenance||"atlantis",
   relation:edge.relation||edge.kind||null,original_id:edge.original_id||null};
 }
 return {view,describe,totals,nodes,edges,candidates,taxonomy,crosswalk:pairs,lookup:id=>nodes.get(id)};
}
window.MusurgiaFederator={createFederation};
})();