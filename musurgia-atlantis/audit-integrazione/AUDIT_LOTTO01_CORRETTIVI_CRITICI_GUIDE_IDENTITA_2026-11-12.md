# Musurgia Atlantis — Lotto Flaminio 01/15, correttivi critici su guide, identità e attribuzioni

**12 novembre 2026** · Repository `SkenderAle/github-pages`, `main` · Solo area `musurgia-atlantis/audit-integrazione/`. **Lotto01 ancora APERTO**: 0/15 lotti chiusi; nessuna promozione della produzione `musurgia-atlantis/grafo.json` o `index.html`.

## Perimetro e metodo

Le prime **500 righe dell'elenco di 7.412 record dotati di URL guida Flaminio** restano tutte nello staging, con ID e metadati originali preservati (`flaminio:excel:<riga>`). Sono 494 URL distinti, 10 intestazioni autore, 64 rubriche originali. Non riesaminare per ora i 44.738 record senza link.

Riletto il database derivato e confrontate le guide Flaminio originali più fonti indipendenti (IMSLP, Nederlandse Bachvereniging, Henle e studi specialistici). All'audit precedente sono stati applicati correttivi **derivati**; l'Excel non è stato riscritto.

### 1. Correzione dell'algoritmo dei falsi duplicati

L'algoritmo del primo audit normalizzava i campi numerici con una funzione che **eliminava le cifre** dai numeri di catalogo. Risultato precedente errato: **89 righe** apparentemente duplicate per autore+numero+titolo. Correzione obbligatoria: normalizzazione del numero `NFKC + trim + spazi` **senza rimuovere cifre e senza fare casefold**, perché i simboli/cataloghi e maiuscole/minuscole possono distinguere opere.

**Risultato corretto: 14 righe coinvolte in 5 gruppi**, ossia:
- Bach **BWV 968**, righe **3942–3943**: *una stessa identità d'opera*, seconda riga con guida sbagliata;
- Beethoven **op. 108** (4632–4635, quattro guide), **WoO 155** (4637–4640, quattro guide), **op. 83** (4691–4692, due guide), **op. 52** (4696–4697, due guide): i titoli dell'Excel identificano **raccolte**, mentre le guide sono destinate anche a singoli pezzi. Le quattro raccolte NON vanno fuse con i loro singoli membri né le diverse guide considerate quattro opere nuove omonime.

**75 falsi alert rimossi** dalle 500 schede e dalla relativa vista. Conferma effettiva nel registro `AUDIT_IDENTITA_LOTTO01_500_RECORD_FEDERAZIONE_2026-11-12.json`, commit `692e167817c5db700d5e5f97f98fa96c338b3171`; grafo fonte commit `5da3a8c3e6ce331bd39ecb86e3feb563d0c8bcdf`.

### 2. Sei URL condivisi: classificazione *work-specific*, non per somiglianza

**Quattro coppie, una sola opera per coppia**:
- righe **78, 401**: Albinoni, *Vespetta e Pimpinone*, rubriche IV.B.4.1 / VI.A.62; tre intermezzi comici per *Astarto*; guida https://www.flaminioonline.it/Guide/Albinoni/Albinoni-Pimpinone41.html;
- **87, 345**: *Astarto*, IV.B.5.2 / VI.A.10; il documento registra musica largamente perduta; https://www.flaminioonline.it/Guide/Albinoni/Albinoni-Astarto6-10.html;
- **95, 389**: *L'incostanza schernita*, IV.B.5.8 / VI.A.33; soltanto frammenti/arie superstiti; https://www.flaminioonline.it/Guide/Albinoni/Albinoni-Incostanza33.html;
- **98, 399**: *Statira*, IV.B.5.11 / VI.A.53; https://www.flaminioonline.it/Guide/Albinoni/Albinoni-Statira511.html.

Gli intermezzi *Pimpinone* e il dramma *Astarto* sono **due opere distinte**, con una relazione storica contestuale `intermezzi_eseguiti_in`, non un'equivalenza.

**Due coppie con errore di collegamento, non equivalenza di opera**:
- **Bach BWV1070**, riga **3596**, contiene erroneamente la guida https://www.flaminioonline.it/Guide/Bach/Bach-Ouverture1069.html, corretta nel derivato in https://www.flaminioonline.it/Guide/Bach/Bach-Ouverture1070.html. L'opera BWV1069 della riga **3600** è diversa e mantiene la guida 1069;
- **Bach BWV968**, riga **3943**, contiene erroneamente https://www.flaminioonline.it/Guide/Bach/Bach-Sonata527.html, corretta nel derivato in https://www.flaminioonline.it/Guide/Bach/Bach-Adagio968.html, che è già l'URL corretto della riga **3942**. La Sonata BWV527 (riga **3940**) resta una composizione differente.

**Ulteriore errore di NUMERO e non di URL**: riga **3831** `467` nell'Excel, ma titolo, guida e repertori identificano **BWV 567**, *Preludio in do maggiore*, di **Johann Ludwig Krebs** (Krebs-WV401); Flaminio https://www.flaminioonline.it/Guide/Bach/Bach-Preludio567.html; confronto https://imslp.org/wiki/Prelude_in_C_major%2C_Krebs-WV_401_%28Krebs%2C_Johann_Ludwig%29. Non cancellare `source_catalogue_number_raw:"467"`: associare il numero verificato `567` come campo correttivo.

### 3. Attribuzioni, corretto lo *scope*

Il filtro storico iniziale aveva segnato **71** righe come dubbie. **36** casi riguardavano `Testo: autore ignoto`, cioè il librettista; altri **7** riguardavano `Melodia: autore ignoto` o il refuso `Tetso`, cioè poeta/melodia, non l'autore della composizione. Saldo: **28 segnalazioni** pertinenti a paternità musicale/arrangiamento, di cui **26 work-level** e **2 relative soltanto a versioni specifiche** (BWV660b e BWV713a). Non sono 28 false attribuzioni certificate, ma 28 record da affrontare con fonti.

Pubblicato `AUDIT_ATTRIBUZIONI_REALI_28_LOTTO01_2026-11-12.json`, commit `e784234277091641d82f2aa1d18e145812139f56`: **28/28** righe con stati individuali, 11 riscontri specifici di seconda fonte, gate chiusi o qualificati. Casi essenziali:
- BWV **723** (riga 3390): Johann Michael Bach, vecchia intestazione Bach JS da preservare solo come attribuzione storica; https://imslp.org/wiki/Gelobet_seist_du%2C_Jesu_Christ_%28Bach%2C_Johann_Michael%29.
- BWV **771** (3434): Nicolaus Vetter, vecchia etichetta BWV da conservare; https://imslp.org/wiki/Allein_Gott_in_der_H%C3%B6h_sei_Ehr_%28Vetter%2C_Nicolaus%29.
- BWV **567** (3831): Johann Ludwig Krebs, vedi sopra.
- BWV **53/189** (3028/3006): ex attribuzioni a J.S. Bach, **Hoffmann solo probabile**, niente arco `compone` certo, e BWV53 è un'aria superstite singola, non una cantata completa.
- BWV **1070** (3596): probabile non-J.S. Bach, possibile Wilhelm Friedemann, **HOLD**; https://www.bachvereniging.nl/en/bwv/bwv-1070.
- BWV **1020, 1031, 1033** (3654,3645,3641): filologia più prudente dell'intestazione Flaminio, contributi della cerchia dei Bach, **non** assegnare automaticamente in via esclusiva a C.P.E. Bach; https://www.henle.de/Flute-Sonatas-Volume-II-Three-Sonatas-attributed-to-J.-S.-Bach/HN-328 e https://www.bachvereniging.nl/en/bwv/bwv-1033.
- BWV **660b**: il dubbio su una specifica variante non invalida tutte le redazioni dell'opera.
- BWV **565**: ipotesi Kellner non certificata; distinguere ipotesi e fatto.

### 4. Nuovo livello di identificazioni storiche *visualizzabile*

File `OVERLAY_CRITICO_IDENTITA_E_ATTRIBUZIONI_LOTTO01_2026-11-12.json`, commit `5de5d3d9218862b93fe69aa31541caf2d0762c15`:
- **10 nodi identità d'opera** documentati da **15 righe fonte** (le quattro opere di Albinoni, BWV723, BWV771, BWV567, BWV968, BWV1070 e BWV53);
- **7 relazioni autore→opera** sostenute da fonti specifiche: quattro Albinoni e le tre attribuzioni Johann Michael Bach, Nicolaus Vetter, Johann Ludwig Krebs;
- **3 opere con autore in HOLD** (BWV968 per l'arrangiatore, BWV1070 e BWV53), *nessun* arco `J.S. Bach compone` forzato;
- **7 classificazioni opera→genere/forma** specifiche, non da rubriche automatiche;
- **15** collegamenti da schede originali alle identità, e **1** relazione contestuale `Pimpinone→Astarto`. Totale overlay **20 nodi/30 archi**; ID temporanei, prima del crosswalk globale definitivo.

**Anteprima aggiornata** `VISTA_GRAFO_FONTE_FLAMINIO_LOTTO01_500_2026-11-12.html`, commit `107f9cbbd320c7cb94f1966e8328e608da599f7b`. Legge **entrambi i JSON**, distinguendo le schede fonte dalle opere, i 7 autori riscontrati e le 3 paternità sospese, ed espone guide corrette con raw originale conservato. URL previsto https://musurgiamundi.com/musurgia-atlantis/audit-integrazione/VISTA_GRAFO_FONTE_FLAMINIO_LOTTO01_500_2026-11-12.html .

### 5. Collaudo effettivo e limiti

`REGRESSIONE_OVERLAY_CRITICO_LOTTO01_2026-11-12.json` (ultimo commit `60641202bdcc87b330ea2394b350b631723c1d10`): **`PASS_SIMULATED_DOM_WITH_VERIFIED_OVERLAY_ONLY`**. JS reale della pagina eseguito con DOM/fetch e renderer simulati: **500/500 schede selezionate**, 10/10 filtri autore, due guide corrette mostrate nelle schede, 7 nodi con autore riscontrato, 3 HOLD leggibili, **594 nodi / 1.030 archi**, zero identificativi duplicati / orfani. `REGRESSIONE_LOTTO01_500_INTEGRITA_FONTE_2026-11-12.json` aggiornato commit `dc7cceac6ace2c6e3940bde99fe8736866dd2ffc`.

**NON certificato:** accessibilità della pagina in un browser web esterno (qui URL sito non raggiungibile dal verificatore), render pixel/etichette e tocchi reali, validazione dei restanti record, importazione nel grafo canonico, crosswalk finale degli ID su tutte le tradizioni. Gli **11 riscontri indipendenti** sono su 28 casi da vagliare, non su 500 record. I dati source originali, le guide di Flaminio e il grafo di produzione non vengono sovrascritti.

**Passaggio successivo: ancora Lotto01.** Trattare i 17 rischi attributivi non ancora corroborati individualmente; risolvere Beethoven op108/WoO155/op83/op52 fino al livello della singola guida e delle parti, completare il crosswalk delle restanti 500 schede con i due grafi, effettuare verifica link per link, unire solo entità certificate e svolgere collaudo grafico 500/500 **sul grafo storico**, non sulla sola rete di fonte. **Non partire con Lotto02.**
