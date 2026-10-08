# MUSURGIA MUNDI — Audit di profondità 01 · macroblocco di 100 compositori

**Data:** 8 ottobre 2026 · **Ramo:** `audit-produzione-correttivo-01` · **Baseline:** `5c4eea3d19b0bd7edeff719db4ee48228b090bf9`.
**Esito:** primo passaggio strutturale su **100 identità persistenti**, seguito da **23 integrazioni produttive con fonti specifiche**. **NON** è una verifica esaustiva di 100 cataloghi.
**Ramo `main` invariato:** nessuna integrazione/pubblicazione effettuata.

## Criterio di congelamento
I primi cento nodi di tipo `compositore` del grafo di partenza, ordinati lessicograficamente per ID persistente, non per posizione fisica nell'array. Identificativi e fotografia delle relazioni in `audit_profondita01_macro100_stato_20261008.json`.

## Dati strutturali iniziali e dopo l'integrazione
- Nodi complessivi: **860 → 860**; compositori: **438 → 438**.
- Archi complessivi: **1573 → 1596**.
- Archi `produzione`: **493 → 516**.
- Distribuzione dei generi produttivi nel macroblocco, prima: {"1":85,"2":12,"3":2,"6":1}.
- Distribuzione dopo il primo intervento puntuale: {"1":71,"2":20,"3":5,"4":3,"6":1}.
- **100/100** con almeno una produzione; non significa **100/100** profili completi.
- Relazioni specialistiche incidenti sul gruppo nel file `relazioni.json`: **377**, ripartite così: {"formazione":84,"influenze":74,"collaborazioni":76,"genealogie":57,"scuole":86}. Conteggio per archi distinti (una relazione fra due autori selezionati compare una sola volta), non somma della colonna per autore.
- Nessun arco o nodo relativo alle tre lenti dell'interfaccia modificato.

## Nuovi archi documentati
I collegamenti seguenti sono attribuzioni **opera → genere** con fonte diretta. Le fonti qui collegate dimostrano le produzioni, **non** automaticamente influenze o rapporti personali.

| # | Compositore | Nodo produttivo già esistente | Evidenza e precisazione | Fonte |
|---:|---|---|---|---|
| 1 | Aaron Copland | Sinfonia | Terza sinfonia (1944–1946), per orchestra; la Fanfare for the Common Man confluisce nel finale, ma il genere qui attestato è la sinfonia, non una nuova opera derivata. | [Catalogo/partitura](https://www.aaroncopland.com/works/third-symphony/) |
| 2 | Alban Berg | Quartetto | Lyrische Suite (1925–1926), sei movimenti per quartetto d'archi, distinta dall'orchestrazione di tre movimenti per archi. | [Catalogo/partitura](https://imslp.org/wiki/Lyrische_Suite_%28Berg%2C_Alban%29) |
| 3 | Albert Roussel | Sinfonia | Sinfonia n. 3 in sol minore op. 42 (1929–1930), per orchestra; l'attività sinfonica è distinta dal balletto Bacchus et Ariane già censito. | [Catalogo/partitura](https://imslp.org/wiki/Symphony_No.3_%28Roussel%2C_Albert%29) |
| 4 | Alessandro Scarlatti | Oratorio | Cain, overo Il primo omicidio (1707), oratorio, trasmesso anche in manoscritto autografo conservato nella raccolta De Bellis; distinto dalle opere teatrali già censite. | [Catalogo/partitura](https://imslp.org/wiki/Cain%2C_overo_Il_primo_omicidio_%28Scarlatti%2C_Alessandro%29) |
| 5 | Amy Beach | Concerto | Concerto per pianoforte in do diesis minore op. 45 (1899), per pianoforte solista e orchestra, eseguito nel 1900 con la compositrice al pianoforte. | [Catalogo/partitura](https://imslp.org/wiki/Piano_Concerto%2C_Op.45_%28Beach%2C_Amy_Marcy%29) |
| 6 | Anton Bruckner | Messa | Messa n. 3 in fa minore WAB 28 (1868, poi revisionata), per solisti, coro misto e orchestra; produzione liturgica distinta dal corpus sinfonico. | [Catalogo/partitura](https://imslp.org/wiki/Mass_No.3_in_F_minor%2C_WAB_28_%28Bruckner%2C_Anton%29) |
| 7 | Antonio Salieri | Concerto | Concerto in do maggiore per flauto, oboe e orchestra (1774), con tre movimenti, partitura distinta dalla produzione operistica. | [Catalogo/partitura](https://imslp.org/wiki/Concerto_for_Flute_and_Oboe_in_C_major_%28Salieri%2C_Antonio%29) |
| 8 | Antonín Dvořák | Opera / teatro musicale | Rusalka op. 114 B.203 (1900), fiaba lirica in tre atti su libretto di Jaroslav Kvapil, prima rappresentazione a Praga nel 1901. | [Catalogo/partitura](https://imslp.org/wiki/Rusalka%2C_Op.114_%28Dvo%C5%99%C3%A1k%2C_Anton%C3%ADn%29) |
| 9 | Arcangelo Corelli | Sonata | Dodici sonate per violino e basso continuo op. 5, pubblicate a Roma nel 1700; repertorio di sonate distinto dai concerti grossi op. 6. | [Catalogo/partitura](https://imslp.org/wiki/12_Violin_Sonatas%2C_Op.5_%28Corelli%2C_Arcangelo%29) |
| 10 | Béla Bartók | Opera / teatro musicale | Il castello del principe Barbablù (A kékszakállú herceg vára), op. 11 BB 62 (1911, revisioni successive), opera in un atto; fonte editoriale Boosey & Hawkes. | [Catalogo/partitura](https://www.boosey.com/cr/music/Bela-Bartok-Duke-Bluebeard-s-Castle/4462) |
| 11 | Béla Bartók | Musica per pianoforte | Mikrokosmos, ciclo di 153 pezzi originali per pianoforte in sei volumi con scopo anche didattico; le edizioni Boosey & Hawkes documentano il mezzo e il corpus. | [Catalogo/partitura](https://www.boosey.com/publications/sheet-music/Bartok-Bela-Mikrokosmos-Vol-1/3250) |
| 12 | Bedřich Smetana | Quartetto | Quartetto per archi n. 1 in mi minore JB 1:105 (1876), Z mého života / Dalla mia vita, per due violini, viola e violoncello. | [Catalogo/partitura](https://imslp.org/wiki/String_Quartet_No.1%2C_JB_1%3A105_%28Smetana%2C_Bed%C5%99ich%29) |
| 13 | Carl Philipp Emanuel Bach | Concerto | Concerto in re minore per tastiera e archi Wq 23, documentato nell'edizione critica C. P. E. Bach: The Complete Works, vol. III/9.7. | [Catalogo/partitura](https://www.cpebach.org/parts/III-9-7) |
| 14 | Carl Maria von Weber | Concerto | Concerto per clarinetto n. 1 in fa minore op. 73 J.114 (1811), per clarinetto solista e orchestra, distinto dal teatro musicale. | [Catalogo/partitura](https://imslp.org/wiki/Clarinet_Concerto%2C_Op.73_%28Weber%2C_Carl_Maria_von%29) |
| 15 | Clara Schumann | Musica da camera | Trio in sol minore op. 17 (1846), per violino, violoncello e pianoforte, composizione cameristica originale e non trascrizione delle Romanze. | [Catalogo/partitura](https://imslp.org/wiki/Piano_Trio_in_G_minor%2C_Op.17_%28Schumann%2C_Clara%29) |
| 16 | Claude Debussy | Quartetto | Quartetto in sol minore op. 10 (1892–1893), per due violini, viola e violoncello; distinto dal repertorio operistico e pianistico. | [Catalogo/partitura](https://imslp.org/wiki/String_Quartet_in_G_minor%2C_Op.10_%28Debussy%2C_Claude%29) |
| 17 | Claudio Monteverdi | Opera / teatro musicale | L'Orfeo SV 318 (1607), favola in musica con prologo e cinque atti, su libretto di Alessandro Striggio il giovane; prima a Mantova nel 1607. | [Catalogo/partitura](https://imslp.org/wiki/L%27Orfeo%2C_SV_318_%28Monteverdi%2C_Claudio%29) |
| 18 | Claudio Monteverdi | Musica sacra | Vespro della Beata Vergine SV 206, pubblicato nel 1610 con la raccolta sacra mariana; composizione vocale e strumentale sacra distinta dai madrigali e dal teatro. | [Catalogo/partitura](https://imslp.org/wiki/Vespro_della_Beata_Vergine%2C_SV_206_%28Monteverdi%2C_Claudio%29) |
| 19 | César Franck | Sonata | Sonata in la maggiore per violino e pianoforte (1886), CFF 123 / FWV 8, dedicata a Eugène Ysaÿe; non confondere le trascrizioni per altri strumenti con l'organico originale. | [Catalogo/partitura](https://imslp.org/wiki/Violin_Sonata_%28Franck%2C_C%C3%A9sar%29) |
| 20 | Charles Ives | Musica per pianoforte | Sonata per pianoforte n. 2 S.88, Concord, Mass., 1840–60, composta circa 1909–1915; organico base pianoforte, con strumenti aggiuntivi facoltativi indicati nella fonte. | [Catalogo/partitura](https://imslp.org/wiki/Piano_Sonata_No.2%2C_S.88_%28Ives%2C_Charles%29) |
| 21 | Charles Gounod | Messa | Messe solennelle de Sainte-Cécile, CG 56 (1855), per solisti, coro e orchestra; produzione sacra originale distinta dalle opere teatrali. | [Catalogo/partitura](https://imslp.org/wiki/Messe_solennelle_de_Sainte-C%C3%A9cile%2C_CG_56_%28Gounod%2C_Charles%29) |
| 22 | Benjamin Britten | Concerto | Concerto per violino op. 15 (1939, poi revisionato), per violino e orchestra; Boosey & Hawkes documenta partitura, organico e revisioni. | [Catalogo/partitura](https://www.boosey.com/cr/music/Benjamin-Britten-Violin-Concerto/6425) |
| 23 | Barbara Strozzi | Madrigale | Il primo libro de madrigali op. 1 (1644), per due a cinque voci con continuo, stampato a Venezia da Alessandro Vincenti; distinto dalle successive raccolte di cantate. | [Catalogo/partitura](https://imslp.org/wiki/Madrigali%2C_Op.1_%28Strozzi%2C_Barbara%29) |

## Inventario completo dei 100 musicisti
La colonna **relazioni** conta gli archi specialistici incidenti su ciascun autore; il valore non equivale a verifica critica delle fonti. Tutti i 100 profili restano **aperti** per un successivo controllo esaustivo.

| # | Identificativo persistente | Compositore | Prod. prima | Nuovi | Prod. dopo | Relazioni |
|---:|---|---|---:|---:|---:|---:|
| 01 | `compositore-aaron-copland` | Aaron Copland | 2 | +1 | 3 | 6 |
| 02 | `compositore-adam-de-la-halle` | Adam de la Halle | 1 | +0 | 1 | 3 |
| 03 | `compositore-adriano-willaert` | Adriano Willaert | 1 | +0 | 1 | 6 |
| 04 | `compositore-alban-berg` | Alban Berg | 2 | +1 | 3 | 6 |
| 05 | `compositore-albert-roussel` | Albert Roussel | 1 | +1 | 2 | 0 |
| 06 | `compositore-aleksandr-borodin` | Aleksandr Borodin | 1 | +0 | 1 | 5 |
| 07 | `compositore-aleksandr-dargomyzhsky` | Aleksandr Dargomyžskij | 1 | +0 | 1 | 0 |
| 08 | `compositore-aleksandr-skrjabin` | Aleksandr Skrjabin | 1 | +0 | 1 | 5 |
| 09 | `compositore-alessandro-marcello` | Alessandro Marcello | 1 | +0 | 1 | 3 |
| 10 | `compositore-alessandro-scarlatti` | Alessandro Scarlatti | 1 | +1 | 2 | 5 |
| 11 | `compositore-alexander-von-zemlinsky` | Alexander von Zemlinsky | 1 | +0 | 1 | 7 |
| 12 | `compositore-alfred-schnittke` | Alfred Schnittke | 1 | +0 | 1 | 0 |
| 13 | `compositore-alfredo-casella` | Alfredo Casella | 1 | +0 | 1 | 9 |
| 14 | `compositore-alma-mahler` | Alma Mahler | 1 | +0 | 1 | 0 |
| 15 | `compositore-ambroise-thomas` | Ambroise Thomas | 1 | +0 | 1 | 3 |
| 16 | `compositore-amilcare-ponchielli` | Amilcare Ponchielli | 1 | +0 | 1 | 4 |
| 17 | `compositore-amy-beach` | Amy Beach | 1 | +1 | 2 | 0 |
| 18 | `compositore-anatolij-ljadov` | Anatolij Ljadov | 1 | +0 | 1 | 4 |
| 19 | `compositore-andre-gedalge` | André Gedalge | 1 | +0 | 1 | 4 |
| 20 | `compositore-andrea-gabrieli` | Andrea Gabrieli | 1 | +0 | 1 | 7 |
| 21 | `compositore-anna-bon-di-venezia` | Anna Bon di Venezia | 1 | +0 | 1 | 0 |
| 22 | `compositore-anna-thorvaldsdottir` | Anna Thorvaldsdottir | 1 | +0 | 1 | 0 |
| 23 | `compositore-anton-bruckner` | Anton Bruckner | 1 | +1 | 2 | 7 |
| 24 | `compositore-anton-reicha` | Anton Reicha | 1 | +0 | 1 | 6 |
| 25 | `compositore-anton-rubinstein` | Anton Rubinstein | 1 | +0 | 1 | 3 |
| 26 | `compositore-anton-webern` | Anton Webern | 1 | +0 | 1 | 8 |
| 27 | `compositore-antonia-bembo` | Antonia Bembo | 2 | +0 | 2 | 0 |
| 28 | `compositore-antonin-dvorak` | Antonín Dvořák | 3 | +1 | 4 | 7 |
| 29 | `compositore-antonio-caldara` | Antonio Caldara | 1 | +0 | 1 | 6 |
| 30 | `compositore-antonio-cesti` | Antonio Cesti | 2 | +0 | 2 | 0 |
| 31 | `compositore-antonio-de-cabezon` | Antonio de Cabezón | 1 | +0 | 1 | 0 |
| 32 | `compositore-antonio-lotti` | Antonio Lotti | 1 | +0 | 1 | 5 |
| 33 | `compositore-antonio-sacchini` | Antonio Sacchini | 1 | +0 | 1 | 0 |
| 34 | `compositore-antonio-salieri` | Antonio Salieri | 1 | +1 | 2 | 7 |
| 35 | `compositore-antonio-sartorio` | Antonio Sartorio | 2 | +0 | 2 | 0 |
| 36 | `compositore-antonio-soler` | Antonio Soler | 1 | +0 | 1 | 3 |
| 37 | `compositore-antonio-vivaldi` | Antonio Vivaldi | 6 | +0 | 6 | 7 |
| 38 | `compositore-antonio-zacara-da-teramo` | Antonio Zacara da Teramo | 1 | +0 | 1 | 0 |
| 39 | `compositore-aram-chacaturjan` | Aram Chačaturjan | 1 | +0 | 1 | 0 |
| 40 | `compositore-arcangelo-corelli` | Arcangelo Corelli | 1 | +1 | 2 | 8 |
| 41 | `compositore-arnold-schonberg` | Arnold Schönberg | 1 | +0 | 1 | 16 |
| 42 | `compositore-arrigo-boito` | Arrigo Boito | 1 | +0 | 1 | 4 |
| 43 | `compositore-arthur-honegger` | Arthur Honegger | 1 | +0 | 1 | 6 |
| 44 | `compositore-arvo-part` | Arvo Pärt | 1 | +0 | 1 | 0 |
| 45 | `compositore-augusta-holmes` | Augusta Holmès | 1 | +0 | 1 | 0 |
| 46 | `compositore-baldassare-galuppi` | Baldassare Galuppi | 1 | +0 | 1 | 6 |
| 47 | `compositore-barbara-strozzi` | Barbara Strozzi | 1 | +1 | 2 | 4 |
| 48 | `compositore-barry-truax` | Barry Truax | 1 | +0 | 1 | 0 |
| 49 | `compositore-bartolomeo-tromboncino` | Bartolomeo Tromboncino | 1 | +0 | 1 | 4 |
| 50 | `compositore-bedrich-smetana` | Bedřich Smetana | 1 | +1 | 2 | 5 |
| 51 | `compositore-bela-bartok` | Béla Bartók | 2 | +2 | 4 | 14 |
| 52 | `compositore-benedetto-marcello` | Benedetto Marcello | 1 | +0 | 1 | 4 |
| 53 | `compositore-benjamin-britten` | Benjamin Britten | 1 | +1 | 2 | 15 |
| 54 | `compositore-bernardo-pasquini` | Bernardo Pasquini | 2 | +0 | 2 | 0 |
| 55 | `compositore-bernart-de-ventadorn` | Bernart de Ventadorn | 1 | +0 | 1 | 0 |
| 56 | `compositore-billy-strayhorn` | Billy Strayhorn | 1 | +0 | 1 | 4 |
| 57 | `compositore-bohuslav-martinu` | Bohuslav Martinů | 1 | +0 | 1 | 0 |
| 58 | `compositore-brian-ferneyhough` | Brian Ferneyhough | 1 | +0 | 1 | 0 |
| 59 | `compositore-bruno-maderna` | Bruno Maderna | 1 | +0 | 1 | 7 |
| 60 | `compositore-camille-saint-saens` | Camille Saint-Saëns | 2 | +0 | 2 | 9 |
| 61 | `compositore-camillo-sivori` | Camillo Sivori | 1 | +0 | 1 | 3 |
| 62 | `compositore-carl-czerny` | Carl Czerny | 1 | +0 | 1 | 4 |
| 63 | `compositore-carl-ditters-von-dittersdorf` | Carl Ditters von Dittersdorf | 1 | +0 | 1 | 6 |
| 64 | `compositore-carl-friedrich-zelter` | Carl Friedrich Zelter | 1 | +0 | 1 | 4 |
| 65 | `compositore-carl-maria-von-weber` | Carl Maria von Weber | 1 | +1 | 2 | 7 |
| 66 | `compositore-carl-nielsen` | Carl Nielsen | 1 | +0 | 1 | 0 |
| 67 | `compositore-carl-orff` | Carl Orff | 2 | +0 | 2 | 6 |
| 68 | `compositore-carl-philipp-emanuel-bach` | Carl Philipp Emanuel Bach | 1 | +1 | 2 | 7 |
| 69 | `compositore-carl-stamitz` | Carl Stamitz | 1 | +0 | 1 | 4 |
| 70 | `compositore-carlo-gesualdo` | Carlo Gesualdo | 1 | +0 | 1 | 5 |
| 71 | `compositore-carlo-pallavicino` | Carlo Pallavicino | 1 | +0 | 1 | 0 |
| 72 | `compositore-carlos-chavez` | Carlos Chávez | 1 | +0 | 1 | 0 |
| 73 | `compositore-caroline-shaw` | Caroline Shaw | 1 | +0 | 1 | 0 |
| 74 | `compositore-cecile-chaminade` | Cécile Chaminade | 1 | +0 | 1 | 0 |
| 75 | `compositore-cesar-franck` | César Franck | 2 | +1 | 3 | 4 |
| 76 | `compositore-cezar-cui` | Cezar Antonovič Cui | 1 | +0 | 1 | 4 |
| 77 | `compositore-charles-gounod` | Charles Gounod | 1 | +1 | 2 | 5 |
| 78 | `compositore-charles-hambitzer` | Charles Hambitzer | 1 | +0 | 1 | 2 |
| 79 | `compositore-charles-ives` | Charles Ives | 1 | +1 | 2 | 7 |
| 80 | `compositore-charles-koechlin` | Charles Koechlin | 1 | +0 | 1 | 4 |
| 81 | `compositore-charles-valentin-alkan` | Charles-Valentin Alkan | 1 | +0 | 1 | 0 |
| 82 | `compositore-christian-cannabich` | Christian Cannabich | 1 | +0 | 1 | 6 |
| 83 | `compositore-christian-gottlob-neefe` | Christian Gottlob Neefe | 2 | +0 | 2 | 4 |
| 84 | `compositore-christian-theodor-weinlig` | Christian Theodor Weinlig | 1 | +0 | 1 | 2 |
| 85 | `compositore-christian-wolff` | Christian Wolff | 1 | +0 | 1 | 0 |
| 86 | `compositore-christoph-willibald-gluck` | Christoph Willibald Gluck | 1 | +0 | 1 | 13 |
| 87 | `compositore-cipriano-de-rore` | Cipriano de Rore | 1 | +0 | 1 | 7 |
| 88 | `compositore-clara-schumann` | Clara Schumann | 3 | +1 | 4 | 5 |
| 89 | `compositore-claude-debussy` | Claude Debussy | 2 | +1 | 3 | 15 |
| 90 | `compositore-claude-le-jeune` | Claude Le Jeune | 1 | +0 | 1 | 0 |
| 91 | `compositore-claudio-merulo` | Claudio Merulo | 1 | +0 | 1 | 4 |
| 92 | `compositore-claudio-monteverdi` | Claudio Monteverdi | 1 | +2 | 3 | 15 |
| 93 | `compositore-clement-janequin` | Clément Janequin | 1 | +0 | 1 | 0 |
| 94 | `compositore-comtessa-de-dia` | Comtessa de Dia | 1 | +0 | 1 | 0 |
| 95 | `compositore-conlon-nancarrow` | Conlon Nancarrow | 1 | +0 | 1 | 0 |
| 96 | `compositore-costanzo-festa` | Costanzo Festa | 1 | +0 | 1 | 4 |
| 97 | `compositore-cristobal-de-morales` | Cristóbal de Morales | 1 | +0 | 1 | 4 |
| 98 | `compositore-daniel-francois-esprit-auber` | Daniel-François-Esprit Auber | 1 | +0 | 1 | 6 |
| 99 | `compositore-daphne-oram` | Daphne Oram | 1 | +0 | 1 | 0 |
| 100 | `compositore-darius-milhaud` | Darius Milhaud | 1 | +0 | 1 | 8 |

## Criticità e coda qualitativa
1. **Copertura ≠ completezza:** il fatto che una biografia contenga uno o più archi non permette di chiudere l'inventario dei suoi generi. Priorità ulteriore ai profili con una sola relazione e agli autori plurigenere.
2. **Semantica del nodo:** `genere-quartetto` indica una forma cameristica; `genere-musica-da-camera` un ambito più ampio. Questa differenza resta intenzionalmente provvisoria, in attesa della discussione sulle categorie alla fine del ciclo.
3. **Fonti preesistenti:** gli archi già marcati `documentato` non sono stati rivalidati automaticamente; serviranno verifiche individuali sull'URL e sull'opera associata. Le 377 relazioni specialistiche incidenti non sono 377 legami filologicamente ricontrollati in questo passaggio.
4. **Anomalie da conservare:** citazioni di opere non provano apprendimento diretto; trascrizioni, revisioni e opere con titoli omonimi richiedono note. Non si promuovono candidati dubbi a `documentato`.
5. **Lenti e motore:** nessuna modifica a JavaScript, colori, frecce, tassonomia visiva, coordinate o branch `main`; nessun nuovo nodo di genere creato.
6. **Fasi residue:** audit plurigenere completo dei 100 cataloghi, verifica storiografica dei 377 archi specialistici incidenti, verifica di istituzioni/luoghi, controllo accessibilità degli URL, avvio del gruppo successivo dopo checkpoint.

## Integrità applicata al commit
- Tutti i `source` e `target` dei nuovi archi corrispondono a nodi esistenti.
- Nessuna coppia `(kind, source, target)` duplicata nel grafo.
- Schema degli archi invariato: `kind=produzione`, `note`, `sources`, `status=documentato`, `audit_batch`.
- Database specialistico `relazioni.json` lasciato invariato: censito strutturalmente, non ampliato senza verifica storica.


---

## Secondo passaggio del macroblocco — 8 ottobre 2026

Continuazione del precedente checkpoint `a7221cb69f024b74de4394bb56939fdd77a5cbbc`, senza modificare il gruppo di 100 compositori. Aggiunti **31 archi produttivi** con opere e fonti direttamente pertinenti. Il totale dei collegamenti `produzione` del grafo passa da **516 a 547** (dal checkpoint iniziale 493 a 547); gli archi generali da **1.596 a 1627**. Nessun nodo nuovo, nessuna nuova relazione specialistica e nessuna modifica alle lenti o al branch pubblico.

Distribuzione di archi produttivi sui 100 musicisti dopo questo intervento: {"1":47,"2":39,"3":9,"4":3,"5":1,"6":1}. La copertura biografica completa resta in verifica, così come la revisione critica delle 377 relazioni specialistiche incidenti sui compositori del blocco.

### Nuove integrazioni
| # | Autore | Genere esistente | Riscontro | Fonte |
|---:|---|---|---|---|
| 1 | Adriano Willaert | Mottetto | Primo libro dei Motetti a cinque voci (1539), ventitré mottetti di Adriano Willaert: testimonianza di produzione mottettistica distinta dai madrigali. | [Catalogo o partitura](https://imslp.org/wiki/Motetti_a_5_voci%2C_Book_1_%28Willaert%2C_Adrian%29) |
| 2 | Aleksandr Borodin | Quartetto | Quartetto per archi n. 2 (1881), composizione in quattro movimenti per due violini, viola e violoncello, distinta dall'opera Il principe Igor. | [Catalogo o partitura](https://imslp.org/wiki/String_Quartet_No.2_%28Borodin%2C_Aleksandr%29) |
| 3 | Aleksandr Skrjabin | Concerto | Concerto per pianoforte e orchestra in fa diesis minore op. 20 (1896), in tre movimenti; distinto dalle sonate per pianoforte già censite. | [Catalogo o partitura](https://imslp.org/wiki/Piano_Concerto%2C_Op.20_%28Scriabin%2C_Aleksandr%29) |
| 4 | Alexander von Zemlinsky | Quartetto | Quartetto per archi n. 1 in la maggiore op. 4 (1896), per due violini, viola e violoncello, presente in partitura e parti dell'edizione originale. | [Catalogo o partitura](https://imslp.org/wiki/String_Quartet_No.1%2C_Op.4_%28Zemlinsky%2C_Alexander_von%29) |
| 5 | Alfredo Casella | Musica da camera | Sicilienne et burlesque op. 23 (1914 circa), composizione originale per flauto e pianoforte; la successiva versione per trio con pianoforte è un arrangiamento, non l'organico originale. | [Catalogo o partitura](https://imslp.org/wiki/Sicilienne_et_burlesque%2C_Op.23_%28Casella%2C_Alfredo%29) |
| 6 | Anatolij Ljadov | Musica per pianoforte | Etude et 3 Preludes op. 40, raccolta di quattro pezzi originali per pianoforte pubblicata nel 1897: repertorio pianistico distinto dai poemi per orchestra. | [Catalogo o partitura](https://imslp.org/wiki/4_Morceaux%2C_Op.40_%28Liadov%2C_Anatoly%29) |
| 7 | Andrea Gabrieli | Musica per organo | Intonazione del primo tono, pubblicata nel 1593, brano per organo: distinguere la destinazione originale dalle trascrizioni moderne per liuto e chitarra. | [Catalogo o partitura](https://imslp.org/wiki/Intonazione_del_primo_tono_%28Gabrieli%2C_Andrea%29) |
| 8 | Anna Thorvaldsdottir | Musica da camera | In the Light of Air (2014), composizione in quattro sezioni per ensemble da camera con componente luminosa facoltativa; diversa dall'orchestrale AERIALITY. | [Catalogo o partitura](https://www.annathorvalds.com/-inthelightofair) |
| 9 | Anton Bruckner | Musica sacra | Te Deum WAB 45, versione definitiva 1883–1884 per soli, coro e orchestra, con organo ad libitum; distinto dalle messe e dalle sinfonie, senza confonderlo con una messa dell'Ordinario. | [Catalogo o partitura](https://imslp.org/wiki/Te_Deum%2C_WAB_45_%28Bruckner%2C_Anton%29) |
| 10 | Anton Reicha | Sinfonia | Sinfonia in sol maggiore del 1808, documentata anche da manoscritto e parti per orchestra nella Bibliothèque nationale de France. | [Catalogo o partitura](https://imslp.org/wiki/Symphony_in_G_major_%28Reicha%2C_Anton%29) |
| 11 | Anton Rubinstein | Opera / teatro musicale | Il demone (Demon), opera fantastica in tre atti con prologo ed epilogo, composta nel 1871 e rappresentata nel 1875; non va confusa con l'attività concertistica. | [Catalogo o partitura](https://imslp.org/wiki/The_Demon_%28Rubinstein%2C_Anton%29) |
| 12 | Anton Webern | Musica strumentale | Sei pezzi per grande orchestra op. 6 (1909, revisione 1928), lavori sinfonici strumentali originali; distinguere la redazione del 1909 dalla successiva revisione. | [Catalogo o partitura](https://imslp.org/wiki/Six_Pieces_for_Large_Orchestra_Op.6_%28Webern%2C_Anton%29) |
| 13 | Antonio Caldara | Opera / teatro musicale | La clemenza di Tito (1734), opera seria in tre atti su libretto di Metastasio, rappresentata a Vienna: distinta dall'opera omonima di Mozart. I balletti presenti nella fonte non vanno attribuiti automaticamente a Caldara. | [Catalogo o partitura](https://imslp.org/wiki/La_clemenza_di_Tito_%28Caldara%2C_Antonio%29) |
| 14 | Antonio Lotti | Opera / teatro musicale | Teofane (1719), dramma per musica in tre atti con libretto di Stefano Benedetto Pallavicino, rappresentato alla corte di Dresda. | [Catalogo o partitura](https://imslp.org/wiki/Teofane_%28Lotti%2C_Antonio%29) |
| 15 | Antonio Salieri | Messa | Requiem in do minore AngSa 7 (1804), messa per i defunti per quattro solisti vocali, coro e orchestra, distinta dalla produzione teatrale e concertistica. | [Catalogo o partitura](https://imslp.org/wiki/Requiem_in_C_minor_%28Salieri%2C_Antonio%29) |
| 16 | Aram Chačaturjan | Concerto | Concerto per violino e orchestra in re minore (1940), catalogato dall'editore Boosey & Hawkes/Sikorski; il rapporto con David Oistrakh non implica attribuirgli la composizione dell'intero concerto. | [Catalogo o partitura](https://www.boosey.com/pages/cr/catalogue/cat_detail?=&langid=1&musicid=3465) |
| 17 | Arnold Schönberg | Quartetto | Quartetto per archi n. 4 op. 37 (1936), per due violini, viola e violoncello, opera autonoma distinta dal ciclo Pierrot lunaire. | [Catalogo o partitura](https://imslp.org/wiki/String_Quartet_No.4%2C_Op.37_%28Schoenberg%2C_Arnold%29) |
| 18 | Arvo Pärt | Musica sacra | Passio Domini nostri Jesu Christi secundum Joannem (1982), passione latina per solisti, coro misto, quartetto strumentale e organo; catalogo della fondazione del compositore. | [Catalogo o partitura](https://www.arvopart.ee/en/arvo-part/work/530/) |
| 19 | Baldassare Galuppi | Musica per tastiera | Sei sonate per clavicembalo op. 1, edizione Walsh (1756), raccolta originale per tastiera; le diverse numerazioni catalografiche delle sonate sono annotate nella fonte. | [Catalogo o partitura](https://imslp.org/wiki/6_Harpsichord_Sonatas%2C_Op.1_%28Galuppi%2C_Baldassare%29) |
| 20 | Bedřich Smetana | Poema sinfonico | Má vlast JB 1:112, ciclo di sei poemi sinfonici composti nel 1872–1879, tra cui Vltava; il singolo pezzo è parte del ciclo e non un'opera di altro genere. | [Catalogo o partitura](https://imslp.org/wiki/M%C3%A1_Vlast_%28Smetana%2C_Bed%C5%99ich%29) |
| 21 | Camille Saint-Saëns | Opera / teatro musicale | Samson et Dalila op. 47, opera in tre atti rappresentata nel 1877 a Weimar, non oratorio da classificare come produzione liturgica. | [Catalogo o partitura](https://imslp.org/wiki/Samson_et_Dalila%2C_Op.47_%28Saint-Sa%C3%ABns%2C_Camille%29) |
| 22 | Carl Philipp Emanuel Bach | Musica sacra | Magnificat Wq 215, versione berlinese per soli, coro e orchestra: edizione critica C. P. E. Bach: The Complete Works, serie V/1.1. | [Catalogo o partitura](https://cpebach.org/parts/V-1-1) |
| 23 | Carl Stamitz | Concerto | Concerto per clarinetto n. 1 in fa maggiore (circa 1777), per clarinetto solista e orchestra, distinto dalla produzione sinfonica di Mannheim. | [Catalogo o partitura](https://imslp.org/wiki/Clarinet_Concerto_No.1_in_F_major_%28Stamitz%2C_Carl_Philipp%29) |
| 24 | Carl Nielsen | Concerto | Concerto per clarinetto e orchestra op. 57 (1928), scritto per Aage Oxenvad; prima esecuzione a Copenaghen nell'ottobre 1928. | [Catalogo o partitura](https://imslp.org/wiki/Clarinet_Concerto%2C_Op.57_%28Nielsen%2C_Carl%29) |
| 25 | Caroline Shaw | Quartetto | Entr'acte (2011), per quartetto d'archi, prima esecuzione affidata al Brentano Quartet; la versione per orchestra d'archi del 2014 è un adattamento successivo. | [Catalogo o partitura](https://carolineshaw.com/products/entr-acte) |
| 26 | Carlo Gesualdo | Musica sacra | Responsoria et alia ad officium Hebdomadae Sanctae spectantia, ventisette responsori più altri due brani latini per sei voci, repertorio sacro distinto dai libri di madrigali. | [Catalogo o partitura](https://imslp.org/wiki/Responsoria%2C_et_alia_ad_officium_Hebdomad%C3%A6_Sanct%C3%A6_spectantia_%28Gesualdo%2C_Carlo%29) |
| 27 | Cécile Chaminade | Musica per pianoforte | Toccata in do minore op. 39 (1887), composizione originale per pianoforte, con prima edizione Enoch; diversa dal Concertino per flauto op. 107. | [Catalogo o partitura](https://imslp.org/wiki/Toccata%2C_Op.39_%28Chaminade%2C_C%C3%A9cile%29) |
| 28 | Cezar Antonovič Cui | Opera / teatro musicale | William Ratcliff, opera in tre atti (1861–1868) di Cezar' Kjui/César Cui, attestata nelle partiture vocali originali: distinta dal corpus di musica da camera. | [Catalogo o partitura](https://imslp.org/wiki/William_Ratcliff_%28Cui%2C_C%C3%A9sar%29) |
| 29 | Cipriano de Rore | Messa | Missa Praeter rerum seriem, messa parodia a sette voci su un mottetto di Josquin des Prez: rapporto di rielaborazione compositiva e non insegnamento diretto documentato. | [Catalogo o partitura](https://imslp.org/wiki/Missa_Praeter_rerum_seriem_%28Rore%2C_Cipriano_de%29) |
| 30 | Claude Debussy | Balletto | Jeux CD 133 (1912–1913), balletto in un atto per orchestra e danza, distinto dall'opera Pelléas et Mélisande e dai Préludes pianistici. | [Catalogo o partitura](https://imslp.org/wiki/Jeux_%28Debussy%2C_Claude%29) |
| 31 | Antonín Dvořák | Messa | Messa in re maggiore op. 86 B.153 (1887) originale per soli, coro e organo, successivamente orchestrata dal compositore come B.175 (1892): distinguere le due versioni autoriali. | [Catalogo o partitura](https://imslp.org/wiki/Mass_in_D_major%2C_Op.86_%28Dvo%C5%99%C3%A1k%2C_Anton%C3%ADn%29) |

**Avvertenze filologiche:** le opere identificate non provano automaticamente relazioni maestro-allievo o influssi. Le versioni e trascrizioni sono distinte negli esempi in cui necessario (Webern, Dvořák, Shaw, Debussy, Casella). La clemenza di Tito di Caldara non è l'omonima opera mozartiana; i balletti del manoscritto comprendono musica di Nicola Matteis junior. Il corpus sacro di Bruckner comprende opere distinte dalle messe. Il tag `documentato` delle relazioni preesistenti non è stato rivalidato globalmente. Le categorie verranno ridiscusse solo al termine degli audit.


---

## Audit specialistico relazionale del medesimo primo macroblocco — 8 ottobre 2026

Controllate strutturalmente **377 relazioni** incidenti sui 100 autori. Nessun estremo mancante, nessun ID duplicato, nessuna relazione senza fonte o nota. Migliorati i primi riferimenti bibliografici di **9 record** che rinviavano a voci enciclopediche troppo generiche, conservando le fonti anteriori come secondo riferimento. Segnalata una coppia di formazione potenzialmente ridondante (Anton Rubinstein → Pëtr Il'ič Čajkovskij), non fusa in assenza di un controllo completo delle due testimonianze. Per i dettagli e i passi successivi si veda `audit_relazionale01_macro100_qualita_20261008.md`. **Non** si considera convalidato filologicamente il complesso delle 377 relazioni.
