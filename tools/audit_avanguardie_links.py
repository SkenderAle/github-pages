#!/usr/bin/env python3
"""Conservative one-time source-link check. Never alters website links."""
from concurrent.futures import ThreadPoolExecutor, as_completed
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse, parse_qs, unquote
import requests

ROOT=Path("verso-le-avanguardie")
PAGES=[ROOT/"index.html",ROOT/"quadri-in-movimento.html"]
GRAPH=Path("atlante3d/database/grafo.json")
REPORT=ROOT/"AUDIT_LINK_ESTERNI_2026-11-04.md"

class PageReader(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.refs=[]
        self.ids=set()
    def handle_starttag(self,tag,attrs):
        data=dict(attrs)
        if data.get("id"):self.ids.add(data["id"])
        attr="href" if tag in ("a","link") else "src" if tag in ("img","iframe","script") else None
        if attr and data.get(attr):self.refs.append((tag,data[attr]))

def classify(url):
    if "youtube.com/watch" in url or "imslp.org/wiki/" in url:
        return ("covered_elsewhere",None,"Video or IMSLP: documented in a separate report")
    try:
        r=requests.get(url,stream=True,allow_redirects=True,timeout=(5,11),
          headers={"User-Agent":"Mozilla/5.0 (compatible; MusurgiaMundiLinkAudit/1.0)","Accept":"text/html,application/pdf;q=0.8,*/*;q=0.5"})
        code=r.status_code
        destination=r.url
        r.close()
        group="candidate_404" if code in (404,410) else "restricted" if code in (401,403,406,429,451) else "temporary_server" if code>=500 else "other_http_error" if code>=400 else "server_responds" if code>=200 else "unusual"
        return (group,code,destination)
    except requests.RequestException as e:
        return ("connection_problem",None,str(e).replace("|","/").replace("\n"," ")[:140])

def main():
    urls=set()
    local_errors=[]
    atlas=[]
    for page in PAGES:
        reader=PageReader()
        reader.feed(page.read_text(encoding="utf-8"))
        for tag,ref in reader.refs:
            if ref.startswith(("#","mailto:","data:","tel:","javascript:")):
                if ref.startswith("#") and ref[1:] not in reader.ids:
                    local_errors.append((str(page),ref,"Anchor not in page"))
                continue
            parsed=urlparse(ref)
            if parsed.scheme in ("http","https"):
                urls.add(ref)
                continue
            if not parsed.path:continue
            path=unquote(parsed.path)
            dest=(Path(path.lstrip("/")) if path.startswith("/") else page.parent / path).resolve()
            try:rel=dest.relative_to(Path.cwd().resolve())
            except ValueError:
                local_errors.append((str(page),ref,"Path outside repository"))
                continue
            if not (rel.is_file() or (rel/"index.html").is_file()):
                local_errors.append((str(page),ref,"File/folder not found"))
            if "atlante3d" in ref:
                for node in parse_qs(parsed.query).get("n",[]):
                    atlas.append((node,ref))
    checked={}
    with ThreadPoolExecutor(max_workers=6) as pool:
        futures={pool.submit(classify,url):url for url in urls}
        for idx,future in enumerate(as_completed(futures),1):
            checked[futures[future]]=future.result()
            if idx%25==0:print("CHECKED",idx,"/",len(urls),flush=True)
    database=GRAPH.read_text(encoding="utf-8") if GRAPH.is_file() else ""
    groups=Counter(v[0] for v in checked.values())
    lines=["# Audit tecnico dei collegamenti esterni — 4 novembre 2026","",
       "Una risposta HTTP 200 non prova che la pagina contenga davvero il documento descritto; una risposta 403, 429, 5xx o un timeout non prova un collegamento rotto.",
       "Il lettore dei Quadri è stato collaudato dall'utente su Android. Questo audit non sostituisce la sua verifica.",
       "",f"Destinazioni HTTP distinte: **{len(urls)}**.","",
       "## Risultati HTTP","",
       "| Categoria | Occorrenze |","|---|---:|"]
    lines += [f"| {k} | {v} |" for k,v in sorted(groups.items())]
    lines += ["","## 404 o 410 da verificare manualmente","","| Codice | URL | Redirect / risposta |","|---:|---|---|"]
    candidates=[(u,*checked[u]) for u in sorted(urls) if checked[u][0] in ("candidate_404","other_http_error")]
    lines += [f"| {code or '-'} | {url.replace('|','%7C')} | {str(target).replace('|','%7C')[:180]} |" for url,cat,code,target in candidates]
    if not candidates:lines.append("| - | Nessun 404/410 osservato | - |")
    lines+=["","## Controllo dei file e ancoraggi locali","","| File | Collegamento | Nota |","|---|---|---|"]
    lines += [f"| {p} | {u} | {msg} |" for p,u,msg in local_errors]
    if not local_errors:lines.append("| - | - | Nessuna assenza rilevata |")
    lines+=["","## Riferimenti ai nodi dell'Atlante 3D","",
       "Controllo preliminare della presenza come stringa esatta nel database. L'esistenza della stringa non garantisce l'apertura corretta del nodo.",
       "","| Nodo | Presente come stringa esatta |","|---|---|"]
    for n,u in atlas:
        marker='"'+n+'"' 
        lines.append(f"| {n} | {'SI' if marker in database else 'DA VERIFICARE'} |")
    lines+=["","## Risultato per ogni URL","",
       "| Esito | HTTP | Indirizzo | Destinazione o errore |","|---|---:|---|---|"]
    for url in sorted(urls):
        cat,code,extra=checked[url]
        lines.append(f"| {cat} | {code or '-'} | {url.replace('|','%7C')} | {str(extra).replace('|','%7C')[:180]} |")
    lines += ["","## Limiti", "",
       "- Le richieste sono state effettuate da GitHub Actions, non dallo smartphone dell'utente.",
       "- 403/429 e timeout possono essere protezioni contro le richieste automatizzate.",
       "- Il programma non modifica alcuna URL, non riproduce audio o video e non scarica le opere.",
       "- Per i 7 video YouTube e le 16 pagine IMSLP fa riferimento all'audit documentario già pubblicato.",
       "- Verificare manualmente ogni apparente 404 prima di rimuovere o sostituire la fonte."
    ]
    REPORT.write_text("\n".join(lines)+"\n",encoding="utf-8")
    print("REPORT:",REPORT,"BYTES:",REPORT.stat().st_size,"GROUPS:",dict(groups),flush=True)

if __name__=="__main__":
    main()
