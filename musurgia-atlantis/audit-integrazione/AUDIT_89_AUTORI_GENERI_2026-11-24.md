# Audit delle 89 relazioni autore–genere ancora archiviate
## Musurgia Mundi / Atlantis / Flaminio — 24 novembre 2026

**Ambito:** solo staging `musurgia-atlantis/audit-integrazione/`, branch `main`. Lotto 2 Flaminio **BLOCKED**. Nessuna modifica ai grafi pubblici.

## Metodo e risultato verificabile
Origine: `REGRESSIONE_RICONCILIAZIONE_531_PERSONE_2026-11-21.json`, blob `1c59051f0097e50c2eb670d8d39d39fae7eb5be2`. Filtro esatto: `preclassification=PRATICA_O_REPERTORIO_GENERE` e `in_mundi_382=false`. Sono emersi **89 archi**, che rappresentano **83 coppie canoniche distinte** fra ID di radice e ID di persona. Sono presenti **6 coppie con due attestazioni ciascuna** (12 record coinvolti), ma **non** sei ID d'arco duplicati: gli ID arco sono diversi e gli enunciati possono recare qualificazioni diverse.

Tutti gli 89 archi mantengono predicato, `layer`, `quality` e ID originari nel registro macchina `REGISTRO_AUDIT_89_AUTORI_GENERI_2026-11-24.json`.

## Qualità archiviate (disgiunte: totale 89)
| Campo qualità originale | Archi |
|---|---:|
| `riscontro_storico_indipendente` | 4 |
| `opera-verificata-in-catalogo` | 7 |
| `fonte-segnalata-nella-voce` | 1 |
| `fonte-biografica-catalografica-specifica` | 9 |
| `riferimento-biografico-o-istituzionale-specifico` | 1 |
| `fonte-lessicografica-e-repertoriale` | 9 |
| `fonti-indicate` | 14 |
| `fonte_originale_non_ricertificata` | 15 |
| `non_certificato` | 29 |
| **Totale** | **89** |

La qualità dei quattro archi Atlantis è indicata come riscontro indipendente **nel database**: non è stata ricontrollata presso le fonti esterne nel presente gate. Il livello `opera-verificata-in-catalogo` attribuito a sette archi Mundi non certifica automaticamente l'identità di una singola composizione da aggiungere alla rete.

## Sei coppie canoniche ripetute
| Famiglia | Persona | Predicati distinti | Decisione |
|---|---|---|---|
| Musical | George Gershwin | `repertorio-formale-documentato` / `pratica-di-genere` | Conservare entrambe le provenienze; audit semantico prima di consolidare |
| Musical | Leonard Bernstein | come sopra | come sopra |
| Musical | Richard Rodgers | come sopra | come sopra |
| Musical | Stephen Sondheim | come sopra | come sopra |
| Ricercare | Girolamo Frescobaldi | `compone_e_pubblica_ricercari` / `forma-o-pratica-documentata` | Non perdere il significato compositivo specifico del primo predicato |
| Ricercare | Johann Sebastian Bach | `compone_ricercari_nell_offerta_musicale` / `forma-o-pratica-documentata` | Conservare la distinzione fra attestazione specifica e pratica generale |

**Perché non fondere automaticamente:** una stessa coppia canonica può avere più archi non equivalenti; fusione di nodi, deduplicazione di coppie e deduplicazione di relazioni sono operazioni differenti. Nessuna è giustificata dai soli titoli dei predicati.

## Trattamento proposto
1. **4 attestazioni Atlantis indipendenti:** esaminare predicati e origine prima di consentire una navigazione genere→persona; nessun trasferimento di repertori. Casi: Lully–Comédie-ballet, Rameau–Opéra-ballet, Frescobaldi e Bach–Ricercare.
2. **7 archi con `opera-verificata-in-catalogo`:** conservare relazione autore–genere, ma collegare a una specifica opera solo quando sia presente o validata una scheda identificabile.
3. **78 ulteriori archi:** mantenere nel registro e nell'archivio documentale finché non siano verificati individualmente i riferimenti e la qualità: 29 non certificati, 15 fonti originali non ricertificate e 34 relazioni con altri quattro tipi di indicazione bibliografica (`fonti-indicate` 14 più 20 con fonti lessicografiche/catalografiche/biografiche).
4. In presenza di due attestazioni per la stessa coppia, il visualizzatore potrà presentare **un solo collegamento grafico canonico** soltanto se il dettaglio conserva entrambe le fonti e i predicati, e se le qualità non vengono appiattite. È una proposta architetturale, non una modifica eseguita.

## Test e limiti del gate
La presente prova è una **analisi dei 89 record del registro di regressione**, letti direttamente da GitHub, non una ricostruzione attuale dell'intero builder a 17 sorgenti. I conteggi generali 2.897 nodi, 8.743 archi e 500 schede Flaminio appartengono all'ultimo gate reale precedentemente registrato, non sono stati ricalcolati oggi.

- **PASS classificatorio:** 89 archi, 83 coppie canoniche, 6 coppie ripetute, distribuzione esatta delle nove qualità.
- **OPEN:** riconvalida esterna degli archi, verifica semantica delle sei coppie, test Node CLI sul builder completo e collaudo browser/Android.
- **Nessun arco visualizzato/promosso, modificato o eliminato in questo gate.**

## Prossima azione
Dare priorità ai quattro archi Atlantis a riscontro indipendente e alle sei coppie canoniche ripetute. Poi rieseguire i test delle correzioni introdotte per Gabrieli, i 21 ruoli e i 13 rapporti storici. Gli otto raccordi editoriali derivati restano un gate separato.

**Fase 1 OPEN — Lotto 2 BLOCKED — produzione invariata.**
