# Musurgia Atlantis — Fase 2M, Lotto 26

**9 novembre 2026 · branch `main` · solo staging e audit**

Catalogazione semantica di **10 nuove schede**. Totale **120/210**, restanti **90**. In questo lotto 1 voci sono accompagnate da un riscontro esterno pertinente al concetto/esempio; per 9 la verifica storica indipendente rimane **da svolgere**. Nessuna equivalenza con un ID Atlantis certificata.

| ID legacy | Relazioni originali | Stato prova |
|---|---:|---|
| `lied-su-poesia-morike` | 2 | documentary_verification_pending |
| `linguaggio-polistilistico-novecento` | 2 | documentary_verification_pending |
| `magnus-liber-organi-notre-dame` | 2 | documentary_verification_pending |
| `mathis-der-maler-sinfonia-1934` | 2 | category_or_example_supported_not_edges |
| `messa-parafrasi-pange-lingua` | 2 | documentary_verification_pending |
| `missa-maria-zart-obrecht` | 2 | documentary_verification_pending |
| `mottetto-civico-cerimoniale-quattrocento` | 2 | documentary_verification_pending |
| `new-england-conservatory-boston` | 2 | documentary_verification_pending |
| `nonetto-farrenc-musica-da-camera` | 2 | documentary_verification_pending |
| `opera-da-salotto-viardot-1867` | 2 | documentary_verification_pending |

## Audit storico-semantico e gate
- **Lied tedesco su testi di Eduard Mörike** — genere/sottotipo; non un'opera singola. Verificare identità, terminologia, cronologia e rapporti individuali: il contesto non certifica archi. **Fonti individuali ancora da reperire.**
- **Polistilismo novecentesco** — corrente/contesto; adesione non transitiva. Verificare identità, terminologia, cronologia e rapporti individuali: il contesto non certifica archi. **Fonti individuali ancora da reperire.**
- **Magnus liber organi e organum di Notre-Dame** — raccolta/documento; preservare edizioni e componenti. Tradizione compilatoria con testimoni diversi: non singola opera fissa. **Fonti individuali ancora da reperire.**
- **Mathis der Maler · sinfonia (1934) e opera** — entità composite da disaggregare. Sinfonia 1934, opera 1938: due entità artistiche distinte con materiale musicale condiviso. [Fonte](https://www.hindemith.info/fileadmin/hindemith-forum/hf_11_2005.pdf)
- **Messa parafrasi · Missa Pange lingua** — opera identificata; separare versioni e rappresentazioni. Messa individuale distinta dal genere messa e dalla tecnica di parafrasi. **Fonti individuali ancora da reperire.**
- **Missa Maria zart · Obrecht e il cantus firmus** — opera identificata; separare versioni e rappresentazioni. Messa specifica di Obrecht, distinta dal cantus firmus come tecnica. **Fonti individuali ancora da reperire.**
- **Mottetto per celebrazioni civiche nel Quattrocento** — genere/sottotipo; non un'opera singola. Verificare identità, terminologia, cronologia e rapporti individuali: il contesto non certifica archi. **Fonti individuali ancora da reperire.**
- **New England Conservatory di Boston** — ente o milieu storico; non ponte personale. Verificare identità, terminologia, cronologia e rapporti individuali: il contesto non certifica archi. **Fonti individuali ancora da reperire.**
- **Nonetto di Louise Farrenc · musica da camera romantica** — opera identificata; separare versioni e rappresentazioni. Opera specifica di Farrenc, non sinonimo del genere nonetto. **Fonti individuali ancora da reperire.**
- **Le dernier sorcier · opera domestica e di salotto** — opera identificata; separare versioni e rappresentazioni. Le dernier sorcier, singola opera di Viardot: verifica versioni, prima esecuzione e data. **Fonti individuali ancora da reperire.**

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

**Prossima ripresa:** Lotto 27: completamento di altri dossier e priorità ai test esecutivi in staging e alle adiacenze reali prima del merge.
