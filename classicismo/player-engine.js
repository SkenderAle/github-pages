/* Motore generico per ascolti sincronizzati — La misura e la rivoluzione. */
(()=>{
  const STORE=()=>window.CLASSICISMO_LISTENINGS||{};
  let apiPromise;

  function loadYouTubeAPI(){
    if(window.YT&&window.YT.Player) return Promise.resolve(window.YT);
    if(apiPromise) return apiPromise;
    apiPromise=new Promise(resolve=>{
      const prev=window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady=()=>{ if(typeof prev==="function") prev(); resolve(window.YT); };
      if(!document.querySelector('script[src*="youtube.com/iframe_api"]')){
        const s=document.createElement("script");
        s.src="https://www.youtube.com/iframe_api";
        document.head.appendChild(s);
      }
    });
    return apiPromise;
  }

  function formatTime(sec){
    sec=Math.max(0,Number(sec)||0);
    const m=Math.floor(sec/60),s=Math.floor(sec%60);
    return m+":"+String(s).padStart(2,"0");
  }

  function activeEvents(events,time){
    return (events||[]).filter(e=>time>=e.from&&time<(e.to??e.from+.2));
  }

  function renderScoreMap(root,spec){
    const box=root.querySelector("[data-score-map]");
    if(!box||!spec.scoreMap) return;
    box.innerHTML=spec.scoreMap.map(x=>`
      <div class="analysis-score-row">
        <b>${x.bars}</b>
        <span><strong>${x.form}</strong> · ${x.key}</span>
        <small>${x.note}</small>
      </div>`).join("");
  }

  function installModes(root,spec){
    const head=root.querySelector(".analysis-lab-head");
    if(head&&!head.querySelector(".analysis-modes")){
      const modes=document.createElement("div");
      modes.className="analysis-modes";
      modes.setAttribute("role","group");
      modes.setAttribute("aria-label","Livello di lettura");
      modes.innerHTML='<button type="button" data-mode="listen" class="active">Ascolta</button><button type="button" data-mode="see">Vedi</button><button type="button" data-mode="analyse">Analizza</button>';
      head.appendChild(modes);
    }

    function setMode(mode){
      root.dataset.mode=mode;
      root.querySelectorAll(".analysis-modes button").forEach(b=>b.classList.toggle("active",b.dataset.mode===mode));
      const live=root.querySelector(".analysis-live");
      const score=root.querySelector(".analysis-score");
      const note=root.querySelector(".analysis-note");
      if(live) live.hidden=mode==="listen";
      if(score) score.hidden=mode!=="analyse";
      if(note) note.hidden=mode!=="analyse"||!spec.provisional;
    }

    root.addEventListener("click",e=>{
      const b=e.target.closest(".analysis-modes button");
      if(b) setMode(b.dataset.mode);
    });
    setMode("listen");
  }

  async function mount(root){
    const id=root.dataset.analysisId,spec=STORE()[id];
    if(!spec) return;
    renderScoreMap(root,spec);
    installModes(root,spec);

    const title=root.querySelector("[data-analysis-title]");
    const status=root.querySelector("[data-analysis-status]");
    if(title) title.textContent=spec.title;
    if(status) status.textContent=spec.purpose||"Ascolto guidato";

    const target=root.querySelector("[data-player]");
    if(!target||!spec.videoId) return;

    await loadYouTubeAPI();
    const player=new YT.Player(target,{
      videoId:spec.videoId,
      playerVars:{playsinline:1,rel:0,origin:location.origin,start:spec.startSeconds||0},
      events:{onReady(){
        if(spec.startSeconds) player.seekTo(spec.startSeconds,true);
        tick();
      }}
    });

    let raf=0,last=-1;
    function tick(){
      const loop=()=>{
        if(player&&typeof player.getCurrentTime==="function"){
          const t=player.getCurrentTime(),whole=Math.floor(t);
          if(whole!==last){
            last=whole;
            const timeEl=root.querySelector("[data-current-time]");
            if(timeEl) timeEl.textContent=formatTime(t);
            const events=activeEvents(spec.events,t);
            root.querySelectorAll("[data-analysis-layer]").forEach(el=>{
              const layer=el.dataset.analysisLayer;
              const current=events.filter(e=>(e.layer||e.tipo)===layer);
              el.textContent=current.map(e=>e.label||e.detail).filter(Boolean).join(" · ")||"";
              el.classList.toggle("active",current.length>0);
            });
          }
        }
        raf=requestAnimationFrame(loop);
      };
      raf=requestAnimationFrame(loop);
    }

    root.addEventListener("click",e=>{
      const jump=e.target.closest("[data-seek]");
      if(jump&&player&&player.seekTo) player.seekTo(Number(jump.dataset.seek)||0,true);
    });
  }

  document.addEventListener("DOMContentLoaded",()=>document.querySelectorAll("[data-analysis-id]").forEach(mount));
})();