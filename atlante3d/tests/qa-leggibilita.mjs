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
 // Add a temporary read-only projection hook in the browser QA response only.
 await page.route("**/app-livelli.js*",async route=>{
  const response=await route.fetch();let body=await response.text();
  const marker="})();",at=body.lastIndexOf(marker);
  if(at<0)throw Error("QA cannot instrument Atlas script");
  const hook='window.__atlasQa=()=>screen.filter(p=>selected&&p.node!==selected&&visibleNode(p.node)&&selectedDepths(readingDepth()).get(p.node.id)===1).map(p=>({label:p.node.label,x:p.x,y:p.y,r:p.r}));window.__atlasQaSources=(sources)=>buildRelationSources({id:"qa-source",sources});';
  body=body.slice(0,at)+hook+body.slice(at);
  await route.fulfill({response,body,contentType:"application/javascript"});
 });
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
 const moved=Number((exploded.match(/raggiera esplosa · (\d+)/)||[])[1]);
 assert(moved>0&&moved<=6,"Scoprire explodes at most six spheres: "+moved);
 await page.screenshot({path:join(output,"beethoven-esplodi.png"),fullPage:true});
 const box=await page.locator("#sky").boundingBox();
 const projected=await page.evaluate(()=>window.__atlasQa?.()||[]);
 const target=projected.find(p=>p.x>70&&p.x<box.width-370&&p.y>220&&p.y<box.height-180);
 assert(Boolean(target),"Projected direct neighbor available for double-click");
 if(target){
  await page.mouse.dblclick(box.x+target.x,box.y+target.y,{delay:55});
  await page.waitForTimeout(500);
  const after=await page.locator("#panelTitle").textContent();
  assert(after===target.label,"Double-click centers selected sphere: "+target.label+" => "+after);
  assert(await page.locator("#backFocus").isEnabled(),"Back button enabled after sphere navigation");
  await page.locator("#backFocus").click();
  const returned=await page.locator("#panelTitle").textContent();
  assert(returned==="Ludwig van Beethoven","Back returns to Beethoven after sphere navigation");
  assert(!(await page.locator("#backFocus").isEnabled()),"Back button disabled when no more history");
  await page.screenshot({path:join(output,"beethoven-doppioclic.png"),fullPage:true});
  await page.locator("#search").fill("Beethoven");await page.locator("#search").press("Enter");
  await page.waitForTimeout(400);
 }
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
 assert(await m.locator("#readingLevelPanel").isVisible(),"Mobile depth selector visible while panel is open");
 await m.locator("#readingLevelPanel").selectOption("2");await m.waitForTimeout(500);
 assert((await m.locator("#readingLevel").inputValue())==="2","Mobile and desktop depth controls stay synchronized");
 assert((await m.locator("#status").textContent()).includes("Ricercare"),"Mobile depth change updates selected graph");
 await m.screenshot({path:join(output,"mobile-ricercare.png"),fullPage:true});
 const firstRelation=m.locator("#panelContent .lens-relation-item button").first();
 await firstRelation.click();await m.waitForTimeout(350);
 const otherName=await m.locator("#panelTitle").textContent();
 assert(otherName!=="Ludwig van Beethoven","Mobile relation button navigates to linked node: "+otherName);
 assert(await m.locator("#backFocusPanel").isEnabled(),"Mobile back button enabled after navigation");
 await m.locator("#backFocusPanel").click();await m.waitForTimeout(350);
 assert((await m.locator("#panelTitle").textContent())==="Ludwig van Beethoven","Mobile back returns to Beethoven");
 await m.screenshot({path:join(output,"mobile-torna-indietro.png"),fullPage:true});
 const geom=await m.locator("#readingToolbar").evaluate(el=>{const r=el.getBoundingClientRect();return {left:r.left,right:r.right,top:r.top,bottom:r.bottom,width:innerWidth}});
 assert(geom.left>=-2&&geom.right<=geom.width+2,"Mobile reading selector within viewport "+JSON.stringify(geom));

 // Regression: relation sources remain inline and operable on an Android-sized viewport.
 await m.locator("#search").fill("Johannes Brahms");
 await m.locator("#search").press("Enter");
 await m.locator("#readingLevelPanel").selectOption("2");
 await m.waitForTimeout(250);
 assert((await m.locator("#panelTitle").textContent())==="Johannes Brahms","Brahms panel selected on mobile");
 const sourceExamples=[
  {verb:"sostenne e raccomandò all'editore",part:"Dvořák",expect:["berliner-philharmoniker.de","antonin-dvorak.cz"]},
  {verb:"apprezzò e sostenne professionalmente",part:"Mahler",expect:["treccani.it","mahlerfoundation.org"]},
  {verb:"collaborò alla definizione violinistica",part:"Joachim",expect:["loc.gov","guides.loc.gov"]}
 ];
 for(const example of sourceExamples){
  const item=m.locator("#panelContent .lens-relation-item").filter({hasText:example.verb}).first();
  assert(await item.count()===1,"Brahms–"+example.part+" relation present");
  if(await item.count()!==1)continue;
  const summary=item.locator("details.lens-relation-sources > summary");
  await summary.click();
  assert(await summary.evaluate(el=>el.parentElement.open),"Mobile sources expand for "+example.part);
  const links=item.locator("details.lens-relation-sources a");
  const urls=await links.evaluateAll(els=>els.map(el=>el.href));
  assert(urls.length===2,"Two sources exposed for Brahms–"+example.part);
  assert(example.expect.every(host=>urls.some(url=>url.includes(host))),"Expected source URLs found for "+example.part+": "+urls.join(", "));
  assert(await links.first().getAttribute("target")==="_blank","External source opens new tab for "+example.part);
  assert((await m.locator("#panelTitle").textContent())==="Johannes Brahms","Opening sources does not navigate away from Brahms");
  await summary.click();
  assert(!(await summary.evaluate(el=>el.parentElement.open)),"Mobile sources collapse for "+example.part);
 }
 await m.screenshot({path:join(output,"mobile-brahms-fonti.png"),fullPage:true});
 const synthetic=await m.evaluate(()=>{
  const zero=window.__atlasQaSources([]);
  const one=window.__atlasQaSources(["https://example.org/source"]);
  const many=window.__atlasQaSources(["https://example.org/a","https://example.org/b","https://example.org/a"]);
  return {zeroSummary:zero.querySelector("summary").textContent,zeroLinks:zero.querySelectorAll("a").length,
    zeroNote:zero.querySelector(".source-unverified")?.textContent||"",oneLinks:one.querySelectorAll("a").length,
    manyLinks:many.querySelectorAll("a").length};
 });
 assert(synthetic.zeroLinks===0&&synthetic.zeroSummary.includes("da verificare")&&Boolean(synthetic.zeroNote),"No fake link for missing sources");
 assert(synthetic.oneLinks===1,"Single source renders one link");
 assert(synthetic.manyLinks===2,"Multiple sources rendered and duplicates suppressed");
 await context.close();
}finally{await browser.close();}
writeFileSync(join(output,"results.json"),JSON.stringify({failed:failures.length,failures,events,states},null,2));
for(const e of events)console.log(e);
if(failures.length){console.error("FAILED "+failures.length,failures);process.exitCode=1}else console.log("ALL TESTS PASSED");
