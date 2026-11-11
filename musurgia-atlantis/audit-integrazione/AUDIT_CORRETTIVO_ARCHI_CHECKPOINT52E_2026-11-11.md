# Checkpoint 52E — Ricucitura degli archi tra nodi già visibili

**Data:** 11 novembre 2026
**Ambito:** SOLO staging `musurgia-atlantis/audit-integrazione/`.
**Nessuna modifica:** `musurgia-atlantis/grafo.json` e `musurgia-atlantis/index.html` pubblici.

## Problema
Gli helper di selezione dei sottografi aggiungono nodi già documentati ma possono omettere archi fra quei nodi. I casi visti dall'utente: `Concerto` isolato dalle sottocategorie e, per `Le quattro stagioni`, collegamenti verso il genere e l'autore non sempre disegnati. Ridurre la densità della rete tagliando archi è vietato: la visualizzazione va filtrata in modo dichiarato e reversibile.

## Correzione
In `PREVIEW_RADICATA_CHECKPOINT06.html`, `completeVisibleEvidence52E(result)` interviene **DOPO** tutti gli helper radicati incluso Vivaldi 52B e **PRIMA** del filtro di categoria grafico. Indicizza gli ID dei nodi già visibili, quindi aggiunge gli archi **realmente presenti nel dataset** fra tali nodi quando non già disegnati. Non espande nodi, non induce nuovi archi, non passa da un genere a compositori estranei. Non modifica gli originali.

**Vincolo filologico:** le relazioni con `quality_gate=sospeso` o `non_riscontrato`, le specifiche negazioni identificate, le relazioni `ponte_editoriale_non_documentato`, gli stati `verification_status` sospesi e gli stati HOLD/REJECTED/SUSPENDED **restano nel dataset e nei registri**, ma non vengono ripristinati automaticamente in vista come fatti verificati. Questa lista è conservativa e non è una certificazione di tutte le possibili convenzioni di qualità del corpus: audit degli altri gate ancora aperto.

**Commit staging:**
- `704cb46f5c44af14ee47e7b01a426ebd192c6133`: ricucitura di tutti gli archi presenti con estremi visibili.
- `8af6fe3758b07836675b3c27e820f6f775609f7c`: esclusione dal recupero automatico di HOLD e negazioni filologiche.

## Prove effettivamente eseguite
Registro JSON: `REGRESSIONE_CORRETTIVO_ARCHI_CHECKPOINT52E_2026-11-11.json`, commit `26e56ed4c1a7d886452f8757a3272e76d956d42c`.

**Primo test sulla versione iniziale 52E:** grafo reale originale 754 nodi/1718 archi, overlay veri Generi e forme, Famiglia Concerto e gruppi Checkpoint40, codice originale di staging per Stagioni e completamento archi; **10 radici, 0 errori di duplicazione/orfani, 0 archi ammessi mancanti nel banco di prova**. In sei radici vivaldiane (Vivaldi, raccolta e quattro RV) il completamento disegna **un arco esistente aggiuntivo** che gli helper non avevano emesso. Le altre radici selezionate non hanno aggiunte.

**Secondo test sulla versione con HOLD:** con il grafo reale, `E0342` con `quality_gate=sospeso` resta nel dataset ma non viene aggiunto alla vista; `E0715` (Vivaldi→Quattro stagioni) viene invece mostrato. Zero duplicati dopo due chiamate successive, zero orfani. Parsing JS: 3/3 script inline PASS.

**Limite dichiarato:** il primo test delle 10 radici è precedente al filtro HOLD; il test successivo copre il filtro HOLD su campione specifico, non tutte le 10 radici dopo il filtro. Non affermare che questa modifica sia stata provata sull'intera federazione di 24 manifesti o con rendering reale WebGL. Il Checkpoint 52D end-to-end resta aperto.

## Prossima ripresa
Ripetere regressione con gli 24 file e filtri in un unico runtime; verificare archi candidati esclusi dal quality gate e la differenza fra filtraggio di dati e filtro visuale. Esaminare connessioni Mozart/Singspiel, Sonata, Quartetto, Bach BWV174 e BWV200. Non promuovere in produzione senza certificazione completa.
