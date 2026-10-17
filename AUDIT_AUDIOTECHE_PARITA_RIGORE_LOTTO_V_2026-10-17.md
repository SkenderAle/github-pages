# MUSURGIA MUNDI — Audit editoriale delle audioteche, lotto V
**17 ottobre 2026 · main · parità di rigore nell'analisi musicale**

## Metodo
L'audit del ricollocamento delle musiciste (lotti I–IV) ha messo in luce una simmetrica debolezza nelle opere di compositori già canonici: blocchi di note identiche che cancellavano differenze di forma, organico e tecniche. Non è corretto chiedere analisi delle partiture solo alle musiciste. In questo lotto sono quindi state riscritte **50 schede** in `musica-da-camera/index.html`, con **50 titoli di guida** specifici, preservando dati audiovisivi e capitoli.

## Interventi
| Repertorio | Schede | Analisi nuova |
| --- | ---: | --- |
| Šostakovič · quartetti da n. 1 a n. 15, escluso n. 8 già analitico | 14 | Forme e singolarità: Recitativo / Romanza, variazioni, movimenti senza pause, passacaglia, un movimento unico del n. 13, dodici suoni nel n. 12 e sei Adagi del n. 15. Revisione del quesito del n. 10: dalle quattro lettere DSCH alla passacaglia realmente al centro del brano |
| Rebecca Clarke | 9 | Distinzione fra sonata in tre movimenti, pezzi di carattere, originali e adattamenti: Chinese Puzzle (originale per violino 1921, versione per viola 1922), Passacaglia (1941), I'll Bid My Heart Be Still (1944), Dumka, Morpheus e due Lullaby |
| Schumann · quartetti e trii | 7 | Op. 41 nn. 1–3, Trii op. 63/80/110 e Fantasiestücke op. 88 trattati nelle rispettive forme; via la stessa intestazione «metamorfosi del motivo» |
| Bartók · quartetti nn. 1/2/3/5/6 | 5 | Dal cromatismo all'arco; Quinto e metri bulgari, Sesto e motivo Mesto che conquista il Finale, Terzo in quattro sezioni senza pausa |
| Haydn · quartetti op. 76 | 6 | Quinte discendenti, inno con variazioni, soprannome Aurora, Largo in fa diesis maggiore, Fantasia del n. 6 e ruolo delle voci |
| Mel Bonis · flauto e pianoforte | 4 | Sonata op. 64 in quattro tempi, tre mélodies op. 91 trascritte, Scherzo op. 187 e Andante et Allegro op. 133 |
| Max Bruch · quartetti | 3 | Differenza fra quartetto giovanile postumo e quelli op. 9 e op. 10; sostituita la formula «quartetto da riscoprire» |
| Brahms · sonate per clarinetto op. 120 | 2 | Contrapposti quattro tempi della prima e tre tempi della seconda, con tema e variazioni conclusivi; menzionata l'alternativa originale per viola |

## Riscontri bibliografici
- Editore Brilliant Classics, integrale dei quartetti di Šostakovič, volumi 1–4 e guide con capitoli già presenti nell'audioteca: https://www.brilliantclassics.com/articles/s/shostakovich-string-quartets-vol-1/ · https://www.brilliantclassics.com/articles/s/shostakovich-string-quartets-vol-2/ · https://www.brilliantclassics.com/articles/s/shostakovich-string-quartets-volume-3/ · https://www.brilliantclassics.com/articles/s/shostakovich-string-quartets-volume-4/
- Rebecca Clarke, catalogo del sito ufficiale della compositrice: https://rebeccaclarkecomposer.com/music/ ; Brilliant Classics, guida ai pezzi cameristici: https://www.brilliantclassics.com/articles/c/clarke-music-for-violin-viola-piano/
- Robert Schumann, edizione delle opere, parte cameristica: https://imslp.org/wiki/Robert_Schumann%27s_Werke_%28Schumann%2C_Robert%29 ; Brilliant Classics, tracklist integrale con tempi dei quartetti e trii: https://www.brilliantclassics.com/articles/s/schumann-complete-piano-trios-complete-string-quartets-fantasiestuecke-op88/
- Bartók, edizione critica completa dei sei quartetti, Istituto di Musicologia ungherese: https://bartok-osszkiadas.zti.hu/en/volumes/29-string-quartets-nos-1-6/ ; Oxford University Press, *The String Quartets of Béla Bartók: Tradition and Legacy in Analytical Perspective*: https://academic.oup.com/book/8739
- Quartetti op. 76 di Haydn, tracklist ed editore: https://www.brilliantclassics.com/articles/h/haydn-string-quartets-vol-11-op-76/
- Mel Bonis, catalogo dell'associazione: https://www.mel-bonis.com/EN/Catalogue/ ; incisione e note editoriali: https://www.brilliantclassics.com/articles/m/mel-bonis-complete-music-for-flute-piano/
- Max Bruch, quartetti e tracklist: https://www.brilliantclassics.com/articles/b/bruch-complete-string-quartets/
- Brahms, sonate op. 120: https://imslp.org/wiki/Clarinet_Sonata_No.1%2C_Op.120_No.1_%28Brahms%2C_Johannes%29 e https://www.brilliantclassics.com/articles/b/brahms-clarinet-chamber-music/

## Controlli
- Audioteca: 255 opere nel catalogo prima e dopo; 50 note non più ripetute e 50 titoli di guida distintivi.
- Schede con testi condivisi con almeno un'altra opera: **154 prima, 104 dopo**. Non è uno zero globale: rimangono lotti da rivedere, tra cui Geminiani, Vivaldi e sonate per clarinetto di altri autori.
- Rimasti invariati: tutti gli ID HTML, tag script, tag iframe, data-video, link YouTube, riferimenti ad autoplay e destinazioni locali; nessuna nuova ancora interna non risolta.
- Invarianti tutti i dati strutturati delle 255 opere salvo la sola descrizione musicale; invariati per ogni guida video, crediti, fonte, chapter markers, posizioni e documentazione, eccetto i titoli e il quesito del Quartetto n. 10 di Šostakovič.
- Il commit non costituisce prova di caricamento nel sito GitHub Pages o di corretta riproduzione in browser; è un audit statico del sorgente.

## Passo successivo
Continuare i blocchi ancora ripetuti (Geminiani op. 1, Vivaldi op. 2, Beethoven violoncello, clarinetto di altri autori), con priorità alle opere che già hanno guide documentate; non produrre differenze immaginarie in assenza di partiture o schede critiche. Verificare inoltre i dati delle singole interpretazioni.
