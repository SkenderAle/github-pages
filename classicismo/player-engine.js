/* Motore generico per gli ascolti sincronizzati.
   Funziona soltanto sugli elementi che dichiarano data-analysis-id.
   I dati musicali restano in listenings.js.
*/
(()=>{
  const STORE = () => window.CLASSICISMO_LISTENINGS || {};
  let apiPromise;

  function loadYouTubeAPI(){
    if(window.YT && window.YT.Player) return Promise.resolve(window.YT);
    if(apiPromise) return apiPromise;
    apiPromise = new Promise(resolve=>{
      const previous = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = ()=>{
        if(typeof previous === "function") previous();
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
    const m=Math.floor(sec/60), s=Math.floor(sec%60);
    return m+":"+String(s).padStart(2,"0");
  }

  function activeEvents(events,time){
    return (events||[]).filter(e=>time>=e.from && time<(e.to ?? e.from+.2));
  }

  async function mount(root){
    const id=root.dataset.analysisId;
    const spec=STORE()[id];
    if(!spec) return;
    const target=root.querySelector("[data-player]");
    const status=root.querySelector("[data-analysis-status]");
    if(!target || !spec.videoId){
      if(status) status.textContent="Registrazione definitiva ancora da fissare.";
      return;
    }

    await loadYouTubeAPI();
    const player = new YT.Player(target,{
      videoId:spec.videoId,
      playerVars:{playsinline:1,rel:0,origin:location.origin},
      events:{
        onReady(){
          if(status) status.textContent=spec.purpose||"Ascolto guidato";
          tick();
        }
      }
    });

    let raf=0,lastSecond=-1;
    function tick(){
      cancelAnimationFrame(raf);
      const loop=()=>{
        if(player && typeof player.getCurrentTime==="function"){
          const t=player.getCurrentTime();
          const whole=Math.floor(t);
          if(whole!==lastSecond){
            lastSecond=whole;
            root.dataset.currentTime=t.toFixed(2);
            const timeEl=root.querySelector("[data-current-time]");
            if(timeEl) timeEl.textContent=formatTime(t);
            const events=activeEvents(spec.events,t);
            root.querySelectorAll("[data-analysis-layer]").forEach(el=>{
              const layer=el.dataset.analysisLayer;
              const current=events.filter(e=>(e.layer||e.tipo)===layer);
              el.textContent=current.map(e=>e.label||e.detail).filter(Boolean).join(" · ");
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
      if(jump && player && player.seekTo){
        player.seekTo(Number(jump.dataset.seek)||0,true);
      }
    });
  }

  document.addEventListener("DOMContentLoaded",()=>{
    document.querySelectorAll("[data-analysis-id]").forEach(mount);
  });
})();