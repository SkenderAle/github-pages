# Musurgia Atlantis — Fase 2M, Lotto 22

**9 novembre 2026 · branch `main` · solo staging e audit**

Catalogazione semantica di **10 nuove schede**. Totale **80/210**, restanti **130**. In questo lotto 2 voci sono accompagnate da un riscontro esterno pertinente al concetto/esempio; per 8 la verifica storica indipendente rimane **da svolgere**. Nessuna equivalenza con un ID Atlantis certificata.

| ID legacy | Relazioni originali | Stato prova |
|---|---:|---|
| `scuola-caritatevole-bergamo` | 3 | documentary_verification_pending |
| `second-new-england-school` | 3 | documentary_verification_pending |
| `teatro-inglese-novecento` | 3 | documentary_verification_pending |
| `toccata-organistica-rinascimentale` | 3 | documentary_verification_pending |
| `vienna-fin-de-siecle-musicale` | 3 | documentary_verification_pending |
| `abendmusiken-lubecca-marienkirche` | 2 | category_or_example_supported_not_edges |
| `aleatorismo-controllato-lutoslawski` | 2 | category_or_example_supported_not_edges |
| `antiche-arie-danze-respighi-1917` | 2 | documentary_verification_pending |
| `caccia-italiana-trecento` | 2 | documentary_verification_pending |
| `canti-patriottici-piemontesi-1847` | 2 | documentary_verification_pending |

## Audit storico-semantico e gate
- **Scuola caritatevole di Mayr a Bergamo** — ente o milieu storico; non ponte personale. Verificare identità, terminologia, cronologia e rapporti individuali: il contesto non certifica archi. **Fonti individuali ancora da reperire.**
- **Second New England School · compositori statunitensi** — corrente/contesto; adesione non transitiva. Verificare identità, terminologia, cronologia e rapporti individuali: il contesto non certifica archi. **Fonti individuali ancora da reperire.**
- **Rinascita operistica inglese del Novecento** — corrente/contesto; adesione non transitiva. Verificare identità, terminologia, cronologia e rapporti individuali: il contesto non certifica archi. **Fonti individuali ancora da reperire.**
- **Toccata organistica del secondo Cinquecento** — genere/sottotipo; non un'opera singola. Verificare identità, terminologia, cronologia e rapporti individuali: il contesto non certifica archi. **Fonti individuali ancora da reperire.**
- **Ambiente musicale viennese del fin de siècle** — corrente/contesto; adesione non transitiva. Verificare identità, terminologia, cronologia e rapporti individuali: il contesto non certifica archi. **Fonti individuali ancora da reperire.**
- **Abendmusiken della Marienkirche di Lubecca** — serie/evento; distinguere eventi da repertorio. Origini esatte incerte; Franz Tunder possibile fondatore, Buxtehude sviluppa il ciclo. Non un'opera unica. [Fonte](https://www.st-marien-luebeck.de/musik/luebecker-abendmusiken)
- **Contrappunto aleatorio controllato di Lutosławski** — tecnica/prassi; non sinonimo di composizione. Venetian Games (1960–61) documenta il ricorso all'alea: tecnica distinta dalla singola opera. [Fonte](https://www.loc.gov/collections/moldenhauer-archives/articles-and-essays/guide-to-archives/venetian-games/)
- **Antiche arie e danze · trascrizioni di Respighi** — raccolta/documento; preservare edizioni e componenti. Non estendere l'anno 1917 alle altre suite; distinguere arrangiamenti e fonti antiche. **Fonti individuali ancora da reperire.**
- **Caccia polifonica del Trecento** — genere/sottotipo; non un'opera singola. Verificare identità, terminologia, cronologia e rapporti individuali: il contesto non certifica archi. **Fonti individuali ancora da reperire.**
- **Canti patriottici del Piemonte del 1847** — raccolta/documento; preservare edizioni e componenti. Verificare identità, terminologia, cronologia e rapporti individuali: il contesto non certifica archi. **Fonti individuali ancora da reperire.**

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

**Prossima ripresa:** Lotto 23, documentato nel proprio file.
