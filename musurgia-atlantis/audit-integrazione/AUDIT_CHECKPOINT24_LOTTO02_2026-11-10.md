# Checkpoint 24 — Lotto 02: insegnamenti, collaborazioni e ricezioni mediate
**Data:** 10 novembre 2026 · **Branch:** main · **Solo staging; produzione invariata.**

## Nuove verifiche individuali
Sono stati riesaminati **12** archi del pool di **233** con identità già riconciliate nel Checkpoint21, partendo dagli originali delle otto partizioni `federazione-v1/archi-01..08.json`. Dopo il Lotto01: **24/233** esaminati, **209** ancora da rivedere nel pool. I 12 presentano riscontri esterni specifici del nucleo storico; **due richiedono cautele cronologiche**. Non equivale a certificazione definitiva di tutti i testi legacy.

| ID | Rapporto | Riscontro | Cautela |
|---|---|---|---|
| fd:ms:78 | Rimskij-Korsakov → Stravinskij | Lezioni private di composizione e strumentazione, Treccani/Oxford | Non equiparare a percorso conservatoriale |
| fd:ms:81 | Messiaen → Boulez | Classe di armonia del Conservatorio, IRCAM 1944 | Distinguere da formazione con Leibowitz/Vaurabourg |
| fd:ms:82 | Schönberg → Berg | Arnold Schönberg Center e Library of Congress | Legacy 1904–1910; LOC indica 1904–1911 |
| fd:ms:83 | Schönberg → Webern | Schönberg Center, dall'autunno 1904 | Non dedurre coincidenza di metodi futuri |
| fd:ms:104 | Berio → Reich | Testimonianza Reich, Mills College 1962–63 | Non dedurre genealogia estetica automatica |
| fd:ms:190 | Willaert → Zarlino | Treccani, Venezia 1541 | Insegnamento, non mero contesto veneziano |
| fd:ms:340 | Paganini → Liszt | Morgan Library: ascolto a Parigi e influenza sul virtuosismo | **1832** nella Morgan rispetto al **1831** nel legacy; data da rettificare con esame delle testimonianze |
| fd:ms:439 | Schönberg → Cage | Studio accademico Neff 2015, marzo 1935–gennaio 1937 | Distinguere formazione da successivi orientamenti estetici |
| fd:ms:469 | Zelter → Mendelssohn | Yale Music Library | Data iniziale precisa 1819 legacy non attestata nella fonte sintetica consultata |
| fd:ms:490 | Verdi ↔ Boito | Archivi Ricordi/Morgan, Otello e Falstaff; revisione Simon Boccanegra | L'arco legacy va letto nei versi compositore/librettista |
| fd:ms:533 | Musorgskij → Ravel | Boston Symphony, orchestrazione Quadri nel 1922 | **Ricezione postuma** mediata dalla partitura, non relazione personale |
| fd:ms:671 | Britten ↔ Montagu Slater | Editore Boosey & Hawkes, Peter Grimes 1945 | George Crabbe autore del testo poetico di partenza, Slater librettista |

Registro machine-readable: `CONVALIDA_ARCHI_FASE24_LOTTO02_2026-11-10.json`. Ogni record conserva ID, identificatori originali e riconciliati, predicato, `forward`, `reverse`, nota, fonti e riferimento indipendente.

## Sentinella supplementare Gabrieli–Schütz: collisione tra archivi, NON parte dei 12
- `fd:mb:412` (Mundi base) `maestro-allievo`: niente testo o fonte esplicita nel payload.
- `fd:ms:192` (Mundi specialistico) `insegnamento-documentato`: contiene `forward`, `reverse`, nota e fonte originale.
- **Un solo fatto storico**: Heinrich Schütz studiò con Giovanni Gabrieli a Venezia, 1609–1612, secondo Internationale Heinrich-Schütz-Gesellschaft e Heinrich-Schütz-Haus Weißenfels.
- L'esame di tutti i **1.718 archi Atlantis** nelle partizioni non individua un collegamento diretto Gabrieli→Schütz. Non asserire che il grafo pubblico contenga già tale arco.
- Nell'inventario Checkpoint21 i due record compaiono in code diverse: `needs_independent_source` per il base; `needs_identity_review` per lo specialistico (Schütz è ancora nuovo candidato nel crosswalk). Le due fonti non costituiscono due eventi né possono essere entrambe promosse indiscriminatamente. Occorre prima completare il gate d'identità e creare una sola relazione storica con **due provenienze**, conservando i testi specialistici.

## Fonti esterne
- Treccani Stravinskij: https://www.treccani.it/enciclopedia/igor-stravinskij_%28Enciclopedia-Italiana%29/
- IRCAM Boulez: https://www.ircam.fr/fr/magazine/la-vie-de-pierre-boulez-en-etincelles
- Schönberg Center timeline: https://schoenberg.at/en/component/content/article/bio-en
- Library of Congress Schoenberg: https://findingaids.loc.gov/repositories/15/resources/1011
- Centro Studi Luciano Berio / Reich: https://www.lucianoberio.org/en/steve-reich/
- Treccani Zarlino: https://www.treccani.it/enciclopedia/gioseffo-zarlino/
- Morgan Library Paganini-Liszt: https://www.themorgan.org/exhibitions/liszt-in-paris
- Neff, Cage e Schönberg: https://www.tandfonline.com/doi/full/10.1080/07494467.2014.998414
- Yale Zelter–Mendelssohn: https://musiclib-exhibits.library.yale.edu/exhibits/mendelssohn/zelter.htm
- Ricordi/Morgan Verdi Boito: https://www.themorgan.org/exhibitions/verdi
- Boston Symphony Quadri: https://www.bso.org/works/pictures-at-an-exhibition
- Boosey & Hawkes Peter Grimes: https://www.boosey.com/pages/opera/moreDetails?musicID=7101
- Internationale Heinrich-Schütz-Gesellschaft: https://www.schuetzgesellschaft.de/?page_id=187
- Heinrich-Schütz-Haus: https://schuetzhaus-weissenfels.de/en/museum-english/heinrich-schutz-haus/

## Integrità e decisioni
**10/10 test di readback/struttura superati**: 12 record, unicità, fonti indipendenti, frasi originali complete, gate chiusi, coerenza pool, due cautele cronologiche, doppia provenienza Gabrieli–Schütz correttamente preservata. Questo non è un test browser.

**Nessun arco promosso**. Non alterati `musurgia-atlantis/grafo.json`, `index.html`, `atlante3d/`, pagine Mundi o i **210 lotti** storici.

**Prossima ripresa:** Lotto03 dai **209** rimasti, privilegiando altre testimonianze dirette e relazioni che richiedono opere intermediarie. Separatamente, convalidare la nuova identità Schütz e definire deduplicazione semantica `fd:mb:412`/`fd:ms:192` prima di aggiornare qualsiasi interfaccia.
