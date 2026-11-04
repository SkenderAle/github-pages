/* Controllo post-pubblicazione: prova il dominio reale, non /rinascimento/index.html.
   Verifica mobile e desktop con il browser del runner, dopo il deploy Pages. */
const { chromium } = require('playwright');
const fs = require('node:fs');
const BASE='https://musurgiamundi.com';
const CASES=[
 {slug:'rinascimento',chapter:'rinascimento'},
 {slug:'medioevo',chapter:'medioevo'}
];
const SIZES=[{name:'mobile',width:390,height:844},{name:'desktop',width:1365,height:900}];
const DELAY=12000,MAX_ATTEMPTS=7;
const pause=ms=>new Promise(resolve=>setTimeout(resolve,ms));
(async()=>{
 const browser=await chromium.launch({channel:'chrome',headless:true,args:['--no-sandbox']});
 fs.mkdirSync('audit-menu-live-screenshots',{recursive:true});
 const outcomes=[];
 for(const size of SIZES){
  const ctx=await browser.newContext({viewport:{width:size.width,height:size.height},deviceScaleFactor:1});
  await ctx.route('**/*',r=>{
   const resource=r.request().resourceType();
   const url=r.request().url();
   if(['image','media','font'].includes(resource)&&!url.startsWith(BASE+'/'))return r.abort();
   return r.continue();
  });
  for(const test of CASES){
   const page=await ctx.newPage();
   let success=null,lastFailure='';
   for(let attempt=1;attempt<=MAX_ATTEMPTS;attempt++){
    try{
     const url=BASE+'/'+test.slug+'/?mm_menu_audit=20261104-dominio01';
     const response=await page.goto(url,{waitUntil:'domcontentloaded',timeout:28000});
     if(!response || response.status()!==200)throw new Error('HTTP '+response?.status());
     await page.waitForSelector('.atlas-autonav nav.mm-compact-ready',{timeout:10000});
     const state=await page.evaluate(()=>{
      const bar=document.querySelector('.atlas-autonav');
      const nav=bar?.querySelector(':scope > nav');
      const css=getComputedStyle(nav);
      const script=document.querySelector('script[src*="atlas-autonav-v1.js"]')?.getAttribute('src')||'';
      const toggle=bar.querySelector('.atlas-menu-toggle');
      toggle.click();
      const rect=nav.getBoundingClientRect();
      return {
       path:location.pathname,
       script,
       detectedPage:bar.dataset.atlasPage,
       button:toggle.textContent.trim(),
       compactHome:nav.classList.contains('mm-compact-home'),
       compactChapters:nav.querySelectorAll(':scope > details.mm-compact-chapter').length,
       oldLabels:nav.textContent.includes('apri elenco'),
       oldSubindex:nav.querySelectorAll('.atlas-subindex').length,
       columns:css.gridTemplateColumns,
       geometry:{left:rect.left,right:rect.right,scrollWidth:nav.scrollWidth,clientWidth:nav.clientWidth,innerWidth:window.innerWidth}
      };
     });
     const errors=[];
     if(!state.script.includes('dominio01'))errors.push('HTML ancora non aggiornato: '+state.script);
     if(state.detectedPage!==test.chapter||state.compactHome)errors.push('Pagina scambiata per home: '+state.detectedPage);
     if(!state.compactChapters)errors.push('Nessun capitolo trasformato');
     if(state.oldLabels||state.oldSubindex)errors.push('Sottoindice precedente rimasto');
     const g=state.geometry;
     if(g.left<-2||g.right>g.innerWidth+2||g.scrollWidth>g.clientWidth+5)errors.push('Geometria non responsiva: '+JSON.stringify(g));
     if(errors.length)throw new Error(errors.join('; '));
     await page.screenshot({path:'audit-menu-live-screenshots/'+size.name+'-'+test.slug+'.png',animations:'disabled'});
     success={page:test.slug,mode:size.name,status:'OK',attempt,state};
     console.log('OK live '+size.name+' '+test.slug+' '+JSON.stringify(state));
     break;
    }catch(err){
     lastFailure=String(err.message||err);
     console.log('Riprovo '+size.name+' '+test.slug+' '+attempt+'/'+MAX_ATTEMPTS+' : '+lastFailure);
     if(attempt<MAX_ATTEMPTS)await pause(DELAY);
    }
   }
   outcomes.push(success||{page:test.slug,mode:size.name,status:'FAILED',error:lastFailure});
   await page.close();
  }
  await ctx.close();
 }
 await browser.close();
 fs.writeFileSync('audit-menu-live-report.json',JSON.stringify({site:BASE,results:outcomes},null,2));
 const fails=outcomes.filter(x=>x.status!=='OK');
 console.log('Audit live: '+(outcomes.length-fails.length)+'/'+outcomes.length+' superati');
 if(fails.length)process.exitCode=1;
})().catch(err=>{console.error(err);process.exitCode=2;});
