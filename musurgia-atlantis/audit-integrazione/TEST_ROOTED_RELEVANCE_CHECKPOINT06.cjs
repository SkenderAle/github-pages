"use strict";
/* Run with: node musurgia-atlantis/audit-integrazione/TEST_ROOTED_RELEVANCE_CHECKPOINT06.cjs
 * Requires a COMPLETE local clone; no network is performed by this test.
 * This file is published but was NOT run in Node by the connector-only audit.
 */
const fs=require("node:fs");
const path=require("node:path");
const assert=require("node:assert/strict");
const {createRootedExplorer}=require("./ROOTED_RELEVANCE_CHECKPOINT06.cjs");
const input=p=>JSON.parse(fs.readFileSync(path.resolve(__dirname,p),"utf8"));
const graph=input("../grafo.json");
const registry=input("REGISTRO_PROVE_RADICATE_CHECKPOINT06_2026-11-09.json");
const engine=createRootedExplorer(graph,registry);
let count=0;
function yes(name,predicate){assert.ok(predicate,name);console.log("PASS "+name);count++}
yes("754 nodi e 1718 archi sorgente",graph.nodes.length===754&&graph.links.length===1718);
yes("577 archi storici specifici + 2 confronti delimitati",engine.catalogue.specific===577&&engine.catalogue.comparison===2);
yes("Zero testimoni radicati approvati",engine.registered_proofs===0);
const moz=engine.explore("pers:mozart",{maxDepth:5});
const ids=new Set(moz.nodes.map(n=>n.id)),edges=new Set(moz.links.map(e=>e.id));
yes("Mozart: 15 nodi e 18 archi nel pilota",moz.nodes.length===15&&moz.links.length===18);
yes("Mozart→Figaro→Da Ponte (identità d'opera)",edges.has("E0732")&&edges.has("E0874")&&ids.has("pers:da-ponte"));
yes("Nessun capitolo attraversato",moz.nodes.every(n=>n.category!=="capitolo")&&moz.links.every(e=>!e.source.startsWith("cap:")&&!e.target.startsWith("cap:")));
yes("Mozart non supera II senza prova specifica radicata",moz.nodes.every(n=>n._depth<=2));
yes("Livello I conserva gli otto archi diretti",engine.explore("pers:mozart",{maxDepth:1}).links.length===8);
yes("Filtro persone ≤1 senza cancellare Figaro",(()=>{const x=engine.explore("pers:mozart",{maxDepth:5,depthByCategory:{persona:1}});return x.nodes.some(n=>n.id==="opera:figaro")&&!x.nodes.some(n=>n.id==="pers:da-ponte")})());
yes("Filtro visuale non cancella collegamenti",(()=>{const x=engine.explore("pers:mozart",{mutedCategories:["opera"]});return x.nodes.some(n=>n.id==="opera:figaro"&&n._bridge)&&x.nodes.some(n=>n.id==="pers:da-ponte")})());
yes("Orfeo: due versioni Gluck specificamente verificate",(()=>{const x=engine.explore("opera:orfeo-euridice",{maxDepth:1});return x.links.some(e=>e.id==="L02-A14")&&x.links.some(e=>e.id==="L02-A15")})());
yes("Fidelio: redazioni certificate non perse",(()=>{const x=engine.explore("opera:fidelio",{maxDepth:1});return x.links.some(e=>e.id==="L03-A11")&&x.links.some(e=>e.id==="L03-A13")})());
yes("Otello: stesso soggetto ma confronto non causale",engine.explore("opera:otello-rossini-1816",{maxDepth:1}).links.some(e=>e.id==="L09-E03"&&e.statement_type==="comparison"));
for(const id of ["pers:mozart","pers:messiaen","pers:beethoven","pers:vivaldi","pers:bach"]){
 const x=engine.explore(id,{maxDepth:5});
 yes(id+" non attraversa capitoli",x.nodes.every(n=>n.category!=="capitolo")&&x.links.every(e=>!e.source.startsWith("cap:")&&!e.target.startsWith("cap:")));
 yes(id+" mantiene profondità entro il massimo",x.nodes.every(n=>n._depth<=5));
}
const fixture={nodes:[{id:"pers:r",category:"persona"},{id:"pers:p",category:"persona"},{id:"pers:q",category:"persona"},{id:"cap:periodo",category:"capitolo"}],
links:[
 {id:"f1",source:"pers:r",target:"pers:p",quality_gate:"riscontro_storico_indipendente",historical_verified_independently:true,evidence_urls:["https://example.org/fixture"],forward:"è maestro di",reverse:"studiò con"},
 {id:"f2",source:"pers:p",target:"pers:q",quality_gate:"riscontro_storico_indipendente",historical_verified_independently:true,evidence_urls:["https://example.org/fixture"]},
 {id:"f3",source:"pers:r",target:"cap:periodo",quality_gate:"riscontro_storico_indipendente",historical_verified_independently:true,evidence_urls:["https://example.org/fixture"]}]};
const empty=createRootedExplorer(fixture,{schema:"root-evidence-v1",witnesses:[]});
yes("Persona intermedia non abilita BFS",!empty.explore("pers:r").nodes.some(n=>n.id==="pers:q"));
yes("Capitoli esclusi con qualsiasi flag",!empty.explore("pers:r").nodes.some(n=>n.id==="cap:periodo"));
yes("Testo inverso conservato",empty.relationDetail(fixture.links[0],"pers:p").phrase==="studiò con");
const manual={schema:"root-evidence-v1",witnesses:[{root:"pers:r",path:["pers:r","pers:p","pers:q"],edge_id:"f2",status:"approved",root_specific_claim:"Fixture sintetica: permesso di attraversamento basato sulla radice",evidence_urls:["https://example.org/fixture"],reviewers:["Reviewer1","Reviewer2"]}]};
yes("Con prova revisionata simulata il II livello è possibile",createRootedExplorer(fixture,manual).explore("pers:r").nodes.some(n=>n.id==="pers:q"));
yes("Un'immissione dal filtro UI non sblocca testimoni",!empty.explore("pers:r",{rootWitnesses:manual.witnesses}).nodes.some(n=>n.id==="pers:q"));
console.log("TOTALE "+count+" asserzioni Node: PASS. Non è un test del renderer HTML, dei tap Android o delle 3856 relazioni legacy.");
