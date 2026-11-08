'use strict';
/*
 Musurgia Atlantis / Fase 2M — prototipo NON pubblico di esplorazione radicata e derivata.
 I certificati sotto edge.audit sono campi di STAGING: non inferirli da tier, quality_gate,
 quality_gate/riscontri editoriali o da una semplice URL. Gate storico CHIUSO per default.
*/
function exploreRootAndDerived({nodes,links,rootId,pivotId=rootId,generalDepth=1,derivedDepth=1}){
 if(!Number.isInteger(generalDepth)||generalDepth<1||generalDepth>5)throw Error('generalDepth: I–V');
 if(!Number.isInteger(derivedDepth)||derivedDepth<1||derivedDepth>3)throw Error('derivedDepth: I–III');
 if(!Array.isArray(nodes)||!Array.isArray(links))throw Error('Missing node/link arrays');
 const byId=new Map(nodes.map(n=>[n.id,n]));
 const historical=n=>!!n&&n.category!=='capitolo'&&!String(n.id||'').startsWith('cap:');
 const intermediate=n=>historical(n)&&(n.category==='persona'||['opera','versione-opera','allestimento','produzione','parte-di-opera'].includes(n.category));
 if(!historical(byId.get(rootId)))throw Error('Historical root required');
 const edges=links.map((e,index)=>({e,index,key:String(e.id||'edge')+'@'+index}))
  .filter(({e})=>historical(byId.get(e.source))&&historical(byId.get(e.target))&&e.source!==e.target);
 const verified=e=>e.audit?.historical_verified===true && e.audit?.independent_evidence===true;
 const adjacency=new Map();
 for(const entry of edges){
  for(const id of [entry.e.source,entry.e.target]){if(!adjacency.has(id))adjacency.set(id,[]);adjacency.get(id).push(entry)}
 }
 const other=(e,id)=>e.source===id?e.target:e.target===id?e.source:null;
 const rootPaths=new Map([[rootId,{id:rootId,depth:0,path:[rootId],edgeKeys:[],evidenceScope:'root'}]]);
 let frontier=[rootId];
 for(let step=1;step<=generalDepth;step++){
  const next=[];
  for(const from of frontier){
   if(step>1&&!intermediate(byId.get(from)))continue;
   const prior=rootPaths.get(from);
   for(const entry of adjacency.get(from)||[]){
    if(!verified(entry.e))continue;
    const to=other(entry.e,from);
    if(!to||rootPaths.has(to)||prior.path.includes(to))continue;
    // Beyond the first step, evidence must explicitly certify relevance to the original root.
    if(step>1&&!entry.e.audit?.root_relevance_ids?.includes(rootId))continue;
    rootPaths.set(to,{id:to,depth:step,path:[...prior.path,to],edgeKeys:[...prior.edgeKeys,entry.key],evidenceScope:'root'});
    next.push(to);
   }
  }
  frontier=next;
  if(!frontier.length)break;
 }
 const pivotOrigin=rootPaths.get(pivotId);
 if(!pivotOrigin)throw Error('Pivot is not reachable through certified root paths');
 const localPaths=new Map([[pivotId,{id:pivotId,localDepth:0,totalPath:[...pivotOrigin.path],edgeKeys:[],evidenceScope:'pivot'}]]);
 frontier=[pivotId];
 for(let step=1;step<=derivedDepth;step++){
  const next=[];
  for(const from of frontier){
   if(!intermediate(byId.get(from)))continue;
   const prior=localPaths.get(from);
   for(const entry of adjacency.get(from)||[]){
    if(!verified(entry.e)||!entry.e.audit?.pivot_relevance_ids?.includes(pivotId))continue;
    const to=other(entry.e,from);
    if(!to||localPaths.has(to)||prior.totalPath.includes(to))continue;
    localPaths.set(to,{id:to,localDepth:step,totalPath:[...prior.totalPath,to],
      edgeKeys:[...prior.edgeKeys,entry.key],evidenceScope:'pivot',
      // A pivot-verified branch does NOT assert any direct relation to rootId.
      directRootRelationInferred:false});
    next.push(to);
   }
  }
  frontier=next;
  if(!frontier.length)break;
 }
 const seenNodes=new Set([...rootPaths.keys(),...localPaths.keys()]);
 const usedKeys=new Set([...rootPaths.values(),...localPaths.values()].flatMap(p=>p.edgeKeys));
 return {
  schema:'musurgia-atlantis-selective-branches-stage-v1',
  rootId,pivotId,generalDepth,derivedDepth,rootPaths:[...rootPaths.values()],
  derivedPaths:[...localPaths.values()],displayNodes:nodes.filter(n=>seenNodes.has(n.id)).map(n=>({
   ...n,rootDepth:rootPaths.get(n.id)?.depth??null,pivotDepth:localPaths.get(n.id)?.localDepth??null,
   localPath:localPaths.get(n.id)?.totalPath||null,
   absolutePathLength:localPaths.has(n.id)?localPaths.get(n.id).totalPath.length-1:null
  })),displayLinks:edges.filter(x=>usedKeys.has(x.key)).map(({e,key})=>({...e,stageSourceKey:key})),
  note:'Historical/independent evidence and root/pivot relevance must be certified outside this algorithm; no editorial chapters or generic category bridges.'
 };
}
if(typeof module!=='undefined')module.exports={exploreRootAndDerived};
