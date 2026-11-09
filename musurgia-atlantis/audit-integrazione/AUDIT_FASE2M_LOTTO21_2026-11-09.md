# Musurgia Atlantis — Fase 2M, Lotto 21

**9 novembre 2026 · solo audit-integrazione, branch main**

## Ambito e corretto livello di prova
Screening di 10 nuovi record sorgente, non ripetuti. Avanzamento cumulativo 70/210, rimasti 140. Il registro conserva le etichette, il numero originale di archi incidenti e le categorie del Lotto 14. Soltanto 0 voci di questo lotto hanno qui un riferimento storico esplicito; le altre 10 richiedono ricerca documentale indipendente. Nessun target Atlantis è stato certificato e nessun arco approvato.

| Concetto legacy | Archi | Evidenza |
|---|---:|---|
| `cappella-imperiale-vienna-primo-settecento` | 3 | pending |
| `chanson-borgognona-quattrocento` | 3 | pending |
| `fantasie-consort-viole-gibbons` | 3 | pending |
| `forma-concertino-novecento` | 3 | pending |
| `forma-musica-vocale-sacra-novecento` | 3 | pending |
| `forma-rapsodia-orchestrale` | 3 | pending |
| `forma-tango-argentino` | 3 | pending |
| `musica-del-rumore-futurista` | 3 | pending |
| `musica-di-corte-spagnola-settecento` | 3 | pending |
| `opera-of-nobility-londra-1733` | 3 | pending |

## Cautele filologiche
- **Cappella imperiale viennese del primo Settecento** — Dynastic chapel and city-wide music context are distinct; individual appointments require sources. (documentazione specifica ancora aperta)
- **Chanson della corte di Borgogna nel Quattrocento** — Burgundian court context and chanson genre are neither identical nor transitive between all composers. (documentazione specifica ancora aperta)
- **Fantasie per quattro viole · consort inglese** — Gibbons consort fantasies are repertory/work group; distinguish named compositions and editions. (documentazione specifica ancora aperta)
- **Concertino strumentale novecentesco** — Concertino may denote a formal work title or small-scale concerto subtype: discriminate work/type. (documentazione specifica ancora aperta)
- **Musica vocale e sacra novecentesca** — Broad scope includes different genres, faith contexts and compositional techniques; not one genre. (documentazione specifica ancora aperta)
- **Rapsodia orchestrale ottocentesca** — Orchestral rhapsody is narrower than rhapsody genre, not a synonymous identity. (documentazione specifica ancora aperta)
- **Tango argentino · tradizione musicale e danza** — Tango encompasses dance and musical practices across periods; distinct from nuevo tango. (documentazione specifica ancora aperta)
- **Musica del rumore e intonarumori futuristi** — Futurist noise praxis/intonarumori, separate from futurism movement and individual compositions. (documentazione specifica ancora aperta)
- **Musica da camera delle corti spagnole del Settecento** — Court patronage in eighteenth-century Spain needs specific monarch/place/appointments. (documentazione specifica ancora aperta)
- **Opera of the Nobility · Londra, dal 1733** — Opera of the Nobility is a specific London opera company founded in 1733, not a genre or single staged opera. (documentazione specifica ancora aperta)

## Test e protezione
- PASS `source_210_preserved`
- PASS `prior_40_count`
- PASS `thirty_new_unique`
- PASS `no_repeated_source_ids`
- PASS `all_types_real`
- PASS `no_merge_approved`

Test sopra = coerenza del registro, non Node, browser, fonti archivistiche per singoli archi o effettivo import. Non modificati i grafi pubblici. Ogni periodo, genere, scuola, istituzione è contesto non ponte universale; capitoli solo editoriali.

## Prossimo passo
Verificare adiacenze originali e Atlantis complete e fonti individuali; eseguire test staging reversibile `prepare`, `byId`, pivot singolo e profondità I–V. Zero merge finché questi gate non sono superati.
