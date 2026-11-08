# Musurgia Atlantis — Fase 2K, Lotto 02: riconciliazione strutturale delle relazioni
**Data:** 8 novembre 2026 · **Repository:** `SkenderAle/github-pages`, `main`  
**Ambito:** soltanto `musurgia-atlantis/audit-integrazione/`; produzione invariata.

## Scopo e confine
Conservare integralmente i **3.856 archi dell'Atlante 3D** (2.437 base + 1.389 relazioni specialistiche + 30 estensione operetta/musical) prima di confrontarli con i **1.718** collegamenti Atlantis. La coincidenza di due estremi NON prova l'identità della relazione. Nessuna unione automatica, nessuna eliminazione di duplicati presunti, nessuna modifica dei 210 lotti storico-filologici.

## Lavoro pubblicato
- `STAGING_NODI_NON_PERSONE_FASE2K_374_2026-11-08.json`: **374 identità non-persona** e **375 payload originali**, perché `genere-musical` ha una definizione nel grafo base e una nell'estensione. Le due versioni di genere/tassonomia restano entrambe conservate, senza sovrascrittura. Ogni periodo, corrente, ambito e geografia è registrato come entità storica/concettuale distinta dalle pagine editoriali.
- `STAGING_ARCHI_BASE_FASE2K_PARTE01..05_2026-11-08.json`: **2.437/2.437** archi base, dati nativi conservati senza perdita. ID sintetici da indice dello snapshot; tutte le estremità risolte. Base: **0** frasi `forward/reverse` esplicite; **1.231** note presenti e **1.210** liste fonti non vuote (1.206 archi senza note e 1.227 senza elenco fonti). Le frasi storiche venivano generate in `app-livelli.js`: **NON** fingere che siano già portate.
- `STAGING_ARCHI_SPECIALISTICI_FASE2K_PARTE01..05_2026-11-08.json`: **1.389/1.389** relazioni specialistiche, tutte con frammenti `forward`, `reverse`, `note` e fonti. È preservato ogni campo originale, comprese le note, le riserve e le revisioni.
- `STAGING_ARCHI_ESTENSIONE_FASE2K_30_2026-11-08.json`: **30/30** relazioni, tutte con frammenti bidirezionali e fonti, **20** con nota. Non confondere Operetta, Musical e Broadway come una sola entità.
- `SNAPSHOT_RENDERER_ORIGINALE_FASE2K_2026-11-08.txt`: copia integrale e verificata del sorgente `atlante3d/app-livelli.js` al blob `b7644154af527666d7b15bca8e31fe4f13924547`, comprese `relationSentenceBase`, `relationSentence` e le **tre successive ridefinizioni** di `relationSentence`, oltre alle interazioni hover/click. Fonte di riferimento immutabile: la riproduzione del testo finale e delle sue eccezioni linguistiche **non è stata ancora eseguita**.
- `CANDIDATI_COLLISIONI_ARCHI_FASE2K_2026-11-08.json`: confronto delle adiacenze, con ID legacy, ID proposti e predicati divergenti.
- `CERTIFICAZIONE_INTEGRITA_STAGING_FASE2K_LOTTO02_2026-11-08.json`: **10 controlli strutturali superati**; i payload delle **3.856** relazioni e di **375** definizioni non-persona sono stati riconfrontati agli originali; le funzioni JS sono state confrontate col loro snapshot.

## Sovrapposizioni da NON risolvere alla cieca
Su **3.856** archi legacy si rilevano **250 coppie di estremi** presenti in più archivi, coinvolgendo **508 record**: nessuna ha già lo stesso `kind` letterale in tutte le registrazioni del proprio gruppo. Rilevate inoltre **36** coppie con archi plurimi solo all'interno del rispettivo archivio.

Fra i legacy e Atlantis vi sono **20 relazioni specialistiche** con la stessa coppia di estremi di archi Atlantis, riferite a **16 coppie distinte**. **0** cancellazioni o fusioni semantiche autorizzate. Per esempio:
- **Messiaen ↔ Boulez**: il dossier specialistico ha anche una relazione di *commissione*; Atlantis documenta il rapporto di insegnamento. Sono predicati distinti.
- **Tallis ↔ Byrd**: `maestro-allievo` e `edizione-congiunta` in legacy non coincidono con il solo privilegio di stampa regio del 1575 in Atlantis. Non presumere il rapporto didattico per la sola presenza di collaborazione editoriale.
- **Chopin ↔ Liszt**: `six-chants-polonais-s480` e la biografia scritta da Liszt sono fatti diversi, sebbene la coppia di nomi coincida.
- **Haydn → Beethoven**: è candidato a riconciliazione specifica del rapporto pedagogico, ma anche qui verificare oggetto, cronologia, verso, formulazione e fonti prima di chiudere il confronto.

## Integrità e validazione
Tutti gli archi sorgente hanno identificativi di estremità presenti nei dati base/estensione (0 orfani). La partizione dei **509** profili fonte resta: **162** corrispondenze d'identità verso Atlantis e **347** nuovi candidati senza equivalenza. Il mapping delle persone NON certifica alcun arco. Conservata la distinzione tra i **7** casi omonimia capitolo/periodo e tra i quattro concetti in crosswalk; in particolare `genere-quartetto-archi` NON è sinonimo automatico dell'intero `senso:quartetto`.

**Test superati:** controllo integrale payload base, specialisti, estensione, nodi non-persona; assenza di perdite di testo direzionale originariamente esplicito; snapshot JS esatto; baseline sorgenti invariata; contabilità delle sovrapposizioni. Vedere JSON di certificazione.

## Vincoli invariati
- Capitoli e audioteche: soltanto **piano editoriale**, mai nodi del grafo storico.
- Generi, periodi, scuole e città: **nessun ponte automatico** per attraversamento I–V.
- Frasi originali `forward`, `reverse`, `note`, `sources` e conversione delle eccezioni di `relationSentence`: mantenere direzione e tracciabilità; versione finale non ancora collaudata su UI.
- La verifica di identità dei nodi non convalida contenuti biografici né archi; nessuna fontana di causalità da semplice adiacenza.
- Dati Atlantis e 210 lotti storico-filologici intatti; nessuna fusione cieca.

## Prossima ripresa — Fase 2K, Lotto 03 / Fase 2L
1. **Valutare semanticamente le 20** collisioni con Atlantis (16 coppie di persone) confrontando predicati, direzione, cronologia, nota e fonti. Assegnare decisioni `identical_specific_relation`, `related_distinct_predicate`, `contradiction` o `pending_authority`, senza cancellare registrazioni.
2. Esaminare i **250 gruppi** di sovrapposizione tra archivi sorgente in tranches documentate e non per mera stringa `kind`.
3. Portare **esattamente** l'algoritmo originale dei tooltip (compresi 3 livelli di eccezioni) in un adapter testabile e confrontare bidirezionalmente output legacy vs nuovo per i casi difficili.
4. Definire e testare gate di pertinenza radicata sui 5 livelli senza capitoli-ponte; già superato lo smoke test Mozart–Leopold della Fase 2K Lotto 01, ma test integrale UI desktop/Android resta aperto.
5. Continuare audit delle **347** nuove persone e successivamente del patrimonio audiovisivo/editoriale; nessuna pubblicazione del grafo o UI prima della certificazione.
