# Checkpoint 52C — Inventario federato dei manifesti (11 novembre 2026)

## Ambito e metodo
Inventario della `PREVIEW_RADICATA_CHECKPOINT06.html` su `main` dopo i correttivi 52A–52B, con file HTML blob `1b82081b3899faf6bcb169bcc2cc6b596ce46dab`.
La preview richiede **24 JSON distinti**: 1 grafo pubblico, 1 registro delle prove, 22 overlay/manifesti dal Checkpoint11 al Lotto51. Il JSON del grafo pubblico è recuperabile attraverso GitHub `fetch_blob`, SHA `4863b3fe263154387de3388c0b813b5f94546f12`.
Tutti gli altri **23 file** sono stati recuperati dal repository su `main` in due blocchi con `fetch_file` e decodificati come JSON valido.

## Risultati verificati
- **24 percorsi referenziati dalla preview, 24 percorsi distinti**. Nessun file mancante nell'inventario effettuato.
- Schema JSON leggibile per tutti i 23 manifesti/registri esterni al grafo pubblico.
- I **22 manifesti con identità dati** sono stati controllati al proprio interno: nessun `id` di nodo o di arco ripetuto, nessun `id` di nodo/arco mancante e nessun `id` di entry/opera ripetuto *nei campi presenti*, usando `id || work_id`. Le voci prive di entrambi non sono normalizzate da questo test.
- Gli **11 file della prima tranche** comprendono il legacy Generi e forme (50 nodi/271 archi), l'overlay Flaminio Checkpoint17 (112 nodi/202 archi), Mozart, i gruppi di Concerto e le opere per autore fino al Checkpoint40; i rimanenti **11 file** contengono i lotti 41–51 (Quartetti, Sonata e cantate).
- Codice JS inline `PREVIEW_RADICATA_CHECKPOINT06.html`: **3 blocchi**, zero errori di sintassi nel parser; wrapper `attachSeasons52` e gerarchia superiore fino a Concerto presenti.
- Resta valido il test eseguito sul Checkpoint 52B: 10 radici su grafo pubblico + 3 overlay autentici specifici, **0 errori e 0 archi orfani** nel banco di prova.

## Limiti di questa certificazione
Il limite di invocazioni per singola esecuzione del connettore impedisce in questa sessione di caricare ed eseguire **contemporaneamente tutti i 24 JSON** nel medesimo runtime JS. Questo documento **NON** afferma di avere eseguito il pipeline completo `prepare*`, la regressione delle radici miste, il rendering WebGL/browser o prove su smartphone.
Non sono stati ancora confrontati gli identificativi *tra file distinti*, salvo i controlli già effettuati nel 52B. Non considerare quindi certificati duplicati/archi orfani di federazione complessiva. Nessun difetto nuovo è stato dimostrato dai controlli di inventario.
Un controllo futuro deve caricare contemporaneamente tutti i manifesti, eseguire il codice della preview e verificare almeno `Concerto`, `Concerto per violino`, `Concerto grosso`, `Vivaldi`, quattro RV, `Sonata`, `Quartetto`, `Singspiel`, `Cantata`, `BWV174` e `BWV200`.

## Stato produzione
**Nessun aggiornamento** a `musurgia-atlantis/grafo.json` o `musurgia-atlantis/index.html`. Nessuna promozione in produzione prima della certificazione end-to-end.

## Continuità
Il prossimo checkpoint dovrà affrontare il *test eseguibile end-to-end*: utilizzare un ambiente in cui i 24 file possono essere caricati tutti insieme, riprodurre la pipeline `init()` e confrontare `dataset.nodes`, `dataset.links`, archi orfani/duplicati e viste radicate. Solo dopo testare WebGL reale e filtri.
