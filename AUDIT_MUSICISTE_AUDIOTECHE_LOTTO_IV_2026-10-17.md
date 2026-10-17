# Musurgia Mundi — Audit musiciste, lotto IV · Audioteche e analisi delle opere
**Data:** 17 ottobre 2026 · **Branch:** `main` · **Precedente:** `0641a7631d33a7e6e57e2af15a29a442d01e5e31`.

## Principio
Le schede sono commenti musicali e guide alla forma, non etichette di recupero del «genio femminile». Una data biografica da sola non insegna nulla sulla costruzione di una composizione. Le denominazioni tecniche e i dati d'opera si riferiscono a cataloghi e note editoriali; osservazioni d'ascolto restano ipotesi da verificare nell'esecuzione.

## Mappa delle modifiche
| Catalogo | Prima | Dopo |
| --- | --- | --- |
| `musica-da-camera/` · sette opere di Dora Pejačević | Identico testo «Dora Pejačević e il passaggio fra il tardo Romanticismo...» e sette titoli intercambiabili «ricostruire il dialogo» | Sette note distinte su Canzonetta op. 8, Menuett op. 18, Romanze op. 22, Elegia op. 34, Sonata per violoncello op. 35, Meditation op. 51 e Trio op. 29; guide rinominate per l'opera |
| `musica-da-camera/` · Farrenc op. 34 e op. 46 | Guide con formula compensativa «una voce da riscoprire» | Titoli riferiti rispettivamente alla variazione e alla sonata violoncellistica |
| `musica-da-camera/` · Farrenc op. 44 / 45 | Nota identica sui fiati e il registro, pur essendo organici diversi | Spiegati i quattro movimenti di ciascun trio, clarinetto o violino alternativo nell'op. 44, ruolo del flauto nell'op. 45 |
| `musica-da-camera/` · Beach op. 67 | «voce americana» e «grande autonomia» in termini vaghi | Legame tematico col Quintetto op. 34 di Brahms e forma ciclica in tre movimenti; guida dedicata alla trasformazione del tema |
| `dalla-sinfonia-alla-rapsodia/` · Pejačević op. 41 | Generico richiamo al tardo Romanticismo e alla Grande Guerra | 1916–17, revisione 1920, prima di Dresda, corno inglese nell'Andante, Scherzo e architettura sinfonica |
| `dalla-sinfonia-alla-rapsodia/` · Farrenc op. 36 | Generico «grande costruzione» | Introduzione lenta, Scherzo e trattamento di legni e temi in quattro movimenti |
| `parola-e-canto/` · Clara Schumann *Liebst du um Schönheit* | Titolo con doppia numerazione non spiegata, nota che la spiegava parzialmente | Titolo esplicitamente riferito al *Liebesfrühling* n. 4 e al secondo dei tre Lieder di Clara op. 12; testo della scheda chiarito |

## Fonti autorevoli e dati verificati
- Koraljka Kos, introduzione all'edizione delle *Miniatures for Violin and Piano* di Dora Pejačević (Muzicki Informativni Centar, distribuzione HeBu): https://www.hebu-music.com/index.php/en/article/dora-pejacevic/muzicki-informativni-centar/miniatures-for-violin-and-piano-arrangement-for-viola-and-piano.982714/
- Partitura e catalogo Pejačević, Sonata op. 35: https://imslp.org/wiki/Cello_Sonata%2C_Op.35_%28Peja%C4%8Devi%C4%87%2C_Dora%29
- Edition Silvertrust, struttura del Trio op. 29: https://www.editionsilvertrust.com/pejacevic-piano-trio.htm ; Da Vinci Publishing, note al Trio: https://davinci-edition.com/product/c00926/
- Wiener Symphoniker, Sinfonia op. 41 (1916–17, rev. 1920, Dresda 10 febbraio 1920): https://www.wienersymphoniker.at/en/opus/symphony-f-sharp-minor-op-41
- Hyperion, Nigel Simeone (2020), Amy Beach op. 67, autograph 14 dicembre 1907, legame tematico Brahms e première febbraio 1908: https://www.hyperion-records.co.uk/dw.asp?dc=W21677_68295
- Partitura Farrenc op. 44 (anche alternativa violino) e op. 45, quattro movimenti: https://imslp.org/wiki/Trio_for_Clarinet_or_Violin%2C_Cello_and_Piano%2C_Op.44_%28Farrenc%2C_Louise%29 · https://imslp.org/wiki/Trio_for_Flute%2C_Cello%2C_and_Piano%2C_Op.45_%28Farrenc%2C_Louise%29
- Library of Congress, *Liebesfrühling* Robert/Clara Schumann, 1841, numeri 2, 4, 11: https://guides.loc.gov/clara-schumann/published-scores ; IMSLP, tre Lieder op. 12 di Clara: https://imslp.org/wiki/Lieder%2C_Op.12_%28Schumann%2C_Clara%29

## Controlli di conservazione
- `musica-da-camera/index.html`: variazione +1760 caratteri; 25 identificativi HTML invariati; tag script, iframe, video e riferimenti ad autoplay invariati; nessun nuovo frammento locale mancante.
- `dalla-sinfonia-alla-rapsodia/index.html`: variazione +433 caratteri; 14 identificativi HTML invariati; tag script, iframe, video e riferimenti ad autoplay invariati; nessun nuovo frammento locale mancante.
- `parola-e-canto/index.html`: variazione +110 caratteri; 44 identificativi HTML invariati; tag script, iframe, video e riferimenti ad autoplay invariati; nessun nuovo frammento locale mancante.
- Catalogo da camera: 255 opere; stessi titoli, ordinamento, guide-ID e video per tutte le opere.
- Catalogo orchestrale: 103 opere; identità `id/video/credits/source/start` invariata.
- *La parola e il canto*: 97 schede; identici autore, ID YouTube e crediti per ogni scheda. Una modifica testuale al titolo di Clara Schumann, senza alterare la sorgente audiovisiva.
- Nessuna riproduzione automatica introdotta, nessun lettore modificato.

## Limiti e azioni future
Test statico: non prova l'incorporabilità sul sito distribuito. Le guide non pretendono di ricostruire la prassi originale soltanto da un video contemporaneo. Occorre auditare in seguito le descrizioni generiche dei compositori uomini per non applicare criteri asimmetrici, verificare anche il corpus dei concerti e proseguire i rimandi alle future pagine tardo-romantiche e novecentesche quando saranno mature.
