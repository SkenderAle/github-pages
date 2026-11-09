# Musurgia Atlantis — Fase 2M, Lotto 25

**9 novembre 2026 · branch `main` · solo staging e audit**

Catalogazione semantica di **10 nuove schede**. Totale **110/210**, restanti **100**. In questo lotto 2 voci sono accompagnate da un riscontro esterno pertinente al concetto/esempio; per 8 la verifica storica indipendente rimane **da svolgere**. Nessuna equivalenza con un ID Atlantis certificata.

| ID legacy | Relazioni originali | Stato prova |
|---|---:|---|
| `elegy-for-young-lovers-opera-1961` | 2 | category_or_example_supported_not_edges |
| `favola-musicale-didattica-orchestra-1936` | 2 | documentary_verification_pending |
| `gebrauchsmusik-hindemith` | 2 | documentary_verification_pending |
| `giulietta-romeo-operistica-zingarelli-1796` | 2 | documentary_verification_pending |
| `gunther-schule-monaco` | 2 | documentary_verification_pending |
| `il-prigioniero-dallapiccola-1948` | 2 | documentary_verification_pending |
| `italienisches-liederbuch-wolf` | 2 | category_or_example_supported_not_edges |
| `jeanne-au-bucher-oratorio-drammatico` | 2 | documentary_verification_pending |
| `jeune-france-1936` | 2 | documentary_verification_pending |
| `lachrimae-consort-liuto-viole` | 2 | documentary_verification_pending |

## Audit storico-semantico e gate
- **Elegy for Young Lovers (1961) · opera di Henze** — opera identificata; separare versioni e rappresentazioni. Opera 1961, revisione 1987 e prima della versione riveduta 1988: opera, versione e rappresentazione vanno separate. [Fonte](https://www.hans-werner-henze-stiftung.de/en/hans-werner-henze/list-of-works/detail/elegy-for-young-lovers)
- **Favola musicale didattica per orchestra e narratore** — ambito repertoriale; non istituzione. Descrizione generica di opera specifica: confermare titolo e autore prima di creare identificativo. **Fonti individuali ancora da reperire.**
- **Gebrauchsmusik · musica per l’uso e la pratica** — corrente/contesto; adesione non transitiva. Verificare identità, terminologia, cronologia e rapporti individuali: il contesto non certifica archi. **Fonti individuali ancora da reperire.**
- **Giulietta romeo operistica zingarelli 1796** — opera identificata; separare versioni e rappresentazioni. Non sovrapporre ad altre opere sulla vicenda di Romeo e Giulietta. **Fonti individuali ancora da reperire.**
- **Günther-Schule di Monaco · musica, danza e movimento** — ente o milieu storico; non ponte personale. Verificare identità, terminologia, cronologia e rapporti individuali: il contesto non certifica archi. **Fonti individuali ancora da reperire.**
- **Il prigioniero · opera di Luigi Dallapiccola** — opera identificata; separare versioni e rappresentazioni. Distinguere composizione, prima esecuzione e prime rappresentazioni sceniche. **Fonti individuali ancora da reperire.**
- **Italienisches Liederbuch · 46 Lieder di Hugo Wolf** — raccolta/documento; preservare edizioni e componenti. Raccolta di 46 Lieder edita in due parti (1892/1896): non sinonimo del genere Lied. [Fonte](https://citeseerx.ist.psu.edu/document?doi=931434d3f7817cddaba1fcee9f75caa3c18756f0&repid=rep1&type=pdf)
- **Jeanne d’Arc au bûcher · oratorio drammatico novecentesco** — opera identificata; separare versioni e rappresentazioni. Opera drammatica precisa, non sinonimo del genere oratorio. **Fonti individuali ancora da reperire.**
- **La Jeune France · gruppo musicale del 1936** — corrente/contesto; adesione non transitiva. Verificare identità, terminologia, cronologia e rapporti individuali: il contesto non certifica archi. **Fonti individuali ancora da reperire.**
- **Lachrimae (1604) · liuto e cinque viole** — raccolta/documento; preservare edizioni e componenti. Raccolta di Dowland e singole pavane distinte, non un unico brano. **Fonti individuali ancora da reperire.**

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

**Prossima ripresa:** Lotto 26, documentato nel proprio file.
