# Musurgia Atlantis — Fase 2M, Lotto 19

**9 novembre 2026 · solo audit-integrazione, branch main**

## Ambito e corretto livello di prova
Screening di 10 nuovi record sorgente, non ripetuti. Avanzamento cumulativo 50/210, rimasti 160. Il registro conserva le etichette, il numero originale di archi incidenti e le categorie del Lotto 14. Soltanto 3 voci di questo lotto hanno qui un riferimento storico esplicito; le altre 7 richiedono ricerca documentale indipendente. Nessun target Atlantis è stato certificato e nessun arco approvato.

| Concetto legacy | Archi | Evidenza |
|---|---:|---|
| `scuola-franckiana-parigi` | 5 | contextual |
| `scuola-violinistica-francese` | 5 | pending |
| `teatro-san-bartolomeo-napoli` | 5 | direct_historical_context |
| `tradizione-operistica-francese-barocca` | 5 | pending |
| `tradizione-viola-da-gamba-francese` | 5 | pending |
| `vereinigung-schaffender-tonkuenstler-1904` | 5 | direct_institutional |
| `villancico-rinascimentale-iberico` | 5 | pending |
| `belcanto-rossini-colbran-napoli` | 4 | pending |
| `collegium-musicum-lipsia` | 4 | direct_institutional |
| `etnomusicologia-campo-ungheria-bartok-kodaly` | 4 | pending |

## Cautele filologiche
- **Scuola franckiana di Parigi** — Franck and disciples are historiographic/pedagogical milieu, not proof of every personal student relationship. (documentazione specifica ancora aperta)
- **Scuola violinistica francese del Settecento** — Distinguish French violin repertory and individual teaching lines; not one formal entity. (documentazione specifica ancora aperta)
- **Teatro San Bartolomeo di Napoli** — San Bartolomeo documented as Neapolitan opera venue prior to San Carlo opening 4 Nov 1737; do not identify the venues. [Fonte](https://www.treccani.it/enciclopedia/napoli_%28Enciclopedia-Italiana%29/)
- **Teatro musicale francese del Barocco** — Distinguish tragédie en musique, court practices and public theatres. (documentazione specifica ancora aperta)
- **Scuola francese della viola da gamba** — Sainte-Colombe and Marais demand separately evidenced teacher/pupil and repertory links. (documentazione specifica ancora aperta)
- **Vereinigung schaffender Tonkünstler · Vienna 1904** — Constituent meeting 23 April 1904; Zemlinsky and Schoenberg associated with society; Mahler honorary status cannot imply actual membership of every participant. [Fonte](https://www.schoenberg-ue.at/ue/letters/letter.12381)
- **Villancico** — Separate sixteenth-century polyphonic Iberian genre and later Christmas villancico; not a single work. (documentazione specifica ancora aperta)
- **Rossini e Colbran · prassi del belcanto** — Colbran/Rossini is specific career/repertory context, not equivalent to whole bel canto tradition. (documentazione specifica ancora aperta)
- **Collegium musicum di Lipsia** — Bach led Schott's Leipzig Collegium from March 1729 at Zimmermann coffeehouse; do not conflate with a compositional school. [Fonte](https://www.bach-leipzig.de/de/node/3231)
- **Raccolta sul campo e studio dei canti popolari · Ungheria** — Separate source collecting practice, individual recorded field trips, subsequent composition and musical nationalism. (documentazione specifica ancora aperta)

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
