/* Audit reale DOM + CSS dei menu, su Chromium desktop e Android-size.
   Si esegue su server locale: nessuna dipendenza dalle cache GitHub Pages. */
const { chromium } = require('playwright');
const fs = require('node:fs');
const targets = [
 'index.html',
 'medioevo/index.html','rinascimento/index.html',
 'barocco/index.html','melodramma/index.html',
 'melodramma-classico/index.html','classicismo/index.html',
 'risorgimento/index.html','romanticismo/index.html',
 'verso-le-avanguardie/index.html','concerti/index.html',
 'parola-e-canto/index.html','musica-da-camera/index.html',
 'dalla-sinfonia-alla-rapsodia/index.html','dal-musical-al-film/index.html',
 'anatomia-del-melodramma/index.html','melodramma/audioteca/index.html',
 'rinascimento/rito-patriarchino/index.html',
 'rinascimento/scjaracule/index.html',
 'romanticismo/destino-provvidenza/index.html'
];
// Verifica anche URL reali del dominio personalizzato: /rinascimento/, non solo /rinascimento/index.html.
const domainPaths = ['/',...targets.filter(path=>path.endsWith('/index.html')).map(path=>path.replace(/index\.html$/, ''))];
const allPaths = [...targets, ...domainPaths];
const panelSelector = [
 '.atlas-autonav > nav.mm-compact-ready',
 '.menu-panel.mm-compact-romantic',
 '.mm-index-panel.mm-compact-ready',
 '#menu > .panel.mm-compact-ready',
 'nav.main .mm-concerti-panel',
 '.av-panel.mm-compact-ready',
 '.classico-menu-panel',
 '.anatomia-menu-panel',
 '.mm-audio-panel',
 'nav.mm-dossier-menu .mm-dossier-panel'
].join(',');
const modes=[
 {name:'desktop',width:1440,height:900},
 {name:'mobile',width:390,height:844}
];
const failures=[];
const report=[];
const saveDir='audit-menu-screenshots';
fs.mkdirSync(saveDir,{recursive:true});
(async()=>{
 const browser=await chromium.launch({channel:'chrome',headless:true,args:['--no-sandbox']});
 for(const mode of modes){
  const context=await browser.newContext({viewport:{width:mode.width,height:mode.height},deviceScaleFactor:1});
  await context.route('**/*',route=>{
   const url=route.request().url();
   if(url.startsWith('http://127.0.0.1:8765/'))return route.continue();
   return route.abort();
  });
  for(const path of allPaths){
   const page=await context.newPage();
   try{
    await page.goto('http://127.0.0.1:8765/'+path,{waitUntil:'domcontentloaded',timeout:35000});
    await page.waitForTimeout(180);
    const state=await page.evaluate((selector)=>{
     const menu=document.querySelector(selector);
     const links=[...document.querySelectorAll('link[rel="stylesheet"]')].map(x=>x.getAttribute('href')||'');
     const canonical=links.filter(x=>x.includes('mm-menu-unificato-v1.css'));
     const old=links.filter(x=>/(atlas-autonav-v1|mm-menu-compatto-v1|mm-menu-dossier-v1)\.css/.test(x));
     const summaries=[...document.querySelectorAll('details.mm-compact-chapter>summary, .av-panel .mm-av-sublist>summary')]
      .map(x=>x.textContent.trim());
     const css=menu?getComputedStyle(menu):null;
     return {
      menu:!!menu,
      background:css?.backgroundColor||null,
      font:css?.fontFamily||null,
      canonical:canonical.length,
      legacy:old.length,
      legacyUrls:old,
      oldSubmenus:document.querySelectorAll('.atlas-autonav .atlas-subindex').length,
      oldSummary:summaries.filter(x=>/paragrafi\s*·\s*apri elenco/i.test(x)).length,
      nestedCount:summaries.length,
      compactReady:!!document.querySelector('.atlas-autonav nav.mm-compact-ready'),
      homeMode:!!document.querySelector('.atlas-autonav nav.mm-compact-home'),
      detectedPage:document.querySelector('.atlas-autonav')?.dataset.atlasPage||null,
      oldLabelVisible: /\\b\\d+\\s+paragrafi\\s*·\\s*apri elenco/i.test(menu?.textContent||''),
      detailsCount:menu?.querySelectorAll('details').length||0
     };
    },panelSelector);
    const errs=[];
    if(state.canonical!==1)errs.push('CSS unico assente/duplicato: '+state.canonical);
    if(state.legacy)errs.push('CSS storico ancora importato: '+state.legacy+' '+state.legacyUrls.join(', '));
    if(!state.menu)errs.push('Pannello menu non generato');
    if(state.background!=='rgb(250, 247, 241)')errs.push('Sfondo difforme: '+state.background);
    if(state.oldSubmenus)errs.push('Sottoindici vecchi rimasti: '+state.oldSubmenus);
    if(state.oldSummary || state.oldLabelVisible)errs.push('Etichette legacy presenti: '+state.oldSummary);
    const expectedHome = path==='/' || path==='index.html';
    if(state.detectedPage){
      if(expectedHome && (state.detectedPage!=='home'||!state.homeMode)) errs.push('Home non riconosciuta correttamente: '+state.detectedPage);
      if(!expectedHome && (state.detectedPage==='home'||state.homeMode)) errs.push('Sottopagina scambiata per home: '+state.detectedPage);
    }
    if(state.font&&!/system-ui/i.test(state.font))errs.push('Font menu difforme: '+state.font);
    const name=(path.endsWith('/')?path.slice(0,-1):path.replace(/\/index\.html$/,'')).split('/').filter(Boolean).join('-')||'home';
    const toggle=page.locator([
     '.atlas-autonav>.atlas-menu-toggle','#indice-menu>summary',
     '#av-indice>summary','.classico-menu>summary',
     '.anatomia-menu>summary','.mm-audio-index>summary',
     '.mm-dossier-index>summary','.mm-index-details>summary',
     '#menu>summary','.mm-concerti-index>summary'
    ].join(',')).first();
    if(await toggle.count()){
     await toggle.click({timeout:6500});
     const geometry=await page.evaluate((selector)=>{
      const el=document.querySelector(selector);
      if(!el)return null;
      const r=el.getBoundingClientRect();
      return {left:r.left,right:r.right,top:r.top,bottom:r.bottom,
       viewportWidth:window.innerWidth,viewportHeight:window.innerHeight,
       visible:r.width>0&&r.height>0,scrollWidth:el.scrollWidth,clientWidth:el.clientWidth};
     },panelSelector);
     state.geometry=geometry;
     if(geometry?.visible){
      if(geometry.left< -2||geometry.right>geometry.viewportWidth+2)
       errs.push('Menu fuori dallo schermo: '+JSON.stringify(geometry));
      if(geometry.scrollWidth>geometry.clientWidth+5)
       errs.push('Menu con overflow orizzontale: '+JSON.stringify(geometry));
     }else errs.push('Il pannello non si apre al clic');
     if(['medioevo','rinascimento','romanticismo','verso-le-avanguardie','melodramma-classico','anatomia-del-melodramma','melodramma-audioteca'].includes(name)){
      await page.screenshot({path:saveDir+'/'+mode.name+'-'+name+'.png',fullPage:false,animations:'disabled'});
     }
    }else errs.push('Nessun comando per aprire il menu');
    const item={path,mode:mode.name,...state,errors:errs};
    report.push(item);if(errs.length)failures.push(item);
    console.log((errs.length?'FAIL ':'OK   ')+mode.name+' '+path+(errs.length?' => '+errs.join('; '):''));
   }catch(error){
    const item={path,mode:mode.name,errors:[String(error)]};
    report.push(item);failures.push(item);
    console.log('ERROR '+mode.name+' '+path+': '+error);
   }finally{await page.close();}
  }
  await context.close();
 }
 await browser.close();
 fs.writeFileSync('audit-menu-report.json',JSON.stringify({time:new Date().toISOString(),pages:targets.length,urls:allPaths.length,modes:modes.map(x=>x.name),failures,report},null,2));
 console.log('Audit: '+report.length+' controlli, '+failures.length+' difformità.');
 if(failures.length)process.exitCode=1;
})().catch(err=>{console.error(err);process.exitCode=2;});
