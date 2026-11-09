# Musurgia Atlantis — Fase 2M, Lotto 24

**9 novembre 2026 · branch `main` · solo staging e audit**

Catalogazione semantica di **10 nuove schede**. Totale **100/210**, restanti **110**. In questo lotto 0 voci sono accompagnate da un riscontro esterno pertinente al concetto/esempio; per 10 la verifica storica indipendente rimane **da svolgere**. Nessuna equivalenza con un ID Atlantis certificata.

| ID legacy | Relazioni originali | Stato prova |
|---|---:|---|
| `contesto-curtis-direzione-reiner` | 2 | documentary_verification_pending |
| `contesto-michaeliskirche-ohrdruf` | 2 | documentary_verification_pending |
| `contesto-teatro-linz-ottocento` | 2 | documentary_verification_pending |
| `corale-organistico-turingia-seicento` | 2 | documentary_verification_pending |
| `corte-musicale-medicea-firenze-quattrocento` | 2 | documentary_verification_pending |
| `corte-scaligera-musica-verona-trecento` | 2 | documentary_verification_pending |
| `dialettica-solo-tutti-concerto-bolognese` | 2 | documentary_verification_pending |
| `dramma-musicale-allegorico-medievale` | 2 | documentary_verification_pending |
| `dramma-per-musica-agnesi-ciro-1753` | 2 | documentary_verification_pending |
| `editio-medicea-graduale-1614` | 2 | documentary_verification_pending |

## Audit storico-semantico e gate
- **Curtis Institute · direzione d’orchestra, 1931–1941** — ente o milieu storico; non ponte personale. Verificare identità, terminologia, cronologia e rapporti individuali: il contesto non certifica archi. **Fonti individuali ancora da reperire.**
- **Michaeliskirche di Ohrdruf · Johann Christoph Bach** — ente o milieu storico; non ponte personale. Verificare identità, terminologia, cronologia e rapporti individuali: il contesto non certifica archi. **Fonti individuali ancora da reperire.**
- **Teatro di Linz · direzione musicale nella metà dell’Ottocento** — ente o milieu storico; non ponte personale. Verificare identità, terminologia, cronologia e rapporti individuali: il contesto non certifica archi. **Fonti individuali ancora da reperire.**
- **Elaborazione del corale per organo in Turingia · Seicento** — tecnica/prassi; non sinonimo di composizione. Verificare identità, terminologia, cronologia e rapporti individuali: il contesto non certifica archi. **Fonti individuali ancora da reperire.**
- **Ambiente musicale dei Medici nella Firenze quattrocentesca** — ente o milieu storico; non ponte personale. Verificare identità, terminologia, cronologia e rapporti individuali: il contesto non certifica archi. **Fonti individuali ancora da reperire.**
- **Corte degli Scaligeri · produzione musicale trecentesca** — ente o milieu storico; non ponte personale. Verificare identità, terminologia, cronologia e rapporti individuali: il contesto non certifica archi. **Fonti individuali ancora da reperire.**
- **Dialettica Solo–Tutti del concerto bolognese** — tecnica/prassi; non sinonimo di composizione. Verificare identità, terminologia, cronologia e rapporti individuali: il contesto non certifica archi. **Fonti individuali ancora da reperire.**
- **Dramma musicale allegorico nel Medioevo** — contesto teatrale; individuare produzione specifica. Verificare identità, terminologia, cronologia e rapporti individuali: il contesto non certifica archi. **Fonti individuali ancora da reperire.**
- **Ciro in Armenia · dramma per musica di Maria Teresa Agnesi** — opera identificata; separare versioni e rappresentazioni. Opera individuale, distinguere titolo e rappresentazione dalla forma 'dramma per musica'. **Fonti individuali ancora da reperire.**
- **Editio Medicea · revisione del Graduale, 1614–1615** — raccolta/documento; preservare edizioni e componenti. Edizione liturgica del Graduale, non il genere messa né un unico manoscritto. **Fonti individuali ancora da reperire.**

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

**Prossima ripresa:** Lotto 25, documentato nel proprio file.
