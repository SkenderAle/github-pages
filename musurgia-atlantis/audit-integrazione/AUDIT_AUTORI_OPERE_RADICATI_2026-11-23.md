# Audit: 16 attribuzioni musicali recuperate nella navigazione radicata
## Musurgia Mundi – Atlantis – Flaminio · 23 novembre 2026

**Repository:** `SkenderAle/github-pages` · branch `main`. **Interventi solo in** `musurgia-atlantis/audit-integrazione/`. **Grafi pubblici invariati; Lotto 2 Flaminio BLOCCATO.**

### Motivazione
Il gate del 21 novembre aveva identificato, tra **531 relazioni verso persone oscurate nelle viste specializzate**, **382** collegamenti Mundi autore–genere e **149** altri collegamenti. Di questi ultimi, **16** erano rapporti fra compositori e composizioni esistenti nel grafo originale Atlantis: tutti con ID distinti, predicati specifici, URL fonte, `historical_verified_independently=true` e uno stato `confermato_da_*`.

Le attestazioni bibliografiche erano **già registrate nel progetto**. Non sono state oggi riconvalidate una per una su siti esterni: il presente gate controlla in modo riproducibile la loro corretta integrazione nella navigazione, non rilascia nuove certificazioni storiche.

### Collegamenti esistenti recuperati

| ID fonte | Opera o ciclo | Compositore della musica | Predicato conservato |
|---|---|---|---|
| `L03-A40` | An die ferne Geliebte, op. 98 | Ludwig van Beethoven | `compone_ciclo_di_lieder` |
| `L05-A048` | Boléro (Ravel, 1928) | Maurice Ravel | `compone` |
| `L02-A01` | Don Juan ou Le Festin de pierre (1761) | Christoph Willibald Gluck | `compone_musica_per` |
| `L03-A28` | Egmont, musiche di scena op. 84 | Ludwig van Beethoven | `compone_musiche_per` |
| `E0754` | Il Canto degli Italiani | Michele Novaro | `compone_la_musica_di` |
| `L05-A051` | La Valse (Ravel, 1920) | Maurice Ravel | `compone` |
| `E0699` | Messe de Nostre Dame | Guillaume de Machaut | `compone_la_musica_di` |
| `E0706` | Missa Papae Marcelli | Giovanni Pierluigi da Palestrina | `compone_la_musica_di` |
| `E0717` | Passione secondo Matteo | Johann Sebastian Bach | `compone_la_musica_di` |
| `L165-A01` | Quis dabit capiti meo aquam? (Isaac, 1492) | Heinrich Isaac | `compone_mottetto_funebre_nel_1492` |
| `L169-A01` | Messiah, HWV 56 (Händel, 1741; prima 1742) | Georg Friedrich Händel | `compone_oratorio_nel_1741` |
| `L174-A01` | Officium defunctorum (Victoria, ed. 1605) | Tomás Luis de Victoria | `compone_e_pubblica_officium_1605` |
| `L181-A01` | Die Schöpfung / La Creazione (Haydn, 1798) | Joseph Haydn | `compone_oratorio_die_schoepfung` |
| `L182-A01` | Missa solemnis in re maggiore, op. 123 (Beethoven, 1819–1823) | Ludwig van Beethoven | `compone_missa_solemnis_1819_1823` |
| `L183-A01` | Erlkönig, D 328, op. 1 (Schubert, 1815; stampa 1821) | Franz Schubert | `compone_lied_erlkoenig_d328` |
| `L205-A01` | War Requiem, op. 66 (Britten, prima 1962) | Benjamin Britten | `compone_war_requiem_op66_per_coventry` |

Nessun nuovo nodo, arco o redirect d'identità è stato aggiunto al database. Le sedici relazioni già presenti vengono solo riutilizzate come collegamenti visibili nella rispettiva vista radicata.

### Correzione HTML nello staging
Nel [visualizzatore di prova](VISTA_DB_FEDERATO_LOTTO01_2026-11-15.html) sono state introdotte la mappa chiusa `verifiedRootWorkComposerRules` e la funzione `withVerifiedRootWorkComposers`, applicata **soltanto dopo** che una proiezione specializzata ha selezionato un'opera come radice.

La riattivazione esige simultaneamente: stesso ID fonte, stessi estremi, medesimo predicato, verifica storica già registrata, URL di fonte, categoria Persone attiva, almeno una lente attiva e profondità di almeno un passaggio. Il clic sul compositore conserva l'arco in un percorso di ritorno alla partitura ma **non estende il grafo alle altre opere dello stesso autore né ai vicini del genere**. Il builder originale non cambia.

### Cinque falsi collegamenti autoriali impediti
I test proteggono esplicitamente:
- **Alois Jeitteles**: poeta di *An die ferne Geliebte*, non autore della musica.
- **Gasparo Angiolini**: coreografo di *Don Juan*, non compositore.
- **Ida Rubinstein**: committente di *Boléro*, non compositrice.
- **Goffredo Mameli**: autore del testo del *Canto degli Italiani*, non della musica di Novaro.
- **Maria d'Austria**: figura commemorata nell'*Officium defunctorum*, non autrice della composizione.

Queste relazioni restano consultabili con la loro natura originale e non sono promosse a rapporti di paternità musicale.

### Risultato dei test reali eseguiti in JavaScript V8
Sono state caricate **17 sorgenti JSON effettive** del ramo `main`, ricostruito il builder e valutato il codice reale della vista HTML, eseguendo gli harness con I/O virtualizzato.

| Test | Controlli superati |
|---|---:|
| [Nuovo harness autore–opera](TEST_AUTORI_OPERE_RADICATI_2026-11-23.mjs) | **321** |
| [Regressione radicata storica](TEST_GATE_RADICATO_POST_UNIFICAZIONE_2026-11-18.mjs) | **211** |
| [Riconciliazione persone aggiornata](TEST_RICONCILIAZIONE_RELAZIONI_PERSONE_2026-11-21.mjs) | **700** |
| **Totale delle asserzioni V8 di questo gate** | **1.232** |

Esiti specifici: **16/16** archi recuperati una sola volta, **16/16** percorsi conservati dopo il clic sull'autore, **16/16** filtri Persone rispettati e **5/5** casi negativi superati.

**Il Node CLI con filesystem locale non è stato lanciato; DOM/browser/WebGL/Canvas/Android non sono stati collaudati.** I test V8 eseguiti sulle funzioni reali non equivalgono a questi gate ancora aperti.

### Prima e dopo

| Misura sulle 169 radici specializzate | Prima | Dopo |
|---|---:|---:|
| Occorrenze radice–arco originali fuori dalla vista | 704 | **688** |
| Relazioni verso persone fuori dalla vista | 531 | **515** |
| Relazioni verso opere fuori dalla vista | 4 | **4** |
| Collegamenti Mundi autore–genere che restano in archivio | 382 | **382** |
| Nodi nel database unificato | 2.897 | **2.897** |
| Archi nel database unificato | 8.743 | **8.743** |
| Schede Flaminio Lotto 1 | 500 | **500** |

Delle 515 relazioni persona ancora archiviate, **382 sono le relazioni Mundi precedenti** e **133** appartengono ad altre famiglie: pratiche di genere, ruoli non compositivi, contesti storici o accessi derivati. Nessuna promozione indiscriminata.

### Tracciabilità su main
- [Commit della vista HTML di staging](https://github.com/SkenderAle/github-pages/commit/2cd9ceada2d9980657d8bdc57f539369fc243286).
- [Registro delle 16 attribuzioni e dei risultati dei test](REGRESSIONE_AUTORI_OPERE_RADICATI_2026-11-23.json).
- [Nuovo harness](TEST_AUTORI_OPERE_RADICATI_2026-11-23.mjs).
- [Harness storico 382↔531, aggiornato ai conteggi 382↔515](TEST_RICONCILIAZIONE_RELAZIONI_PERSONE_2026-11-21.mjs). Il JSON storico del 21/11 resta intatto.

**Prossimo gate:** collaudo grafico desktop/Android e batteria Node CLI locale, poi audit selettivo dei **133** collegamenti persona e dei quattro rimandi verso opere che restano nell'archivio.

**Stato:** correzione autorialità **PASS logico V8**; browser/Android/CLI **OPEN**; Lotto 1 **OPEN**, Lotto 2 Flaminio **BLOCKED**, produzione invariata.
