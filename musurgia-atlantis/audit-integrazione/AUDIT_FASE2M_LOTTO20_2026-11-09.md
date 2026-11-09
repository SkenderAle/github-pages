# Musurgia Atlantis — Fase 2M, Lotto 20

**9 novembre 2026 · solo audit-integrazione, branch main**

## Ambito e corretto livello di prova
Screening di 10 nuovi record sorgente, non ripetuti. Avanzamento cumulativo 60/210, rimasti 150. Il registro conserva le etichette, il numero originale di archi incidenti e le categorie del Lotto 14. Soltanto 1 voci di questo lotto hanno qui un riferimento storico esplicito; le altre 9 richiedono ricerca documentale indipendente. Nessun target Atlantis è stato certificato e nessun arco approvato.

| Concetto legacy | Archi | Evidenza |
|---|---:|---|
| `forma-nuevo-tango` | 4 | pending |
| `impressionismo` | 4 | pending |
| `scrittura-dodecafonica-italiana` | 4 | pending |
| `scuola-contrappunto-viennese` | 4 | pending |
| `scuola-nazionale-ungherese-novecento` | 4 | pending |
| `sturm-und-drang` | 4 | pending |
| `tradizione-cembalistica-iberica` | 4 | pending |
| `accademia-degli-unisoni` | 3 | direct_institutional |
| `accademie-domestiche-milano-settecento` | 3 | pending |
| `cappella-corte-innsbruck-seicento` | 3 | pending |

## Cautele filologiche
- **Nuevo tango · linguaggio di Piazzolla** — Piazzolla's stylistic synthesis not equivalent to all traditional tango repertory or one named work. (documentazione specifica ancora aperta)
- **Impressionismo musicale** — Impressionism as retrospective musical label; Ravel/Debussy not presumed to accept identical categories. (documentazione specifica ancora aperta)
- **Ricezione italiana della dodecafonia** — Italian reception of twelve-tone method distinct from Schoenberg's original formulation and serial music. (documentazione specifica ancora aperta)
- **Tradizione contrappuntistica viennese settecentesca** — A pedagogical tradition is not a formal single institution. (documentazione specifica ancora aperta)
- **Scuola nazionale ungherese del Novecento** — The national idiom, fieldwork, and individual compositional methods are separate categories. (documentazione specifica ancora aperta)
- **Sturm und Drang** — Literary movement and musical stylistic descriptor have overlapping but non-identical chronologies and membership. (documentazione specifica ancora aperta)
- **Clavicembalo iberico e corte di Madrid** — Iberian harpsichord and Madrid court practices; require specific service/works before interpersonal links. (documentazione specifica ancora aperta)
- **Accademia degli Unisoni · Venezia 1637** — Giulio Strozzi launched Unisoni in 1637, Barbara performed and participated; Unisoni is not identical with Incogniti. [Fonte](https://www.treccani.it/enciclopedia/barbara-strozzi_%28Dizionario-Biografico%29/)
- **Accademie domestiche musicali della Milano settecentesca** — Plural informal domestic academies should not be merged into one institution. (documentazione specifica ancora aperta)
- **Cappella di corte di Innsbruck nel Seicento** — Court chapel as institution; date/sovereign/service need source-level evidence. (documentazione specifica ancora aperta)

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
