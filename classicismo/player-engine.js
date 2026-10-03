/* Motore generico per ascolti sincronizzati — La misura e la rivoluzione.
   I player vengono caricati solo vicino al viewport. La teoria è progressiva:
   ASCOLTA (solo musica), VEDI (mappa + segnali), ANALIZZA (anche schema per battute). */
(()=>{
  const STORE=()=>window.CLASSICISMO_LISTENINGS||{};
  let apiPromise;

  function loadYouTubeAPI(){
    if(window.YT&&window.YT.Player) return Promise.resolve(window.YT);
    if(apiPromise) return apiPromise;
    apiPromise=new Promise(resolve=>{
      const prev=window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady=()=>{if(typeof prev==="function")prev();resolve(window.YT);};
      if(!document.querySelector('script[src*="youtube.com/iframe_api"]')){
        const s=document.createElement("script");s.src="https://www.youtube.com/iframe_api";document.head.appendChild(s);
      }
    });
    return apiPromise;
  }

  function formatTime(sec){
    sec=Math.max(0,Number(sec)||0);
    const m=Math.floor(sec/60),s=Math.floor(sec%60);
    return m+":"+String(s).padStart(2,"0");
  }
  function activeEvents(events,time){return(events||[]).filter(e=>time>=e.from&&time<(e.to??e.from+.2));}

  function renderScoreMap(root,spec){
    const box=root.querySelector("[data-score-map]");
    if(!box||!spec.scoreMap)return;
    box.innerHTML=spec.scoreMap.map(x=>`
      <div class="analysis-score-row">
        <b>${x.bars}</b>
        <span><strong>${x.form}</strong> · ${x.key}</span>
        <small>${x.note}</small>
      </div>`).join("");
  }

  function renderVisualization(root,spec){
    if(!spec.visualization)return;
    let box=root.querySelector("[data-viz]");
    if(!box){
      box=document.createElement("div");
      box.className="analysis-viz";
      box.dataset.viz="";
      const grid=root.querySelector(".analysis-lab-grid,.analysis-player");
      if(root.classList.contains("analysis-box")){
        const layers=root.querySelector(".analysis-layers");
        (layers||root).insertAdjacentElement("beforebegin",box);
      }else{
        const score=root.querySelector("[data-score-map]");
        (score||grid||root).insertAdjacentElement(score?"beforebegin":"afterend",box);
      }
    }
    const v=spec.visualization;
    if(v.type==="journey"){
      box.innerHTML='<div class="viz-journey">'+v.stages.map((s,i)=>`
        <div class="viz-stage" data-viz-stage="${i}">
          <b>${s.label}</b><small>${s.detail||""}</small>
        </div>${i<v.stages.length-1?'<span class="viz-arrow">→</span>':""}`).join("")+'</div>';
    }else if(v.type==="quartet"){
      box.innerHTML='<div class="viz-quartet">'+v.lanes.map((l,i)=>`
        <div class="viz-lane" data-viz-lane="${i}"><b>${l.label}</b><span></span></div>`).join("")+'</div>';
    }else if(v.type==="proportions"){
      box.innerHTML='<div class="viz-proportions">'+v.stages.map((s,i)=>`
        <div class="viz-proportion" data-viz-stage="${i}" style="flex:${s.weight||1}"><b>${s.label}</b><small>${s.weight||""}</small></div>`).join("")+'</div>';
    }else if(v.type==="texture"){
      box.innerHTML='<div class="viz-texture">'+v.lanes.map((l,i)=>`
        <div class="viz-texture-lane" data-viz-lane="${i}"><b>${l.label}</b><small>${l.detail||""}</small><span></span></div>`).join("")+'</div>';
    }else if(v.type==="growth"){
      box.innerHTML='<div class="viz-growth"><div class="viz-growth-dots" data-growth-dots></div><b data-growth-label></b></div>';
    }
  }

  function updateVisualization(root,spec,t){
    const v=spec.visualization;if(!v)return;
    if(v.type==="journey"||v.type==="proportions"){
      v.stages.forEach((s,i)=>{
        const el=root.querySelector('[data-viz-stage="'+i+'"]');
        if(el)el.classList.toggle("active",t>=s.from&&t<s.to);
      });
    }else if(v.type==="quartet"){
      v.lanes.forEach((lane,i)=>{
        const active=(lane.events||[]).some(e=>t>=e.from&&t<e.to);
        const el=root.querySelector('[data-viz-lane="'+i+'"]');
        if(el)el.classList.toggle("active",active);
      });
    }else if(v.type==="texture"){
      v.lanes.forEach((lane,i)=>{
        const active=t>=lane.from&&t<lane.to;
        const el=root.querySelector('[data-viz-lane="'+i+'"]');
        if(el)el.classList.toggle("active",active);
      });
    }else if(v.type==="growth"){
      const stage=v.stages.find(s=>t>=s.from&&t<s.to)||v.stages[0];
      const dots=root.querySelector("[data-growth-dots]");
      const label=root.querySelector("[data-growth-label]");
      if(dots)dots.innerHTML=Array.from({length:stage.count||1},()=>"<i></i>").join("");
      if(label)label.textContent=stage.label||"";
    }
  }

  function installModes(root,spec){
    let bar=root.querySelector(".analysis-modebar,.analysis-modes");
    if(!bar){
      bar=document.createElement("div");bar.className="analysis-modebar";
      bar.innerHTML='<button type="button" data-analysis-mode="listen" class="active">ASCOLTA</button><button type="button" data-analysis-mode="see">VEDI</button><button type="button" data-analysis-mode="analyze">ANALIZZA</button>';
      const head=root.querySelector(".analysis-lab-head,.analysis-head");
      if(head)head.insertAdjacentElement("afterend",bar);else root.prepend(bar);
    }
    function setMode(mode){
      root.dataset.mode=mode;
      root.querySelectorAll("[data-analysis-mode]").forEach(b=>b.classList.toggle("active",b.dataset.analysisMode===mode));
      const live=root.querySelector(".analysis-live,.analysis-layers");
      const viz=root.querySelector("[data-viz]");
      const score=root.querySelector("[data-score-map]");
      const note=root.querySelector("[data-provisional]");
      if(live)live.hidden=mode==="listen";
      if(viz)viz.hidden=mode==="listen";
      if(score)score.hidden=mode!=="analyze";
      if(note)note.hidden=mode!=="analyze"||!spec.provisional;
    }
    root.addEventListener("click",e=>{
      const b=e.target.closest("[data-analysis-mode]");
      if(b)setMode(b.dataset.analysisMode);
    });
    setMode(root.dataset.mode||"listen");
  }

  function decorate(root,spec){
    renderScoreMap(root,spec);
    renderVisualization(root,spec);
    installModes(root,spec);
    const title=root.querySelector("[data-analysis-title]");
    const status=root.querySelector("[data-analysis-status]");
    if(title)title.textContent=spec.title;
    if(status)status.textContent=spec.videoId?(spec.purpose||"Ascolto guidato"):"Registrazione definitiva ancora da fissare.";
  }

  async function activate(root){
    if(root.dataset.playerMounted)return;
    const spec=STORE()[root.dataset.analysisId];if(!spec)return;
    const target=root.querySelector("[data-player]");if(!target||!spec.videoId)return;
    root.dataset.playerMounted="loading";
    target.innerHTML='<div style="display:grid;place-items:center;min-height:220px;color:#d8c9b5;font-family:system-ui,sans-serif;font-size:.8rem">Caricamento ascolto…</div>';
    await loadYouTubeAPI();
    const player=new YT.Player(target,{
      videoId:spec.videoId,
      playerVars:{playsinline:1,rel:0,origin:location.origin,start:spec.startSeconds||0},
      events:{
        onReady(){root.dataset.playerMounted="ready";if(spec.startSeconds)player.seekTo(spec.startSeconds,true);tick();},
        onError(){root.dataset.playerMounted="error";const s=root.querySelector("[data-analysis-status]");if(s)s.textContent="Il video selezionato non è disponibile nell'embed: usa l'ascolto esterno della card.";}
      }
    });

    let raf=0,last=-1;
    function tick(){
      const loop=()=>{
        if(player&&typeof player.getCurrentTime==="function"){
          const t=player.getCurrentTime(),whole=Math.floor(t);
          if(whole!==last){
            last=whole;
            const timeEl=root.querySelector("[data-current-time]");if(timeEl)timeEl.textContent=formatTime(t);
            const events=activeEvents(spec.events,t);
            root.querySelectorAll("[data-analysis-layer]").forEach(el=>{
              const layer=el.dataset.analysisLayer;
              const current=events.filter(e=>(e.layer||e.tipo)===layer);
              const txt=current.map(e=>e.label||e.detail).filter(Boolean).join(" · ");
              const out=el.querySelector("span")||el;out.textContent=txt;
              el.classList.toggle("active",current.length>0);
            });
            updateVisualization(root,spec,t);
          }
        }
        raf=requestAnimationFrame(loop);
      };
      raf=requestAnimationFrame(loop);
    }
    root.addEventListener("click",e=>{
      const jump=e.target.closest("[data-seek]");
      if(jump&&player&&player.seekTo)player.seekTo(Number(jump.dataset.seek)||0,true);
    });
  }

  document.addEventListener("DOMContentLoaded",()=>{
    const roots=[...document.querySelectorAll("[data-analysis-id]")];
    roots.forEach(root=>{const spec=STORE()[root.dataset.analysisId];if(spec)decorate(root,spec);});
    if("IntersectionObserver"in window){
      const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){activate(entry.target);observer.unobserve(entry.target);}}),{rootMargin:"700px 0px",threshold:0});
      roots.forEach(root=>observer.observe(root));
    }else roots.forEach(activate);
  });
})();