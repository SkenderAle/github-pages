# Checkpoint 20 — audit globale di copertura della federazione nella preview
**Data:** 9 novembre 2026  
**Ambito:** staging e codice dell'anteprima, nessun cambiamento alla produzione.

## Fonti materialmente rilette
- `federazione-v1/nodi-01..06.json` (6 partizioni, 1.637 record).
- `federazione-v1/archi-01..08.json` (8 partizioni, 5.574 archi).
- `federazione-v1/MANIFEST.json`.
- `OVERLAY_PERSONE_FEDERATE_CHECKPOINT18_2026-11-09.json`.
- `OVERLAY_TASSONOMIA_MOZART_CHECKPOINT19_2026-11-09.json`.
- `PREVIEW_RADICATA_CHECKPOINT06.html` attuale.

## Risultato principale: copertura persona
Nella federazione ci sono **806 record-persona**: **297 Atlantis** e **509 Mundi** (500 grafo base, 9 estensione). Le identità materiali non coincidono necessariamente con le identità storiche: il crosswalk già documentato riconosce **162** equivalenze e **347** nuovi ingressi candidati.
L'overlay checkpoint 18 contiene **un solo nodo Mundi**, `mm:compositore-leopold-mozart`; **508/509 ID-persona Mundi non sono materializzati come nodi con il proprio ID nella preview**. Non si deve confondere questo conteggio con 508 persone tutte assenti semanticamente: fino a 162 identità sono già rappresentate nel grafo Atlantis sotto altro ID, ma l'overlay non applica l'intero crosswalk.
**Conseguenza:** nessuna dichiarazione di visibilità completa del legacy è giustificata. La riparazione a mano di Leopold è una sentinella, non il completamento della fusione.

## Risultato archi
Le 8 partizioni contengono **5.574 archi**: 1.718 Atlantis, 2.437 Mundi base, 1.389 Mundi specialistici e 30 estensione. **789** di questi hanno entrambi gli estremi con ID Mundi di persona/compositore (dato strutturale; non 789 rapporti storici certificati).
L'overlay Checkpoint 18 contiene **due** archi persona↔persona per Leopold/Wolfgang. Il renderer della preview usa il grafo pubblico e overlay selezionati, NON legge tutte le 8 partizioni degli archi federati.
In particolare, nelle partizioni sono presenti legami incidenti a Mozart con Johann Christian Bach, Johann Sebastian Bach, Haydn, padre Martini e Giuseppe Sarti, non importati automaticamente da Checkpoint 18. **Non approvare automaticamente tali relazioni**: verificare predicato, fonte, verso e pertinenza radicata per ciascuna.

## Diagnosi codice
1. `init()` carica `../grafo.json`, registro delle prove, overlay generi, overlay Flaminio, Checkpoint18 e Checkpoint19; non carica direttamente `federazione-v1/nodi-*.json` né `archi-*.json`.
2. `prepareFederatedPeople()` verifica solo l'overlay puntuale fornito; `attachFederatedPeople()` itera gli archi di tale overlay e non usa un indice federato completo.
3. La funzione `getRootedPreview()` applica gli overlay sopra la navigazione radicata, dunque i dati esistenti in partizioni senza crosswalk + gate non raggiungono la vista.
4. `setRoot()` e `search()` lavorano su `dataset.nodes`: la sola presenza in un file federato non rende un nodo cercabile.
5. La condizione `_label:n.id===currentRoot||(...)` mantiene l'etichetta della radice visibile anche quando tutte le spunte «Etichette» sono spente. Il caso **Clementi** va distinto: se è *radice*, l'etichetta persistente è comportamento deliberato; se è un nodo non-radice, testare gli stati hover/selezione e il motore 3D prima di dichiarare bug.

## Gate e azioni necessarie
- Generare un **indice globale versione-stabile** delle 509 persone Mundi, con 162 crosswalk documentati e 347 ingressi distinti. Non duplicare Wolfgang e altri equivalenti. Gli ID non convalidati restano candidati.
- Fare un **indice persona↔persona** con predicato/fonte/direzione per tutti i 789 record strutturali e distinguere fatti storici da confronti, genealogie editoriali e rapporti indiretti.
- Materializzare in un overlay generale **soltanto** archi con estremi riconciliati e gate di fonte/pertinenza superato; non creare una rete BFS attraverso epoche, generi o capitoli.
- Eseguire test documentati di campioni radicati: Mozart/Leopold, Gabrieli/Schütz, Bach/J. C. Bach, Vivaldi, e verifica dei casi negativi; poi test desktop hover e Android tap.
- Separatamente, audit della classificazione opera→genere del Checkpoint19: corretta presenza del sottogenere e del termine superiore, ma non usare il genere come passaggio verso le opere di altri autori.
- Mantenere integri tutti i 210 lotti filologici e il patrimonio editoriale/video/guide.

**Stato finale:** controllo statico dei dati e del codice della preview, **non** certificazione storica degli archi né collaudo browser. Nessuna modifica eseguita a `musurgia-atlantis/grafo.json`, `index.html`, `atlante3d/` o al renderer pubblico.
