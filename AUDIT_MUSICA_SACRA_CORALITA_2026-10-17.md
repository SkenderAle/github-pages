# Musurgia Mundi — Audit trasversale: musica sacra e coralità
**Primo lotto documentato:** 17 ottobre 2026  
**Repository:** SkenderAle/github-pages · **branch:** `main`  
**Obiettivo:** restituire alle culture religiose e alle pratiche corali la loro funzione effettiva nella storia musicale europea, **senza creare una pagina dedicata, capitoli artificiali o classifiche di nomi**.

## Metodo e limiti
- Lettura diretta delle quattro pagine `rinascimento/`, `barocco/`, `classicismo/`, `romanticismo/` su `main`. Il Medioevo è stato esaminato preliminarmente ed è già ricco di liturgia, ma richiederà un audit separato sulla coralità; il Novecento è ancora una pagina embrionale.
- Criteri distinti: presenza dei nomi; contesto storico e istituzionale; distinzione fra rito, devozione privata, corte e concerto; trattamento delle parti vocali e dell'organico; pluriconfessionalità; fonti filologiche; registrazioni *effettivamente* riproducibili.
- **Non** dedurre dal termine «coro» un organico moderno di decine di cantori. Il corale comunitario luterano non equivale a mottetto a cappella; un oratorio non è automaticamente musica liturgica; il Requiem non ha una sola storia esecutiva.
- Nuovi paragrafi collocati entro i contenuti già esistenti, senza nuove pagine o sottocapitoli.

## Diagnosi e interventi del primo lotto

| Periodo | Lacuna riconosciuta | Integrazioni effettuate | Ancora da verificare |
|---|---|---|---|
| Rinascimento | Eccesso di peso assegnato a Palestrina e Venezia; tradizioni franco-fiamminghe e altre confessioni poco spiegate | Josquin, Obrecht e Isaac; Ordinario/mottetto; Victoria e Officium defunctorum; Tallis/Byrd, rapporto fra religioni e cappelle; coralità e organico a San Marco | fonti specifiche per Tallis, Byrd, messe di Obrecht/Isaac; prassi delle cappelle e pluralità delle liturgie regionali (Aquileia inclusa dove pertinente) |
| Barocco | Repertorio sacro affrontato prevalentemente tramite Bach/cantata/Passione | Monteverdi: stampa del Vespro e prassi di ricostruzione; Frescobaldi e musica d'organo liturgica; Schütz, 29 mottetti; *grand motet* francese, Lully/Charpentier/Lalande; *anthem* inglese e Purcell | coro cattolico italiano del Seicento, musica femminile nei monasteri, policoralità, musica sacra iberica, prassi vocali e fonti di edizione critica; nessun video inventato |
| Classicismo | Mozart/Haydn presenti ma collegamenti con istituzioni corali, versioni e concerto insufficienti | ruolo contrappuntistico del coro; Requiem K.626 incompleto e completamento Süssmayr; oratori di Haydn in contesto concertistico; *Missa solemnis* come ponte Beethoven | Requiem di Cherubini, altre tradizioni centroeuropee, controlli bibliografici sulle versioni |
| Romanticismo | Grande lacuna sulla coralità e il sacro, nonostante il rilievo del Lied e del melodramma | società corali e Mendelssohn 1829; Paulus/Elias, Brahms *Deutsches Requiem*, Berlioz; Verdi, Rossini e Fauré con questioni di organico/versione; Bruckner e Stabat Mater di Dvořák; rapporti fra coro, identità e pubblici | ripresa del Palestrina-Stil, movimento ceciliano, Liszt (*Christus*, *Via Crucis*), spiritualità russo-ortodossa e britannica, trattazione completa delle versioni di Fauré |
| Romanticismo · musica da camera | Genere trattato bene nella forma ma troppo schiacciato su Brahms e meno sulla storia sociale | Fanny Hensel/Clara Schumann, Smetana/Dvořák/Čajkovskij; Franck e Fauré; identità nazionale, salotto, professione e società concertistiche | rilettura delle fonti, audio per quartetti, verifica dei luoghi e delle cronologie |

## Fonti documentarie consultate o richiamate
- Catálogo de Tomás Luis de Victoria (Universidad de Málaga): https://www.victoria.uma.es/osuna.html
- Schütz-Werke-Verzeichnis e *Geistliche Chormusik*: https://heinrich-schuetz-haus.de/swv/v2.0/index.php?number=380&to=swvcontent
- Centre de musique baroque de Versailles, *Le motet*: https://cmbv.fr/fr/decouvrir-le-baroque/le-motet
- Oxford Academic, studio sugli anthems della Chapel Royal: https://academic.oup.com/ml/article/102/3/442/6423133
- Bach-Archiv Leipzig / Thomanerchor: https://www.bach-leipzig.de/en/node/41458
- Antonín Dvořák, catalogo delle opere e ricezione dello *Stabat Mater*: https://www.antonin-dvorak.cz/en/work/stabat-mater/

**Fonti non ancora reperite con precisione:** riferimenti bibliografici puntuali per tutte le nuove asserzioni relative a Smetana, Fanny Hensel, formazione delle società corali, Requiem di Mozart e Fauré. Prima di successive integrazioni tematiche eseguire verifica storico-documentale mirata.

## Correzioni laterali nello stesso commit
- `dalla-sinfonia-alla-rapsodia/index.html`: eliminata dalla testata la tabella numerica iniziale. Conservati i conteggi testuali dei risultati **accanto ai filtri del catalogo** (che continuano a funzionare); eliminate le istruzioni JS per i tre contatori rimossi.
- `romanticismo/index.html`: nel riquadro «Per iniziare» per *Mazeppa* sostituito l'ID YouTube non più disponibile `kICGiPcgikk` con `aOqDso_wOus`, aggiornate attribuzione London Philharmonic/Haitink, fonte discografica Philips/Universal e alternativa Karajan. La riproduzione reale sul browser non è stata collaudata. Rimane il divieto di autoplay.
- Eliminata la dicitura «da approfondire in seguito» nel collegamento dall'area cameristica romantica a un'audioteca già esistente.

## Checklist di verifica
- [x] Nessuna pagina autonoma per il sacro, nessun nuovo capitolo/sottocapitolo nell'indice.
- [x] Integrità dei file ed eventuali JSON preesistenti; continuità degli ancoraggi.
- [x] Nessun id YouTube chiuso `kICGiPcgikk` nel riquadro romantico *Mazeppa*.
- [x] Nessun caricamento automatico introdotto.
- [ ] Test Chrome Android e desktop del video *Mazeppa* aggiornato e degli altri incorporamenti.
- [ ] Verifica filologica di tutte le affermazioni del nuovo corpus; controllo sulle edizioni e gli organici con bibliografia specialistica.
- [ ] Audit del Novecento, delle tradizioni orientali e della liturgia locale; integrazione solo dove il contesto lo giustifica.

## Secondo lotto — 17 ottobre 2026 · polifonie regionali, monasteri, coro ottocentesco e versioni

### Interventi integrati senza nuova architettura delle pagine

| File | Interventi sostanziali | Livello |
|---|---|---|
| `rinascimento/index.html` | Morales e Guerrero accanto a Victoria; Byrd, *Gradualia* 1605/1607 e rapporto fra pubblicazione/rito; rito patriarchino aquileiese e sinodo udinese del 1596, senza inferenze abusive sulla scomparsa delle prassi locali | Contestualizzazione testuale e link storici; manca audit musicale su codici regionali |
| `barocco/index.html` | Milano, Santa Radegonda, Chiara Margarita Cozzolani e coralità femminile monastica; rapporto con Leonarda; *Stabat Mater* di Pergolesi e distinzione dalla grande massa corale | Repertori e prassi documentati, nessun video inventato |
| `classicismo/index.html` | Cherubini e il Requiem 1816 nel suo contesto politico; coralità ortodossa del tardo Settecento e Bortnianskij | Ponte di continuità nei capitoli esistenti, nessuna sezione aggiuntiva |
| `romanticismo/index.html` | Fanny Hensel, coro e oratorio 1831; confronto con Mendelssohn e festival britannici; Liszt *Christus* / *Via Crucis*; redazioni del Requiem di Fauré; Cecilianesimo, Čajkovskij op. 41 e canto ortodosso senza strumenti | Più equilibrio fra società corali, istituzioni religiose e grandi opere; no nuovi capitoli |

### Fonti verificate in questo lotto
1. Treccani, Victoria e scuola spagnola: https://www.treccani.it/enciclopedia/tomas-luis-de-victoria/
2. K. McCarthy, <i>Gradualia</i> di Byrd, Cambridge University Press: https://www.cambridge.org/core/journals/early-music-history/article/abs/notes-as-a-garland-the-chronology-and-narrative-of-byrds-gradualia/FB023A53FE441E50FF4BAEA99AAF66FA
3. Francesco Barbaro e sinodo provinciale di Udine del 1596: https://www.treccani.it/enciclopedia/francesco-barbaro_%28Dizionario-Biografico%29/
4. Robert L. Kendrick, <i>Celestial Sirens</i>, Oxford University Press (studi su S. Radegonda e Cozzolani): https://academic.oup.com/book/49169
5. Ricordi, edizione critica dello <i>Stabat Mater</i> di Pergolesi, Claudio Toscani: https://www.ricordi.com/it-IT/Critical-Editions/Pergolesi-Giovanni-Battista-Critical-Editions/Pergolesi-Stabat-mater.aspx
6. Luigi Cherubini, Dizionario Biografico Treccani: https://www.treccani.it/enciclopedia/luigi-cherubini_%28Dizionario-Biografico%29/
7. Oxford Academic, M. Steinberg: <i>Requiem</i> di Fauré: https://academic.oup.com/book/49181/chapter-abstract/422033459
8. OUP, Rutter, <i>Requiem</i> (1893), edizione: https://books.google.com/books/about/Requiem_1893_Version.html?hl=en&id=RZ87AQAAIAAJ&output=html_text
9. Cambridge, letture contemporanee della Liturgia op. 41 di Čajkovskij: https://www.cambridge.org/core/books/abs/russians-on-russian-music-18801917/tchaikovsky/CD08142644CC95FBCEE2CCF75BA4F13E
10. Bennett Zon, <i>English Plainchant Revival</i> e movimento ceciliano: https://academic.oup.com/book/49282/chapter-abstract/422542972
11. Archivio storico Fanny Hensel, attività e partiture corali: https://fannyhensel.de/?lang=en&page_id=1393

### Confini dichiarati: punti ancora aperti
- L'adozione del rito romano nel 1596 non basta a datare l'estinzione effettiva di ogni canto del Patriarcato di Aquileia: necessaria ricerca di codici e studi specifici.
- *Stabat Mater* di Pergolesi non è un'opera originalmente corale; per contro l'opera di Cozzolani non va ridotta a «coro di sole donne» senza edizione e organici.
- Fauré: verificare ogni video in futuro indicando quale redazione viene eseguita, non limitarsi a chiamarlo *Requiem*.
- Diverse tradizioni iberiche e americane dell'età moderna, il coro anglicano ottocentesco e le scuole slave non sono ancora trattati in modo esaustivo. Il Novecento rimane embrionale.
- **Nessun player aggiunto o riproduzione testata** in questo lotto: i nuovi link sono bibliografici e documentari, non sorgenti audio.
- Test desktop e Android e monitoraggio video YouTube esistenti ancora da effettuare.

## Terzo lotto — 17 ottobre 2026 · la storia del canto fra cappella e teatro

**Intervento proposto dall'autore:** realizzato nel Barocco un inserto storico autonomamente riconoscibile ma **non un nuovo capitolo**, `#castrati`, all'interno della sezione `#voce`: «I castrati: una voce cercata, un prezzo imposto». Evidenziati origine istituzionale, funzione teatrale, differenze fra cantori, corpo e lavoro, disuguaglianza e violenza sui bambini, interpretazioni moderne e i limiti della registrazione storica di Alessandro Moreschi.

**Fonti dell'inserto:**
- Metropolitan Opera, `Agrippina`, guida ai castrati: https://www.metopera.org/discover/education/educator-guides/agrippina/castrati/
- Marco Beghelli (Università di Bologna), «La voce virile dei castrati: un'ipotesi» (2018), avvertenza sulla non ricostruibilità timbrica: https://cris.unibo.it/handle/11585/636093
- National Library of New Zealand, catalogo delle registrazioni di Moreschi del 1902 e 1904: https://natlib.govt.nz/records/22283603

**Raccordi di storia musicale:**
- `barocco/#vivaldi`: la pratica delle Figlie di Choro e la Pietà (mostra del Comune di Venezia: https://live.comune.venezia.it/it/2025/04/inaugurata-nella-chiesa-della-pieta-la-mostra-i-violini-di-vivaldi-e-le-figlie-di-choro ).
- `barocco/#europa`: allargata la circolazione delle tradizioni corali alla Nuova Spagna: Gaspar Fernandes, villancicos in náhuatl nella Puebla 1610–1614 e il contesto degli afrodiscendenti. Studi https://www.scielo.org.mx/scielo.php?pid=S2448-65312021000201829&script=sci_arttext e https://novohispana.historicas.unam.mx/index.php/ehn/article/view/77335 . **Evitata** l'equazione fra lingua indigena e documentazione neutrale del folklore.
- `classicismo/#teatro`: Gluck, `Orfeo` con Guadagni (1762), Millico (1769) e Legros (1774): https://www.gluck-gesamtausgabe.de/gwv/werkregister/eintrag/work-60.html .
- `classicismo/`: `Idomeneo`, Idamante con Dal Prato (Monaco 1781), tenore nella ripresa viennese del 1786: https://dme.mozarteum.at/DME/objs/pdf/nma_304_-39_-3_eng.pdf .
- `rinascimento/#roma`: cautela sulla ricostruzione degli organici e distinzione fra sezioni scritte e numero dei cantori.
- `romanticismo/#nazioni`: Stanford, `Evening Service in B flat`, coro liturgico anglicano e continuità dell'uso: https://www.westminster-abbey.org/worship-and-music/music/recordings/the-feast-of-saint-peter .

**Decisioni formali:** l'inserto dei castrati non è un'attività scolastica «Per iniziare», non ha multimedia automatico, possiede documentazione immediatamente accessibile e collegamenti al Barocco e al Classicismo. Nessuna nuova pagina, nessun capitolo, nessuna registrazione inventata o contrassegnata come collaudata. Il contenuto del catalogo sinfonico non è stato modificato.

**Verifiche da completare:** eventuale ascolto storico di Moreschi va inserito solo con fonte archivistica riproducibile e contesto filologico: le sue incisioni non possono sostituire una registrazione delle arie di Farinelli. Test browser effettivi dell'inserto e layout responsive non ancora eseguiti.

## Quarto lotto — 17 ottobre 2026 · canto quotidiano, istituzioni e collocazione dell'inserto

**Correzione d'impaginazione richiesta dall'autore:** spostato l'intero inserto `barocco/#castrati` da prima di «Chi sta davanti e chi parla insieme?» a **immediatamente dopo** il laboratorio «Senti la differenza · Prima riconosci la trama, poi impari il nome». Nuova successione: spiegazione dei due filoni → «Per iniziare» → laboratorio in tre ascolti → inserto storico castrati → basso continuo. L'identificativo `#castrati` e le fonti sono rimasti identici. Non sono stati modificati gli script.

### Integrazioni nel racconto già esistente

| Periodo | Interventi | Fonti |
|---|---|---|
| Rinascimento | Stampa musicale diversa da testimonianza di prassi; canto piano, organo e cappelle | Distinzione metodologica |
| Rinascimento | Fondazione corale di Magdalen College, Oxford, e statuti 1480 | https://www.magd.ox.ac.uk/chapel-and-choir/the-choir/ |
| Rinascimento | Giovanni Animuccia, laudi 1563 e 1570, Filippo Neri; differenza fra culto e devozione | https://www.treccani.it/enciclopedia/giovanni-animuccia_%28Dizionario-Biografico%29/ |
| Rinascimento | Documenti sul calendario d'uso dei cori spezzati a San Marco | https://www.cambridge.org/core/journals/early-music-history/article/abs/cori-spezzati-of-st-marks-myth-and-reality/A7A9F78946DE4A5F423F9D160747C2C5 |
| Barocco | Dalle laudi romane all'oratorio secentesco, non evoluzione automatica in «opera senza scene» | https://www.treccani.it/enciclopedia/oratorio_%28Enciclopedia-Italiana%29/ |
| Barocco | Bach, Thomanerchor: scuole, prove, cantori, parti e obblighi cittadini | https://www.bachmuseumleipzig.de/en/node/41458 |
| Barocco | Motetti BWV 225–230 e differenza fra voci notate e cantori presenti | Analisi organici: ancora da approfondire per ciascuna opera |
| Classicismo | William Billings, New England e `The New-England Psalm-Singer` (1770) | https://guides.loc.gov/early-american-sacred-music · https://www.colonialsociety.org/publications/3321/introduction |
| Classicismo | Comunità di canto americana e cappelle di corte, due istituzioni diverse | Confronto critico |
| Romanticismo | Brahms: mottetti op. 74 a cappella, fonti e loro funzione | https://brahmsinstitut.de/Archiv/web/bihl_digital/jb_werkekatalog/op_074.html |
| Romanticismo | Salomon Sulzer, Schubert: Salmo 92 D. 953 in ebraico (1828); storia della coralità sinagogale e varianti delle fonti | https://www.cambridge.org/core/journals/nineteenth-century-music-review/article/abs/new-source-for-schuberts-hebrew-psalm-92-d-953/A4C2015363B0EF201BBE901F4CCFEE47 · https://www.jewishchoralmusic.com/composers-bios/salomon-sulzer |

**Controlli statici:** tutti gli ID delle sezioni presenti e univoci; unico spostamento d'ordine per `castrati` e `castrati-title`; indici originali e quattordici capitoli Romanticismo non modificati; nessun player audio aggiunto; JS identico; nessun autoplay. I nuovi link sono documentari; riproducibilità di eventuali ascolti futuri ancora da verificare. Prova reale mobile/desktop dell'inserto ancora aperta.

## Quinto lotto — 17 ottobre 2026 · primi ascolti della coralità con prassi storicamente informata

### Criterio di qualità richiesto dall'autore: HIP e filologia
Priorità alle fonti istituzionali, agli ensemble documentati e alle versioni correttamente attribuite, non all'inserimento del maggior numero possibile di video. Distinti esplicitamente: testimonianze storiche, edizioni e versioni, scelta moderna dell'organico, tracciabilità del video, incorporabilità nel browser. **Una registrazione storicamente informata resta un'interpretazione, non un fonografo del 1723.**

### Due nuovi ascolti completi nella pagina Barocco, nella sezione vocale sacra
1. **J. S. Bach, *Magnificat* in re maggiore BWV 243 (1733)**. Netherlands Bach Society, **Jos van Veldhoven**, soprani Julia Doyle/Hana Blažíková, alto Maarten Engeltjes, tenore Thomas Hobbs, basso Christian Immler, registrata **2 maggio 2014** alla Grote Kerk, Naarden. Canale YouTube ufficiale https://www.youtube.com/watch?v=EsUWG2axB3w ; fonte dell'ensemble https://www.bachvereniging.nl/en/bwv/bwv-243 ; **integrale in 12 sezioni** con indici ufficiali dei cori 0:00, 8:13, 15:29, 26:16. **Importante:** la redazione originale in mi bemolle, BWV 243a, risale al Natale 1723 e include interpolazioni; la registrazione è della revisione in re maggiore.
2. **J. S. Bach, *Jesu, meine Freude* BWV 227**. Netherlands Bach Society, **Christoph Prégardien**, registrata **28 febbraio 2019**, Grote Kerk, Alkmaar. Canale YouTube ufficiale https://www.youtube.com/watch?v=uN5Tt7SAhzg ; fonte del progetto https://www.bachvereniging.nl/en/bwv/bwv-227 ; integrale **11 sezioni**, centro «Ihr aber seid nicht fleischlich» 8:12. Destinazione storica non documentata con certezza, prassi della cappella e numero di cantori non deducibili automaticamente dalla registrazione.
3. **J. S. Bach, *Singet dem Herrn* BWV 225**, doppio coro. È stata aggiunta la **fonte istituzionale di All of Bach** https://www.bachvereniging.nl/en/bwv/bwv-225 , interpreti Netherlands Bach Society, Stephan MacLeod. **Nessun identificativo YouTube inventato**.

La Netherlands Bach Society dichiara di usare strumenti storici e documenta tutte le registrazioni: https://www.bachvereniging.nl/en/biography . Le due nuove schede usano il medesimo sistema di iframe `data-mm-preview-src` già esistente nel Barocco, che rimane senza autoplay; è disponibile il link diretto come alternativa.

### Altri raccordi editoriali (senza aggiungere video)
- `rinascimento/`: autenticità del video <i>Exultate Deo</i> di Palestrina pubblicato dal canale ufficiale <strong>Stile Antico</strong> https://www.youtube.com/watch?v=K38ZfTu0DxE . Documentazione dell'interprete **non significa** ricostruzione certa dell'organico della cappella papale.
- `classicismo/`: la Grande Messa K. 427 è incompleta e richiede documentazione di completamenti ed edizioni; discografia Gardiner/Monteverdi Choir/English Baroque Soloists 1986: https://natlib.govt.nz/records/21054517 . **L'identità fra album e video già presente non è stata certificata**.
- `romanticismo/`: la filologia si applica anche alle diverse redazioni del Requiem di Fauré, alle versioni della Petite messe solennelle di Rossini e alla prassi corale dei mottetti op. 74 di Brahms. Non attribuire automaticamente l'etichetta HIP a qualsiasi coro moderno o a una registrazione di grande qualità.

### Verifiche e limiti del quinto lotto
- Nessuna nuova pagina o capitolo; nessun indice alterato; nessun JS modificato; due nuovi iframe disattivati fino all'interazione del lettore, secondo il sistema già presente.
- Test statici su JSON/JS/ID, collegamenti interni, divieto autoplay, identità degli URL e traccia discografica.
- **Non è stato ancora effettuato** un test di play/embedding in Chrome Android o nel browser desktop. Non sostenere che tutti i video funzionino finché non sono stati effettivamente aperti.

## Sesto lotto — 17 ottobre 2026 · percorsi HIP complementari al quinto lotto già pubblicato

**Concorrenza del branch:** durante la preparazione è stato rilevato un avanzamento di `main` al commit `b34b6dac81b39063ecdb8c09df83f32115fb820b`, il quale conteneva già il quinto lotto: video ufficiali Netherlands Bach Society per il *Magnificat* BWV 243 e il mottetto *Jesu, meine Freude* BWV 227, più fonte BWV 225. La scrittura è stata sospesa, il branch riletto e questo sesto lotto è stato applicato solo al nuovo stato, **senza duplicare quei filmati**.

### Fonti musicali e confronti aggiunti
- `rinascimento/#rinascimento-fonte-e-coro`: Cappella Pratensis, specializzazione su lettura da grandi libri corali con notazione mensurale, modalità, prassi e improvvisazione storica; filmato *Inviolata, integra et casta es Maria* dichiarato sulla pagina ufficiale https://www.cappellapratensis.nl/en/ ; fonti manoscritte https://www.cappellapratensis.nl/en/EXPLORE-AND-LEARN/ . **HIP documentata come metodo interpretativo, non identità con un coro storico**.
- `barocco/#barocco-confronti-filologici-bach`: tre ascolti completi sul sito dell'editore, **Netherlands Bach Society**, distinti dai video già presenti: `BWV 229` *Komm, Jesu, komm* / Stephan MacLeod https://www.bachvereniging.nl/en/bwv/bwv-229 ; `BWV 140` *Wachet auf* / Jos van Veldhoven https://www.bachvereniging.nl/en/bwv/bwv-140 ; `BWV 232` *Messa in si minore* / Jos van Veldhoven https://www.bachvereniging.nl/en/bwv/bwv-232 . La grande Messa **non** risulta eseguita per intero nella vita di Bach. Tutte le pagine includono testi e crediti di interpreti e organici. **Nessun ID YouTube inventato**.
- `classicismo/#classicismo-ascolto-e-filologia`: Mozart K. 427, Gardiner / English Baroque Soloists / Monteverdi Choir, registrazione Decca 1987 https://www.deccaclassics.com/en/catalogue/products/mozart-mass-in-c-minor-k-427-sylvia-mcnair-8145 ; Beethoven-Haus, ricostruzione del **programma del 7 maggio 1824** con sezioni Kyrie, Credo e Agnus Dei della *Missa solemnis* e Nona sinfonia, Orchester Wiener Akademie / Martin Haselböck / coro WDR, https://www.beethoven.de/de/ytvideo/view/5687006571003904/BTHVN%2B2024%2B-%2B200%2BJahre%2BNeunte%2BSinfonie . **Non** integrale della Messa.
- `romanticismo/#romanticismo-filologia-sacro`: Brahms *Ein deutsches Requiem*, Herreweghe / Collegium Vocale Gent / La Chapelle Royale / Orchestre des Champs-Élysées, catalogo Harmonia Mundi **HMG501608** e Fauré *Requiem* versione **1901**, fonti https://store.harmoniamundi.com/philippe-herreweghe?lang=en_GB e https://philharmoniedeparis.fr/fr/activite/concert-vocal/26152-requiem-allemand . Riferimenti discografici, **non** link video inventati.

### Limiti dichiarati
- Link a riprese e schede **istituzionali**; non è stato effettuato collaudo reale di playback esterno o embedding in Chrome Android, né è stato forzato alcun iframe sulla pagina.
- Nessuna nuova pagina, nessun nuovo capitolo, nessun cambio di ID preesistenti e nessuno script JS modificato. Conservate le registrazioni BWV 243 e BWV 227 pubblicate nel quinto lotto concorrente.
- HIP significa argomentare interpretazione, organico e versioni attraverso le fonti, non apporre un'etichetta di qualità a priori.

## Settimo lotto — 17 ottobre 2026 · la coralità come scrittura, organico e occasione

**Allineamento del branch:** la ricognizione è partita dal commit `b469b53` segnalato nel thread, ma `main` conteneva già il quinto e il sesto lotto documentati sopra. Questo lotto si applica al loro successivo HEAD `07e0587ee22272b9d6960ebd2762d46b3943b0a0`, senza duplicare i video Netherlands Bach Society, senza ulteriori pagine e senza spostare l'inserto sui castrati.

**Approfondimenti integrati organicamente nei capitoli già esistenti:**
- **Rinascimento:** la messa-parafrasi di Josquin e i diversi rapporti fra imitazione e articolazione testuale nel Kyrie, Gloria e Credo di Palestrina; Oxford Academic, Dennis Shrock, *Missa Pange lingua* (https://academic.oup.com/book/4751/chapter-abstract/146990513).
- **Barocco:** Schütz e il rapporto tra prefazione contrappuntistica e parte di basso continuo nelle edizioni (Carus, https://www.carus-verlag.com/en/geistliche-chormusik-1648-swv-369-397/heinrich-schuetz-geistliche-chor-music-1648-complete-edition-vol-12-2091200.html); BWV 225, due cori SATB, sezione mediana con corale e testo distinto, evitando equivalenze automatiche tra parti e cantori (https://bach.de/werk/bwv/225.html).
- **Classicismo:** distribuzione fra solisti, coro e doppio coro nella K. 427 di Mozart, senza certificare l'identità del video pubblicato (https://www.deccaclassics.com/en/catalogue/products/mozart-mass-in-c-minor-k-427-sylvia-mcnair-8145); Haydn, *Nelsonmesse* 1798 con tre trombe, timpani, archi e organo, distinta dai successivi fiati (https://www.carus-verlag.com/carus-klavierauszuege-digital/joseph-haydn-missa-in-angustiis-in-d-4060903010000.html); disco Teldec 1998 Harnoncourt/Concentus Musicus Wien/Arnold Schoenberg Chor (https://www.heinrichvontrotta.eu/Harnoncourt/Teldec/1998-0630-17129-2-Haydn-Nelsonmesse.html). L'incisione è proposta come **riferimento discografico**, non video collaudato, senza dedurre l'organico unicamente dal marchio HIP.
- **Romanticismo:** fonte dell'op. 74 di Brahms e prima presentazione pubblica viennese (https://brahmsinstitut.de/Archiv/web/bihl_digital/jb_werkekatalog/op_074.html); *Hear my prayer* di Mendelssohn, versione organo (1844) e versione orchestrale (1847), dialogo fra solista e coro (https://www.carus-verlag.com/en/music-scores-and-recordings/felix-mendelssohn-bartholdy-hear-my-prayer-4016500.html).

**Metodo:** queste integrazioni approfondiscono esempi già nel racconto o storicamente pertinenti, senza cataloghi di nomi e senza nuovi iframe. Sono link a fonti bibliografiche, editoriali e discografiche. Né streaming, né embedding YouTube, né resa su Android sono stati verificati con un browser reale.

**Verifiche automatiche pre-pubblicazione:** nessun nuovo ID, nessuna modifica agli script o ai lettori, invariato il numero di iframe e comandi video, nessuna aggiunta di attributi autoplay. Controllo dei tag aggiunti e della corrispondenza degli ancoraggi di intervento eseguito sulla sorgente GitHub; i controlli sul rendering effettivo restano aperti.

## Ottavo lotto — 17 ottobre 2026 · fonti di culto, comunità e prassi di esecuzione

**Branch letto prima dell'intervento:** `main` su `6505c93ca5c3a344ef794b919e1a5f6779223f0a`. Nessun branch nuovo; un unico commit atomico su `main` con quattro pagine e registro.

### Integrazioni nel racconto preesistente

| Pagina | Nuovi confronti inseriti | Fonti principali |
|---|---|---|
| Rinascimento | Byrd: `Gradualia` cattolici / `Great Service` anglicano; distinzione tecnica fra semplice antifonia e policoralità | Westminster Abbey (https://www.westminster-abbey.org/order-of-service?id=10988), Philip Brett/Cambridge (https://www.cambridge.org/core/journals/proceedings-of-the-royal-musical-association/article/abs/wordsetting-in-the-songs-of-byrd/842951298457B780526FB768A52B56B7), Bryant/Cambridge (https://www.cambridge.org/core/journals/early-music-history/article/abs/cori-spezzati-of-st-marks-myth-and-reality/A7A9F78946DE4A5F423F9D160747C2C5) |
| Barocco | Monteverdi `Vespro` 1610: messa, due Magnificat, canto piano, problemi di antifone e ricostruzione; `grand motet` francese, maîtrise, petit/grand chœur; Bach BWV 4, corale e disposizione simmetrica; BWV 106, due flauti dolci e due viole da gamba | Wainwright/Cambridge (https://www.cambridge.org/core/books/abs/cambridge-history-of-musical-performance/case-study-monteverdi-vespers-1610/EF189743F79D541051B7ADD716D8FB03), Whenham/Cambridge (https://www.cambridge.org/core/books/abs/monteverdi-vespers-1610/and-all-on-a-cantus-firmus/88C0F82CB0CECF24AD2473D844DEF9BC), CMBV (https://cmbv.fr/fr/decouvrir-le-baroque/le-motet; https://boutique.cmbv.fr/fr/grands-motets-vol7), Netherlands Bach Society (https://www.bachvereniging.nl/en/bwv/bwv-4; https://www.bachvereniging.nl/en/bwv/bwv-106) |
| Classicismo | Billings: `fuguing tune` e differenza dalla fuga colta, libro a stampa 1770 e scuole di canto; confronto istituzionale con le cappelle austro-viennesi | Library of Congress (https://www.loc.gov/item/2008581408/; https://www.loc.gov/collections/songs-of-america/articles-and-essays/musical-styles/ethnic/english-american-song/; https://guides.loc.gov/early-american-sacred-music) |
| Romanticismo | Bruckner `Locus iste` WAB23, funzione di graduale, data di composizione / uso e organico; Dvořák `Stabat Mater`, redazioni 1876 e 1877, tenuta ciclica e dimensione reale dell'esecuzione al Royal Albert Hall nel 1884 | ÖAW / Bruckner-Lexikon (https://api-brucknerlex.acdh.oeaw.ac.at/article/d1e9284); catalogo Antonín Dvořák (https://www.antonin-dvorak.cz/en/work/stabat-mater/) |

### Una registrazione istituzionale aggiunta come link, non come iframe

- **Bach BWV 4 `Christ lag in Todesbanden`**, Netherlands Bach Society / René Jacobs, ripresa 5 novembre 2023, pubblicazione 24 aprile 2025. Crediti e organico verificati sulla scheda dell'editore (https://www.bachvereniging.nl/en/bwv/bwv-4). Si propone la pagina ufficiale con ascolto integrale; non è stato inserito un nuovo YouTube ID e **non è dichiarato alcun collaudo browser o Android**.
- BWV 106 era già in pagina; le note aggiungono la verifica organologica dalla scheda ufficiale, senza duplicare il player.

### Salvaguardie editoriali e tecniche

Nessuna pagina dedicata al sacro, nessuna voce aggiunta ai menu, nessuna sostituzione di media esistenti, nessuno spostamento di `#castrati`. Gli interventi riguardano soltanto il testo e collegamenti a fonti identificabili, non Javascript o controlli multimediali. **HIP indica la documentazione di organici, versioni, testimonianze e scelte di prassi, non una qualità dedotta dal nome di un interprete.**

I controlli del lotto sono di **sorgente statica e lettura remota GitHub**, non di esecuzione reale di audio nel browser né di render su dispositivi.


### Rettifica di collocazione del lotto VIII — 17 ottobre 2026

La rilettura dell'HTML appena pubblicato ha permesso di correggere tre raccordi senza modificare la sostanza delle fonti: (1) la nota BWV 106 è stata spostata fuori dall'approfondimento veneziano sulla Pietà e collocata **subito dopo la scheda di ascolto BWV 106**, con testo d'apertura reso aderente alla scheda; (2) il collegamento di BWV 4 è stato posto **dopo la discussione continua sul doppio coro BWV 225**, per non interrompere l'analisi del mottetto; (3) il confronto fra singing schools e cappelle viene ora **accanto alla trattazione delle istituzioni corali** nel Classicismo, non fra organico della Nelsonmesse e registrazione Harnoncourt. Rettifica su main in commit separato perché il commit di lotto VIII era già stato pubblicato. Nessuno script, menu, ID, lettore o URL video alterato; è stato aggiornato soltanto il registro.

## Nono lotto — 17 ottobre 2026 · voce comunitaria, fonti manoscritte e istituzioni di culto

**HEAD verificato prima dell'intervento:** `d34499d26b5e08724b459e689233b142107faffb` su `main`. Le integrazioni seguono l'ottavo lotto e la sua rettifica, senza duplicare registrazioni o creare nuovi capitoli.

### Undici integrazioni verificate per pertinenza storica

| Periodo | Aggiunte al racconto esistente | Evidenza utilizzata |
|---|---|---|
| Rinascimento | Victoria, `Officium defunctorum` (1605): messa a sei voci + mottetto, responsorio e lezione, contro il falso equivalente «solo Requiem» | Catalogo delle prime stampe Victoria, https://victoria.uma.es/ediciones_antiguas.html |
| Rinascimento | Tallis, `Spem in alium` a quaranta parti: Egerton MS 3512 ordinato in cinque gruppi di otto voci, Add MS 29968 riordinato in otto cori di cinque; distinguere disposizione nelle copie da assetto esecutivo comprovato | British Library https://searcharchives.bl.uk/catalog/032-001985761 e https://searcharchives.bl.uk/catalog/032-002021550 |
| Barocco | Purcell, `Hear my prayer, O Lord` Z. 15: autografo incompiuto per otto parti non accompagnate, Fitzwilliam MU.MS.88 f.83v; non attribuire completamenti posteriori | Fitzwilliam Museum https://data.fitzmuseum.cam.ac.uk/id/object/253455 |
| Barocco | Milano monastica: Cozzolani e distinzione fra voci notate, prassi vocali femminili e organizzazione nella clausura | Robert L. Kendrick, Oxford University Press, https://academic.oup.com/book/49169 |
| Classicismo | Bortnjans'kyj: concerti sacri per un coro / due cori, antiphonia e `tutti`, organici a cappella e contesto di corte; registrazione Polyansky indicata come **discografia moderna**, non HIP attribuita senza prove | Chandos CHAN9922, https://www.chandos.net/chanimages/Booklets/CH9922.pdf (note di Philip Taylor, pp. 6–9) |
| Classicismo | Beethoven, `Missa solemnis`: intenzione liturgica 1820, testo completato 1823, prima integrale concertistica 1824 e partecipazione a Vienna nello stesso anno di soli tre numeri; guerra e pace nell'`Agnus Dei` | Beethoven-Haus https://www.beethoven.de/de/work/view/ag9iZWV0aG92ZW4tdml1cjNyEQsSBHdvcmsYgICA7Of61wgM/Mass%2Bin%2BD%2Bmajor%2Bfor%2Bfour%2Bsolo%2Bvoices%2C%2Bchorus%2C%2Borchestra%2Band%2Borgan%2Bop.%2B123%2B%26%23040%3BMissa%2Bsolemnis%26%23041%3B ; BSO https://www.bso.org/works/beethoven-missa-solemnis |
| Romanticismo | Mendelssohn, `Elias`: Birmingham 1846, circa 271 cantori / 125 strumentisti, revisione delle parti nel 1847 e ruolo dei cori | BFCS https://bfcs.org.uk/2022/08/19/bfcs-and-the-premiere-of-mendelssohns-elijah/ ; British Library https://searcharchives.bl.uk/catalog/040-002104261 |
| Romanticismo | Fauré, `Requiem`: datazione comparata delle prime esecuzioni parziale 1888, integrale cameristica 1893, sinfonica 1900; distinzione testuale di `In paradisum` | BnF https://catalogue.bnf.fr/ark:/12148/cb139120522 |
| Romanticismo | Schubert/Sulzer, Salmo 92 D.953: nuova fonte del 1832, varianti melodiche, ornamentali e sottoposizione del testo ebraico rispetto alle fonti 1834–35 e 1839–40 | Rees e Schab, Università di Haifa https://cris.haifa.ac.il/en/publications/a-new-source-for-schuberts-hebrew-psalm-92-d-953/ |
| Romanticismo | Čajkovskij, Liturgia op.41: controversia editoriale 1879–80; Kiev 1879 distinto da concerto 1880; riduzione per prova non accompagnamento liturgico | Tchaikovsky Research https://en.tchaikovsky-research.net/pages/Liturgy_of_Saint_John_Chrysostom |
| Romanticismo | Stanford, `Evening Service in B flat`: cantici nella sequenza effettiva dell'Evensong; distinto da `Magnificat` latino op.164 e motetti op.38 | Westminster Abbey https://www.westminster-abbey.org/order-of-service?id=14769 e https://www.westminster-abbey.org/worship-and-music/music/recordings/parry-songs-of-farewell |

### Metodologia filologica e limiti

Interventi in prose e collegamenti editoriali, senza catalogo autonomo: l'obiettivo è confrontare **forme, testi, organici, luogo d'uso, testimonianze e revisioni**, distinguendo liturgia, devozione e concerto. Una registrazione moderna non viene presentata come identica alla prassi originaria solo perché impiega un direttore autorevole. Nessun ID YouTube inventato, nessun video incorporato, nessun ascolto in autoplay.

**Controlli statici pre-commit:** presenza univoca dei punti di inserimento, struttura degli ID e conteggio delle schede / iframe, assenza di nuove istruzioni JS, continuità dell'inserto `#castrati` e registro aggiornato. **Nessun collaudo browser reale, smartphone o playback audio**. Le singole fonti sono state individuate attraverso cataloghi e documentazione istituzionale; l'accessibilità effettiva dei link può variare nel tempo.

## Raccordo editoriale dopo il nono lotto — 17 ottobre 2026 · dal gesto al discorso

**Ambito distinto dal gigaudit sacro:** contributo trasversale al racconto storico richiesto dall'autore durante la prosecuzione del lavoro. Il principio di continuità fra Barocco e Classicismo non si lascia esaurire dal contrasto tra stucchi ed equilibrio neoclassico.

- **`barocco/#classicismo`:** ampliata la cerniera esistente con tre paragrafi argomentati su unità del dramma, giudizio sull'episodio rispetto all'intero, riforme teatrali non monopolizzate da Gluck, nuova attenzione alla memoria e al tempo dell'ascoltatore; rapporto non teleologico fra `Empfindsamer Stil`, `Sturm und Drang` e interrogazione romantica dell'interiorità. Ritoccata la domanda conclusiva, non creato un capitolo né spostate le sezioni.
- **`classicismo/#fuoco`:** reso esplicito il rapporto fra attesa, conseguenza del gesto musicale, memoria, equilibrio e inquietudine; corretta la formulazione su Haydn per evitare che `Sturm und Drang` appaia un movimento musicale unitario.
- **`classicismo/#teatro`:** titolo reso meno oppositivo verso il Barocco; callout sulla riforma Gluck-Calzabigi corretto come critica a determinate convenzioni operistiche, nel contesto di tradizioni francesi e precedenti italiani.
- **Fonti:** `Gluck-Gesamtausgabe`, https://www.gluck-gesamtausgabe.de/gwv/werkregister/eintrag/work-62.html ; James Webster, `Haydn Studies` (Cambridge University Press), https://www.cambridge.org/core/books/abs/haydn-studies/haydns-symphonies-between-sturm-und-drang-and-classical-style-art-and-entertainment/C0C07C7B659697C3A750A6B0821E25E2 .

**Principio filologico:** il Barocco già conosceva forme e costruzioni unitarie; non si racconta il Classicismo come invenzione del discorso né il Romanticismo come esito necessario dello stile sensibile. La riforma gluckiana resta sviluppata nella sezione teatrale del Classicismo; nessuna attribuzione o versione discografica aggiunta.

**Salvaguardie:** nessun video, iframe, elemento autoplay o script modificato; gli ID esistenti e `#castrati` rimangono immutati. Controlli sulla struttura e sui testi pubblicati effettuati sul codice; non prove di riproduzione o di resa browser.

## Decimo lotto — 17 ottobre 2026 · riconoscibilità, trasformazione e memoria del tempo musicale

**In continuità con la cerniera Barocco–Classicismo appena concordata.** HEAD iniziale `699bf217a9873c512e29ad5c8a18ad7dc1bff203`; modifiche soltanto in tre pagine storiche già esistenti più questo registro. Scopo: sostenere con partiture, esempi concreti e problemi filologici la distinzione fra gesto sonoro isolato e discorso nel tempo, senza inventare una progressione meccanica verso il Romanticismo.

**Nove integrazioni organiche:**

- **Barocco, nel capitolo sulla passacaglia e la fuga:** BWV 582 come variazione che conferisce senso cumulativo a una base ricorrente; confronto storico, non identità formale, con Brahms op.98. Raccordo alla cerniera `#classicismo`.
- **Barocco, nel percorso già esistente sulla Partita per violino BWV 1004:** ritorni armonici, articolazione re minore/re maggiore/re minore, documentazione dell'autografo 1720 Mus. ms. Bach P 967 e della registrazione All of Bach di Shunske Sato; evitata la presentazione della Ciaccona come commemorazione biografica provata. Fonti: Netherlands Bach Society https://www.bachvereniging.nl/en/bwv/bwv-1004 e IMSLP https://imslp.org/wiki/Chaconne_%28Bach%2C_Johann_Sebastian%29.
- **Barocco, nel concerto grosso/solistico:** ritornello vivaldiano come ritorno trasformato e modulante; collegamento analitico alla forma-sonata del Classicismo senza sovrapporre le due forme.
- **Classicismo, nel quadro `#fuoco` di Haydn:** Hob. I:45 `Addio`, Finale Presto–Adagio e uscita progressiva dei musicisti, distinzione fra scrittura della partitura e racconto posteriore a Griesinger; registrazione e documentazione ufficiale Haydn2032 / Il Giardino Armonico / Giovanni Antonini, https://www.haydn2032.com/en/projects/no9-laddio. Precisato che il lettore preesistente in pagina presenta il primo movimento e non è diventato improvvisamente l'integrale.
- **Classicismo, dentro `#forma`:** significato funzionale del ritorno nella K. 525 (dominante → tonica), memoria e ripresa; evitare l'equazione fra schema analitico di un caso e legge universale.
- **Romanticismo, Lied:** continuità di `Winterreise` come sequenza di ventiquattro situazioni e trasformazione della prospettiva poetica, distinta dalla ripresa di sonata.
- **Romanticismo, pianoforte:** `Wanderer-Fantasie` D.760 (1822), relazione con il Lied D.489/493 e continuità fra quattro sezioni. Fonti: Carnegie Hall https://data.carnegiehall.org/works/2147/about; Schubert online https://schubert-online.at/activpage/werke_einzelansicht.php?herkunft=gattung_einzelansicht&top=7&werke_id=23; Gerald Larner https://geraldlarner.com/work/schubert-fantasy-wanderer.
- **Romanticismo, pianoforte:** Sonata in si minore di Liszt (1853), unità esteriore e funzioni cicliche, significato materiale dei vuoti nell'autografo e differenze con la stampa del 1854; Henle, prefazione critica di Ernst Herttrich, https://www.henle.de/media/2b/bc/b3/1697725922/9559-1697725922-sync.pdf.
- **Romanticismo, sinfonia:** Brahms Quarta op.98, passacaglia in otto battute e varianti; rapporto con Bach BWV150 **discusso e non assunto come fatto documentario**, ricerca di Peter Petersen e alternativa Beethoven WoO80, fonte di storiografia analitica https://www.gmth.de/zeitschrift/artikel/710.aspx e articolo di critica documentaria https://musikderzeit.de/wp-content/uploads/sites/6/2019/11/NZfM_201905_Petersen.pdf.

**Criterio editoriale.** I confronti compaiono accanto a opere già introdotte nelle rispettive pagine. La lezione scolastica rimane negli spazi «Per iniziare» già predisposti: nessun esercizio elementare introdotto nel testo adulto. Conservate le registrazioni esistenti, aggiunti soltanto rimandi istituzionali e alla partitura, senza inventare nuovi identificativi audiovisivi.

**Limiti e controlli statici.** Controllati ancoraggi univoci di inserimento, invarianza di ID HTML, script, iframe, `data-video`, `autoplay`, nuove sezioni e presenza di `#castrati`; lettura della versione GitHub dopo la pubblicazione. Nessun collaudo di riproduzione reale o rendering mobile/Android dichiarato.

## Undicesimo lotto — 17 ottobre 2026 · dal numero vocale all'arco narrativo e meditativo

**Branch di lavoro:** `main` (HEAD precedente `57556d1be172df5a08f1dd0a5cc231265f580e37`). Il lotto riprende il gigaudit sacro e corale, con un confronto fra cinque generazioni e senza disporle in una genealogia teleologica. **Dieci integrazioni nei capitoli già esistenti, nessuna sezione o audioteca autonoma.**

### Barocco — il coro può narrare, commentare o collegare testi separati

1. **Bach BWV 244**, il doppio coro e la doppia orchestra come dispositivo di narrazione/meditazione, corale dei soprani in ripieno, contesto del Venerdì santo e questione del numero effettivo di cantori; catalogo https://bach.de/werk/bwv/244.html.
2. **Bach BWV 245**, la revisione 1725 dell'apertura `Herr, unser Herrscher` con `O Mensch, bewein dein Sünde groß`, poi riutilizzato in BWV 244; distinzione fra le riprese e la scelta editoriale esplicita della Netherlands Bach Society: https://www.bachvereniging.nl/en/bwv/bwv-245 e https://www.bach.de/werk/bwv/245.html.
3. **Händel `Messiah` HWV 56**, la costruzione di un arco in tre parti da testi selezionati da Jennens, senza trama operistica; `Hallelujah` alla fine della parte II, `Amen` al termine del lavoro; fonte primaria il libretto della prima di Dublino https://foundlingmuseum.org.uk/object/messiah-libretto-2/ e catalogo https://gfhandel.org/handel/worklist/43to100.html.
4. **Messiah e Foundling Hospital**, la prima al Foundling dell'1 maggio 1750 e la copia di partitura e parti lasciata dal compositore nel codicillo testamentario del 1757. I due documenti non autorizzano a identificare ogni ripresa successiva con lo stesso organico e testo: https://foundlingmuseum.org.uk/fact/fact-5/ e https://foundlingmuseum.org.uk/object/belongings-handels-will/.

### Classicismo — il coro rende percepibile una successione

5. **Haydn `Die Schöpfung`**, rapporto fra `Die Vorstellung des Chaos`, parola narrata e improvvisa irruzione di `Es werde Licht`; edizione Carus con testo originale, https://www.carus-verlag.com/en/music-scores-and-recordings/joseph-haydn-die-schoepfung-5199004.html.
6. **Haydn `Die Jahreszeiten`**, van Swieten e Thomson; tempo ciclico della natura e mondo sociale delle voci contadine; edizione Carus basata sulle parti delle prime esecuzioni e sulla stampa del 1802: https://www.carus-verlag.com/en/music-scores-and-recordings/joseph-haydn-die-jahreszeiten-5198003010000.html.
7. **Beethoven Nona op. 125**, recitativi di violoncelli e contrabbassi, ricordi dai precedenti movimenti, tema prima strumentale e poi ingresso del coro; il Beethoven-Haus conserva le parti supplementari autografe dei tromboni e distingue gli stati testuali: https://www.beethoven.de/en/work/view/5556714292117504/ e https://www.beethoven.de/en/media/view/5626809903218688/scan/1.

### Romanticismo — la memoria del coro è anche storia della sua ricezione

8. **Mendelssohn / Bach 1829**, l'esecuzione della `Passione secondo Matteo` alla Singakademie di Berlino fu ridotta e adattata: otto libri di parti corali superstiti alla British Library (Add MS 47839 A–H), https://searcharchives.bl.uk/catalog/032-002104229 e documentazione Library of Congress https://www.loc.gov/collections/felix-mendelssohn/articles-and-essays/felix-mendelssohn-reviving-the-works-of-bach/. La riscoperta romantica è parte della storia dell'esecuzione, non un evento sonoro identico al 1736.
9. **Brahms `Ein deutsches Requiem` op. 45**, disegno delle beatitudini dal primo al settimo movimento, differenza fra la versione a sei movimenti eseguita nel 1868 e il ciclo a sette del 1869; BSO https://www.bso.org/works/a-german-requiem e GHDI https://germanhistorydocs.org/de/reichsgruendung-bismarcks-deutschland-1866-1890/johannes-brahms-ein-deutsches-requiem-opus-45-1868.
10. **Mahler Seconda**, il passaggio da tre movimenti strumentali a `Urlicht` e al Finale con coro, testo da Klopstock rielaborato, ricostruzione cronologica e problema degli autografi; Mahler Foundation https://www.mahlerfoundation.org/mahler/compositions/symphony-no-2/symphony-no-2-introduction/ e Mahler Catalogue https://www.mahlercat.org.uk/Pages/Symph2/Texts.htm.

**Principio editoriale:** unità dell'opera non significa un'unica forma, un'unica disposizione del testo né un'origine esecutiva univoca. Nessuna registrazione classificata HIP solo dal nome del direttore. I link nuovi conducono a istituzioni, cataloghi e fonti primarie: non è aggiunto un video non verificato.

**Verifiche effettuate:** testo per ancoraggi univoci, immutabilità di script, ID, iframe, dati dei video e quantità di sezioni, mantenimento di `#castrati` e commit atomico. Nessuna prova riproduzione effettiva / Android e nessuna promessa di collaudo browser.

## Dodicesimo lotto — 17 ottobre 2026 · chi canta, chi risponde, chi rappresenta la comunità

**Main prima della scrittura:** `a4f0a9744a8fe476bf706bc841ffe6f0264b8a3f`. Nove integrazioni, distribuite nel racconto esistente attraverso Rinascimento, Barocco, Classicismo e Romanticismo. Nessuna pagina dedicata, nessun capitolo artificiale o nuovo lettore.

- **Rinascimento, Riforma**: due stampe del 1524 come fonti di diverso uso della melodia corale: l'`Achtliederbuch`, stampato fuori Wittenberg nonostante il frontespizio, e il `Geystliche gesangk Buchleyn` di Johann Walter, raccolta di partbooks polifonici effettivamente stampata a Wittenberg. Fonti: https://www.lutheranchoralebook.com/sources/achtliederbuch/ ; https://wordandworld.luthersem.edu/wp-content/uploads/pdfs/44-2_Hymns_and_Hymnals_Singing_The_Faith/04_From_Broadside_to_Hymnal_How_Things_Began_in_Wittenberg_in_1524.pdf.
- **Rinascimento, Ginevra**: Salterio del 1562, canto assembleare all'unisono e armonizzazioni di Claude Goudimel (1565), distinguendo funzioni confessionali ed editoriali. Fonti: https://www.cambridge.org/core/journals/proceedings-of-the-musical-association/article/abs/genevan-psalter-of-1562-set-in-fourpart-harmony-by-claude-goudimel-in-1565/9A9AE1E0E11AEABF458429CABA32460D ; https://genevanpsalter.com/files/complete-collections/Genevan_Psalter_pages.pdf.
- **Barocco, Schütz**: `Musikalische Exequien` SWV 279–281 (1636), esequie di Heinrich Posthumus Reuß, tre grandi parti collegate al rito, due gruppi nel `Canticum Simeonis` rappresentanti simbolicamente vivi e angeli. Fonte https://heinrich-schuetz-haus.de/swv/v2.0/index.php?number=279&style=standard&to=swvcontent e https://heinrich-schuetz-haus.de/swv/v2.0/index.php?number=280&style=&to=swvcontent.
- **Barocco, Carissimi**: `Jephte`, da copia di Marc-Antoine Charpentier e non da supposto autografo, coro delle sei voci solistiche secondo la concezione storica (grandi rinforzi moderni non necessari per spiegare la funzione collettiva). Fonte edizione critica Carus 10.043, https://www.carus-verlag.com/fr/partitions-et-enregistrements/giacomo-carissimi-historia-di-jephte-1004300.html.
- **Classicismo, teatro**: `Orfeo ed Euridice` (Vienna 1762), cori delle Furie e dei Campi Elisi che agiscono concretamente nella trasformazione dell'azione, senza confondere versioni e organici con l'`Orphée` francese del 1774. Fonte Gluck-Gesamtausgabe https://www.gluck-gesamtausgabe.de/gwv/werkregister/eintrag/work-60.html.
- **Classicismo, musica sacra**: Mozart `Requiem` K.626, frammento autografo, lavoro parziale Eybler e completamento tradizionale Süßmayr; distinzione nel catalogo e nell'edizione critica Mozarteum https://dme.mozarteum.at/DME/nma/nma_toc.php?l=2&vsep=14 ; https://kv.mozarteum.at/en/work/requiem-the-requiem-completed-by-franz-xaver-susmayr-in-the-traditional-form-7373.
- **Romanticismo, Berlioz**: `Grande Messe des morts` op.5 (1837), quattro gruppi di ottoni ai lati della compagine, spazio come parametro del discorso e differenza fra grande `tutti` e sezioni con tenore. Fonte programma documentario Philharmonie de Paris https://pad.philharmoniedeparis.fr/download.ashx?id=CMTN000181600_01&typedoc=CMTN.
- **Romanticismo, Verdi**: `Messa da Requiem` per Manzoni (Milano 1874) da `Libera me` per Rossini; versione iniziale della sezione `Liber scriptus` come fuga per coro (eseguita nel 1874), sostituita da una sezione per mezzosoprano solista (1875): diversità di protagonismo delle voci e di edizione. Fonte Ricordi / edizione critica David Rosen https://www.ricordi.com/it-IT/Critical-Editions/Verdi-Giuseppe-Critical-Editions/Verdi-Giuseppe-WGV/Verdi-Messa-da-Requiem.aspx ; Treccani https://www.treccani.it/magazine/lingua_italiana/speciali/virtu1/5_Epifani.html.
- **Romanticismo, confronto trasversale**: Berlioz, Verdi e Brahms comparati su spazio acustico, ritorno del `Dies irae` e parola `Selig`; niente equivalenza impropria fra comunità sociale e gruppo notato a quattro voci.

**Metodo di inserimento:** paragrafi all'interno delle prose adulte già scritte, senza introdurre nuove attività scolastiche o spostare `#castrati`. Collegamenti a fonti editoriali e documentarie, non a player non verificati. **HIP** significa qui distinguere edizioni, fonti, organici e ambienti, non proclamare «autenticità» sulla base del nome del direttore.

**Audit statico:** verificati gli ancoraggi d'inserimento univoci, conteggi immutati di ID, sezioni, script, iframe, video e autoplay; contenuti riletti dal commit pubblicato. Playback e resa mobile non verificati in un browser reale.

## Tredicesimo lotto — 17 ottobre 2026 · voci di festa, cerimonia e nazione

**Repository:** `SkenderAle/github-pages`, `main`. **HEAD pre-intervento:** `0b04127bb1551be8cedb4b81f919192dced5ce05`. Undici interventi sostanziali, quattro pagine storiche più il registro. Il filo è il soggetto sociale del canto: una comunità che canta in prima persona, una voce collettiva che la rappresenta e i professionisti che cantano in una cerimonia per un'autorità sono realtà differenti.

### Rinascimento · dal canto in piazza alla riappropriazione religiosa

1. **Firenze, canto carnascialesco:** gruppi di interpreti, mascherate, cortei e carri all'aperto; la Canzone de' confortini e l'immagine di tre adulti più due ragazzi non equivalgono a una fotografia di ogni organico. Treccani: https://www.treccani.it/enciclopedia/i-canti-carnascialeschi_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/.
2. **Savonarola e cantasi come:** riuso di canti e melodie profane per laudi, distinzione fra melodia socialmente riconosciuta e destino frammentario delle fonti musicali dopo i falò; fonte Treccani https://www.treccani.it/enciclopedia/philippe-verdelot_%28Enciclopedia-machiavelliana%29/.

### Barocco · sacro e potere politico

3. **Händel, Utrecht Te Deum HWV 278:** St Paul's Londra, 7 luglio 1713, celebrazione politica di pace con parole liturgiche inglesi; organico e cautele strumentali dalla Halle Handel Edition/Bärenreiter BA 4246 https://www.barenreiter.co.uk/utrecht-te-deum-hwv-278-full-score.html; registrazione identificata e senza player Hyperion/St Paul's https://www.hyperion-records.co.uk/dw.asp?dc=W9412_67009.
4. **Händel, Zadok the Priest HWV 258:** incoronazione di Giorgio II 1727, funzione del coro e del preludio orchestrale nel rito dell'unzione, continuità esecutiva fino al 2023 ma non identità di organici; Westminster Abbey https://www.westminster-abbey.org/history/coronations-at-the-abbey/spotlight-on-coronations/music; ordine ufficiale https://www.royal.uk/news-and-activity/2023-05-06/the-coronation-service-order-of-service.

### Classicismo · il canto pubblico della Rivoluzione francese

5. **Méhul / Chénier, Chant du départ:** inno del 1794, voci sociali del testo, ritornello, coro e orchestra di fiati nella scheda ufficiale BnF, con prima all'Académie nationale de musique il 29 settembre; https://catalogue.bnf.fr/ark:/12148/cb13916090k.
6. **Gossec, Offrande à la liberté:** stampa Imbault 1792, recitativi, cori, ampia orchestra, Marche des Marseillois e Veillons; fonte BnF https://catalogue.bnf.fr/ark:/12148/cb397851270. **Non identificare** l'Offrande con l'ascolto preesistente del `Triomphe de la République` di Gossec: sono opere diverse, e nessun lettore è stato modificato.

### Romanticismo · società corali, genere e ideologia

7. **Liedervereine / società maschili:** Nägeli nel 1819–20, istituzioni, formazione e raduni transregionali; esplicitati limiti di partecipazione femminile e sociale, Cambridge University Press https://www.cambridge.org/core/books/charismatic-nations/in-tune/A920C8C0DAD622B023779D4ABAC1BEF0.
8. **Schubert, Gesang der Geister D714:** autografo dicembre 1820, rifacimento febbraio 1821 per doppio coro maschile a otto voci e archi gravi; storia sociale del coro non equivale a propaganda patriottica. Fonti Schubert online https://schubert-online.at/activpage/werke_einzelansicht.php?herkunft=gattung_einzelansicht&lang=E&top=1&werke_id=10129 e https://schubert-online.at/activpage/werke_einzelansicht.php?top=1&werke_id=481.
9. **Mameli/Novaro e Verdi:** canto del 1847, uso risorgimentale, confronto con `Inno popolare` (1848, tre voci maschili a cappella) e `Inno delle nazioni` (1862, tenore, coro, orchestra; citazioni simboliche di tre inni nazionali); Quirinale https://new.quirinale.it/page/inno ; edizione Ricordi curata da Roberta Montemorra Marvin https://www.ricordi.com/it-IT/Critical-Editions/Verdi-Giuseppe-Critical-Editions/Verdi-Giuseppe-WGV/Verdi-Hymns.aspx.
10. **Brahms, Triumphlied op. 55:** Apocalisse usata in celebrazione nazionale dopo la guerra franco-prussiana; doppio coro/orchestra, autografi, stampa 1872 e recupero dei materiali della prima versione nel 2012. Brahms-Institut https://brahmsinstitut.de/Archiv/web/bihl_digital/jb_werkekatalog/op_055.html e Università di Brema https://www.uni-bremen.de/institut-fuer-musikwissenschaft-und-musikpaedagogik/forschung/historische-musikwissenschaft/brahms-bremer-triumphlied-in-c-dur.
11. **Verdi, Va pensiero:** distinto il mito del bis alla prima scaligera da `Immenso Jehova` e dalla ricezione nazionale successiva; Roger Parker e ricostruzione documentaria in UC Press https://content.ucpress.edu/title/9780520276253/9780520276253_chapter_one.pdf, Treccani https://www.treccani.it/enciclopedia/giuseppe-verdi_%28Storia-della-civilta-europea-a-cura-di-Umberto-Eco%29/.

### Filologia e controlli

Nessun capitolo autonomo, voce di menu o esercizio adulto trasformato in gioco. Le aggiunte narrano i rapporti fra testo, contesto civile, organico, fonti editoriali e funzione dei cori. Il nome di un interprete non dà automaticamente una certificazione HIP. **Nessun nuovo video né ID YouTube aggiunto**.

Prima del commit: ancoraggi di paragrafo univoci, confronto degli ID HTML, script, iframe, `data-video`, autoplay e sezioni; mantenuto l'inserto `#castrati`. Dopo il commit: lettura GitHub su `main`. I controlli sono statici e non comprendono un test di playback su browser/Android.

## Precisazione di perimetro editoriale — 17 ottobre 2026 · cori d'opera e percorso autonomo

**Richiamo dell'autore:** nel trattare il coro nelle pagine storico-musicali di Musurgia Mundi, non anticipare né replicare la trattazione sistematica dell'opera lirica; la pagina `opera-lirica/index.html` esiste ed è esplicitamente **in preparazione**. Esiste già anche il percorso storico `melodramma/index.html`.

**Applicazione:** in `romanticismo/index.html` il riferimento al `Va, pensiero` è circoscritto alla storia della ricezione politica, con rimando alla futura pagina `../opera-lirica/` per scena, scrittura e interpretazioni. In `classicismo/index.html` il coro delle Furie e quello dei Campi Elisi servono al confronto sulla riforma drammatica di Gluck, con rinvio a `../melodramma/` per la trattazione specifica del teatro.

**Regola per i prossimi lotti:** nelle epoche mantenere solo esempi operistici strettamente necessari a una tesi storica trasversale (funzione pubblica, rapporto fra parola e coro, contesto civile, trasformazione estetica). Lasciare alla sede dedicata l'analisi di opere complete, libretti, ruoli, versioni, forme teatrali e catalogo degli ascolti. Nessun duplicato e nessuna scheda autonoma dei cori d'opera in pagine non operistiche. La sacra, il Lied e l'oratorio restano repertori con funzioni proprie, da non assimilare al melodramma.

## Quattordicesimo lotto — 17 ottobre 2026 · coralità non operistica e confini dei percorsi

**HEAD prima degli interventi:** `67133d11dad963bfce90e825b46b69fd72a81ac1` su `main`. La precedente precisazione editoriale sui cori d'opera (già committata su `main`) resta in vigore. La pagina `opera-lirica/index.html` è un **segnaposto in preparazione**: nessun testo del futuro sito è stato scritto o dichiarato completato.

### Interventi effettivi (9)

**Classicismo, 2 integrazioni.**
1. Haydn: `Gott erhalte Franz den Kaiser` (1797), il testo per l'imperatore Francesco II e il riuso in forma di variazioni nel Quartetto op. 76 n. 3; la melodia può passare da una funzione pubblica monarchica a una forma cameristica senza che i contesti diventino identici. Autografo ÖNB Mus. Hs. 16.501: https://germanhistory-intersections.org/en/germanness/ghis%3Aimage-272.
2. Beethoven, `Fantasia corale` op. 80: accademia del 22 dicembre 1808, dal pianoforte solista al coro, introduzione all'epoca improvvisata e forma fissata nel 1809; non trattarla come versione immutabile o come semplice bozza della Nona. Beethoven-Haus https://www.beethoven.de/en/work/view/ag9iZWV0aG92ZW4tdml1cjNyEQsSBHdvcmsYgICA3N2nhgkM/Fantasy%2Bfor%2Bpiano%2C%2Bchorus%2Band%2Borchestra%2B%26%23040%3BC%2Bminor%26%23041%3B%2Bop.%2B80.

**Romanticismo, 5 integrazioni.**
3. Fanny Hensel, `Oratorium nach Bildern der Bibel` (1831), organico misto, 5–8 voci e tre tromboni, edizione di Elke Mascha Blankenburg: https://fannyhensel.de/?lang=en&p=1536. Contro la riduzione della produzione femminile a musica per salotto.
4. Robert Schumann, `Romanzen für Frauenchor`, autografo 1849 con op. 69/op. 91 e modifiche del numero dei brani sul frontespizio, Morgan Library https://www.themorgan.org/music-manuscripts-and-printed-music/115693.
5. Johannes Brahms, `Vier Gesänge` op. 17 (1860–61), coro femminile SSA, due corni e arpa, copia di Clara Schumann fonte principale dell'edizione, Breitkopf https://www.breitkopf.com/en/work/1325/4-songs-op.-17.
6. Mendelssohn, festeggiamenti Gutenberg 1840: `Festgesang` WoO 9/MWV D 4 (piazza, coro maschile e due gruppi di ottoni, 24 giugno) e `Lobgesang` op. 52 (sinfonia-cantata in chiesa, 25 giugno): due opere **distinte**. Fonti https://imslp.org/wiki/Festgesang_zum_Gutenbergfest%2C_WoO_9_%28Mendelssohn%2C_Felix%29 e https://www.mendelssohn-stiftung.de/en/felix.
7. Confronto delle tre forme corali di Brahms: `Deutsches Requiem` / mottetti op. 74 / canti profani femminili op. 17, distinguendo funzione, testo e organico e rimandando i cori operistici al percorso dedicato.

**Risorgimento, 2 integrazioni di perimetro.**
8. `#verdi` e repertorio ottocentesco rimandati correttamente a `../melodramma/` e alla futura `../opera-lirica/`, conservando nell'Atlante storico soltanto la **ricezione politica** dei cori di `Nabucco` e `I Lombardi`.
9. Ricostruzione civile del `Va' pensiero` distinta dall'analisi completa del `Nabucco`, che comprenderà libretto, struttura, organici, interpretazioni e allestimenti sul futuro sito, senza duplicazione.

### Controlli e limiti

Paragrafi collocati immediatamente dopo ancore univoche. Nessun nuovo player o ID YouTube, nessun autoplay, nessuna nuova sezione o alterazione dei menu. Invariati gli ID, gli script e gli iframe confrontati automaticamente prima del commit; conservata la pagina `opera-lirica/index.html` e tutti i suoi contenuti originali. Non è stato effettuato un test visivo mobile né playback in browser reale.
