# MUSURGIA ATLANTIS — Audit Fase 2E: riscontro di 18 identità, famiglie musicali e varianti d'autorità
**Data:** 8 novembre 2026 · **Branch:** `main` · **Stato:** audit in staging, nessuna modifica ai dati di produzione.

## Esito certificato in questa tranche

Si riparte dalla Fase 2D, che aveva **16** nominativi nominalmente coincidenti con riscontro esterno e **139** nominativi ancora pendenti, su **155** candidati nominali. La Fase 2E esamina ulteriori **18** coppie, tutte presenti nel registro Fase 2D e lì contrassegnate `pending_independent_historical_review`. Per tutte le 18 si è identificato un riscontro documentario o d'autorità che sostiene l'identità biografica e il ruolo descritto. **Non** si considera verificato alcun arco semplicemente perché i due sistemi indicano la medesima persona.

**Situazione dopo la tranche:** **34/155** coppie nominali con riscontro documentario (**16 precedenti + 18 nuove**), **121** coppie nominali in attesa; **5** alias già convalidati nelle Fasi 2B–2C, conteggiati a parte; **349** sorgenti senza equivalenza attestata; **0 fusioni, 0 cancellazioni, 0 modifiche al grafo pubblico**.

## Le 18 coppie lavorate

| Sezione | Nominativi | Riscontro e precauzioni |
| --- | --- | --- |
| Notre-Dame e Ars nova | Léonin, Pérotin, Guillaume de Machaut, Francesco Landini | Preservare varianti medievali, multidisciplinarità e cronologie non certe. Léonin e Pérotin non sono la medesima persona e il genere organum non costituisce un ponte indiscriminato. |
| Scuola veneziana | Andrea Gabrieli, Giovanni Gabrieli | Distinte persone. Andrea è zio e maestro di Giovanni; segnalare discrepanza nell'anno di morte di Andrea fra DBI e vecchia Enciclopedia Italiana. |
| Scarlatti | Alessandro Scarlatti, Domenico Scarlatti | Distinguere padre/figlio, attribuzioni individuali e varianti `Giuseppe Domenico` / `Mimmo`. |
| Bach e Couperin | Johann Sebastian Bach, François Couperin | Distinguere J. S. Bach da Johann Christian Bach; François Couperin *le Grand* dagli omonimi familiari. |
| Mozart, Haydn, Beethoven | Wolfgang Amadeus Mozart, Joseph Haydn, Ludwig van Beethoven | Identità con documentazione biografica; i rispettivi contesti familiari non autorizzano transitività automatica; Leopold deve emergere per Mozart senza diramazioni non pertinenti. |
| Schumann | Robert Schumann, Clara Schumann | Coniugi e compositori distinti; attribuzioni e profili autonomi di Clara, non semplice relazione ancillare. |
| Strauss | Richard Strauss | Richard Georg, 1864–1949, con padre cornista Franz Joseph; non confonderlo con gli Strauss viennesi dell'operetta. |
| Broadway | Richard Rodgers, Oscar Hammerstein II | Rodgers compositore, Hammerstein II librettista/paroliere (nipote di Oscar Hammerstein I). Attribuzioni separate per ogni opera comune. |

## Tre anomalie di autorità da trasportare nel registro di migrazione

1. **Francesco Landini:** DBI Treccani propone nascita intorno al **1335** a Fiesole, mentre la voce enciclopedica breve tradizionalmente indica **1325** a Firenze. Non fissare arbitrariamente una data nell'interfaccia pubblica. Fonti: https://www.treccani.it/enciclopedia/francesco-landini_%28Dizionario-Biografico%29/ e https://www.treccani.it/enciclopedia/francesco-landino/
2. **Andrea Gabrieli:** DBI riporta morte documentata il **30 agosto 1585**, mentre una voce più antica riporta **1586**. Preferire la ricostruzione biografica DBI, conservando traccia della variante. Fonti: https://www.treccani.it/enciclopedia/andrea-gabrieli_%28Dizionario-Biografico%29/ e https://www.treccani.it/enciclopedia/andrea-gabrieli_%28Enciclopedia-Italiana%29/
3. **François Couperin:** autorità BnF indica nascita **10 novembre 1668** e morte 1733; un estratto di Oxford Bibliographies presenta **1688** (apparente refuso). BnF e Treccani confermano 1668. Fonti: https://catalogue.bnf.fr/ark:/12148/cb138927932 e https://www.treccani.it/enciclopedia/couperin/ . Dato estratto difforme: https://academic.oup.com/reference/62400/reference-article-abstract/571523700 .

## Fonti di riferimento per i gruppi

- Notre-Dame (Léonin/Pérotin): https://www.notredamedeparis.fr/en/understand/music/polyphony-and-motets/ ; https://www.treccani.it/enciclopedia/leonin/ ; https://www.treccani.it/enciclopedia/perotin-le-grand_%28Enciclopedia-Italiana%29/
- Machaut: https://www.treccani.it/enciclopedia/guillaume-de-machaut/ ; Oxford Bibliographies https://academic.oup.com/reference/62384/reference-article-abstract/555062921?login=false
- Gabrieli: https://academic.oup.com/reference/62400/reference-article-abstract/571523757 ; https://www.treccani.it/enciclopedia/giovanni-gabrieli/
- Scarlatti: https://www.treccani.it/enciclopedia/alessandro-scarlatti_%28Dizionario-Biografico%29/ ; https://www.treccani.it/enciclopedia/giuseppe-domenico-scarlatti_%28Dizionario-Biografico%29/
- Mozart: https://mozarteum.at/en/wolfgang-amade-mozart
- Johann Sebastian Bach: https://www.treccani.it/enciclopedia/johann-sebastian-bach/ ; figlio Johann Christian distinto: https://academic.oup.com/reference/62400/reference-article-abstract/555405316?login=false
- Schumann: https://guides.loc.gov/clara-schumann ; https://www.treccani.it/enciclopedia/robert-alexander-schumann/ ; https://www.treccani.it/enciclopedia/clara-josephine-schumann/
- Richard Strauss: https://www.treccani.it/enciclopedia/richard-strauss/
- Broadway: https://www.loc.gov/item/2003561025/ ; https://findingaids.loc.gov/agents/people/29823 ; https://rodgersandhammerstein.com/about/
- Beethoven/Haydn: https://www.treccani.it/enciclopedia/ludwig-van-beethoven/ ; https://www.treccani.it/enciclopedia/franz-joseph-haydn/

## Regole per la futura traduzione delle relazioni

Le cinque relazioni familiari e professionali rilevanti in questa tranche (Andrea–Giovanni Gabrieli; Alessandro–Domenico Scarlatti; Robert–Clara Schumann; Leopold–Wolfgang Mozart; Rodgers–Hammerstein II) sono **proposte semantiche motivate** in `CONVALIDA_IDENTITA_FASE2E_2026-11-08.json`, **non nuovi archi creati**. L'audit dei grafi dovrà confrontarle con i rispettivi archi già esistenti, la direzione e le spiegazioni `forward` e `reverse`; nessuna duplicazione cieca.

Per tutti i nodi, i rapporti famigliari, i titoli, i generi e i periodi non sono passaggi automatici in profondità I–V. **I capitoli rimangono entità solamente editoriali.** Il test Mozart→Leopold deve evitare diramazioni di Leopold estranee a Mozart.

## Continuità

**Prossimo lotto Fase 2F:** verificare i **121** candidati nominali ancora pendenti, con attenzione a nomi comuni, famiglie, titoli religiosi, nomi d'arte e toponimi; avviare in parallelo ricerca mirata di varianti fra i **349** sorgenti ancora senza corrispondenza. I 4 concetti (dramma giocoso, opera buffa, opera seria, quartetto d'archi) restano in revisione semantica. La successiva fase sugli archi dovrà conciliare le **3.856** relazioni sorgenti Atlante con le **1.718** relazioni Atlantis preservando mouse-over/tap, testi bidirezionali e fonti. **Produzione non alterata**; restano intatti i 210 lotti storico-filologici.
