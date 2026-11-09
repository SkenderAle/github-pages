# Musurgia Atlantis — Checkpoint 07: anteprima 3D e controllo della pertinenza
**9 novembre 2026 · `main` · Hotfix della sola area `audit-integrazione/`**

## Perché l'anteprima non caricava
Il file browser `ROOTED_RELEVANCE_CHECKPOINT06.browser.js` dichiarava `const safeUrl` al livello lessicale globale. Lo script inline di `PREVIEW_RADICATA_CHECKPOINT06.html` dichiarava nuovamente `const safeUrl`; in un browser, due script classici condividono il medesimo ambiente lessicale globale e la seconda dichiarazione produce `SyntaxError: Identifier 'safeUrl' has already been declared` **prima dell'invocazione di `init()`**. Di conseguenza si vedeva sempre «Lettura dei dati…» e ricerca/cursori non venivano inizializzati.

**Risolto:** il modulo browser è ora avvolto in una IIFE e pubblica la sola API `window.MusurgiaRooted`, evitando collisioni con lo script HTML. Commit `ba39989da70492cce082e29910d339c92398362b`. Il `src` dello script include un parametro di versione per evitare il JS precedente nella cache.

## Regolatore indipendente: pertinenza 1–4
Il nuovo `input[type=range]` si aggiunge alla **profondità totale 1–5** e ai **limiti per tipologia** già esistenti. È disponibile nella stessa anteprima, non nell'Atlantis pubblico.

| Pertinenza | Cosa mostra | Mozart sul grafo reale: nodi / archi |
|---|---|---:|
| **1 · Diretta** | Solo fatti specifici e autonomamente verificati incidenti alla radice | **9 / 8** |
| **2 · Mirata** (predefinita) | Anche collaborazioni attraverso una singola opera/evento specifico; confronti diretti restano foglie non causali | **15 / 18** |
| **3 · Contestuale** | Aggiunge un singolo passo esplorativo per persona con percorso ancorato ad opera specifica; nessuna prosecuzione automatica di quelle ramificazioni | **19 / 22** |
| **4 · Esplorativa** | Più catene di archi storici specificamente verificati, sempre limitate dalla profondità 1–5; sono itinerari nel grafo, **non prove di rapporto diretto fra gli estremi** | **49 / 55** |

Al IV livello di pertinenza del cursore, **37 archi** del sottoinsieme Mozart sono esplicitamente marcati `exploration`. A pertinenza III, **4 archi** sono marcati esplorativi. Il colore del collegamento e la spiegazione in scheda distinguono: storico specifico, confronto non causale, itinerario esplorativo.

**Invarianti non negoziabili:** anche alla pertinenza 4 nessun arco storico non verificato può essere attraversato; capitoli editoriali, epoche e contesti generici non sono mai ponti transitivi; i confronti non causali non sono mai ponti; nessun fatto origine o legame diretto è inventato o automaticamente implicato; nessun testimone indipendente per attribuire una forte pertinenza della catena intera è stato approvato. `REGISTRO_PROVE_RADICATE_CHECKPOINT06_2026-11-09.json` resta con `witnesses:[]`; la sua nota distingue oggi esplicitamente percorsi esplorativi e prova storica radicata.

### Test integrati
**Dati:** letti per intero il blob `musurgia-atlantis/grafo.json` SHA `4863b3fe263154387de3388c0b813b5f94546f12`, 754 nodi e 1.718 archi. Test V8 eseguiti: confronto delle quattro modalità (9/8, 15/18, 19/22, 49/55), zero archi privi di verifica, verifica del caso *Otello* Rossini/Verdi a pertinenza 4, rispetto di limiti per categoria e nessun passaggio attraverso contesto generico. Tutti PASS.

**Avvio dell'interfaccia:** eseguiti due smoke test del vero modulo browser e dello script inline HTML estratto dal file pubblicato, con **DOM e API Canvas simulate**; usato il JSON integrale Atlantis restituito dal connettore GitHub. Entrambi PASS:
- `init()` restituisce **15 nodi e 18 archi** con Mozart iniziale, 8 vicini diretti.
- La ricerca `Beethoven` cambia davvero la radice della rete; prova successiva `Vivaldi` positiva.
- Il cursore pertinenza aggiorna il sottografo per tutte le 4 posizioni; gli archi `exploration` sono conteggiati separatamente.
- Caricamento dei due file con `fetch` e registrazione del timeout 30s verificati; se il caricamento fallisce, la pagina mostra un messaggio d'errore anziché la scritta permanente.
- Sintassi degli script HTML e compatibilità dell'API esportata verificate.

**Limite di certificazione:** NON abbiamo eseguito un test end-to-end con vero browser e vero canvas WebGL/Canvas su dominio pubblico o Android, perché l'accesso HTTP diretto al dominio non è disponibile in questo ambiente. Il mock DOM non riproduce la grafica reale, il touch né le condizioni di cache/hosting. La correzione del conflitto globale e il test d'inizializzazione costituiscono un forte riscontro tecnico, **non una certificazione visiva live**.

### Cambiamenti GitHub
- `ROOTED_RELEVANCE_CHECKPOINT06.browser.js` — isolamento globale e quattro modalità;
- `ROOTED_RELEVANCE_CHECKPOINT06.cjs` — quattro livelli di pertinenza, default 2, fonti e gate immutati;
- `PREVIEW_RADICATA_CHECKPOINT06.html` — nuovo cursore, legenda, esplicitazione delle catene, timeout/diagnostica e cache busting;
- `TEST_ROOTED_RELEVANCE_CHECKPOINT06.cjs` — test Node aggiuntivi pubblicati, da eseguire su clone;
- `REGISTRO_PROVE_RADICATE_CHECKPOINT06_2026-11-09.json` — nota aggiornata, nessun witness inserito.

**Produzione invariata:** nessuna modifica a `musurgia-atlantis/index.html`, `musurgia-atlantis/grafo.json`, `atlante3d/`, pagine editoriali. Nessuna fusione dei 3.856 archi legacy, 509 persone o archivi dei 210 lotti. Il modello è uno strumento didattico di esplorazione, non una certificazione di causalità.

### Anteprima
https://musurgiamundi.com/musurgia-atlantis/audit-integrazione/PREVIEW_RADICATA_CHECKPOINT06.html?v=checkpoint07-20261109

In caso di caricamento di una versione vecchia, usare il link con `v=` sopra e forzare ricarica (Ctrl+F5 / nuova scheda). Se la rete resta vuota, leggere il nuovo stato/errore sotto i controlli e usare il codice mostrato per la diagnosi successiva.
