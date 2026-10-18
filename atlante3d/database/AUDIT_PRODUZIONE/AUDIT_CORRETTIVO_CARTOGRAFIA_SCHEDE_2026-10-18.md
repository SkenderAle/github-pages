# MUSURGIA MUNDI — Audit correttivo cartografia, schede autore e ascolti
**Data:** 18 ottobre 2026 · **Branch:** main · **Base:** `ba6fa2738baba4d5b527633b2f483a99fb446727`

## Origine
Segnalazione visuale Android: bolle prive di ubicazione fuori dalla mappa (anche sotto l'Antartide), rimandi alle homepage di Grove/Treccani anziché ad articoli, pannelli Nielsen con «0 collegamenti» e «0 risorse».

## Interventi
1. Disabilitata la proiezione in coordinate 3D arbitrarie dei nodi non geolocalizzati sulla cartografia: restano disponibili tramite ricerca e scheda. Rimossa la collocazione fittizia dei compositori sul baricentro degli archi. Assegnato il paese a 10 compositori prima privi di paese; coordinate di attività per Nielsen (Copenaghen), Sibelius (Helsinki), Janáček (Brno); aggiunte aree-paese di Svizzera e Armenia. Nota: le distribuzioni per paese sono approssimazioni, **non città biografiche verificate**.
2. Ripensato l'ordine del pannello: carta di identità per compositori e persone, distinta dalla nota relazionale. Le carte con riferimento Treccani contengono esclusivamente link verso voci biografiche individuali; eliminate dalla consultazione homepage di Grove/Treccani e nota sulla Garzantina. Introdotti profili sintetici redazionali per Nielsen, Sibelius e Janáček basati sulle loro voci Treccani.
3. Resi visibili separatamente i contesti storici già presenti tra gli archi (prima esclusi dalle relazioni personali): il Postromanticismo per Nielsen non equivale a «zero collegamenti».
4. La sezione «Ascolti e video» include ora le **schede delle singole opere** già presenti nei rimandi a audioteche (ancore stabili), non soltanto i media del catalogo `video.json`. Il collegamento apre il lettore nel relativo percorso dell'Atlante senza autoplay né duplicazione delle registrazioni. Le risorse di repertorio generali restano nella sezione «Percorsi».
5. Documentata la conoscenza e corrispondenza Nielsen–Sibelius come **incontro**, senza attribuire loro una collaborazione compositiva o una dipendenza stilistica.

## Fonti puntuali
- Nielsen: https://www.treccani.it/enciclopedia/carl-august-nielsen/
- Sibelius: https://www.treccani.it/enciclopedia/jean-sibelius/
- Janáček: https://www.treccani.it/enciclopedia/leos-janacek/
- Incontro Nielsen–Sibelius: https://carlnielsencorrespondence.dk/en/letters/1/preface ; https://tidsskrift.dk/carlnielsenstudies/article/download/27765/24444/64104

## Invarianti e limiti
- Nessun ramo nuovo; nessun filtro, player, URL di audioteca o ancoraggio modificato.
- Nessun testo originale Treccani copiato nella scheda: soltanto sintesi brevi redazionali con fonte dichiarata.
- L'assenza di posizione attendibile non viene risolta inventando coordinate.
- Restano aperte le 51 attribuzioni del Lotto VII, sospeso su richiesta.
- **Collaudo visivo Android e desktop non effettuato** in questa esecuzione; verificare le mappe a zoom 0%/100%, `?n=compositore-carl-nielsen`, link agli ascolti e navigazione Indietro.
