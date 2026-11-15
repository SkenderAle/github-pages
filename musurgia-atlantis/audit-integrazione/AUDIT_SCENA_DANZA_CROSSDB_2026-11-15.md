# Audit cross-database — Musica per la scena e danza
**15 novembre 2026 · IN_REVIEW · Produzione invariata · Lotto 2 Flaminio bloccato**

## Corpus ispezionato
- Mundi: 869 nodi e 2.437 archi; **56** occorrenze esplorative con parole-spia relative a scena e danza.
- Atlantis: 754 nodi e 1.718 archi; **129** occorrenze esplorative (incluse persone, produzioni, capitoli e contesti).
- Flaminio Lotto 1: 1.365 nodi e 2.780 archi; **44** occorrenze esplorative dopo esclusione delle principali rubriche e schede sorgente.
I conteggi nominali sono **non esaustivi** e contengono falsi positivi: non equivalgono a tutte le opere per la scena presenti. L'inventario dei 2.988 record di provenienza è nel censimento globale. Per chiudere il gate della famiglia occorre analizzare archi, estensioni e fonti anche quando non condividono etichette.

## Decisioni tassonomiche
1. **Musica per la scena**, **Musica per la danza** e **Teatro musicale e spettacolo** sono *famiglie di accesso*, non tre generi equivalenti.
2. **Balletto**: genere di spettacolo e/o opera coreografica. Gli ID `genere-balletto` (Mundi) e `senso:balletto` (Atlantis) sono in **HOLD d'identità**, come già annotato nel crosswalk, perché hanno ampiezza semantica diversa. Non fonderli senza analisi.
3. **Ballet de cour, Ballet d'action, Balletto-pantomima, Comédie-ballet, Opéra-ballet** sono articolazioni storiche o generi misti; le ultime due non vanno rese automaticamente sottogeneri del Balletto moderno. `senso:ballet-de-cour` è isolato nel grafo Atlantis sorgente (grado 0), da collegare con evidenza senza invenzioni.
4. **Musiche di scena**: composizione destinata a un dramma o rappresentazione, da distinguere da *Opera lirica*. `opera:egmont-op84` è sentinella. **Melologo**: rapporto parola recitata e musica, talvolta scenico e talvolta da concerto; è un nodo-tipo proposto e non una composizione inventata.
5. **Operetta** e **Musical**: identità generiche già curate tra Mundi e Atlantis; non crearne copie. Conservare Savoy opera, opéra-bouffe e operetta francese come rapporti storico-culturali da verificare, evitando false equivalenze.
6. **Film musicale** è opera audiovisiva, non sinonimo di *Musical teatrale*. `senso:musical-integrato` è poetica/drammaturgia, non secondo nodo di genere.
7. **Suite da balletto**, **Suite da musiche di scena** e **Suite sinfonica** convergono sulla **forma Suite**, ma non sono sinonimi. Doppia appartenenza a repertorio sinfonico se pertinente all'organico. Le suites possono essere estratti, selezioni, rimontaggi o adattamenti: tipo di derivazione va documentato.
8. **Opera musicale originale**, **partitura**, **spettacolo/produzione**, **coreografia**, **allestimento**, **versione**, **arrangiamento**, **numero/movimento** non vanno automaticamente fusi. Una nuova coreografia su musica già esistente ha identità propria, ma non è una nuova composizione della partitura di origine.

## Sentinelle dirette
- Bartók: Flaminio `audit:fl01:bbb:work:excel4274` (pantomima originale *Il mandarino meraviglioso*) vs `...excel4280` (suite orchestrale), e Atlantis `opera:mandarino-suite-1927`. **Derivazione original→suite** plausibile, identità della suite fra i due archivi **HOLD fino a confronto di versioni e date**.
- Ravel: `opera:la-valse-ravel-1920` è una composizione/poème chorégraphique; `produzione:la-valse-rubinstein-nizinska-1929` è un allestimento da distinguere.
- Stravinskij: le produzioni `produzione:sagra-nizinskij-1913` e `produzione:sagra-bausch-1975` rappresentano due coreografie legate a un'opera e non due nuove partiture.
- Ravel: le suites `opera:daphnis-suite-1` e `opera:daphnis-suite-2` sono opere derivate da repertorio scenico; preservare derivazione e identificazione dell'opera originale, non inventare identità.
- Beethoven: `opera:egmont-op84` → musiche di scena; `parte:finale-prometeo-op43` → numero/movimento del balletto.
- Teatro musicale: `produzione:west-side-story-broadway-1957` è produzione teatrale del musical, non film omonimo né fusione con altri allestimenti.
- Altri candidati da verificare: `opera:bolero-ravel-1928`, `opera:don-juan-gluck-angiolini-1761`, `audit:fl01:bbb:work:excel4275` (*Il principe di legno*).

## Output tecnico
`OVERLAY_TASSONOMICO_SCENA_DANZA_2026-11-15.json`: **22 nodi di modellazione proposti** e **42 relazioni proposte** con endpoint verificati nel corpus sorgente (**0 ID mancanti**). Si tratta di un overlay documentario **non ancora consumato dal builder unificato**, non di 22 nuove entità già canonizzate né di 42 relazioni tutte convalidate. Tutte le relazioni hanno gate di produzione chiuso.

## Gate ancora da completare
1. Verificare tutte le composizioni, i generi, le versioni e le produzioni pertinenti tramite il registro dei 2.988 record e le relazioni anche non nominalmente identificate.
2. Recuperare gli archi specialistici Mundi, gli overlay storici e le fonti; distinguere `composed_by`, `choreographed_by`, `performed_in`, `production_of`, `part_of`, `suite_derived_from`, `version_of` e `related_to`.
3. Riconciliare in particolare i nodi Balletto Mundi–Atlantis senza forzare il merge; preservare i tipi di spettacolo francesi.
4. Test: Bartók → pantomima → suite; Ravel → La Valse → produzione coreografica; Stravinskij → Sagra → due coreografie; Musical → West Side Story → produzione, senza far apparire film diversi come stessa opera.
5. Test filtri di navigazione I–V, senza saltare da un autore ad opere altrui attraverso il genere Balletto.
6. Risolvere HOLD o mantenere motivazione documentata, prima di `FAMILY_VALIDATED`.

**Stato finale: IN_REVIEW. Nessuna modifica di produzione; nessuna nuova scheda Flaminio Lotto 2.**
