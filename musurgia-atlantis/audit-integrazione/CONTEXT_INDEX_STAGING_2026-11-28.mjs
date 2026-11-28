// Presentazione contestuale M3–P. Non modifica grafo, proiezione o traversal.
export function buildContextIndex(db, data) {
 const rows=data?.records;
 if(!Array.isArray(rows)||rows.length!==204)throw Error("Indice contestuale incompleto");
 const nodes=new Map(db.nodes.map(n=>[n.id,n])),edges=new Map(db.links.map(e=>[e.id,e]));
 const byRoot=new Map(),keys=new Set(),edgeIds=new Set();
 const modes=new Set(["CONTEXT_ONLY_PENDING_UI_GATE","ARCHIVE_ONLY","CANDIDATE_DIRECT_TYPED_AFTER_GATE"]);
 for(const r of rows){
  const k=r.root_id+"|"+r.edge_id,e=edges.get(r.edge_id),n=nodes.get(r.other_id);
  if(keys.has(k)||!e||!n||!nodes.has(r.root_id)||e.layer!==r.layer||
     e.relation!==r.predicate||e.quality!==r.quality||n.category!==r.other_category||
     !((e.source===r.root_id&&e.target===r.other_id)||(e.target===r.root_id&&e.source===r.other_id))||
     !modes.has(r.presentation)||r.projection_authorized!==false||r.inherit_repertoire!==false||r.merge_identity!==false)
    throw Error("Indice contestuale incoerente: "+k);
  keys.add(k);edgeIds.add(r.edge_id);
  if(!byRoot.has(r.root_id))byRoot.set(r.root_id,[]);
  byRoot.get(r.root_id).push({record:r,edge:e});
 }
 if(edgeIds.size!==194)throw Error("Numero archi contestuali inatteso");
 return {byRoot,keys,edgeIds};
}
export function contextRows(index,nodeId,{cats,lenses,renderedLinks=[],lensBucket}){
 if(!index||!lenses.size)return [];
 const visible=new Set(renderedLinks.map(e=>e.id));
 return (index.byRoot.get(nodeId)||[]).filter(({record:r,edge:e})=>{
   if(visible.has(e.id)||!cats.has(r.other_category))return false;
   const lens=lensBucket(e);
   return lens===null||lenses.has(lens);
 });
}
export function contextGroups(rows){
 const groups=new Map();
 for(const item of rows){
  const r=item.record,k=r.presentation+"|"+r.other_id;
  if(!groups.has(k))groups.set(k,{presentation:r.presentation,otherId:r.other_id,items:[]});
  groups.get(k).items.push(item);
 }
 return [...groups.values()].sort((a,b)=>a.presentation.localeCompare(b.presentation)||a.items[0].record.other_name.localeCompare(b.items[0].record.other_name,"it"));
}
export function safeContextURLs(values){
 return [...new Set((Array.isArray(values)?values:[]).filter(v=>typeof v==="string"&&/^https:\/\//i.test(v)))];
}
