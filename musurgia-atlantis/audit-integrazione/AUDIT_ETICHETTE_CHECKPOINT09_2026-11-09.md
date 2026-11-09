# Musurgia Atlantis — Checkpoint 09
## Una sola etichetta su hover; doppio selettore «Nodi / Etichette» per categoria

**Data:** 9 novembre 2026 · **Sede dei cambiamenti:** esclusivamente `musurgia-atlantis/audit-integrazione/` · **Branch:** `main`.

### Segnalazione dell'utente
Schermata effettiva dell'anteprima: il puntatore su **Jean-Georges Noverre** provoca due etichette contemporanee. Il motivo è il codice dell'anteprima, che aggiunge `#hoverLabel` come elemento HTML sopra il grafo, mentre `compat-graph-checkpoint08.js` possiede già il proprio motore di disegno delle didascalie. Il Canvas normalmente nasconde quelle nell'emisfero posteriore: il puntatore deve **accendere la stessa etichetta esistente**, non fabbricarne una seconda.

### Correzione precisa
1. Rimossi dalla pagina **l'elemento DOM `#hoverLabel`**, la relativa CSS e la logica `onNodeHover` che posizionava un secondo elemento.
2. Il renderer isolato mantiene **un solo `drawCaption` per nodo**; il mouse continua a impostare lo stato `hovered` del Canvas, e il sistema già presente mostra la didascalia anche se il nodo non è in primo piano, senza raddoppio. Uscendo dal Canvas, `pointerleave` lo ripristina.
3. Non toccati i gesti: clic seleziona e presenta le note; doppio clic centra senza zoom; su Android un secondo tocco sul nodo selezionato centra, le lenti +/− controllano lo zoom.

### Nuovo doppio flag per TUTTE le categorie effettive
Nel pannello **Categorie presenti nel grafo** le intestazioni sono adesso **Categoria | Nodi | Etichette**. Le categorie provengono dai valori `category` presenti nel JSON, senza inventarne di nuove.

- **Nodi** attivo: la categoria è mostrata nel **sottografo della radice e dei livelli/pertinenza correnti**. Non significa inserire istantaneamente nel grafo ogni record dell'archivio da 754 nodi; la navigazione radicata e i gate storici restano invariati.
- **Etichette** attivo: attiva `_forceLabel` su **tutti i nodi della categoria effettivamente presenti nella rete corrente**, anche dietro la nebulosa; non dipende dal valore di `frontness` o dal consueto algoritmo anticollisione delle etichette. Se molte etichette sono accese, possono sovrapporsi, esattamente come richiesto per mostrarle tutte.
- Se **Nodi** viene tolto, la relativa etichettatura permanente si disattiva e il secondo flag si disabilita. Se si riattiva **Nodi**, il secondo flag resta spento fino a scelta esplicita.
- I capitoli editoriali rimangono una categoria conteggiata ma con entrambi i flag disabilitati, perché non devono fungere da ponti storici. I nodi necessari come ponti verso una categoria visibile possono rimanere attenuati.

### Bug interno intercettato durante la verifica
Il primo patch aveva reso `_forceLabel` esente dai test di profondità/collisione, ma la guardia iniziale `if(!n._label && n.id!==hovered && n.id!==selected)return` avrebbe comunque scartato i nodi di II–V livello. **Corretto esplicitamente** includendo `!n._forceLabel` nella guardia iniziale, oltre alle altre condizioni. Commit di questa correzione: `fed43cb0d40dbbb9e6a5226710a249354a90cbeb`.

### Verifiche realmente eseguite (non spacciate per browser reale)
- **Canvas 2D real JS in V8, contesto grafico simulato:** 13 nodi sintetici (una radice + 12 persone con `_forceLabel:true`), render del frame: **13 etichette / 13 nodi, ciascuna esattamente 1 volta**. Rimosso `_forceLabel`: rimane solo la didascalia iniziale della radice; quindi il flag controlla realmente la permanenza delle etichette indipendentemente dalla posizione sul globo. PASS.
- **HTML + browser engine real JS in V8, DOM/API grafica simulate, fixture di 5 nodi (4 categorie):** due caselle per categoria, etichetta forzata su entrambe le persone nel sottografo; disattivando il primo flag, il secondo si spegne ed è disabilitato; alla riattivazione non torna automaticamente. Nessun `hoverLabel` HTML residuo. PASS.
- **Sintassi JS** dei due script e riferimenti incrociati: PASS.
- **Non eseguiti:** verifica del vero aspetto su sito remoto, comparazione visuale su Chrome e test touch Android. Il patrimonio Musurgia Mundi legacy (3.856 relazioni, 509 persone, 115 media/207 associazioni, 537 URL con ancore) rimane in staging. Nessun merge o modifica a produzione.

### File e commit
- `compat-graph-checkpoint08.js` aggiornamento iniziale etichette forzate: `966656c6a44055e2e0a92cd1c0a6d20027100164`; correzione guardia `fed43cb0d40dbbb9e6a5226710a249354a90cbeb`.
- `PREVIEW_RADICATA_CHECKPOINT06.html` nuovo doppio flag e soppressione dell'overlay duplicato: `a02da71a3a99ae5d2435516c12232385867b38a2`.

**Anteprima da aprire con parametro di versione per aggirare la cache:**
https://musurgiamundi.com/musurgia-atlantis/audit-integrazione/PREVIEW_RADICATA_CHECKPOINT06.html?v=etichette-09-20261109

**Prossima fase:** confermare con uno screenshot reale che Noverre mostra una sola etichetta su hover, accendere «Etichette» su Persone e verificare che compaiano anche dietro la nebulosa, poi tornare alla preparazione non distruttiva della migrazione di Musurgia Mundi. L'HTML pubblico `musurgia-atlantis/index.html`, il renderer originale `compat-graph.js` e i JSON pubblici **non sono stati modificati**.
