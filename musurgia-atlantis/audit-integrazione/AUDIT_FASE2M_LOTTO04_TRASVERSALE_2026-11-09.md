# Musurgia Atlantis — Fase 2M · Lotto 04
## Audit trasversale di tutti i concetti e compositori (non un audit della sola Messa)

**9 novembre 2026 · repository `SkenderAle/github-pages` · branch `main` · staging soltanto.**

### Correzione di perimetro impartita dall'utente
Palestrina, Mozart, i Gabrieli e il genere «Messa» sono **esempi**, non una lista di priorità esclusive. L'audit deve verificare la copertura di **tutte** le forme, generi, pratiche, scuole e tradizioni e di **tutti** i compositori. Non basta trasferire i soli 37 nodi `taxonomy.visibility=principale`; conservare integralmente anche i contesti specifici e i sottogeneri.

### Materiale prodotto e collaudato
`MATRICE_GLOBALE_CONCETTI_AUTORI_FASE2M_LOTTO04_2026-11-09.json` contiene:
- **344** schede individuali: **339** `corrente` del grafo base e **5** nuovi dall'estensione operetta/musical (`genere-musical` già presente, quindi non ricreato).
- **509** schede personali (409 compositori, 100 altre persone), con identificativi, collegamenti diretti ai concetti e riferimenti esatti ai record sorgenti.
- Per ogni nodo: tassonomia originale, classe ancora da convalidare, priorità, corrispondenze Atlantis già esaminate, match testuali **non autorizzati a fondere**; tutte le relazioni incidenti con file, indice del record, verso e tipo di rapporto.
- **2.397 riferimenti incidenti** a nodi `corrente`: 1.737 dal grafo base, 625 dalle relazioni specialistiche, 35 dall'estensione. Questo è un conteggio **per estremità concettuale** e NON il numero di archi distinti: un arco `corrente`↔`corrente` compare in entrambe le schede. La somma degli archi sorgenti resta **2.437 + 1.389 + 30 = 3.856** prima di ogni fusione; gli **1.718** Atlantis restano distinti.
- **1.846 riferimenti diretti persona↔concetto** negli archi base/specialistici/estensione, di cui 1.239 + 582 + 25. Sono record di relazione, **non 1.846 attestazioni storiche indipendenti**; possono sovrapporsi per stessa coppia.
- Ricerca lessicale prudente di possibili lacune in descrizioni dei compositori: **21 segnalazioni**, mai trasformate in nuove relazioni o prove di composizione.

**Test sulla matrice JSON recuperata dopo la pubblicazione: PASS**: 344 ID concettuali distinti, 509 persone, tutti i riferimenti persona↔concetto con controparte coerente, 0 estremi mancanti, 409/409 compositori con almeno un collegamento concettuale, 38 concetti `principale`, assenza di fusione/pubblicazione.

### Risultato strutturale
- **343/344** nodi `corrente` hanno almeno un compositore direttamente connesso contando **tutti** i record base e specialistici; l'unico senza compositore diretto è `stampa-musicale-rinascimentale`. Questo dato non obbliga a creare una connessione: un'invenzione storico-editoriale può essere pertinente senza avere un autore direttamente attribuito.
- Le relazioni specialistiche con un estremo persona e uno `corrente` sono **582**, tutte marcate `status=documentato` nel file sorgente, in gran parte scuole (378) e genealogie concettuali (193). **Il valore `documentato` non sostituisce il riscontro storico indipendente**.
- **210/344** nodi `corrente` non possiedono `taxonomy.class` esplicita. Non dedurre classe e profondità da ID, prefisso o presenza in una scuola.
- I 176 nodi Atlantis di categoria `nodo-di-senso` non equivalgono meccanicamente ai 344 `corrente`. Solo 5 nomi risultano identici per normalizzazione stretta su tutte le categorie semantiche considerate, e anche questi sono **candidati**, non fusioni.
- **38** nodi concettuali prioritari (`principale`); **37** avevano un audit preesistente: **20** candidati, **4** parziali, **13** privi di equivalente autonomo identificato. `Operetta` è il trentottesimo nodo prioritario, da riconciliare separatamente, senza assumere sinonimia con Musical.
- Atlantis ha attualmente **48** archi diretti `persona`↔`nodo-di-senso`; non confrontare questo numero come fossero gli stessi predicati degli **1.846** riferimenti persona↔`corrente` Mundi. Serve il crosswalk individuale delle entità e la preservazione delle relazioni spiegate.

### I 38 nodi prioritari: audit comparativo (tutti, non solo Messa)
| Concetto | Compositori connessi nel sorgente | Crosswalk precedente | Candidato Atlantis |
|---|---:|---|---|
| Madrigale | 32 | candidate | senso:madrigale |
| Polifonia | 24 | candidate | senso:polifonia |
| Musica elettronica ed elettroacustica | 12 | partial | senso:musica-concreta |
| Frottola | 4 | candidate | senso:frottola |
| Villancico | 3 | no_corresponding_node_identified | — |
| Poema sinfonico | 17 | candidate | senso:poema-sinfonico |
| Musica per il cinema | 20 | partial | senso:colonna-sonora |
| Concerto | 75 | candidate | senso:concerto |
| Sonata | 42 | candidate | senso:sonata |
| Sinfonia | 71 | candidate | senso:sinfonia |
| Suite | 25 | no_corresponding_node_identified | — |
| Musica da camera | 77 | candidate | senso:musica-camera |
| Quartetto d’archi | 46 | candidate | senso:quartetto |
| Cantata | 30 | candidate | senso:cantata |
| Oratorio | 26 | candidate | senso:oratorio |
| Messa | 40 | no_corresponding_node_identified | — |
| Lied | 20 | candidate | senso:lied |
| Opera | 121 | candidate | senso:opera |
| Mottetto | 34 | partial | senso:motetto-rinascimentale |
| Fuga | 17 | candidate | senso:fuga |
| Variazioni | 34 | no_corresponding_node_identified | — |
| Ricercare | 7 | candidate | senso:ricercare |
| Fantasia | 25 | no_corresponding_node_identified | — |
| Balletto | 26 | candidate | senso:balletto |
| Ouverture | 29 | no_corresponding_node_identified | — |
| Toccata | 8 | no_corresponding_node_identified | — |
| Preludio | 7 | no_corresponding_node_identified | — |
| Rapsodia | 8 | no_corresponding_node_identified | — |
| Chanson | 4 | no_corresponding_node_identified | — |
| Ballata | 4 | no_corresponding_node_identified | — |
| Lauda | 2 | candidate | senso:lauda |
| Jazz | 3 | candidate | senso:jazz |
| Musical | 10 | candidate | senso:musical |
| Ragtime | 3 | candidate | senso:ragtime |
| Notturno | 8 | no_corresponding_node_identified | — |
| Mélodie francese | 9 | no_corresponding_node_identified | — |
| Minnesang | 2 | partial | senso:canto-cortese |
| Operetta | 10 | da-valutare-estensione | — |

Il numero dei compositori è tratto dalle relazioni base e specialistiche più estensione, con ripetizioni di record non equiparate a individui distinti. Questi sono i rapporti già registrati, **non la garanzia che il catalogo delle composizioni di ogni autore sia completo**.

### Perché non associare genericamente i 409 compositori a tutto
I 21 rilievi testuali sono **solo segnali per un audit documentale**. Già la prima ricognizione contiene 6 casi ad alto rischio di falso positivo:
- `Luzzasco Luzzaschi` → `genere-concerto`: «Concerto», ma il contesto dice «lfonso II d'Este curò il repertorio per le cantanti virtuose del Concerto delle dame.». **Proper name of performing ensemble, not a concerto work.**
- `Filippo Manfredi` → `genere-quartetto-archi`: «Quartetto», ma il contesto dice « tournée attraverso la Francia nel 1767–68. La ricostruzione del Quartetto toscano rimane in parte controversa.». **Possible ensemble, not necessarily a string-quartet work.**
- `Giovanni Giuseppe Cambini` → `genere-messa`: «messa», ma il contesto dice « il cosiddetto Quartetto toscano con Boccherini. La narrazione è messa in discussione dalla ricerca moderna e va mantenuta come testimonianza, non come certezza.». **Explicit negative sense: idiom 'messa in discussione', not a mass.**
- `Margaret Bonds` → `genere-concerto`: «Concerto», ma il contesto dice «Pianista che eseguì il Concerto per pianoforte di Florence Price nel 1934.». **Mentions Florence Price's work performed by subject, not composed by subject.**
- `Walther von der Vogelweide` → `genere-cantata`: «cantata», ma il contesto dice «sänger dell'area germanofona; presente nel percorso sulla parola cantata.». **Refers to sung speech, not necessarily the cantata genre.**
- `Mauro Giuliani` → `genere-sinfonia`: «sinfonia», ma il contesto dice «Chitarrista italiano, presente alla prima della Settima sinfonia di Beethoven nel 1813; strumento suonato non certo.». **Mentions Beethoven's work, not a symphony composed by the subject.**

Per esempio `Giovanni Giuseppe Cambini` contiene «messa in discussione» riferito al Quartetto toscano: **non è** una prova di messe composte. Questo contraddice qualsiasi procedura automatica basata sulle parole. Le altre segnalazioni non sono validate automaticamente: richiedono ricerca di un'opera concreta, attribuzione attendibile, catalogo e fonte autonoma, oppure stato dubbio correttamente conservato.

### Contratto per la futura UI
**Ricerca per genere**: mostra tutti i compositori **documentati** come vicini diretti del genere e i suoi contesti/opere pertinenti; nessun passaggio autore↔autore attraverso il solo genere. Le epoche appaiono solo se pertinenti e direttamente documentate, senza rami derivati.

**Ricerca per compositore**: mostra le sue opere, generi e persone legate da rapporti propri; un genere condiviso non apre la rete degli altri 408 autori. **Ricerca per epoca**: caso di consultazione dedicata, distinto da un attraversamento indiscriminato di «tutto il mondo».

**Profondità**: separare (a) visibilità per tipologia; (b) raggio massimo per tipologia 0–V; (c) pivot esplicito e derivata 0–III per singolo nodo. Le fonti, i link di capitoli, gli audio e i video restano **risorse della scheda**, non passi del grafo. I 7 periodi e le 18 nazioni non vanno fusi con `cap:*` o con le città esistenti in Atlantis.

### Prossima ripresa proposta: Lotto 05
1. Esaminare i **38** concetti prioritari con crosswalk di opere ed autori Atlantis, **e insieme** classificare per lotti i **306** rimanenti senza perdere le specializzazioni.
2. Per le **21** segnalazioni lessicali distinguere «indicazione di opera specifica», «genere contestuale» e «falso positivo», con fonti indipendenti prima di ogni nuovo rapporto. Applicare poi lo stesso protocollo a tutti i 409 autori e 344 concetti.
3. Preparare uno staging interrogabile con test per radice `genere`, `persona`, `opera`, periodi terminali, raggio per tipo e pivot; confrontare i legami diretti Mundi e quelli già Atlantis **senza sommare ciecamente**.
4. Solo dopo consolidamento storico-semanticamente verificato, importare le risorse editoriali dal registro del Lotto 03, preservando le spiegazioni `forward/reverse`, note, fonti, media, ancore e provenienza.

**Nessuna modifica** a `musurgia-atlantis/grafo.json`, `musurgia-atlantis/index.html`, `atlante3d/database/*` o alle pagine pubbliche. I 210 lotti storici e il patrimonio sorgente rimangono intatti.
