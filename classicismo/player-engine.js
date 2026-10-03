/* Motore generico per ascolti sincronizzati — La misura e la rivoluzione.
   I player YouTube vengono creati solo quando il laboratorio si avvicina al viewport:
   su mobile evitiamo di caricare contemporaneamente tutti gli iframe. */
(()=>{
  const STORE=()=>window.CLASSICISMO_LISTENINGS||{};
  let apiPromise;

  function loadYouTubeAPI(){
    if(window.YT&&window.YT.Player) return Promise.resolve(window.YT);
    if(apiPromise) return apiPromise;
    apiPromise=new Promise(resolve=>{
      const prev=window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady=()=>{
        if(typeof prev==="function") prev();
        resolve(window.YT);
      };
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

  function decorate(root,spec){
    renderScoreMap(root,spec);
    const title=root.querySelector("[data-analysis-title]");
    const status=root.querySelector("[data-analysis-status]");
    const provisional=root.querySelector("[data-provisional]");
    if(title) title.textContent=spec.title;
    if(status) status.textContent=spec.videoId ? (spec.purpose||"Ascolto guidato") : "Registrazione definitiva ancora da fissare.";
    if(provisional) provisional.hidden=!spec.provisional;
  }

  async function activate(root){
    if(root.dataset.playerMounted) return;
    const id=root.dataset.analysisId;
    const spec=STORE()[id];
    if(!spec) return;
    const target=root.querySelector("[data-player]");
    if(!target||!spec.videoId) return;

    root.dataset.playerMounted="loading";
    target.innerHTML='<div style="display:grid;place-items:center;min-height:220px;color:#d8c9b5;font-family:system-ui,sans-serif;font-size:.8rem">Caricamento ascolto…</div>';

    await loadYouTubeAPI();
    const player=new YT.Player(target,{
      videoId:spec.videoId,
      playerVars:{playsinline:1,rel:0,origin:location.origin,start:spec.startSeconds||0},
      events:{
        onReady(){
          root.dataset.playerMounted="ready";
          if(spec.startSeconds) player.seekTo(spec.startSeconds,true);
          tick();
        },
        onError(){
          root.dataset.playerMounted="error";
          const status=root.querySelector("[data-analysis-status]");
          if(status) status.textContent="Il video selezionato non è disponibile nell'embed: usa l'ascolto esterno della card.";
        }
      }
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
      const modeBtn=e.target.closest("[data-analysis-mode]");
      if(modeBtn){
        const mode=modeBtn.dataset.analysisMode;
        root.dataset.mode=mode;
        root.querySelectorAll("[data-analysis-mode]").forEach(b=>b.classList.toggle("active",b===modeBtn));
      }
      const jump=e.target.closest("[data-seek]");
      if(jump&&player&&player.seekTo) player.seekTo(Number(jump.dataset.seek)||0,true);
    });
  }

  document.addEventListener("DOMContentLoaded",()=>{
    const roots=[...document.querySelectorAll("[data-analysis-id]")];
    roots.forEach(root=>{
      const spec=STORE()[root.dataset.analysisId];
      if(spec) decorate(root,spec);
    });

    if("IntersectionObserver" in window){
      const observer=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
          if(entry.isIntersecting){
            activate(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },{rootMargin:"700px 0px",threshold:0});
      roots.forEach(root=>observer.observe(root));
    }else{
      roots.forEach(activate);
    }
  });
})();