# Audit delle relazioni originali oscurate e consultazione separata
## Musurgia Mundi / Atlantis / Flaminio — 20 novembre 2026

**Ambito:** `musurgia-atlantis/audit-integrazione/`, branch `main`. Grafi e interfaccia di produzione **non modificati**. Lotto 2 Flaminio **bloccato**.

### Obiettivo
Proseguire oltre l'audit degli archi genere–opera: individuare collegamenti originali diretti che le proiezioni specializzate non mostrano, distinguere un difetto di accessibilità dalla scelta corretta di limitare la propagazione, e conservarli consultabili **senza immetterli automaticamente nel grafo 3D**.

### Metodo
Caricate le **17 sorgenti JSON effettive** e richiamati il builder `buildUnifiedDatabase` e il corpo originale `rootedProjection` estratto dall'HTML dello staging. Per ciascuno dei nodi coinvolti negli overlay Scena/Danza, Vocale, Forme brevi, Contrappunto, Suite, Strutture (più Bach), verificata l'effettiva selezione di una proiezione specializzata. Con profondità massima 5 e categorie abilitate, confrontati gli archi di fonte **diretti** Mundi/Atlantis non documentari e non HOLD con gli archi restituiti dalla proiezione.

**Perimetro:** 159 nodi candidati, 137 radici con proiezione specializzata effettiva, 57 con almeno un arco originale diretto fuori dalla vista. **713 occorrenze di archi non mostrati, per coppia radice–arco**: non rappresentano 713 duplicati né necessariamente 713 archi univoci o errori.

| Categoria dell'altro estremo | Occorrenze |
|---|---:|
| Persone | 531 |
| Capitoli | 49 |
| Reti culturali | 44 |
| Concetti | 39 |
| Generi e forme | 32 |
| Opere | 13 |
| Eventi | 5 |
| **Totale** | **713** |

Per provenienza: 566 occorrenze Mundi e 147 Atlantis.

**Radici più interessate:** Sinfonia 91, Messa 46, Madrigale 45, Variazioni 39, Mottetto 37, Oratorio 36, Cantata 35, Suite 32, Ouverture 30, Balletto 29, Fantasia 27, Lied 27.

### Interpretazione ontologica
Gli archi originali non visualizzati hanno significati differenti. In particolare:
- un arco Mundi `forma-o-pratica-documentata` fra persona e genere **non prova l'identità di alcuna singola composizione**;
- un arco capitolo–genere può attestare trattazione editoriale o semplice menzione, **non causalità storica**;
- un confronto `sviluppa_o_illumina` non deve trasformare un'opera in esempio certificato di una tipologia;
- le relazioni di composizione, parte, ciclo, versione e adattamento richiedono verifiche opera-specifiche;
- i collegamenti HOLD, sospesi, contestati e documentari non devono riapparire surrettiziamente nella navigazione ordinaria.

Conclusione: riattivare in massa questi archi nelle proiezioni radicate farebbe ricomparire l'espansione indiscriminata e l'ereditarietà impropria dei repertori. È invece utile rendere visibili **le motivazioni originali in una consultazione separata**.

### Modifica realizzata esclusivamente nella vista di staging
Nel file `VISTA_DB_FEDERATO_LOTTO01_2026-11-15.html` è stata aggiunta:
- una funzione **`hiddenOriginalRelations(db,nodeId,renderedLinks)`**, che raccoglie esclusivamente le relazioni originali dirette consultabili già presenti nei dati ma non mostrate nella vista corrente, escludendo documentazione e stati HOLD;
- una sezione espandibile **«Archivio: N relazioni originali fuori dalla vista»** nel pannello dettagli del nodo selezionato; apre per gruppi di 30 risultati e non aumenta il numero di archi 3D;
- per ogni arco: nome dell'altro nodo, sua categoria, provenienza, predicato, qualità e spiegazione della fonte, ove presente;
- una scheda di consultazione dell'arco con ID fonte, stato e URL documentali HTTPS, ove disponibili;
- l'azione esplicita **«Nuova ricerca da …»**, che reimposta la radice e il percorso invece di attraversare forzatamente un arco non mostrato.

Questa UI non promuove un confronto in appartenenza, non aggiunge archi di catalogazione e **non modifica le proiezioni già convalidate**. I dati originali continuano a determinare l'affidabilità dei collegamenti.

**Commit HTML:** [fc79975](https://github.com/SkenderAle/github-pages/commit/fc799750e0e579afc783cf2d45654614111b2c60).

### Gate logico effettivamente eseguito
L'harness `TEST_GATE_RADICATO_POST_UNIFICAZIONE_2026-11-18.mjs` è stato ampliato per estrarre e verificare la nuova funzione sull'HTML di staging e sulle 17 sorgenti reali.

Esempi controllati:
- Da **Sinfonia**, il collegamento originale al capitolo *Classicismo* (`E0437`) è reperibile nell'archivio, non è propagato come nuova sottocategoria.
- Da **Ballet d'action**, il confronto con *Les Petits Riens* (`L02-A25`) è consultabile nell'archivio ma continua a non comparire come appartenenza tassonomica nel grafo.
- L'esempio storico verificato *Don Juan* (`L02-A03`), già visibile nel grafo radicato, **non è duplicato** fra gli archi non mostrati.
- Le relazioni documentarie e quelle bloccate non vengono restituite dalla funzione.

**Esecuzione V8 con I/O virtualizzato dai 17 blob reali:** **178 asserzioni superate**, esito `PASS_LOGICAL_RUNTIME_NOT_BROWSER`. Il corpo completo del test è stato eseguito dopo l'ultima modifica; la sintassi del corpo JavaScript modulo HTML è stata verificata separatamente con parsing V8, rimuovendo soltanto l'import per il controllo sintattico.

| Gate strutturale | Valore |
|---|---:|
| JSON sorgenti | 17 |
| Nodi | 2.897 |
| Archi | 8.743 |
| Schede Flaminio Lotto 1 | 500 |
| Archi orfani | 0 |
| ID arco duplicati | 0 |

**Commit harness:** [408f313](https://github.com/SkenderAle/github-pages/commit/408f31391b30e9161703dda16ec1a30ec0b7b1e1).

### Limiti e gate aperti
- Non sono stati eseguiti il collaudo **DOM/WebGL/Canvas/Android**, il comando **Node CLI in clone locale** o gli altri otto harness da CLI. Un test V8 del corpo non equivale a un collaudo UI.
- L'audit fotografa archi **diretti delle radici specializzate**, non tutte le possibili proiezioni di ogni nodo e di ogni tipo di relazione.
- Restano da distinguere sistematicamente i **531 collegamenti verso persone** per provenienza, qualità e qualificazione autore–genere vs autore–opera, prima di promuovere eventualmente altri raccordi musicologici.
- La consultazione archivistica evita la perdita di accessibilità ma **non certifica** gli archi sottostanti né corregge automaticamente dati editoriali di Mundi.

**Stato:** Lotto 1 OPEN per audit musicologico e collaudo browser; Lotto 2 BLOCKED; produzione invariata.
