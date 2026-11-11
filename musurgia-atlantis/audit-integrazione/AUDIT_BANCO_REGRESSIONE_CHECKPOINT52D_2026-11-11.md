# Checkpoint 52D — Banco di regressione federata: infrastruttura eseguibile
Data: 11 novembre 2026

## Scopo
Riprendere il 52D dopo il 52C e dopo un tentativo API esterno non registrato su `main`. Non reinterpretare l'assenza di commit come prova che l'agente non abbia fatto lavori locali. Nessun nuovo import Flaminio in questo checkpoint.

## Modifiche verificabili su main
- `PREVIEW_RADICATA_CHECKPOINT06.html`: funzione pubblica **`window.AtlantisCheckpoint52D.status()`** e **`run()`**, commit iniziale `ba8a445599dfc23814f658e681d3125ba0593d3a`; aggiunta dei controlli archi presenti con entrambi i capi visibili ma non disegnati e filtri di profondità zero, commit `ae65d314c36b62f0700a498caf7eb25c28e9beac`.
- `REGRESSIONE_FEDERATA_CHECKPOINT52D.html` (nuova pagina di collaudo), commit `a70427e160deda089d2852098a1463b24c173a23`. Carica la preview autentica in iframe same-origin e lancia la funzione di regressione dopo l'inizializzazione; mostra report ed esporta JSON sul computer dell'operatore.
- Link del banco di prova: https://musurgiamundi.com/musurgia-atlantis/audit-integrazione/REGRESSIONE_FEDERATA_CHECKPOINT52D.html

## Aspetti controllati dal codice (non ancora risultati sperimentali)
1. Inizializzazione preview con i **24 JSON** previsti, già censiti al 52C; acquisizione del dataset complessivo dopo tutti i `prepare*`.
2. Controllo **globale** di collisioni degli ID nodo/arco e di archi orfani.
3. Ricostruzione radicata su Concerto/sottocategorie, Vivaldi/raccolta/RV, Bach, Mozart, Sonata, Quartetto, Singspiel, Cantata e Mottetto; ricostruzione di quattro radici facoltative per nome (Don Giovanni, Flauto magico, BWV174, BWV200).
4. Controlli sul nodo storico `E0715`, inclusione dei quattro RV, isolamento Vivaldi/Bach, tassonomia dei concerti.
5. Rilevazione, **a titolo diagnostico**, degli archi presenti nel dataset tra nodi entrambi visibili ma non disegnati. Non considerarli automaticamente bug: alcune omissioni dipendono da filtri e permessi di attraversamento.
6. Quattro test **profondità categoria = 0** per persona/opera; falliscono se il risultato contiene nodi proibiti oltre alla radice.
7. Segnalazione dell'avvenuta costruzione del renderer WebGL, ma **non certificazione visiva** del risultato, né di compatibilità smartphone.

## Stati e risultati disponibili
- File e codice di staging pubblicati tramite GitHub; sintassi di tutti gli script inline della preview verificata con parser JavaScript durante la modifica.
- **52D NON certificato PASS**: il banco di prova deve ancora essere eseguito nel browser e il suo JSON prodotto/archiviato; il file stesso non è prova del successo dei test.
- Non è stato eseguito un collaudo manuale WebGL né su smartphone; l'esistenza di `engine` da sola non è sufficiente.
- Le radici facoltative scoperte per nome sono segnate come risolte/non risolte; il collaudo deve chiarire eventuali ambiguità.
- **Nessuna modifica ai file pubblici** `musurgia-atlantis/grafo.json`, `musurgia-atlantis/index.html`.

## Protocollo di esecuzione e chiusura
Aprire l'URL di regressione in un browser con WebGL disponibile, attendere che la preview sia pronta, cliccare **Esegui regressione 52D**, esportare il JSON, archiviare il rapporto di esecuzione nello staging e verificare le voci `global_violations`, `root_tests`, `category_depth_zero_tests`, `undrawn_edges_between_visible_nodes`. Se l'esito è FAIL, correggere nello staging con ripetizione del test e registrare i commit. `PASS_STATIC_DATA` significa soltanto che le asserzioni eseguite sul grafo sono passate; **non** autorizza promozione alla produzione né dichiara completato il collaudo visivo. Poi registrare il risultato in questo audit e nei due thread di continuità.

## Sorgenti
- `THREAD_API_CHECKPOINT52D_E_SUCCESSIVI_2026-11-11.md`
- `THREAD_CONTINUITA_2026-11-08.md`
- `AUDIT_INVENTARIO_FEDERATO_CHECKPOINT52C_2026-11-11.md`
