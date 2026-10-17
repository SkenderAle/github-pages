# Audit del repertorio sinfonico · 17 ottobre 2026
Repository: `SkenderAle/github-pages`, branch `main`, pagina `dalla-sinfonia-alla-rapsodia/index.html`.

## Inventario riscontrato prima del lotto
69 opere, 61 con identificativo YouTube, 8 senza lettore. Catalogo in JSON incorporato nella pagina; i singoli ID delle opere sono stabilizzati e devono rimanere invariati. Doppio impiego di `W2OsYos2Xko` per le suite n. 1 e n. 2 di Grieg **intenzionale**, perché lo stesso video le presenta in ordine invertito (suite n. 2 a 5:00; suite n. 1 a 22:05).

## Lavoro pubblicato
- Smetana, `smetana-042`, *Má vlast* completo: registrazione pubblicata dal canale ufficiale Brilliant Classics (Janáček Philharmonic Orchestra, Theodore Kuchar), nel blocco 0:00–1:13:13 di un video più ampio; fine del segmento salvata in `end=4393`. Fonte: https://www.youtube.com/watch?v=FZ97LtMnyy4 .
- Louis Spohr, `louisspohr-028`, Sinfonia n. 4 op. 86 *Die Weihe der Töne*: Budapest Symphony Orchestra, Alfred Walter, tracce indicizzate dal canale indipendente José Ignacio H. Fonte: https://www.youtube.com/watch?v=MMp64CUZ9bA . La fonte è di terzi e la disponibilità dell'incorporamento va verificata.
- Sibelius, `sibelius-058`, *Kullervo*: Bournemouth Symphony Orchestra, Paavo Berglund, storica registrazione del 1971 ripubblicata dal canale indipendente greatclassicrecords. Fonte: https://www.youtube.com/watch?v=wPtfhMpiFfQ . Ripubblicazione indipendente, da controllare per diritti e raggiungibilità.
- Dvořák, `dvorak-038`, tre *Rapsodie slave* op. 45: tre registrazioni audio sul sito ufficiale Český rozhlas (Orchestra Sinfonica della Radio Ceca, Vladimír Válek, 1995); link esterno verificato senza attribuire un identificativo YouTube inesistente: https://d-dur.rozhlas.cz/antonin-dvorak-slovanske-rapsodie-op-45-5171874 .
- Distinti tre stati: video identificato, archivio audio esterno, registrazione ancora in verifica. Aggiornati i contatori e il filtro disponibilità. Corretto «Azzera i filtri», che non azzerava `relation`.
- Le opere e le loro chiavi `id` sono rimaste in ordine; non è stato introdotto alcun `autoplay=1`.

## Nuovi numeri dopo l'intervento
69 opere · 64 con video identificato · 1 con audio esterno · 4 senza fonte fruibile confermata (stato del primo commit di giornata).

## Lavori ancora non coperti da video verificato
- Beethoven · Fidelio, op. 72 (opera integrale) (`beethoven-014`)
- Berlioz · Harold en Italie, op. 16 (`berlioz-026`)
- Berlioz · Roméo et Juliette, op. 17 (`berlioz-027`)
- Čajkovskij · Francesca da Rimini, op. 32 (`cajkovskij-054`)

## Verifiche aperte
Eseguire collaudo reale su Chrome Android e desktop di filtri, miniature, `end` della raccolta di Smetana, funzionamento degli embed, e ascolto radiofonico esterno. La presenza di un ID YouTube valido e dei crediti editoriali non equivale alla verifica di riproducibilità o autorizzazione embedding. Approfondire reperibilità di altre incisioni integrali presso case discografiche, archivi e orchestre. Verificare progressivamente i 60+ URL di fonte preesistenti e i minutaggi. Non inserire brani privi di riscontro.

## Secondo lotto — 17 ottobre 2026

- Berlioz, `berlioz-026`, *Harold en Italie*: video `-Yg_vJUXA8c`, NBC Symphony Orchestra, Arturo Toscanini, Carlton Cooley; concerto/trasmissione del 29 novembre 1953 documentato anche in un catalogo di archivi radiofonici. Youtube incorporato da canale terzo: non equiparato a edizione ufficiale. Riscontro contestuale storico: https://www.tumgik.com/tag/november%2026%201953 .
- Čajkovskij, `cajkovskij-054`, *Francesca da Rimini* op. 32: video `CIW4myGhEd8`, orchestra sinfonica di Berlino, Vladimir Ashkenazy, edizione caricata da terzi. Riscontro: https://www.askwoody.com/forums/topic/part-i-arent-these-the-greatest-performances-of-classical-music/page/5/ .
- Aggiunto dal testo introduttivo il collegamento diretto al saggio esistente sulla **musica assoluta** `romanticismo/#musica-assoluta`. Il saggio risultava già presente sul branch; non è stato duplicato o sovrascritto.

**Stato cumulativo:** 69 opere · 66 video con identificativo valido e crediti dichiarati · 1 ascolto esterno (Radio Ceca) · 2 opere prive di video documentato (Fidelio integrale e Berlioz, Roméo et Juliette).

**Audit aperto:** il test riproducibilità/embedding dei video e la verifica dettagliata delle registrazioni caricate da terzi sono ancora da svolgere in browser. In particolare, i due video aggiunti in questo lotto non sono presentati come pubblicazioni dell'emittente o dell'orchestra.

## Terzo lotto — 17 ottobre 2026 · *Fidelio* integrale da RaiPlay

- `beethoven-014`: opera integrale in una ripresa ufficiale (132 minuti, 2016), Orchestra e Coro dell'Accademia Nazionale di Santa Cecilia, Antonio Pappano, Simon O'Neill e Rachel Willis-Sørensen, come descritta dalla scheda RaiPlay: https://www.raiplay.it/video/2016/10/CONCERTO-APERTURA-SANTA-CECILIA-FIDELIO-eb384266-73d5-4f26-959d-667458e05631.html . Non è stata usata la ripresa OperaVision, che dichiarava una finestra di streaming terminata il 3 ottobre 2026.
- Nuovo campo `externalVideo` e filtro «Video su piattaforma esterna» distinto da YouTube incorporato, archivio audio esterno e opere senza ascolto. Collegamento direttamente alla fonte istituzionale senza iframe inventati. L'accessibilità reale dipende da RaiPlay e dal territorio: non è stata simulata o dichiarata riproducibilità garantita.
- Conservato il `Fidelio` come *ponte teatrale*, non come sinfonia. Restano 69 opere, di cui 66 con ID video, 1 con ripresa esterna ufficiale, 1 con audio esterno pubblico e 1 priva di integrale documentata (*Roméo et Juliette*, Berlioz). Aggiornati contatore, filtri, etichette, risultati e documentazione.
- Test statici: chiavi ID e ordine di 69 record invariati, 66 video ID preservati, tutti gli ID HTML e collegamenti editoriali preservati, sintassi JS verificata, nessun autoplay introdotto. Restano aperti browser/mobile e verifica globale degli embed.

## Quarto lotto — 17 ottobre 2026 · integrale di Berlioz e ampliamento di 13 opere

### Identificazione dell'integrale mancante

- `berlioz-027`, *Roméo et Juliette*, op. 17: **registrazione integrale documentata** del 18 settembre 2014 al Théâtre des Champs-Élysées, Orchestre National de France, **Daniele Gatti**, Marianne Crebassa, Paolo Fanale, Alex Esposito. Pubblicazione del canale verificato **France Musique concerts**, 15 dicembre 2017: https://www.youtube.com/watch?v=zf7kGcB4VSQ . Descrizione ufficiale con sezioni e minutaggi dal prologo al *Serment de réconciliation* (dall'introduzione sino a circa 1:40:20). La scheda passa da «In verifica» a «Video identificato». Forma distinta come **sinfonia drammatica**. Verificata l'identità editoriale del video, **non la riproducibilità dell'iframe su Android/desktop**.

### Nuove 13 schede: fonti istituzionali, integrali delle singole composizioni

Le registrazioni YouTube seguenti risultano pubblicate dal **canale verificato hr-Sinfonieorchester — Frankfurt Radio Symphony**; si tratta di integrali delle opere indicate, salvo il possibile breve ingresso sul palco prima della musica. Le descrizioni del canale riportano interpreti e, per le sinfonie, successione e inizi dei movimenti. Presenza in un canale ufficiale = attribuzione verificata, **non test definitivo dell'embed**.

| ID | Autore e opera | Fonte (ID YouTube o esterno) | Interpreti principali |
|---|---|---|---|
| `mendelssohn-070` | Mendelssohn, Quinta «Riforma» | `Yznb4uKr-0E` | hr-Sinfonieorchester, Masaaki Suzuki (2023) |
| `schumann-071` | Schumann, Seconda | `YD-dluM2gJQ` | hr-Sinfonieorchester, Marek Janowski (2017) |
| `brahms-072` | Brahms, Seconda | `NjIduF3equQ` | hr-Sinfonieorchester, Marin Alsop (2021) |
| `dvorak-073` | Dvořák, Settima | `bkJxMs5104Q` | hr-Sinfonieorchester, Andrés Orozco-Estrada (2021) |
| `dvorak-074` | Dvořák, Ottava | `uOWQQCWTVQ8` | hr-Sinfonieorchester, Ben Gernon (2019) |
| `saintsaens-075` | Saint-Saëns, Terza con organo | `5GrO47WJKTI` | hr-Sinfonieorchester, Iveta Apkalna, Riccardo Minasi (2020) |
| `franck-076` | Franck, Sinfonia in re minore | **Video RaiPlay** | Orchestra Sinfonica Nazionale della Rai, Yuri Ahronovitch (41 min) |
| `richardstrauss-077` | Strauss, *Don Juan* | `BBPZR33LJBk` | hr-Sinfonieorchester, Jader Bignamini (2023) |
| `richardstrauss-078` | Strauss, *Till Eulenspiegel* | `SS7dy3c8gZM` | hr-Sinfonieorchester, Sebastian Weigle (2024) |
| `richardstrauss-079` | Strauss, *Eine Alpensinfonie* | `zsTo7QxxgYg` | hr-Sinfonieorchester, Andrés Orozco-Estrada (2016) |
| `debussy-080` | Debussy, *Prélude à l'après-midi d'un faune* | `8UAYCubihlc` | hr-Sinfonieorchester, Alain Altinoglu (2023) |
| `debussy-081` | Debussy, *La mer* | `y1hWp4pQpAs` | hr-Sinfonieorchester, Alain Altinoglu (2023) |
| `dorapejacevic-082` | Dora Pejačević, Sinfonia op. 41 | `dOJSEQZYJWY` | hr-Sinfonieorchester, Jader Bignamini (2023) |

- Per ogni scheda sono riportati crediti, data del concerto e collegamento a un documento ufficiale o al filmato ufficiale.
- Il video RaiPlay di Franck è documentato alla fonte https://www.raiplay.it/video/2022/12/Franck-Sinfonia-in-re-minore-4cc808d8-b0fa-4582-85e2-3dda4930dc52.html; non è dichiarata la visione territorialmente garantita.
- Nuove etichette formalmente pertinenti: *sinfonia drammatica*, *preludio orchestrale*, *schizzi sinfonici*. Per *Eine Alpensinfonie* è mantenuto *poema sinfonico*, non una sinfonia classica in quattro movimenti.
- Le nuove schede ampliano il panorama franco-tedesco e mitteleuropeo anche con **Dora Pejačević**; nessuna registrazione è stata aggiunta sulla sola base della fama del titolo.
- Riformulata l'etichetta del collegamento video RaiPlay per valere tanto per *Fidelio* quanto per Franck.
- **Inventario dopo il quarto lotto:** **82 opere, 33 autori/compositori indicizzati, 79 video YouTube identificati, 2 video esterni RaiPlay, 1 archivio audio Český rozhlas, 0 schede senza collegamento documentato**.

### Verifiche tecniche e limiti del quarto lotto

- Controlli del catalogo in memoria prima del commit: 82 ID distinti, ordine relativo di tutti i 69 ID originari invariato, nessun video con ID non conforme a 11 caratteri, tutte le etichette di forme/relazioni risolte, registrazioni con crediti e fonti, controllo dell'assenza di `autoplay=1`.
- La pagina continua a preparare il player con `autoplay=0` e richiede un secondo gesto per premere Play. Nessun autoplay introdotto.
- Pagine di riferimento **RaiPlay Fidelio**, **RaiPlay Franck** e **Český rozhlas Rapsodie slave** risultano rintracciabili come pagine editoriali. **Non è stato possibile certificare streaming effettivo, requisiti di login, restrizioni territoriali o percentuale di esito per tutti gli URL.**
- **Ancora aperto:** test effettivo in Chrome desktop/Android della navigazione ai segnalibri, filtri, tastiera mobile, miniature, riproduzione YouTube, blocco embed, start/end di Smetana e riproduzione in archivi esterni. Non dichiarare come completati gli audit tecnici non eseguiti.

## Quinto lotto — 17 ottobre 2026 · intervento su *Mazeppa* dopo segnalazione Android

**Segnalazione documentata da schermata reale Chrome/Android:** `liszt-032`, video `kICGiPcgikk` non disponibile, messaggio YouTube: «Questo video non è più disponibile perché l'account YouTube associato al video è stato chiuso». La precedente attribuzione (Berliner Philharmoniker / Zubin Mehta, Philharmonie Berlin 1994) aveva un riscontro secondario nel Wirth Institute, ma tale riscontro non garantisce la sopravvivenza del caricamento.

**Sostituzione pubblicata:** ID `aOqDso_wOus`, *Mazeppa*, S.100, **London Philharmonic Orchestra / Bernard Haitink**, incisione Philips del 1970 ripubblicata da Universal Music Group nel canale YouTube *London Philharmonic Orchestra — Official Artist Channel*. Durata discografica 16:24; fonte ufficiale dell'album: https://www.universalmusic.it/musica-classica/album/liszt-complete-tone-poems-vol-1_20012447926/ ; filmato/audio identificato: https://www.youtube.com/watch?v=aOqDso_wOus . Questo è un audio ufficiale con immagine statica generata automaticamente da YouTube, **non un video del concerto** e **non una prova di esecuzione su strumenti d'epoca**.

**Alternativa documentata** nella stessa scheda: https://www.youtube.com/watch?v=7Gun78Tgs6Q , Berliner Philharmoniker / Herbert von Karajan, Deutsche Grammophon, incisione del 1961 su canale artista ufficiale. Il sito ora prevede un campo facoltativo `alternateVideo`: fornisce un link secondario leggibile, ma non fa partire automaticamente alcun player aggiuntivo.

**Criterio editoriale stabilizzato sulla pagina:** preferire, laddove pertinenti e documentati, le interpretazioni storicamente informate, privilegiando la ricerca dei materiali di Nikolaus Harnoncourt e Diego Fasolis; l'assenza di una simile versione accessibile non autorizza ad attribuire «filologia» a una registrazione di tradizione moderna. Per *Mazeppa* non è stata identificata una versione HIP integrale ufficialmente accessibile: Haitink è scelto per provenienza e qualità documentarie, non qualificato impropriamente come filologico.

**Verifica eseguita:** controllo del catalogo e degli ID in codice, permanenza di 82 schede e della loro sequenza, conteggi per categoria invariati; nessun `autoplay=1` e caricamento degli iframe solo su comando. **Non verificato:** riproduzione effettiva o permesso di embedding del nuovo video su Chrome Android (anche un Art Track ufficiale può avere limitazioni imposte dal distributore). Se l'iframe fallisce, la scheda offre sia l'URL principale sia l'alternativa ufficiale. Gli altri video restano da collaudare.

## Sesto lotto — 17 ottobre 2026 · prassi esecutiva storicamente informata e nuovi orizzonti

**Impostazione:** aggiunte 8 opere con video identificati e attribuiti, di cui 3 eseguite dal progetto Haydn2032 (Giovanni Antonini, Il Giardino Armonico) con prassi storicamente informata. Nessuna sostituzione arbitraria degli ascolti Beethoven con ripubblicazioni non autorizzate di Harnoncourt.

### Nuove schede e fonti

| ID | Opera | Fonte video / canale | Stato documentario |
|---|---|---|---|
| `haydn-083` | Haydn, Sinfonia n. 6 *Le Matin* (1761) | https://www.youtube.com/watch?v=XtWEvUnC1Vs — Haydn2032, Il Giardino Armonico, Antonini | Ufficiale, prassi storicamente informata; non collaudato l'embed |
| `haydn-084` | Haydn, Sinfonia n. 15 (1761) | https://www.youtube.com/watch?v=qSGQ5_WfaHI — Haydn2032, Il Giardino Armonico, Antonini | Ufficiale, prassi storicamente informata; non collaudato l'embed |
| `haydn-085` | Haydn, Sinfonia n. 45 *Gli addii* (1772) | https://www.youtube.com/watch?v=GMaM6ivx8X8 — Haydn2032, Il Giardino Armonico, Antonini | Ufficiale, prassi storicamente informata; non collaudato l'embed |
| `vaughanwilliams-086` | Vaughan Williams, *Fantasia on a Theme by Thomas Tallis* (1910) | https://www.youtube.com/watch?v=e6pEIHtffqQ — Philharmonia Orchestra, John Wilson | Canale ufficiale, esecuzione integrale |
| `holst-087` | Holst, *The Planets*, op. 32 (1914–16) | https://www.youtube.com/watch?v=-WHe7ZqHcXc — Collins Classics, Philharmonia Orchestra, Svetlanov | Integrale d'etichetta, 7 movimenti indicizzati; non confondere titolo astrologico e astronomia |
| `nielsen-088` | Nielsen, Sinfonia n. 4 *L'inestinguibile* (1914–16) | https://www.youtube.com/watch?v=yXDe1hj4HBo — hr-Sinfonieorchester, Paavo Järvi | Canale orchestra verificato, quattro tempi continui con minutaggi |
| `ravel-089` | Ravel, *Daphnis et Chloé*, **suite n. 2** (1912) | https://www.youtube.com/watch?v=D5vyw3UWT98 — France Musique concerts, Orchestre national de France, Cristian Măcelaru | Integrale della **suite**, non del balletto completo (esplicitato in scheda) |
| `ravel-090` | Ravel, *La valse* (1919–20) | https://www.youtube.com/watch?v=y98qMtlEc2k — hr-Sinfonieorchester, Andrés Orozco-Estrada | Canale orchestra verificato, poema coreografico in versione orchestrale |

### Protocollo di interpretazione e riferimenti mancanti

- Il campo facoltativo `practice: "storicamente informata"` etichetta soltanto i tre video di Haydn2032, con annotazione visibile nella scheda. Un nome prestigioso non basta a dichiarare una lettura filologica.
- Il progetto della Joseph Haydn Foundation Basel è attestato dalle descrizioni del canale Haydn2032. Per l'integrale beethoveniana con Chamber Orchestra of Europe, Harnoncourt dispone di una scheda documentaria nell'archivio scientifico https://nikipedia.harnoncourt.org/data/297103 e nella discografia https://www.harnoncourt.info/en/beethoven-symphonies-nos-1-9-2/ . **La registrazione esiste ma non è stata individuata in formato video integrale ufficiale per ogni sinfonia; non sostituire i nove player esistenti senza fonte fruibile.**
- **Diego Fasolis:** è documentata l'esecuzione della Sinfonia n. 104 di Haydn in programma con l'Orchestra Filarmonica Nazionale Ungherese (11 novembre 2024): https://www.filharmonikusok.hu/en/koncertek/haydn-asioli-viotti-diego-fasolis/ . **Non è una fonte di streaming.** Mantenere la ricerca, senza attribuirgli registrazioni non presenti.
- Per distinguere versione e opera, la suite n. 2 di *Daphnis et Chloé* non viene catalogata come integrale del balletto. Per *The Planets* il video Collins Classics include tutti e sette i movimenti.
- Le nuove opere allargano il repertorio a Danimarca, Gran Bretagna e Francia, e ampliano il Classicismo dalle prime esperienze haydniane alla sinfonia londinese.

### Stato complessivo e limiti di verifica
- Catalogo dopo l'intervento: **90 opere, 37 autori indicizzati, 87 video YouTube, 2 video esterni RaiPlay, 1 audio esterno Český rozhlas, nessuna scheda senza registrazione documentata**.
- Audit **statico** su JSON e generazione schede: preservati gli 82 ID preesistenti e il loro ordine relativo, otto ID nuovi e distinti, validità degli ID video (11 caratteri), forme e relazioni coerenti, nessun `autoplay=1`, nessun caricamento video senza clic su «Prepara».
- **Non effettuato** un test reale di riproduzione Android/desktop: anche i nuovi ID pubblicati dai canali ufficiali potrebbero avere vincoli di embedding non rilevati dal codice.
- Il video **non disponibile** di *Mazeppa* (`kICGiPcgikk`) è già stato sostituito nel quinto lotto; mantenere aperto l'audit delle altre ripubblicazioni, in particolare Spohr, Raff, Berlioz/Toscanini, Sibelius/Berglund.

## Settimo lotto — 17 ottobre 2026 · due sostituzioni istituzionali, prassi storica e tre nuove sinfonie

### Sostituzioni di ripubblicazioni indipendenti

- `berlioz-026`, *Harold en Italie*: video indipendente `-Yg_vJUXA8c` sostituito con il video ufficiale **hr-Sinfonieorchester — Frankfurt Radio Symphony**, viola **Antoine Tamestit**, **Eliahu Inbal**, Rheingau Musik Festival, Kloster Eberbach, **24 giugno 2018**. Video `Q4NC4E5RXik`, con quattro movimenti indicizzati a 00:35, 16:00, 24:12, 30:53. Fonte dell'orchestra: https://www.hr-sinfonieorchester.de/media/videos/konzert-videos-17-18/berlioz-harold-en-italie%2Cvideo-berlioz-harold-100.html ; canale ufficiale https://www.youtube.com/watch?v=Q4NC4E5RXik . Toscanini/Carlton Cooley (1953) resta come **alternativa storica di terzi**, non certificata.
- `sibelius-058`, *Kullervo*: video indipendente `wPtfhMpiFfQ` sostituito dalla ripresa **AVROTROS Klassiek** del **29 aprile 2022**: **Radio Filharmonisch Orkest**, **James Gaffigan**, **Groot Omroepmannenkoor**, **Johanna Rusanen-Kartano** e **Arttu Kataja**, TivoliVredenburg Utrecht. Video `z5tWFyIX_HQ` https://www.youtube.com/watch?v=z5tWFyIX_HQ . La descrizione editoriale presenta l'integrale in cinque movimenti; il programma originale AVROTROS elenca tutti e cinque: https://cms-assets.nporadio.nl/npoRadio4/ATVC-29-april-22-LOW.pdf?v=1650894515 . Berglund (1971), ripubblicazione indipendente, conservata come alternativa non collaudata.

### Ampliamento mirato, tre nuove sinfonie

| ID | Opera | Registrazione documentata | Prassi / limiti |
|---|---|---|---|
| `farrenc-091` | **Louise Farrenc**, Sinfonia n. 3 in sol minore, op. 36 (1847) | **Orchestre philharmonique de Radio France / Mikko Franck**, Auditorium Maison de la Radio, **3 febbraio 2018**. Canale **France Musique concerts**, https://www.youtube.com/watch?v=yv3LXXlmwNs . | Integrale pubblicata dall'emittente, da non classificare arbitrariamente «storicamente informata». Ingresso del primo movimento a **1:23**. Primo ascolto alternativo HIP documentato su disco: Insula orchestra / Laurence Equilbey, Erato 2021 e integrale su strumenti d'epoca pubblicata 2023: https://www.warnerclassics.com/fr/release/louise-farrenc-overtures . Non è stato inventato un video integrale gratuito dell'album Erato. |
| `emiliemayer-092` | **Emilie Mayer**, Sinfonia n. 1 in do minore (ante 1847) | **Insula orchestra / Laurence Equilbey**, La Seine Musicale, **27–28 febbraio 2024**, video integrale **34:42** dal canale Insula orchestra, https://www.youtube.com/watch?v=vo6d28bpDB8 . | Orchestra su strumenti d'epoca; documento ufficiale: https://www.insulaorchestra.fr/insula-media/emilie-mayer-symphonie-n-1/ . |
| `schubert-093` | **Schubert**, Sinfonia n. 4 «Tragica», D. 417 (1816) | **Insula orchestra / Laurence Equilbey**, La Seine Musicale, **27–28 febbraio 2024**, https://www.youtube.com/watch?v=WM259gv7VEg . | Orchestra su strumenti d'epoca; fonte https://www.insulaorchestra.fr/insula-media/franz-schubert-symphonie-n4-en-ut-mineur/ . |

Le due schede Insula marcano esplicitamente la prassi storicamente informata; la ripresa di France Musique di Farrenc resta moderna. Con le tre schede Haydn2032, le etichette «storicamente informata» presenti in pagina sono ora **cinque**.

### Fonti discografiche confermate, disponibilità YouTube aperta

- `louisspohr-028`: Budapest Symphony Orchestra/Alfred Walter, registrazione **novembre 1987**, Naxos **8.555398**, opera integrale circa **38:58**; fonti https://www.prestomusic.com/classical/products/8018385--spohr-complete-symphonies e https://www.musicweb-international.com/classrev/2016/dec/Spohr_sy4_8555398.htm . Il link YouTube presente è di terzi, **non è stato collaudato**.
- `joachimraff-033`: *Im Walde*, Philharmonia Orchestra/Francesco d'Avalos, ASV DCA 793, identificazione discografica rafforzata da https://www.raff.org/recordings/discography_symphonies.html . Il filmato esistente è di terzi; non sostituito in assenza di una registrazione integrale pubblica migliore. **MDR ha registrato un concerto con Michael Francis e il MDR-Sinfonieorchester il 30 agosto 2026**, la cui messa in onda radiofonica è prevista per **18 ottobre 2026**; da verificare *dopo* la trasmissione https://www.mdr.de/konzerte/konzertkalender/konzert-3318.html . Non usare la sola scheda di programma come link audio.
- `joachimraff-034`: *Lenore*, Slovak State Philharmonic Orchestra/Urs Schneider, Naxos **8.555541**, verificabile discograficamente. Upload attuale di terzi, disponibilità e embedding da collaudare.

### Interfaccia e verifiche

- In tutte le schede YouTube il link «Registrazione originale» è rinominato con maggiore precisione «**Apri su YouTube**» (non tutti i filmati sono originali e alcuni sono copie d'archivio).
- Dopo «Prepara l'ascolto» un avviso chiarisce che, se YouTube segnala indisponibilità, si può tentare il link esterno. **Non è un rilevamento automatico del fallimento dell'iframe**, tecnicamente non attestato.
- Le tre schede di Spohr e Raff mostrano una nota visibile «Fonte da ricontrollare», separando certezza discografica e accessibilità del video.
- Inventario cumulativo: **93 opere, 39 compositori, 90 video YouTube, 2 video RaiPlay esterni, 1 archivio Český rozhlas, 0 registrazioni non documentate**. I **90 ID precedenti** e il loro ordine relativo devono restare invariati.
- Controlli possibili: integrità JSON, enumerazioni, ID YouTube, assenza di autoplay, JS statico, link aggiunti. **Ancora non eseguito:** collaudo reale Chrome Android/desktop dei player o l'autorizzazione effettiva all'embedding.

## Ottavo lotto — 17 ottobre 2026 · dieci nuovi ascolti documentati

**Perimetro:** 93 → **103 opere**, 39 → **44 compositori**, **100 video YouTube identificati** più 2 video RaiPlay esterni e 1 archivio audio Český rozhlas. L'integralità indicata vale per **l'opera catalogata**: nel caso di Borodin le Danze polovesiane, non l'opera lirica *Principe Igor*.

| ID | Opera | Video e riscontro editoriale |
|---|---|---|
| `haydn-094` | Haydn, *Sinfonia n. 82 «L'orso», Hob. I:82* | https://www.youtube.com/watch?v=_rWH96L719o — hr-Sinfonieorchester – Frankfurt Radio Symphony · Jean-Christophe Spinosi; hr-Sendesaal, 8 aprile 2022, serie Barock+. Fonte: https://www.hr-sinfonieorchester.de/media/videos/konzert-videos-21-22/haydn-sinfonie-nr-82-lours-,video-haydn-sinfonie-82-102.html |
| `borodin-095` | Aleksandr Borodin, *Danze polovesiane, dal Principe Igor* | https://www.youtube.com/watch?v=HNewIrNlMn8 — hr-Sinfonieorchester – Frankfurt Radio Symphony · Alain Altinoglu; Rheingau Musik Festival, Kloster Eberbach, 20 giugno 2026. Pubblicazione ufficiale 19 settembre 2026. Fonte: https://www.hr-sinfonieorchester.de/konzerte/konzerte-25-26/rheingau-musik-festival,konzerte-in-hessen-kloster-eberbach-122.html |
| `rimskijkorsakov-096` | Rimskij-Korsakov, *Capriccio espagnol, op. 34* | https://www.youtube.com/watch?v=X_HSpn3tE_A — hr-Sinfonieorchester – Frankfurt Radio Symphony · Pablo Heras-Casado; Europa Open Air, Weseler Werft Frankfurt, 24 agosto 2017. Fonte: https://www.hr-sinfonieorchester.de/media/videos/konzert-videos-17-18/rimskij-korsakow-capriccio-espagnol-,youtube-rimskij-capriccio-100.html |
| `dvorak-097` | Dvořák, *Karneval, ouverture da concerto op. 92* | https://www.youtube.com/watch?v=XOG3QOnrIME — hr-Sinfonieorchester – Frankfurt Radio Symphony · Christoph Eschenbach; Casals Forum Kronberg, 3 ottobre 2022. Fonte: https://www.hr-sinfonieorchester.de/media/videos/konzert-videos-22-23/dvoak-karneval-v1,video-dvorak-karneval-100.html |
| `dvorak-098` | Dvořák, *Il filatoio d'oro, poema sinfonico op. 109* | https://www.youtube.com/watch?v=kvNYTDtYBfM — hr-Sinfonieorchester – Frankfurt Radio Symphony · Alain Altinoglu; Rheingau Musik Festival, Kloster Eberbach, 25 giugno 2022. Fonte: https://www.hr-sinfonieorchester.de/media/videos/konzert-videos-21-22/dvoak-das-goldene-spinnrad,video-dvorak-das-goldene-spinnrad-100.html |
| `faure-099` | Gabriel Fauré, *Pelléas et Mélisande, suite op. 80* | https://www.youtube.com/watch?v=LXqzESYECSs — hr-Sinfonieorchester – Frankfurt Radio Symphony · Marek Janowski; Alte Oper Frankfurt, 23 novembre 2018. Integrale della suite. Fonte: https://www.hr-sinfonieorchester.de/media/videos/konzert-videos-18-19/faure-pelleas-et-melisande--suite-op-80,video-faure-100.html |
| `franck-100` | César Franck, *Le chasseur maudit, poema sinfonico* | https://www.youtube.com/watch?v=ZWROGkueZmM — hr-Sinfonieorchester – Frankfurt Radio Symphony · Alain Altinoglu; hr-Sendesaal, 21 gennaio 2022, video ufficiale 4K. Fonte: https://www.hr-sinfonieorchester.de/media/videos/konzert-videos-21-22/franck-le-chasseur-maudit-,video-franck-le-chasseur-maudit-100.html |
| `dukas-101` | Paul Dukas, *L'apprenti sorcier (L'apprendista stregone)* | https://www.youtube.com/watch?v=40xhyXscddY — hr-Sinfonieorchester – Frankfurt Radio Symphony · Marie Jacquot; hr-Sendesaal, 13 gennaio 2023, video ufficiale 4K. Fonte: https://www.hr-sinfonieorchester.de/media/videos/konzert-videos-22-23/dukas-der-zauberlehrling-v1,video-dukas-zauberlehrling-100.html |
| `rachmaninov-102` | Sergej Rachmaninov, *Danze sinfoniche, op. 45* | https://www.youtube.com/watch?v=hF9cmCgM8ew — hr-Sinfonieorchester – Frankfurt Radio Symphony · Petr Popelka; Alte Oper, 22 novembre 2024. Ripresa ufficiale pubblicata 25 gennaio 2025; movimenti indicizzati 00:00, 11:29, 21:39. Fonte: https://www.youtube.com/watch?v=hF9cmCgM8ew |
| `skrjabin-103` | Aleksandr Skrjabin, *Le Poème de l'extase, op. 54* | https://www.youtube.com/watch?v=GyZaU2FlSnE — hr-Sinfonieorchester – Frankfurt Radio Symphony · Oscar Jockel; hr-Sendesaal, 13 febbraio 2026. Ripresa ufficiale pubblicata il 20 giugno 2026. Fonte: https://www.ardmediathek.de/video/hr-sinfonieorchester/skrjabin-le-poeme-de-l-extase-oscar-jockel/hr/ZTBkNDJlMGYtMzFhYi00MzIyLThiOGUtZjY0OWE2ZmM3ZmZi |

**Criterio di reperimento:** per Haydn, Rimskij-Korsakov, Dvořák (due opere), Fauré, Franck e Dukas il collegamento alla pubblicazione YouTube è stato letto direttamente nella relativa pagina ufficiale Hessischer Rundfunk; Rachmaninov (Petr Popelka) è sul canale verificato hr-Sinfonieorchester; il video Borodin/Altinoglu 2026 è documentato dalla descrizione della pubblicazione e dal programma hr; il video Scriabin/Jockel 2026 è documentato anche da ARD Mediathek. **Non sono stati collaudati i lettori in Chrome Android**, né è garantita la persistente autorizzazione all'incorporamento.

**Distinzioni musicologiche:** Spinosi/Haydn 82 non è stato etichettato «strumenti d'epoca»; Borodin è estratto sinfonico dal teatro musicale; Fauré è la suite di quattro episodi, non l'intera musica di scena; Skrjabin è il poema sinfonico in unico arco, non una sinfonia classica; Dukas è classificato come *scherzo sinfonico*. Nessuna scheda o ID precedenti sono stati eliminati.

**Interfaccia:** corretto «opere censite nel primo nucleo» in «opere censite nel catalogo»; aggiunta al metodo l'avvertenza sulla differenza fra attribuzione della fonte e controllo di riproducibilità. Nessun autoplay introdotto.

**Questione Raff/MDR:** la prevista trasmissione del 18 ottobre 2026 di *Im Walde* eseguito dal MDR-Sinfonieorchester con Michael Francis il 30 agosto 2026 è una verifica futura; non equivale a un URL audio integrale oggi accessibile. https://www.mdr.de/konzerte/konzertkalender/konzert-3318.html .

**Collaudo ancora necessario:** verifiche reali di play, embed, durata, miniature, avvisi di account chiuso e test desktop/Android; le 100 registrazioni sono *identificate*, non tutte collaudate.
