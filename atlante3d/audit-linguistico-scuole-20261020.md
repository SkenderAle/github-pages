# Musurgia Mundi — controllo linguistico delle Scuole · 20 ottobre 2026

Base: 392 relazioni documentate, 784 frasi direzionali; nodi verificati: 843.

## Correzioni di presentazione
- 98 relazioni con intestazione «Scuola ...» o «Seconda scuola ...»: il nome usato come soggetto in una frase riceve l'articolo «La» senza cambiare il nome ufficiale della bolla.
- 46 relazioni con il modello «annovera nella propria storia musicale come»: il nome del musicista è anticipato prima della sua qualificazione.
- 2 relazioni «Scuola di Notre-Dame» (Léonin e Pérotin): nella direzione inversa «di Scuola» diventa «della Scuola».

L'intervento opera nella funzione `relationSentence` di `app-livelli.js`: nessuna alterazione di `grafo.json`, `relazioni.json`, delle fonti o di `semantic_review`.

## Controllo riproducibile
`node atlante3d/database/verifica-frasi-scuole.mjs --tsv`

Il controllo richiama la funzione di produzione realmente usata dall'interfaccia e genera un TSV delle 784 frasi. L'azione CI conserva il TSV come artefatto scaricabile.

## Limiti
Il superamento dei controlli automatici verifica la generazione e alcuni errori meccanici, **non certifica la correttezza linguistica o filologica di tutte le 784 frasi**. Rimane necessaria la rilettura editoriale. Il difetto intermittente del doppio clic sulle bolle rosa non è considerato risolto.
