# Musurgia Atlantis — Fase 2M · Lotto 06
## Revisioni semantiche e riscontri catalografici, baseline globale delle ricerche

**9 novembre 2026 · `SkenderAle/github-pages` · `main` · staging `audit-integrazione/` soltanto.**

### Perimetro e risultati effettivamente conseguiti
Il Lotto 06 riprende il **Lotto 05 già completato**, senza ripetere l'inventario dei 344 nodi. Sono stati verificati i **tre casi ontologicamente lasciati aperti**, riconsiderati **21/21 indizi biografici** mediante confronto con fonti esterne quando disponibili, confrontate **cinque potenziali identità o relazioni opera/caso** con il grafo pubblico Atlantis, e create **853 baseline di ricerca radicata** (344 concetti + 509 persone) sull'indice sorgente completo del Lotto 04. Il corpus non è stato fuso.

**Attenzione al significato delle parole:** «semantica riesaminata» e «candidato con fonte» NON vogliono dire certificazione di una relazione pronta per la pubblicazione. I dati storici in `musurgia-atlantis/grafo.json`, `atlante3d/database/`, l'UI e le pagine non sono stati modificati. Tutti i **210 lotti storico-filologici** rimangono intatti. I **210** `taxonomy.class` assenti nell'originale restano assenti nell'originale; le macroclassi proposte sono esclusivamente documentazione di staging.

### 1. I tre casi ontologici risolti a livello di modello
- **`formes-fixes-francesi-trecento`** → `famiglia_forme`. Ballade, rondeau, virelai: forme poetico-musicali francesi distinte dalla chanson rinascimentale. Fonti: [1](https://www.treccani.it/enciclopedia/ars-nova/), [2](https://www.treccani.it/enciclopedia/l-ars-nova-francese-e-guillaume-de-machaut_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/). Gli 3 record relazionali incidenti non sono stati modificati.
- **`tecnica-tastiera-lugo-rossini-1802`** → `scheda_documentaria_biografica`. Lugo: Rossini e Malerbi; insegnamento di tastiera e basso continuo, non genere né ponte automatico. Fonti: [1](https://www.treccani.it/enciclopedia/giuseppe-malerbi_%28Dizionario-Biografico%29/), [2](https://www.treccani.it/enciclopedia/gioachino-antonio-rossini_%28Dizionario-Biografico%29/). Gli 2 record relazionali incidenti non sono stati modificati.
- **`famiglia-ciaccona-passacaglia`** → `famiglia_forme`. Ciaccona e passacaglia: forme variative con analogie e distinzioni non assolute, non una sola identità. Fonti: [1](https://www.treccani.it/enciclopedia/ciaccona/), [2](https://www.treccani.it/enciclopedia/passacaglia_%28Enciclopedia-Italiana%29/). Gli 5 record relazionali incidenti non sono stati modificati.

Questi tre casi vanno distinti da **genere generico**: una famiglia di forme non è una singola composizione, e la scheda Rossini–Malerbi documenta un rapporto formativo che può essere consultato ma non attraversato come hub per associare tutti i musicisti dell'ambiente.

### 2. Le 21 anomalie lessicali riconsiderate
- **14** indizi accompagnati da riscontro esterno di *una composizione o un corpus pertinente* ⇒ **candidature** da valutare, **zero** archi nuovi. Una prova di repertorio non convalida automaticamente tutte le relazioni/alias della scheda originale.
- **6** falsi indizi del contesto biografico ⇒ la frase **non** dimostra quell'attribuzione. Questo NON dimostra necessariamente che l'autore non abbia mai composto opere del genere.
- **1** questione semantica ancora aperta: **Morricone**, `Primo Concerto` del 1957 per orchestra, è censito in [IRCAM](https://medias.ircam.fr/fr/work/primo-concerto). Tuttavia il nodo storico `genere-concerto` è definito da un rapporto solista/gruppo con l'insieme; il solo titolo di un'opera orchestrale non autorizza il collegamento al genere secondo la definizione corrente.
- **0** delle 21 coppie presentava un rapporto diretto legacy nella matrice: l'integrazione non va nascosta come «semplice deduplica». Gli **eventuali** nuovi archi richiederanno un lotto successivo con predicato specifico, tipologia verificata, prova individuale e spiegazioni direzionali.

| N. | Compositore / persona | Ambito indagato | Esito | Opera/corpus richiamato | Fonte esterna |
|---:|---|---|---|---|---|
| 1 | Luigi Boccherini | Concerto | Candidato con fonte esterna; da verificare per import | Concerto per violoncello (Boccherini) | [Fonte](https://www.treccani.it/enciclopedia/luigi-boccherini_%28Dizionario-Biografico%29/) |
| 2 | Luzzasco Luzzaschi | Concerto | Falso indizio lessicale: non importare | — | — |
| 3 | Johann Jakob Froberger | Toccata | Candidato con fonte esterna; da verificare per import | Toccate di Froberger | [Fonte](https://www.treccani.it/enciclopedia/johann-jakob-froberger/) |
| 4 | Filippo Manfredi | Quartetto d’archi | Falso indizio lessicale: non importare | — | — |
| 5 | Giovanni Giuseppe Cambini | Messa | Falso indizio lessicale: non importare | — | — |
| 6 | Ennio Morricone | Concerto | Confine del genere da chiarire | Primo Concerto (1957) per orchestra, IRCAM | [Fonte](https://medias.ircam.fr/fr/work/primo-concerto) |
| 7 | Margaret Bonds | Concerto | Falso indizio lessicale: non importare | — | — |
| 8 | Walther von der Vogelweide | Cantata | Falso indizio lessicale: non importare | — | — |
| 9 | Nino Rota | Concerto | Candidato con fonte esterna; da verificare per import | Concerti di Nino Rota | [Fonte](https://ressources.ircam.fr/en/composer/nino-rota/worksByKind) |
| 10 | Erich Wolfgang Korngold | Concerto | Candidato con fonte esterna; da verificare per import | Concerto per violino op. 35 di Korngold | [Fonte](https://www.schott-music.com/en/concerto-in-d-major-no153319.html) |
| 11 | Samuel Barber | Concerto | Candidato con fonte esterna; da verificare per import | Concerto per violino op. 14 di Barber | [Fonte](https://juilliardstore.com/products/barber-violin-concerto-op-14-50337010) |
| 12 | Édouard Lalo | Concerto | Candidato con fonte esterna; da verificare per import | Concerto per violoncello in re minore di Lalo | [Fonte](https://www.barenreiter.co.uk/concerto-for-violoncello-in-d-minor-cello-piano.html) |
| 13 | Francesco Maria Veracini | Concerto | Candidato con fonte esterna; da verificare per import | Concerti di Francesco Maria Veracini | [Fonte](https://www.treccani.it/enciclopedia/francesco-maria-veracini/) |
| 14 | Johann Baptist Vanhal | Concerto | Candidato con fonte esterna; da verificare per import | Concerti di Vanhal: singole attribuzioni da verificare | [Fonte](https://www.treccani.it/enciclopedia/johann-baptist-wanhal_%28Enciclopedia-Italiana%29/) |
| 15 | Franz Anton Hoffmeister | Concerto | Candidato con fonte esterna; da verificare per import | Concerto per viola in re maggiore di Hoffmeister | [Fonte](https://imslp.org/wiki/Viola_Concerto_in_D_major_%28Hoffmeister%2C_Franz_Anton%29) |
| 16 | Mauro Giuliani | Sinfonia | Falso indizio lessicale: non importare | — | — |
| 17 | François-Adrien Boieldieu | Concerto | Candidato con fonte esterna; da verificare per import | Concerto per arpa in do maggiore di Boieldieu | [Fonte](https://catalogue.bnf.fr/ark:/12148/cb139087151) |
| 18 | Jeanine Tesori | Musical | Candidato con fonte esterna; da verificare per import | Fun Home, musica di Jeanine Tesori | [Fonte](https://www.concordtheatricals.com/p/58581/fun-home) |
| 19 | Luigi Rossi | Cantata | Candidato con fonte esterna; da verificare per import | Cantate di Luigi Rossi | [Fonte](https://www.treccani.it/enciclopedia/luigi-rossi_res-af426cde-a51d-11e7-adb0-00271042e8d9_%28Dizionario-Biografico%29/) |
| 20 | Marco Marazzoli | Oratorio | Candidato con fonte esterna; da verificare per import | Oratori di Marco Marazzoli | [Fonte](https://www.treccani.it/enciclopedia/marco-marazzoli_%28Dizionario-Biografico%29/) |
| 21 | Marco Marazzoli | Cantata | Candidato con fonte esterna; da verificare per import | Cantate di Marco Marazzoli | [Fonte](https://www.treccani.it/enciclopedia/marco-marazzoli_%28Dizionario-Biografico%29/) |

**Riserve particolari:** il repertorio attribuito a **Vanhal** presenta problemi attributivi per singoli concerti, fra cui un [concerto per flauto in mi bemolle maggiore](https://imslp.org/wiki/Flute_Concerto_No.3_in_E-flat_major_%28Vanhal%2C_Johann_Baptist%29). La voce biografica generale prova che il compositore ha praticato il genere, non che una particolare partitura di attribuzione dubbia sia sua. Per **Hoffmeister** il riscontro catalografico è preliminare e resta opportuno reperire un'autorità editoriale primaria prima di autorizzare un merge. Per **Cambini**, **Luzzaschi**, **Manfredi**, **Bonds**, **Walther** e **Giuliani**, la contestazione riguarda l'inferenza dalla frase, non la negazione assoluta di un'attività compositiva.

### 3. Crosswalk di opere/casi, separato dall'identità di genere
Cinque confronti fra nodi `corrente` del legacy e nodi `opera` di Atlantis mostrano che un vecchio record può significare un'opera concreta oppure un **evento riferito a quell'opera**, e le due cose non vanno schiacciate nella stessa identità.

| Nodo legacy | Candidato Atlantis | Esito di staging |
|---|---|---|
| `missa-papae-marcelli-palestrina` | `opera:missa-papae-marcelli` | `probable_same_work_pending_metadata` |
| `officium-defunctorum-victoria-1605` | `opera:victoria-officium-defunctorum-1605` | `probable_same_work_pending_metadata` |
| `war-requiem-coventry-1962` | `opera:britten-war-requiem-op66-1962` | `historical_premiere_context_vs_work_not_identical` |
| `quattro-minuti-trentatre-cage` | `opera:cage-433-1952` | `probable_same_work_pending_metadata` |
| `la-valse-ravel-balletto-1929` | `opera:la-valse-ravel-1920` | `specific_ballet_staging_vs_composition_not_identical` |

Tutti gli **identificativi di origine e destinazione esistono** nei rispettivi grafi, e i cinque target Atlantis hanno categoria `opera`. Le identificazioni che appaiono forti per titolo restano `pending_metadata`; quelle che riguardano una prima esecuzione o un allestimento (per esempio *La valse* 1929 rispetto alla composizione 1920) sono esplicitamente **entità correlate ma non equivalenti**. Nessun collegamento è stato importato.

### 4. Baseline di 853 interrogazioni radicate
È stato scritto `BASELINE_RICERCHE_FASE2M_LOTTO06_2026-11-09.json`. Non è un motore UI: è una matrice riproducibile di **attese sugli adiacenti diretti documentati nel corpus legacy**, prima della certificazione degli archi.

- **344** fixture «radice concetto», comprese le categorie da riclassificare: autori diretti, persone, periodi, geografie, altri concetti, ambiti editoriali separati.
- **509** fixture «radice persona» (**409 compositori + 100 altre persone**): concetti direttamente incidenti e numero di record relazionali sorgente.
- **1.603** coppie uniche persona↔concetto e **1.846** record relazionali sorgente preservati: la differenza riflette relazioni multiple, non un errore da deduplicare.
- **111** concetti con più record relazionali verso compositori rispetto ai compositori distinti, sempre preservati.
- **17** concetti con rapporti a `ambito` editoriali: non autorizzano un attraversamento del capitolo.
- **0** discrepanze nell'indice reciproco concetto↔persona.

Il test sintetico costruisce **solo le liste degli adiacenti diretti della radice**. Non trasforma un autore trovato sotto «Messa», «Sinfonia» o altro genere nel prossimo ponte automatico verso tutti i suoi altri repertori. Le epoche e geografie sono **terminali** quando non sono esse stesse la radice. I controlli previsti per tipi (distanza 0–V) e per pivot selezionato (derivazione 0–III) rimangono da implementare e collaudare graficamente; non dichiararli funzionanti per il solo passaggio dei test di struttura.

**Verifiche meccaniche del file baseline:**
- **PASS** `root_count_853`
- **PASS** `unique_all_853_roots`
- **PASS** `composer_roots_409`
- **PASS** `all_concepts_344`
- **PASS** `all_people_509`
- **PASS** `reciprocal_index_complete`
- **PASS** `persons_relation_records_1846`
- **PASS** `multiple_relation_concepts_111`
- **PASS** `no_auto_bfs_synthetic`
- **PASS** `all_original_record_pointers_kept_in_master`

Il JSON dei riscontri del Lotto 06 riporta separatamente 9 controlli strutturali PASS. Questi non sostituiscono una convalida filologica dei **3.856 archi originali** e dei **1.718 Atlantis**, né la verifica live del renderer, né la preservazione materializzata di **115 media, 207 associazioni** e link/ancore editoriali.

### 5. Decisioni operative e prossima ripresa — Lotto 07
1. Sottoporre i **14 candidati autore↔genere/opera** a un protocollo di ammissione differenziato: fonte catalografica, opera identificata, distinzione autore/esecutore/adattatore, attendibilità attributiva, predicato e bidirezionalità. Lasciare Morricone in **revisione di perimetro del genere**, non inferire un link da un titolo.
2. Raffinare la **riclassificazione di 210 legacy `corrente` privi di classe**, con particolare attenzione a opera/composizione, raccolta/codice/trattato, evento/allestimento, istituzione/cappella e contesto scenico. Confrontare sistematicamente, non solo i cinque esempi, tutti i nodi `opera` e `nodo-di-senso` Atlantis.
3. Scrivere e verificare **test runtime** in checkout Node, in seguito UI browser/Android per ricerca radicata e pivot per singolo nodo; non attribuire al report test non eseguiti.
4. Pianificare un staging di **migrazione conservativa dei patrimoni** (tutte le relazioni originali, `forward/reverse`, note, eccezioni linguistiche, fonti, URL puntuali, ancore, media e associazioni). Nessuna deduplica di record semantici diversi; nessun `cap:*` nella rete storico-musicale.

**Stato di pubblicazione:** `audit-integrazione/` soltanto. Nessun merge storico, nessun update pubblico; aggiornare il thread versionato su GitHub con i commit effettivi del Lotto 06.
