# MUSURGIA MUNDI · Audit globale dei rimandi e della copertura
**Data:** 18 ottobre 2026 · **branch:** main · **base:** `a18bbb6f46300593e1ff8712e6f0efe49f5e4d38`.

## Interventi
- Analizzati **787 nodi**, persone indicizzate **475**; reintegrato Angelo Tesei nell'indice.
- Nuovi collegamenti puntuali a titoli narrativi: **62** in **13 pagine**. Ogni ancora usa l'ID `mm-autore-...` creato nel testo HTML; nessuna ricerca generica.
- Rimandi generici non specifici sospesi: **46**; registro pendingReview prima **236**, dopo **282**.
- Link pubblicati esclusivamente se destinati a un'opera precisa o a un passaggio che identifica l'autore nel titolo. Non usare `node.url` come presunta biografia.
- Gli autori rimandano anche al grafo dai titoli delle pagine, con controllo di cognomi univoci e periodi storici. Niente falsi «Casella» o «Firenze».
- Le opere oltre le prime 12 e i passaggi oltre i primi 8 sono consultabili in sezioni espandibili.
- Versioni degli script condivisi aggiornate per evitare cache obsolete. Nessun autoplay, catalogo, player o filtro modificato.

## Copertura oggettiva (non equivalenza con completamento delle voci)
| Tipo | Nodi | Con rimandi puntuali | Con relazioni documentate | Con voce Treccani specifica |
|---|---:|---:|---:|---:|
| periodo | 7 | 0 | 0 | 0 |
| ambito | 5 | 0 | 4 | 0 |
| corrente | 287 | 0 | 280 | 0 |
| compositore | 384 | 172 | 338 | 22 |
| geografia | 13 | 0 | 0 | 0 |
| persona | 91 | 4 | 89 | 3 |

Voci di autore/persona ad alta priorità (nessun rimando puntuale e nessuna relazione documentata): **5**.
Voci di autore/persona prive di relazioni documentate (possono avere archi generali d'epoca): **48**.

## Materiale per prossimi lotti
- `atlante3d/database/audit-ancore-narrative-2026-10-18.json`: verifiche delle ancore narrative.
- `atlante3d/database/audit-copertura-globale-2026-10-18.json`: registro completo di 787 nodi e rispettive lacune.
- `atlante3d/database/collegamenti-sito.json` → `pendingReview`: rimandi conservati ma NON pubblicati.

## Limiti espliciti
Verificate struttura JSON, corrispondenza fra nodi e manifest, tipo dei link pubblici e sintassi JavaScript. Collaudo browser/Android non effettuato. Non aggiunte relazioni biografiche ipotetiche, voci Treccani non verificate o registrazioni. Gli autori senza collegamenti restano classificati come incompleti.
