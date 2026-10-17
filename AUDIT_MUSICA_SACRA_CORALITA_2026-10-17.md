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
