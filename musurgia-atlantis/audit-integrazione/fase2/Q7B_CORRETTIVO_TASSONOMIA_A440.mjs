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
 if(state.comparison||!state.root||!state.lenses.size||Number(state.depth)<1||!state.cats.has("opere"))return view;
 const person=db.nodes.find(n=>n.id===state.root&&n.category==="persone");
 if(person){
  const focused=state.focus&&state.focus!==person.id;
  if(!focused&&Number(state.depth)<2)return view;
  const candidate=e=>e.id.startsWith("flaminio_lot03::preview:")&&e.visibility==="musical"&&e.quality==="AUDIT_PREVIEW_NOT_CERTIFIED"&&e.status==="PROPOSED_NOT_ACTIVE";
  const nodes=[...view.nodes],links=[...view.links],ids=new Set(nodes.map(n=>n.id)),edgeIds=new Set(links.map(e=>e.id)),parents=new Map(view.parents||[]),distance=new Map(view.distance||[]),index=new Map(db.nodes.map(n=>[n.id,n]));
  const authored=db.links.filter(e=>candidate(e)&&e.source===person.id&&["compone","elabora_melodia_tradizionale"].includes(e.relation)&&ids.has(e.target));
  const members=new Set(authored.filter(e=>!focused||(e.target===state.focus&&state.trail?.length===2&&state.trail[0]===person.id&&state.trail[1]===e.target&&state.trailEdges?.[0]===e.id)).map(e=>e.target));
  for(const e of db.links){
   if(!candidate(e)||e.relation!=="parte_di_raccolta"||!members.has(e.source))continue;
   const n=index.get(e.target);if(!n||n.category!=="opere"||n.visibility!=="musical"||!n.id.startsWith("flaminio_lot03::preview:collection:"))continue;
   if(!ids.has(n.id)){nodes.push(n);ids.add(n.id);}
   if(!edgeIds.has(e.id)){links.push(e);edgeIds.add(e.id);}
   if(!parents.has(n.id))parents.set(n.id,{from:e.source,edge:e});
   if(!distance.has(n.id))distance.set(n.id,focused?1:2);
  }
  return {...view,nodes,links,parents,distance};
 }
 if(state.focus&&state.focus!==state.root)return view;
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
