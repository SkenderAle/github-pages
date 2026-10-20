# Musurgia Mundi — audit completo della lente Scuole

Data: 20 ottobre 2026. Branch: main.

## Copertura e risultati
- 843 nodi e 1.388 relazioni: conteggi invariati.
- 392 relazioni nella lente Scuole, tutte con status `documentato` nel database.
- 784 frasi bidirezionali ricostruite con il generatore applicativo corrente.
- Registro finale: **262 approvate, 130 corrette, 0 da approfondire**.
- La prima passata aveva modificato almeno una frase di 87 relazioni; la chiusura delle 13 riserve ha modificato altre **28 frasi direzionali**, compreso il ponte Venezia–tradizione luterana.
- Nessuna relazione o arco è stato aggiunto o rimosso.

## Chiusura delle sei questioni tassonomiche
1. **Tradizione musicale luterana** (7 relazioni): rinominata la precedente «Scuola luterana», che faceva pensare a un'istituzione unitaria. Sei coppie di frasi specializzate per Walter, Praetorius, Schein, Scheidt, Schütz e J. S. Bach; Telemann mantiene la formulazione relativa ad Amburgo. Aggiornato anche il ponte Venezia–tradizione luterana.
2. **Tradizioni inglesi fra Tudor e Stuart** (1 riserva diretta, 5 connessioni interessate): etichetta ampliata oltre il regno di Elisabetta I; precisate le frasi per Tallis, Byrd, Morley, Dowland e Gibbons, che operò sotto i primi Stuart.
3. **Stile galante ed empfindsamer Stil** (2 relazioni): mantenuta la bolla sintetica perché la descrizione e le frasi distinguono già Carl Philipp Emanuel Bach (stile sensibile) da Johann Christian Bach (stile galante); non viene postulata una scuola unitaria.
4. **Stravinskij e neobarocco** (1 relazione): il legame è ricondotto al richiamo ai Concerti brandeburghesi nel *Dumbarton Oaks* (1938), opera della fase neoclassica; non viene esteso a tutta la sua produzione.
5. **Benedetto Marcello e concerto violinistico** (1 relazione): confermati i dodici *Concerti a cinque con violino solo e violoncello obbligato*, op. 1 (Venezia, 1708). Il DBI segnala la perdita della parte del violino principale nell'esemplare descritto.
6. **Marktkirche di Halle** (1 relazione): normalizzata la bolla, ora qualificata semanticamente come istituzione ecclesiastica; rapporto tra il suo organista Zachow e il giovane Händel preservato.

## Controlli
- Confrontate prima e dopo tutte le 784 frasi ottenute da `relationSentence()`.
- 28 frasi cambiate, tutte ricondotte alle categorie coinvolte; nessuna modifica imprevista.
- Nessuna frase vuota o con valori `undefined`.
- Restano immutati gli ID dei nodi, gli estremi e gli ID delle relazioni, gli archi, i gruppi, lo status storico `documentato` e le altre lenti.
- Controllo condotto sul generatore isolato, **non su un browser**; serve comunque verificare la pubblicazione GitHub Pages.
- Il registro identifica un controllo editoriale e filologico mirato, **non una certificazione archivistica completa di tutte le fonti**.

## Fonti mirate della chiusura
- Marco Bizzarini, *Benedetto Giacomo Marcello*, Dizionario Biografico degli Italiani (Treccani): https://www.treccani.it/enciclopedia/benedetto-giacomo-marcello_%28Dizionario-Biografico%29/
- Westminster Abbey, *Orlando and Christopher Gibbons*: https://www.westminster-abbey.org/abbey-commemorations/commemorations/orlando-and-christopher-gibbons
- St. Louis Symphony Orchestra, programma di sala *Dumbarton Oaks*: https://slso.org/stravinsky-debussy-january-10-11-2026/
- CCG-Halle, *Handel and Halle*: https://ccg-halle.de/en/halle/handel/
- Robert O. Gjerdingen, *An Andante by Johann Christian Bach*, Oxford Academic: https://academic.oup.com/book/49369/chapter-abstract/422381565

Registro: `atlante3d/audit-scuole-20261020-completo.tsv`.
