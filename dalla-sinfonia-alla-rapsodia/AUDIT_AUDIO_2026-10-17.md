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
