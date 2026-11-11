# Musurgia Atlantis — Checkpoint 52I: regressione federata sui 24 JSON

**Data:** 11 novembre 2026 · **Ambiente:** branch main, esclusivamente cartella audit-integrazione. **Nessuna modifica ai file pubblici** grafo.json e index.html.

## Esito riproducibile, senza dichiarare WebGL
Sono stati caricati contemporaneamente i 24 JSON effettivamente referenziati dalla preview, recuperando il grafo base originale tramite blob GitHub. Sono stati eseguiti il JavaScript effettivo della federazione nella preview, il motore di pertinenza ROOTED_RELEVANCE e la suite AtlantisCheckpoint52D.run() in V8 isolato; DOM e renderer grafico sono stati sostituiti con uno stub minimo, quindi **non si tratta di un browser, né di una prova WebGL o Android**. Report completo: `REGRESSIONE_FEDERATA_CHECKPOINT52I_V8_2026-11-11.json`.

- **Dataset federato:** 1.390 nodi, 3.391 archi, 24 JSON caricati.
- **Integrità globale:** 0 ID nodo duplicati, 0 ID arco duplicati, 0 archi orfani, 0 collegamenti persona-persona erroneamente marcati ha_composto.
- **Prima del correttivo:** 4 radici individuali (Primavera RV 269, Estate RV 315, Autunno RV 293, Inverno RV 297) fallivano con `Unknown root`. La causa non era un'opera assente ma il tentativo di interrogare il renderer del grafo base, che non contiene gli ID dello staging.
- **Correttivo nella preview:** per le sole quattro opere individuali Vivaldi si crea una radice iniziale di staging e la si arricchisce tramite attachSeasons52(), mantenendo gli archi autore, raccolta, Concerto per violino/solistico e il completamento degli archi attestati. Nessuna attraversabilità automatica attraverso altri compositori; nessuna nuova classificazione storica introdotta.
- **Correttivo alla suite:** BWV 174 e BWV 200 ora vengono cercati nel nome **o nell'ID** perché il catalogo può usare l'incipit come nome visualizzato. Entrambe le radici sono ora comprese nella regressione.
- **Dopo il correttivo:** **27/27 radici PASS**, **4/4 test di profondità categoria zero PASS**, **6/6 invarianti catalografiche 52H PASS**, integrità globale PASS, stato `PASS_DATA_ONLY`. Verifiche includono Vivaldi/Quattro stagioni, Concerto, Mozart/Don Giovanni/Flauto magico, Sonata, Quartetto, Singspiel, Cantata, Bach, BWV 174 e BWV 200.
- **Salvaguardie filologiche:** BWV189 resta HOLD e senza attribuzione automatica a Bach, BWV200 resta frammento, K285b non promossa, Bach B37–42 con continuo, riuso specifico BWV1048→BWV174 preservato.

## Limiti e prossima ripresa
Un test V8 senza DOM/WebGL non certifica qualità visiva, eventi mouse/touch, rendering o leggibilità della nebulosa. L'esito PASS_DATA_ONLY è condizionato al preciso codice e ai 24 snapshot letti; il collaudo 52D in browser reale, il report esportato dalla pagina e la prova su smartphone restano aperti. L'indice `undrawn_edges_between_visible_nodes` resta diagnostico: distinguere prima filtri intenzionali, sospensioni e omissioni illegittime.

**Commit preview:** `1e2aa3e9893e0b51431b87f4017f770181cc755f`. **Commit report:** `1a09d44d5fc141808673577966938118d884ac7a`.
