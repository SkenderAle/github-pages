# Musurgia Mundi — Audit produzione 01 · Primo campione di venti compositori

**Base rilevata:** 7b0597017dc8b6fcfd5ce8624f4585864773421b, 7 ottobre 2026. **Natura:** ricognizione di copertura del grafo, NON inserimento validato di nuove relazioni. Le proposte di completamento richiedono verifica delle fonti per ciascun legame prima dell'applicazione.

## Criterio operativo
Per ogni nome è stata controllata la presenza dei collegamenti produttivi in `grafo.json` e il numero dei collegamenti specialistici in `relazioni.json`. Un rapporto specialistico su una scuola o un'influenza non è una registrazione automatica della produzione. «GRAVE» indica l'assenza di uno o più settori fondamentali nel grafo generale, «MEDIA» una rappresentazione parziale importante; non misura la qualità complessiva delle relazioni specialistiche.

| Compositore | Generi / ambiti prioritari da rappresentare (proposta soggetta a verifica) | Lacuna | Riscontro |
|---|---|---|---|
| Antonio Vivaldi | concerto; sonata e camera; sacra; cantata profana; opera | GRAVE | concerto solistico, produzione sacra e sonatistica assenti |
| Arcangelo Corelli | sonata a tre; sonata solistica; concerto grosso | GRAVE | intera produzione assente |
| Giuseppe Torelli | concerto; sonata; sinfonia e musica strumentale | GRAVE | intera produzione assente |
| Domenico Scarlatti | sonata per tastiera; teatro musicale; musica vocale sacra | GRAVE | sonata per tastiera assente |
| Johann Sebastian Bach | cantata e Passione; organo; tastiera; concerto; camera; messa | GRAVE | numerosi generi assenti, presente solo polifonia e scuola luterana |
| Georg Friedrich Händel | opera; oratorio; concerto; musica per tastiera; musica sacra e da cerimonia | GRAVE | oratorio e strumenti assenti |
| Claudio Monteverdi | madrigale; opera; musica sacra | MEDIA | madrigale e opera rappresentati; sacra assente |
| Wolfgang Amadeus Mozart | sinfonia; concerto; sonata; camera; opera; musica sacra | GRAVE | prevalgono teatro e contesti stilistici, repertorio strumentale assente |
| Ludwig van Beethoven | sinfonia; sonata; quartetto; concerto; musica sacra; opera | GRAVE | nessun arco produttivo |
| Gioachino Rossini | opera seria e buffa; musica sacra; camera; opere tarde | MEDIA | opera rappresentata; sacra e camera assenti |
| Giuseppe Tartini | sonata violinistica; concerto per violino; scritti teorici (non produzione musicale) | GRAVE | nessun genere produttivo |
| Antonio Caldara | opera; oratorio; cantata; musica sacra; strumentale | GRAVE | solo melodramma |
| Alessandro Scarlatti | opera; cantata da camera; oratorio; musica sacra | GRAVE | teatro sì, cantata e oratorio assenti |
| Giovanni Battista Pergolesi | opera seria e comica; intermezzo; musica sacra; cantata | GRAVE | musica sacra assente |
| Alessandro Marcello | concerto strumentale; cantata profana | GRAVE | nessun genere produttivo |
| Benedetto Marcello | salmi e musica sacra; cantata; sonata; concerto; musica teatrale | GRAVE | nessun genere produttivo |
| Tomaso Albinoni | opera; sonata; concerto strumentale | GRAVE | solo melodramma |
| Jean-Philippe Rameau | opera e tragédie lyrique; pezzi per clavicembalo; musica da camera; trattatistica (distinta) | GRAVE | solo melodramma |
| Georg Philipp Telemann | musica sacra; concerto; sonata e camera; suite orchestrale; opera | GRAVE | nessun genere produttivo |
| Henry Purcell | anthems e musica sacra; teatro e semi-opera; sonata e fantasia; musica vocale profana | GRAVE | solo melodramma |

## Bilancio di copertura (non ancora di correzioni)
- **20 compositori esaminati** nella fotografia del grafo
- **18 lacune GRAVI**, **2 MEDIE** secondo il criterio della rappresentazione produttiva
- **0 nuovi nodi**, **0 nuove relazioni**, **0 modifiche al motore**
- Fonti biografiche/produttive per i venti casi da completare in schede puntuali prima della futura integrazione. Questa è una **mappa delle lacune**, non un audit storico concluso.

## Fonti iniziali per la verifica puntuale
- Alessandro Marcello, *Dizionario Biografico degli Italiani*, Treccani: https://www.treccani.it/enciclopedia/alessandro-ignazio-marcello_%28Dizionario-Biografico%29/ — concerto per oboe, raccolte di concerti, dodici cantate.
- Benedetto Marcello, Treccani: https://www.treccani.it/enciclopedia/benedetto-marcello/ — *Estro poetico-armonico*, sonate, concerti, repertorio sacro e teatrale.
- Benedetto Marcello, *Dizionario Biografico*, Treccani: https://www.treccani.it/enciclopedia/benedetto-giacomo-marcello_%28Dizionario-Biografico%29/
- La cantata (panoramica storica e autori), Treccani: https://www.treccani.it/enciclopedia/cantata_%28Enciclopedia-Italiana%29/

## Indicazioni per il futuro inserimento
1. Definire una tassonomia generale riusabile («Concerto», «Sonata», «Musica sacra», «Cantata», «Oratorio», «Sinfonia», «Musica per tastiera», «Musica da camera» ecc.) e controllare semanticamente tutti i nodi esistenti.
2. Separare il campo **produzione** (l'autore ha composto in quel genere) dal campo **ruolo storico** (ne ha cambiato il linguaggio, con evidenza specifica).
3. Non promuovere automaticamente il nodo `corrente` a genere. Conservare i valori e valutare `semantic_type`.
4. Progettare soltanto tre selettori di visualizzazione: «Musica e produzione», «Relazioni e influenze», «Evoluzione musicale», combinabili. Preservare colorazioni, frecce, direzioni, note e fonti nella colonna laterale.
5. Verificare funzione di esplosione, doppio clic e persistenza dei nodi trascinati separatamente dall'inserimento dei dati.
6. Rileggere il nuovo HEAD prima di ogni modifica ai file condivisi. L'audit parallelo non deve essere sovrascritto.

## Passo successivo
Approfondire le schede, a partire da Vivaldi, Corelli, Torelli, Domenico Scarlatti e i due Marcello, cercando per ogni relazione una fonte specifica e assegnando una priorità motivata. Preparare una patch validabile offline, senza toccare direttamente `main` durante la costruzione.
