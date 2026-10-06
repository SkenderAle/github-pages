# Musurgia Mundi · Audit 08 · pubblicazione cumulativa 7 ottobre 2026

**Base di riferimento:** 27e13652ab0f34dad75d311ca5166765a2939432 (`main`).

**Acquisiti:** 175 nuovi nodi (di cui 9 compositori), 246 relazioni specialistiche. Il grafo generale conserva i 906 archi preesistenti.

**Dopo l'integrazione:** 608 nodi, 297 compositori, 856 relazioni specialistiche, 365 relazioni Scuole e tradizioni.

**Riconciliazione:** esclusa in fase preparatoria la relazione Bertoldi–Rossi già pubblicata; nessun ID duplicato tra i 246 archi introdotti.

**Verifiche:** replicati i controlli strutturali presenti in `verifica-relazioni.mjs` e `verifica-nomi.mjs`, e rigenerati gli audit quantitativi. La verifica HTTP esaustiva delle fonti, l'esecuzione dei validatori originali Node.js e il collaudo grafico dal browser richiedono una successiva verifica: non si dichiarano completati.

---

# Resoconto audit 08a–08f

# Musurgia Mundi — Audit 08 cumulativo

**Nessun commit su GitHub.** Il lotto è preparatorio, la pubblicazione richiede controllo complessivo delle fonti e fusione.

## Bilancio

- Compositori nel gruppo di ricognizione: **40** (22 già considerati nel precedente accumulo, 18 aggiunti alla ricognizione attuale).
- Relazioni preparate: **32**, di cui **9** nell’ultimo passaggio.
- Nodi preparati: **22**, di cui **7** nell’ultimo passaggio.
- Proiezione dopo fusione: **455 nodi, 642 relazioni specialistiche, 321 relazioni di scuola e 22 compositori senza relazione di scuola**, da riconvalidare sul repository prima di pubblicare.

## Relazioni aggiunte in questo passaggio

### audit8-scelsi-nuova-consonanza
**scuole**: `associazione-nuova-consonanza` → `compositore-giacinto-scelsi`
Scelsi collaborò negli anni Sessanta con l’associazione Nuova Consonanza e sue musiche furono promosse nell’ambiente romano. L’associazione del 1961 è distinta dal Gruppo di Improvvisazione del 1964: non lo si registra come componente di quest’ultimo.
Fonti: https://www.treccani.it/enciclopedia/giacinto-scelsi_%28Enciclopedia-Italiana%29/, https://www.treccani.it/enciclopedia/nuova-consonanza/

### audit8-varese-guild
**scuole**: `international-composers-guild` → `compositore-edgard-varese`
Varèse promosse la International Composers’ Guild negli Stati Uniti e ne utilizzò le attività per far conoscere nuova musica e propri lavori come Offrandes, Hyperprism, Octandre e Intégrales; il collegamento indica fondazione e attività, non uniformità stilistica dei membri.
Fonti: https://brahms.ircam.fr/en/composer/edgard-varese/biography

### audit8-ingegneri-cremona
**scuole**: `cappella-duomo-cremona` → `compositore-marcantonio-ingegneri`
Ingegneri fu cantore e maestro di cappella del Duomo di Cremona nel secondo Cinquecento e maestro del giovane Monteverdi: relazione istituzionale e pedagogica, non generica collocazione geografica.
Fonti: https://www.treccani.it/enciclopedia/marcantonio-ingegneri/, https://www.treccani.it/enciclopedia/marc-antonio-ingegneri_%28Dizionario-Biografico%29/

### audit8-colbran-san-carlo
**scuole**: `teatro-san-carlo-napoli-primo-ottocento` → `compositore-isabella-colbran`
Colbran fu protagonista del teatro napoletano fra 1811 e 1822, eseguì lavori di Spontini, Mayr e numerose opere di Rossini: si registra il ruolo artistico concreto della cantante-compositrice e non una presunta scuola di composizione.
Fonti: https://www.treccani.it/enciclopedia/isabella-angela-colbran_%28Dizionario-Biografico%29/

### audit8-zelter-singakademie
**scuole**: `singakademie-berlino` → `compositore-carl-friedrich-zelter`
Zelter succedette a Fasch alla direzione della Sing-Akademie di Berlino nel 1800 e sviluppò una tradizione istituzionale di musica corale e formazione.
Fonti: https://www.treccani.it/enciclopedia/karl-friedrich-zelter_%28Enciclopedia-Italiana%29/

### audit8-sarti-corte-russa
**scuole**: `cappella-imperiale-russa-caterina-ii` → `compositore-giuseppe-sarti`
Dal 1784 Sarti operò alla corte di Caterina II con opere italiane, musica celebrativa e incarichi di cappella e insegnamento; questa è una pratica di corte documentata, non un’adesione al nazionalismo musicale russo.
Fonti: https://www.treccani.it/enciclopedia/giuseppe-francesco-eligi-sarti_%28Dizionario-Biografico%29/

### audit8-lauro-rossi-conservatorio-milano
**scuole**: `conservatorio-milano-ottocento` → `compositore-lauro-rossi`
Lauro Rossi diresse il Conservatorio di Milano tra 1850 e 1871, e in seguito quello di Napoli: rapporto amministrativo, didattico e istituzionale accertato.
Fonti: https://www.treccani.it/enciclopedia/lauro-rossi/

### audit8-cambini-cameristica
**scuole**: `musica-cameristica-classica` → `compositore-giovanni-giuseppe-cambini`
Cambini operò a Parigi dal 1770, pubblicò ampia produzione cameristica e fu fra i precoci autori di quartetti d’archi in forma classica; il nesso è la pratica strumentale, non una scuola formale.
Fonti: https://www.treccani.it/enciclopedia/giovanni-giuseppe-cambini/, https://www.treccani.it/enciclopedia/quartetto/

### audit8-bartok-kurtag
**influenze**: `compositore-bela-bartok` → `compositore-gyorgy-kurtag`
Kurtág definì la musica di Bartók la propria “lingua materna” musicale: l’eredità bartokiana è attestata nelle testimonianze e nell’analisi dell’opera, senza dedurne un insegnamento personale.
Fonti: https://resources.ircam.fr/fr/numericDocument/fr-gyorgy-kurtag-%3A-un-musicien-europeen, https://brahms.ircam.fr/en/composer/gyorgy-kurtag/workcourse

## Perimetro dei 40 autori

Il gruppo include i 22 compositori destinatari degli archi accumulati precedentemente e altri 18 compositori ricogniti. **Non equivale a 40 verifiche definitive di tutte le lenti:** sui casi senza prova ulteriore è stata registrata la sospensione.

1. `compositore-carl-orff` — relazione preparata
2. `compositore-ennio-morricone` — relazione preparata
3. `compositore-alexander-von-zemlinsky` — relazione preparata
4. `compositore-nadia-boulanger` — relazione preparata
5. `compositore-aaron-copland` — relazione preparata
6. `compositore-florence-price` — relazione preparata
7. `compositore-duke-ellington` — relazione preparata
8. `compositore-george-gershwin` — relazione preparata
9. `compositore-leonard-bernstein` — relazione preparata
10. `compositore-billy-strayhorn` — relazione preparata
11. `compositore-jozef-elsner` — relazione preparata
12. `compositore-anton-reicha` — relazione preparata
13. `compositore-pietro-nardini` — relazione preparata
14. `compositore-filippo-manfredi` — relazione preparata
15. `compositore-carl-czerny` — relazione preparata
16. `compositore-michael-haydn` — relazione preparata
17. `compositore-leopold-mozart` — relazione preparata
18. `compositore-siegfried-wagner` — relazione preparata
19. `compositore-hans-werner-henze` — relazione preparata
20. `compositore-charles-koechlin` — relazione preparata
21. `compositore-henry-cowell` — relazione preparata
22. `compositore-rene-leibowitz` — relazione preparata
23. `compositore-giacinto-scelsi` — relazione preparata
24. `compositore-edgard-varese` — relazione preparata
25. `compositore-marcantonio-ingegneri` — relazione preparata
26. `compositore-isabella-colbran` — relazione preparata
27. `compositore-carl-friedrich-zelter` — relazione preparata
28. `compositore-giuseppe-sarti` — relazione preparata
29. `compositore-lauro-rossi` — relazione preparata
30. `compositore-giovanni-giuseppe-cambini` — relazione preparata
31. `compositore-gyorgy-kurtag` — relazione preparata
32. `compositore-george-whitefield-chadwick` — ricerca aperta
33. `compositore-charles-ives` — ricerca aperta
34. `compositore-giuseppe-malerbi` — ricerca aperta
35. `compositore-christian-gottlob-neefe` — ricerca aperta
36. `compositore-simon-sechter` — ricerca aperta
37. `compositore-otto-kitzler` — ricerca aperta
38. `compositore-walter-klein` — ricerca aperta
39. `compositore-giacinto-sallustio` — ricerca aperta
40. `compositore-charles-hambitzer` — ricerca aperta

## Note critiche

- Scelsi: associazione Nuova Consonanza distinta dal Gruppo di Improvvisazione Nuova Consonanza.
- Kurtág: l’influenza dichiarata di Bartók non comporta insegnamento personale.
- Isabella Colbran: identità artistica di cantante e compositrice, non solo collaboratrice o coniuge di Rossini.
- Le relazioni «scuole» comprendono categorie chiaramente etichettate come istituzioni e tradizioni; verificare l’adeguatezza della tassonomia in sede di integrazione.


## Prosecuzione audit 08b · Accumulo senza commit (6 ottobre 2026)

Aggiunte **10 relazioni di scuola** riferite a **9 compositori distinti**, con **7 nuovi nodi**, senza mutare il repository pubblico.

- **compositore-jean-francois-lesueur** — `insegnamento-composizione`. Lesueur, dapprima ispettore del Conservatorio, ottenne una classe di composizione nel 1818 e formò Berlioz, Gounod e Ambroise Thomas. La data viene dall’Académie des beaux-arts, che documenta anche il periodo di interruzione precedente. Fonti: https://www.academiedesbeauxarts.fr/jean-francois-lesueur
- **compositore-andre-gedalge** — `insegnamento-contrappunto-fuga`. Gédalge dal 1905 fu professore di contrappunto e fuga al Conservatorio di Parigi, formando, fra gli altri, Ravel, Honegger e Milhaud. Il nodo specifico identifica la cattedra novecentesca senza estendere impropriamente il nodo storico del primo Ottocento. Fonti: https://www.larousse.fr/encyclopedie/musdico/Andr%C3%A9_G%C3%A9dalge/167841
- **compositore-george-whitefield-chadwick** — `insegnamento-direzione`. Chadwick insegnò al New England Conservatory dal 1882, ne divenne direttore nel 1897 e riformò curricoli ed ensemble fino al 1930. Relazione istituzionale attestata dall’archivio NEC. Fonti: https://necmusic.edu/on-campus/library/archives-and-special-collections/archival-collections/george-w-chadwick/
- **compositore-george-whitefield-chadwick** — `appartenenza-storiografica`. Il NEC identifica Chadwick con la Second New England School insieme a Parker, Beach e MacDowell. Categoria storiografica, non società di iscritti. Fonti: https://necmusic.edu/on-campus/library/archives-and-special-collections/archival-collections/george-w-chadwick/
- **compositore-frederick-converse** — `incarico-didattico`. Frederick Shepherd Converse insegnò armonia al New England Conservatory dal 1900 al 1902. L’archivio dell’istituzione documenta inoltre la formazione con Chadwick e Rheinberger. Fonti: https://necmusic.edu/on-campus/library/archives-and-special-collections/archival-collections/frederick-s-converse/
- **compositore-simon-sechter** — `docenza-teoria-composizione`. La cronologia istituzionale della mdw indica Sechter fra i primi professori di composizione a partire dal 1852 e testimonia la diversità dei percorsi didattici per uomini e donne. L’anno 1851 diffuso da alcune biografie non viene qui assunto come data di inizio dell’insegnamento. Fonti: https://www.mdw.ac.at/ikt/?PageId=1284
- **compositore-johann-friedrich-fasch** — `kapellmeister-di-corte`. Johann Friedrich Fasch fu nominato Kapellmeister di Anhalt-Zerbst nel 1722, dirigendo la musica sacra e di corte per decenni. La relazione non va confusa con la distinta figura del figlio Carl Friedrich Christian Fasch. Fonti: https://saebi.isgv.de/biografie/Johann_Friedrich_Fasch_%281688-1758%29
- **compositore-charles-ives** — `formazione-con-horatio-parker`. Ives frequentò Yale dal 1894 al 1898, studiando composizione con Horatio Parker e realizzando la Prima sinfonia come lavoro conclusivo. L’arco non trasforma la formazione accademica nel fondamento esclusivo delle sue sperimentazioni. Fonti: https://onlineexhibits.library.yale.edu/s/stoeckel/page/ci · https://ressources.ircam.fr/en/composer/charles-ives/biography
- **compositore-camillo-sivori** — `eredità-violinistica-paganiniana`. Treccani identifica Sivori come allievo autentico di Paganini e descrive nelle sue composizioni l’impiego di armonici, pizzicati della sinistra, ottave e altre tecniche paganiniane. Qui si registra la tradizione interpretativa, distinta dall’arco formativo preesistente. Fonti: https://www.treccani.it/enciclopedia/camillo-ernesto-sivori_%28Dizionario-Biografico%29/
- **compositore-christian-gottlob-neefe** — `organista-e-direzione-teatrale`. Beethoven-Haus documenta Neefe a Bonn dal 1779 come direttore musicale del teatro principesco e dal 1782 come organista di corte, oltre alla sua attività di insegnante del giovane Beethoven. Fonti: https://www.beethoven.de/en/media/view/6076649443426304/Christian%2BGottlob%2BNeefe%2B%26%23040%3B1748-1798%26%23041%3B%2B-%2BStich%2Bvon%2BGottlob%2BAugust%2BLiebe%2Bnach%2Beiner%2BZeichnung%2Bvon%2BJohann%2BGeorg%2BRosenberg

Controlli: identificativi delle relazioni preparate e dei nuovi nodi univoci; campi essenziali compilati. Verifica di compatibilità sull’intero repository e collaudo Node.js non eseguiti. L’indicazione 40 autori è un perimetro di ricognizione, non una certificazione di 40 schede complete.


## Accumulo aggiuntivo · Audit 08-c: genealogie multidimensionali

**Commit:** nessuno. **Nuove relazioni di questo passaggio:** 17, **nuovi nodi:** 14. Alcuni nodi sono compositori storici documentati e aumentano il numero potenziale di compositori da 288 a 290, da riconciliare nel registro delle identità al momento della fusione.

| Lente | Nuove relazioni |
|---|---:|
| scuole | 7 |
| formazione | 3 |
| influenze | 1 |
| collaborazioni | 6 |

### Riscontri documentari nuovi

- **audit8c-kurtag-accademia-liszt** (`scuole`): IRCAM documenta che Kurtág insegnò pianoforte e musica da camera all’Accademia Liszt di Budapest dal 1967 al 1986. La relazione istituzionale non indica un rapporto diretto maestro-allievo con Franz Liszt. [Fonte](https://brahms.ircam.fr/en/composer/gyorgy-kurtag/biography).
- **audit8c-reiner-curtis** (`scuole`): Il Curtis Institute identifica Reiner come responsabile del programma di direzione dal 1931 al 1941 e docente di Leonard Bernstein a partire dal 1939; l’arco concerne insegnamento istituzionale. [Fonte](https://www.curtis.edu/about/history/legacy-of-conducting/).
- **audit8c-malerbi-lugo** (`scuole`): Secondo Paolo Fabbri (DBI), Malerbi assunse la guida della cappella dei Ss. Petronio e Prospero a Lugo nel 1792 e mantenne l’incarico fino al 1849. La sua attività didattica, documentata per Rossini, non va confusa con la direzione di un moderno conservatorio. [Fonte](https://www.treccani.it/enciclopedia/giuseppe-malerbi_%28Dizionario-Biografico%29/).
- **audit8c-weinlig-thomaskantorat** (`scuole`): Il registro del Thomanerchor conferma Weinlig come Thomaskantor dal 1823 al 1842; durante tale periodo fu anche docente di composizione di Richard Wagner. [Fonte](https://thomanerchor.de/ueber-den-chor/thomaskantoren/).
- **audit8c-jchristoph-ohrdruf** (`scuole`): Johann Christoph Bach (1671–1721), fratello maggiore di Johann Sebastian, fu organista a San Michele di Ohrdruf; la sua identità non va confusa con altri omonimi della famiglia Bach. [Fonte](https://bach-cantatas.com/~bachcant/Tour/Ohrdruf.htm).
- **audit8c-goldmark-juilliard** (`scuole`): Rubin Goldmark fu nominato a capo del dipartimento di composizione della Juilliard School of Music nel 1924. La relazione è istituzionale, distinta dal suo insegnamento privato ad Aaron Copland. [Fonte](https://www.universaledition.com/en/Contacts/Rubin-Goldmark/).
- **audit8c-kitzler-linz** (`scuole`): Bruckner Online colloca Otto Kitzler come direttore del teatro di Linz, ruolo attestato durante le lezioni impartite a Bruckner fra 1861 e 1863; non si inventa una scuola Kitzler autonoma. [Fonte](https://www.bruckner-online.at/?page_id=451).
- **audit8c-bridge-britten** (`formazione`): Britten iniziò le lezioni regolari di composizione con Frank Bridge all’inizio del 1928; la fonte di Britten Pears Arts ne documenta l’intenso apprendistato. [Fonte](https://www.brittenpearsarts.org/news/work-of-the-week-17-variations-on-a-theme-of-frank-bridge).
- **audit8c-humperdinck-siegfried** (`formazione`): Treccani documenta espressamente che Siegfried Wagner studiò con Engelbert Humperdinck. Il rapporto non discende dalla parentela di Siegfried con Richard Wagner. [Fonte](https://www.treccani.it/enciclopedia/siegfried-wagner/).
- **audit8c-busoni-varese** (`formazione`): IRCAM attesta un periodo berlinese durante il quale Varèse studiò con Busoni, che gli suggerì di cercare forme musicali proprie. Non si attribuisce a Busoni la paternità del linguaggio maturo di Varèse. [Fonte](https://brahms.ircam.fr/en/composer/edgard-varese/biography).
- **audit8c-stravinsky-varese** (`influenze`): IRCAM riferisce che l’ascolto della prima del Sacre du printemps (1913) influenzò durevolmente Varèse e che Amériques conserva tracce di quella esperienza. Si tratta di ricezione estetica attraverso l’opera, non di formazione diretta. [Fonte](https://brahms.ircam.fr/en/composer/edgard-varese/biography).
- **audit8c-orff-keetman** (`collaborazioni`): L’Orff-Zentrum documenta la lunga collaborazione di Orff e Gunild Keetman nelle pubblicazioni pedagogiche, nella Günther-Schule e nelle trasmissioni dal 1948. Keetman ebbe anche un’autonoma attività compositiva. [Fonte](https://www.orff-zentrum.de/orff/biografie/langversion/index.html).
- **audit8c-adams-sellars** (`collaborazioni`): Il Metropolitan Opera descrive la collaborazione fra Adams e il regista Sellars iniziata con Nixon in China e proseguita per decenni, distinguendola dal rapporto tra compositore e librettista. [Fonte](https://www.metopera.org/learn/education/mood-insights-spring-24-interview/).
- **audit8c-adams-goodman** (`collaborazioni`): Alice Goodman scrisse il libretto di Nixon in China (1987) per John Adams e collaborò nuovamente a The Death of Klinghoffer, secondo il Metropolitan Opera; non confonderla con Peter Sellars, regista e collaboratore drammaturgico. [Fonte](https://www.metopera.org/user-information/nightly-met-opera-streams/articles/history-in-the-making/).
- **audit8c-nyman-greenaway** (`collaborazioni`): Il British Film Institute documenta il sodalizio fra Michael Nyman e Peter Greenaway, tra cui la colonna sonora per The Draughtsman’s Contract (1982), fino alla separazione legata a Prospero’s Books. [Fonte](https://www.bfi.org.uk/features/where-begin-with-peter-greenaway).
- **audit8c-britten-pears** (`collaborazioni`): Britten Pears Arts documenta i ruoli di Peter Grimes (1945), Captain Vere in Billy Budd (1951) e Aschenbach in Death in Venice (1973) scritti da Britten per il tenore Pears. La relazione professionale è registrata indipendentemente dalla loro vita privata. [Fonte](https://www.brittenpearsarts.org/news/peter-pears).
- **audit8c-zemlinsky-schoenberg-erwartung** (`collaborazioni`): IRCAM attribuisce a Zemlinsky la direzione musicale della prima di Erwartung op. 17 di Schönberg, al Neues Deutsches Theater di Praga il 6 giugno 1924. È una concreta collaborazione interpretativa, distinta dal loro rapporto formativo già catalogato. [Fonte](https://brahms.ircam.fr/en/work/erwartung-op.-17).

### Ambiguità non convertite in archi

- **Zemlinsky → Schönberg come docente** è già presente nel database pubblico (`form-zemlinsky-schoenberg`): non duplicato. Aggiunta soltanto la direzione documentata della prima di *Erwartung*.
- **J. C. Bach (1671–1721)** a Ohrdruf è il fratello maggiore di Johann Sebastian: non confondere con altri compositori di nome Johann Christoph Bach.
- **Żywny, Hambitzer, Marxsen, Sallustio e Klein:** si conservano le relazioni formative già presenti, evitando nodi di “scuola” inventati per azzerare la statistica.
- Le **17** relazioni di questa tranche sono documentate puntualmente. La verifica completa delle quattro lenti dei 40 autori non è ancora dichiarata conclusa.

### Proiezione dopo fusione (non pubblicata)

Nodi **476**, compositori **290**, archi generali **906**, relazioni specialistiche **669**, scuola **338**, autori originari senza relazioni di scuola **6**. Il ramo `main` resta invece a 433 nodi, 288 compositori, 906 archi e 610 relazioni specialistiche.


## Audit 08-d · Ampliamento delle genealogie documentate · 6 ottobre 2026

**Stato:** accumulo locale non pubblicato. Relazioni aggiunte in questa tranche: **32**, nuovi nodi **30**.

L’approfondimento copre collaborazioni fra compositori, poeti, interpreti, coreografi, registi, scenografi e arrangiatori, insieme a due casi di formazione. Una coincidenza di calendario o una parentela non bastano a fondare una relazione.

### Relazioni e fonti

- **audit8d-britten-auden** · collaborazioni/compositore-e-librettista: Britten compose l’operetta Paul Bunyan su libretto di W. H. Auden fra 1939 e 1941, con prima rappresentazione alla Columbia University nel 1941. Fonti: [1](https://www.brittenpearsarts.org/music/paul-bunyan).

- **audit8d-britten-piper** · collaborazioni/collaborazione-opera-e-libretto: Myfanwy Piper scrisse i libretti di The Turn of the Screw (1954) e Death in Venice (1973) per Britten, dalle opere letterarie rispettivamente di Henry James e Thomas Mann. Fonti: [1](https://www.brittenpearsarts.org/music/the-turn-of-the-screw), [2](https://www.brittenpearsarts.org/music/death-in-venice).

- **audit8d-britten-crozier** · collaborazioni/collaborazione-opera-e-libretto: Eric Crozier scrisse il libretto di Albert Herring (1947) e fu co-librettista di Billy Budd (1951) con E. M. Forster. Fonti: [1](https://www.brittenpearsarts.org/music/albert-herring), [2](https://www.brittenpearsarts.org/music/billy-budd).

- **audit8d-britten-forster** · collaborazioni/libretto-billy-budd: E. M. Forster ed Eric Crozier firmarono il libretto di Billy Budd, opera di Britten tratta dal racconto di Herman Melville e presentata per la prima volta nel 1951. Fonti: [1](https://www.brittenpearsarts.org/music/billy-budd).

- **audit8d-britten-slater** · collaborazioni/libretto-peter-grimes: Montagu Slater scrisse il libretto di Peter Grimes da The Borough di George Crabbe. L’opera di Britten debuttò il 7 giugno 1945 al Sadler’s Wells di Londra. Fonti: [1](https://www.brittenpearsarts.org/music/peter-grimes).

- **audit8d-cage-cunningham** · collaborazioni/sodalizio-musica-danza-sperimentale: Cage e Cunningham lavorarono insieme dagli anni Quaranta, sperimentando operazioni casuali e l’indipendenza della creazione musicale dalla coreografia. Il rapporto è professionale, non inferito dalla loro relazione privata. Fonti: [1](https://www.mercecunningham.org/about/biography/), [2](https://johncage.org/about).

- **audit8d-cage-tudor** · collaborazioni/prima-esecuzione-433: Il pianista David Tudor eseguì la prima di 4′33″ di Cage al Maverick Concert Hall di Woodstock, 29 agosto 1952; la relazione riguarda la prima esecuzione della partitura. Fonti: [1](https://www.moma.org/collection/works/163616?page=1&sov_referrer=package).

- **audit8d-copland-graham** · collaborazioni/musica-e-coreografia-appalachian-spring: Copland compose la musica e Graham coreografò Appalachian Spring, commissionato da Elizabeth Sprague Coolidge e presentato alla Library of Congress il 30 ottobre 1944. Fonti: [1](https://www.loc.gov/loc/lcib/9806/graham.html).

- **audit8d-copland-demille** · collaborazioni/musica-e-coreografia-rodeo: Copland compose Rodeo per Agnes de Mille nel 1942; fonti della Library of Congress conservano corrispondenza, schizzi e materiali della produzione. Fonti: [1](https://guides.loc.gov/agnes-de-mille/special-collections/music-division), [2](https://guides.loc.gov/agnes-de-mille/introduction).

- **audit8d-gershwin-ira** · collaborazioni/compositore-paroliere-broadway: La Library of Congress documenta la collaborazione creativa di George e Ira Gershwin in 15 musical per Broadway, quattro film e Porgy and Bess: un sodalizio artistico, distinto dalla loro parentela. Fonti: [1](https://www.loc.gov/collections/george-and-ira-gershwin-treasures/about-this-collection/).

- **audit8d-gershwin-heyward** · collaborazioni/opera-porgy-and-bess-libretto: DuBose Heyward collaborò con George e Ira Gershwin alla creazione di Porgy and Bess, derivato dal proprio Porgy. Non equiparare il librettista all’autore di tutte le musiche. Fonti: [1](https://www.loc.gov/item/2010561028/).

- **audit8d-gershwin-grofe** · collaborazioni/orchestrazione-rhapsody-in-blue: Ferde Grofé realizzò l’orchestrazione di Rhapsody in Blue per l’organico di Paul Whiteman nella prima del 1924; la Library of Congress conserva la partitura autografa di Grofé. Fonti: [1](https://www.loc.gov/collections/songs-of-america/articles-and-essays/articles-about-songs/rhapsody-in-blue/).

- **audit8d-gershwin-whiteman** · collaborazioni/commissione-e-prima-rhapsody-in-blue: Paul Whiteman commissionò il brano ed ebbe Gershwin al pianoforte nella prima di Rhapsody in Blue del 12 febbraio 1924 alla Aeolian Hall, con orchestrazione di Ferde Grofé. Fonti: [1](https://www.loc.gov/collections/songs-of-america/articles-and-essays/articles-about-songs/rhapsody-in-blue/).

- **audit8d-goldmark-gershwin** · formazione/lezioni-private-composizione: La cronologia documentaria della Gershwin Collection della Library of Congress registra nel gennaio 1923 lo studio di Gershwin con Rubin Goldmark, precisando che le lezioni potrebbero essere state soltanto tre. Nessuna influenza estetica ulteriore è qui inferita. Fonti: [1](https://findingaids.loc.gov/repositories/15/resources/6841).

- **audit8d-orff-guenther** · collaborazioni/cofondazione-gunther-schule: Carl Orff e Dorothee Günther fondarono nel 1924 la Günther-Schule per musica, danza e movimento. La direzione condivisa precede e prepara l’Orff-Schulwerk. Fonti: [1](https://www.orff-zentrum.de/orff/biografie/langversion/index.html).

- **audit8d-kaminski-orff** · formazione/insegnamento-composizione: L’Orff-Zentrum e Treccani confermano che Carl Orff prese lezioni di composizione da Heinrich Kaminski, prima di sviluppare pienamente un linguaggio proprio. Fonti: [1](https://www.orff-zentrum.de/meta/informationen_englisch/biographical-sketch/index.html), [2](https://www.treccani.it/enciclopedia/carl-orff/).

- **audit8d-morricone-leone** · collaborazioni/sodalizio-musica-cinema: La collaborazione cinematografica Morricone-Leone iniziò con Per un pugno di dollari (1964) e proseguì fino a C’era una volta in America (1984); il regista utilizzava talvolta musiche incise prima delle riprese per guidare scene e montaggio. Fonti: [1](https://www.bfi.org.uk/news/ennio-morricone-bfi-southbank-season).

- **audit8d-morricone-tornatore** · collaborazioni/sodalizio-musica-cinema: Morricone iniziò con Nuovo Cinema Paradiso (1988) una lunga collaborazione con Tornatore, continuata con La leggenda del pianista sull’oceano e Malèna; il regista ha descritto anche il lavoro musicale anteriore alle riprese. Fonti: [1](https://www.bfi.org.uk/news/ennio-morricone-bfi-southbank-season), [2](https://www.raicultura.it/amp/orchestrarai/articoli/2026/09/Nuovo-Cinema-Paradiso---film-in-concerto-c9dd8a5c-633e-41b0-9e99-3b3c7134e735.html).

- **audit8d-varese-lecorbusier** · collaborazioni/progetto-padiglione-philips-1958: Il Poème électronique di Varèse (1957-1958) fu diffuso nel Padiglione Philips progettato da Le Corbusier per l’Esposizione universale di Bruxelles 1958. L’arco riguarda il progetto multidisciplinare, non l’insegnamento di architettura. Fonti: [1](https://ressources.ircam.fr/en/work/poeme-electronique).

- **audit8d-varese-xenakis** · collaborazioni/spettacolo-e-architettura-padiglione-philips: IRCAM documenta la presentazione di Poème électronique nel 1958 all’interno del Padiglione Le Corbusier-Xenakis. Questa è cooperazione nel medesimo allestimento, non prova di studi o composizioni congiunte dei due autori. Fonti: [1](https://ressources.ircam.fr/en/work/poeme-electronique).

- **audit8d-nyman-campion** · collaborazioni/colonna-sonora-the-piano: Michael Nyman compose la colonna sonora di The Piano (1993), film diretto da Jane Campion. Il BFI attesta esplicitamente l’accostamento di regia e partitura. Fonti: [1](https://www.bfi.org.uk/film/cabb66ca-3bd6-562c-8c37-e704712b8ded/the-piano).

- **audit8d-price-stock** · collaborazioni/prima-sinfonia-1933: Frederick Stock diresse la Chicago Symphony Orchestra nella prima della Sinfonia n. 1 in mi minore di Florence Price il 15 giugno 1933. La Library of Congress conserva la cronologia documentaria dell’evento. Fonti: [1](https://findingaids.loc.gov/repositories/15/resources/1623).

- **audit8d-price-anderson** · collaborazioni/ricezione-interpretazione-spiritual-1939: Marian Anderson eseguì My Soul’s Been Anchored in the Lord, arrangiato da Florence Price, al concerto del Lincoln Memorial del 9 aprile 1939. Non si presume una collaborazione personale diretta. Fonti: [1](https://blogs.loc.gov/music/2022/05/marian-andersons-lincolnmemorialmoment/).

- **audit8d-price-bonds** · collaborazioni/prima-concerto-pianoforte-1934: La cronologia della Florence B. Price Collection documenta la prima del Concerto per pianoforte con la Chicago Women’s Symphony Orchestra e la solista Margaret Bonds nel 1934. Fonti: [1](https://findingaids.loc.gov/repositories/15/resources/1623).

- **audit8d-price-dunham** · collaborazioni/coreografia-fantasie-negre-1932: La cronologia del fondo Price indica che nel dicembre 1932 la compagnia di Katherine Dunham presentò un lavoro basato su Fantasie Nègre n. 1 in mi minore di Price, al pianoforte Margaret Bonds. È ricezione coreutica documentata. Fonti: [1](https://findingaids.loc.gov/repositories/15/resources/1623).

- **audit8d-bernstein-sondheim** · collaborazioni/musica-e-testi-west-side-story: Per West Side Story (1957) Bernstein compose la musica e Stephen Sondheim scrisse i testi delle canzoni; la documentazione del Leonard Bernstein Office distingue esplicitamente i rispettivi ruoli. Fonti: [1](https://leonardbernstein.com/works/view/9/west-side-story).

- **audit8d-bernstein-laurents** · collaborazioni/musica-e-book-west-side-story: Arthur Laurents scrisse il book del West Side Story (1957), con musiche di Bernstein e testi di Sondheim; la relazione è drammaturgica, non parentele artistiche inferite. Fonti: [1](https://leonardbernstein.com/works/view/9/west-side-story).

- **audit8d-bernstein-robbins** · collaborazioni/direzione-coreografia-west-side-story: Jerome Robbins ideò, diresse e coreografò la produzione originale del musical West Side Story (1957), con musiche di Bernstein. La fonte dell’autore esplicita sia l’ideazione sia le funzioni sceniche. Fonti: [1](https://leonardbernstein.com/works/view/9/west-side-story).

- **audit8d-kurtag-ligeti** · collaborazioni/sodalizio-artistico-e-omaggio: Kurtág e Ligeti furono amici per circa sei decenni, a partire dal loro incontro nel 1945; una pagina di Játékok reca un Hommage à Ligeti (2005). Si registra il dialogo e l’omaggio documentato, non un rapporto maestro-allievo. Fonti: [1](https://www.muziekgebouw.nl/en/celebrate-gyorgy-kurtag-s-100th-birthday-with-the-kurtag-special-18w1), [2](https://adk.de/gyoergy-kurtag).

- **audit8d-satie-cocteau** · collaborazioni/balletto-parade-1917: Jean Cocteau curò il soggetto poetico di Parade, balletto con musica di Erik Satie rappresentato dai Ballets Russes nel 1917. Fonti: [1](https://www.museepicassoparis.fr/en/picasso-biography/les-ballets-russes/).

- **audit8d-satie-picasso** · collaborazioni/scene-costumi-parade-1917: Pablo Picasso ideò scene e costumi di Parade (1917), balletto su musica di Erik Satie. Si tratta di un concreto lavoro scenico-musicale, non una generica affinità fra avanguardie. Fonti: [1](https://www.eriksatie.fr/le-ballet-parade), [2](https://www.museepicassoparis.fr/en/picasso-biography/les-ballets-russes/).

- **audit8d-satie-massine** · collaborazioni/musica-coreografia-parade-1917: Léonide Massine coreografò Parade, rappresentato nel 1917 con musica di Erik Satie, soggetto di Cocteau e allestimento di Picasso. Fonti: [1](https://www.eriksatie.fr/le-ballet-parade).

### Controlli e riserve
- Nessun commit GitHub e nessuna modifica al branch `main`.
- I cinque librettisti di Britten sono documentati dalle schede delle opere; i collaboratori di Broadway sono distinti per scrittura musicale, testo delle canzoni, libretto e coreografia.
- Il legame con Le Corbusier e Xenakis riguarda il progetto del Padiglione Philips, **non** una lezione privata o una scuola comune.
- Grofé, Sondheim, Kaminski, Xenakis e Margaret Bonds sono cinque compositori nuovi nel lotto, da registrare con identità e fonti prima della fusione sul catalogo pubblico.
- I sei compositori del catalogo originario privi di legami di scuola rimangono tali. Considerando i cinque compositori aggiunti in questo passaggio, il totale **dopo fusione** diventa 11. Questa è una misura di copertura e non un difetto da annullare artificialmente.
- Il collaudo del browser e i validatori Node.js restano da eseguire quando il lotto verrà integrato.

**Proiezione dopo fusione:** 506 nodi, 295 compositori, 701 relazioni specialistiche, 338 relazioni di scuola. Stato pubblico fermo a 433 nodi e 610 relazioni.



---

## Accumulo 08e · Genealogie incrociate e documentazione primaria · 6 ottobre 2026

**Nessun commit.** Nuovi archi: **12**, nodi: **10**. Il totale preparatorio cresce da **91 a 103 relazioni** e da **73 a 83 nuovi nodi**. La selezione dei quaranta autori resta una ricognizione aperta, non un audit integrale già concluso.

**Distribuzione delle nuove relazioni:** collaborazioni: 5; formazione: 1; genealogie: 4; influenze: 1; scuole: 1.

### Scuole · 1 nuove relazioni

- **audit8e-rossi-patriottismo-piemontese** — `canti-patriottici-piemontesi-1847` → `compositore-luigi-felice-rossi`. Rossi compose nel 1847 La coccarda, noto come Inno al Re, su versi di Bertoldi; la partitura testimonia la circolazione torinese del canto patriottico. La lente descrive un repertorio e non una scuola formale di composizione. [Fonte 1](https://imslp.org/wiki/La_coccarda_%28Rossi%2C_Luigi_Felice%29)

### Formazione · 1 nuove relazioni

- **audit8e-parker-ives** — `compositore-horatio-parker` → `compositore-charles-ives`. La Library of Congress registra Charles Ives fra gli allievi di Horatio W. Parker a Yale. Rapporto di studio documentato, non prova di assimilazione stabile dell’estetica compositiva del maestro. [Fonte 1](https://www.loc.gov/item/n50050336/horatio-w-parker/)

### Influenze · 1 nuove relazioni

- **audit8e-sarti-mozart-citazione** — `compositore-giuseppe-sarti` → `compositore-wolfgang-amadeus-mozart`. Nel finale del Don Giovanni Mozart cita l’aria Come un agnello dall’opera Fra i due litiganti il terzo gode di Giuseppe Sarti: una citazione verificabile come ricezione del repertorio contemporaneo, non prova di un discepolato. [Fonte 1](https://interlude.hk/the-knowing-audience-mozart-opera-don-giovanni-gia-la-mensa-e-preparata/)

### Genealogie · 4 nuove relazioni

- **audit8e-britten-opera-camera** — `opera-da-camera-novecentesca` → `compositore-benjamin-britten`. The Turn of the Screw (1954) è esplicitamente descritta da Britten Pears Arts come opera da camera con sei cantanti e piccolo complesso orchestrale; registra una pratica di genere precisa. [Fonte 1](https://www.brittenpearsarts.org/music/the-turn-of-the-screw)
- **audit8e-britten-opera-tv** — `opera-originale-per-televisione` → `compositore-benjamin-britten`. Owen Wingrave fu scritta direttamente per la televisione e fu presentata su BBC2 il 16 maggio 1971. L’arco cataloga il formato drammaturgico e tecnologico, non un’inesistente origine esclusiva del genere. [Fonte 1](https://www.brittenpearsarts.org/music/owen-wingrave)
- **audit8e-cage-pianoforte-preparato** — `pianoforte-preparato-novecentesco` → `compositore-john-cage`. La Library of Congress documenta le sperimentazioni sul pianoforte preparato già con Bacchanale (1940), dalle quali Cage derivò nuove possibilità timbriche e ritmiche. [Fonte 1](https://www.loc.gov/collections/moldenhauer-archives/articles-and-essays/guide-to-archives/wonderful-widow-of-eighteen-springs/)
- **audit8e-rhapsody-jazz-gershwin** — `rapsodia-jazz-e-sala-da-concerto` → `compositore-george-gershwin`. Rhapsody in Blue rese udibile nel 1924 un dialogo tra linguaggi jazz, pianoforte solista e una grande forma concertistica, con orchestrazione di Ferde Grofé; la Library of Congress documenta l’ibridazione e la sua influenza successiva. [Fonte 1](https://www.loc.gov/collections/songs-of-america/articles-and-essays/articles-about-songs/rhapsody-in-blue/)

### Collaborazioni · 5 nuove relazioni

- **audit8e-bertoldi-rossi-coccarda** — `persona-giuseppe-bertoldi` → `compositore-luigi-felice-rossi`. La partitura originale dell’Inno al Re / La coccarda (1847) accredita Giuseppe Bertoldi per il testo e Luigi Felice Rossi per la musica. Rapporto di creazione di una stessa opera, non una parentela né una relazione didattica. [Fonte 1](https://imslp.org/wiki/La_coccarda_%28Rossi%2C_Luigi_Felice%29)
- **audit8e-bachmann-henze** — `persona-ingeborg-bachmann` → `compositore-hans-werner-henze`. La Fondazione Henze accredita a Ingeborg Bachmann l’adattamento del Prinz von Homburg di Kleist per l’opera scritta da Henze nel 1958–1959 e rappresentata nel 1960. [Fonte 1](https://www.hans-werner-henze-stiftung.de/en/hans-werner-henze/list-of-works/detail/the-prince-of-homburg)
- **audit8e-cage-cowell-new-school** — `compositore-henry-cowell` → `compositore-john-cage`. La New School ricostruisce come Cowell coinvolse Cage in concerti e dibattiti tra il 1950 e il 1956; Cage vi entrò poi come docente. Non si attribuisce automaticamente un rapporto di insegnamento diretto. [Fonte 1](https://courses.newschool.edu/courses/COPA3547/)
- **audit8e-tizol-ellington** — `compositore-juan-tizol` → `compositore-duke-ellington`. Lo Smithsonian conserva le memorie e materiali su Caravan: Tizol portò una prima sezione melodica, poi Ellington e la sua orchestra contribuirono allo sviluppo e all’orchestrazione. Rapporto compositivo reale, non semplice appartenenza all’organico. [Fonte 1](https://americanhistory.si.edu/documentsgallery/exhibitions/ellington_strayhorn_4.html)
- **audit8e-gyorgy-marta-jatekok** — `compositore-gyorgy-kurtag` → `persona-marta-kurtag`. L’etichetta ECM documenta la registrazione del 1996 e la pubblicazione nel 1997 di Játékok e trascrizioni bachiane eseguite al pianoforte a due e a quattro mani da György e Márta Kurtág. La relazione è artistica ed esecutiva, non basata sul matrimonio. [Fonte 1](https://ecmrecords.com/product/jatekok-gyorgy-kurtag-marta-kurtag/)

### Precauzioni archivistiche prima della fusione

- **Schönberg → Cage** è già nel database e non viene reinserito. Altre relazioni già presenti o preparate non sono state duplicate.
- **Cage–Cowell**: incontro e promozione alla New School, **non** rapporto formativo attribuito senza prova.
- **Britten**: due diverse genealogie operative, da camera e televisiva, associate a opere determinate; collaborazione con librettisti distinta da appartenenza stilistica.
- **Ira e George Gershwin**: collaborazione creativa documentata, non il solo vincolo parentale.
- **Sarti–Mozart**: ricezione attraverso citazione in *Don Giovanni*, non allievo/maestro e senza attribuzione indifferenziata delle otto variazioni K 460.
- **Luigi Felice Rossi**: repertorio patriottico di Torino 1847, non scuola formalizzata; Bertoldi compare nella partitura.
- **Nove nuovi compositori preparati in totale** (sette nello stadio 08d e due in 08e): non risultano automaticamente connessi a scuole, quindi il numero assoluto degli autori senza scuola può aumentare all’inserimento di nuovi compositori.
- Collegamenti, fonti e identificativi richiedono controllo finale nell’ambiente di esecuzione Node.js e nella visualizzazione interattiva.

### Proiezione contabile corretta

- `nodes`: **516**
- `composers`: **297**
- `edges`: **906**
- `relations`: **713**
- `schools`: **339**
- `original_composers_without_school`: **5**
- `new_composers_without_school`: **9**
- `composers_without_school`: **14**

## Accumulo 08f · Madrigali, opéra-comique e ricezioni documentate · 6 ottobre 2026

**Nessun commit.** Dopo il confronto con il ramo `main` si aggiungono **25 relazioni e 1 nodo nuovo** all’accumulo, da **103 a 128 relazioni** e da **83 a 84 nodi**. Tre relazioni già pubblicate sono state escluse e la scheda Casulana, già presente fra i compositori, non è stata duplicata.

### Genealogie · 16 relazioni nuove

- **audit8f-madrigale-marenzio** — `madrigale` → `compositore-luca-marenzio`. Marenzio pubblicò numerosi libri di madrigali e sviluppò l’aderenza della scrittura polifonica alla parola poetica, con cromatismi e modulazioni espressive. Il rapporto riguarda opere e tecniche del genere. [Fonte 1](https://www.treccani.it/enciclopedia/luca-marenzio/)
- **audit8f-madrigale-gesualdo** — `madrigale` → `compositore-carlo-gesualdo`. I madrigali di Gesualdo, soprattutto nel quinto e nel sesto libro, esplorano dissonanze, cromatismi e contrasti musicali aderenti alle immagini dei testi. Non indica un rapporto diretto con altri madrigalisti. [Fonte 1](https://www.treccani.it/enciclopedia/carlo-gesualdo_%28Dizionario-Biografico%29/)
- **audit8f-madrigale-monteverdi** — `madrigale` → `compositore-claudio-monteverdi`. Dai libri di madrigali polifonici alla ricerca della seconda pratica, Monteverdi sviluppò una relazione nuova fra parola, armonia e tessitura, con successivi impieghi di elementi concertanti. Non confondere madrigale con opera lirica. [Fonte 1](https://www.treccani.it/enciclopedia/madrigale/) · [Fonte 2](https://www.treccani.it/enciclopedia/storia-della-musica/)
- **audit8f-madrigale-rore** — `madrigale` → `compositore-cipriano-de-rore`. Cipriano de Rore pubblicò una raccolta di madrigali a cinque voci nel 1542, contribuendo all’ampliamento delle risorse espressive e cromatiche della polifonia vocale. [Fonte 1](https://www.treccani.it/enciclopedia/madrigale_%28Enciclopedia-Italiana%29/)
- **audit8f-madrigale-willaert** — `madrigale` → `compositore-adriano-willaert`. La Musica nova di Willaert (pubblicata nel 1559, con madrigali e mottetti) rappresenta una fase decisiva della scrittura colta plurivocale; non identifica l’autore come solo madrigalista. [Fonte 1](https://www.treccani.it/enciclopedia/madrigale_%28Enciclopedia-Italiana%29/)
- **audit8f-madrigale-lasso** — `madrigale` → `compositore-orlando-di-lasso`. Orlando di Lasso è annoverato dalla storiografia tra gli autori del madrigale rinascimentale, accanto ad altri repertori profani e sacri. È una partecipazione documentata al genere, non identificazione con una singola scuola italiana. [Fonte 1](https://www.treccani.it/enciclopedia/madrigale/) · [Fonte 2](https://www.treccani.it/enciclopedia/introduzione-alla-musica-del-cinquecento_%28Storia-della-civilta-europea-a-cura-di-Umberto-Eco%29/)
- **audit8f-madrigale-barbara-strozzi** — `madrigale` → `compositore-barbara-strozzi`. Barbara Strozzi pubblicò a Venezia nel 1644 Il primo libro de’ madrigali a due, tre, quattro e cinque voci su testi di Giulio Strozzi. Il genere persiste e cambia rispetto ai modelli del Cinquecento. [Fonte 1](https://www.treccani.it/enciclopedia/barbara-strozzi_%28Dizionario-Biografico%29/)
- **audit8f-madrigale-vittoria-aleotti** — `madrigale` → `compositore-vittoria-aleotti`. Treccani attribuisce a Vittoria Aleotti madrigali a quattro voci pubblicati nel 1593. La relazione non confonde Vittoria con la sorella Raffaella, pur esistendo discussioni musicologiche sulla loro identità. [Fonte 1](https://www.treccani.it/enciclopedia/vittoria-aleotti/)
- **audit8f-madrigale-casulana** — `madrigale` → `compositore-maddalena-casulana`. Maddalena Casulana pubblicò nel 1568 il Primo libro de madrigali a quattro voci, fra le prime raccolte musicali pubblicate a nome di una donna; l’opera è distinta dai madrigali precedentemente inseriti in antologie. [Fonte 1](https://www.treccani.it/enciclopedia/maddalena-mezari_%28Dizionario-Biografico%29/)
- **audit8f-frottola-madrigale-tratti** — `frottola-corti-italiane` → `madrigale`. Il madrigale rinascimentale assimilò da forme profane quali frottola, strambotto e villotta ritmi marcati e alternanza di omofonia e polifonia. Il legame riguarda passaggi di tecnica, non una discendenza unica o lineare. [Fonte 1](https://www.treccani.it/enciclopedia/madrigale/)
- **audit8f-opera-comique-bizet** — `opera-comique` → `compositore-georges-bizet`. Carmen di Bizet debuttò alla Salle Favart il 3 marzo 1875 come opéra-comique con dialoghi, pur con un soggetto tragico. L’opera mostra che il termine non coincide con opera comica nel senso di vicenda allegra. [Fonte 1](https://www.opera-comique.com/fr/spectacles/carmen-0)
- **audit8f-opera-comique-thomas** — `opera-comique` → `compositore-ambroise-thomas`. Mignon fu creata all’Opéra-Comique il 17 novembre 1866. La storia teatrale istituzionale la documenta come opéra-comique in tre atti, cardine dell’ampliamento sentimentale e serio del genere. [Fonte 1](https://www.opera-comique.com/fr/spectacles/mignon)
- **audit8f-opera-comique-donizetti** — `opera-comique` → `compositore-gaetano-donizetti`. La Fille du régiment di Donizetti, creata all’Opéra-Comique l’11 febbraio 1840, è descritta dall’istituzione come opéra-comique in due atti: partecipazione reale di un compositore italiano al genere francese. [Fonte 1](https://www.opera-comique.com/fr/310-ans-d-histoire)
- **audit8f-opera-comique-offenbach** — `opera-comique` → `compositore-jacques-offenbach`. Offenbach adattò Les Contes d’Hoffmann all’Opéra-Comique, dove fu rappresentata postuma il 10 febbraio 1881. La documentazione distingue l’opera fantastica dalla più consueta opéra-bouffe e ricorda gli interventi di adattamento ai dialoghi. [Fonte 1](https://www.opera-comique.com/fr/actualites/a-lire-avant-le-spectacle-les-contes-d-hoffmann) · [Fonte 2](https://www.opera-comique.com/fr/spectacles/les-contes-d-hoffmann)
- **audit8f-opera-comique-massenet** — `opera-comique` → `compositore-jules-massenet`. Manon di Massenet debuttò il 19 gennaio 1884 all’Opéra-Comique. Si registra qui il contributo documentato all’evoluzione del repertorio della Salle Favart, evitando di identificare sede teatrale e genere formale in ogni allestimento. [Fonte 1](https://www.opera-comique.com/fr/310-ans-d-histoire)
- **audit8f-dodecafonia-dallapiccola** — `dodecafonia` → `compositore-luigi-dallapiccola`. Dallapiccola praticò e trasformò la tecnica dodecafonica nella sua produzione, fra cui Sex carmina Alcaei (1946) e Il prigioniero; la fonte ne mette in luce l’elaborazione autonoma italiana, non un’adesione scolastica meccanica. [Fonte 1](https://www.treccani.it/enciclopedia/serie-e-struttura-dodecafonia_%28Storia-della-civilta-europea-a-cura-di-Umberto-Eco%29/)

### Formazione · 2 relazioni nuove

- **audit8f-dallapiccola-berio-tanglewood** — `compositore-luigi-dallapiccola` → `compositore-luciano-berio`. Nel 1952 Luciano Berio partecipò a Tanglewood al corso tenuto da Dallapiccola. Treccani sottolinea che lo studio delle partiture di Dallapiccola ebbe per Berio un peso persino maggiore del contatto personale. [Fonte 1](https://www.treccani.it/enciclopedia/luciano-berio_%28Dizionario-Biografico%29/)
- **audit8f-messiaen-xenakis-corsi** — `compositore-olivier-messiaen` → `compositore-iannis-xenakis`. La biografia IRCAM di Iannis Xenakis attesta esplicitamente gli studi con Olivier Messiaen a Parigi. L’arco documenta formazione e scambio di idee, senza attribuire a Xenakis adesione alla poetica del maestro. [Fonte 1](https://brahms.ircam.fr/en/composer/iannis-xenakis/biography)

### Influenze · 4 relazioni nuove

- **audit8f-ockeghem-josquin-deploration** — `compositore-johannes-ockeghem` → `compositore-josquin-des-prez`. Josquin dedicò a Ockeghem la déploration Nymphes des bois/Requiem aeternam e riprese materiali musicali del predecessore in messe. Treccani specifica che la loro conoscenza personale è ipotizzata: non si deduce un insegnamento diretto. [Fonte 1](https://www.treccani.it/enciclopedia/i-fiamminghi-nelle-corti-e-nelle-cappelle-le-prime-generazioni-di-compositori_%28Storia-della-civilta-europea-a-cura-di-Umberto-Eco%29/) · [Fonte 2](https://imslp.org/wiki/Nymphes_des_bois_(Josquin_Desprez))
- **audit8f-handel-mozart-messias** — `compositore-georg-friedrich-handel` → `compositore-wolfgang-amadeus-mozart`. Mozart adattò il Messiah di Händel, K 572, come risulta dalla Neue Mozart-Ausgabe della Fondazione Mozarteum. È trasmissione e riorchestrazione di partitura, non incontro tra i due compositori. [Fonte 1](https://dme.mozarteum.at/DME/nma/nma_toc.php?l=1&vsep=206)
- **audit8f-gesualdo-stravinskij-monumentum** — `compositore-carlo-gesualdo` → `compositore-igor-stravinskij`. Stravinskij ricompose per strumenti tre madrigali di Gesualdo in Monumentum pro Gesualdo (1960), presentato a Venezia. È un caso documentato di ricezione oltre tre secoli, non influenza per contemporaneità. [Fonte 1](https://www.boosey.com/pages/cr/catalogue/cat_detail?=&langid=1&musicid=3254) · [Fonte 2](https://www.treccani.it/enciclopedia/carlo-gesualdo_%28Dizionario-Biografico%29/)
- **audit8f-satie-cage-ricezione** — `compositore-erik-satie` → `compositore-john-cage`. Cage racconta nella propria autobiografia di aver organizzato concerti e conferenze sulla musica di Satie al Black Mountain College, distinguendone la concezione estetica da quella beethoveniana. Il rapporto è documentata ricezione critica. [Fonte 1](https://johncage.org/cage-autobiographical-statement)

### Collaborazioni · 3 relazioni nuove

- **audit8f-giulio-barbara-madrigali** — `persona-giulio-strozzi` → `compositore-barbara-strozzi`. Giulio Strozzi compose tutti i testi poetici del Primo libro de’ madrigali pubblicato da Barbara Strozzi nel 1644. È una collaborazione documentata attraverso l’opera, distinta dalla parentela. [Fonte 1](https://www.treccani.it/enciclopedia/barbara-strozzi_%28Dizionario-Biografico%29/) · [Fonte 2](https://www.treccani.it/enciclopedia/giulio-strozzi_%2528Dizionario-Biografico%2529/)
- **audit8f-giulio-monteverdi-proserpina** — `persona-giulio-strozzi` → `compositore-claudio-monteverdi`. Giulio Strozzi scrisse Proserpina rapita per le nozze Mocenigo-Giustiniani del 1630, con musica di Claudio Monteverdi oggi in gran parte perduta. La fonte identifica una collaborazione effettiva, non un rapporto didattico. [Fonte 1](https://www.treccani.it/enciclopedia/giulio-strozzi_%2528Dizionario-Biografico%2529/)
- **audit8f-lasso-casulana-mottetto-1568** — `compositore-orlando-di-lasso` → `compositore-maddalena-casulana`. Secondo Treccani un mottetto celebrativo a cinque voci di Maddalena Casulana fu eseguito a Monaco di Baviera nel febbraio 1568 per iniziativa di Orlando di Lasso, durante le nozze di Guglielmo di Baviera con Renata di Lorena. È documentazione di sostegno esecutivo, non attribuzione di co-composizione. [Fonte 1](https://www.treccani.it/enciclopedia/maddalena-mezari_%28Dizionario-Biografico%29/)

### Relazioni e identità già pubblicate, escluse dall’accumulo

- **Bach → Mendelssohn**: già presente come `infl-bach-mendelssohn` nel gruppo influenze.
- **Giovanni Gabrieli → Heinrich Schütz**: già presente come `form-giovanni-gabrieli-schutz` nel gruppo formazione.
- **Madrigalismo cinquecentesco → Maddalena Casulana**: già presente come `lotto01-scuola-casulana`. Il nodo `compositore-maddalena-casulana` è già censito. Registrata solo una candidata correzione degli alias.

### Distinzioni storiche e filologiche

- Nell’*opéra-comique* sono possibili trame tragiche e la presenza alla Salle Favart non basta, da sola, a dimostrare il genere formale.
- Le relazioni con compositori del passato indicano studio, ripresa o trascrizione di partiture, mai incontri impossibili.
- Ockeghem–Josquin: il lamento e le citazioni musicali sono documentati, la relazione di insegnamento non lo è.
- I testi di Giulio Strozzi collegano lavori specifici di Monteverdi e Barbara Strozzi, non semplici rapporti di parentela.
- Vittoria e Raffaella Aleotti mantengono identità distinte, salvo futura revisione critica fondata su documenti.

### Proiezione dopo fusione (NON pubblicata)

- **nodes**: 517
- **composers**: 297
- **edges**: 906
- **relations**: 738
- **schools**: 339
- **original_composers_without_school**: 5
- **new_composers_without_school**: 9
- **composers_without_school**: 14

**Validazione locale:** struttura, unicità dei nuovi ID, referenti e fonti della tranche 08f. **Da fare:** verifica completa degli URL, validatori originali Node.js e collaudo nel browser.

---

# Resoconto audit 08g–08h

# Musurgia Mundi — Audit 08g cumulativo · 6 ottobre 2026

**Lotto preparatorio. Nessun commit o push sul branch `main`.**

## Bilancio verificato sul file locale

- Compositori selezionati: **40**; con almeno un arco nuovo: **38**; senza nuovo arco per mancanza di sufficiente incremento distinto: **2**.
- Relazioni nuove della tranche: **56**; nodi intermedi nuovi: **39**.
- Accumulo totale riconciliato: **183 relazioni** e **122 nodi**.
- Proiezione aritmetica (non pubblicata): **555 nodi** e **793 relazioni specialistiche**; 906 archi generali sul main (senza fusione).
- Distribuzione della tranche: **collaborazioni 6**, **genealogie 32**, **influenze 2**, **scuole 16**.

## I quaranta compositori esaminati

1. `hildegard-von-bingen` — audit8g-hildegard-ordo-virtutum
2. `guillaume-de-machaut` — audit8g-machaut-messe-notre-dame, audit8g-machaut-formes-fixes
3. `guillaume-dufay` — audit8g-dufay-nuper-rosarum, audit8g-dufay-chanson-borgognona
4. `francesco-landini` — audit8g-landini-ballata-trecento
5. `gherardello-da-firenze` — audit8g-gherardello-ballata-trecento, audit8g-gherardello-caccia-tosto
6. `johannes-ockeghem` — audit8g-ockeghem-cappella-regia, audit8g-binchois-ockeghem-deploration
7. `jacob-obrecht` — audit8g-obrecht-bruges
8. `gilles-binchois` — audit8g-binchois-chanson-borgognona, audit8g-binchois-ockeghem-deploration
9. `heinrich-isaac` — audit8g-isaac-medici-corte, audit8g-lorenzo-isaac-mecenatismo
10. `jacob-clemens-non-papa` — audit8g-clemens-bruges, audit8g-clemens-souterliedekens
11. `giovanni-pierluigi-da-palestrina` — audit8g-palestrina-cappella-giulia
12. `bartolomeo-tromboncino` — audit8g-isabella-tromboncino-mantova
13. `marchetto-cara` — audit8g-isabella-cara-mantova
14. `vittoria-aleotti` — nessuna nuova relazione distinta inserita
15. `john-dowland` — audit8g-dowland-ayres-liuto
16. `orlando-gibbons` — audit8g-gibbons-chapel-royal
17. `tomas-luis-de-victoria` — audit8g-victoria-collegio-germanico
18. `cristobal-de-morales` — audit8g-morales-cappella-pontificia, audit8g-morales-guerrero-ricezione
19. `francisco-guerrero` — audit8g-guerrero-cattedrale-siviglia, audit8g-morales-guerrero-ricezione
20. `juan-del-encina` — audit8g-encina-villancico-teatro
21. `giovanni-animuccia` — audit8g-animuccia-cappella-giulia, audit8g-animuccia-lauda-filippina
22. `giovanni-francesco-anerio` — audit8g-anerio-lauda-filippina, audit8g-anerio-teatro-armonico-1619
23. `costanzo-festa` — audit8g-festa-cappella-pontificia, audit8g-festa-madrigale-primo-cinquecento
24. `claudio-merulo` — audit8g-merulo-toccata-organo, audit8g-merulo-san-marco
25. `johann-walter` — audit8g-walter-corale-gesangbuch, audit8g-lutero-walter-innodia
26. `michael-praetorius` — audit8g-praetorius-organologia, audit8g-praetorius-terpsichore
27. `johann-hermann-schein` — audit8g-schein-banchetto-musicale, audit8g-schein-thomaskantor
28. `samuel-scheidt` — audit8g-scheidt-tabulatura-nova
29. `giovanni-bonaventura-viviani` — nessuna nuova relazione distinta inserita
30. `tomaso-albinoni` — audit8g-albinoni-concerto-oboe
31. `giovanni-legrenzi` — audit8g-legrenzi-mendicanti, audit8g-legrenzi-san-marco
32. `elisabeth-jacquet-de-la-guerre` — audit8g-jacquet-tragedie-cephale, audit8g-jacquet-sonates-1707
33. `nicola-logroscino` — audit8g-logroscino-opera-buffa, audit8g-leo-logroscino-demetrio
34. `leonardo-leo` — audit8g-leo-logroscino-demetrio, audit8g-leo-buffa-amor
35. `pietro-alessandro-guglielmi` — audit8g-guglielmi-opera-buffa
36. `franz-xaver-richter` — audit8g-richter-cattedrale-strasburgo
37. `hugo-wolf` — audit8g-wolf-lieder-morike
38. `bedrich-smetana` — audit8g-smetana-poema-ma-vlast
39. `aleksandr-borodin` — audit8g-borodin-steppa
40. `luigi-russolo` — audit8g-russolo-rumorismo, audit8g-russolo-piatti-esperimenti

## Relazioni documentate della tranche

### Scuole (16)

- **audit8g-ockeghem-cappella-regia** · `cappella-regia-francia-quattrocento` → `compositore-johannes-ockeghem` · `servizio-di-corte-e-direzione`. Dal 1452 Ockeghem fu attivo nella cappella dei sovrani francesi, assumendo progressivamente responsabilità elevate; istituzione documentata e non generica appartenenza alla scuola fiamminga. Fonti: [fonte 1](https://www.larousse.fr/archives/grande-encyclopedie/page/9798).
- **audit8g-obrecht-bruges** · `cappella-saint-donatien-bruges` → `compositore-jacob-obrecht` · `servizio-istituzionale-cappella`. Obrecht fu succentor della chiesa di Saint-Donatien a Bruges dal 1485 al 1491, con responsabilità quotidiane verso i cantori. Il nodo si riferisce alla storia istituzionale senza equiparare i diversi periodi di servizio. Fonti: [fonte 1](https://academic.oup.com/book/49149/chapter-abstract/422054657).
- **audit8g-clemens-bruges** · `cappella-saint-donatien-bruges` → `compositore-jacob-clemens-non-papa` · `maestro-di-canto-saint-donatien-1544`. Nel 1544 Clemens non Papa fu maestro di canto a Saint-Donatien a Bruges. Il servizio non prova un rapporto con Obrecht, morto nel 1505. Fonti: [fonte 1](https://www.larousse.fr/encyclopedie/musdico/Jacques_Cl%C3%A9ment_ou_Jacob_Clemens_dit_Clemens_Non_Papa/166857).
- **audit8g-isaac-medici-corte** · `corte-musicale-medicea-firenze-quattrocento` → `compositore-heinrich-isaac` · `attivita-musicale-corte-medicea`. Isaac fu attivo a Firenze dal 1485 e nella cerchia di Lorenzo de’ Medici: partecipò alla vita musicale medicea e ai canti carnascialeschi, senza attribuirgli l’intera tradizione di corte. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/i-canti-carnascialeschi_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/).
- **audit8g-palestrina-cappella-giulia** · `cappella-giulia-san-pietro-roma` → `compositore-giovanni-pierluigi-da-palestrina` · `direzione-cappella-giulia`. Palestrina diresse la Cappella Giulia dal 1551 al 1555 e di nuovo dal 1571 fino alla morte; non fu mai in contemporanea a capo dell’istituzione con Animuccia. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/pierluigi-da-palestrina-giovanni-detto-anche-il-palestrina_%28Dizionario-Biografico%29/).
- **audit8g-animuccia-cappella-giulia** · `cappella-giulia-san-pietro-roma` → `compositore-giovanni-animuccia` · `maestro-di-cappella-1555-1571`. Animuccia subentrò a Palestrina nella Cappella Giulia nel 1555, mantenendo l’incarico fino alla morte nel 1571; non viene registrato come allievo del predecessore. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/giovanni-animuccia_%28Enciclopedia-Italiana%29/).
- **audit8g-gibbons-chapel-royal** · `chapel-royal-inghilterra-stuart` → `compositore-orlando-gibbons` · `organista-chapel-royal`. Gibbons fu organista della Chapel Royal dal 1604 al 1625, componendo repertorio sacro, profano e per tastiera; la fonte dell’Abbazia di Westminster ne documenta l’incarico. Fonti: [fonte 1](https://www.westminster-abbey.org/abbey-commemorations/commemorations/orlando-and-christopher-gibbons).
- **audit8g-victoria-collegio-germanico** · `collegio-germanico-roma-cinquecento` → `compositore-tomas-luis-de-victoria` · `cantore-docente-direzione-collegio`. Victoria frequentò il Collegio Germanico e vi esercitò funzioni di cantore, organista e docente; la sua appartenenza alla cultura romana non prova da sola un insegnamento diretto con Palestrina. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/tomas-luis-de-victoria_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/).
- **audit8g-morales-cappella-pontificia** · `cappella-pontificia-roma-cinquecento` → `compositore-cristobal-de-morales` · `cantore-cappella-papale`. Morales fu membro della cappella papale a Roma dal 1535 al 1545 secondo la ricostruzione biografica; si registra un ruolo verificato, non una scuola generica di polifonia spagnola. Fonti: [fonte 1](https://www.newadvent.org/cathen/16064a.htm), [fonte 2](https://www.treccani.it/enciclopedia/cristobal-morales_%28Enciclopedia-Italiana%29/).
- **audit8g-guerrero-cattedrale-siviglia** · `cappella-cattedrale-siviglia-cinquecento` → `compositore-francisco-guerrero` · `direzione-attivita-cattedrale`. Guerrero entrò come cantore alla cattedrale di Siviglia nel 1542 e successivamente ne diresse la cappella senza sempre recare formalmente quel titolo. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/francisco-guerrero/).
- **audit8g-festa-cappella-pontificia** · `cappella-pontificia-roma-cinquecento` → `compositore-costanzo-festa` · `cantore-papale-compositore`. Costanzo Festa svolse la propria attività di cantore e compositore al Vaticano, nel contesto della cappella pontificia; il legame è istituzionale, non un discepolato dal compositore Morales. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/costanzo-festa_%28Enciclopedia-Italiana%29/).
- **audit8g-merulo-san-marco** · `cappella-san-marco-venezia` → `compositore-claudio-merulo` · `organista-1557-1584`. Merulo fu organista nella basilica di San Marco dal 1557 al 1584, durante gli anni di lavoro anche di Andrea Gabrieli, senza prova di rapporto maestro-allievo fra loro. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/claudio-merulo_%28Enciclopedia-Italiana%29/).
- **audit8g-schein-thomaskantor** · `thomaskantorat-lipsia-seicento` → `compositore-johann-hermann-schein` · `thomaskantor-1616-1630`. Schein fu Thomaskantor di Lipsia dal 1616 al 1630, svolgendo attività musicale nelle chiese cittadine e nelle funzioni pubbliche; il fatto non implica incontro con Bach, posteriore. Fonti: [fonte 1](https://germanhistorydocs.org/en/from-the-reformations-to-the-thirty-years-war-1500-1648/johann-hermann-schein-suite-no-2-from-banchetto-musicale-1617).
- **audit8g-legrenzi-mendicanti** · `ospedale-mendicanti-venezia` → `compositore-giovanni-legrenzi` · `direzione-coro-cappella-1676-1683`. Legrenzi fu maestro di coro ai Mendicanti dal luglio 1676 e maestro di cappella dal 1683; distinzione tra questa istituzione educativa e l’incarico successivo a San Marco. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/giovanni-legrenzi_%28Dizionario-Biografico%29/).
- **audit8g-legrenzi-san-marco** · `cappella-san-marco-venezia` → `compositore-giovanni-legrenzi` · `maestro-di-cappella-1685`. Legrenzi assunse la guida della cappella di San Marco il 23 aprile 1685, dopo essere stato vicemaestro nel 1683; non è contemporaneo del Merulo in quella carica. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/giovanni-legrenzi_%28Dizionario-Biografico%29/).
- **audit8g-richter-cattedrale-strasburgo** · `cappella-cattedrale-strasburgo-settecento` → `compositore-franz-xaver-richter` · `maestro-cappella-1769-1789`. Richter fu maestro di cappella della cattedrale di Strasburgo dal 1769 fino alla morte nel 1789, sviluppandovi soprattutto musica sacra dopo gli anni di Mannheim. Fonti: [fonte 1](https://www.larousse.fr/encyclopedie/musdico/Franz_Xaver_Richter/169859).

### Influenze (2)

- **audit8g-binchois-ockeghem-deploration** · `compositore-gilles-binchois` → `compositore-johannes-ockeghem` · `ricezione-commemorazione-musicale`. Ockeghem scrisse una déploration sulla morte di Binchois, richiamata nella biografia Larousse; si registra un omaggio storico, senza dedurne studi comuni. Fonti: [fonte 1](https://www.larousse.fr/encyclopedie/musdico/Gilles_Binchois/166271).
- **audit8g-morales-guerrero-ricezione** · `compositore-cristobal-de-morales` → `compositore-francisco-guerrero` · `studio-opere-insegnamenti-documentato`. Guerrero dichiarò di avere tratto beneficio dal magistero musicale di Morales; la ricostruzione Treccani avverte che si trattò verosimilmente di studio delle opere più che di lezioni personali. Non registrare come maestro-allievo. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/francisco-guerrero_%28Enciclopedia-Italiana%29/).

### Genealogie (32)

- **audit8g-hildegard-ordo-virtutum** · `dramma-musicale-allegorico-medievale` → `compositore-hildegard-von-bingen` · `composizione-dramma-liturgico`. Ildegarda compose Ordo virtutum, dramma liturgico allegorico pervenuto con testo e musica. Non si deduce una filiazione diretta con il melodramma nato secoli dopo. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/musica-e-spiritualita-femminile-ildegarda-di-bingen_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/).
- **audit8g-machaut-messe-notre-dame** · `messa-polifonica-ciclo-unitario-medievale` → `compositore-guillaume-de-machaut` · `messa-polifonica-ciclo-d-autore`. La Messe de Nostre Dame documenta una messa polifonica interamente composta da un unico autore in un secolo in cui spesso i movimenti erano raccolti da fonti differenti. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/guillaume-de-machaut/).
- **audit8g-machaut-formes-fixes** · `formes-fixes-francesi-trecento` → `compositore-guillaume-de-machaut` · `ballade-rondeau-virelai`. Machaut unì testi poetici e strutture musicali delle forme fisse francesi, oltre al mottetto e alla messa; non equivale a un collegamento con autori successivi in assenza di documenti. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/l-ars-nova-francese-e-guillaume-de-machaut_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/).
- **audit8g-dufay-nuper-rosarum** · `mottetto-civico-cerimoniale-quattrocento` → `compositore-guillaume-dufay` · `mottetto-consacrazione-duomo-firenze-1436`. Nuper rosarum flores fu composto da Dufay per la consacrazione di Santa Maria del Fiore il 25 marzo 1436, secondo la scheda dell’opera della BnF. Non si assume come provata l’equivalenza tra le proporzioni della partitura e quelle della cupola. Fonti: [fonte 1](https://catalogue.bnf.fr/ark:/12148/cb139117026), [fonte 2](https://academic.oup.com/book/41448/chapter-abstract/352809578).
- **audit8g-dufay-chanson-borgognona** · `chanson-borgognona-quattrocento` → `compositore-guillaume-dufay` · `repertorio-chanson-cortigiana`. Dufay è annoverato da Larousse fra gli autori della chanson borgognona: il nesso riguarda repertorio e circolazione di opere, non un incarico stabile presunto alla corte di Filippo il Buono. Fonti: [fonte 1](https://www.larousse.fr/encyclopedie/musdico/cour_de_Bourgogne/166402).
- **audit8g-binchois-chanson-borgognona** · `chanson-borgognona-quattrocento` → `compositore-gilles-binchois` · `chanson-cortigiana-ducale`. Gilles Binchois fu musicista di Filippo il Buono e autore di chansons, soprattutto in forma di rondeau; è un legame storico con il repertorio e la committenza borgognona. Fonti: [fonte 1](https://www.larousse.fr/encyclopedie/musdico/Gilles_Binchois/166271).
- **audit8g-landini-ballata-trecento** · `ballata-italiana-trecento` → `compositore-francesco-landini` · `corpus-ballate-polifoniche`. Per Landini sono attestate 141 ballate a due e tre voci, conservate in vari manoscritti fra cui il codice Squarcialupi; non si presume che tutte le ballate abbiano un unico stile. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/francesco-landini_%28Dizionario-Biografico%29/).
- **audit8g-gherardello-ballata-trecento** · `ballata-italiana-trecento` → `compositore-gherardello-da-firenze` · `ballate-monodiche-trecento`. Le fonti conservano cinque ballate a una voce di Gherardello, accanto ai madrigali e alla caccia; registrata pratica di genere, non apprendistato da Landini. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/gherardello-da-firenze_%28Dizionario-Biografico%29/).
- **audit8g-gherardello-caccia-tosto** · `caccia-italiana-trecento` → `compositore-gherardello-da-firenze` · `caccia-tosto-che-alba`. La caccia Tosto che l’alba, conservata nel codice Squarcialupi, esibisce imitazione canonica e una vivida dimensione descrittiva. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/gherardello-da-firenze_%28Dizionario-Biografico%29/).
- **audit8g-clemens-souterliedekens** · `souterliedekens-olandesi-cinquecento` → `compositore-jacob-clemens-non-papa` · `polifonia-salmi-vernacolari`. Clemens compose i Souterliedekens, salmi olandesi trattati polifonicamente su melodie diffuse e pubblicati in quattro libri da Susato; non è una generica associazione confessionale. Fonti: [fonte 1](https://www.larousse.fr/encyclopedie/musdico/Jacques_Cl%C3%A9ment_ou_Jacob_Clemens_dit_Clemens_Non_Papa/166857).
- **audit8g-dowland-ayres-liuto** · `song-ayre-liuto-inglese` → `compositore-john-dowland` · `canzone-voce-intavolatura-liuto`. Il primo libro di Songes or Ayres di Dowland uscì nel 1597 con intavolatura per liuto; pratiche vocali, monodiche e di consort documentate, senza identificarlo esclusivamente come compositore per liuto. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/john-dowland_%28Enciclopedia-Italiana%29/), [fonte 2](https://www.treccani.it/enciclopedia/song/).
- **audit8g-encina-villancico-teatro** · `villancico-rinascimentale-iberico` → `compositore-juan-del-encina` · `villancico-intonazione-cancionero`. Il villancico Ay triste que vengo di Juan del Encina è testimoniato nel Cancionero de 1496 e nella tradizione del Cancionero musical de Palacio; la ricerca UNED ne pubblica il testo e l’attestazione musicale. Fonti: [fonte 1](https://poemas.uned.es/poema/ay-triste-que-vengo-juan-del-encina/).
- **audit8g-animuccia-lauda-filippina** · `lauda-musicale-oratorio-filippino` → `compositore-giovanni-animuccia` · `libri-laudi-oratorio-filippo-neri`. Animuccia pubblicò libri di laudi per le riunioni dell’Oratorio di Filippo Neri, con attenzione alla comprensione del testo e alla partecipazione dei fedeli. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/l-oratorio-musicale_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/).
- **audit8g-anerio-lauda-filippina** · `lauda-musicale-oratorio-filippino` → `compositore-giovanni-francesco-anerio` · `laudi-spirituali-filippine`. Le laudi di Giovanni Francesco Anerio figurano già nel Tempio armonico di Ancina del 1599, nel contesto del culto filippino; non viene trasformato in discepolo personale di Animuccia. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/giovanni-francesco-anerio_%28Dizionario-Biografico%29/).
- **audit8g-anerio-teatro-armonico-1619** · `oratorio-drammatico-volgare-seicento` → `compositore-giovanni-francesco-anerio` · `teatro-armonico-spirituale-1619`. Il Teatro armonico spirituale (1619) raccoglie dialoghi spirituali e testi rappresentati vocalmente con basso per organo: un passaggio tecnico-drammatico dall’uso della lauda all’oratorio. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/giovanni-francesco-anerio_%28Dizionario-Biografico%29/).
- **audit8g-festa-madrigale-primo-cinquecento** · `madrigale` → `compositore-costanzo-festa` · `madrigali-cinquecenteschi-prima-generazione`. Festa pubblicò un libro di madrigali a tre voci nel 1537 e contribuì alla diffusione della scrittura madrigalistica italiana; non si asserisce che abbia inventato da solo il genere. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/costanzo-festa_%28Enciclopedia-Italiana%29/).
- **audit8g-merulo-toccata-organo** · `toccata-organistica-rinascimentale` → `compositore-claudio-merulo` · `toccate-organistiche-stampate`. Le toccate per organo di Merulo furono pubblicate anche con l’edizione Verovio del 1594; specifica prassi strumentale e editoriale, non influenza personale inferita su Frescobaldi. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/claudio-merulo/).
- **audit8g-walter-corale-gesangbuch** · `polifonia-corale-luterana-cinquecento` → `compositore-johann-walter` · `geistliches-gesangbuchlein-1524`. Nel 1524 Walter pubblicò una raccolta polifonica di canti per la liturgia evangelica; la fonte Treccani evidenzia il ruolo nella formazione del repertorio corale della Riforma. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/la-musica-religiosa-protestante_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/).
- **audit8g-praetorius-organologia** · `organologia-syntagma-musicum` → `compositore-michael-praetorius` · `trattato-syntagma-musicum`. Il Syntagma musicum di Praetorius (1615–1620), soprattutto De organographia, tratta strumenti e tecniche con illustrazioni fondamentali per la ricostruzione storica; non è un manuale scritto da un allievo. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/michael-praetorius_%28Enciclopedia-Italiana%29/).
- **audit8g-praetorius-terpsichore** · `danze-strumentali-terpsichore` → `compositore-michael-praetorius` · `antologia-danze-1612`. La raccolta Terpsichore (1612) comprende circa 500 danze, in larga parte riprese da repertori di maestri francesi; Praetorius è curatore e compositore, non autore originale di tutti i brani. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/michael-praetorius_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/).
- **audit8g-schein-banchetto-musicale** · `suite-danze-banchetto-musicale` → `compositore-johann-hermann-schein` · `raccolta-banchetto-musicale-1617`. Banchetto musicale (1617) contiene suite di danze per occasioni civiche e conviviali; la fonte German History in Documents and Images pubblica un esempio e il contesto storico. Fonti: [fonte 1](https://germanhistorydocs.org/en/from-the-reformations-to-the-thirty-years-war-1500-1648/johann-hermann-schein-suite-no-2-from-banchetto-musicale-1617).
- **audit8g-scheidt-tabulatura-nova** · `tabulatura-nova-organo-seicento` → `compositore-samuel-scheidt` · `tabulatura-nova-1624`. La Tabulatura nova (1624) comprende fantasie, variazioni su corali, toccate e musica liturgica per organo; le raccolte di Scheidt attestano la trasformazione della scrittura per tastiera tedesca. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/samuel-scheidt_%28Enciclopedia-Italiana%29/).
- **audit8g-albinoni-concerto-oboe** · `concerto-solistico-oboe-primo-settecento` → `compositore-tomaso-albinoni` · `concerti-oboe-op7-op9`. Albinoni dedicò ampio spazio all’oboe solista e a due oboi nelle opere 7 e 9, valorizzando un timbro meno diffuso come protagonista di concerti italiani dell’epoca. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/tomaso-albinoni_%28Enciclopedia-Italiana%29/).
- **audit8g-jacquet-tragedie-cephale** · `tragedie-en-musique-francese` → `compositore-elisabeth-jacquet-de-la-guerre` · `cephale-et-procris-1694`. La BnF cataloga la partitura del 1694 della tragédie en musique Céphale et Procris di Élisabeth Jacquet de La Guerre; non si attribuisce a Lully la composizione o la direzione dell’opera. Fonti: [fonte 1](https://catalogue.bnf.fr/rechercher.do?index=TOUS3&numNotice=12192446&typeNotice=u).
- **audit8g-jacquet-sonates-1707** · `sonata-francese-violino-basso-continuo` → `compositore-elisabeth-jacquet-de-la-guerre` · `sonates-violon-clavecin-1707`. La BnF cataloga le Sonates pour le viollon et pour le clavecin del 1707 di Jacquet de La Guerre per violino, viola da gamba e basso continuo; il titolo di stampa non deve far confondere l’organico con un duo per due soli strumenti. Fonti: [fonte 1](https://catalogue.bnf.fr/ark:/12148/cb44908890h).
- **audit8g-logroscino-opera-buffa** · `opera-buffa` → `compositore-nicola-logroscino` · `commedie-per-musica-concertati`. Logroscino scrisse commedie per musica napoletane fra cui Il governatore (1747), elaborando concertati vivaci. Treccani avverte che non può essere chiamato inventore del finale concertato. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/nicola-logroscino_%28Dizionario-Biografico%29/).
- **audit8g-leo-buffa-amor** · `opera-buffa` → `compositore-leonardo-leo` · `commedia-per-musica-amor-vuol-sofferenza`. Leonardo Leo compose Amor vuol sofferenza, opera in seguito utilizzata nella tradizione di rifacimenti e adattamenti napoletani citati nella biografia di Logroscino. La relazione riguarda repertorio, non invenzione esclusiva del genere. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/nicola-logroscino_%28Dizionario-Biografico%29/).
- **audit8g-guglielmi-opera-buffa** · `opera-buffa` → `compositore-pietro-alessandro-guglielmi` · `produzione-operistica-buffa`. Treccani documenta 61 opere buffe certe di Pietro Alessandro Guglielmi e la circolazione fra Napoli, Venezia e Londra; si registra produzione e diffusione, non una scuola di allievi. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/pietro-alessandro-guglielmi_%28Enciclopedia-Italiana%29/).
- **audit8g-wolf-lieder-morike** · `lied-su-poesia-morike` → `compositore-hugo-wolf` · `lieder-testi-poeta-morike`. Wolf dedicò parte fondamentale del repertorio dei suoi circa trecento Lieder alle poesie di Eduard Mörike; non si deduce incontro diretto, il poeta essendo morto prima del ciclo. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/hugo-wolf/).
- **audit8g-smetana-poema-ma-vlast** · `poema-sinfonico-ottocentesco` → `compositore-bedrich-smetana` · `sei-poemi-sinfonici-ma-vlast`. Smetana compose i sei poemi sinfonici di Má vlast (1874–1879), fra cui Vltava: specifica sintesi di paesaggio, cultura nazionale e forma orchestrale. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/bedrich-smetana/).
- **audit8g-borodin-steppa** · `poema-sinfonico-ottocentesco` → `compositore-aleksandr-borodin` · `quadro-sinfonico-nelle-steppe`. Borodin compose nel 1880 In the Steppes of Central Asia, tableau orchestrale con un programma narrativo e orchestrazione descrittiva. Non si confonde la dedica a Liszt con una lezione diretta. Fonti: [fonte 1](https://classical.music.apple.com/us/work/alexander-borodin-1833-pp9), [fonte 2](https://imslp.org/wiki/In_the_Steppes_of_Central_Asia_%28Borodin%2C_Aleksandr%29).
- **audit8g-russolo-rumorismo** · `musica-del-rumore-futurista` → `compositore-luigi-russolo` · `arte-dei-rumori-intonarumori-1913`. Russolo scrisse L’arte dei rumori (1913) e inventò famiglie di intonarumori per una pratica musicale fondata sull’organizzazione dei rumori; il collegamento è storico-tecnologico e non mera somiglianza con musica elettronica successiva. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/luigi-carlo-filippo-russolo_%28Dizionario-Biografico%29/), [fonte 2](https://www.treccani.it/enciclopedia/intonarumori/).

### Collaborazioni (6)

- **audit8g-lorenzo-isaac-mecenatismo** · `persona-lorenzo-de-medici` → `compositore-heinrich-isaac` · `mecenatismo-musicale-fiorentino`. La documentazione storiografica colloca Isaac nella cerchia musicale di Lorenzo e lo indica come istruttore musicale dei figli del Magnifico: non si attribuisce automaticamente paternità di tutti i canti di corte. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/i-canti-carnascialeschi_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/).
- **audit8g-isabella-cara-mantova** · `persona-isabella-d-este` → `compositore-marchetto-cara` · `mecenatismo-canto-corte-gonzaga`. Isabella d’Este volle Marchetto Cara presso di sé nella Mantova dei Gonzaga dal 1494; il nesso riguarda la musica di corte e il mecenatismo, non un rapporto di composizione a quattro mani. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/isabella-d-este-marchesa-di-mantova_%28Dizionario-Biografico%29/).
- **audit8g-isabella-tromboncino-mantova** · `persona-isabella-d-este` → `compositore-bartolomeo-tromboncino` · `mecenatismo-corte-gonzaga`. Tromboncino fu presente alla corte di Mantova dove Isabella d’Este favoriva le frottole; legame di committenza e servizio professionale, distinto dalla fortuna successiva delle stampe di Petrucci. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/mantova_%28Enciclopedia-Italiana%29/).
- **audit8g-lutero-walter-innodia** · `persona-martin-lutero` → `compositore-johann-walter` · `consulenza-liturgico-musicale-riforma`. Lutero si avvalse della competenza di Johann Walter per l’innodia evangelica; la relazione è consulenza e partecipazione a un progetto liturgico verificato, non automatica coautoria di tutti i corali. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/martin-lutero-e-johann-walter_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/).
- **audit8g-leo-logroscino-demetrio** · `compositore-leonardo-leo` → `compositore-nicola-logroscino` · `aria-inserita-demetrio-1738`. Logroscino scrisse nel giugno 1738 un’aria per il secondo atto del Demetrio di Leonardo Leo al San Carlo di Napoli: contributo concreto a una produzione teatrale, non discepolato. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/nicola-logroscino_%28Dizionario-Biografico%29/).
- **audit8g-russolo-piatti-esperimenti** · `persona-ugo-piatti` → `compositore-luigi-russolo` · `collaborazione-prototipi-intonarumori`. Treccani documenta nel 1913 il lavoro sperimentale di Russolo con l’ingegnere Ugo Piatti nello studio milanese. È una collaborazione tecnica attestata, non un rapporto di insegnamento compositivo. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/luigi-carlo-filippo-russolo_%28Dizionario-Biografico%29/).

## Esclusioni e cautele

- Riparati **3** URL con codifica incompleta di `civiltà` in citazioni Treccani dei lotti precedenti, senza alterare le relazioni o il numero di nodi.
- **Juan del Encina:** riutilizzato il nodo preesistente `villancico-rinascimentale-iberico`, evitando un doppione semantico.
- **Vittoria Aleotti:** il nesso madrigalistico è già preparato nell’audit 08f. Non si aggiunge una relazione duplicata né si scioglie senza prove la controversia sull’identità di Raffaella e Vittoria.
- **Giovanni Bonaventura Viviani:** il rapporto con la corte musicale di Innsbruck è già nel main. La somiglianza con lo stile di Cesti non dimostra un’influenza diretta, perciò nessun nuovo arco.
- **Ockeghem/Binchois:** memoria compositiva, non scuola diretta. **Morales/Guerrero:** studio delle opere e magistero riferito, non lezioni individuali accertate.
- **Tromboncino e Cara:** stesso ambiente di Isabella d’Este non equivale a un legame formativo reciproco. **Isaac:** mecenatismo mediceo, non collaborazione paritetica con Lorenzo nella composizione.
- **Logroscino:** non viene attribuita l’invenzione del finale concertato. **Dufay:** sono controverse le interpretazioni architettonico-numeriche di Nuper rosarum flores.
- Controllo effettuato con `main`: nessuna collisione dei 39 identificativi dei nuovi nodi, nessun doppione con la coppia categoria-sorgente-destinazione delle 56 relazioni. Da completare: identità esterne, controllo completo degli URL, suite Node.js e test visuale.
- Non assumere che 40 compositori abbiano completato una ricognizione esaustiva su tutte le lenti: si tratta di un lotto di approfondimenti con fonti selezionate e nodi utili.


---

## Audit 08h · 40 autori e genealogie documentate · 7 ottobre 2026

**Nessun commit.** Il lavoro continua in forma locale e preparatoria sullo stato pubblico precedente, con attenzione alle relazioni documentate, non alle etichette decorative.

**Bilancio del lotto:** 63 nuove relazioni, 53 nuovi nodi, 40 compositori con almeno una nuova relazione. Gli autori verificati appartengono alle genealogie dal XII al XXI secolo.

**Distribuzione:** genealogie: 39, scuole: 10, collaborazioni: 10, influenze: 4.

**40 autori esaminati:** leonin, perotin, adam-de-la-halle, jacopo-da-bologna, giovanni-da-cascia, andrea-gabrieli, thomas-morley, giuseppe-tartini, giuseppe-torelli, jacopo-peri, maria-teresa-agnesi, dietrich-buxtehude, johann-pachelbel, john-blow, michele-novaro, pietro-mascagni, ruggero-leoncavallo, arrigo-boito, georges-bizet, pauline-viardot, louise-farrenc, arthur-honegger, sergej-prokof-ev, dmitrij-sostakovic, aleksandr-skrjabin, sergej-rachmaninov, ottorino-respighi, alfredo-casella, goffredo-petrassi, bela-bartok, zoltan-kodaly, witold-lutos-awski, krzysztof-penderecki, henryk-gorecki, paul-hindemith, karlheinz-stockhausen, la-monte-young, terry-riley, john-adams, michael-nyman.

### Scuole · 10 relazioni

- **audit8h-giovanni-cascia-scaligeri** — `corte-scaligera-musica-verona-trecento` → `compositore-giovanni-da-cascia`. **attivita-cortigiana-verona**. La testimonianza di Filippo Villani, analizzata nel Dizionario biografico, colloca Giovanni da Cascia alla corte di Mastino II della Scala in relazione con una competizione artistica. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/giovanni-da-cascia_%28Dizionario-Biografico%29/)
- **audit8h-jacopo-scaligeri** — `corte-scaligera-musica-verona-trecento` → `compositore-jacopo-da-bologna`. **presenza-corte-scaligera**. Jacopo da Bologna e Giovanni da Cascia furono descritti come musicisti sostenuti dagli Scaligeri: l’ambiente comune non prova un rapporto maestro-allievo. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/giovanni-da-cascia_%28Dizionario-Biografico%29/) · [fonte 2](https://www.treccani.it/enciclopedia/jacopo-da-bologna_%28Dizionario-Biografico%29/)
- **audit8h-andrea-gabrieli-san-marco** — `cappella-san-marco-venezia` → `compositore-andrea-gabrieli`. **organista-secondo-organo-1566**. Andrea Gabrieli assunse stabilmente nel 1566 il servizio di organista presso San Marco a Venezia, accanto all’attività di Claudio Merulo. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/andrea-gabrieli_%28Dizionario-Biografico%29/)
- **audit8h-torelli-san-petronio** — `cappella-san-petronio-bologna` → `compositore-giuseppe-torelli`. **servizio-strumentale-san-petronio**. Torelli fu membro della cappella di San Petronio a Bologna dal 1686 e vi operò nuovamente dopo il 1701; le raccolte conservano sinfonie e concerti. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/giuseppe-torelli/)
- **audit8h-buxtehude-abendmusiken** — `abendmusiken-lubecca-marienkirche` → `compositore-dietrich-buxtehude`. **organizzazione-concerti-serali-lubecca**. Buxtehude sviluppò dal 1668 e rese celebri le Abendmusiken alla Marienkirche di Lubecca, con concerti sacri in occasione dell’Avvento; non gli si attribuisce l’invenzione assoluta della tradizione. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/dietrich-buxtehude_%28Enciclopedia-Italiana%29/)
- **audit8h-boito-scapigliatura** — `scapigliatura-musicale-italiana` → `compositore-arrigo-boito`. **partecipazione-scapigliatura**. Treccani identifica Boito come esponente della Scapigliatura milanese: il nodo designa un ambiente letterario e musicale documentato, non una scuola di composizione formalizzata. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/arrigo-boito_%28Enciclopedia-Italiana%29/)
- **audit8h-casella-festival-venezia-1930** — `festival-musica-contemporanea-venezia-1930` → `compositore-alfredo-casella`. **organizzazione-festival-1930**. Casella organizzò il Festival internazionale di musica contemporanea di Venezia del settembre 1930 e svolse attività di indirizzo culturale per gli anni successivi: rapporto organizzativo, non scuola omogenea. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/alfredo-casella_%28Dizionario-Biografico%29/)
- **audit8h-bartok-ricerca-popolar-ungherese** — `etnomusicologia-campo-ungheria-bartok-kodaly` → `compositore-bela-bartok`. **ricerca-raccolta-analisi-melodie**. Bartók raccolse, classificò e analizzò canti tradizionali fin dal 1905, insieme a Kodály; l’arco descrive metodo di ricerca documentato, non semplice citazione di melodie folcloriche. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/bela-bartok/) · [fonte 2](https://www.treccani.it/enciclopedia/etnomusicologia_%28Enciclopedia-Italiana%29/)
- **audit8h-kodaly-ricerca-popolar-ungherese** — `etnomusicologia-campo-ungheria-bartok-kodaly` → `compositore-zoltan-kodaly`. **raccolta-folclore-scientifica**. Kodály svolse con Bartók ricerche sulla musica popolare magiara e coordinò anche la pubblicazione scientifica del Corpus musicae popularis hungaricae: collaborazione documentata distinta dall’adesione a una scuola nazionale generica. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/zoltan-kodaly/) · [fonte 2](https://www.treccani.it/enciclopedia/etnomusicologia_%28Enciclopedia-Italiana%29/)
- **audit8h-stockhausen-wdr-colonia** — `studio-elettronico-wdr-colonia` → `compositore-karlheinz-stockhausen`. **produzione-compositiva-elettroacustica**. Stockhausen realizzò nello Studio di Colonia della WDR Gesang der Jünglinge e Kontakte, intrecciando materiali vocali, elettronici e strumentali. Il rapporto indica il concreto laboratorio di produzione. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/la-musica-elettroacustica-fino-al-1970_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/)

### Formazione · 0 relazioni


### Influenze · 4 relazioni

- **audit8h-novaro-verdi-inno-nazioni** — `compositore-michele-novaro` → `compositore-giuseppe-verdi`. **citazione-canto-italiani-inno-nazioni-1862**. Nell’Inno delle Nazioni (1862) Verdi impiegò il Canto degli Italiani di Novaro come emblema dell’Italia accanto agli inni francese e britannico. È ricezione/citazione della melodia, non discepolato o incontro documentato. Fonti: [fonte 1](https://new.quirinale.it/page/inno)
- **audit8h-paganini-rachmaninov-rapsodia** — `compositore-niccolo-paganini` → `compositore-sergej-rachmaninov`. **variazioni-capriccio-24-1934**. Nella Rapsodia su un tema di Paganini op. 43 (1934) Rachmaninov costruì ventiquattro variazioni sul Capriccio n. 24 per violino: è una ripresa verificabile di materiale compositivo anteriore, non un incontro storico. Fonti: [fonte 1](https://imslp.org/wiki/Rhapsody_on_a_Theme_of_Paganini%2C_Op.43_%28Rachmaninoff%2C_Sergei%29)
- **audit8h-monteverdi-petrassi-modello-madrigale** — `compositore-claudio-monteverdi` → `compositore-goffredo-petrassi`. **ricezione-drammaturgia-madrigale**. Lo studio su Petrassi riconosce nel Coro di morti un richiamo consapevole al madrigale drammatico di Monteverdi. Si tratta di ricezione di un modello storico, non influenza biografica diretta. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/goffredo-petrassi_%28Dizionario-Biografico%29/)
- **audit8h-purcell-nyman-draughtsman** — `compositore-henry-purcell` → `compositore-michael-nyman`. **rielaborazione-purcell-cinema-1982**. Per la colonna sonora del film The Draughtsman’s Contract (1982) Nyman utilizzò elementi di pezzi di Purcell quale materiale di partenza, riorganizzandoli per l’organico e il linguaggio della propria band. È appropriazione musicale documentata, non un rapporto personale. Fonti: [fonte 1](https://www.michaelnyman.com/the-draughtsmans-contract)

### Genealogie · 39 relazioni

- **audit8h-leonin-magnus-liber** — `magnus-liber-organi-notre-dame` → `compositore-leonin`. **compilazione-organa-due-voci**. La tradizione di Anonimo IV attribuisce a Léonin la compilazione del Magnus liber organi e organa a due voci. Si qualifica l’attribuzione come testimonianza storica posteriore, non come autografo. Fonti: [fonte 1](https://www.larousse.fr/encyclopedie/musdico/L%C3%A9onin/168774) · [fonte 2](https://www.notredamedeparis.fr/en/understand/music/polyphony-and-motets/)
- **audit8h-perotin-revisione-organa** — `magnus-liber-organi-notre-dame` → `compositore-perotin`. **rielaborazione-organa-magnum-liber**. Pérotin rielaborò e ampliò gli organa di Léonin, aggiungendo strutture fino a quattro voci. È trasmissione e trasformazione di un corpus, senza postulare un rapporto individuale di insegnamento. Fonti: [fonte 1](https://www.notredamedeparis.fr/en/understand/music/polyphony-and-motets/)
- **audit8h-perotin-organum-quadruplum** — `organum-quadruplum-notre-dame` → `compositore-perotin`. **polifonia-liturgica-quattro-voci**. I grandi organa per quattro parti assegnati a Pérotin rendono udibile il passaggio dalla struttura a due voci a un’organizzazione polifonica più complessa. Fonti: [fonte 1](https://www.notredamedeparis.fr/en/understand/music/polyphony-and-motets/)
- **audit8h-adam-robin-marion** — `jeu-de-robin-et-marion` → `compositore-adam-de-la-halle`. **teatro-medievale-canto-scenico**. La BnF cataloga Le jeu de Robin et Marion riconoscendo Adam de la Halle quale autore del testo e della musica; l’arco documenta l’integrazione storica di teatro e canto nel Duecento. Fonti: [fonte 1](https://catalogue.bnf.fr/ark:/12148/cb394604897)
- **audit8h-jacopo-madrigale-arsnova** — `madrigale-ars-nova-primo-trecento` → `compositore-jacopo-da-bologna`. **madrigale-trecentesco-tre-voci**. Jacopo da Bologna è documentato fra i primi autori di madrigali polifonici in volgare e di madrigali a tre voci; la genealogia non va confusa con il genere cinquecentesco omonimo. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/jacopo-da-bologna_%28Dizionario-Biografico%29/)
- **audit8h-giovanni-cascia-madrigale** — `madrigale-ars-nova-primo-trecento` → `compositore-giovanni-da-cascia`. **madrigale-corte-scaligera**. Giovanni da Cascia compose madrigali nella prima metà del Trecento e fu attivo alla corte scaligera; l’arco segnala un repertorio documentato, non una scuola diretta con Jacopo da Bologna. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/giovanni-da-cascia_%28Dizionario-Biografico%29/)
- **audit8h-andrea-gabrieli-ricercare** — `ricercare-contrappuntistico-cinquecento` → `compositore-andrea-gabrieli`. **contrappunto-strumentale-ricercare**. Nei ricercari a quattro voci, pubblicati postumi nel 1595, Andrea Gabrieli sviluppò soggetti e controsoggetti con aumentazione e diminuzione, documentando una genealogia della scrittura imitativa strumentale. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/ricercare_%28Enciclopedia-Italiana%29/)
- **audit8h-morley-trattato-1597** — `trattato-morley-plaine-easie-1597` → `compositore-thomas-morley`. **trattatistica-pratica-musicale**. Morley pubblicò nel 1597 A plaine and easie introduction to practicall musicke, trattato in forma di dialogo che documenta didattica e prassi nel contesto inglese. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/thomas-morley_%28Enciclopedia-Italiana%29/)
- **audit8h-tartini-terzo-suono** — `terzo-suono-teoria-tartini` → `compositore-giuseppe-tartini`. **ricerca-acustica-strumentale**. Tartini elaborò il fenomeno del terzo suono in una teoria armonica che affiancava la tecnica violinistica al ragionamento fisico e alla didattica. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/giuseppe-tartini_%28Dizionario-Biografico%29/)
- **audit8h-torelli-solo-tutti** — `dialettica-solo-tutti-concerto-bolognese` → `compositore-giuseppe-torelli`. **concerto-solo-tutti**. Nelle raccolte op. 6 e 8 Torelli articolò la dialettica tra concertino e tutti, contribuendo alla trasformazione del concerto strumentale nel tardo Seicento e primo Settecento. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/giuseppe-torelli_%28Dizionario-Biografico%29/) · [fonte 2](https://www.treccani.it/enciclopedia/giuseppe-torelli/)
- **audit8h-peri-recitativo-euridice** — `recitar-cantando-peri-euridice` → `compositore-jacopo-peri`. **recitar-cantando-primo-melodramma**. Peri spiegò nella prefazione dell’Euridice il tentativo di imitare il parlare attraverso il canto, mettendolo in pratica nella rappresentazione fiorentina del 1600. La relazione riguarda un’innovazione estetica documentata. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/iacopo-peri/)
- **audit8h-agnesi-ciro-armenia** — `dramma-per-musica-agnesi-ciro-1753` → `compositore-maria-teresa-agnesi`. **dramma-per-musica-composizione-libretto**. Maria Teresa Agnesi compose Ciro in Armenia, rappresentato a Milano nel 1753 e catalogato con libretto proprio: caso documentato di autorialità femminile musicale e drammaturgica nel teatro del Settecento. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/maria-teresa-agnesi_%28Dizionario-Biografico%29/)
- **audit8h-pachelbel-elaborazione-corale** — `corale-organistico-turingia-seicento` → `compositore-johann-pachelbel`. **corale-organistico-imitativo**. I preludi corali di Pachelbel elaborano melodie liturgiche mediante imitazioni e procedimenti contrappuntistici, trasmettendo tecniche poi elaborate dalla generazione bachiana. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/johann-pachelbel_%28Enciclopedia-Italiana%29/)
- **audit8h-blow-venus-adonis** — `masque-venus-adonis-john-blow` → `compositore-john-blow`. **teatro-musicale-corte-restaurazione**. Venus and Adonis è l’unico lavoro teatrale di Blow, ricordato da Westminster Abbey insieme alla sua attività sacra e istituzionale. Fonti: [fonte 1](https://www.westminster-abbey.org/abbey-commemorations/commemorations/john-blow)
- **audit8h-novaro-inno-1847** — `inno-patriottico-canto-italiani-1847` → `compositore-michele-novaro`. **musica-inno-civico**. Il Canto degli Italiani fu musicato nel 1847 da Michele Novaro su versi di Mameli, nel contesto della mobilitazione patriottica preunitaria. Fonti: [fonte 1](https://new.quirinale.it/page/inno)
- **audit8h-mascagni-verismo** — `opera-verista-italiana-fine-ottocento` → `compositore-pietro-mascagni`. **cavalleria-rusticana-1890**. Cavalleria rusticana vinse il concorso Sonzogno e debuttò a Roma nel 1890: l’adattamento del dramma di Verga è un episodio centrale nell’affermazione del teatro musicale verista. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/pietro-mascagni_%28Dizionario-Biografico%29/)
- **audit8h-leoncavallo-verismo** — `opera-verista-italiana-fine-ottocento` → `compositore-ruggero-leoncavallo`. **pagliacci-1892**. Leoncavallo compose testo e musica dei Pagliacci, presentati nel 1892; nel Prologo tematizzò la poetica del teatro verista senza trasformare tale affinità in un rapporto di allievo con Mascagni. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/ruggero-leoncavallo_%28Enciclopedia-Italiana%29/)
- **audit8h-boito-libretto-otello-falstaff** — `libretti-boito-shakespeare-verdi` → `compositore-arrigo-boito`. **adattamento-letterario-melodrammatico**. Boito elaborò i libretti di Otello (1887) e Falstaff (1893) per Verdi. Questo nodo descrive un preciso passaggio dalla fonte shakespeariana alla drammaturgia musicale italiana. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/arrigo-boito_%28Enciclopedia-Italiana%29/)
- **audit8h-viardot-opera-da-salotto** — `opera-da-salotto-viardot-1867` → `compositore-pauline-viardot`. **opera-domestica-pianoforte-1867**. L’esecuzione privata di Le dernier sorcier a Baden-Baden nel 1867 documenta un percorso del teatro musicale tra pratica domestica e successiva scena professionale. Fonti: [fonte 1](https://pauline-viardot.de/9Werk.php?werk=5)
- **audit8h-farrenc-terza-sinfonia** — `sinfonismo-francese-farrenc-1849` → `compositore-louise-farrenc`. **composizione-terza-sinfonia-1849**. La Terza sinfonia di Farrenc, eseguita nel 1849 a Parigi dalla Société des concerts du Conservatoire, testimonia il contributo di una compositrice al sinfonismo europeo con una ricezione critica documentata. Fonti: [fonte 1](https://www.bruzanemediabase.com/en/exploration/works/symphony-no-3-g-minor-louise-farrenc)
- **audit8h-farrenc-nonetto** — `nonetto-farrenc-musica-da-camera` → `compositore-louise-farrenc`. **composizione-nonetto-fiati-archi**. Il Nonetto op. 38 per fiati e archi mostra il contributo di Farrenc all’allargamento degli organici della musica da camera romantica. Fonti: [fonte 1](https://sofiaphilharmonic.com/en/works/louise-farrenc-symphony-no-3)
- **audit8h-honegger-mistero-jeanne** — `jeanne-au-bucher-oratorio-drammatico` → `compositore-arthur-honegger`. **oratorio-drammatico-con-parlato**. Jeanne d’Arc au bûcher connette oratorio e dramma scenico attraverso il testo di Claudel e la scrittura musicale di Honegger; non è una semplice opera lirica a recitativi. Fonti: [fonte 1](https://societe.paul-claudel.net/oeuvre/jeanne-darc-au-bucher/)
- **audit8h-prokofiev-pierino-lupo** — `favola-musicale-didattica-orchestra-1936` → `compositore-sergej-prokof-ev`. **narrazione-strumenti-orchestra**. Prokof’ev compose Pierino e il lupo nel 1936, affidando ai timbri orchestrali il riconoscimento dei personaggi per un pubblico infantile. È didattica dell’ascolto incorporata nella composizione. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/sergej-sergeevic-prokofev_%28Enciclopedia-dei-ragazzi%29/)
- **audit8h-shostakovich-settima-leningrado** — `sinfonia-leningrado-1942-esecuzione` → `compositore-dmitrij-sostakovic`. **sinfonia-resistenza-circolazione-guerra**. La Settima sinfonia fu composta nel 1941, presentata a Kujbyšev nel marzo 1942 e suonata nella Leningrado assediata nell’agosto dello stesso anno; la rete comprende così ricezione e funzione pubblica di un’opera. Fonti: [fonte 1](https://shostakovich-en.ru/152en)
- **audit8h-skriabin-prometeo-luce** — `sinestesia-luce-prometeo-skriabin` → `compositore-aleksandr-skrjabin`. **partitura-multimediale-colori**. Prométhée, le Poème du feu, prescrive un dispositivo di illuminazione su base tastieristica, legando sperimentazione sinestetica e grande orchestra. La difficoltà storica di realizzarlo non autorizza a trattarlo come mera idea irrealizzata. Fonti: [fonte 1](https://news.yale.edu/2010/01/15/scriabin-s-prometheus-be-performed-yale-living-color)
- **audit8h-respighi-trilogia-romana** — `poema-sinfonico-romano-respighi` → `compositore-ottorino-respighi`. **poema-descrittivo-roma**. Fontane di Roma, Pini di Roma e Feste romane costituiscono una rielaborazione originale del poema sinfonico italiano, con quadri atmosferici e orchestrazione evocativa. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/ottorino-respighi_%28Dizionario-Biografico%29/)
- **audit8h-respighi-antiche-arie-danze** — `trascrizione-musica-antica-primo-novecento` → `compositore-ottorino-respighi`. **trascrizione-orchestrazione-repertorio-antico**. Respighi orchestrò e rielaborò musica storica in Antiche arie e danze per liuto, distinguendo la libera trascrizione moderna dalle fonti originali. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/ottorino-respighi_%28Dizionario-Biografico%29/)
- **audit8h-petrassi-coro-morti** — `madrigale-drammatico-petrassi-1941` → `compositore-goffredo-petrassi`. **madrigale-drammatico-leopardi**. Il Coro di morti di Petrassi impiega versi leopardiani in una partitura per voci maschili e strumenti, costruita aderendo al testo; la fonte documenta esplicitamente il richiamo al madrigale drammatico. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/goffredo-petrassi_%28Dizionario-Biografico%29/)
- **audit8h-bartok-mikrokosmos** — `mikrokosmos-bartok-pianoforte-didattico` → `compositore-bela-bartok`. **pedagogia-composizione-pianistica**. Bartók compose la raccolta didattica Mikrokosmos fra il 1926 e il 1937, integrando scrittura pianistica, ritmo e tecnica nel proprio linguaggio originale. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/bela-bartok/)
- **audit8h-lutoslawski-jeux-venitiens** — `aleatorismo-controllato-lutoslawski` → `compositore-witold-lutos-awski`. **aleatorismo-ritmico-controllato**. In Jeux vénitiens (1961) Lutosławski introdusse margini di autonomia degli esecutori nel coordinamento ritmico, mantenendo controllata l’organizzazione delle altezze. Fonti: [fonte 1](https://polmic.pl/en/encyclopedia/subject-entries/l/lutoslawski-witold-en)
- **audit8h-penderecki-threnody-sonorismo** — `sonorismo-cluster-penderecki` → `compositore-krzysztof-penderecki`. **scrittura-cluster-52-archi**. Il Treno per le vittime di Hiroshima impiega 52 strumenti ad arco, cluster per quarti di tono, glissandi e altri effetti, documentando un percorso sonoristico originale. Fonti: [fonte 1](https://polishmusic.usc.edu/2021/03/25/pciny-presents-krzysztof-penderecki-in-memoriam-worldwide/)
- **audit8h-penderecki-passione-luca** — `passione-luca-penderecki-1966` → `compositore-krzysztof-penderecki`. **passione-sacra-novecento**. Nella Passione secondo Luca Penderecki riattualizzò una forma sacra di ascendenza barocca, affiancandovi nuove tecniche armoniche e corali; la fonte distingue le scelte compositive dalla mera citazione di Bach. Fonti: [fonte 1](https://polishmusic.usc.edu/2021/03/25/pciny-presents-krzysztof-penderecki-in-memoriam-worldwide/)
- **audit8h-gorecki-terza-sinfonia** — `sinfonia-canti-dolenti-gorecki-1976` → `compositore-henryk-gorecki`. **sinfonia-con-voce-soprano**. Górecki compose la Terza sinfonia nel 1976 per soprano e orchestra, collegando sinfonia e canto in un linguaggio concentrato e ripetitivo: la classificazione è riferita all’opera precisa. Fonti: [fonte 1](https://polmic.pl/en/encyclopedia/subject-entries/g/gorecki-henryk-mikolaj-en)
- **audit8h-hindemith-gebrauchsmusik** — `gebrauchsmusik-hindemith` → `compositore-paul-hindemith`. **musica-duso-comunitario**. Hindemith coltivò il modello della Gebrauchsmusik, legato alla pratica del fare musica con funzione anche educativa: la fonte distingue tale fase dagli sviluppi successivi. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/paul-hindemith/)
- **audit8h-stockhausen-gesang-junglinge** — `elettroacustica-voce-sintesi-stockhausen` → `compositore-karlheinz-stockhausen`. **voce-registrata-elettronica**. Gesang der Jünglinge (1956) mette in rapporto la voce di un ragazzo, manipolata e organizzata, con suoni di sintesi, costituendo un riferimento della musica elettroacustica. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/la-musica-elettroacustica-fino-al-1970_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/)
- **audit8h-young-trio-strings** — `trio-for-strings-la-monte-1958` → `compositore-la-monte-young`. **musica-durata-sostenuta-1958**. Nel Trio for Strings del 1958 Young costruì il discorso con durate estese, intervalli statici e pause, sviluppando una concezione radicale del tempo musicale. Fonti: [fonte 1](https://www.melafoundation.org/trionews.htm)
- **audit8h-riley-in-c-53-patterns** — `in-c-patterns-terry-riley-1964` → `compositore-terry-riley`. **forma-modulare-interpreti-autonomi**. In C, composta nel 1964, dispone 53 motivi ripetibili, con un percorso armonico e temporale costruito collettivamente dagli esecutori: libertà regolata, non improvvisazione totalmente priva di partitura. Fonti: [fonte 1](https://academic.oup.com/book/1491)
- **audit8h-adams-nixon-opera-storica** — `opera-evento-storico-nixon-1987` → `compositore-john-adams`. **opera-eventi-politici-1987**. Nixon in China del 1987 dà forma teatrale a un avvenimento diplomatico recente, distinguendo il ruolo musicale di John Adams, il libretto di Goodman e il progetto scenico di Sellars. Fonti: [fonte 1](https://www.earbox.com/work/nixon-in-china/)
- **audit8h-nyman-cinema-draughtsman** — `colonna-sonora-ny-man-contratto-1982` → `compositore-michael-nyman`. **colonna-sonora-e-ricezione-storica**. La musica di Nyman per The Draughtsman’s Contract (1982) combina materiali da Henry Purcell e sonorità contemporanee; l’autore ne descrive la continua evoluzione anche nelle successive versioni da concerto. Fonti: [fonte 1](https://www.michaelnyman.com/the-draughtsmans-contract)

### Collaborazioni · 10 relazioni

- **audit8h-morley-oriana-1601** — `madrigali-triumphs-of-oriana-1601` → `compositore-thomas-morley`. **curatela-antologia-multi-autore**. Morley fu curatore dell’antologia di madrigali di diversi compositori The Triumphs of Oriana (1601); il nodo collega un progetto editoriale collettivo al suo coordinatore, senza attribuirgli la composizione di ogni brano. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/thomas-morley_%28Enciclopedia-Italiana%29/)
- **audit8h-menasci-mascagni-cavalleria** — `persona-guido-menasci` → `compositore-pietro-mascagni`. **libretto-cavalleria-rusticana**. Menasci scrisse con Targioni-Tozzetti il libretto di Cavalleria rusticana, musicato da Mascagni nel 1890. La relazione indica la responsabilità testuale, non collaborazione alla composizione musicale. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/guido-menasci_%28Dizionario-Biografico%29/)
- **audit8h-targioni-mascagni-cavalleria** — `persona-giovanni-targioni-tozzetti` → `compositore-pietro-mascagni`. **libretto-cavalleria-rusticana**. Targioni-Tozzetti fu coautore con Menasci del libretto di Cavalleria rusticana, lavoro richiesto da Mascagni per il concorso Sonzogno. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/pietro-mascagni_%28Dizionario-Biografico%29/)
- **audit8h-meilhac-bizet-carmen** — `persona-henri-meilhac` → `compositore-georges-bizet`. **libretto-carmen**. Henri Meilhac scrisse con Ludovic Halévy il libretto dell’opéra-comique Carmen (1875), musicata da Bizet su un soggetto tratto da Mérimée. Fonti: [fonte 1](https://www.opera-comique.com/en/shows/carmen)
- **audit8h-halevy-bizet-carmen** — `persona-ludovic-halevy` → `compositore-georges-bizet`. **libretto-carmen**. Ludovic Halévy è accreditato dall’Opéra-Comique come coautore del libretto di Carmen, creato nel 1875 con musiche di Bizet. Fonti: [fonte 1](https://www.opera-comique.com/en/shows/carmen)
- **audit8h-turgenev-viardot-dernier-sorcier** — `persona-ivan-turgenev` → `compositore-pauline-viardot`. **libretto-operetta-fantastica**. Viardot musicò Le dernier sorcier (1867), su testo di Ivan Turgenev: il catalogo delle fonti attribuisce a Turgenev il libretto e distingue versioni per pianoforte, orchestra e adattamenti. Fonti: [fonte 1](https://pauline-viardot.de/9Werk.php?werk=5) · [fonte 2](https://old-digitalcollections.nypl.org/items/7b551543-c4db-36bd-e040-e00a18065b13)
- **audit8h-claudel-honegger-jeanne** — `persona-paul-claudel` → `compositore-arthur-honegger`. **mistero-oratorio-testuale**. Paul Claudel scrisse il testo di Jeanne d’Arc au bûcher, musicato da Honegger nel 1935 su commissione di Ida Rubinstein. Il rapporto è drammaturgico-musicale accertato. Fonti: [fonte 1](https://societe.paul-claudel.net/oeuvre/jeanne-darc-au-bucher/)
- **audit8h-ejzenstejn-prokofiev-cinema** — `persona-sergej-ejzenstejn` → `compositore-sergej-prokof-ev`. **musiche-cinema-nevskij-ivan**. Ėjzenštejn diresse Aleksandr Nevskij (1938) e Ivan il Terribile, film per i quali Prokof’ev compose le colonne sonore: collaborazione interdisciplinare documentata. Fonti: [fonte 1](https://www.treccani.it/enciclopedia/sergej-sergeevic-prokof-ev_%28Enciclopedia-del-Cinema%29/)
- **audit8h-riley-kronos-collaborazione** — `kronos-quartet-ensemble` → `compositore-terry-riley`. **collaborazioni-compositive-kronos**. Kronos Quartet e Terry Riley hanno collaborato per decenni, dal repertorio per quartetto a nuovi lavori commissionati; l’archivio Kronos documenta tale rapporto operativo. Fonti: [fonte 1](https://50ftf.kronosquartet.org/composers/terry-riley)
- **audit8h-morris-adams-nixon** — `persona-mark-morris` → `compositore-john-adams`. **coreografia-nixon-in-china**. Mark Morris firmò la coreografia della prima produzione di Nixon in China nel 1987, con musica di John Adams: collaborazione scenica circostanziata e accreditata. Fonti: [fonte 1](https://www.earbox.com/work/nixon-in-china/)

### Avvertenze e controllo finale

- Le 40 verifiche sono ricognizioni mirate, non un certificato di esaustività biografica: la ricerca resta espandibile.
- Nel caso di Léonin e Pérotin, le attribuzioni si fondano prevalentemente su testimonianze più tarde: evitare eccessi di certezza attributiva.
- Le opere riutilizzate da autori posteriori (Novaro/Verdi, Paganini/Rachmaninov, Monteverdi/Petrassi, Purcell/Nyman) sono ricezioni documentate, non rapporti personali.
- La funzione di collaboratori teatrali distingue con precisione musica, libretto, regia, coreografia e adattamento: non attribuire la composizione ai librettisti.
- Nei confronti di fonti datate o descrizioni celebrative, i dati bibliografici e archivistici vengono privilegiati rispetto a definizioni di primato.
- Da eseguire **prima di un commit**: controllo remoto di unicità contro l’ultimo main, verifica HTTP estesa delle fonti, validatori originali Node.js su grafo fuso, verifica identità e test delle quattro lenti nell’interfaccia.

**Proiezione dopo fusione, non pubblicata:** 608 nodi, 856 relazioni specialistiche, 365 relazioni di scuola, 297 compositori.
