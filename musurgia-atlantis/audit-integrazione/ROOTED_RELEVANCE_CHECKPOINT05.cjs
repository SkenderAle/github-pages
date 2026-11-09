"use strict";
// Checkpoint 05 — PILOTA IN STAGING. Non importare nella UI pubblica prima della certificazione.
// Tutte le soglie e autorizzazioni operano sui predicati, non sulla somiglianza dei nomi.
function rootedExplore(graph,rootId,options={}){
  if(!graph||!Array.isArray(graph.nodes)||!Array.isArray(graph.links)) throw Error("Expected {nodes,links}");
  const byId=new Map();
  for(const n of graph.nodes){if(!n||typeof n.id!=="string"||byId.has(n.id))throw Error("Missing/duplicate node id");byId.set(n.id,n);}
  if(!byId.has(rootId))throw Error("Root not found: "+rootId);
  const isEditorial=n=>n.category==="capitolo"||n.id.startsWith("cap:");
  if(isEditorial(byId.get(rootId)))throw Error("Editorial chapters cannot be historical roots");
  const maxDepth=Math.max(0,Math.min(5,Math.floor(options.maxDepth??5)));
  const depthByCategory=options.depthByCategory||{};
  const contextOnly=new Set(options.contextOnlyCategories||["nodo-di-senso","luogo","strumento","rete-culturale"]);
  const specificBridge=new Set(options.specificBridgeCategories||["opera","versione-opera","parte-di-opera","evento-storico","allestimento","produzione","documento-storico"]);
  const witnesses=options.rootWitnesses||[];
  const adj=new Map();
  const isHistorical=e=>e&&e.historical_verified_independently===true&&e.quality_gate==="riscontro_storico_indipendente"&&
    typeof e.source==="string"&&typeof e.target==="string"&&byId.has(e.source)&&byId.has(e.target)&&
    !isEditorial(byId.get(e.source))&&!isEditorial(byId.get(e.target));
  for(let i=0;i<graph.links.length;i++){
    const e=graph.links[i];if(!isHistorical(e))continue;
    if(!adj.has(e.source))adj.set(e.source,[]);
    if(!adj.has(e.target))adj.set(e.target,[]);
    adj.get(e.source).push({e,index:i,other:e.target});
    adj.get(e.target).push({e,index:i,other:e.source});
  }
  const depths=new Map([[rootId,0]]), routes=new Map([[rootId,[rootId]]]), used=new Map(), queue=[rootId];
  for(let ix=0;ix<queue.length;ix++){
    const current=queue[ix],level=depths.get(current),node=byId.get(current);
    if(level>=maxDepth)continue;
    if(level>0&&contextOnly.has(node.category))continue;
    for(const {e,index,other} of adj.get(current)||[]){
      const target=byId.get(other),next=level+1;
      if(next>maxDepth)continue;
      const typeLimit=depthByCategory[target.category]??maxDepth;
      if(!Number.isInteger(typeLimit)||typeLimit<0||next>typeLimit)continue;
      if(routes.get(current).includes(other))continue;
      let permission="direct";
      if(level>0){
        if(level===1&&specificBridge.has(node.category)&&routes.get(current)[0]===rootId){
          permission="same_specific_work_or_event";
        }else{
          const w=witnesses.find(w=>w.root===rootId&&w.from===current&&w.to===other&&w.edge_id===e.id&&
            w.status==="independently_verified"&&typeof w.reason==="string"&&w.reason.length>0&&
            Array.isArray(w.evidence_urls)&&w.evidence_urls.some(s=>/^https:\/\//.test(s)));
          if(!w)continue;
          permission="explicit_root_witness";
        }
      }
      const edgeKey=String(e.id??("edge-index:"+index));
      if(!used.has(edgeKey))used.set(edgeKey,{...e,at_root_depth:next,root_permission:permission});
      if(!depths.has(other)){depths.set(other,next);routes.set(other,[...routes.get(current),other]);queue.push(other);}
    }
  }
  return {root:rootId,maxDepth,nodes:[...depths].map(([id,depth])=>({...byId.get(id),at_root_depth:depth,root_path:routes.get(id)})),
    links:[...used.values()],max_root_depth_reached:Math.max(...depths.values()),
    warning:"Staging read-only: no historical certification of unreviewed edges; no generic BFS"};
}
function relationDetail(edge,perspectiveId){
  const forward=perspectiveId===edge.source;
  return {edge_id:edge.id??null,source:edge.source,target:edge.target,direction:forward?"forward":"reverse",
    phrase:forward?(edge.forward??null):(edge.reverse??null),
    description:edge.description??null,note:edge.note??null,
    sources:Array.isArray(edge.sources)?[...edge.sources]:Array.isArray(edge.evidence_urls)?[...edge.evidence_urls]:[],
    original_relation:edge};
}
// Pivot esplicito: invocare rootedExplore(graph,pivotId,options), NON espandere
// il nodo pivot nella rete della radice originale senza prova di pertinenza.
module.exports={rootedExplore,relationDetail};
