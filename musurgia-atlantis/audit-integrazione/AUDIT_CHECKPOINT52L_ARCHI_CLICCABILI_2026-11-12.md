# Musurgia Atlantis — Checkpoint 52L
## Archi Canvas selezionabili, scheda direzionale e banco browser aggiornato

**Data:** 12 novembre 2026 · **Repository:** `SkenderAle/github-pages` · **Branch:** `main` · **Perimetro:** esclusivamente `musurgia-atlantis/audit-integrazione/`.

### Origine del problema

Al 52K il renderer Canvas 2D con proiezione tridimensionale già disegnava gli archi, ma `onLinkClick(fn)` era solo memorizzato. L'hit-test interrogava i nodi, non i segmenti delle linee. Le spiegazioni delle relazioni erano consultabili dalla scheda del nodo, non selezionando direttamente la relazione nel disegno.

### Implementazione esclusivamente nello staging

1. `compat-graph-checkpoint08.js`: `hitTestLink(p,max)` confronta il puntatore con i segmenti proiettati degli **archi effettivamente presenti nella vista**; sceglie l'arco più vicino con tie-break deterministico di profondità. Preserva la priorità del punto centrale del nodo anche su touch, senza impedire il tocco sul tratto centrale di una linea corta. Il trascinamento continua a non generare selezioni; gli archi selezionati sono evidenziati senza alterare i dati. Esportati `selectLink(id)`, `auditView().selected_edge_id` e `auditLinkProjection(id)` per prove di comportamento, non per creare legami. Commit `e1defd17ff51d60d9422055e647bdae5441b3058`.
2. `PREVIEW_RADICATA_CHECKPOINT06.html`: il callback `onLinkClick` apre una scheda dedicata con **sorgente → destinazione**, tipo/ID di rapporto, frase direzionale proveniente da `renderer.relationDetail(edge,edge.source)`, descrizione, nota, marcatori di provenienza e URL fonte HTTPS esistenti. Filtra gli URL non HTTPS; non costruisce link o inferenze editoriali. Su schermo stretto la scheda compare in un pannello raggiungibile senza cambiare la radice. Chiudere la scheda, selezionare un nodo, fare tap sullo sfondo o eliminare l'arco dalla vista tramite filtro rimuove l'evidenziazione. Commit `0285f9dd0f52b9d4843107dcc3cb64803f4c60a3`; hook geometrico read-only `66bed87b8a20b7a39f401f1e045c7fdb2b7e1f04`.
3. `COLLAUDO_BROWSER_CHECKPOINT52L_2026-11-12.html`: copia evolutiva del banco 52K, con **9 controlli automatici** previsti; include prova sintetica del tocco su una linea di Vivaldi e presenza della scheda. Esporta un JSON locale, ma **non** è un risultato browser finché non eseguito. Commit `8f694e7029029a471a2ec36d3dbf317a6de81c80`.

### Test eseguiti e riproducibilità

Registrati in `REGRESSIONE_INTERAZIONE_ARCHI_CHECKPOINT52L_2026-11-12.json`. In isolate JavaScript con Canvas/DOM simulati, **15/15 PASS**: compilazione dei due script, selezione arco con mouse e touch sintetico, precedenza del nodo, drag senza click spurio, sfondo, filtro che rimuove la selezione di un arco non più visibile, assenza della sua proiezione, apertura/chiusura scheda, evidenziazione, frase direzionale, inclusione di due link HTTPS validi ed esclusione di un URL HTTP nel fixture. La prova è di **logica**, non di pixel, prestazioni o Android hardware.

**Qualifica vincolante:** `PASS_SIMULATED_INTERACTION_ONLY`. **Nessuna certificazione `PASS_BROWSER`, `PASS_ANDROID`, `PASS_VISUAL` o `PASS_WEBGL`.** Rimane Canvas 2D; non si è eseguito qui il banco remoto 52L in un vero browser né il retest con tutti i 24 JSON dopo questa modifica di sola interfaccia.

### Vincoli filologici preservati

- Nessun nuovo arco o nodo catalografico, nessuna eliminazione di prove in caso di sovraffollamento. Un arco cliccabile è un **arco già ammesso e visibile**; mantenere la distinzione fra attestazione catalografica, validazione indipendente, confronti, percorsi esplorativi e HOLD.
- Nessuna espansione attraverso generi, periodi o capitoli per il solo fatto di aver selezionato una linea. La radice non cambia se si tocca un arco.
- `musurgia-atlantis/grafo.json` e `musurgia-atlantis/index.html` di produzione **non modificati**.

### Prossima ripresa

**52M, certificazione browser e Android:** aprire `https://musurgiamundi.com/musurgia-atlantis/audit-integrazione/COLLAUDO_BROWSER_CHECKPOINT52L_2026-11-12.html` in browser con accesso alla rete, fare clic su «Esegui collaudo 52L», esportare il JSON, verificare le eventuali asserzioni in FAIL, testare manualmente su Android tocchi sulle linee vicine, doppio tocco sui nodi, pinch, etichette forzate e filtri. Archiviare il rapporto reale prima di dichiarare conformità visiva. **Non promuovere lo staging in produzione in assenza delle prove.**
