# Musurgia Mundi — Macroblocco correttivo 03 · 50 compositori

**Ramo:** `audit-produzione-correttivo-01` · **Data:** 8 ottobre 2026

## Esito, senza confondere integrazione e validazione

- 50 autori (posizioni 101–150 del grafo) considerati e dotati di un **collegamento produttivo provvisorio** ciascuno.
- 50 nuovi archi `produzione` aggiunti sul solo ramo correttivo.
- 8 nuove categorie generiche, **provvisorie**, che dovranno essere confrontate nell'audit architetturale futuro con i nodi già esistenti.
- **2 su 50** relazioni confermate da fonti puntuali nel corso di questo macroblocco (Brahms e Liszt). **48 su 50** ancora con stato `da_verificare`.
- Le 50 seconde attribuzioni proposte sono nella scheda staging, **non** inserite, perché non tutte le corrispondenze opera→genere sono affidabili.
- Il controllo della forma del grafo conferma **zero archi con endpoint mancanti**.

**Cautela critica:** alcuni URL derivati dalle relazioni specialistiche descrivono un rapporto personale o stilistico, non attestano necessariamente la produzione indicata. Non considerarli fonti sufficienti finché il contenuto non è controllato per quel genere. Il campo `status: da_verificare` è intenzionale. Questo macroblocco è un avanzamento operativo, non la chiusura bibliografica dei 50 autori.

| # | Compositore | Primo ambito collegato | Stato |
|---:|---|---|---|
| 101 | Clara Schumann | Concerto | da_verificare |
| 102 | Johannes Brahms | Sinfonia | documentato |
| 103 | Richard Wagner | Opera / teatro musicale | da_verificare |
| 104 | Franz Liszt | Sinfonia | documentato |
| 105 | Carl Maria von Weber | Opera / teatro musicale | da_verificare |
| 106 | Richard Strauss | Opera / teatro musicale | da_verificare |
| 107 | Hugo Wolf | Lied | da_verificare |
| 108 | Hector Berlioz | Sinfonia | da_verificare |
| 109 | Frédéric Chopin | Sonata | da_verificare |
| 110 | Camille Saint-Saëns | Sinfonia | da_verificare |
| 111 | Georges Bizet | Opera / teatro musicale | da_verificare |
| 112 | Gabriel Fauré | Musica sacra | da_verificare |
| 113 | César Franck | Sinfonia | da_verificare |
| 114 | Pauline Viardot | Opera / teatro musicale | da_verificare |
| 115 | Louise Farrenc | Sinfonia | da_verificare |
| 116 | Pëtr Il'ič Čajkovskij | Sinfonia | da_verificare |
| 117 | Modest Musorgskij | Opera / teatro musicale | da_verificare |
| 118 | Nikolaj Rimskij-Korsakov | Opera / teatro musicale | da_verificare |
| 119 | Aleksandr Borodin | Opera / teatro musicale | da_verificare |
| 120 | Milij Balakirev | Musica per pianoforte | da_verificare |
| 121 | Antonín Dvořák | Sinfonia | da_verificare |
| 122 | Bedřich Smetana | Opera / teatro musicale | da_verificare |
| 123 | Gustav Mahler | Sinfonia | da_verificare |
| 124 | Anton Bruckner | Sinfonia | da_verificare |
| 125 | Alexander von Zemlinsky | Opera / teatro musicale | da_verificare |
| 126 | Claude Debussy | Opera / teatro musicale | da_verificare |
| 127 | Maurice Ravel | Balletto | da_verificare |
| 128 | Erik Satie | Musica per pianoforte | da_verificare |
| 129 | Olivier Messiaen | Musica per organo | da_verificare |
| 130 | Pierre Boulez | Musica elettronica | da_verificare |
| 131 | Francis Poulenc | Musica sacra | da_verificare |
| 132 | Darius Milhaud | Opera / teatro musicale | da_verificare |
| 133 | Arthur Honegger | Sinfonia | da_verificare |
| 134 | Igor Stravinskij | Balletto | da_verificare |
| 135 | Sergej Prokof'ev | Sinfonia | da_verificare |
| 136 | Dmitrij Šostakovič | Sinfonia | da_verificare |
| 137 | Aleksandr Skrjabin | Musica per pianoforte | da_verificare |
| 138 | Sergej Rachmaninov | Concerto | da_verificare |
| 139 | Arnold Schönberg | Musica da camera | da_verificare |
| 140 | Alban Berg | Opera / teatro musicale | da_verificare |
| 141 | Anton Webern | Musica da camera | da_verificare |
| 142 | Ferruccio Busoni | Opera / teatro musicale | da_verificare |
| 143 | Ottorino Respighi | Poema sinfonico | da_verificare |
| 144 | Alfredo Casella | Sinfonia | da_verificare |
| 145 | Gian Francesco Malipiero | Sinfonia | da_verificare |
| 146 | Luigi Russolo | Sperimentazione sonora | da_verificare |
| 147 | Luigi Nono | Musica elettronica | da_verificare |
| 148 | Luciano Berio | Musica elettronica | da_verificare |
| 149 | Bruno Maderna | Musica elettronica | da_verificare |
| 150 | Goffredo Petrassi | Concerto | da_verificare |

## Revisioni da compiere

1. Riesaminare singolarmente le 48 attribuzioni provvisorie, sostituendo le fonti indirette con fonti di catalogo per il genere specifico.
2. Verificare le seconde attribuzioni proposte nel file `correttivo03_macroblocco50_staging.json` e correggere le dissonanze fra etichette e singole opere (per esempio alcune suite orchestrali non sono sinfonie e alcuni lavori solistici non sono musica da camera).
3. Non modificare le lenti e non fondere nodi semantici finché non termini il ciclo di audit, come deciso.
