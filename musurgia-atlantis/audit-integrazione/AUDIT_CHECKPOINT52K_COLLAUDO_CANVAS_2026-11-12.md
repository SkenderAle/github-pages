# Musurgia Atlantis — Checkpoint 52K
## Banco browser per Canvas 2D, filtri e tocchi; prova logica isolata

**Data:** 12 novembre 2026 · **Repository:** `SkenderAle/github-pages` · **Branch:** `main` · **Perimetro:** esclusivamente `musurgia-atlantis/audit-integrazione/`.

### Obiettivo e limite reale
La suite federata 52I/52J ha superato **24 JSON**, **1.390 nodi**, **3.391 archi** e **27/27 radici**, ma quei test giravano in V8 con il motore grafico sostituito: non erano un collaudo della visualizzazione. In questo checkpoint è stato preparato un **vero banco di accettazione da eseguire nel browser dell'operatore**, senza attribuirgli un esito prima dell'esecuzione. Il browser Chromium locale disponibile non ha accesso di rete al sito pubblico; anche il recupero della nuova pagina tramite interfaccia web non ha restituito una risorsa accessibile. Perciò **browser pubblico, pixel grafici reali e interazione Android rimangono NON ESEGUITI / NON CERTIFICATI**.

### 1. Strumentazione read-only nello staging
- `compat-graph-checkpoint08.js`: aggiunto `auditView()`, metodo non modificante che restituisce dimensioni Canvas CSS/pixel, zoom, selezione, quantità di nodi/archi e coordinate proiettate, con flag focus, visibilità e etichetta permanente. Non cambia l'algoritmo dei layout, dei filtri né degli eventi pointer.
- `PREVIEW_RADICATA_CHECKPOINT06.html`: esposto `window.AtlantisCheckpoint52K.status()` con radice corrente, vista Canvas, conteggi dei nodi e archi visibili, opere e label permanenti; il grafo pubblico non viene scritto. Aggiornata la query anticache del renderer a `?v=52k-canvas-audit-20261112` per non misurare JavaScript vecchio.

### 2. Collaudo nel browser, pronto ma non ancora eseguito qui
Pubblicato `COLLAUDO_BROWSER_CHECKPOINT52K_2026-11-12.html`, raggiungibile dopo la pubblicazione GitHub Pages a:

`https://musurgiamundi.com/musurgia-atlantis/audit-integrazione/COLLAUDO_BROWSER_CHECKPOINT52K_2026-11-12.html`

La pagina incorpora la preview originale nello stesso origin ed esegue, su clic di **Esegui collaudo 52K**, otto controlli: (1) regressione dati 52D/52J e 27 radici; (2) Canvas 2D e dimensioni; (3) pixel colorato al centro del nodo-radice; (4) ricerca e passaggio a Vivaldi; (5) selezione della Primavera al primo evento pointer touch e cambio di radice al secondo evento; (6) zoom +/−; (7) profondità opere zero e ripristino; (8) etichette permanenti di Opere. Esporta JSON con risultati e contesto dispositivo, oltre all'immagine PNG del Canvas su richiesta. Il controllo pixel è significativo solo se la pagina è stata realmente eseguita: la semplice presenza del codice non costituisce evidenza di successo.

**Distinguere tassativamente:** eventi sintetici `PointerEvent` in browser ≠ prova touch fisico Android. Un PASS nel browser desktop ≠ leggibilità delle etichette, sovrapposizioni, reattività gesture reali o comportamento su smartphone. Queste verifiche restano manuali, con report da archiviare.

### 3. Smoke test eseguito sul renderer reale in V8, Canvas simulato
Eseguito il JavaScript reale di `compat-graph-checkpoint08.js` in isolate V8 con finto `CanvasRenderingContext2D`, RAF manuale e due nodi/una relazione. **Tutte le sette asserzioni logiche** hanno dato vero: contesto 2D richiesto, proiezione dell'opera in area Canvas, flag etichetta, selezione al primo tocco sintetico, callback di centratura al secondo tocco e comportamento dello zoom. Registrato in `REGRESSIONE_RENDERER_LOGICO_CHECKPOINT52K_2026-11-12.json`.

**Qualifica:** `PASS_SIMULATED_RENDERER_LOGIC`, non `PASS_BROWSER`; nessun pixel realmente renderizzato e nessun touch hardware verificato in questa prova.

### 4. Lacuna di interazione individuata, da non occultare
Nel renderer di staging `onLinkClick(fn)` **registra** il callback ma la logica pointer attuale esegue `hitTest` sui **nodi**, non sulle linee. Il callback `onLink` non viene invocato dal percorso pointer. Questo significa che la **selezione diretta di un arco disegnato non è implementata**, pur essendo accessibili le relazioni nel pannello del nodo selezionato. Va trattata come questione aperta in un checkpoint successivo, mantenendo accesso a descrizioni, spiegazioni direzionali e fonti degli archi. Non scambiare «archi disegnati» per «archi cliccabili».

### Commit GitHub di staging
- Renderer read-only: `eca86239af9d84541b96f3c45a3adb4782d078a2`, integrazione flag `76609ec258624e268a6bc2cf95fad3df943b81f3`.
- Hook preview: `83099d91f6de39afa20d8dcdb8e73b19d3632427`, conteggi `754437eedb717fafa5e8ecff5ac451b9e1b51e89`, anticache `a81df41fb4d8f032e2c5554eacc0e44acdd9b594`.
- Nuova pagina di collaudo: `8b9142f1db4d57867d0765aadfe5f750a714d795`.
- Test logico con registro JSON: `30428271bdeb3753b29ab44c80b78eca451d9b61`.

### Conclusione e prossimo checkpoint
**52K = INFRASTRUTTURA_BROWSER_PRONTA + PROVA_LOGICA_PASS; CERTIFICAZIONE_VISIVA_APERTA.** Non promuovere `grafo.json` o `index.html` alla nuova versione e non interpretare l'assenza di log browser come un PASS. Prossimo Checkpoint **52L**: (a) collegare l'hit testing degli archi alla lettura delle rispettive note/fonti mantenendo intatti i nodi; (b) eseguire in un browser con rete la suite 52K e depositare il JSON reale; (c) verificare in Android etichette, filtri, scelta delle relazioni e gestures fisiche. Se il browser dà FAIL, registrare e correggere la causa nello staging prima di ulteriori promozioni.
