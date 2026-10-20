# Musurgia Mundi — verifica completa della lente Scuole

Data: 20 ottobre 2026. Branch: main.

## Copertura e risultati
- 843 nodi e 1.388 relazioni: struttura invariata.
- 392 relazioni Scuole, tutte documentate.
- 784 frasi bidirezionali ricostruite con il generatore corrente.
- Registro degli esiti: 99 approvate, 280 corrette, 13 con riserva filologica/tassonomica.

## Metodo
Per ciascuna relazione sono stati letti source, target, kind, note e sources e ricostruite le due frasi con relationSentence() effettivamente presente in app-livelli.js.
Le correzioni hanno agito sulla lingua e sulla formulazione prudente dei rapporti. ID, etichette dei nodi, relazioni, note e fonti non sono stati modificati.
Le altre lenti sono escluse dal trattamento per condizione esplicita del generatore.

## Riserve
Le relazioni contrassegnate da approfondire richiedono riesame della categoria «Scuola luterana», delimitazione elisabettiana per Gibbons, specificità violinistica di Benedetto Marcello, bolla tecnica Marktkirche halle zachow, e distinzione fra neobarocco e neoclassicismo, galante ed empfindsamer Stil.
APPROVATA significa corretta sul piano linguistico/semantico secondo gli elementi disponibili, non una certificazione filologica delle 392 relazioni. Non tutte le fonti esterne sono state aperte e verificate singolarmente.
Le frasi sono state eseguite con la funzione applicativa isolata e non con un test automatico completo del browser.

## Fonti campionate
- Treccani, Antonio Soler: https://www.treccani.it/enciclopedia/antonio-soler/
- Treccani, Gruppo dei Sei: https://www.treccani.it/enciclopedia/gruppo-dei-sei/
- Treccani, Felice Anerio: https://www.treccani.it/enciclopedia/felice-anerio/
- Treccani, Giovanni Legrenzi: https://www.treccani.it/enciclopedia/giovanni-legrenzi_%28Dizionario-Biografico%29/
- Treccani, Alfredo Casella: https://www.treccani.it/enciclopedia/alfredo-casella_%28Dizionario-Biografico%29/
- Westminster Abbey, Orlando Gibbons: https://www.westminster-abbey.org/abbey-commemorations/commemorations/orlando-and-christopher-gibbons
- Cambridge, Händel primi oratori: https://www.cambridge.org/core/books/abs/cambridge-companion-to-handel/handels-oratorio-performances/B1FA873C9CA93296EC691EA01E458119

Registro: atlante3d/audit-scuole-20261020-completo.tsv.
