# Audit Generi e forme — Lotto 01: inventario gerarchie e primi record opera→genere
**9 novembre 2026 — main — soltanto audit/staging, GUI esclusa**

## Metodo e sorgenti esaminate
Esaminati direttamente nel repository i file:
- `GENERI_FORME_LEGACY_PREVIEW_CHECKPOINT11_2026-11-09.json` (50 nodi genere/forma e 271 archi compositore→genere, 93 compositori con relazioni nella selezione);
- `WORK_GENRE_TASSONOMIA_CANDIDATI_CHECKPOINT12_2026-11-09.json` (4 composizioni mozartiane già proposte come casi di classificazione);
- `STAGING_NODI_NON_PERSONE_FASE2K_374_2026-11-08.json` (374 entità legacy non-persona: 344 `corrente`, 7 `periodo`, 5 `ambito`, 18 `geografia`);
- `AUDIT_TIPOLOGIE_NODI_MUNDI_ATLANTIS_2026-11-08.md` (inventario precedente: Atlantis 193 `opera`, 14 `versione-opera`, 1 `parte-di-opera`, 8 `allestimento`, 7 `produzione`).
Non è stato possibile in questa tranche leggere in un'unica risposta i due grandi `grafo.json` di produzione, per dimensioni; non si dichiara pertanto verificato il catalogo completo delle 193 opere. I conteggi Atlantis derivano dall'inventario precedente e non sono un ricalcolo odierno.

## Risultati effettivi
1. **16 legami gerarchici tassonomici** individuati negli attributi `original_legacy_record.taxonomy.parent` del primo overlay. **15** parent presenti nei 50 nodi selezionati; **1** parent assente nel sottoinsieme: `forma-contrappunto-organistico-tardoottocento → polifonia`. Assente nel sottoinsieme non significa assente dall'intero Atlante.
2. **4** sottotipologie operistiche si dichiarano figlie di `genere-opera`: `opera-buffa`, `opera-seria`, `opera-semiseria`, `dramma-giocoso`. Sono asserzioni dei metadati legacy da controllare storicamente e proiettare con predicato tipizzato; nessuna equivalenza indiscriminata.
3. **4 composizioni** in precedente staging (Mozart): `opera:figaro`, `opera:Don-giovanni`, `opera:flauto-magico`, `opera:cosi-fan-tutte-1790`. Da queste sono state estratte **8 attribuzioni candidate**, mantenendo generi generali, sottogeneri e denominazioni storiche come faccette **non tutte certificate**. I 4 record non rappresentano il corpus complessivo: sono test regressivi riusabili.
4. Il precedente Checkpoint 12 conserva per Figaro la distinzione storica fra `commedia per musica` del frontespizio del 1786 e la successiva/contestuale designazione `dramma giocoso`. Non appiattire queste due denominazioni su una pretesa identità assoluta. Per Flauto magico il `Singspiel` è annotato come forma da studiare, ma il vecchio overlay dei 50 non offre qui un ID specifico riconciliato; non crearne uno solo per completare il quadro.
5. La categoria legacy `corrente` è un contenitore molto più ampio del semplice `genere-forma`: gli alberi proposti dall'utente includono tecniche, organici, tradizioni, periodi e liturgie. È necessaria cernita semantica prima di qualsiasi unificazione.

## Output dati ripetibile
`STAGING_CLASSIFICAZIONE_OPERE_LOTTO01_2026-11-09.json`, commit `b32eef8534c9d31fe3964c2b413ceb3e78567016`, contiene 16 gerarchie con payload originario e provenienza e 4 schede-opera con 8 classificazioni candidate, ID originali e collegamenti alle evidenze annotate. I campi `review_status` e `ready_for_public_merge=false` evitano pubblicazioni premature.

## Prossimi lotti, GUI rinviata
- **Lotto 02:** estrarre l'elenco effettivo di tutti i nodi `opera`, `versione-opera` e `parte-di-opera` Atlantis e censire i legami diretti verso concetti musicali, con ID/fonti originali. Non fare deduzioni dalle relazioni compositore→genere.
- **Lotto 03:** classificare le opere già collegate alle forme, prima verificando eventuali voci sinonime legacy; poi integrare le classificazioni mancanti con fonti affidabili indipendenti e mantenere multiappartenenza.
- **Lotto 04:** estendere ai tre repertori camera, sinfonica e sacra, separando sottogeneri da organici/tecniche/destinazioni; poi trattare teatro e altri repertori.
- **Chiusura audit:** controlli di integrità, doppi, falso attraversamento, fonti per opera, regressioni multi-radice, liste delle lacune ancora aperte. **Soltanto a quel punto riprendere GUI.**

**Protezione:** nessuna modifica a `musurgia-atlantis/grafo.json`, `musurgia-atlantis/index.html`, `atlante3d/`, 210 lotti filologici o UI di produzione.
