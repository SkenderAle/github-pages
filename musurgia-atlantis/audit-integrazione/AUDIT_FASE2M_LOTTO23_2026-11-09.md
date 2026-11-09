# Musurgia Atlantis — Fase 2M, Lotto 23

**9 novembre 2026 · branch `main` · solo staging e audit**

Catalogazione semantica di **10 nuove schede**. Totale **90/210**, restanti **120**. In questo lotto 2 voci sono accompagnate da un riscontro esterno pertinente al concetto/esempio; per 8 la verifica storica indipendente rimane **da svolgere**. Nessuna equivalenza con un ID Atlantis certificata.

| ID legacy | Relazioni originali | Stato prova |
|---|---:|---|
| `cappella-giulia-san-pietro-roma` | 2 | category_or_example_supported_not_edges |
| `cappella-principesca-salisburgo-settecento` | 2 | documentary_verification_pending |
| `cappella-saint-donatien-bruges` | 2 | documentary_verification_pending |
| `chapel-royal-inghilterra-stuart` | 2 | documentary_verification_pending |
| `concerti-due-organi-soler-escorial` | 2 | documentary_verification_pending |
| `concertino-arpa-tailleferre-1927` | 2 | documentary_verification_pending |
| `concerto-solistico-oboe-primo-settecento` | 2 | documentary_verification_pending |
| `concerts-deux-violes-sainte-colombe` | 2 | documentary_verification_pending |
| `conservatorio-americano-fontainebleau` | 2 | category_or_example_supported_not_edges |
| `conservatorio-vienna-ottocento` | 2 | documentary_verification_pending |

## Audit storico-semantico e gate
- **Cappella Giulia di San Pietro a Roma** — ente o milieu storico; non ponte personale. Palestrina guida la Cappella Giulia dal 1551 e dal 1571: incarichi distinti e datati. [Fonte](https://www.treccani.it/enciclopedia/pierluigi-da-palestrina-giovanni-detto-anche-il-palestrina_%28Dizionario-Biografico%29/)
- **Cappella di corte e musica sacra di Salisburgo nel Settecento** — ente o milieu storico; non ponte personale. Verificare identità, terminologia, cronologia e rapporti individuali: il contesto non certifica archi. **Fonti individuali ancora da reperire.**
- **Cappella di Saint-Donatien a Bruges nel Rinascimento** — ente o milieu storico; non ponte personale. Verificare identità, terminologia, cronologia e rapporti individuali: il contesto non certifica archi. **Fonti individuali ancora da reperire.**
- **Chapel Royal inglese fra Elisabetta e gli Stuart** — ente o milieu storico; non ponte personale. Verificare identità, terminologia, cronologia e rapporti individuali: il contesto non certifica archi. **Fonti individuali ancora da reperire.**
- **Concerti due organi soler escorial** — raccolta/documento; preservare edizioni e componenti. Verificare identità, terminologia, cronologia e rapporti individuali: il contesto non certifica archi. **Fonti individuali ancora da reperire.**
- **Concertino arpa tailleferre 1927** — opera identificata; separare versioni e rappresentazioni. Verificare titolo, organico, data e varianti; il titolo Concertino non identifica il genere. **Fonti individuali ancora da reperire.**
- **Concerto solistico per oboe nel primo Settecento** — genere/sottotipo; non un'opera singola. Verificare identità, terminologia, cronologia e rapporti individuali: il contesto non certifica archi. **Fonti individuali ancora da reperire.**
- **Concerts deux violes sainte colombe** — raccolta/documento; preservare edizioni e componenti. Verificare identità, terminologia, cronologia e rapporti individuali: il contesto non certifica archi. **Fonti individuali ancora da reperire.**
- **Conservatorio americano di Fontainebleau** — ente o milieu storico; non ponte personale. Conservatorio avviato nel 1921; Boulanger docente dall'inizio e direttrice 1949–79. I singoli rapporti didattici richiedono prove. [Fonte](https://fontainebleauschools.org/history/)
- **Conservatorio viennese e insegnamento della composizione nell’Ottocento** — ente o milieu storico; non ponte personale. Verificare identità, terminologia, cronologia e rapporti individuali: il contesto non certifica archi. **Fonti individuali ancora da reperire.**

## Test strutturali sul registro
- PASS — `ten_records`
- PASS — `unique`
- PASS — `no_previous_record`
- PASS — `all_source_ids_real`
- PASS — `all_gates_closed`
- PASS — `no_equivalence_claimed`
- PASS — `missing_sources_explicit`

**Limiti:** i controlli non provano identità storico-biografica di tutte le voci, non dimostrano che un target sia assente da Atlantis e non approvano nessuno dei singoli archi originari. Confronto integrale Atlantis/Atlante, collaudi `prepare`, `byId`, pivot, livelli I–V, Node `--live` e browser/Android **non eseguiti**.

## Conservazione e prosecuzione
Nessun grafo o renderer pubblico modificato. Preservare 210 lotti storico-filologici, 3.856 archi legacy, 1.718 Atlantis, 509 persone legacy, testi direzionali, note e fonti, 115 media/207 associazioni e 537 URL con ancora. Epoche, scuole, generi e luoghi non diventano ponti automatici; tutti i capitoli restano solo editoriali.

**Prossima ripresa:** Lotto 24, documentato nel proprio file.
