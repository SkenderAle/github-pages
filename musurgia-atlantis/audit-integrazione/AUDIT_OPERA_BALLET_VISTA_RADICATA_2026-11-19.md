# Audit proiezione Opéra-ballet — recupero arco Atlantis L02-A35
## Musurgia Mundi / Atlantis / Flaminio · 19 novembre 2026

**Ambito:** esclusivamente `musurgia-atlantis/audit-integrazione/`. Produzione non modificata. Lotto 2 Flaminio BLOCCATO.

### Anomalia osservata
Il nodo canonico `atlantis::senso:opera-ballet` aveva un collegamento storico verificato verso `atlantis::opera:indes-galantes` nel grafo Atlantis originale: arco `L02-A35`, relazione `esempio_documentato_di_opera_ballet`, verifica esterna del 2026-11-08. Fonti registrate nell'arco: BnF, Philharmonie de Paris e capitolo Musurgia Mundi.

Nella vista di staging l'opera non compariva quando Opéra-ballet era la radice. Non si trattava di mancanza di dati, né era giustificata la creazione di un nuovo arco.

### Diagnosi
La funzione `rootedProjection` selezionava `sceneScopedProjection` per la radice Opéra-ballet perché essa era un'ancora dell'overlay Scena/Danza. Quest'ultima costruiva il proprio grafo esclusivamente con `edge.layer === "scene_staging"`, scartando il collegamento originale Atlantis `L02-A35`. Una riproduzione mirata con la funzione effettiva ha confermato: prima della correzione il nodo opera non appariva; dopo, compariva attraverso l'arco originale, senza nuove relazioni.

### Correzione confinata alla vista
Nella funzione `sceneScopedProjection` di `VISTA_DB_FEDERATO_LOTTO01_2026-11-15.html`:
1. Si mantengono separati gli archi `scene_staging` già utilizzati dal perimetro specializzato.
2. Si aggiunge alla sola proiezione l'arco Atlas originale, previa verifica combinata di `layer`, `original.id=L02-A35`, estremi canonici e relazione esatta.
3. Il passaggio da Opéra-ballet alla singola composizione è permesso soltanto quando Opéra-ballet è il **centro corrente**. Nessuna propagazione automatica alla famiglia, ad altri generi o repertori.
4. Il builder, il crosswalk e i grafi di produzione sono invariati; **non viene creato alcun nodo o arco**.

**Commit HTML:** [f421d86](https://github.com/SkenderAle/github-pages/commit/f421d86a919f0147cdf91b57449828a90b27b016).

### Regressione registrata
Nel file `TEST_GATE_RADICATO_POST_UNIFICAZIONE_2026-11-18.mjs` sono state inserite asserzioni che verificano:
- unicità e direzione dell'arco originale `L02-A35`;
- presenza di *Les Indes galantes* nella radice Opéra-ballet e nel focus `Spettacolo → Opéra-ballet`;
- conservazione dell'arco originale nella proiezione;
- esclusione di *Aida* dal sottogenere Opéra-ballet.

**Commit test:** [e7066f7](https://github.com/SkenderAle/github-pages/commit/e7066f7fadc00ad27dbe7c37a5485be5d73d771c).

### Prova V8 sul dataset reale (eseguita)
Sono stati letti tutti i **17 blob JSON effettivi** del branch `main` e invocata la funzione originale `buildUnifiedDatabase`; la proiezione è stata estratta dall'HTML aggiornato di staging e richiamata sulla rete effettiva.

| Gate | Esito |
|---|---|
| Sorgenti reali | 17/17 |
| Nodi | 2.897 |
| Archi | 8.743 |
| Schede Flaminio | 500 |
| Archi orfani | 0 |
| ID arco duplicati | 0 |
| Arco Atlantis L02-A35 | 1, conservato |
| Radice Opéra-ballet | 4 nodi, 3 archi, 1 opera: *Les Indes galantes* |
| Focus Spettacolo → Opéra-ballet | *Les Indes galantes* visibile |
| *Aida* nel ramo Opéra-ballet | assente |
| Mozart → Opera | quattro composizioni precedentemente convalidate, invariate |

**Stato del gate:** `PASS_REAL_DATA_V8_STAGE_EDGE`. Il risultato deriva dall'esecuzione logica diretta in V8 con i dati reali, non da una simulazione dei conteggi.

### Limiti e prossimi controlli
Questa prova **non** certifica la batteria completa dei nove harness da CLI Node, né costituisce un collaudo DOM/WebGL/Canvas o Android. Vanno ancora verificati il comportamento grafico effettivo, gli altri collegamenti originali potenzialmente oscurati dalle proiezioni specializzate, e la classificazione delle singole opere secondo i gate musicologici.

**Stato:** Lotto 1 OPEN per audit e collaudo; Lotto 2 BLOCKED; produzione invariata.
