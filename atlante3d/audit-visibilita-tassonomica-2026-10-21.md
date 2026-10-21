# Musurgia Mundi — audit visibilità tassonomica (21 ottobre 2026)

## Campo dell'audit
Repository `SkenderAle/github-pages`, branch `main`; file `atlante3d/database/grafo.json`, `atlante3d/database/relazioni.json` e `atlante3d/app-livelli.js`. Conteggi sul contenuto del commit in uso al momento dell'ispezione, non sul rendering di un browser.

## Verifiche numeriche
- 856 nodi complessivi: 393 compositori, 334 nodi tecnici `corrente`, 99 persone, 18 geografici, 7 periodi e 5 ambiti.
- 2369 archi nel grafo generale e 1388 relazioni nel database delle lenti.
- Dei 334 nodi `corrente`, 93 non hanno archi in `grafo.json`; nessuno risulta privo di relazioni se si considerano anche quelle documentate in `relazioni.json`.
- Fra i 93, 47 hanno almeno una relazione `scuole` (attiva con la lente musicale) e 46 hanno soltanto relazioni di altre lenti (genealogie/collaborazioni). Questi 46 possono quindi non apparire con la sola lente «Storia e appartenenze».
- 210 nodi `corrente` non hanno un valore esplicito `taxonomy.class`: non equivale a errore filologico, ma limita la trasparenza della classificazione.
- I cinque ambiti sono Avanguardie (33 archi nel grafo), Opera lirica (29), Melodramma barocco (25), Teatro classico (13) e Risorgimento (5). Questi archi includono periodi, compositori e generi: non indicano cinque famiglie esaustive.
- Mozart è collegato a Teatro classico e Beethoven non è collegato direttamente a nessun ambito; entrambi hanno molte relazioni a generi e forme.

## Cause di apparente sparizione
`currentEdges()` riunisce, quando è attiva «Storia e appartenenze», gli archi storici, le relazioni specialistiche del gruppo `scuole` e i raccordi derivati sui generi; gli altri gruppi dipendono dalle altre lenti. `visibleNode()` filtra inoltre per categoria selezionata, profondità, presenza di un nodo centrale e coordinate / contesto schematico. Con un nodo centrale attivo le bolle visibili NON rappresentano il censimento globale della categoria.

## Prossimi controlli obbligatori
1. Separare nel selettore i cinque *ambiti editoriali* dai 334 *generi, forme, correnti e contesti* senza cambiare artificialmente i tipi nel database.
2. Verificare che le 46 voci collegate soltanto da genealogie o collaborazioni siano raggiungibili aprendo le rispettive lenti.
3. Revisionare i 210 record privi di `taxonomy.class` alla luce delle altre proprietà tassonomiche; assegnare classi soltanto con motivazione storica documentata.
4. Testare con browser i filtri su Hitchcock, Mozart, Beethoven e Teatro classico e annotare differenza tra elenco di relazioni nel pannello e bolle effettivamente renderizzate.

Non sono stati creati archi o modificati dati filologici durante questo audit.
