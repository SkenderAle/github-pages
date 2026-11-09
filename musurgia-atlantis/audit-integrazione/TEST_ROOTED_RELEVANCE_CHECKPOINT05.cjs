"use strict";
const fs=require("node:fs");
const path=require("node:path");
const assert=require("node:assert/strict");
const {rootedExplore,relationDetail}=require("./ROOTED_RELEVANCE_CHECKPOINT05.cjs");
const graph=JSON.parse(fs.readFileSync(path.resolve(__dirname,"../grafo.json"),"utf8"));
let passed=0;
const check=(label,ok)=>{assert.ok(ok,label);console.log("PASS "+label);passed++;};
const moz=rootedExplore(graph,"pers:mozart",{maxDepth:5});
const mid=new Set(moz.nodes.map(n=>n.id));
const mei=new Set(moz.links.map(e=>e.id));
check("Mozart→Figaro",mei.has("E0732")&&mid.has("opera:figaro"));
check("Figaro→Da Ponte senza ponte editoriale",mei.has("E0874")&&mid.has("pers:da-ponte"));
check("Nessun capitolo nei risultati",moz.nodes.every(n=>n.category!=="capitolo")&&moz.links.every(e=>!e.source.startsWith("cap:")&&!e.target.startsWith("cap:")));
check("Solo archi verificati indipendentemente",moz.links.every(e=>e.historical_verified_independently===true&&e.quality_gate==="riscontro_storico_indipendente"));
check("Profondità non oltre V",moz.nodes.every(n=>n.at_root_depth<=5));
check("Livello I ferma Da Ponte via opera",!rootedExplore(graph,"pers:mozart",{maxDepth:1}).nodes.some(n=>n.id==="pers:da-ponte"));
check("Limite persona indipendente",!rootedExplore(graph,"pers:mozart",{maxDepth:5,depthByCategory:{persona:1}}).nodes.some(n=>n.id==="pers:da-ponte"));
check("Messiaen→Boulez esiste nel grafo reale",rootedExplore(graph,"pers:messiaen",{maxDepth:1}).links.some(e=>e.id==="L180-A01"));
const node=(id,category="persona")=>({id,name:id,category});
const e=(id,source,target,relation)=>({id,source,target,relation,quality_gate:"riscontro_storico_indipendente",historical_verified_independently:true,evidence_urls:["https://example.org/fixture"],description:"DATO SINTETICO: non è certificazione storica"});
const fake={nodes:[node("pers:mozart"),node("pers:leopold-mozart"),node("opera:figaro","opera"),node("pers:da-ponte"),node("pers:random"),node("contesto:periodo","nodo-di-senso"),node("contesto:capella","nodo-di-senso"),node("doc:violinschule","documento-storico"),node("cap:barocco","capitolo"),node("pers:messiaen"),node("pers:boulez"),node("opera:altro","opera")],links:[
 {...e("t-parent","pers:leopold-mozart","pers:mozart","padre_di"),forward:"è padre di",reverse:"è figlio di",note:"Solo fixture"},
 {...e("t-teacher","pers:leopold-mozart","pers:mozart","insegna_a"),forward:"è maestro di",reverse:"studiò con"},
 e("t-court","pers:leopold-mozart","contesto:capella","serve_cappella"),
 e("t-book","pers:leopold-mozart","doc:violinschule","pubblica_trattato"),
 e("t-work","pers:mozart","opera:figaro","compone"),
 e("t-libretto","pers:da-ponte","opera:figaro","scrive_libretto"),
 e("t-period","pers:mozart","contesto:periodo","appartiene"),
 e("t-period-random","contesto:periodo","pers:random","appartiene"),
 e("t-other-work","pers:da-ponte","opera:altro","scrive_libretto"),
 e("t-chapter","pers:mozart","cap:barocco","menziona"),
 e("t-form","pers:messiaen","pers:boulez","insegna"),
 e("t-commission","pers:boulez","pers:messiaen","commissiona")]};
const m=rootedExplore(fake,"pers:mozart",{maxDepth:5}),si=new Set(m.nodes.map(n=>n.id)),se=new Set(m.links.map(e=>e.id));
check("Leopold padre E maestro: due fatti",se.has("t-parent")&&se.has("t-teacher"));
check("Cappella/trattato non ereditati da Mozart",!si.has("contesto:capella")&&!si.has("doc:violinschule"));
check("Epoca non è ponte",!si.has("pers:random"));
check("Da Ponte non importa tutte le sue opere",!si.has("opera:altro"));
check("Capitoli esclusi",!si.has("cap:barocco"));
const p=rootedExplore(fake,"pers:leopold-mozart",{maxDepth:1});
check("Pivot cambia realmente la radice",p.nodes.some(n=>n.id==="contesto:capella")&&p.nodes.some(n=>n.id==="doc:violinschule"));
check("Insegnamento e commissione non deduplicati",rootedExplore(fake,"pers:messiaen",{maxDepth:1}).links.length===2);
const detail=relationDetail(fake.links[0],"pers:mozart");
check("Frase inversa e payload integro",detail.phrase==="è figlio di"&&detail.note==="Solo fixture"&&detail.original_relation===fake.links[0]);
const witnessed=rootedExplore(fake,"pers:mozart",{maxDepth:5,rootWitnesses:[{root:"pers:mozart",from:"pers:da-ponte",to:"opera:altro",edge_id:"t-other-work",status:"independently_verified",reason:"SIMULAZIONE: pertinenza esplicita",evidence_urls:["https://example.org/fixture-proof"]}]});
check("Terzo livello SOLO con prova della radice",witnessed.nodes.some(n=>n.id==="opera:altro")&&!si.has("opera:altro"));
check("Fixture separata dai dati reali",!graph.links.some(l=>String(l.id).startsWith("t-")));
console.log("PASS "+passed+" controlli. ATTENZIONE: test locale Node, non renderer/UI.");
