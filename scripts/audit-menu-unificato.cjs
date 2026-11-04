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
 const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
 for(const mode of modes){
  const context=await browser.newContext({viewport:{width:mode.width,height:mode.height},deviceScaleFactor:1});
  await context.route('**/*',route=>{
   const url=route.request().url();
   if(url.startsWith('http://127.0.0.1:8765/'))return route.continue();
   return route.abort();
  });
  for(const path of targets){
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
      oldSubmenus:document.querySelectorAll('.atlas-autonav .atlas-subindex').length,
      oldSummary:summaries.filter(x=>/paragrafi\s*·\s*apri elenco/i.test(x)).length,
      nestedCount:summaries.length,
      compactReady:!!document.querySelector('.atlas-autonav nav.mm-compact-ready'),
      detailsCount:menu?.querySelectorAll('details').length||0
     };
    },panelSelector);
    const errs=[];
    if(state.canonical!==1)errs.push('CSS unico assente/duplicato: '+state.canonical);
    if(state.legacy)errs.push('CSS storico ancora importato: '+state.legacy);
    if(!state.menu)errs.push('Pannello menu non generato');
    if(state.background!=='rgb(250, 247, 241)')errs.push('Sfondo difforme: '+state.background);
    if(state.oldSubmenus)errs.push('Sottoindici vecchi rimasti: '+state.oldSubmenus);
    if(state.oldSummary)errs.push('Etichette legacy presenti: '+state.oldSummary);
    if(state.font&&!/system-ui/i.test(state.font))errs.push('Font menu difforme: '+state.font);
    const name=path.split('/').filter(Boolean).slice(0,-1).join('-')||'home';
    if(['medioevo','rinascimento','romanticismo','verso-le-avanguardie','melodramma-classico'].includes(name)){
     const open=page.locator('.atlas-autonav>.atlas-menu-toggle, #indice-menu>summary, #av-indice>summary, .classico-menu>summary').first();
     if(await open.count()){
      await open.click({timeout:6000});
      await page.screenshot({path:saveDir+'/'+mode.name+'-'+name+'.png',fullPage:false,animations:'disabled'});
     }
    }
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
 fs.writeFileSync('audit-menu-report.json',JSON.stringify({time:new Date().toISOString(),pages:targets.length,modes:modes.map(x=>x.name),failures,report},null,2));
 console.log('Audit: '+report.length+' controlli, '+failures.length+' difformità.');
 if(failures.length)process.exitCode=1;
})().catch(err=>{console.error(err);process.exitCode=2;});
