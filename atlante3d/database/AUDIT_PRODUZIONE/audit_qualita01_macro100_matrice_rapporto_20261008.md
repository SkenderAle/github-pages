# MUSURGIA MUNDI — Matrice di qualità del primo macroblocco (100 compositori)

Data: 8 ottobre 2026. Ramo: `audit-produzione-correttivo-01`. Baseline: `0381c3081bd7211f5d04594abd0b740277d14295`.

## Che cosa è stato realmente verificato
- **100** identificativi persistenti conservati senza ricostruzione ordinale; **218 archi produttivi** incidenti sui 100 compositori, **377 relazioni specialistiche** incidenti sul gruppo. Le 377 sono contate come relazioni distinte, non come somma per musicista.
- **8** archi produttivi hanno ricevuto nel commit di qualità precedente un controllo puntuale della fonte e dell'opera; per gli altri **210** il catalogo automatico documenta la presenza del record ma **non lo certifica filologicamente**.
- **2** rapporti formativi sono stati ricontrollati e hanno ricevuto stati coerenti con le fonti (Caldara: `da_verificare`; Rore: `documentato-con-cautela`). Gli altri 375 non sono considerati verificati per questo solo passaggio.
- `audit_qualita01_macro100_matrice_20261008.json` conserva **tutti i 218 archi produttivi** e **tutte le 377 relazioni specialistiche**, con flag di priorità, fonti, note e liste per autore.

## Distribuzione delle fonti primarie negli archi produttivi (classificazione tecnica euristica)

| Tipo stimato dalla struttura URL | Relazioni |
|---|---:|
| partitura_o_scheda_opera | 114 |
| catalogo_editore_archivio_altro | 67 |
| biografia_o_saggio_enciclopedico | 33 |
| catalogo_o_indice | 3 |
| documento_pdf_da_valutare | 1 |

**Attenzione:** «partitura_o_scheda_opera», «biografia_o_saggio», ecc. sono descrizioni automatiche del tipo di URL. Non dimostrano l'esattezza della singola attribuzione né l'effettiva accessibilità della pagina.

## Indicatori di lavoro aperto
- Segnali euristici sulle note/fonti: {"opera_o_corpus_nella_nota_da_controllare":94,"nota_breve_da_approfondire":13,"indice_da_confrontare_con_opera":3}.
- Segnali sui rapporti specialistici: {"linguaggio_incerto_nonostante_stato_documentato":3,"fonte_generica_da_riscontrare":4}.
- **1 coppia/e semanticamente ripetuta/e** per gruppo e orientamento, già segnalata/e (Rubinstein → Čajkovskij): evitare deduplicazioni distruttive.
- Nessuna scheda dei 100 autori è dichiarata esaustiva; un singolo arco di produzione non è una monografia.

## Fonti a più alta priorità di riesame
| # | Autore | Genere | Flag euristico | Fonte oggi in database |
|---:|---|---|---|---|
| 1 | Aleksandr Skrjabin | Musica per pianoforte | indice_da_confrontare_con_opera | [Fonte attuale](https://imslp.org/wiki/List_of_compositions_by_Alexander_Scriabin) |
| 2 | Alfredo Casella | Sinfonia | indice_da_confrontare_con_opera | [Fonte attuale](https://imslp.org/wiki/Category:Casella,_Alfredo) |
| 3 | Camillo Sivori | Concerto | indice_da_confrontare_con_opera | [Fonte attuale](https://imslp.org/wiki/List_of_works_by_Camillo_Sivori) |

## Relazioni specialistiche con testo/status da riesaminare prioritariamente
| # | ID | Collegamento | Stato | Indicatore |
|---:|---|---|---|---|
| 1 | `form-willaert-zarlino` | Adriano Willaert → Gioseffo Zarlino | documentato | linguaggio_incerto_nonostante_stato_documentato |
| 2 | `cat-scuole-frottola-corti-italiane-bartolomeo-tromboncino` | Frottola delle corti italiane → Bartolomeo Tromboncino | documentato | fonte_generica_da_riscontrare |
| 3 | `cat-scuole-opera-veneziana-seicento-claudio-monteverdi` | Scuola operistica veneziana del Seicento → Claudio Monteverdi | documentato | fonte_generica_da_riscontrare |
| 4 | `lotto02-form-lotti-galuppi` | Antonio Lotti → Baldassare Galuppi | documentato | linguaggio_incerto_nonostante_stato_documentato |
| 5 | `audit8f-madrigale-rore` | Madrigale → Cipriano de Rore | documentato | fonte_generica_da_riscontrare |
| 6 | `audit8f-madrigale-willaert` | Madrigale → Adriano Willaert | documentato | fonte_generica_da_riscontrare |
| 7 | `audit12-legrenzi-lotti-allievo` | Giovanni Legrenzi → Antonio Lotti | documentato | linguaggio_incerto_nonostante_stato_documentato |

## Regole operative
1. I flag si applicano solo come **triage**: un'etichetta di incertezza nella nota potrebbe descrivere un aspetto secondario, non confutare la relazione.
2. Per convalidare una fonte leggere il suo testo pertinente, verificare autore, opera, versione e organico; non basta che l'URL contenga il nome del compositore.
3. Non trasformare formazione istituzionale, ricezione di partiture o insegnamento ipotizzato in rapporto maestro-allievo personale.
4. Non sostituire automaticamente le sottocategorie del database alle tre grandi lenti dell'interfaccia.
5. Questo checkpoint **non modifica** `grafo.json`, `relazioni.json`, `main` o il motore. Serve a determinare l'ordine del prossimo audit filologico.
