# Musurgia Mundi — Repertorio storico minimo: checkpoint cumulativo

**8 ottobre 2026**, ramo `audit-produzione-correttivo-01`. `main` invariato.

## Copertura attuale
- **332 figure obbligatorie distinte** (fra cui alcune persone storiche e teorici che non devono essere catalogati come compositori).
- **278 individuate**, **54 ancora da individuare** per nome o alias.
- **384 compositori**, **806 nodi complessivi**, **1465 archi** nel grafo.
- Queste sono verifiche di presenza nominale e produzione esemplificata: non provano completezza dei cataloghi e di tutte le influenze.

| Periodo | Individuati | Mancanti | Totale |
|---|---:|---:|---:|
| Medioevo | 22 | 0 | 22 |
| Rinascimento | 48 | 0 | 48 |
| Barocco | 61 | 0 | 61 |
| Classicismo | 32 | 0 | 32 |
| Romanticismo e tardo Romanticismo | 70 | 0 | 70 |
| Primo Novecento e avanguardie storiche | 33 | 18 | 51 |
| Secondo Novecento e contemporaneità | 22 | 36 | 58 |

## Periodi con copertura nominale minima conclusa
- **Medioevo 22/22**: 14 figure precedentemente assenti integrate; Gregorio Magno, Guido d'Arezzo e Franco di Colonia distinti come `persona`. Restano specifiche attribuzioni medievali musicali sospese (Philippe de Vitry, Guglielmo IX).
- **Rinascimento 48/48**: 11 compositori integrati con produzione attestata in almeno un genere.
- **Barocco 61/61**: 23 nuove identità, 1 alias riconciliato (Dieterich/Dietrich Buxtehude), con opera, musica sacra, concerto, strumenti e compositrici.
- **Classicismo 32/32**: 10 nuove schede, 10 nuove produzioni, 13 appartenenze; sovrapposizioni Barocco/Classicismo storicamente dichiarate per W. F. Bach, Quantz e Hasse. Partiture individuate per Maria Theresia von Paradis, Anna Bon, Sirmen e Hélène de Montgeroult.
- **Romanticismo e tardo Romanticismo 70/70**: 20 nuove schede, 20 produzioni, 27 appartenenze; alcuni musicisti (Reger, Janáček, Sibelius, Nielsen, Smyth, Lili Boulanger, Alma Mahler) sono presenti anche in `novecento` senza duplicazione anagrafica.

## Cautele bibliografiche
- *Sicilienne* attribuita a Paradis è spuria e NON promossa a repertorio documentato. I *12 Lieder* (1786) sono invece attribuiti con partitura specifica.
- *Artaserse* di Hasse ≠ quello di Leonardo Vinci, pure nel 1730.
- Concerto, sinfonia e sonata devono essere distinti da riduzioni e arrangiamenti; *Symphonie pour piano seul* di Alkan è pianistica, e *Goyescas* di Granados nasce come ciclo pianistico prima della versione operistica.
- *Il convitato di pietra* di Dargomyžskij richiede menzione dei completatori e orchestratori, e *Una vita per lo zar* di Glinka ha una riscrittura ideologica post-rivoluzionaria del libretto.
- Il *Concertino* per flauto op. 107 di Chaminade è concertante; lo stesso titolo non implica forma del concerto di ampie dimensioni.
- La produzione delle compositrici ha valore proprio e non va dedotta dai legami matrimoniali o dalla carriera d'interprete.

## Stato del ciclo precedente
- Audit 201–300: 100 nomi esaminati, 97 con almeno una produzione documentata, 3 sospesi (Fritz Reiner, Johann Christoph Bach 1671–1721, Walter Klein).
- Audit 301–331: 31 nomi, 29 con produzione attestata, 2 sospesi (Philippe de Vitry e Guglielmo IX).
- Questo lavoro non conclude né sostituisce gli audit sulle produzioni multiple, sulla formazione, sulle scuole e sulle influenze. Le categorie e le **tre lenti** restano invariate fino alla revisione finale.

## Prossimo giro
- Primo Novecento: 18 nomi mancanti.
- Secondo Novecento e contemporaneità: 36 nomi mancanti.
- La coda di lavoro storica `audit_minimi_prossimi100_staging_20261008.json` registra **73 completati / 27 in sospeso**; altri 27 nominativi erano fuori dalla prima coda e non sono scartati.
- Inserire esclusivamente relazioni con opere, fonti e stati espliciti; controllare identità, alias e geografia prima del commit; non modificare `main` o le lenti.
