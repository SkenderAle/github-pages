# Musurgia Atlantis — esperimento autonomo

Interfaccia pubblicata nella cartella `musurgia-atlantis/` senza alcuna modifica ai menu, alla home page o alle altre pagine.

- `index.html`: visualizzazione basata su 3D Force Graph (WebGL).
- `grafo.json`: proiezione pubblica del grafo di lavoro Musurgia Mundi v8, con 608 nodi, 1.520 archi e metadati minimi di provenienza.
- Le **proposte editoriali** e i **raccordi sospesi** sono disattivati all'apertura.
- Una relazione presente nell'audit non equivale automaticamente a una relazione storica verificata.

**Nota:** URL diretta, non indicizzata dai menu. `noindex` nel documento è una richiesta ai motori di ricerca, non un controllo di accesso. Gli script 3D sono caricati da una CDN esterna.

## Grafica resiliente

La pagina include un anteprima SVG locale (`fallback.svg`) e un motore di compatibilità tridimensionale su canvas locale (`compat-graph.js`). Il motore originale `3d-force-graph` viene caricato in modo asincrono dal CDN, senza bloccare la pagina. Se non è raggiungibile, la mappa locale continua a essere navigabile.
