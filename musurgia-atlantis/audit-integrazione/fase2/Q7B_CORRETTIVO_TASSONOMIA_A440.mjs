// A440: experimental source transformation used only by Node VM diagnostics.
// No public viewer, graph or canonical data is changed.
export function candidateQ7BSource(src){
 const marker="function rootedProjection(db){";
 if(src.split(marker).length!==2)throw Error("Q7B root anchor");
 // Recover direct, exactly typed Lot03 links omitted by specialized legacy projections.
 // Never promote the candidate arcs or traverse other authors via a shared genre.
 const wrapper=`
function rootedProjection(db){
 const view=rootedProjectionLegacyA440(db);
 if(state.comparison||!state.root||!state.lenses.size||Number(state.depth)<1||state.focus&&state.focus!==state.root||!state.cats.has("opere"))return view;
 const root=db.nodes.find(n=>n.id===state.root&&n.category==="generi_forme");
 if(!root)return view;
 const nodes=[...view.nodes],links=[...view.links],ids=new Set(nodes.map(n=>n.id)),edgeIds=new Set(links.map(e=>e.id)),parents=new Map(view.parents||[]),distance=new Map(view.distance||[]);
 if(!ids.has(root.id))return view;
 const index=new Map(db.nodes.map(n=>[n.id,n]));
 for(const e of db.links){
  if(!e.id.startsWith("flaminio_lot03::preview:taxonomy:")||e.relation!=="appartiene_al_genere_o_forma"||e.target!==root.id||e.visibility!=="musical"||e.quality!=="AUDIT_PREVIEW_NOT_CERTIFIED"||e.status!=="PROPOSED_NOT_ACTIVE")continue;
  const work=index.get(e.source);
  if(!work||work.category!=="opere"||work.visibility!=="musical"||!work.id.startsWith("flaminio_lot03::preview:work:"))continue;
  if(!ids.has(work.id)){nodes.push(work);ids.add(work.id);}
  if(!edgeIds.has(e.id)){links.push(e);edgeIds.add(e.id);}
  if(!parents.has(work.id))parents.set(work.id,{from:root.id,edge:e});
  if(!distance.has(work.id))distance.set(work.id,1);
 }
 return {...view,nodes,links,parents,distance};
}
`;
 return src.replace(marker,"function rootedProjectionLegacyA440(db){")+"\n"+wrapper;
}
