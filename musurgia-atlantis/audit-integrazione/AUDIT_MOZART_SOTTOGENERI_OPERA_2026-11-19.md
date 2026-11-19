# Audit opera-specifico: Opera buffa, Dramma giocoso, Singspiel
## Musurgia Mundi / Atlantis / Flaminio · 19 novembre 2026

**Repository:** SkenderAle/github-pages, branch main.  
**Ambito:** solo `musurgia-atlantis/audit-integrazione/` (staging).  
**Lotto 2 Flaminio:** BLOCCATO. **Grafi e frontend di produzione:** non modificati.

### Motivazione

Dopo il gate Mozart → Opera del 18 novembre (2.897 nodi, 8.729 archi), è stato verificato se le quattro opere operistiche già presenti avessero un legame **specifico e documentato** al proprio sottogenere. Un legame autore → genere generale non prova l'identità o la classificazione di ogni singola composizione.

| Opera | Relazione di genere | Evidenza nei dati originari | Intervento |
|---|---|---|---|
| Le nozze di Figaro (KV 492) | Opera buffa | Autore→opera attestato, mancava opera→sottogenere | **Nuovo** `curated-opera09-figaro-opera-buffa` |
| Don Giovanni (KV 527) | Dramma giocoso | Atlantis `L02-A06`, frontespizio originale attestato | **Riutilizzato senza duplicare** |
| Così fan tutte (KV 588) | Dramma giocoso | Autore→opera attestato; subtype già nominato nel nodo, mancava arco esplicito | **Nuovo** `curated-opera09-cosi-dramma-giocoso` |
| Il flauto magico (KV 620) | Singspiel | Crosswalk `curated-opera07-zauberflote-singspiel` | **Riutilizzato senza duplicare** |

### Fonti dei due nuovi raccordi
- Le nozze di Figaro / Opera buffa: [Köchel-Verzeichnis della Stiftung Mozarteum](https://kv.mozarteum.at/en/work/le-nozze-di-figaro-opera-buffa-commedia-per-musica-in-4-acts-11980), [catalogo BnF](https://catalogue.bnf.fr/ark:/12148/cb13915222d).
- Così fan tutte / Dramma giocoso: [libretto originale nel catalogo della Stiftung Mozarteum](https://dme.mozarteum.at/dmedata/libretti-catalog/liste.php?r=108&t=0), [Universität Mozarteum](https://www.moz.ac.at/en/news/2023/05/wolfgang-amade-mozart-cosi-fan-tutte).

Non si è inferito alcun rapporto di identità fra *Dramma giocoso* e *Opera buffa*: sono lemmi autonomi, pur in rapporto storico. Non è stata conferita a tutte le opere di Mozart l'identica categoria.

### Verifica V8 sul dataset reale di staging
Le 17 sorgenti complete sono state caricate mediante gli effettivi JSON del repository e l'originaria funzione `buildUnifiedDatabase` è stata valutata in V8. Le proiezioni sono state ottenute dalla logica reale `rootedProjection` estratta dall'HTML di staging, con tutte le lenti attive e profondità 5. **Non si tratta di collaudo browser/Android.**

| Controllo | Prima | Dopo |
|---|---:|---:|
| Nodi | 2.897 | 2.897 |
| Archi | 8.729 | **8.731** |
| Schede Flaminio | 500 | 500 |
| Archi orfani | 0 | 0 |
| ID di arco duplicati | 0 | 0 |
| Opere visibili da Opera buffa | 0 | 1: *Le nozze di Figaro* |
| Opere visibili da Dramma giocoso | 1: *Don Giovanni* | 2: *Don Giovanni*, *Così fan tutte* |
| Opere visibili da Singspiel | 1: *Il flauto magico* | 1: invariato |
| Opere nel focus Mozart → Opera | 4 | 4: invariato |
| Opere nel focus Mozart → Opera buffa | 0 | 1: *Le nozze di Figaro* |

### Gate e prossimi passi
- Aggiornate le asserzioni numeriche nei nove file di test runtime (incluso il gate radicato) da 8.729 a 8.731.
- Il gate radicato contiene ora controlli esatti su appartenenza individuale, non propagazione di altri autori e non duplicazione di archi già presenti.
- I risultati sopra riportati sono derivati dalla **prova in memoria V8 sui dati reali**. La batteria integrale dei test da **Node CLI** non è stata eseguita e resta aperta.
- La verifica DOM, WebGL, Canvas, etichette on-hover e mobile Android resta aperta.
- *Die Entführung aus dem Serail* / *Il ratto dal serraglio* rimane assente dagli inventari confermati. Non creare un nodo dalla sola stringa del titolo: prima ottenere scheda fonte e identità attestata.
- Prossimo audit: altri autori/opere del teatro e validazione di genere, poi gate browser. **Nessuna pubblicazione in produzione o apertura Lotto 2**.

**Esito:** `PASS_REAL_DATA_V8_SUBGENRE_WORK_EDGES` · `OPEN_NODE_HARNESSES_AND_BROWSER` · `LOTTO2_BLOCKED`.
