# Musurgia Atlantis — Checkpoint 52J
## Diagnostica degli archi visibili, duplicati sospesi e tecnologia del renderer

**Data:** 12 novembre 2026 · **Repository:** SkenderAle/github-pages · **Branch:** main · **Ambiente:** sola cartella `musurgia-atlantis/audit-integrazione/`.

### Risultati verificati
Recuperati gli stessi **24 JSON reali** della federazione 52I e rieseguite in **V8 isolato** le funzioni di preparazione della preview, `ROOTED_RELEVANCE_CHECKPOINT06.browser.js` e `AtlantisCheckpoint52D.run()`. Solo il DOM e l'engine di disegno sono stati sostituiti con stub: **nessun browser reale, nessun disegno Canvas verificato, nessuna prova Android**.

- Grafo federato: **1.390 nodi e 3.391 archi**.
- **27/27 radici PASS**, **4/4 test profondità categoria zero PASS**, **6/6 invarianti catalografiche 52H PASS**.
- **Zero** ID nodo duplicati, ID arco duplicati, archi orfani e relazioni `ha_composto` persona→persona.
- Diagnostica sugli archi con entrambi gli estremi già visibili: **0 omissioni inspiegate**. Due occorrenze del **medesimo arco** escluso: `L02-A07`, nei sottografi radicati in Mozart e Don Giovanni.

### Caso Da Ponte → Don Giovanni
Nel `grafo.json` originale:

- `E0873` = `pers:da-ponte → opera:Don-giovanni`, relazione `scrive_il_libretto_di`, `quality_gate:riscontro_storico_indipendente`, `historical_verified_independently:true`.
- `L02-A07` = stesso autore e stessa opera; `quality_gate:sospeso`, `historical_verified_independently:false`, `duplicate_of:E0873`, `verification_status:duplicato_di_relazione_confermata`.

**Decisione:** conservare entrambi i record nella fonte, ma visualizzare l'arco canonico `E0873`; non promuovere il duplicato. Il runner ora tratta la seconda scheda come **documentato duplicato intenzionalmente escluso**, e fallisce se manca o non viene disegnato il riferimento canonico, se gli estremi divergono o se si omette un altro arco ammissibile. Le due occorrenze non rappresentano due relazioni storiche diverse.

### Correttivi nel codice
1. `PREVIEW_RADICATA_CHECKPOINT06.html`: funzione condivisa `excludedEvidenceReason52J` per il filtro documentario e il report diagnostico; `duplicateEvidenceWitness52J` con controllo di esistenza, corrispondenza estremi, prova indipendente e arco canonico disegnato. Il campo `undrawn_edges_between_visible_nodes` separa `withheld_uncertified_count`, `documented_duplicate_count` e `unaccounted_count`. Le omissioni ammissibili ora provocano FAIL.
2. Il renderer effettivamente usato da `compat-graph-checkpoint08.js` crea un `canvas.getContext('2d')` con disposizione tridimensionale calcolata. **Non è WebGL**: corretti i metadati `renderer_technology:canvas_2d_3d_projection`, `canvas2d_renderer_constructed`, `webgl_renderer_constructed:false`. Un engine costruito non dimostra che il quadro sia visibile o usabile.
3. `REGRESSIONE_FEDERATA_CHECKPOINT52D.html`: aggiornata la descrizione della tecnologia e la sintesi automatica delle omissioni/duplicati; link di preview con versione 52J anticache e istruzioni per il collaudo visivo/manuale. **I tre script inline (preview e runner) sono stati controllati sintatticamente** con parser JavaScript.

### Evidenze e commit
- Preview 52J: commit `5d745330889a87e201ad96ae31e6dfa233b2e35e`.
- Registro macchina `REGRESSIONE_ARCHI_VISIBILI_CHECKPOINT52J_2026-11-12.json`: commit `451c8783c63a5ec98a8870dc1864e4190b1a75d5`.
- Banco browser, descrizioni e sintesi 52J: commit `f035602fce0ee8d0de2c51036d74491683082f7d`.
- `grafo.json` e `index.html` della produzione: **non modificati**.

### Stato e gate successivo
**PASS_DATA_ONLY.** La suite in V8 verifica preparazione dei dati, radici e integrità degli archi ma **non il disegno effettivo**. Il collaudo Canvas/Android è ancora `NOT_RUN`, non `PASS`. Serve aprire `https://musurgiamundi.com/musurgia-atlantis/audit-integrazione/REGRESSIONE_FEDERATA_CHECKPOINT52D.html` in un browser reale, eseguire la regressione, esportare il rapporto e controllare le radici Mozart/Don Giovanni, Vivaldi/Quattro stagioni, i filtri di categoria, la leggibilità delle etichette e l'interazione touch. Conservare la densità dei collegamenti documentati e migliorarne la leggibilità mediante filtri, non cancellazioni.
