import { chromium } from "playwright";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const output="atlante3d/tests/qa-output";
mkdirSync(output,{recursive:true});
const failures=[],events=[],states=[];
const assert=(ok,msg)=>{if(!ok)failures.push(msg);events.push((ok?"PASS ":"FAIL ")+msg);};
const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
async function launchContext(size){
 const context=await browser.newContext({viewport:size,deviceScaleFactor:1});
 const page=await context.newPage();
 page.on("pageerror",e=>failures.push("Uncaught JS error: "+e.message));
 await page.goto("http://127.0.0.1:8765/atlante3d/atlante-livelli.html",{waitUntil:"domcontentloaded",timeout:30000});
 await page.waitForFunction(()=>document.querySelector("#status")?.textContent?.includes("compositori"),{timeout:20000}).catch(()=>{});
 const loaded=await page.locator("#status").textContent();
 assert(loaded.includes("compositori")&&!loaded.includes("Errore"),"Database loads: "+loaded);
 assert(await page.locator("#readingToolbar").isVisible(),"Reading-level selector visible");
 assert(await page.locator("#sky").evaluate(c=>c.width>250&&c.height>250),"Map canvas initialized");
 return {context,page};
}
try{
 const {context,page}=await launchContext({width:1440,height:900});
 const levels=["Scoprire","Approfondire","Ricercare"];
 for(const name of ["Beethoven","Monteverdi","Stravinskij"]){
  await page.locator("#search").fill(name);
  await page.locator("#search").press("Enter");
  await page.waitForTimeout(1200);
  const title=(await page.locator("#panelTitle").textContent()||"");
  assert(title.toLowerCase().includes(name.toLowerCase()),"Search selects "+name+": "+title);
  for(let level=0;level<3;level++){
   await page.locator("#readingLevel").selectOption(String(level));
   await page.waitForTimeout(650);
   const status=await page.locator("#status").textContent();
   assert(status.includes(levels[level])&&status.includes(name),"Reading level "+levels[level]+" updates "+name);
   if(name==="Beethoven")await page.screenshot({path:join(output,"beethoven-"+levels[level].toLowerCase()+".png"),fullPage:true});
   states.push({name,level:levels[level],status});
  }
 }
 await page.locator("#search").fill("Beethoven");await page.locator("#search").press("Enter");
 await page.locator("#readingLevel").selectOption("0");
 await page.waitForTimeout(400);
 assert(await page.locator("#explode").isEnabled(),"Explode control enabled after selection");
 await page.locator("#explode").click();await page.waitForTimeout(500);
 const exploded=await page.locator("#status").textContent();
 assert(exploded.includes("raggiera esplosa"),"Explode executes: "+exploded);
 await page.screenshot({path:join(output,"beethoven-esplodi.png"),fullPage:true});
 assert(!(await page.locator("#exploreControls").getAttribute("open")),"Advanced controls collapsed initially");
 await page.locator("#exploreControls summary").click();
 await page.waitForTimeout(200);
 const detailState=await page.locator("#exploreControls").evaluate(el=>{
  const input=el.querySelector('input[data-lens="trasmissioni"]');
  const label=input?.closest("label");
  return {open:el.open,detailsDisplay:getComputedStyle(el).display,inputDisplay:input&&getComputedStyle(input).display,labelDisplay:label&&getComputedStyle(label).display,labelRect:label&&{width:label.getBoundingClientRect().width,height:label.getBoundingClientRect().height}};
 });
 console.log("Advanced filter DOM state:",JSON.stringify(detailState));
 assert(detailState.open,"Advanced filters details toggled: "+JSON.stringify(detailState));
 assert(await page.locator('#exploreControls label').first().isVisible(),"Advanced filter labels visible");
 await page.screenshot({path:join(output,"beethoven-filtri-avanzati.png"),fullPage:true});
 await context.close();
 const {context:mobile,page:m}=await launchContext({width:390,height:844});
 await m.locator("#search").fill("Beethoven");await m.locator("#search").press("Enter");
 await m.waitForTimeout(900);
 await m.screenshot({path:join(output,"mobile-beethoven.png"),fullPage:true});
 const geom=await m.locator("#readingToolbar").evaluate(el=>{const r=el.getBoundingClientRect();return {left:r.left,right:r.right,top:r.top,bottom:r.bottom,width:innerWidth}});
 assert(geom.left>=-2&&geom.right<=geom.width+2,"Mobile reading selector within viewport "+JSON.stringify(geom));
 await context.close();
}finally{await browser.close();}
writeFileSync(join(output,"results.json"),JSON.stringify({failed:failures.length,failures,events,states},null,2));
for(const e of events)console.log(e);
if(failures.length){console.error("FAILED "+failures.length,failures);process.exitCode=1}else console.log("ALL TESTS PASSED");
