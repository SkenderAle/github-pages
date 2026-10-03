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
        const s=document.createElement("script"); s.src="https://www.youtube.com/iframe_api"; document.head.appendChild(s);
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

  async function mount(root){
    const id=root.dataset.analysisId,spec=STORE()[id];
    if(!spec) return;
    renderScoreMap(root,spec);

    const title=root.querySelector("[data-analysis-title]");
    const status=root.querySelector("[data-analysis-status]");
    const provisional=root.querySelector("[data-provisional]");
    if(title) title.textContent=spec.title;
    if(status) status.textContent=spec.purpose||"Ascolto guidato";
    if(provisional) provisional.hidden=!spec.provisional;

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