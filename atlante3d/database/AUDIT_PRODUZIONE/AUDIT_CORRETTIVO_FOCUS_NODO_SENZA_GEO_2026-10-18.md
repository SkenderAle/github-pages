# Musurgia Mundi — Correttivo strutturale: nodo selezionato senza coordinate

**18 ottobre 2026 · branch main · base `acd2b9a3b2dcba98fef3a5b3ca3624ec8deede9b`**

## Difetto riproducibile nel codice precedente
Agnes de Mille aveva una relazione documentata con Aaron Copland (*Rodeo*, 1942), ma mancavano paese, coordinate e appartenenza temporale nel grafo. Quando veniva selezionata da ricerca oppure da navigazione fra relazioni, `focusOn()` aggiornava il nodo e il pannello, ma `visibleNode()` richiedeva coordinate per mostrarlo. In `contextRawPoint()` c'era inoltre un ritorno esplicito `n===selected`, che impediva qualunque posizione sostitutiva. `fitGeoNetwork()` lasciava invariato il centro della mappa se il nuovo nodo non aveva posizione: il risultato mostrava Copland oppure un altro nodo geografico preesistente. Si tratta di un errore di visualizzazione, non di una sostituzione dell'identità nel database.

## Correzione generale
1. `contextRawPoint()`: un nodo selezionato senza coordinate riceve SEMPRE un punto centrale **schematico**, esplicitamente non geografico; il nodo non selezionato concettuale può orbitargli intorno.
2. `fitGeoNetwork()`: in assenza di geografia si torna alla vista mondiale neutra, annullando l'inquadratura ereditata dal nodo precedente. Messaggio trasparente nel pannello geografico.
3. `draw()`: nodo schematico evidenziato da contorno tratteggiato e dicitura «NODO NON GEOLOCALIZZATO».
4. `persona-agnes-de-mille`: documentati il luogo di nascita e l'attività a New York (1905–1993), coordinate cittadine dichiarate, appartenenza al Novecento e collegamento agli Stati Uniti. `persona` resta distinto da `compositore`; nessuna relazione fittizia con Copland.
5. Voce individuale Treccani aggiunta, con nota sulla datazione discordante riportata da Treccani (1908), mentre Library of Congress e New York Public Library attestano 1905.

## Fonti
- https://guides.loc.gov/agnes-de-mille
- https://guides.loc.gov/agnes-de-mille/special-collections/music-division
- https://archives.nypl.org/dan/19627
- https://www.treccani.it/enciclopedia/de-mille-agnes/

## Verifiche
- Syntax check JavaScript.
- Nodo `persona-agnes-de-mille` distinto da `compositore-aaron-copland`.
- Relazione diretta Copland–de Mille preservata e tipizzata.
- Coordinate Agnes e due archi di contesto verso `novecento` e `geografia-stati-uniti` verificati.
- La selezione senza coordinate NON necessita più di coordinate del nodo collegato.
- Nessuna modifica ai lettori musicali, altri audit sospesi.
- Non ancora eseguito collaudo reale visivo Android/desktop.
