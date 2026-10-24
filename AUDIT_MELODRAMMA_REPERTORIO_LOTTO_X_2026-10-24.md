# Musurgia Mundi — Audit audioteca del melodramma, lotto X
**Data:** 24 ottobre 2026. **Repository:** `SkenderAle/github-pages`, branch `main`.

## Risultato verificabile sul codice
- **10 nuovi ascolti commentati** in quattro gruppi: nascita del melodramma e Monteverdi (4), Lully/Purcell (2), Rameau/Gluck (2), Rossini/ROF 2026 (2).
- **144 schede YouTube, 142 video distinti, 41 autori normalizzati, 15 schede di fonti esterne.**
- ID video di formato errato: **0**; schede senza link alla fonte: **0**.
- Due ID ripetuti deliberatamente in confronti: `G1YS61pu8Rc` (ouverture Don Giovanni), `mkZrbA6np5s` (finale II Figaro).
- **34 estratti iniziali temporizzati**, con valori di fine clip di 70-120 secondi. Restano deliberatamente brevi nel contesto dei confronti originari.
- Rimossi 7 tagli arbitrari di 3600 o 20000 secondi nei video integrali/registrazioni lunghe.
- Il componente condiviso ora ricrea **soltanto il player attivo** quando se ne seleziona un altro, anziché ricostruire tutte le miniature. Conserva `autoplay=0` e l'iframe non esiste finché non si clicca.
- La ricerca per compositore ora accorpa abbreviazioni e nomi completi: es. Monteverdi / Claudio Monteverdi, Lully / Jean-Baptiste Lully, Gluck / Christoph Willibald Gluck, Grétry / André Grétry, ecc.
- Lo script `scripts/audit-melodramma-audioteca.mjs` permette di ripetere il controllo statico dopo i prossimi aggiornamenti.

## Ascolti aggiunti: fonti e criterio di scelta
1. Jacopo Peri, *Tu dormi, e 'l dolce sonno* — https://www.youtube.com/watch?v=JbaL-RVwdbw — segnalato nella rassegna didattica *Monteverdi’s L’Orfeo* (2024); interpreti ancora da verificare.
2. Monteverdi, *L'Orfeo*, Toccata — https://www.youtube.com/watch?v=mjpFi9bn1do — segnalato nella stessa rassegna, associato a Jordi Savall.
3. Monteverdi, *L'Orfeo*, Prologo della Musica — https://www.youtube.com/watch?v=2WIQF_lxFc4 — fonte didattica, crediti da completare.
4. Monteverdi, *L'Orfeo*, *Tu se' morta* — https://www.youtube.com/watch?v=_7Wo-3DtI34 — fonte didattica, crediti da completare.
5. Lully, *Armide*, Passacaille — https://www.youtube.com/watch?v=RK6k0oF8OHM — video indicato con Les Arts Florissants e William Christie, canale terzo.
6. Purcell, *Dido and Aeneas*, *When I am laid in earth* — https://www.youtube.com/watch?v=Kbyv59mbtL0 — pubblicazione ufficiale Les Arts Florissants, Kate Lindsey, William Christie, Liceu Barcellona 2023.
7. Rameau, *Les Boréades*, parte I — https://www.youtube.com/watch?v=XbNMPOfiQ-s — video con Les Arts Florissants distribuito da canale non istituzionale; parte I di tre.
8. Gluck, *Orfeo ed Euridice*, *Che farò senza Euridice?* — https://www.youtube.com/watch?v=H6MtZjIl1Ak — clip ufficiale OperaVision, Carlo Vistoli, Teatro Regio di Parma 2026; distinta dall'integrale scaduto il 6 agosto 2026.
9. Rossini, *Il viaggio a Reims*, cast A — https://www.youtube.com/watch?v=h1x7hpqHvg4 — OperaVision/ROF 2026, Filarmonica Gioachino Rossini, Sieva Borzak.
10. Rossini, *Il viaggio a Reims*, cast B — https://www.youtube.com/watch?v=ySw8y9fbJNk — stesso allestimento e direttore, cast diverso: confronto di esecuzioni, non seconda opera.

**Diritti:** per i video ROF/OperaVision la descrizione dei caricamenti indica disponibilità fino al 16 febbraio 2027. OperaVision dichiara che gran parte delle integrali è disponibile solo per alcuni mesi: un link inserito non è un link garantito nel tempo.

## Distribuzione autoriale del catalogo
- Alessandro Scarlatti: 5 schede
- André Grétry: 1 schede
- Antonio Cesti: 2 schede
- Antonio Salieri: 5 schede
- Antonio Vivaldi: 4 schede
- Baldassare Galuppi: 2 schede
- Charles Gounod: 1 schede
- Christoph Willibald Gluck: 9 schede
- Claudio Monteverdi: 6 schede
- Domenico Cimarosa: 2 schede
- Francesco Cavalli: 2 schede
- Gaetano Donizetti: 3 schede
- Gaspare Spontini: 2 schede
- Georg Friedrich Händel: 5 schede
- Georges Bizet: 1 schede
- Giacomo Puccini: 5 schede
- Gioachino Rossini: 10 schede
- Giovanni Battista Pergolesi: 3 schede
- Giovanni Paisiello: 5 schede
- Giulio Caccini: 1 schede
- Giuseppe Verdi: 6 schede
- Henry Purcell: 1 schede
- Jacopo Peri: 2 schede
- Jean-Baptiste Lully: 5 schede
- Jean-Philippe Rameau: 7 schede
- Johann Adolf Hasse: 3 schede
- Joseph Haydn: 2 schede
- Jules Massenet: 2 schede
- Leonardo Vinci: 2 schede
- Ludwig van Beethoven: 1 schede
- Luigi Cherubini: 4 schede
- Luigi Rossi: 1 schede
- Marc-Antoine Charpentier: 2 schede
- Niccolò Jommelli: 1 schede
- Niccolò Piccinni: 2 schede
- Nicola Porpora: 3 schede
- Richard Wagner: 2 schede
- Stefano Landi: 1 schede
- Tommaso Traetta: 2 schede
- Vincenzo Bellini: 3 schede
- Wolfgang Amadeus Mozart: 18 schede

## Priorità filologiche e tecniche
- Un ID YouTube di 11 caratteri e una miniatura non dimostrano che il brano sia quello dichiarato né che l'iframe funzioni. Prova in browser (desktop/mobile, Italia) ancora **NON effettuata**.
- I quattro nuovi rimandi da una rassegna didattica sono introduttivi: completare interpreti, orchestra e direttore prima di considerarli definitivamente certificati.
- Esaminare i link con scadenza OperaVision e quelli ospitati da canali indipendenti: 101/150/153, geo-block e cambi di URL.
- Rispettare la distinzione **opera integrale / singola aria / selezione di numeri / trailer discografico / registrazione di prova**: non trasformare un frammento in «integrale».
- Aggiornare le aree autoriali ancora carenti (Duni, Sarti, Mysliveček, Méhul, Charpentier, Cesti, scuola napoletana), senza inventare codici video.
- Non chiamare «ascolto verificato» un video soltanto indicizzato: mancano prove di riproduzione browser.

## Come ripetere l'audit
Dalla radice del repository:
```bash
node scripts/audit-melodramma-audioteca.mjs
node scripts/audit-melodramma-audioteca.mjs --json
```
Questo script analizza **solo** HTML e dati dei player. Non fa richieste esterne e non garantisce disponibilità/identità dei video.
