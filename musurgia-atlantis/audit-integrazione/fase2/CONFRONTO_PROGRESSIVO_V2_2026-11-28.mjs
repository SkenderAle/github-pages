export function comparisonProjectionV2(db,edges,index,state){
 const {from,to}=state.comparison, depthLimit=Math.max(1,Math.min(5,Number(state.depth)||1)), mode=state.comparisonMode==="extended"?"extended":"common", maxLength=2*depthLimit;
 const roots=new Set([from,to]), allowed=new Set(db.nodes.filter(n=>n.visibility!=="documentary"&&(state.cats.has(n.category)||roots.has(n.id))).map(n=>n.id));
 const generic=/^(tratta|menziona|rimanda|analizza|condivide|citazione|richiamo|documenta|stesso_tema_editoriale|capitolo_tratta_periodo)/i;
 const meaningful=edges.filter(e=>e.source!==e.target&&allowed.has(e.source)&&allowed.has(e.target)&&e.visibility!=="documentary"&&!generic.test(e.relation||"")&&!/(HOLD|SOSPES|CONTESTAT|REJECTED|STAGING_CANDIDATE_FORM_LINK_NOT_IDENTITY)/i.test([e.quality,e.relation,e.original?.relation,e.original?.quality_gate,e.original?.status,e.original?.verification_status].filter(Boolean).join(" ")));
 const empty=error=>({nodes:db.nodes.filter(n=>roots.has(n.id)&&n.visibility!=="documentary"),links:[],parents:new Map(),distance:new Map([[from,0],[to,0]]),comparison:true,error,paths:[],pathCoverage:"none",mode,depthLimit,maxLength,commonCount:0,branchCount:0,distFrom:new Map([[from,0]]),distTo:new Map([[to,0]])});
 if(!allowed.has(from)||!allowed.has(to)||from===to)return empty("Seleziona due lemmi musicali distinti.");
 const adjacency=items=>{const a=new Map();for(const e of items)for(const [x,y] of [[e.source,e.target],[e.target,e.source]]){if(!a.has(x))a.set(x,[]);a.get(x).push({to:y,edge:e})}for(const list of a.values())list.sort((p,q)=>p.to.localeCompare(q.to)||p.edge.id.localeCompare(q.edge.id));return a};
 const adj=adjacency(meaningful);
 function tree(start,stop,limit,terminal=false,graph=adj){
   const dist=new Map([[start,0]]),prev=new Map(),q=[start];
   for(let i=0;i<q.length;i++){const x=q[i],d=dist.get(x);if(d>=limit||x===stop)continue;
     if(terminal&&x!==start&&!["persone","opere","reti_culturali","istituzioni"].includes(index.get(x)?.category))continue;
     for(const p of graph.get(x)||[]){if(p.to===stop||dist.has(p.to))continue;dist.set(p.to,d+1);prev.set(p.to,{from:x,edge:p.edge});q.push(p.to)}
   }return {dist,prev}
 }
 function route(t,x){if(!t.dist.has(x))return null;const path=[x],links=[];while(t.prev.has(x)){const p=t.prev.get(x);links.push(p.edge);x=p.from;path.push(x)}return {path:path.reverse(),links:links.reverse()}}
 // Keep the same deterministic trees at all five depths. Exclude the opposite root
 // from each tree to prevent a direct edge from masquerading as an indirect path.
 const ta=tree(from,to,5),tb=tree(to,from,5),common=new Set(roots),selected=new Map(),samples=[],sampleKeys=new Set();
 let shortest=Infinity;
 function witness(x,y,e){
   const a=route(ta,x),b=route(tb,y);if(!a||!b||a.links.length>depthLimit||b.links.length>depthLimit||a.links.length+b.links.length+1>maxLength)return;
   const aset=new Set(a.path);if(b.path.some(n=>aset.has(n)))return;
   const path=[...a.path,...b.path.slice().reverse()],links=[...a.links,e,...b.links.slice().reverse()];
   shortest=Math.min(shortest,links.length);for(const n of path)common.add(n);for(const edge of links)selected.set(edge.id,edge);
   const key=links.map(x=>x.id).join("|");if(!sampleKeys.has(key)){sampleKeys.add(key);samples.push({path,links})}
 }
 for(const e of meaningful){witness(e.source,e.target,e);witness(e.target,e.source,e)}
 if(!selected.size)return empty("Nessun percorso documentato entro "+depthLimit+" livelli per estremo con i filtri correnti.");
 const commonCount=common.size,commonLinks=selected.size,shown=new Set(common);
 if(mode==="extended"){
   for(const [root,other] of [[from,to],[to,from]]){
     const t=tree(root,other,depthLimit,true);
     for(const x of t.dist.keys()){shown.add(x);const p=t.prev.get(x);if(p)selected.set(p.edge.id,p.edge)}
     // Include additional direct/parallel relations and edges traversable within the radius.
     for(const [x,d] of t.dist){if(d>=depthLimit||x!==root&&!["persone","opere","reti_culturali","istituzioni"].includes(index.get(x)?.category))continue;
       for(const p of adj.get(x)||[])if(t.dist.has(p.to))selected.set(p.edge.id,p.edge)}
   }
 }
 const links=meaningful.filter(e=>selected.has(e.id)),graph=adjacency(links);
 const da=tree(from,null,Infinity,false,graph),dt=tree(to,null,Infinity,false,graph),distance=new Map(),parents=new Map();
 for(const x of shown){const a=da.dist.get(x)??Infinity,c=dt.dist.get(x)??Infinity;distance.set(x,Math.min(a,c));const p=(a<=c?da:dt).prev.get(x);if(p&&!roots.has(x))parents.set(x,p)}
 // Example paths: shortest first, then category diversity. The graph is not restricted to these examples.
 samples.sort((a,b)=>a.links.length-b.links.length||a.links.map(e=>e.id).join("|").localeCompare(b.links.map(e=>e.id).join("|")));
 const paths=[],seenTypes=new Set();
 for(const p of samples){const key=p.path.slice(1,-1).map(x=>index.get(x)?.category).sort().join("|");if(!seenTypes.has(key)){seenTypes.add(key);paths.push(p);if(paths.length===8)break}}
 for(const p of samples){if(paths.length===8)break;if(!paths.includes(p))paths.push(p)}
 const categories={};for(const x of shown){const c=index.get(x)?.category||"altro";categories[c]=(categories[c]||0)+1}
 return {nodes:db.nodes.filter(n=>shown.has(n.id)),links,parents,distance,comparison:true,paths,shortest,maxLength,pathCoverage:"simple-witnesses",categories,depthLimit,mode,commonCount,commonLinks,branchCount:shown.size-commonCount,distFrom:da.dist,distTo:dt.dist,exampleCount:samples.length,corridorCount:commonCount,meaningfulLinkCount:meaningful.length};
}
