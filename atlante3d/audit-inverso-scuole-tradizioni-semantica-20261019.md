# Musurgia Mundi — Audit inverso di scuole e tradizioni: coerenza semantica

**19 ottobre 2026 · Branch main · Stato iniziale ae973a2012035dc82f310992d2a4ec28d2dec5c9.**

## Esito e perimetro

- Nodi nel grafo storico: **842**; archi storici: **1929**, invariati.
- Relazioni totali in `relazioni.json`: **1388**; gruppo scuole prima del lotto: **400** con fonte e status documentato, dopo il lotto: **391**.
- Sovrapposizioni storiche fra gli archi di scuola del grafo e quelli specialistici prima delle correzioni: **141**; dopo le correzioni: **141**. Sono alternative rappresentazioni della stessa coppia, non errori nel database.
- L'interfaccia ora visualizza una sola volta le coppie storico/specialistiche con appartenenze di scuola; prevale il rapporto della lente con note, fonti e verbi specifici.
- Nessun ID inesistente, nessun ID di relazione ripetuto, nessuna relazione documentata priva di fonte riscontrati.

## Correzioni semantiche

| Relazione | Intervento | Motivazione |
|---|---|---|
| `ponte-gruppo-cinque-stravinskij` | Cambio lente scuole → influenze | Stravinskij fu allievo di Rimskij-Korsakov, ma non componente del Gruppo dei Cinque. |
| `lotto02-sc-galuppi-opera` | Cambio lente scuole → influenze | Galuppi operò a Venezia e recepì modelli napoletani: ricezione, non appartenenza alla scuola operistica napoletana. |
| `lotto02-sc-somis-french` | Cambio lente scuole → influenze | Somis guidava la tradizione violinistica piemontese, trasmessa da allievi nel contesto francese: verso dell'influenza corretto. |
| `audit21-organistica-sweelinck` | Cambio lente scuole → influenze | Sweelinck, olandese, fu antecedente dei maestri organisti tedeschi, non componente della tradizione tedesca per appartenenza geografica. |
| `catalogo-riforma-operistica-gluck-antonio-salieri` | Cambio lente scuole → influenze | Ricezione delle innovazioni drammaturgiche gluckiane, non iscrizione a una scuola istituzionale. |
| `lotto02-sc-leclair-italy` | Cambio lente scuole → influenze | Leclair apprese in ambito piemontese e trasferì pratiche in Francia; un collegamento d'influenza è più accurato di un'appartenenza italiana univoca. |
| `catalogo-riforma-operistica-gluck-niccolo-piccinni` | Sospensione (testo conservato) | Piccinni rappresentò il polo contrapposto a Gluck nella querelle: relazione conservata documentalmente, ma non visualizzata come appartenenza né come influenza dimostrata. |
| `lotto02-sc-boccherini-italy` | Sospensione (testo conservato) | Boccherini appartiene alla cultura strumentale della seconda metà del Settecento; il nodo riguarda il primo Settecento. Si conserva la documentazione ma si sospende l'appartenenza. |
| `daily01-bridge-british` | Sospensione (testo conservato) | Bridge fu importante soprattutto per la formazione di Britten; collegarlo direttamente alla rinascita operistica del Novecento senza opera specifica sarebbe una sovraestensione. |
| `scuola-viennese-classica-joseph-haydn` | Rafforzata fonte storiografica | Categoria storiografica, non sodalizio formale; aggiunta fonte Treccani specificamente pertinente al classicismo. |
| `scuola-viennese-classica-wolfgang-amadeus-mozart` | Rafforzata fonte storiografica | Categoria storiografica, non sodalizio formale; aggiunta fonte Treccani specificamente pertinente al classicismo. |
| `scuola-viennese-classica-ludwig-van-beethoven` | Rafforzata fonte storiografica | Categoria storiografica, non sodalizio formale; aggiunta fonte Treccani specificamente pertinente al classicismo. |

## Controlli ed esclusioni deliberate

Le relazioni spostate nella lente delle influenze **non** attestano iscrizione, affiliazione o appartenenza formale; le note originarie rimangono associate ai record. Le relazioni contestuali sospese **non sono eliminate**: conservano testo e fonti per una futura gestione di relazioni di confronto e genealogia senza falsi archi di appartenenza.

In particolare la prima scuola di Vienna è **categoria storiografica**, non un'organizzazione: la fonte Treccani `https://www.treccani.it/enciclopedia/classicismo/` è stata aggiunta alle tre associazioni canoniche Haydn–Mozart–Beethoven.

## Verifiche residue

- Controllare singolarmente le appartenenze rispetto a istituzioni documentate, gruppi formalizzati e tradizioni retrospettive; evitare di uniformarle.
- Verificare in browser gli archi filtrati e la rappresentazione grafica a scuola selezionata, compreso il ritorno navigazionale.
- Non dedurre alcuna appartenenza da una semplice fonte biografica, prossimità geografica, allievo comune o similitudine stilistica.
