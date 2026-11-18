# Audit dei raccordi opera-specifici — Mozart → Opera
## Musurgia Mundi / Atlantis / Flaminio · 18 novembre 2026, sera

**Ambito:** solo `musurgia-atlantis/audit-integrazione/` (staging reversibile). **Lotto 2 Flaminio bloccato.** Nessuna modifica ai grafi e al frontend pubblici.

### Punto di partenza e metodo
Il checkpoint precedente aveva già confermato 17 sorgenti effettive, 2.897 nodi e 8.725 archi. Nell'HTML di prova, il focus radicato Mozart → Opera non mostrava composizioni, perché il collegamento autore → genere non equivale a un collegamento opera → genere.

Sono stati ripresi i quattro nodi di opere già presenti in Atlantis e i loro archi autore → opera documentati. Sono stati aggiunti nello staging solo raccordi dal lemma canonico `atlantis::senso:opera` a **quattro opere individuate**, senza introdurre opere, attribuzioni o versioni nuove.

### Archi aggiunti
| ID arco curato | Opera esistente | Collocazione |
|---|---|---|
| `curated-opera08-figaro` | `atlantis::opera:figaro` · Le nozze di Figaro | Opera (K. 492) |
| `curated-opera08-don-giovanni` | `atlantis::opera:Don-giovanni` · Don Giovanni | Opera, con sottogenere dramma giocoso già attestato (K. 527) |
| `curated-opera08-flauto-magico` | `atlantis::opera:flauto-magico` · Il flauto magico | Opera, con classificazione Singspiel già attestata (K. 620) |
| `curated-opera08-cosi-fan-tutte` | `atlantis::opera:cosi-fan-tutte-1790` · Così fan tutte | Opera (K. 588) |

Per ciascun arco sono conservati un riferimento specifico, un motivo, la qualità di staging e l'indicazione `identity_merge: false`. I raccordi classificano il genere generale; **non** assegnano automaticamente sottogeneri ulteriori.

### Risultato del test sui dati reali
Sono stati recuperati i 17 JSON effettivi del repository (circa 8,9 milioni di caratteri), alimentando la funzione originale `buildUnifiedDatabase` eseguita in V8. La vista di Mozart → Opera è stata prodotta con la funzione `rootedProjection` estratta dall'HTML di staging, con lenti attive, profondità 5 e perimetro di radice.

| Misura | Prima | Dopo |
|---|---:|---:|
| Sorgenti | 17 | 17 |
| Nodi | 2.897 | 2.897 |
| Archi | 8.725 | 8.729 |
| Opere visibili nel focus Mozart → Opera | 0 | **4** |
| Archi orfani | 0 | 0 |
| Identificativi di arco duplicati | 0 | 0 |
| Schede Flaminio | 500 | 500 |
| Identità persone condivise Mundi–Atlantis | 162 | 162 |
| Identità tassonomiche condivise Mundi–Atlantis | 21 | 21 |

Le quattro opere esposte coincidono esattamente con i quattro nodi attesi; né *Les Petits Riens* né la raccolta dei quartetti di Mozart entrano in questo focus, e non entrano opere di altri compositori.

### Regressioni e limiti
- Le aspettative numeriche nei nove `TEST_*_RUNTIME_*.mjs` e `TEST_GATE_RADICATO_POST_UNIFICAZIONE_2026-11-18.mjs` (nove file complessivi) sono aggiornate da 8.725 a 8.729; il gate radicato ora richiede esplicitamente l'insieme esatto delle quattro opere.
- La prova descritta è una **esecuzione logica V8 su dati reali**, non un collaudo DOM, browser, WebGL o Android.
- Gli harness aggiornati non risultano **tutti eseguiti singolarmente via Node CLI**; questo resta un gate aperto.
- Nessun nuovo nodo per *Die Entführung aus dem Serail* è stato creato: titolo e identità devono essere riscontrati in fonte prima della catalogazione.
- I grafi di produzione `atlante3d/database/grafo.json`, `musurgia-atlantis/grafo.json` e il frontend `musurgia-atlantis/index.html` restano esclusi da questa modifica.

**Esito:** `PASS_REAL_DATA_BUILDER_AND_ROOTED_FOCUS_V8`; `OPEN_BROWSER_AND_FULL_HARNESS_SUITE`; `LOTTO2_BLOCKED`.
