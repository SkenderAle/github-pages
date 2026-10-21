/* Atlante — indice gerarchico condiviso, accessibile e senza scrolling animato. */
(()=>{
if(document.getElementById('atlante-global-index')||document.querySelector('.atlas-autonav'))return;
const all=[...document.querySelectorAll('main h2, main h3, main h4, article h2, article h3, article h4')];
const headings=[...new Set(all)].filter(el=>!el.closest('nav,aside,footer,[hidden],[aria-hidden="true"],.menu-panel,.index-cards,.index-grid,.quiz,.exercise,.attivita-facoltativa,.learning-check-card')&&el.textContent.trim().length>3&&el.getClientRects().length>0);
if(headings.length<3)return;
const style=document.createElement('style');
style.textContent=`
#atlante-global-index{position:fixed;top:78px;right:14px;z-index:9990;font-family:system-ui,-apple-system,"Segoe UI",sans-serif;font-size:14px;line-height:1.5}
#atlante-global-index *{box-sizing:border-box}
#atlante-global-index button{cursor:pointer;border:1px solid #c9b9c7;border-radius:7px;background:#f7f2ed;color:#261f2c;font:700 14px/1.3 system-ui;padding:11px 15px;box-shadow:0 3px 12px #0002}
#atlante-global-index button:hover,#atlante-global-index button:focus-visible{background:#e9deeb;outline:2px solid #684565;outline-offset:2px}
#atlante-global-index .agi-panel{position:absolute;right:0;top:calc(100% + 8px);width:min(480px,calc(100vw - 28px));max-height:calc(100dvh - 155px);overflow:auto;background:#faf7f1;border:1px solid #c9b9c7;border-radius:9px;box-shadow:0 14px 45px #1116;padding:16px;color:#25202a}
#atlante-global-index .agi-panel[hidden]{display:none}
#atlante-global-index .agi-heading{font-weight:800;font-size:16px;padding-bottom:9px;border-bottom:1px solid #d9c9d4;margin-bottom:9px}
#atlante-global-index details{margin:6px 0;border:1px solid #d9cbd5;border-radius:5px;overflow:hidden;background:#fff}
#atlante-global-index summary{display:list-item;cursor:pointer;list-style:disclosure-closed inside;background:#eee6ec;color:#342437;font:700 14px/1.5 system-ui;padding:9px}
#atlante-global-index details[open]>summary{list-style:disclosure-open inside;background:#e4d8e3}
#atlante-global-index summary:hover{background:#ded1df}
#atlante-global-index a{color:#35243e!important;text-decoration:none!important;display:block;padding:7px 10px;border-top:1px solid #e6dfe4;font:500 13px/1.45 system-ui}
#atlante-global-index a:hover,#atlante-global-index a:focus-visible{background:#eee6ef!important;color:#241528!important;text-decoration:underline!important}
#atlante-global-index .agi-sublinks{padding:2px 0 4px 13px;border-left:3px solid #bea9bd}
#atlante-global-index .agi-small{font-size:12px;color:#5a4658}
@media(max-width:600px){#atlante-global-index{top:68px;right:8px}#atlante-global-index button{padding:9px 10px}#atlante-global-index .agi-panel{max-height:calc(100dvh - 130px)}}
@media print{#atlante-global-index{display:none!important}}
`;
document.head.appendChild(style);
const root=document.createElement('div');root.id='atlante-global-index';
const btn=document.createElement('button');btn.type='button';btn.textContent='☰ Indice completo';btn.setAttribute('aria-expanded','false');btn.setAttribute('aria-controls','agi-panel');
const panel=document.createElement('div');panel.className='agi-panel';panel.id='agi-panel';panel.hidden=true;panel.setAttribute('role','navigation');panel.setAttribute('aria-label','Indice completo della pagina');
const title=document.createElement('div');title.className='agi-heading';title.textContent='Indice · Sezioni e paragrafi';panel.appendChild(title);
let used=new Set([...document.querySelectorAll('[id]')].map(e=>e.id));
const getId=(el,n)=>{if(el.id)return el.id;let inner=el.querySelector('[id]');if(inner&&inner.id)return inner.id;let id='atlante-voce-'+n;while(used.has(id))id+='-x';used.add(id);el.id=id;return id};
const link=(el,n,label)=>{const a=document.createElement('a');a.href='#'+getId(el,n);a.textContent=label||el.textContent.trim().replace(/\s+/g,' ');a.addEventListener('click',()=>{panel.hidden=true;btn.setAttribute('aria-expanded','false');document.documentElement.style.scrollBehavior='auto'});return a};
let current=null,subs=null,group=0;
headings.forEach((h,i)=>{
const level=Number(h.tagName[1]);const label=h.textContent.trim().replace(/\s+/g,' ').slice(0,145);
if(level===2||!current){group++;current=document.createElement('details');const sum=document.createElement('summary');sum.textContent=group+' · '+label;current.appendChild(sum);current.appendChild(link(h,i+1,'Vai alla sezione ↗'));subs=document.createElement('div');subs.className='agi-sublinks';current.appendChild(subs);panel.appendChild(current)}
else if(level===3){subs.appendChild(link(h,i+1,label))}
else if(level===4){const a=link(h,i+1,label);a.classList.add('agi-small');subs.appendChild(a)}
});
root.append(btn,panel);document.body.appendChild(root);
btn.addEventListener('click',()=>{panel.hidden=!panel.hidden;btn.setAttribute('aria-expanded',String(!panel.hidden))});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden){panel.hidden=true;btn.setAttribute('aria-expanded','false');btn.focus()}});
document.addEventListener('click',e=>{if(!root.contains(e.target)&&!panel.hidden){panel.hidden=true;btn.setAttribute('aria-expanded','false')}});
})();
