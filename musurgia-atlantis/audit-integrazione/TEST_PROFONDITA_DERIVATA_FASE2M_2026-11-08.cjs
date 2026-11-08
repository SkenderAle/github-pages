'use strict';
const assert=require('node:assert/strict');
const {exploreRootAndDerived}=require('./PROTOTIPO_PROFONDITA_DERIVATA_FASE2M_2026-11-08.cjs');
const nodes=['A','B','C','D','E','F','G'].map(id=>({id,category:'persona',name:id}))
 .concat([{id:'genre',category:'nodo-di-senso',name:'Genere'},{id:'cap:audiovisivo',category:'capitolo',name:'Musica nell’audiovisivo'}]);
const edge=(id,source,target,roots=[],pivots=[])=>
 ({id,source,target,audit:{historical_verified:true,independent_evidence:true,root_relevance_ids:roots,pivot_relevance_ids:pivots}});
const links=[edge('AB','A','B'),edge('BC','B','C',['A'],['B']),edge('CD','C','D',['A'],['B']),
 edge('DE','D','E',[],['B','D']),edge('EF','E','F',[],['D']),edge('FG','F','G',[],['D']),
 edge('Bgenre','B','genre',[],['B']),edge('genreF','genre','F',[],['B']),
 edge('Bcap','B','cap:audiovisivo',[],['B']),
 {id:'shortcut',source:'C',target:'G',audit:{historical_verified:false,independent_evidence:true,pivot_relevance_ids:['B']}}];
const one=exploreRootAndDerived({nodes,links,rootId:'A',pivotId:'B',generalDepth:1,derivedDepth:3});
const three=exploreRootAndDerived({nodes,links,rootId:'A',pivotId:'D',generalDepth:3,derivedDepth:3});
let count=0;function check(name,predicate){assert.ok(predicate,name);console.log('PASS',name);count++;}
check('root I + derived III keeps path to E',one.derivedPaths.find(p=>p.id==='E')?.totalPath.join('>')==='A>B>C>D>E');
check('absolute depth is 4',one.displayNodes.find(n=>n.id==='E')?.absolutePathLength===4);
check('root III + derived III reaches absolute VI',three.derivedPaths.find(p=>p.id==='G')?.totalPath.length===7);
check('no root inference from pivot extension',three.derivedPaths.filter(p=>p.localDepth>0).every(p=>p.directRootRelationInferred===false));
check('chapters excluded',![...one.displayNodes,...three.displayNodes].some(n=>n.category==='capitolo'));
check('chapter links excluded',![...one.displayLinks,...three.displayLinks].some(e=>e.source.startsWith('cap:')||e.target.startsWith('cap:')));
check('genre is a terminal context, never a bridge',!one.derivedPaths.some(p=>p.id==='F'));
check('unverified shortcut is closed',!one.displayLinks.some(e=>e.id==='shortcut'));
check('root path preserves provenance',three.rootPaths.find(p=>p.id==='D')?.edgeKeys.length===3);
check('unknown pivot rejected',(()=>{try{exploreRootAndDerived({nodes,links,rootId:'A',pivotId:'E',generalDepth:3});return false}catch{return true}})());
check('global depth > V rejected',(()=>{try{exploreRootAndDerived({nodes,links,rootId:'A',generalDepth:6});return false}catch{return true}})());
check('derived depth > III rejected',(()=>{try{exploreRootAndDerived({nodes,links,rootId:'A',derivedDepth:4});return false}catch{return true}})());
console.log('Fixture synthetic, not historical verification:',count,'/',count,'PASS');
