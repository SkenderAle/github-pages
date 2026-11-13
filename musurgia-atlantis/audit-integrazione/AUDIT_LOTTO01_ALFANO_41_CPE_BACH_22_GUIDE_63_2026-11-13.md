# Lotto Flaminio 01 — Alfano 41 + C. P. E. Bach 22: 63 guide verificate (13-11-2026)

**Stato**: 63/63 righe fonte e guide controllate; 0/63 identità promosse nel grafo canonico; nessun test grafico reale (Canvas/WebGL/Android). Le 63 guide non equivalgono necessariamente a 63 opere autonome. File sorgente audit: `CROSSWALK_PREAUDIT_LOTTO01_ALFANO_41_CPE_BACH_22_2026-11-13.json`. Nessuna modifica a `musurgia-atlantis/grafo.json` o `index.html`.

## Risultati Alfano (41 guide)

**Criticità di identificazione**: la numerazione del catalogo Alfano su Flaminio è redazionale e non costituisce catalogo tematico ufficiale ([catalogo fonte](https://www.flaminioonline.it/Biografie/Alfano-catalogo.html)). Tre *Nuove liriche tagoriane* (1935; n.57) e Cinque *nuove liriche tagoriane* (1948; n.73) sono raccolte distinte. L'orchestrazione (1936; n.60) riguarda il ciclo del 1935. Cicli da rappresentare con relazioni `contiene` e numeri dei singoli membri, non opere-ciclo duplicate per ogni riga. Le versioni orchestrali del 1930/1936/1937/1948 vanno collegate alle originali con arco `orchestrazione_di`. *Giorno per giorno* (1941; n.63) è arrangiamento strumentale da Tre liriche n.3 (1928; n.42). La versione 1951 di *Sakuntala* non coincide con l'opera del 1921: tenere `versione_di`; l'estratto orchestrale Danza e finale non è l'opera intera.

**Anomalie guida**: intestazione HTML della pagina di *Dormiveglia* sbagliata (dice *I tuoi occhi*, H1 invece *Dormiveglia*); sezione testo di *Scrivimi, amor mio* porta erroneamente intestazione *Antica ninna-nanna partenopea*. Fonte *Una danza* presenta 1948 nei metadati e 1950 nella nota; *Suite romantica* 1909/1907. Non normalizzare la data senza nuova verifica.

### Elenco Alfano

| R. Excel | Titolo nella fonte | Proposta tipologia/collezione | Guida |
|---:|---|---|---|
| 575 | Danza e finale da Sakuntala | orchestral_excerpt_of_opera | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Sakuntala35.html) |
| 576 | Divertimento per orchestra ridotta e pianoforte obbligato | divertimento_orchestra_con_pianoforte | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Divertimento56.html) |
| 577 | Due Intermezzi per archi | arrangement_collection_for_strings | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Intermezzi47.html) |
| 579 | Prima Sinfonia in mi maggiore in quattro tempi | symphony | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Sinfonia25.html) |
| 581 | Seconda Sinfonia in do maggiore | symphony | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Sinfonia49.html) |
| 584 | Suite romantica (Poema italico) | orchestral_suite | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Suite23.html) |
| 585 | Una danza per orchestra | orchestral_dance | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Danza72.html) |
| 606 | 1. Dormiveglia | song_member | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Dormiveglia32-1.html) |
| 608 | 1. Lungo la via del mare... | song_with_orchestration | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Lungo661.html) |
| 609 | 1. Mamma, il giovine principe | song_with_orchestration | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Mamma301.html) |
| 612 | 1. Perché allo spuntar del giorno... | song_member_with_orchestral_edition | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Giorno421.html) |
| 614 | 1. Si addensano le nubi... | Sette liriche / n. 1 | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Addensano701.html) |
| 616 | 1. Sì, lo so... | Cinque nuove liriche tagoriane / n. 1 | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Siloso73-1.html) |
| 618 | 2. Cogli, prendi questo fiorellino | Cinque nuove liriche tagoriane / n. 2 | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Cogli73-2.html) |
| 619 | 2. Egli mormorò: amor mio | Tre poemi di Tagore / n. 2 | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Mormoro30-2.html) |
| 620 | 2. Finisci l'ultimo canto... | Tre liriche di Tagore / n. 2 | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Finisci422.html) |
| 621 | 2. I miei piedi son stanchi... | Tre liriche per canto e pianoforte / n. 2 | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Piedi662.html) |
| 622 | 2. I tuoi occhi | Sei liriche di autori diversi / n. 2 | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Occhi32-2.html) |
| 623 | 2. Il giorno non è più | Due liriche / n. 2 | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Preludio75-2.html) |
| 627 | 2. Venne e mi sedette accanto... | Sette liriche / n. 2 | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Venne702.html) |
| 628 | 3. Al chiarore della mattina... | Sei liriche di autori diversi / n. 3 | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Mattina323.html) |
| 629 | 3. Giorno per giorno... | Tre liriche di Tagore / n. 3 | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Giorno42-3.html) |
| 630 | 3. Parlami, amor mio | Tre poemi di Tagore / n. 3 | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Parlami30-3.html) |
| 631 | 3. Preghiera alla Madonna | Tre nuovi poemi / n. 3 | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Madonna613.html) |
| 633 | 3. Scendesti dal tuo trono... | Sette liriche / n. 3 | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Scendesti703.html) |
| 634 | 3. Scrivimi, amor mio... | Tre liriche per canto e pianoforte / n. 3 | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Scrivimi663.html) |
| 636 | 4. Colsi il tuo fiore, o mondo! | Cinque nuove liriche tagoriane / n. 4 | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Colsi73-4.html) |
| 638 | 4. Perché piangi? | Sei liriche di autori diversi / n. 4 | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Piangi324.html) |
| 639 | 4. Se taci... | Sette liriche / n. 4 | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Taci704.html) |
| 642 | 5. Non so... | Sette liriche / n. 5 | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Nonso705.html) |
| 645 | 6. Non partire, amor mio... | Sei liriche di autori diversi / n. 6 | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Partire326.html) |
| 647 | Antica ninna-nanna partenopea | standalone_vocal_song | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Antica58.html) |
| 653 | Felicità | standalone_vocal_song | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Felicita27.html) |
| 654 | Luce | standalone_vocal_orchestral_song | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Luce74.html) |
| 656 | Nuove liriche tagoriane | song_cycle_3_members | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Liriche57.html) |
| 667 | È giunto il nostro ultimo autunno | standalone_vocal_song | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Autunno65.html) |
| 668 | Cyrano de Bergerac | opera_4_acts | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Cyrano55.html) |
| 673 | Il principe Zilah | opera_4_acts | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Zilah22.html) |
| 678 | Madonna Imperia | opera_1_act | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Imperia39.html) |
| 680 | Risurrezione | opera_4_acts | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Risurrezione21.html) |
| 681 | Sakuntala | opera_revised_version | [Flaminio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Sakuntala77.html) |

## Risultati C. P. E. Bach (22 guide)

**Identità catal.**: conservare entrambi i numeri H e Wq; non usare la sola tonalità né un numero abbreviato. H417: intestazione della guida indica erroneamente **Wq13**; il testo sottostante e il [catalogo dell'edizione critica CPEB:CW](https://cpebach.org/offprints) confermano **Wq14**, mentre Wq13 è H416. Non correggere silenziosamente il testo storico della pagina. Versioni di concerti H432/Wq170 ← H430/Wq26, H436/Wq171 ← H434/Wq28, H445/Wq169 ← H444/Wq34; precedenti H438/Wq168 e H439/Wq172 ← H437/Wq29. H484.1/Wq22 e H425/Wq22 richiedono direzione cronologica sospesa. H657/Wq182/1 e H666/Wq183/4 hanno entrambi la tonalità sol maggiore, ma sono sinfonie diverse, la seconda orchestrata anche per fiati. La Sonata H563/Wq139 è per arpa. Le Fantasie H284/H300 e le Variazioni H263 NON sono sonate.

### Elenco C. P. E. Bach

| R. Excel | Titolo nella fonte | H / Wq (da guida) | Guida |
|---:|---|---|---|
| 894 | Duetto in mi minore | H 598 / Wq 140 | [Flaminio](https://www.flaminioonline.it/Guide/BachC/Bachc-Duetto598.html) |
| 1097 | Concerto in do maggiore per clavicembalo e archi | H 423 / Wq 20 | [Flaminio](https://www.flaminioonline.it/Guide/BachC/Bachc-Concerto423.html) |
| 1117 | Concerto in la maggiore per flauto traverso e archi | H 438 / Wq 168 | [Flaminio](https://www.flaminioonline.it/Guide/BachC/Bachc-Concerto438.html) |
| 1118 | Concerto in la maggiore per violoncello e archi | H 439 / Wq 172 | [Flaminio](https://www.flaminioonline.it/Guide/BachC/Bachc-Concerto439.html) |
| 1124 | Concerto in la minore per violoncello e archi | H 432 / Wq 170 | [Flaminio](https://www.flaminioonline.it/Guide/BachC/Bachc-Concerto432.html) |
| 1133 | Concerto in mi maggiore per clavicembalo e archi | H 417 / Wq 14 | [Flaminio](https://www.flaminioonline.it/Guide/BachC/Bachc-Concerto417.html) |
| 1143 | Concerto in re maggiore per clavicembalo e orchestra | H 472 / Wq 43/2 | [Flaminio](https://www.flaminioonline.it/Guide/BachC/Bachc-Concerto472.html) |
| 1149 | Concerto in re minore per clavicembalo e archi | H 427 / Wq 23 | [Flaminio](https://www.flaminioonline.it/Guide/BachC/Bachc-Concerto427.html) |
| 1152 | Concerto in re minore per flauto traverso e archi | H 484.1 / Wq 22 | [Flaminio](https://www.flaminioonline.it/Guide/BachC/Bachc-Concerto4841.html) |
| 1167 | Concerto in si bemolle maggiore per violoncello e archi | H 436 / Wq 171 | [Flaminio](https://www.flaminioonline.it/Guide/BachC/Bachc-Concerto436.html) |
| 1178 | Concerto in sol maggiore per flauto traverso e archi | H 445 / Wq 169 | [Flaminio](https://www.flaminioonline.it/Guide/BachC/Bachc-Concerto445.html) |
| 1197 | Sonatina in re maggiore per clavicembalo e orchestra | H 449 / Wq 96 | [Flaminio](https://www.flaminioonline.it/Guide/BachC/Bachc-Sonatina449.html) |
| 1219 | Magnificat in re maggiore | H 772 / Wq 215 | [Flaminio](https://www.flaminioonline.it/Guide/BachC/Bachc-Magnificat772.html) |
| 1306 | Fantasia in do maggiore | H 284 / Wq 59/6 | [Flaminio](https://www.flaminioonline.it/Guide/BachC/Bachc-Fantasia284.html) |
| 1309 | Fantasia in fa diesis minore | H 300 / Wq 67 | [Flaminio](https://www.flaminioonline.it/Guide/BachC/Bachc-Fantasia300.html) |
| 1651 | Variazioni in re minore su "Les folies d'Espagne" | H 263 / Wq 118/9 | [Flaminio](https://www.flaminioonline.it/Guide/BachC/Bachc-Espagne263.html) |
| 1996 | Sinfonia in mi minore | H 652 / Wq 177 | [Flaminio](https://www.flaminioonline.it/Guide/BachC/Bachc-Sinfonia652.html) |
| 2000 | Sinfonia in si bemolle maggiore | H 658 / Wq 182/2 | [Flaminio](https://www.flaminioonline.it/Guide/BachC/Bachc-Sinfonia658.html) |
| 2001 | Sinfonia in si minore | H 661 / Wq 182/5 | [Flaminio](https://www.flaminioonline.it/Guide/BachC/Bachc-Sinfonia661.html) |
| 2004 | Sinfonia in sol maggiore | H 657 / Wq 182/1 | [Flaminio](https://www.flaminioonline.it/Guide/BachC/Bachc-Sinfonia657.html) |
| 2005 | Sinfonia in sol maggiore | H 666 / Wq 183/4 | [Flaminio](https://www.flaminioonline.it/Guide/BachC/Bachc-Sinfonia666.html) |
| 2024 | Sonata in sol maggiore | H 563 / Wq 139 | [Flaminio](https://www.flaminioonline.it/Guide/BachC/Bachc-Sonata563.html) |

## Gate

1. Guida consultata = documento verificato; NON significa riconciliazione con i due grafi e gli staging storici.
2. Creare candidati di opera e versioni solo dopo verifica anti-duplicato con identità già esistenti, link e anchor: usare soprattitoli di collezione e numeri H/Wq, NON stringhe brevi.
3. Se un'opera/ciclo ha parti non comprese nelle 7.412 guide, evitare l'importazione automatica di membri fuori lotto salvo distinta autorizzazione.
4. Il registro 500 righe conserva **133 candidate precedenti** fino al ricalcolo deduplicato: non dichiarare automaticamente 196/500.
5. **0 modifiche grafo canonico; Lotto01 OPEN, Lotto02 BLOCCATO.**
