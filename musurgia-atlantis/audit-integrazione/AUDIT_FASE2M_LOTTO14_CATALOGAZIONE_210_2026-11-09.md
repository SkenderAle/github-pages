# Musurgia Atlantis — Fase 2M, Lotto 14
**9 novembre 2026 · Audit non distruttivo sul branch `main`**

## Perimetro verificato
Esaminati programmaticamente **210/210 record** con status `no_crosswalk_hypothesis_this_lotto_not_absent` nel dataset del Lotto 13, conservando ID, etichetta, macroclasse, tassonomia, priorità e numero di relazioni incidenti. Per ogni record è stata definita una tipologia **provvisoria** e un requisito documentale di importazione, senza asserire che Atlantis ne sia priva. Questa è una **catalogazione preparatoria completa**, non una verifica catalografica storica individuale dei 210 casi.

## Ripartizione delle 210 schede
- **istituzione_ambiente**: 52
- **tradizione_movimento**: 46
- **opera_specifica**: 39
- **raccolta_documento**: 26
- **genere_forma**: 23
- **tecnica_prassi**: 9
- **ambito_repertoriale**: 5
- **teatro_danza**: 4
- **evento_produzione**: 4
- **caso_studio_ibrido**: 2

## Regole operative
1. `prospective_distinct_concept/entity` significa preservare la possibilità di un nodo autonomo, **non** autorizza la creazione definitiva né dimostra assenza di equivalenti Atlantis.
2. Distinguere opere, versioni, prime esecuzioni, raccolte, trattati, istituzioni e ambienti: la somiglianza di denominazione non dimostra identità.
3. Conservare l'intera scheda sorgente e le relazioni originali in staging; nessuna deduplicazione per coppie di estremi, nessun nuovo arco storico senza prova indipendente.
4. Capitoli editoriali fuori dai grafi storici I–V. Periodi, scuole, generi e luoghi sono contesti, non ponti universali. Per ogni nodo pivot, applicare pertinenza radicata.
5. Non marcare alcuna delle 210 voci come `editorial_only` prima dell'esame del contenuto: una categoria d'origine non basta a cancellare il valore storico di una scheda.

## Priorità di lettura (prime 16 dopo ordinamento per priorità e centralità)
| ID legacy | Priorità | Tipo provvisorio | Archi incidenti |
|---|---|---|---:|
| `gruppo-dei-sei` | P1 | historical_context_or_tradition | 15 |
| `tradizione-operistica-francese-ottocento` | P1 | historical_context_or_tradition | 15 |
| `gruppo-dei-cinque` | P1 | historical_context_or_tradition | 14 |
| `tradizioni-organistiche-tedesche` | P1 | historical_context_or_tradition | 13 |
| `tradizione-operistica-italiana-ottocento` | P1 | historical_context_or_tradition | 12 |
| `genere-melodie-francese` | P1 | genre_or_form | 10 |
| `genere-rapsodia` | P1 | genre_or_form | 10 |
| `tradizione-inglese-elisabettiana` | P1 | historical_context_or_tradition | 10 |
| `avanguardia-italiana-secondo-novecento` | P1 | historical_context_or_tradition | 9 |
| `forma-toccata` | P1 | genre_or_form | 9 |
| `tradizione-melodie-francese` | P1 | historical_context_or_tradition | 9 |
| `tradizione-viennese-classica` | P1 | historical_context_or_tradition | 9 |
| `conservatorio-pietroburgo` | P1 | institution_or_milieu | 8 |
| `forma-notturno` | P1 | genre_or_form | 8 |
| `forma-preludio` | P1 | genre_or_form | 8 |
| `generazione-1880-musica-italiana` | P1 | historical_context_or_tradition | 8 |

**Attenzione al genere Messa:** `genere-messa` è già affrontato nel Lotto 13 (40 compositori distinti, 40 record compositore–genere; il nodo `senso:messa` non esisteva nello snapshot Atlantis). Non aggiungerlo artificiosamente ai 210: è una **priorità trasversale** per il futuro pacchetto reversibile.

## Controlli effettivamente eseguiti
- PASS — `all_210_accounted`
- PASS — `unique_legacy_ids`
- PASS — `all_original_source_metadata_retained`
- PASS — `no_equivalence_claimed`
- PASS — `no_merge_or_traversal_authorized`
- PASS — `all_210_manual_review`

Questi controlli sono **strutturali e di integrità del registro**, non una convalida storico-filologica delle singole schede. Non eseguiti in questo lotto: Node `--live`, browser/WebGL, Android, nuovi test di `prepare`/`byId` o profondità per tipologia. L'adapter `relationSentence` era già stato portato e confrontato su **7.712 frasi V8** nel Lotto 01: non ripeterlo.

## Prossima ripresa — Lotto 15
Verificare individualmente per priorità le definizioni e la presenza/assenza di identità Atlantis, iniziando dalle schede ad alta centralità; risolvere i casi misti raccolta/opera/evento/istituzione; associare prove indipendenti per le nuove proposte di equivalenza, senza fabbricare nuovi archi. Preparare mapping reversibile e testare `prepare`, `byId`, profondità I–V per tipologia, pivot del singolo nodo e filtri di pertinenza radicata; poi Node `--live` e browser/Android separati. Nessuna pubblicazione del grafo o UI prima della certificazione.

Restano preservati **210 lotti storico-filologici**, **3.856** archi legacy, **1.718** Atlantis, **509** persone sorgente, spiegazioni `forward/reverse`, note, fonti, **115** media e **207** associazioni, **537** URL con ancora. **Zero merge pubblici.**
