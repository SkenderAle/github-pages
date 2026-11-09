# Musurgia Atlantis — Fase 2M, Lotto 08
## Cataloghi, crosswalk globale dei 344 concetti e separazione fra entità storiche

**9 novembre 2026 — `SkenderAle/github-pages`, branch `main`, SOLO staging `musurgia-atlantis/audit-integrazione/`.**

### Perimetro effettivamente eseguito
Sono stati caricati integralmente dal repository remoto, tramite gli SHA blob, **entrambi i grafi reali**: `atlante3d/database/grafo.json` (**869 nodi / 2.437 archi**) e `musurgia-atlantis/grafo.json` (**754 nodi / 1.718 archi**), insieme alla matrice del Lotto 04 (**344 concetti, 2.397 riferimenti incidenti**) e alle matrici dei Lotti 05–07. Non sono state usate le sole sintesi del thread. È stato eseguito un **crosswalk computazionale sistematico di tutti i 344 concetti** contro **410 nodi Atlantis non-persona/non-capitolo/non-luogo/non-strumento**. Sono state preservate tutte le precedenti proposte di crosswalk e i cinque confronti opere/casi del Lotto 06. **Nessuna identità né relazione è stata fusa o aggiunta.**

### Risultato del confronto integrale
- **344/344** schede legacy confrontate con i **410** target Atlantis selezionati. I **2.397** riferimenti incidenti al concetto sono tracciati senza riduzione a coppie uniche.
- **70** concetti hanno almeno un candidato per somiglianza lessicale; **274** nessun candidato sopra la soglia *scelta per questo algoritmo*. **5** corrispondenze nominali identiche; **15** record con almeno un candidato che presenta incompatibilità di categoria.
- **24** candidature precedenti con ID obiettivo sono riportate **a parte**, senza trattarle come equivalenze e senza scartarle se la nuova etichetta è meno simile. I 5 confronti mirati del Lotto 06 restano separati, inclusi i casi *War Requiem/Coventry* e *La valse* allestimento 1929 ≠ composizione 1920.
- **Caso di errore evitato**: `genere-sinfonia` «Sinfonia» e `opera:sinfonia-nona` non sono la stessa entità, pur condividendo il termine. `forma-fantasia` è genere e `opera:fantasia` è composizione. `madrigale` può riferirsi a tipi di generi storicamente diversi. I candidati lessicali hanno `identity_certified=false` e `merge_authorized=false`.
- Il confronto di 344 sorgenti contro 410 obiettivi è **esaustivo come scansione tecnica**, NON come riconciliazione storica di ogni sinonimo, opera e alias; i 274 senza match non sono dichiarati assenti da Atlantis. L'algoritmo limita a 5 candidati lessicali conservativi per scheda e segnala le collisioni.

### Verifiche catalografiche di 14 candidati autore–genere
Il file `EVIDENZE_CATALOGRAFICHE_FASE2M_LOTTO08_2026-11-09.json` contiene le **14** schede con link controllabili e distinzione fra prova di opera specifica e prova del genere in generale.

- **Luigi Boccherini / Concerto**: [fonte](https://catalogue.bnf.fr/ark:/12148/cb397811798); BnF title uniform: concerto for cello G.480, sol major; specific evidence stronger than concert performance in biography — `specific_work_and_genre`.
- **Johann Jakob Froberger / Toccata**: [fonte](https://imslp.org/wiki/Libro_Secondo_%28Froberger%2C_Johann_Jacob%29); Libro secondo contains toccatas FbWV 101–106; identifiable catalogue numbers — `named_corpus_and_genre`.
- **Nino Rota / Concerto**: [fonte](https://ressources.ircam.fr/en/composer/nino-rota/worksbykind); IRCAM lists instrumental works for soloist and orchestra; choose a specific concerto before edge — `catalogue_repertoire`.
- **Erich Wolfgang Korngold / Concerto**: [fonte](https://www.schott-music.com/en/concerto-in-d-major-no153319.html); Schott score: Korngold violin concerto in D major op.35; check bibliographic work identity — `specific_work_and_genre`.
- **Samuel Barber / Concerto**: [fonte](https://www.laphil.com/works/violin-concerto-op-14); LA Philharmonic identifies Barber Violin Concerto op.14 and solo violin orchestration — `specific_work_and_genre`.
- **Édouard Lalo / Concerto**: [fonte](https://www.billaudot.com/gb9839-6.html); Publisher's critical-edition text on Lalo cello concerto and source discrepancies — `specific_work_and_genre`.
- **Francesco Maria Veracini / Concerto**: [fonte](https://www.treccani.it/enciclopedia/francesco-maria-veracini/); Treccani says he left concertos in manuscript; no individual title here — `genre_attribution_only`.
- **Johann Baptist Vanhal / Concerto**: [fonte](https://www.treccani.it/enciclopedia/johann-baptist-wanhal_%28Enciclopedia-Italiana%29/); Treccani attests printed concertos; individual works and attribution still require catalog check — `genre_attribution_only`.
- **Franz Anton Hoffmeister / Concerto**: [fonte](https://imslp.org/wiki/Viola_Concerto_in_D_major_%28Hoffmeister%2C_Franz_Anton%29); Score category solo viola and orchestra; attribution should have independent thematic verification — `score_attribution_pending`.
- **François-Adrien Boieldieu / Concerto**: [fonte](https://catalogue.bnf.fr/ark:/12148/cb139087151); BnF musical work authority: Boieldieu harp/orchestra concerto, 1801, explicitly genre concerto — `specific_work_and_genre`.
- **Jeanine Tesori / Musical**: [fonte](https://www.concordtheatricals.com/p/58581/fun-home); Rights holder credits music to Tesori, book and lyrics to Lisa Kron; role must be specific — `precise_music_role_in_musical`.
- **Luigi Rossi / Cantata**: [fonte](https://www.treccani.it/enciclopedia/luigi-rossi/); Treccani identifies roughly 250 chamber cantatas by Luigi Rossi — `genre_attribution_only`.
- **Marco Marazzoli / Oratorio**: [fonte](https://www.treccani.it/enciclopedia/marco-marazzoli_%28Dizionario-Biografico%29/); DBI documents six surviving Latin oratorios and named Italian ones; not the same as dialogues by assumption — `genre_attribution_only`.
- **Marco Marazzoli / Cantata**: [fonte](https://www.treccani.it/enciclopedia/marco-marazzoli_%28Dizionario-Biografico%29/); DBI mentions circa 380 cantatas, separately from his oratorios — `genre_attribution_only`.

**I 14 rapporti sono sostenuti da documentazione di repertorio di granularità diversa, non certificati come archi già importabili.** I casi Veracini, Vanhal, Rossi e Marazzoli attestano soprattutto il genere/corpus e non la convalida filologica di ogni singola opera; Hoffmeister resta prudente sull'attribuzione d'opera. Per Jeanine Tesori il predicato da usare sarebbe «musiche di *Fun Home*», NON autorialità del libretto.

**Morricone**: [Wise Music](https://www.wisemusicclassical.com/work/63630/Quarto-concerto--Ennio-Morricone/) classifica *Quarto concerto* (1993) in «Soloists and Large Ensemble», attestando organo, due trombe e due tromboni solisti; [IRCAM](https://medias.ircam.fr/fr/work/quarto-concerto) ne descrive la composizione. Diverso dal *Primo Concerto* per sola orchestra: candidata una relazione autore↔prassi concertante a partire da un'opera specifica; nessun arco storico aggiunto.

### Otto riclassificazioni proposte (Lotto 07), riesaminate
- `recitar-cantando-peri-euridice` → `caso_studio_ibrido`: keep recitar cantando practice and Peri Euridice work as distinct contextual referents **Solo proposta di modello, attende fonte esterna specifica.**
- `sinestesia-luce-prometeo-skriabin` → `caso_studio_ibrido`: Prométhée work not identical to generic synaesthetic light/sound practice **Solo proposta di modello, attende fonte esterna specifica.**
- `madrigale-drammatico-petrassi-1941` → `caso_studio_ibrido`: Treccani treats Coro di morti (1940–41) as a specific madrigale drammatico by Petrassi, not whole genre [riscontro](https://www.treccani.it/enciclopedia/goffredo-petrassi_%28Dizionario-Biografico%29/)
- `mikrokosmos-bartok-pianoforte-didattico` → `raccolta_documento`: Mikrokosmos is six-volume cycle of 153 pedagogical piano pieces [riscontro](https://www.boosey.com/publications/sheet-music/Bartok-Bela-Mikrokosmos-Vol-1/3250)
- `deserts-nastri-edgard-varese-1954` → `opera_specifica`: Déserts is specific Varèse work (1950–54), including tape and ensemble; 1954 premiere event distinct [riscontro](https://ressources.ircam.fr/fr/work/deserts)
- `quattro-pezzi-una-nota-scelsi-1959` → `opera_specifica`: Foundation catalogue recognizes Quattro pezzi per orchestra (ciascuno su una nota sola) as 1959 one composition in parts [riscontro](https://www.scelsi.it/it/quattro-pezzi-per-orchestra-%28ciascuno-su-una-nota-sola%29/)
- `forma-concerto-per-arpa-novecento` → `genere_forma`: generic form defined by instrumentation; do not assume one titled work **Solo proposta di modello, attende fonte esterna specifica.**
- `forma-suite-orchestrale-novecento` → `genere_forma`: generic orchestral-suite form, not a catalogue work **Solo proposta di modello, attende fonte esterna specifica.**

### Otto ambiguità fra opera, ciclo, evento, contesto o istituzione
- `cappella-san-marco-venezia`: Cappella reale institution/historical ensemble, distinct from Venetian school and building or editorial chapter [fonte/approfondimento](https://www.basilicasanmarco.it/basilica/tradizione-musicale/) (institution_distinct).
- `inno-patriottico-canto-italiani-1847`: Mameli lyrics 1847, Novaro music same year; later national-anthem use and recognition are separate status/events [fonte/approfondimento](https://presidenza.governo.it/ufficio_cerimoniale/cerimoniale/inno.html) (work_vs_status).
- `poema-sinfonico-romano-respighi`: Fontane, Pini and Feste di Roma comprise distinct scores even when considered a Roman trilogy; check source detail [fonte/approfondimento](https://www.treccani.it/enciclopedia/ottorino-respighi/) (collection_vs_works_pending).
- `opera-evento-storico-nixon-1987`: Nixon in China is opera, with world premiere on 22 Oct 1987; work different from premiere [fonte/approfondimento](https://www.boosey.com/pages/opera/moreDetails?langId=1&musicID=7156) (work_vs_premiere).
- `standard-jazz-perdido-tizol`: Composition and jazz standard/renditions need distinct roles; specific source page not independently reopened [fonte/approfondimento](https://www.loc.gov/item/ihas.200038835/) (work_vs_performance_pending).
- `concerti-due-organi-soler-escorial`: Several concertos separately numbered, not a single undifferentiated composition; primary thematic evidence still needed [fonte/approfondimento](https://www.heinrichvontrotta.eu/Series/Compositori/Codex-453-171-2-Soler.html) (work_set_pending).
- `stampa-frottole-petrucci-1504`: Printing of multiple books of frottole is publication practice with edition events, not a composition [fonte/approfondimento](https://www.treccani.it/enciclopedia/ottaviano-petrucci_%28Dizionario-Biografico%29/) (edition_vs_genre).
- `mathis-der-maler-sinfonia-1934`: 1934 symphony is an independent work; must not merge with later stage opera of same title [fonte/approfondimento](https://www.berliner-philharmoniker.de/werkeinfuehrung/paul-hindemith-symphonie-mathis-der-maler/) (different_works).

**Attenzione alle fonti non ancora sufficienti:** per Soler, Perdido e la trilogia romana di Respighi i collegamenti riportati sono piste o riscontri parziali, non convalida definitiva della segmentazione né delle singole attribuzioni. I nomi con identità omonime non vanno fusi.

### Gate tecnici ancora aperti
- **Concluso ora:** scansione computazionale 344↔410 su dati JSON reali; 14 fascicoli di repertorio aggiornati; 8 proposte e 8 ambiguità documentate; **13/13** verifiche strutturali superate.
- **NON eseguito:** controllo Node `--live` in un checkout locale, browser/Android/WebGL, collaudo delle profondità per tipologia e pivot individuale, test funzionale di ricerca radicata, conferma filologica separata di tutti i 3.856 record legacy e dei 1.718 archi Atlantis, collaudo audiovisivo di media/ancore.
- **NON modificato:** `musurgia-atlantis/grafo.json`, `index.html`, `atlante3d/database/*`, player e pagine pubbliche. Nessuna scrittura di merge. Conservati 210 lotti storico-filologici e regole no BFS indiscriminata.

### Prossima ripresa — Lotto 09
Priorità alla validazione mirata dei candidati del crosswalk con `semantic_compatibility=category_compatible_pending_evidence`, scartando esplicitamente le collisioni; verifica filologica delle differenze fra opera, evento, manoscritto e versione; pianificazione di **coppie identità certificate** e di **relazioni specifiche** prima di materializzare il grafo unificato di staging. Eseguire test Node `--live` e successivamente test browser/Android, preservando tutte le risorse storico-editoriali e i testi bidirezionali. **Il thread GitHub va aggiornato e i grafi pubblici devono restare invariati fino a certificazione.**
