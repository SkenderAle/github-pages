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
