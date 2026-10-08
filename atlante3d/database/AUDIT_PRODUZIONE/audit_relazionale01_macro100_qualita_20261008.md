# MUSURGIA MUNDI — Audit relazionale 01 · controllo del primo macroblocco

Data: 8 ottobre 2026 · Ramo: `audit-produzione-correttivo-01` · Checkpoint precedente: `07c5b6dd005b5bc6efb24dbb640fa5d6cff1ced7`.

## Perimetro

Ricognizione strutturale di **377 relazioni specialistiche distinte** incidenti su almeno uno dei 100 identificativi persistenti congelati. **Non equivale** a validazione filologica integrale delle 377 relazioni.

### Stato del file
- `relazioni.json` conserva **1280 relazioni complessive**, come prima dell'intervento: **nessuna relazione creata o cancellata**.
- Gruppi incidenti: {"formazione":84,"influenze":74,"collaborazioni":76,"genealogie":57,"scuole":86}.
- Stati preesistenti incidenti: {"documentato":374,"documentato-con-cautela-testimoniale":2,"documentato-con-cautela":1}. Queste etichette descrivono il database, **non** 374 verifiche documentali concluse in questa sessione.
- Relazioni senza note: **0**. Senza fonti URL: **0**. Estremi inesistenti: **0**. ID di relazione duplicati: **0**.
- Coppie identiche di `(group,source,target,kind)`: **0**; coppie duplicate di `(group,source,target)` con `kind` differente: **1**.

## Fonti contestuali sostituite in prima posizione
Sono stati **migliorati 9 collegamenti** con una fonte specifica al soggetto/autore, mantenendo la precedente fonte generica al secondo posto per preservarne la provenienza. Non è cambiata la natura o la direzione del legame e non si è promosso alcuno stato.

| # | Identificativo | Soggetto pertinente | Fonte primaria mirata | Vecchia fonte conservata |
|---:|---|---|---|---|
| 1 | `gen-opera-seria-alessandro-scarlatti` | Alessandro Scarlatti | [Nuova fonte](https://www.treccani.it/enciclopedia/alessandro-scarlatti_%28Dizionario-Biografico%29/) | [Fonte contestuale conservata](https://www.treccani.it/enciclopedia/opera/) |
| 2 | `cat-scuole-madrigalismo-cinquecentesco-carlo-gesualdo` | Carlo Gesualdo | [Nuova fonte](https://www.treccani.it/enciclopedia/gesualdo-carlo-principe-di-venosa-conte-di-consa/) | [Fonte contestuale conservata](https://www.treccani.it/enciclopedia/madrigale/) |
| 3 | `cat-scuole-madrigalismo-cinquecentesco-claudio-monteverdi` | Claudio Monteverdi | [Nuova fonte](https://www.treccani.it/enciclopedia/claudio-monteverdi_%28Enciclopedia-Italiana%29/) | [Fonte contestuale conservata](https://www.treccani.it/enciclopedia/madrigale/) |
| 4 | `cat-scuole-stile-galante-e-sensibile-carl-philipp-emanuel-bach` | Carl Philipp Emanuel Bach | [Nuova fonte](https://www.treccani.it/enciclopedia/carl-philipp-emanuel-bach_%28Storia-della-civilta-europea-a-cura-di-Umberto-Eco%29/) | [Fonte contestuale conservata](https://www.treccani.it/enciclopedia/storia-della-musica/) |
| 5 | `cat-scuole-tradizione-operistica-francese-ottocento-daniel-francois-esprit-auber` | Daniel-François-Esprit Auber | [Nuova fonte](https://www.treccani.it/enciclopedia/daniel-francois-esprit-auber/) | [Fonte contestuale conservata](https://www.treccani.it/enciclopedia/opera/) |
| 6 | `cat-scuole-tradizione-operistica-francese-ottocento-charles-gounod` | Charles Gounod | [Nuova fonte](https://www.treccani.it/enciclopedia/charles-francois-gounod/) | [Fonte contestuale conservata](https://www.treccani.it/enciclopedia/opera/) |
| 7 | `cat-scuole-tradizione-operistica-francese-ottocento-camille-saint-saens` | Camille Saint-Saëns | [Nuova fonte](https://www.treccani.it/enciclopedia/camille-saint-saens/) | [Fonte contestuale conservata](https://www.treccani.it/enciclopedia/opera/) |
| 8 | `cat-scuole-sinfonismo-tardoromantico-anton-bruckner` | Anton Bruckner | [Nuova fonte](https://www.treccani.it/enciclopedia/anton-bruckner/) | [Fonte contestuale conservata](https://www.treccani.it/enciclopedia/storia-della-musica/) |
| 9 | `audit8f-madrigale-monteverdi` | Claudio Monteverdi | [Nuova fonte](https://www.treccani.it/enciclopedia/claudio-monteverdi_%28Enciclopedia-Italiana%29/) | [Fonte contestuale conservata](https://www.treccani.it/enciclopedia/madrigale/) |

## Redundanza didattica da riesaminare
- **Anton Rubinstein → Pëtr Il'ič Čajkovskij**, gruppo `formazione`: `lotto03-form-rubinstein-tchaikovsky` (`maestro-allievo`) e `audit20-rubinstein-tchaikovsky-formazione` (`strumentazione-e-composizione-conservatorio-pietroburgo`). Entrambi i testi descrivono l'insegnamento personale, pur aggiungendo precisazioni distinte. **Candidato a ricomposizione editoriale**, non eliminato e non declassato senza confronto puntuale delle fonti.

La duplicazione semantica, distinta dai duplicati esatti, può produrre due frecce per la stessa coppia di musicisti. Prima di un'eventuale fusione andranno conservati entrambe le testimonianze, le specializzazioni disciplinari e l'identificativo storico di ciascun record, senza perdere provenienza.

## Riuso delle fonti non equivale a prova della singola relazione
Sono registrati **355 URL distinti** nelle relazioni incidenti, dopo l'aggiunta delle fonti mirate. Il riuso di un saggio è lecito quando il testo prova ogni rapporto, ma richiede un controllo per ogni arco. Fonti ripetute almeno cinque volte: 7× https://www.treccani.it/enciclopedia/musica-e-musicisti_%28Storia-di-Venezia%29/; 7× https://www.treccani.it/enciclopedia/alfredo-casella_%28Dizionario-Biografico%29/; 5× https://www.treccani.it/enciclopedia/opera/; 5× https://www.treccani.it/enciclopedia/antonio-caldara_%28Dizionario-Biografico%29/; 5× https://www.treccani.it/enciclopedia/galuppi-baldassarre-detto-il-buranello_%28Dizionario-Biografico%29/.

La priorità del prossimo passaggio critico è verificare l'effettiva corrispondenza testuale e la direzione dei collegamenti in `formazione` (84 relazioni), quindi influenze (74), collaborazioni (76), genealogie (57), scuole (86). Senza prova specifica, rimanere in verifica invece di considerare automaticamente valido lo status preesistente.

## Vincoli preservati
Nessuna variazione a `grafo.json`, ai nodi geografici, al visualizzatore, ai colori, alla tassonomia delle tre lenti o al ramo `main`. Nessuna fusione di archi potenzialmente distinti senza revisione.
