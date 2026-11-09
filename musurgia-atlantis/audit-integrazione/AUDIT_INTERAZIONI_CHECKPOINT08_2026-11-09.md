# MUSURGIA ATLANTIS · Checkpoint 08 — Gestualità, zoom e inventario delle categorie
**9 novembre 2026 · branch main · solo staging `musurgia-atlantis/audit-integrazione/`**

## Decisione UX
L'anteprima recupera la gerarchia gestuale precedente, senza sovrapporre navigazione e ingrandimento.

| Gesto / comando | Desktop | Android / touch |
|---|---|---|
| Puntamento | Hover = etichetta visibile anche se nodo sullo sfondo | Nessun hover |
| Selezione | Un clic = scheda del nodo e note/fonti sulle relazioni visibili, senza cambiare la radice | Primo tocco = scheda del nodo |
| Nuova radice | Doppio clic sul nodo = centra quel nodo, mantiene il fattore di zoom | Secondo tocco sullo stesso nodo, anche non rapidissimo = nuova radice, stesso zoom |
| Ingrandimento | Lente `+` e rotella mouse | Lente `+` e gesto a due dita |
| Riduzione | Lente `−` e rotella mouse | Lente `−` e gesto a due dita |

**Nessun ingrandimento al doppio clic.** Il rendering della rete si ricalcola rispetto alla nuova radice senza chiamare `zoomToFit`; lo zoom è letto/scritto esclusivamente con `engine.zoom()` quando si premono i pulsanti. Le lenti sono bottoni circolari SVG con marcatura `aria-label`, 48×48 px, sempre visibili sopra la nebulosa. L'eventuale normale ricerca testuale continua a impostare la radice e a usare il primo fit. Il pulsante sinistro `Nuova radice` è stato eliminato.

### Aree modificate, esclusivamente nello staging
1. `compat-graph-checkpoint08.js` è una **copia isolata** di `musurgia-atlantis/compat-graph.js`, senza modificare il motore pubblico; supporta etichette forzate su hover/selected (anche emisfero posteriore e senza soppressione per collisione), `onNodeClick`, `onNodeDoubleClick`, `onNodeHover`, uscita del puntatore, tocco mobile a raggio più ampio (28 px) e seconda selezione dello stesso nodo come centratura. Committato inizialmente `6f1a591a1391778e9c4f6a4dbb2d7db6bab0aa5e`, raffinato `a3a62c46dba1342e8fc0c27a102dd8eb5078eeb4` e `1b4e82dbf8fca543bcf59581016610348e991c1c`.
2. `PREVIEW_RADICATA_CHECKPOINT06.html` carica esclusivamente il nuovo motore isolato; aggiunge i pulsanti di zoom e una etichetta HTML flottante su hover, ripristina la scheda dei rapporti con note, descrizioni, frasi e URL delle fonti già disponibili, preserva link di nodo `url` se presenti, elimina il vecchio pulsante di pivot. Il `setRoot(id,{fit:false})` da doppio clic non modifica il fattore di zoom. Commit UI `c1daf0ceb5c9989f2c8eef2fadc06024adf596df`, successiva intestazione/informazione sorgenti `28af4a96911ce0e4a22656f6035871339ee1d177`.

## Categorie: presenti nel JSON corrente, prima non selezionabili
Il `grafo.json` già pubblico contiene **754 nodi e 1.718 archi**, distribuiti in **14 categorie effettive**:
- persona 297; opera 193; nodo-di-senso 176; luogo 18; capitolo 15;
- versione-opera 14; strumento 14; allestimento 8; produzione 7;
- rete-culturale 4; evento-storico 3; documento-storico 3; documento 1; parte-di-opera 1.

La pagina offre ora un elenco **generato da tutti i valori `category` realmente presenti**, senza enumerazione falsa o occultamento. Le 13 categorie storico-musicali sono selezionabili con checkbox; i capitoli rimangono visibili nel conteggio ma con checkbox disabilitata perché sono risorse editoriali e non appartengono al grafo di cammini storici. Le categorie disattivate non sono mostrate, salvo i nodi intermedi indispensabili a collegare categorie mantenute visibili, resi attenuati; non si cancellano archi o fonti originali.

### Verità sull'importazione Musurgia Mundi
**La visualizzazione è ancora alimentata soltanto da `musurgia-atlantis/grafo.json`.** Le **3.856 relazioni del vecchio Atlante**, le **509 persone fonte** (162 equivalenze identitarie documentate e 347 candidate), i **115 media**, le **207 associazioni**, i **537 URL con ancore** e i **210 lotti storico-filologici** restano archiviati nello staging di riconciliazione. **Non sono stati fusi, cancellati, verificati integralmente, né montati nella nuova anteprima.** Il testo di provenienza è ora esplicito nella pagina; se una nota o un nodo di Musurgia Mundi non compare, la sua mancata presenza nel JSON corrente non equivale alla sua perdita dal patrimonio archivistico.

## Verifiche eseguite
**Smoke test 1 — codici reali del modulo browser e script inline HTML, con DOM/API Canvas simulati e fixture storica dichiarata: PASS.**
- Avvio, ricerca, categorie, selezione e note, scheda fonte, hover e popup etichetta: PASS.
- Primo clic su Da Ponte: la radice continua ad essere Mozart, si apre la scheda di Da Ponte: PASS.
- Doppio clic su Da Ponte: la nuova radice diventa Da Ponte, **`engine.zoom` invariato, 0 chiamate addizionali a `zoomToFit`**: PASS.
- Lente +: `zoom` 1 → 1,25; lente −: 1,25 → 1: PASS.
- Disattivare Opere filtra quelle non necessarie e mantiene gli antenati richiesti: PASS.
- I capitoli restano non traversabili: PASS.

**Smoke test 2 — vero file `compat-graph-checkpoint08.js`, canvas 2D e eventi Pointer simulati: PASS.**
- Mouse `pointermove` su radice → etichetta; `pointerleave` → nascondi: PASS.
- Primo `pointerup` mouse → evento `onNodeClick`; secondo entro 180 ms → `onNodeDoubleClick` senza variazione dello zoom: PASS.
- Primo `pointerup` touch → selezione; secondo sul medesimo nodo dopo **1.300 ms** → `onNodeDoubleClick`: PASS.
- Metodo zoom getter/setter preservato: PASS.

**Limiti:** i test sono eseguiti in V8 con API DOM/canvas ed eventi simulate, non sono un test del disegno reale o della risposta effettiva di Chrome/Android. Il dominio non è raggiungibile tramite le richieste HTTP degli strumenti disponibili; evitare di dichiarare deploy browser/Android certificato. Risorse originali `musurgia-atlantis/index.html`, `musurgia-atlantis/grafo.json`, `musurgia-atlantis/compat-graph.js`, `atlante3d/` **non modificate**.

## Anteprima da aprire
https://musurgiamundi.com/musurgia-atlantis/audit-integrazione/PREVIEW_RADICATA_CHECKPOINT06.html?v=checkpoint08-20261109

**Prossima fase:** collaudare visivamente su desktop e Android, verificare l'elenco delle 14 categorie nella pagina e perfezionare le schede. Solo in seguito preparare una migrazione additiva e verificata dei dati legacy, senza deduplicare fatti distinti né convertire analogie in rapporti causali.
