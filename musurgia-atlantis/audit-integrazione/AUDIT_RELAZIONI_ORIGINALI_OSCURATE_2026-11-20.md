# Audit delle relazioni originali oscurate dalle viste specializzate
## Musurgia Mundi / Atlantis / Flaminio · 20 novembre 2026

**Ambito:** `musurgia-atlantis/audit-integrazione/` sul branch `main`. Grafi pubblici invariati; Lotto 2 Flaminio BLOCCATO.

### Metodo e perimetro della verifica
Sono state caricate ed elaborate le **17 sorgenti JSON reali**, tramite SHA di blob GitHub, usando il builder originale `buildUnifiedDatabase` e la funzione originale `rootedProjection` estratta dall'HTML di staging. Sono stati esaminati **87 nodi di genere/forma** toccati dagli overlay `scene_staging`, `vocal_staging`, `short_staging`, `counterpoint_staging` o `suite_staging`.

Il confronto ha riguardato gli archi **diretti** originali Mundi/Atlantis che collegano un genere/forma a un nodo di composizione, filtrando soltanto status esclusi e documentazione. **Non è un inventario di tutti gli archi originali oscurati di ogni categoria**, né una prova di completezza musicologica delle 500 schede Flaminio.

### Risultati prima dell'intervento
Tra gli 87 nodi controllati, tre radici mostravano quattro relazioni originali direttamente verso opere non presenti tra gli archi della propria proiezione:

| Genere / forma | Arco fonte Atlantis | Opera o ciclo | Natura |
|---|---|---|---|
| Ballet d'action e pantomima | `L02-A03` | *Don Juan ou Le Festin de pierre* (Gluck/Angiolini, 1761) | Esempio storico, verificato |
| Ballet d'action e pantomima | `L02-A25` | *Les Petits Riens* (1778) | Confronto editoriale **non causale**; non assegnazione forte al genere |
| Comédie-ballet | `L02-A32` | *Le Bourgeois gentilhomme* (1670) | Esempio documentato di genere, verificato |
| Lied | `L03-A42` | *An die ferne Geliebte*, op. 98 (Beethoven, 1816) | **Ciclo di sei Lieder**, non un Lied singolo |

I quattro archi erano già conservati nel database originale: il difetto era la **proiezione** dei dati. La classificazione delle prime, terze e quarte relazioni è attestata nei rispettivi record Atlantis, con fonti e verifica esterna (`historical_verified_independently=true`). In particolare la quarta relazione usa `e_ciclo_di`: questa distinzione è preservata.

**Riferimenti di riscontro:** [Berliner Philharmoniker — Don Juan](https://www.berliner-philharmoniker.de/werkeinfuehrung/christoph-willibald-gluck-don-juan-ballett/); [Philharmonie de Paris — Le Bourgeois gentilhomme](https://collectionsdumusee.philharmoniedeparis.fr/0732491-le-bourgeois-gentilhomme-de-lully.aspx?_lg=fr-FR); [Beethoven-Haus — catalogo An die ferne Geliebte op.98](https://www.beethoven.de/de/work/view/5564103917568000/).

### Correzione della vista (nessun dato inventato)
Nel visualizzatore `VISTA_DB_FEDERATO_LOTTO01_2026-11-15.html`:
- La proiezione Scena/Danza ora consente **soltanto** gli archi `L02-A03`, `L02-A32` e `L02-A35` (ultimo già recuperato nel checkpoint precedente) previo confronto esatto di layer, ID fonte, estremi, predicato e stato di conferma indipendente.
- La proiezione Vocale mantiene il proprio overlay `vocal_staging` e recupera direttamente il collegamento storico `L03-A42`, conservando il predicato **`e_ciclo_di`**. La relazione aggiuntiva verso l'overlay «Lied ciclo» non è né fusa né riscritta.
- Gli esempi sono mostrati **solo quando il genere specifico diventa il centro corrente**, anche dopo un focus. Non si propagano attraverso famiglie/sottogeneri o il catalogo degli autori.
- **`L02-A25` resta deliberatamente escluso dalla vista di appartenenza al Ballet d'action**: il suo predicato storico `sviluppa_o_illumina` è una comparazione redazionale. Resta nel database originale e può essere presentato in una futura vista esplicitamente comparativa.

**Commit HTML:** [d81024f](https://github.com/SkenderAle/github-pages/commit/d81024fbc1cf5ffe426e3850fd6b00ff1499fac2).

### Gate di regressione: aggiornamento delle aspettative storiche
Sono state aggiunte asserzioni opera-specifiche per i tre nuovi recuperi e la loro integrità, oltre al blocco dell'assegnazione forte `L02-A25`. Un'esecuzione logica della batteria ha inoltre segnalato **due aspettative numeriche obsolete** (non regressioni nei dati):
- *Il flauto magico* presenta ora **7 nodi** e non 6 perché è già stato integrato il raccordo documentato a Opera.
- Opera buffa comprende già *Le nozze di Figaro* **e** *Il barbiere di Siviglia* di Rossini, non soltanto *Figaro*. Il percorso Mozart → Opera buffa conserva invece soltanto *Figaro*.

Le due asserzioni sono state aggiornate senza modificare builder, crosswalk o database.

**Commit test nuove asserzioni:** [610fc57](https://github.com/SkenderAle/github-pages/commit/610fc5749353f89c6d17c67b3e5b9f3d6c521a72).  
**Commit allineamento aspettative:** [fedd332](https://github.com/SkenderAle/github-pages/commit/fedd3325d0668f20cc88feb362482869aac3ef72).

### Esito effettivo del controllo integrale V8
È stato valutato **l'intero corpo** di `TEST_GATE_RADICATO_POST_UNIFICAZIONE_2026-11-18.mjs` in V8, con letture virtualizzate dagli stessi **17 blob reali**, proiezione estratta dall'HTML effettivo, e adattatore JavaScript per i metodi `assert.equal`, `assert.ok`, `assert.deepEqual` e `assert.match`.

**Risultato: 170 asserzioni superate** dopo l'aggiornamento delle due aspettative; `PASS_LOGICAL_V8_FULL_TEST_ON_REAL_DATA`.

| Misura | Esito |
|---|---:|
| Sorgenti effettive | 17 |
| Nodi | 2.897 |
| Archi | 8.743 |
| Schede Flaminio | 500 |
| Archi orfani | 0 |
| ID archi duplicati | 0 |
| Radici genere/forma ripercorse | 87 |
| Archi originali diretti ancora non mostrati nelle proiezioni di genere | 1, il **confronto** `L02-A25` intenzionalmente escluso |

**Limiti del gate:** il test è stato effettivamente esercitato nella versione adattata V8; non equivale al comando `node` in un clone del repository, all'intera batteria degli altri otto harness o a un collaudo browser/DOM/WebGL/Android.

### Prossimo gate proposto
Esaminare gli archi originali oscurati di **altre categorie** (persone, concetti, capitoli, parti/versioni, relazioni di contesto) distinguendo appartenenza, esempio, confronto, influenza, funzione e fonte. Il confronto `L02-A25` potrà essere esposto in una lente separata o nella scheda «relazioni contestuali», ma non promosso a sottogenere certificato per effetto della visualizzazione.

**Stato:** Lotto 1 OPEN (audit ontologico e collaudo UI); Lotto 2 BLOCKED; grafi di produzione invariati.
