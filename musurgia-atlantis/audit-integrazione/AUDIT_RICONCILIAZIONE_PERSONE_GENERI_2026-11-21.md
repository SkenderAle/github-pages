# Riconciliazione degli archi Mundi autore–genere con le identità canoniche Atlantis
## Musurgia Mundi / Atlantis / Flaminio — 21 novembre 2026

**Ambito:** `musurgia-atlantis/audit-integrazione/`, branch `main`, **Lotto 2 Flaminio BLOCCATO**. Nessuna modifica ai grafi o al visualizzatore pubblici.

### Punto di partenza e perimetro esatto
Il censimento del 20 novembre aveva estratto **382 archi diretti Mundi** fra compositori e dodici radici di genere/forma (216 ID di compositore originari, note e URL disponibili per tutti). Il precedente audit del builder unificato, invece, aveva contato **531 occorrenze radice–arco verso persone** oscurate nelle proiezioni specializzate, entro un insieme di 713 occorrenze complessive. **I due universi non coincidono** e non è ancora verificata la loro intersezione: i 382 sono archi sorgente, le 531 sono coppie radice–arco in specifiche viste del database unificato. Non sottrarre 382 da 531 e chiamare il risultato «relazioni residue».

### Metodo realmente eseguito
1. Lettura del grafo originale `atlante3d/database/grafo.json` (blob `57c65e209628b0fe43d0d5040bd27deb7e1624c8`), dell'estensione Mundi e del grafo Atlantis originale (blob `4863b3fe263154387de3388c0b813b5f94546f12`).
2. Applicazione delle identità di persona effettivamente accettabili secondo `CROSSWALK_GLOBALE_PERSONE_CHECKPOINT21_2026-11-10.json`: `documented_nominal` o `documented_alias`, target pubblico, tipi coerenti, controllo nominale quando previsto e assenza di riuso dello stesso target. **162 identità accettate**, come nel builder.
3. Applicazione dei soli **21** crosswalk tassonomici curati di `CROSSWALK_TASSONOMICO_MUNDI_ATLANTIS_LOTTO01_2026-11-15.json`, senza fusioni nominali.
4. Conversione delle **382 coppie originali** in coppie di ID canonici; ricerca in `musurgia-atlantis/grafo.json` di un collegamento Atlantis originale **diretto con gli stessi due estremi**, indipendentemente dal verso, mantenendo comunque distinti i predicati.
5. Conservazione di tutti i 382 record con **ID arco fonte, radice, autore, ID canonici, predicato, presenza di status e corrispondenza diretta Atlantis** nel registro macchina.

### Esito quantitativo

| Misura | Esito |
|---|---:|
| Identità personali Mundi–Atlantis accettate nel crosswalk globale | **162** |
| Archi Mundi analizzati nelle dodici famiglie | **382** |
| Archi con compositore indirizzato a un'identità Atlantis comune | **151** |
| Archi che mantengono compositore con ID Mundi separato | **231** |
| Archi con radice di genere unificata tramite crosswalk | **169** |
| Coppie canoniche autore–genere ripetute fra i 382 archi | **0** |
| Coppie canoniche con gli stessi estremi collegate *direttamente* nell'Atlantis originale | **0** |

La misura «231» riguarda **archi**, non 231 compositori distinti e non equivale a 231 duplicati irrisolti: un'identità Mundi autonoma può essere perfettamente corretta perché la persona non è ancora nell'inventario Atlantis. «Zero coppie Atlas dirette» non esclude somiglianze tematiche o percorsi indiretti.

| Radice | Totale | Compositore condiviso | Compositore separato |
|---|---:|---:|---:|
| Sinfonia | 71 | 20 | 51 |
| Messa | 40 | 18 | 22 |
| Madrigale | 22 | 10 | 12 |
| Variazioni | 34 | 17 | 17 |
| Mottetto | 34 | 12 | 22 |
| Oratorio | 26 | 7 | 19 |
| Cantata | 30 | 6 | 24 |
| Suite | 25 | 11 | 14 |
| Ouverture | 29 | 18 | 11 |
| Balletto | 26 | 12 | 14 |
| Fantasia | 25 | 14 | 11 |
| Lied | 20 | 6 | 14 |
| **Totale** | **382** | **151** | **231** |

Le cinque radici condivise presenti in questo sottoinsieme sono **Sinfonia, Madrigale, Oratorio, Cantata e Lied**. Le altre sette mantengono l'identità tassonomica Mundi, **senza che ciò implichi automaticamente un errore**: per esempio la non fusione di Balletto rientra nei vincoli HOLD precedenti.

### Qualità epistemica
- Nessuno dei predicati di pratica, repertorio o relazione storico-musicale attribuisce **automaticamente una singola composizione** all'autore.
- I **206** archi del registro originario senza `evidence_status` esplicito hanno comunque nota e URL: il loro stato non va assimilato a «senza fonte».
- I dati supportano ora un controllo per identità e non per somiglianza di nome, ma **non attestano la verifica esterna delle fonti** né il passaggio corretto autore → composizione → genere.
- Nessuna relazione `HOLD` è stata promossa, nessun record Flaminio è stato materializzato come opera e nessun arco è stato inserito nel database produttivo.

### Artefatto
[Registro machine-readable della riconciliazione](REGISTRO_RICONCILIAZIONE_382_ARCHI_MUNDI_ATLANTIS_2026-11-21.json).

### Prossimo gate ancora aperto
Ricostruire direttamente **le 531 occorrenze di persone** sul builder aggiornato con le **17 fonti reali** e la funzione di proiezione HTML vigente, salvando per ogni coppia `root_id + link_id`: ID canonico del soggetto, provenienza, predicato, qualità, presenza nella vista, eventuale corrispondenza con il registro dei 382. In quel contesto assegnare categorie operative `PRATICA_GENERE`, `OPERA_SPECIFICA_ATTESTATA`, `MENZIONE_CONTESTO`, `CONFRONTO`, `HOLD`, senza promuovere automaticamente archi. Servono inoltre i gate Node CLI completi e DOM/WebGL/Android.

**Gate odierno:** PASS del crosswalk **sui 382 archi Mundi selezionati**, non PASS del confronto integrale 382↔531, non PASS browser. **Lotto 1 OPEN; Lotto 2 BLOCKED; produzione invariata.**
