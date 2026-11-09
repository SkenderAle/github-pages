"use strict";
// Run on a local full clone: node musurgia-atlantis/audit-integrazione/TEST_GENERI_FORME_CHECKPOINT11.cjs
// Read-only checks: does NOT merge legacy genre records into Atlantis production.
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const read=p=>JSON.parse(fs.readFileSync(path.join(__dirname,p),"utf8"));
const official=read("../grafo.json");
const overlay=read("./GENERI_FORME_LEGACY_PREVIEW_CHECKPOINT11_2026-11-09.json");
const p=new Set(official.nodes.filter(n=>n.category==="persona").map(n=>n.id));
const g=new Set(overlay.nodes.map(n=>n.id));
const allSource=new Set(overlay.links.map(e=>e.source));
const checks=[
 ["754 Atlantis nodes (baseline)", official.nodes.length===754],
 ["1718 Atlantis edges (baseline)", official.links.length===1718],
 ["50 legacy genre/form nodes",overlay.nodes.length===50&&g.size===50],
 ["271 matched legacy catalogue edges",overlay.links.length===271],
 ["117 provisional exact-name matches",overlay.crosswalk.length===117],
 ["93 distinct connected composers",allSource.size===93],
 ["Every overlay endpoint exists",overlay.links.every(e=>p.has(e.source)&&g.has(e.target))],
 ["No production Atlantis edge IDs reused",overlay.links.every(e=>!official.links.some(a=>a.id===e.id))],
 ["No legacy edge marked independently certified Atlantis",overlay.links.every(e=>e.historical_verified_independently===false)],
 ["Mozart has 12 catalogue genre/form links",overlay.links.filter(e=>e.source==="pers:mozart").length===12],
 ["Messa has 16 matched composers",overlay.links.filter(e=>e.target==="legacy:gf:genere-messa").length===16],
 ["Mozart genres include Sinfonia/Concerto/Opera/Messa",["genere-sinfonia","genere-concerto","genere-opera","genere-messa"].every(id=>overlay.links.some(e=>e.source==="pers:mozart"&&e.target==="legacy:gf:"+id))],
 ["No Mozart→Sonata link inferred",!overlay.links.some(e=>e.source==="pers:mozart"&&e.target==="legacy:gf:genere-sonata")],
 ["Legacy notes and sources remain source-owned",overlay.links.filter(e=>e.source==="pers:mozart").some(e=>e.note&&e.sources?.length>0)],
 ["Preview-only status explicit",overlay.status==="preview_overlay_only_not_historical_merge"]
];
for(const [name,pass]of checks){assert.ok(pass,name);console.log("PASS "+name)}
console.log("TOTALE "+checks.length+" test: PASS. No browser/touch test and no historical re-certification.");
