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
