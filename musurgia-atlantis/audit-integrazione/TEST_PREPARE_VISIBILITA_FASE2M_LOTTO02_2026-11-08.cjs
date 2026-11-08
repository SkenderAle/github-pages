'use strict';
// Musurgia Atlantis — Fase 2M, Lotto 02
// Regressioni del renderer originale. Nessuna scrittura su file pubblici.
const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const root=path.resolve(__dirname,'../..');
const js=fs.readFileSync(path.join(root,'atlante3d/app-livelli.js'),'utf8');
const source=(start,end)=>{
 const a=js.indexOf(start),b=js.indexOf(end,a+start.length);
 assert.ok(a>=0&&b>a,'Blocco originale non trovato: '+start+' / '+end);
 return js.slice(a,b);
};
let pass=0;
const check=(name,condition)=>{assert.ok(condition,name);pass++;process.stdout.write('PASS '+name+'\n');};
const prepareSetup=[
 'let nodes=[],edges=[],byId=new Map(),videos=[],videoLinks=[],lensGroups=[],lensEdges=[],historySchoolEdges=[],derivedGenreEdges=[],freeNodes=[],freeEdges=[];',
 'let activeEdgesCacheKey="",activeEdgesCache=[],selectedNeighborCacheKey="",selectedNeighborCache=new Set(),selectedDepthCacheKey="",selectedDepthCache=new Map();',
 'const rnd=()=>0.5,geoCache=new Map(),geoFromNode=()=>null,compileDerivedGenreEdges=()=>[],status={textContent:""},console={warn(){},info(){}};',
 'let zoom=0,geoZoomPct=0,geoAutoSpan=0;const geoState={};',
 'const resize=()=>{},syncLensControls=()=>{},syncCategoryControls=()=>{},syncZoomControls=()=>{};'
].join('\n');
const prepare=new Function('db',prepareSetup+source('function prepare(db)','function physics()')+
 '\nprepare(db);return {nodes,byId,edges,lensEdges,historySchoolEdges,status:status.textContent,db};');
const integrate=new Function('db','extension',
 'const console={info(){}};\n'+source('function integrateGenreExtension(db,extension)','function prepare(db)')+
 '\nintegrateGenreExtension(db,extension);return db;');
const runDepth=new Function(
 'const byId=new Map([["moz",{id:"moz",label:"Mozart",type:"compositore"}],["genre",{id:"genre",label:"Dramma giocoso",type:"corrente"}],["other",{id:"other",label:"Autore estraneo",type:"compositore"}],["period",{id:"period",label:"Classicismo",type:"periodo"}],["haydn",{id:"haydn",label:"Haydn",type:"compositore"}]]);'+
 'const e=[{id:"m-g",source:"moz",target:"genre"},{id:"g-other",source:"genre",target:"other"},{id:"m-p",source:"moz",target:"period"},{id:"p-h",source:"period",target:"haydn"}];'+
 'const selected=byId.get("moz"),readingLevel=2,activeCategories=new Set(["compositore","corrente","periodo"]),activeLensKey=()=>"all",currentEdges=()=>e,readingAllowed=()=>new Set(["m-g","m-p"]),readingKey=x=>x.id,readingScore=()=>30,readingDepth=()=>[1,2,3][readingLevel],categoryVisible=()=>true,hasNonMusicLens=()=>true;'+
 'let selectedDepthCacheKey="",selectedDepthCache=new Map();'+
 source('function nodeEligibleForDepth(n)','function selectedNeighborIds()')+
 '\nreturn {depths:Object.fromEntries(selectedDepths(4)),readingDepth:readingDepth()};'
);
const fixture={
 nodes:[{id:'moz',label:'Mozart',type:'compositore'},{id:'leo',label:'Leopold Mozart',type:'compositore'},
 {id:'school',label:'Scuola',type:'corrente'},{id:'period',label:'Classicismo',type:'periodo'},
 {id:'amb',label:'Contesto editoriale',type:'ambito'},{id:'hide',label:'Nascosto',type:'compositore',visible:0},
 {id:'cinema',label:'Alfred Hitchcock',type:'compositore'}],
 edges:[{id:'base-school',source:'school',target:'moz',kind:'appartenenza'},
 {id:'base-school-other',source:'moz',target:'school',kind:'altro'},
 {id:'base-leopold',source:'leo',target:'moz',kind:'maestro-allievo'},
 {id:'base-period',source:'moz',target:'period',kind:'appartenenza'},
 {id:'base-hidden',source:'hide',target:'moz',kind:'appartenenza'}],
 lenses:{groups:[],relations:[
 {id:'special-school',source:'school',target:'moz',group:'scuole',status:'documentato',sources:['https://example.org']},
 {id:'pending-school',source:'school',target:'leo',group:'scuole',status:'da-verificare',sources:['https://example.org']},
 {id:'no-sources',source:'school',target:'leo',group:'scuole',status:'documentato',sources:[]},
 {id:'missing-node',source:'ghost',target:'leo',group:'scuole',status:'documentato',sources:['https://example.org']},
 {id:'special-formazione',source:'leo',target:'moz',group:'formazione',status:'documentato-con-cautela',sources:['https://example.org']}
 ]}
};
const o=prepare(fixture);
check('ambito e hidden non diventano nodi visibili',!o.nodes.some(n=>['amb','hide'].includes(n.id)));
check('regista riclassificato soltanto in visualizzazione',o.nodes.find(n=>n.id==='cinema').type==='persona'&&fixture.nodes.find(n=>n.id==='cinema').type==='compositore');
check('grafo sorgente base non mutato',fixture.edges.length===5);
check('archi base filtrati per estremi visibili',o.edges.length===4);
check('due relazioni specialistiche con gate di visualizzazione valido',o.lensEdges.length===2);
check('specialistica di scuola visibile',o.historySchoolEdges.some(e=>e.id==='special-school'));
check('entrambi gli archi base sulla medesima coppia di scuola vengono nascosti',!o.historySchoolEdges.some(e=>['base-school','base-school-other'].includes(e.id)));
check('relazione base maestro-allievo non sostituita da lente formazione',o.historySchoolEdges.some(e=>e.id==='base-leopold'));
check('periodo rimane nel set di nodi preparati',o.nodes.some(n=>n.id==='period'));
const d=runDepth();
check('attraversamento improprio del genere comune al secondo livello',d.depths.other===2);
check('periodo escluso come ponte nel renderer legacy',d.depths.haydn===undefined);
check('renderer legacy profondo solo tre livelli',d.readingDepth===3);
const extDB={nodes:[{id:'opera',label:'Operetta',type:'corrente'},{id:'moz',label:'Mozart',type:'compositore'}],
 edges:[{id:'base-existing',source:'opera',target:'moz',kind:'appartenenza'}]};
const extension={nodes:[{id:'opera',label:'Operetta',type:'corrente',url:'../opera/'}],
 relations:[{source:'opera',target:'moz',kind:'formazione',forward:'creò',sources:['https://example.org']}]};
integrate(extDB,extension);
check('estensione scarta la seconda semantica a estremi identici',extDB.edges.length===1&&!extDB.edges[0].forward);
check('integrazione aggiorna URL in memoria del nodo esistente',extDB.nodes[0].url==='../opera/');
console.log('DIAGNOSTICA SU FIXTURE ORIGINALI: '+pass+'/'+pass+' PASS; non e una certificazione storico-filologica.');
// Il blocco seguente analizza dati REALI, senza alterarli: eseguirlo con Node nel checkout.
if(process.argv.includes('--live')){
 const database=p=>JSON.parse(fs.readFileSync(path.join(root,'atlante3d/database',p),'utf8'));
 const db=database('grafo.json'),lens=database('relazioni.json'),ext=database('integrazione-operetta-musical.json');
 const before={nodes:db.nodes.length,edges:db.edges.length,sourceSpecialist:lens.relations.length,extensionDeclared:ext.relations.length};
 db.lenses=lens;
 integrate(db,ext);
 const prepared=prepare(db);
 const schoolPairs=new Set(prepared.lensEdges.filter(e=>e.group==='scuole').map(e=>[e.source,e.target].sort().join('|')));
 const suppressedBase=prepared.edges.filter(e=>schoolPairs.has([e.source,e.target].sort().join('|')));
 const result={source:before,afterExtension:{nodes:db.nodes.length,edges:db.edges.length},
  prepared:{nodes:prepared.nodes.length,baseEdges:prepared.edges.length,acceptedSpecialist:prepared.lensEdges.length,
  visibleMusicHistoryEdges:prepared.historySchoolEdges.length,suppressedBaseBySchoolPair:suppressedBase.length,
  suppressedExamples:suppressedBase.slice(0,20).map(e=>({id:e.id||null,source:e.source,target:e.target,kind:e.kind||null}))},
  note:'I dati reali vengono letti e NON scritti; questo audit non certifica archi storici, root I-V, hover/tap o merge.'};
 console.log(JSON.stringify(result,null,2));
}
