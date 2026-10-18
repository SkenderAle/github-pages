# Musurgia Mundi — Percorsi nell’Atlante · Correttivo della navigazione storica

**18 ottobre 2026 · base HEAD `b504206cb67f48725fa4fb0485d91d44a96bec4d` · branch `main`**

## Difetto individuato
Geminiani ha già **due opere con ancore editoriali puntuali**, ma tali rimandi erano mostrati solo in **Ascolti e video**. Il pannello rendeva **Percorsi nell’Atlante** unicamente in presenza di una menzione narrativa dell’autore, quindi la sezione scompariva anche quando si poteva offrire un capitolo storico.

## Correttivo
- Le destinazioni specifiche verificate mantengono la priorità e NON vengono sostituite da homepage o sezioni generiche.
- In assenza di un passaggio narrativo individuale, il pannello indica chiaramente **Capitolo generale** e offre il periodo storico a cui l’autore è già collegato nel grafo (fino a due periodi documentati).
- Le opere specifiche continuano ad apparire separatamente sotto **Ascolti e video**. Un rimando generale non viene conteggiato come opera, ascolto, scheda individuale o ancora bidirezionale verificata.
- Le sette categorie temporali condividono sei pagine storiche esistenti; Novecento e Postromanticismo condividono `post-romanticismo/`, senza puntare forzosamente all’ancora `#colori` che non riguarda tutti gli autori.
- Inclusa `narrative-author-anchor` nella navigazione specifica: evita che Astor Piazzolla, pur avendo un rimando narrativo verificato, venga erroneamente trattato come autore senza passaggio dedicato.
- La voce «Percorsi nell’Atlante» è sempre visibile per le persone e i compositori, anche quando manca il periodo (in tal caso esplicita la lacuna, senza inventare una collocazione).

## Risultati strutturali
- **478** persone e compositori complessivi.
- **60** dispongono già di un passaggio narrativo individuale nel manifest.
- **277** senza rimando narrativo specifico possono ricevere automaticamente il link al periodo storico già documentato nel grafo.
- **141** non hanno né rimando narrativo dedicato né arco diretto al periodo: resta necessario un audit editoriale e temporale. La loro scheda non inventa un capitolo, ma non nasconde il problema.
- **Francesco Geminiani**: compare `Percorsi nell’Atlante → Capitolo generale · Barocco`; le Sonate op. 1 nn. 1 e 2 rimangono sotto `Ascolti e video`.

## Invarianti
Nessuna modifica alle audioteche, ai player, alla geografia, agli archi personali, alle opere o agli identificativi. Il registro `pendingReview` conserva i link generici non promossi a rimandi puntuali. Nessun autoplay.

## Verifiche da completare
Controllo statico delle rotte storiche esistenti completato; collaudo visivo desktop/Android non eseguito. L’assegnazione dei 141 nodi senza periodo è un intervento dell’audit strutturale successivo.
