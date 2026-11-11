# Musurgia Atlantis — Checkpoint 50C
## Ripristino degli archi della famiglia Concerto

**Data:** 11 novembre 2026  
**Ambito:** staging in `musurgia-atlantis/audit-integrazione/`, branch `main`.  
**Produzione:** `musurgia-atlantis/grafo.json` e `musurgia-atlantis/index.html` rimasti invariati.

### Segnalazione

Le schermate dell'utente mostrano che, centrando **«Concerto per violino»**, il suo padre **«Concerto solistico»** e il macrogenere **«Concerto»** esistono già come nodi, ma il macrogenere resta isolato dalla catena gerarchica visibile. Centrando **«Concerto»**, l'utente vuole che si vedano **tutti i sottogeneri e tutti gli autori catalogati**; l'eventuale densità del grafo deve essere governata da **filtri futuri**, non mediante omissione silenziosa degli archi.

### Causa esatta nel motore

In `attachConcerto40`, la costruzione della vista ricrea la radice nelle visualizzazioni Concerto, Concerto solistico e sottogeneri strumentali, scartando parte delle relazioni già presenti nella vista legacy. Il ramo del sottogenere aggiungeva:
- un nodo «Concerto solistico» come padre;
- un nodo «Concerto» come nonno;
- le singole opere e gli autori.

Ma `link(e)` eseguiva soltanto gli archi di `concerto40.edges`: **non gli archi `audit:gf25:tax:03`** («Concerto solistico» → «Concerto»), benché l'arco fosse già contenuto nel dataset. La visualizzazione di radice «Concerto» apriva prevalentemente la tassonomia, ma **non** gli indici completi degli autori e delle opere, malgrado le fonti fossero conservate.

Il difetto era dunque **principalmente di rappresentazione e radicamento**, non di assenza catalografica nel file JSON.

### Intervento

1. Aggiornato `attachConcerto40` per collegare effettivamente, quando visibili, **tutti gli archi tassonomici della famiglia** contenuti in `OVERLAY_FAMIGLIA_CONCERTO_CHECKPOINT25_2026-11-10.json` e `CHECKPOINT40_CONCERTO_SOTTOGENERI_15_OPERE_2026-11-10.json`.
2. **Concerto per violino → Concerto solistico → Concerto** è una catena di nodi ed **archi**: rispettivamente `atlas:concerto40:parent:atlas:gf:concerto-per-violino` e `audit:gf25:tax:03`. Lo stesso criterio vale per «Concerto per pianoforte» e gli altri sottogeneri.
3. Quando la radice è **«Concerto»**, mostrati i compositori già catalogati e le **44 opere individuali** registrate nel Checkpoint 40, con gli archi autore→opera e opera→sottogenere; non soltanto le etichette dei generi.
4. Quando la radice è **«Concerto solistico»** o **«Concerto di gruppo»**, mostrati figli, opere, autori e padre «Concerto», disegnando ogni arco di provenienza.
5. **Ripristinati anche gli archi della tassonomia legacy diretti per «Concerto grosso»**, senza nascondere i doppi collegamenti legittimi «Concerto grosso → Concerto» e «Concerto grosso → Concerto di gruppo». La filiazione editoriale non crea rapporti causali fra persone.
6. Aggiunta la funzione `prepareConcertoIndex51()`, che costruisce indici diretti autore→Concerto **solo da evidenze già presenti**: le 18 relazioni legacy dirette, i singoli concerti con attribuzione specifica nei Lotti 27, 35, 38 e 41, e l'attestazione di «Concerto grosso» nei legami legacy. Non si deduce un compositore dal fatto che abbia semplicemente *eseguito* un concerto o *trascritto* l'opera di un altro autore.
7. Il solo nuovo arco indice richiesto dal corpus realmente caricato collega **Alessandro Scarlatti → Concerto**, come sintesi del preesistente `legacy:gf:edge` Scarlatti→Concerto grosso. L'arco è marcato `repertoire_index_derived_from_specific_works_or_legacy`, con `root_permission=index_only_not_composer_to_composer`, ed espone gli ID di provenienza. **Non** è interpretato come prova di rapporto personale con Vivaldi, Corelli ecc.

### Audit di identità

I 18 autori già collegati direttamente nel catalogo storico sono Vivaldi, J. S. Bach, Händel, Telemann, Mozart, Paganini, Mendelssohn, Clara Schumann, Brahms, Saint-Saëns, Čajkovskij, Sibelius, Grieg, Corelli, Beethoven, Dvořák, Prokof'ev e Bartók.

L'indice attuale aggiunge **Alessandro Scarlatti** (da una relazione legacy specifica con Concerto grosso) e **Samuel Barber** (Concerto per violino op. 14, da una scheda specifica Lotto35). Totale nello staging di Concerto: **20 identità di compositore**, non un elenco definitivo di tutti i compositori storici.

Il codice di `prepareLot35` risolve **Béla Bartók** sull'identità preesistente `pers:bartok`, evitando di creare un doppione `fl:autor:bartok` sulla base del solo valore `composer_id_hint`. Per Barber, in assenza di un nodo personale canonico già presente nel grafo pubblico, resta l'identità di catalogo `fl:autor:barber` nello staging, da riconciliare se comparisse un record Atlantis preesistente.

### Prova realmente eseguita con il grafo di produzione come input

Diversamente dai precedenti test limitati all'overlay dei generi, è stato possibile recuperare il **blob JSON reale** di `musurgia-atlantis/grafo.json`, SHA `4863b3fe263154387de3388c0b813b5f94546f12`, con **754 nodi e 1.718 archi**. Il test ha inoltre caricato i JSON autentici di legacy Generi e forme (50/271), famiglia Concerto (Checkpoint25), 44 concerti del Checkpoint40 e i manifesti autentici di Brandenburg27, Lotto35, Lotto38, Lotto41. Le funzioni di preparazione, indicizzazione e costruzione della radice sono quelle **recuperate dal codice HTML effettivamente pubblicato**.

**Risultato strutturale dello staging preparato:** 904 nodi e 2.269 archi nel sottoinsieme federato testato, **0 ID di nodo duplicati**. Il sottoinsieme è composto dal vero grafo di produzione + tutti gli overlay concerto pertinenti: non è la totalità degli overlay ulteriori (Mozart, Quartetto, Singspiel, Cantate).

| Radice di prova | Nodi visibili | Archi visibili | Autori | Opere |
|---|---:|---:|---:|---:|
| **Concerto** | 78 | 179 | **20** | **44** |
| **Concerto per violino** | 16 | 40 | 4 | 9 |
| **Concerto solistico** | 43 | 121 | 4 | 35 |
| Concerto per pianoforte | 31 | 86 | 2 | 26 |
| Concerto di gruppo | 10 | 20 | 2 | 3 |
| Concerto brandeburghese | 10 | 30 | 1 | 7 |
| Mozart (radice autore) | 35 | 94 | 1 | 28 |
| Beethoven (radice autore) | 14 | 31 | 1 | 7 |

Le altre due radici verificate sono due opere di concerto individuali (Bartók, Barber), con 4 nodi e 4 archi ciascuna. In tutti questi casi sono stati controllati **0 archi con estremi mancanti**. La radice Concerto espone tutte le 44 opere del campione e tutti e **9** gli archi di famiglia preesistenti nel Checkpoint25. La radice «Concerto per violino» espone entrambi gli archi della catena padre e nonno. I filtri `Persone=0` e `Opere=0` non forzano rispettivamente persone o opere.

**Limiti della certificazione:** l'esercizio è sul **vero grafo pubblico** più gli overlay pertinenti a Concerto, ma **non** consiste nel rendering interattivo completo della pagina in un browser WebGL e **non** simula gli overlay di Singspiel/Quartetto/Cantate contemporaneamente. Per «Concerto grosso», il percorso di radicamento completo passa per `attachConcertoFamily`; il test diretto del solo helper `attachConcerto40` non è una simulazione di quella specifica interazione. La visualizzazione reale deve essere controllata anche da smartphone.

**Preview anticache:** https://musurgiamundi.com/musurgia-atlantis/audit-integrazione/PREVIEW_RADICATA_CHECKPOINT06.html?v=concerto50c-20261111

### Filtri da progettare in seguito

Il principio editoriale richiesto è confermato: **non sopprimere collegamenti veri per alleggerire il grafo**. La rete può essere fitta; la GUI dovrà distinguere:
- generi/formati e livelli di tassonomia;
- autori, opere, raccolte e trascrizioni;
- archi attestati da opere specifiche rispetto a indici derivati e legami ereditati dal database storico;
- profondità, pertinenza, filtri per autore, organico, periodo, categoria e qualità della fonte;
- eventuale progressiva apertura dei rami per evitare di visualizzare contemporaneamente tutto l'universo dei concerti.

L'implementazione dei futuri filtri è distinta dal correttivo di oggi. Nessuna riscrittura o fusione del `grafo.json` di produzione è autorizzata da questo test.

### Stato e ripresa

Checkpoint **50C** (correttivo GUI Concerto) dopo il Lotto50. L'audit dei lavori bachiani può riprendere dal **Lotto51 BWV171–200** solo dopo aver conservato nel thread l'esito di questa correzione. Il collaudo grafico WebGL resta un gate separato.
