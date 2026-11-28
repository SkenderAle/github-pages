import {withLot02} from "./LOTTO02_OVERLAY_LOADER_A4_2026-11-28.mjs";
import {applySemanticCrosswalkA7} from "./APPLICA_CROSSWALK_A7_2026-11-28.mjs";
export const candidatePins=[
  {
    "path": "LOTTO02_OVERLAY_DOCUMENTARIO_A1_2026-11-28.json",
    "blob": "9be69c625f79c0a7538da597f75b9c29f47fc2bf"
  },
  {
    "path": "LOTTO02_OVERLAY_MUSICALE_A4_2026-11-28.json",
    "blob": "760c3533f6e02cfeeac8c754a3e96877c598c330"
  },
  {
    "path": "CROSSWALK_TASSONOMICO_GLOBALE_A7_2026-11-28.json",
    "blob": "725c6889cb4dcc3cf6f08b376b5b8ac54e882f51"
  },
  {
    "path": "LOTTO02_OVERLAY_SONATE_A9_2026-11-28.json",
    "blob": "ea1f8f04a60f63e519491a13e8a9528f44801e48"
  },
  {
    "path": "LOTTO02_A12_TASSONOMIA_CAMERA_2026-11-28.json",
    "blob": "54f01276efad2a944d729fd9f42b8c67b516b092"
  },
  {
    "path": "LOTTO02_A14_OVERLAY_VOCALITA_AUTORITA_2026-11-28.json",
    "blob": "9b249b68697da0fbd9705af32d81eefe2b41e4f4"
  },
  {
    "path": "LOTTO02_A15_RESIDUI_OVERLAY_2026-11-28.json",
    "blob": "a2ed1ca7a9f0b498313d3f56af3053e81b13f8cf"
  },
  {
    "path": "LOTTO02_A16_RESIDUI_GATE_COMBINATO_2026-11-28.json",
    "blob": "eb9cb43a247590716a13b452d5ab5dffb0383273"
  },
  {
    "path": "LOTTO02_A17_REGISTRO_SOSPENSIONI_2026-11-28.json",
    "blob": "cb893e25e1a411eb2783838075851b086746f009"
  }
];
export function withLot02A17(base,mode,documentary,a4,a7,overlays){
 if(mode==="off")return base;
 if(!["corroborated-preview","full-review-preview"].includes(mode))throw Error("Invalid A17 preview mode");
 if(overlays.length!==6)throw Error("Expected A9/A12/A14/A15/A16/A17 only");
 const start=applySemanticCrosswalkA7(withLot02(base,true,documentary,a4),a7);
 const alias=start.semantic_a7.redirect;
 const redirect=id=>alias[id]||id;
 const records=new Map(documentary.nodes.map(n=>[n.provenance[0].original_id,n.provenance[0].payload]));
 const nodes=new Map(start.nodes.map(n=>[n.id,n])),ids=new Set(start.links.map(e=>e.id));
 const seenSources=new Set(a4.nodes.map(n=>n.provenance[0].original_id));
 const candidates=overlays.flatMap(o=>o.nodes),allEdges=overlays.flatMap(o=>o.links);
 const candidateIds=new Set(),sourceNodes=new Map(),rejectedIds=new Set(),qualityPending=/PENDING_INDEPENDENT_REVIEW/;
 for(const n of candidates){
   if(nodes.has(n.id)||candidateIds.has(n.id)||!["persone","opere","generi_forme"].includes(n.category)||n.visibility!=="musical")throw Error("Candidate node invalid: "+n.id);
   candidateIds.add(n.id);
   if(n.provenance?.length){const p=n.provenance[0];if(n.category!=="opere"||n.provenance.length!==1||seenSources.has(p.original_id)||JSON.stringify(records.get(p.original_id))!==JSON.stringify(p.payload))throw Error("Candidate payload invalid: "+n.id);seenSources.add(p.original_id);sourceNodes.set(p.original_id,n.id);if(qualityPending.test(n.metadata?.quality||""))rejectedIds.add(n.id);}
 }
 const allIds=new Set([...nodes.keys(),...candidateIds]);
 const byId=new Map([...nodes,...candidates.map(n=>[n.id,n])]);
 const rules={compone:["persone","opere"],contribuisce_alla_composizione:["persone","opere"],appartiene_al_genere_o_forma:["opere","generi_forme"],parte_di:["opere","opere"],parte_di_raccolta:["opere","opere"],estratto_da:["opere","opere"],rielaborazione_di:["opere","opere"],raccolta_contiene_sonata_individuale:["opere","opere"],has_instrumentation_subtype:["generi_forme","generi_forme"]};
 const checked=[];
 for(const e of allEdges){
   const s=redirect(e.source),t=redirect(e.target),rule=rules[e.relation];
   if(ids.has(e.id)||!allIds.has(s)||!allIds.has(t)||s===t||e.visibility!=="musical"||!e.original?.evidence_urls?.length||!rule||byId.get(s)?.category!==rule[0]||byId.get(t)?.category!==rule[1])throw Error("Candidate edge invalid: "+e.id+" "+e.relation);
   ids.add(e.id);if(qualityPending.test(e.quality||"")&&sourceNodes.has(e.original?.source_id))rejectedIds.add(sourceNodes.get(e.original.source_id));
   checked.push({...e,source:s,target:t});
 }
 if(seenSources.size!==417||sourceNodes.size!==401)throw Error("Unexpected source coverage");
 const full=mode==="full-review-preview";
 const admitted=new Set(full?[...candidateIds]:[...sourceNodes.values()].filter(id=>!rejectedIds.has(id)));
 if(!full){let changed=true;while(changed){changed=false;for(const e of checked){if(qualityPending.test(e.quality||"")||rejectedIds.has(e.source)||rejectedIds.has(e.target))continue;const a=admitted.has(e.source),b=admitted.has(e.target);if(a&&candidateIds.has(e.target)&&!b){admitted.add(e.target);changed=true}if(b&&candidateIds.has(e.source)&&!a){admitted.add(e.source);changed=true}}}}
 for(const n of candidates)if(admitted.has(n.id))nodes.set(n.id,n);
 const links=[...start.links,...checked.filter(e=>nodes.has(e.source)&&nodes.has(e.target)&&(full||!qualityPending.test(e.quality||"")))];
 const admittedSource=[...sourceNodes.values()].filter(id=>admitted.has(id)).length;
 return {...start,nodes:[...nodes.values()],links,counts:{...start.counts,nodes:nodes.size,links:links.length,lot02_source_records:500,lot02_candidate_source_nodes:admittedSource,lot02_deferred_source_nodes:401-admittedSource},lot02_a17:{mode,status:"PREVIEW_ONLY_NOT_CERTIFIED",candidate_source_nodes:admittedSource,index_only_deferred:rejectedIds.size}};
}
export async function loadLot02A17(base,mode){
 if(mode==="off")return base;
 const data=[];
 for(const {path,blob} of candidatePins){const r=await fetch(new URL(path,import.meta.url),{cache:"no-store"});if(!r.ok)throw Error(path+" HTTP "+r.status);const bytes=new Uint8Array(await r.arrayBuffer()),head=new TextEncoder().encode("blob "+bytes.length+"\0"),joined=new Uint8Array(head.length+bytes.length);joined.set(head);joined.set(bytes,head.length);const actual=Array.from(new Uint8Array(await crypto.subtle.digest("SHA-1",joined)),b=>b.toString(16).padStart(2,"0")).join("");if(actual!==blob)throw Error("Hash A17 non corrispondente: "+path);data.push(JSON.parse(new TextDecoder().decode(bytes)));}
 return withLot02A17(base,mode,data[0],data[1],data[2],data.slice(3));
}
