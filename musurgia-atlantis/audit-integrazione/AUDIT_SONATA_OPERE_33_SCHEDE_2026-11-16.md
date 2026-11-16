# Sonata — collegamento delle composizioni del Lotto 1 (16 novembre 2026)

**Ambito:** Musurgia Mundi + Atlantis + Flaminio (primi 500 record); branch `main`. **Stato:** staging reversibile. **Grafo pubblico invariato. Lotto 2 BLOCCATO.**

## Risultato
È stata verificata la copertura delle **33 schede Flaminio con titolo iniziale «Sonata»**. Di queste, **29 sono collegate a tipologie per organico tramite attestazioni già presenti nei dati**, mentre **4 restano HOLD**. Non è stata prodotta alcuna nuova identità canonica di composizione o compositore, e nessun catalogo successivo è stato importato.

| Metadato | Risultato |
| --- | ---: |
| Schede Sonata censite | 33 |
| Schede collegate a opere candidate | 29 |
| Classificazioni fonte→opera preesistenti riutilizzate | 19 |
| Nuovi raccordi tipologia→opera di staging | 10 |
| HOLD, senza nuovo raccordo operativo | 4 |
| Nodi di tipologia Flaminio riutilizzati | 4 |
| Nuovi nodi di tipologia per organico | 6 |
| Nuovi archi strutturali per organico | 17 |
| Nuovi archi totali in questa fase | 27 |

La precedente integrazione di **7 nodi e 11 archi strutturali** è stata conservata. Sommando questa fase allo staging precedentemente collaudato (2.813 nodi / 8.517 archi), il nuovo builder dovrebbe generare **2.819 nodi e 8.544 archi**: **conteggi attesi, non ancora certificati da un'esecuzione del builder completo**.

## Principali famiglie e casi sentinella
- **Violino solo:** Bach BWV 1001, 1003, 1005; Bartók BB 124.
- **Violino e clavicembalo:** Bach BWV 1014–1019. **Viola da gamba e clavicembalo:** Bach BWV 1027–1029. I nodi Flaminio e i rispettivi archi di catalogazione preesistevano: riutilizzati, non duplicati.
- **Organo solo in scrittura a tre:** Bach BWV 525–530. La BWV 527 usa il nodo già presente `audit:fl01:jsb03:doc:bwv527`, collegato alla riga Flaminio 3940 e alla raccolta; la presentazione di staging lo rende leggibile come opera senza alterare il payload originario.
- **Flauto e tastiera obbligata:** BWV 1030. **Flauto e basso continuo:** BWV 1034, 1035; il continuo non determina un numero fisso di esecutori.
- **Pianoforte solo:** Barber op. 26 e Bartók BB 88. **Arpa sola:** C. P. E. Bach, Sonata H 563 / Wq 139, ancora candidata in staging.
- **Violino e pianoforte:** Bartók BB 84 e BB 85. **Due pianoforti e percussioni:** Bartók BB 115, non assimilabile alla «Sonata per due strumenti».

## HOLD
Le schede 3641 (**BWV 1033**), 3645 (**BWV 1031**), 3654 (**BWV 1020**) e 3946 (**BWV 966**) restano senza nuovo raccordo operativo, per questioni documentarie/di attribuzione. I loro record fonte originali rimangono intatti.

## Scelte tecniche
1. Nessuna deduzione `autore→opera` dalla sola denominazione, nessuna fusione nominale fra cataloghi.
2. Quattro nodi di genere Flaminio e diciannove archi `genere_classifica_opera_specifica` già esistenti vengono riutilizzati: la cascata è costruita per raccordo semantico, non per moltiplicazione dei nodi.
3. Distinzione permanente **Sonata (genere)** / **forma-sonata**; distinte le faccette di organico, prassi e tipologia storica.
4. Il filtro del viewer di staging esclude ora anche relazioni con `HOLD` nel **predicato** (`e.relation`), non soltanto nello stato di qualità. In questo modo un'attribuzione `attribuzione_Bach_IN_HOLD` non può essere reintrodotta in navigazione filtrata per omissione del controllo sul predicato.
5. Il registro trasversale degli otto overlay resta aggiornato, senza dichiarare integrate le altre sette famiglie.

## Verifiche eseguite e limiti
**PASS sulle sorgenti JSON effettive:** 33 schede coperte esattamente una volta; 29 target opera distinti; tutti i 27 nuovi archi con estremi esistenti; nessun ID dei nuovi archi duplicato; 19 relazioni riusate effettivamente presenti e correttamente identificate; 10 raccordi nuovi dotati del rapporto `riga fonte→opera` preesistente; il grafo Flaminio usato presenta 0 archi orfani, 0 ID nodo ripetuti e 0 ID arco ripetuti.

**NON eseguiti:** avvio end-to-end di `buildUnifiedDatabase` nel browser o Node, regressione del viewer fino a profondità 5, rendering Three.js/WebGL su Android e controllo filologico indipendente di ogni attribuzione. Il nuovo stato non è ancora `FAMILY_VALIDATED`.

**Tracce:** `SONATA_CAMERA_RACCORDI_OPERATIVI_2026-11-16.json`; `SONATA_OPERE_RACCORDI_FONTE_LOTTO01_2026-11-16.json`; `REGISTRO_INTEGRAZIONE_OVERLAY_TASSONOMICI_2026-11-16.json`; `REGRESSIONE_SONATA_OPERE_LOTTO01_2026-11-16.json`.

## Passo successivo
Collaudo della vista unificata: ricerca **Sonata → sottotipo → opera**, poi **Bach → BWV 1001/1003/1005** e **Bach → BWV 525–530**, con soppressione dell'attribuzione HOLD e assenza di composizioni d'altro autore nell'espansione radicata. Proseguire alla successiva famiglia soltanto con le prove complete e senza sbloccare il Lotto 2.


## Addendum — collaudo del builder e della proiezione radicata (16 novembre 2026)

**ESECUZIONE REALE DEL BUILDER SUPERATA:** tutti i 10 JSON del repository sono stati caricati, la funzione `buildUnifiedDatabase` del modulo reale è stata eseguita in ambiente JavaScript isolato; **2.819 nodi e 8.544 archi**, 500/500 schede Flaminio, **0 archi orfani, 0 ID arco duplicati, 0 avvisi sui conteggi storici**. Questo supera il precedente test statico e conferma i numeri attesi.

**Difetto della preview individuato:** l'HTML sperimentale usava una propria funzione `rootedProjection` più permissiva, che dalla radice Sonata a profondità 5 espandeva 1.805 nodi, inclusi `Don Giovanni` e `Aida`. Inoltre non filtrava `HOLD` quando questo era nel predicato dell'arco, anziché nel campo di qualità. Corretto senza cambiare alcun file di produzione.

**Collaudo logico dell'HTML reale dopo la correzione:** Sonata 109 nodi/108 archi; Sonata in trio per organo 11/10; Sonata per violino solo 8/7; Sonata per due pianoforti e percussioni 4/3; Bach 467/466; Bach→Sonata focalizzato 58/56. Escluse nei casi controllati le attribuzioni sospese BWV 1033, 1031, 1020 e 966 e le opere estranee `Don Giovanni` e `Aida`.

Gli archi di opere e raccolte rimangono conservati. I membri non pertinenti di una raccolta mista e i riusi verso altre composizioni compaiono **solo quando si focalizza esplicitamente** la raccolta o l'opera: nell'insieme delle sonate e partite per violino solo, il clic sulla raccolta rende nuovamente visibili le Partite; il clic su BWV 527 rende visibili i riusi verso il Concerto BWV 1044.

**Prove riproducibili:** `TEST_SONATA_RADICATA_RUNTIME_2026-11-16.mjs` (test Node da eseguire nella copia locale del repository) e `REGRESSIONE_PROIEZIONE_RADICATA_SONATA_2026-11-16.json` (risultati del collaudo logico già eseguito in ambiente isolato).

**Ancora non certificati:** avvio in un browser grafico reale, fallback Canvas, Three.js/WebGL, prestazioni Android, navigazione completa della funzione di confronto fra lemmi, verifica storico-filologica indipendente di tutte le attribuzioni. **Lotto 2 Flaminio ancora BLOCCATO; il grafo pubblico rimane invariato.**
