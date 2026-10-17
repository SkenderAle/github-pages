# Musurgia Mundi — Audit dell'audioteca dei concerti · Lotto VIII
**Data:** 17 ottobre 2026 · **Branch:** `main` · **Base:** `d0defd1b868ca1461fed8e4fdea97d4524e0efcd`

## Finalità e procedura
L'audioteca del concerto conservava 225 riquadri `article.work`, molti con presentazioni in prima riga troppo brevi per orientare un ascoltatore adulto. Il lavoro integra **63 interventi testuali** (62 denominazioni di opere, una presente due volte per ragioni di catalogazione strumentale). La revisione riguarda soprattutto la cornice d'ascolto breve: non sostituisce né cancella le guide espandibili, i crediti di esecuzione e i riferimenti audiovisivi. Nessun nuovo «gioco» viene introdotto fuori dalle aree `Per iniziare`.

## Aree affrontate
| Famiglia o repertorio | Punto editoriale |
| --- | --- |
| Flauto / traversiere | Dal richiamo naturalistico di Vivaldi RV 428 alla doppia versione mozartiana K 314; distinguere emissione del flauto e bilanciamento con l'arpa nel K 299; Nielsen, Ibert, Reinecke |
| Clarinetto | K 622 e il clarinetto di bassetto di Stadler, ma senza attribuire al video un organico originale non verificato; Weber, Spohr, Nielsen op. 57 con rullante, Copland e cadenza di raccordo |
| Oboe | Alessandro Marcello e derivazione bachiana BWV 974, Vivaldi RV 461 in tre tempi, trascrizione oboe/flauto di Mozart K 314, ultima scrittura di Strauss nel 1945 |
| Fagotto | Vivaldi RV 484, Mozart K 191, Weber op. 75, Jolivet; funzione solistica del registro grave e articolazione |
| Corno | Mozart K 417, K 495, K 447, K 412/K 514; differenza fra corno naturale e corno a valvole; Konzertstück op. 86 di Schumann a quattro corni; concerti di Strauss e Glière |
| Tromba | Tromba naturale e clarino nel Brandeburghese n. 2; tromba a chiavi di Weidinger in Haydn e Hummel; concerti di Tomasi e Arutjunjan |
| Trombone, contrabbasso | Legato e articolazione; registri; accordatura storica e varianti in Dittersdorf / Vanhal |
| Arpa | Due solisti K 299; Danze per arpa cromatica Pleyel di Debussy, repertori di Boieldieu, Glière, Ginastera |
| Chitarra | Giuliani, Castelnuovo-Tedesco, Rodrigo (corno inglese nell'Adagio) e Villa-Lobos |
| Saxofono | Glazunov, Ibert, Creston, Larsson; Villa-Lobos destinato al sassofono **soprano**, non contralto |
| Tastiere e altri | BWV 1050a vs 1050, BWV 1052; organo concertante di Händel e Poulenc; de Falla per clavicembalo e cinque strumenti; Milhaud e percussioni |

## Correzione strutturale
La scheda del **Concerto per oboe RV 461** presentava l'unico riassunto breve <p> dopo <details>, a differenza delle altre schede. La frase generica «Un dialogo per ance» è stata eliminata e sostituita da un commento musicale in posizione iniziale, prima della scheda guida, senza cambiare la sua registrazione né la gerarchia dei contenitori.

## Riferimenti e filologia
- Mozarteum, *Neue Mozart-Ausgabe*, concerti per corno (vol. V/14/5): K 417 è completo; K 412 è una fonte incompiuta e il rondò K 514 è di Süßmayr: https://dme.mozarteum.at/DME/nma/nma_toc.php?l=2&vsep=141
- Netherlands Bach Society, Alessandro Marcello e la trascrizione bachiana BWV 974: https://www.bachvereniging.nl/en/bwv/bwv-974
- Bremer Barockorchester, RV 461 (Allegro non molto / Larghetto / Allegro), documentazione dell'esecuzione: https://www.youtube.com/watch?v=KzCSoKjevlY . **La registrazione presente in Musurgia Mundi resta un'altra**, non è stata sostituita.
- Ricerca sulla parte originale del clarinetto di bassetto, K 622; la partitura originale integrale non è conservata: https://www.justin-beere.com/blog/mozart-clarinet-concerto
- Per tutte le altre opere restano utilizzabili i collegamenti alle registrazioni e ai crediti già indicati dentro i riquadri; le descrizioni nuove sono guide d'ascolto, non nuovi documenti sulle interpretazioni.

## Risultati misurabili e integrità
- `article.work`: **225 prima e dopo**, 214 con il modello iniziale di titolo e breve nota, 11 fuori dal modello analizzato e non modificati.
- Le note iniziali con meno di 60 caratteri fra i riquadri riconosciuti passano da **137 a 81**. Quelle con meno di 35 caratteri passano da **59 a 21**.
- **63** riquadri riscritti, con una denominazione duplicata per Mozart K 299 in due famiglie strumentali.
- Invariati **428 ID HTML**, tag `script`, tag `iframe`, attributi `data-video`, ID YouTube, riferimento ad `autoplay`, e nessun nuovo `href="#..."` locale non risolto.
- La presenza e il confronto statico dei contenuti nel repository non dimostrano la riproduzione effettiva dei video o il comportamento su schermi piccoli.

## Criticità residue
Permangono altre schede con titoli/descrizioni telegrafici (in particolare concerti per violino, pianoforte e alcune sezioni di fiati): estendere lo stesso metodo e verificare movimenti, cadenze ed edizioni prima di riscrivere dettagli non supportati. Ulteriore audit necessario sulle informazioni `data-search` storiche per verificare se allineare esplicitamente le stringhe indicizzate con i nuovi riassunti.
