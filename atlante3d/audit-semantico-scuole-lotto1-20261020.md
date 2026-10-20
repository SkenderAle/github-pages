# Musurgia Mundi — Audit semantico delle scuole e tradizioni, lotto 1

**20 ottobre 2026 — branch `main`; HEAD di partenza `d3dedfc266c752795ffd6ea2eb37ba15f351fee7`.**

## Oggetto e metodo

Questo lotto rilegge **35 relazioni** della lente `scuole` su 395 presenti prima dell'intervento: **32 formule bidirezionali specificate** e **3 collegamenti impropri ritirati dalla lente** (ma integralmente archiviati nell'oggetto `semantic_school_audit_20261020` di `relazioni.json`). Restano invariati nodi e archi principali, relazioni di formazione/influenza/collaborazione, URL e ID delle altre relazioni. Non è una verifica filologica completa delle altre 360 relazioni iniziali.

## Tre ricollocazioni

| Legame improprio di scuola | Motivo della correzione | Percorsi ancora raggiungibili |
|---|---|---|
| Luigi Boccherini → Sinfonismo italiano del *primo* Settecento | Categoria cronologicamente errata: 1743–1805, produzione soprattutto cameristica matura | Musica cameristica del Classicismo; corti spagnole; [Treccani DBI](https://www.treccani.it/enciclopedia/luigi-boccherini_%28Dizionario-Biografico%29/) |
| Frank Bridge → Rinascita *operistica* inglese del Novecento | Formò Britten, senza partecipazione alla sua rinascita operistica documentata | Bridge → Britten nella formazione e ricezione di un tema; [RCM](https://www.rcm.ac.uk/research/archivedprojects/frankbridge/); [Britten Pears Arts](https://www.brittenpearsarts.org/news/work-of-the-week-17-variations-on-a-theme-of-frank-bridge) |
| Niccolò Piccinni → Riforma operistica di Gluck | Figura contrapposta nella querelle parigina, non membro della scuola di Gluck | Scuola operistica napoletana, confronto Gluck–Piccinni; [Treccani](https://www.treccani.it/enciclopedia/christoph-willibald-gluck_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/) |

## Trenta-due letture della relazione affinate

| Famiglia | Relazioni | Natura storica esplicitata |
|---|---:|---|
| fiorentina- | 2 | `cerchia-storica-distinta` |
| mannheim- | 4 | `pratica-orchestrale-istituzionale` |
| viennese-classica- | 3 | `categoria-storiografica-retrospettiva` |
| dei-cinque- | 5 | `sodalizio-effettivo` |
| seconda-scuola-vienna- | 3 | `nucleo-formativo-compositivo` |
| dei-sei- | 6 | `gruppo-storico-documentato` |
| darmstadt- | 5 | `frequenza-corsi-e-rete-di-confronto` |
| minimalismo- | 4 | `orientamento-estetico-non-sodalizio` |

- Camerata di Bardi e ambiente di Corsi: non sono un'unica assemblea storica; la posizione di Caccini e Peri è diversa. [Treccani, ricostruzione storica](https://www.treccani.it/enciclopedia/la-camerata-de-bardi_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/).
- Classicismo viennese: categoria storiografica, a differenza del nucleo reale di Schönberg, Berg e Webern; non trasformare la triade di Haydn, Mozart, Beethoven in un'accademia.
- I Cinque e Les Six: membri effettivi di specifici gruppi, con percorsi estetici anche differenti. [Treccani, Cinque](https://www.treccani.it/enciclopedia/gruppo-dei-cinque/), [Treccani, Sei](https://www.treccani.it/enciclopedia/gruppo-dei-sei/).
- Mannheim: attività strumentale e compagine orchestrale, non luogo di nascita o rapporto di parentela.
- Darmstadt: partecipazione a corsi e rete di discussione, non scuola formale dagli insegnamenti uniformi.
- Minimalismo: classificazione estetica e musicologica di compositori individuali, non iscrizione a un sodalizio. [Treccani](https://www.treccani.it/enciclopedia/minimal-music_%28Enciclopedia-Italiana%29/).

Ogni relazione aggiornata conserva esattamente `id`, `kind`, direzione `source→target`, `note`, `sources` originali. Le formulazioni precedenti sono recuperabili in `semantic_review`. La nuova etichetta `natura_semantica` descrive il tipo di connessione senza sostituire il campo storico `kind`.

## Risultati da validare

- Relazioni delle scuole: **395 → 392**.
- Relazioni specialistiche complessive: **1.391 → 1.388**.
- Archi del grafo principale: **1.969**, invariati.
- Nodi: **843**, compositori: **393**, invariati.
- Verifica di regressione indipendente: `node atlante3d/database/verifica-audit-semantico-scuole.mjs`; esecuzione aggiunta alla GitHub Actions originale.
- Restano da esaminare singolarmente le altre **360 relazioni** della lente prima del lotto; 32 revisioni semantiche non equivalgono a verifica complessiva.

## Criteri per proseguire

Proseguire nelle reti di cappelle, conservatori, scuole rinascimentali e tradizioni moderne; distinguere sempre appartenenza istituzionale, attività professionale, circolazione del repertorio, formazione, scuola storiografica, influsso stilistico. Non introdurre un membro di gruppo basandosi solo su luogo e periodo; non eliminare la fonte originaria anche quando il legame viene ritirato.
