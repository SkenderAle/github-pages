# Musurgia Atlantis — Checkpoint 10 · visibilità categoria e classificazione *Les Petits Riens*

**Data:** 9 novembre 2026 · **Repository:** `SkenderAle/github-pages`, branch `main`. **Scritture solo in** `musurgia-atlantis/audit-integrazione/`.

## Segnalazioni
L'utente ha fornito uno screenshot dell'anteprima con la scritta **Les Petits Riens (1778)** vicina alle etichette di persone, tra cui **Muzio Clementi** e **Wolfgang Amadeus Mozart**, e ha segnalato di non vedere ancora la seconda casella `Etichette`.

### Dato verificato, nessuna riclassificazione arbitraria
Letto l'effettivo `musurgia-atlantis/grafo.json` dal blob GitHub `4863b3fe263154387de3388c0b813b5f94546f12`:

```json
{"id":"opera:les-petits-riens-1778","name":"Les Petits Riens (1778)","category":"opera","subtype":"balletto"}
```

La classificazione **è corretta**; la posizione 3D vicino a persone o reti culturali non conferisce un'appartenenza categoriale diversa. Sono presenti le relazioni `L02-A23` (Noverre cura la coreografia) e `L02-A24` (Mozart compone **parte** della musica, non tutta), entrambe `riscontro_storico_indipendente`. `L02-A25` è un confronto contestuale non causale con il ballet d'action, non un'automatica prova di equivalenza.

Nessuna modifica al JSON originale.

## Causa dell'invisibilità dei selettori
La pagina già aveva entrambe le caselle ma il pannello `<details id="categoryPicker" open>` si trovava **sotto** ricerca, pertinenza e quattro profondità nella colonna laterale scrollabile; in vista mobile questa colonna aveva `max-height:44dvh` e il pannello poteva rimanere fuori dall'area visibile. Uno screenshot ritagliato sulla nebulosa non mostrava quel pannello.

## Correzioni pubblicate
1. Spostato **lo stesso** pannello, senza duplicare DOM o selettori, **all'interno del riquadro 3D** (angolo alto sinistro, sopra il Canvas con `z-index:9`). Intestazione: **«Categorie · Nodi / Etichette»**. È **aperto inizialmente**, ha scroll interno e può essere richiuso col riepilogo, anche su Android. Commit `193a6ce6386ac8c1504f31324afdd825b0073d81`.
2. La didascalia Canvas esistente, *al solo hover o dopo selezione*, mostra una **seconda riga informativa all'interno della stessa etichetta** con la categoria e il sottotipo: per *Les Petits Riens* **«Opera · balletto»**. Non è un nuovo overlay HTML: il nome è disegnato una volta sola. Commit `f64f0c917f572575a83cf20c40682405d0665318`.
3. Sulle righe categorie i conteggi ora sono **nodi nella vista/nodi nel catalogo**: ad esempio con Mozart e pertinenza mirata **«Opere (6/193)»**; la categoria nel pannello ha un indicatore cromatico. La didascalia chiarisce che i flag agiscono sulla rete attualmente esplorata, non aggiungono indiscriminatamente tutto il catalogo.
4. Una selezione del flag `Etichette` a struttura invariata modifica in-place i campi di presentazione `_forceLabel`, `_label`, `_bridge`, evitando di richiamare `graphData` e ricalcolare la posizione/rotazione della nebulosa. La radice e la struttura sono controllate: al vero cambio di radice, il layout viene rigenerato per centrare il nuovo nodo, **senza cambiare lo zoom**. Commit `4ebb5ad2668b6d04a420381df62ab45144ae7ca5`.
5. Cambiato il parametro versione del renderer Canvas nell'HTML per evitare il caricamento della vecchia copia nella cache, commit `81889c182d91ef65a572d0e451555d126cc73520`.

## Test di integrazione eseguiti
1. **Canvas script vero + contesto 2D simulato, fixture minima:** passando il mouse sulla radice *Les Petits Riens (1778)* vengono disegnate le due righe **«Les Petits Riens (1778)»** e **«Opera · balletto»**, con **una sola occorrenza del nome**. PASS.
2. **HTML e browser engine effettivi + `grafo.json` reale completo (754 nodi, 1718 archi), DOM/API grafica simulate:** partenza Mozart produce **15 nodi / 18 archi**. `Les Petits Riens` è presente ed ha `category=opera`. La nuova tabella è dentro il contenitore `#graph`, aperta per default, con entrambi i selettori per categoria. PASS.
3. **Categorie Opere:** conteggio **6/193** nella rete mirata di Mozart, flag `Etichette` applica `_forceLabel` a tutte le opere nella vista, non alle persone, e lascia il numero di chiamate `graphData` e `zoomToFit` invariato. Poi il flag Persone rende permanenti anche i nomi di tutte le persone correntemente visualizzate. PASS.
4. Doppio clic simulato su *Les Petits Riens* cambia la radice in `opera:les-petits-riens-1778` senza alterare lo zoom. PASS.

**Limiti:** non sono stati eseguiti un collaudo visivo con browser desktop reale o con Android né un controllo HTTP live del dominio. La visualizzazione utilizza ancora **solo il JSON Atlantis**, non i patrimoni di Musurgia Mundi ancora nello staging (3.856 relazioni legacy, 509 persone, fonti, media, ancore, lotti).

## Anteprima
https://musurgiamundi.com/musurgia-atlantis/audit-integrazione/PREVIEW_RADICATA_CHECKPOINT06.html?v=categorie10-20261109

## Produzione non toccata
`musurgia-atlantis/index.html`, `musurgia-atlantis/grafo.json`, `musurgia-atlantis/compat-graph.js`, `atlante3d/` e i capitoli Musurgia Mundi sono invariati. **Nessuna fusione legacy.** Prossimo checkpoint: prova reale di questa UI e quindi progettazione di un'importazione additiva non distruttiva con provenienze, note in entrambe le direzioni e link.
