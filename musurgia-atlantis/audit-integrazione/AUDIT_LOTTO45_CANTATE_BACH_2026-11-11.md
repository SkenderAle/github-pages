# Musurgia Atlantis — Lotto 45: cantate e oratorio bachiano

**Data:** 11 novembre 2026 · **Ambito:** solo staging `audit-integrazione/` · **Produzione:** invariata.

## Fonti esaminate
- Flaminio catalogo BWV 1–200: https://www.flaminioonline.it/Biografie/Bach-catalogo-pagina1.html
- Flaminio catalogo BWV 201–524: https://www.flaminioonline.it/Biografie/Bach-catalogo-pagina2.html
- Flaminio indice guide: https://www.flaminioonline.it/Guide/Bach-Guide.html
- Per BWV 15, verifica dell'attribuzione a Johann Ludwig Bach: https://www.breitkopf.com/work/330/kantate-denn-du-wirst-meine-seele-nicht-in-der-hoelle-lassen e https://imslp.org/wiki/Denn_du_wirst_meine_Seele_nicht_in_der_H%C3%B6lle_lassen%2C_JLB_21_%28Bach%2C_Johann_Ludwig%29
- Per BWV 11, identificazione dell'Oratorio dell'Ascensione: https://imslp.org/wiki/Ascension_Oratorio%2C_BWV_11_%28Bach%2C_Johann_Sebastian%29

## Risultato
- **25** numeri BWV esaminati: **1–20** e **201–205**.
- **23** opere singole nel registro attivo di staging, **2 HOLD** per attribuzione. Nessun movimento o versione censito come opera autonoma in questo lotto.
- **18** cantate sacre; **4** cantate profane; **1** Oratorio dell'Ascensione BWV 11, separato dal sottogenere Cantata sacra, pur preservando la collocazione editoriale originale nel catalogo Flaminio.
- **22 URL individuali** a guide Flaminio osservati e riportati. Per BWV 204 non risulta una guida individuale nell'indice consultato: `null`, senza URL inventati.
- **BWV 15**: brano spurio nel catalogo di Johann Sebastian Bach, opera di Johann Ludwig Bach (JLB 21); niente nodo di produzione come Bach JS. **BWV 203**: attribuzione incerta dichiarata da Flaminio, sospeso finché la paternità non è stabilita.
- Incertezza sulla collazione con l'Excel `compositori_flaminio.xlsx`: **non** è stato ottenuto il file originale in questa sessione. Perciò nel Lotto45 non si attribuiscono righe Excel non verificate. Fonte effettiva: pagine catalografiche online.
- Nessuna importazione integrale della descrizione Flaminio: solo incipit, BWV, metadati essenziali, URL e note sintetiche.

## File su branch main
- `LOTTO45_25_SCHEDE_CANTATE_BACH_2026-11-11.json` (commit `78b164e4bfcef8dcbe40e50008cb8dbaf8185fb6`).
- `PREVIEW_RADICATA_CHECKPOINT06.html`: integrazione dati, 23 opere, due sottogeneri Cantata sacra e Cantata profana; patch originale `28304cc2eb8dc70c5a66a68fe28d815278dc5871`, rettifica riuso archi `be55980b5fb123af1eb24f5055ae3d4acb2f8623`.

## Regole applicate
- Riutilizzati i nodi legacy `legacy:gf:genere-cantata` e `legacy:gf:genere-oratorio`; nuovi `atlas:gf:cantata-sacra` e `atlas:gf:cantata-profana`. Non sono creati doppioni dei macrogeneri.
- Due archi preesistenti **riutilizzati** per Johann Sebastian Bach → Cantata (`legacy:gf:edge:1314`) e Bach → Oratorio (`legacy:gf:edge:1766`), evitati archi paralleli nuovi.
- Tracciato: Bach → Cantata → Cantata sacra/profana → singole BWV; per BWV 11: Bach → Oratorio → BWV 11. Ogni opera resta direttamente collegata al compositore e al proprio genere; indici derivati non transitivi.
- Cercando la radice Cantata si espongono i sottogeneri senza imporre tutte le singole opere al livello I. Cercando una cantata appare il circuito autore↔opera↔sottogenere. Nessuna espansione da uno stesso genere verso autori non correlati.

## Regressione strutturale eseguita
È stato estratto ed eseguito **il codice realmente pubblicato** nel modulo 45, con **l'overlay autentico dei 50 nodi genere-forma/271 relazioni legacy** e un nodo autore `pers:bach` esplicitamente incluso nel dataset di prova. **Non** è un test end-to-end su `grafo.json` completo.

Risultati: **25 nodi aggiunti** (23 opere, 2 generi), **50 archi nuovi**, **0 duplicati ID nodo**, **0 duplicati ID arco nuovo**, **0 archi nuovi orfani**; riuso di 2 archi legacy. Testate **9 radici**: Bach, Cantata, Oratorio, Cantata sacra, Cantata profana, BWV 1, BWV 11, BWV 201, BWV 205. Per Bach a livello 4: 28 nodi nel sottografo di prova, inclusi 23 nodi opera, e 52 archi visualizzati (50 nuovi più 2 storici). I due HOLD assenti; la categoria Persone a profondità 0 non forza Bach.

La sintassi JavaScript dell'intera preview aggiornata è stata verificata. **Non** sono stati eseguiti né il collaudo grafico WebGL nel browser pubblico, né una regressione su tutto `grafo.json` con tutti gli overlay, né l'HTTP test di ogni URL. Il tentativo di aprire l'anteprima live con uno strumento di lettura web non ha dato una pagina accessibile: non scambiarlo per un esito positivo o negativo del deploy.

**Preview anticache per prova utente:** https://musurgiamundi.com/musurgia-atlantis/audit-integrazione/PREVIEW_RADICATA_CHECKPOINT06.html?v=cantate45-20261111

## Successiva tranche proposta
Cantate BWV **21–50** con triage preliminare delle attribuzioni, sezioni d'opera, versioni e sottogeneri storicamente giustificati; poi ulteriori BWV 206 ss. profane. Prima della promozione pubblica: collaudo WebGL reale e verifica sul workbook Flaminio originale.
