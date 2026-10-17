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
