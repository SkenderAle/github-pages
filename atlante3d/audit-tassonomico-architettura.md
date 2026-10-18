# Musurgia Mundi — Architettura tassonomica, proposta operativa

Stato: 18 ottobre 2026. Documento progettuale successivo al censimento di 303 nodi. **Non è una migrazione applicata.** Non modificare ancora i nodi, i colori o gli archi.

## Principio di navigazione
Poche macrocategorie per periodo, **non** una proliferazione di etichette strumentali. I compositori rimangono nodi unici con eventuali appartenenze storiche plurime motivate; gli approfondimenti non diventano automaticamente archi diretti visibili dal compositore. I grandi generi attraversano più periodi senza duplicazioni.

## Ingressi storici — proposta da approvare

| Periodo già presente | Macrocategorie di navigazione |
|---|---|
| Medioevo | Canto liturgico e monodia sacra; Polifonia e forme del comporre; Lirica profana; Dramma e rappresentazione |
| Rinascimento | Polifonia sacra; Musica vocale profana; Musica strumentale; Ambienti musicali di corte e cappella |
| Barocco | Teatro musicale; Musica sacra e oratorio; Musica strumentale e concerto; Musica vocale da camera |
| Classicismo | Sinfonismo e orchestra; Sonata e musica da camera; Concerto; Teatro musicale; Musica sacra |
| Romanticismo | Sinfonismo e musica a programma; Pianoforte e virtuosismo; Musica da camera; Lied e vocalità; Teatro musicale |
| Post-romanticismo | Espansione sinfonica; Teatro e dramma musicale; Tradizioni nazionali e modernismi; Verso la sperimentazione |
| Novecento | Musica strumentale e nuove poetiche; Teatro musicale; Elettronica ed elettroacustica; Jazz e tradizioni afroamericane; Cinema e media |

Le macrocategorie sono **filtri editoriali di lettura**, non appartenenze stilistiche necessarie né nuove forme canoniche. Scuole, istituzioni e tecniche costituiscono **dimensioni parallele** della rete.

## Concetti generali trasversali da controllare prima dell'aggiunta

- Forme/ambiti strumentali: sinfonia, sonata, **forma-sonata** (distinta dal genere sonata), concerto, concerto solistico, concerto grosso, suite, musica da camera, quartetto, trio, quintetto, fantasia, ricercare, fuga, toccata, preludio, rondò, variazioni, passacaglia, ciaccona, scherzo, studio, notturno, rapsodia, poema sinfonico, ouverture, divertimento e serenata.
- Vocalità e sacro: canto liturgico, messa, mottetto, cantata, oratorio, corale, Lied, mélodie, chanson, frottola, madrigale, lauda, villancico, anthem, passione e requiem.
- Teatro: opera, dramma per musica, opera seria, opera buffa, dramma giocoso, singspiel, tragédie en musique, grand opéra, opéra-comique, operetta, musical, masque, balletto.
- Tradizioni afroamericane: spiritual, blues, ragtime, gospel, jazz, swing, bebop, cool jazz, hard bop, jazz modale, free jazz, fusion. Le relazioni genealogiche fra questi termini richiedono cautela e fonti; nessun modello lineare semplicistico.

**Attenzione:** non tutti i termini sopra sono generi: alcuni sono forme, tipi, pratiche o famiglie di repertori. Nel database vanno dichiarati con attributi diversi.

## Indicazioni tecniche sul grafo corrente

- Nodi: 824 in totale, dei quali 303 attualmente `type=corrente`.
- Archi in `grafo.json`: 1168.
- Archi incidenti sui 303 nodi: **370**; nodi di tale gruppo privi di archi *nel solo file principale*: **187**.
- Gli altri file di dati e il codice di visualizzazione possono aggiungere o derivare relazioni: **non interpretare 187 come nodi complessivamente isolati**.
- L'endpoint di lettura di `relazioni.json` non ha restituito contenuto in questa verifica; quindi la mappa delle dipendenze **non è completa** e non autorizza accorpamenti distruttivi.

## Sequenza di intervento sicura

1. Completare la verifica analitica del lotto 1 (1–60), ancora pubblicato solo in sintesi, e validare il sistema di categorie.
2. Inventariare archi di tutti i livelli/lenti, collegamenti URL e riferimenti di consultazione prima di cambiare qualunque ID.
3. Introdurre gradualmente i soli nodi generali effettivamente mancanti: prima concerto, sonata, sinfonia, suite; poi famiglie vocali, sceniche e novecentesche.
4. Per ogni specializzazione distinguere **concetto subordinato** da **esempio/approfondimento**; preservare per esempio la peculiarità del concerto grosso e non assimilare tutte le sonate a una stessa forma-sonata.
5. Eseguire una migrazione reversibile e testare la selezione, l'esplosione della rete, le viste filtrate e i link bidirezionali.
6. Scegliere gli archi mostrati nella vista essenziale: solo relazioni storiche più importanti e documentate; le altre restano interrogabili in profondità.

## Esempi di prova della navigazione

- **Vivaldi:** unico compositore; Barocco + musica strumentale, teatro musicale e sacra solo ove attestato; concerto come grande genere, senza frecce ridondanti verso ogni concerto per organico.
- **Beethoven:** unico compositore; radicamento classico + eredità romantica distinta da un'appartenenza storica indifferentemente doppia.
- **Concerto solistico per oboe del primo Settecento:** approfondimento contestualizzato del concerto, non genere autonomo.
- **Má vlast:** ciclo di opere, non sinonimo di poema sinfonico.
- **Scuola di Mannheim:** scuola/contesto storico, non sottogenere della sinfonia.

## Esito attuale

Prima architettura proposta; **nessuna modifica funzionale è stata applicata**. Serve convalida della modellazione delle relazioni e dell'inventario delle lenti prima del passaggio esecutivo.
