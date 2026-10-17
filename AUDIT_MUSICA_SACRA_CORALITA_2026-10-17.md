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
