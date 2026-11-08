# THREAD DI CONTINUITÀ — MUSURGIA ATLANTIS
## Fusione dell'Atlante 3D di Musurgia Mundi nella nuova Atlantis
**Data:** 8 novembre 2026 · **Fase in corso:** audit di compatibilità, dopo la revisione storica conclusa al Lotto 210.

### Visione irrinunciabile
Atlantis diventerà la nuova interfaccia esplorativa di Musurgia Mundi, mantenendo il sito narrativo indipendente. Migrare tutti i dati dell'Atlante 3D: nodi, archi, tassonomie, relazioni spiegate e bidirezionali, fonti, profili, approfondimenti, rimandi precisi ai paragrafi, video e audioteche. Integrare la revisione storico-filologica Atlantis senza perdere i 210 lotti. Nessuna fusione cieca.

### Regola chiave dell'utente
**PERTINENZA RADICATA:** cercando Mozart, al livello I compare Leopold per il rapporto padre-maestro. Ai livelli successivi si mostrano solo rami dotati di evidenza pertinente *a Mozart*, NON tutti i vicini di Leopold. I capitoli del sito, le tassonomie, i luoghi e i generi non sono ponti automatici. Persone e opere possono essere collegate tramite rapporti specifici e documentati, non generici.


### Precisazione strutturale dell'utente (decisione definitiva)
**Ogni capitolo è SOLO una risorsa editoriale.** Non appare mai fra i nodi o archi nella modalità storico-musicale. «Barocco» è il nodo del periodo storico; «Barocco» capitolo è un'entità editoriale distinta, visibile esclusivamente interrogando Musurgia Mundi per le trattazioni, i paragrafi, gli ascolti e i materiali del sito. Nessun capitolo attraversabile ai livelli I–V, nemmeno in modalità integrata. Applicare a tutte le pagine. Le **7 omonimie periodo/ambito ↔ capitolo** del crosswalk sono ora **risolte: keep_distinct**; restano **150** identità candidate da valutare, inclusi **146** nominativi e **4** concetti. Test di regressione: Vivaldi→Barocco periodo sì; Vivaldi→cap:barocco no; Mozart→cap:musica-e-film no; attraverso periodo non si passa indiscriminatamente a tutti gli altri autori.

### Stato attuale verificato
- Atlante 3D `database/grafo.json`: 869 nodi / 2.437 archi.
- `database/relazioni.json`: 1.389 relazioni specialistiche con testi direzionali e fonti.
- `database/video.json`: 115 risorse / 207 associazioni.
- `database/consultazione.json`: 388 gruppi di voci / 492 profili.
- `database/collegamenti-sito.json`: 799 chiavi, 537 URL con ancore.
- `database/integrazione-operetta-musical.json`: 15 nodi dichiarati e 30 relazioni; `genere-musical` duplicato rispetto al grafo base.
- Atlantis `grafo.json`: 754 nodi / 1.718 archi / 586 verifiche indipendenti / 125 sospesi.
- Identificativi esatti in comune: **zero**; candidati per nome: **157**, di cui 7 omonimie periodo/ambito ↔ capitolo da mantenere separate.
- Mozart in Atlantis: 17 archi diretti, di cui 9 editoriali a capitoli. Nell'Atlante base: 16 archi; nell'archivio specialistico: 30 relazioni incidenti, tra cui **Leopold → Wolfgang**.
- Associazione video `youtube-S5wXKVeY7Nc` → `compositore-diego-ortiz` non risolvibile nel grafo Atlante di base/estensione.
- Nessun JSON pubblico e nessuna interfaccia modificati nell'audit.

### Materiali già prodotti
- `musurgia-atlantis/audit-integrazione/AUDIT_FASE1_2026-11-08.md` — verbale dettagliato, inventario, regole, anomalie e scaletta.
- `musurgia-atlantis/audit-integrazione/CROSSWALK_CANDIDATI_2026-11-08.json` — 157 associazioni candidate, tutte `not_validated`, 7 `editorial_collision_keep_distinct`.
- File origine preservati; repository `SkenderAle/github-pages`, branch `main`.


### Fase 2 avviata e documentata — importazione integrale di compositori/persone, spiegazioni archi
**Nuovo vincolo dell'utente:** importare **tutti** i compositori e le persone di Musurgia Mundi, non solo i 146 nomi in comune. Inoltre **tutti gli archi dell'Atlante 3D erano spiegati on mouse-over**: non perdere testo, logica direzionale, note e fonti nella migrazione; su Android rendere disponibili le stesse informazioni con tap e scheda.

**Fatto e pubblicato su branch main:**
- `musurgia-atlantis/audit-integrazione/STAGING_IMPORT_PERSONE_2026-11-08.json`: snapshot integrale di **509 record sorgente**, ossia **400 compositori + 100 altre persone** del grafo principale, più **9 compositori** dell'estensione operetta/musical. Per ogni record: payload originale completo, file e ID di provenienza, candidati Atlantis, stato non verificato. In questa fase nessuna fusione e nessun dato pubblico alterato.
- Analisi identità dei 509: **155** corrispondenze per nome (146 grafo base + 9 estensione), **3** per alias (Dufay, Chopin, Kusevickij), **351** senza corrispondenza per nome/alias. Anche i 351 devono entrare; crosswalk ancora da confermare; 297 persone già in Atlantis restano tutelate.
- `musurgia-atlantis/audit-integrazione/AUDIT_FASE2_PERSONE_E_SPIEGAZIONI_2026-11-08.md`: contratto tecnico, schema dati senza perdita e test Mozart-Leopold.
- Nel JS originale `atlante3d/app-livelli.js`: `relationSentenceBase` / `relationSentence(e,perspectiveId)` con tre livelli di eccezioni linguistiche; `pointermove` mostra la frase sopra l'arco; `pointerup` e `showRelation` aprono scheda «Perché sono collegati?» con frase, nota e fonti.
- `relazioni.json`: **1.389** relazioni specialistiche, tutte con `forward`, `reverse`, `note` e fonti. `grafo.json` Atlante: **2.437** archi descrivibili da funzione JS ma solo **1.231** note e **1.210** fonti dichiarate. Atlantis: **1.718** archi, **1.712** descrizioni e **1.698** con `evidence_urls`. Non confondere spiegazione automatica con validazione filologica.
- Principio già fissato: periodi storici restano visibili, capitoli editoriali solo su esplicita interrogazione dei materiali del sito; in profondità I–V applicare **pertinenza radicata**, non BFS indiscriminata.

**Prossima ripresa:** convalidare identità e alias dei 509, partendo dalle 155 corrispondenze nominali e dalle 3 per alias, e definire conversione senza perdita delle **3.856** relazioni Atlante (2.437 base + 1.389 specialistiche + 30 estensione), più le 1.718 Atlantis, senza sommarle ciecamente. Estrarre/frammentare le spiegazioni bidirezionali finali, incluse eccezioni testuali. Costruire un dataset unificato su staging separato; collaudare Mozart→Leopold e blocco delle ramificazioni non pertinenti prima della UI pubblica. Aggiornare questo thread prima del limite chat. Nessuna modifica ai dati di produzione finora.

### Prossima ripresa AUTOMATICA
**Prosecuzione Fase 2 — convalida identità e spiegazioni**: esaminare le 509 persone già in staging (155 coincidenze nominali, 3 alias, 351 senza corrispondenza), mantenere separate 7 omonimie concettuali/editoriali, valutare 4 concetti. Poi convertire e confrontare le relazioni spiegate, successivamente patrimonio audiovisivo/editoriale e collaudo. Nessuna interfaccia pubblica da modificare fino alla certificazione.

### Fase 2B — Aggiornamento successivo (8 novembre 2026)
**Fatto e pubblicato su `main`, soltanto in `audit-integrazione/`:**
- `VERIFICA_FORMALE_IDENTITA_2026-11-08.json` — controllo meccanico **509/509**: 155 match nominali; 3 alias; 351 senza match; **zero** duplicati di ID, nomi normalizzati e target proposti. Nessuna convalida storica automatica. Segnalati ID legacy `compositore-ottaviano-petrucci` e `compositore-goffredo-mameli` che hanno tipo corretto `persona`.
- `CONVALIDA_ALIAS_2026-11-08.json` — convalidate **3 coppie d'identità** con fonti d'autorità indipendenti: Guillaume Dufay / Guillaume Du Fay; Frédéric / Fryderyk Chopin; Sergej Kusevickij / Serge Koussevitzky. **Nessuna fusione dei nodi** o degli archi eseguita.
- `AUDIT_FASE2_TRIAGE_IDENTITA_2026-11-08.md` — verbale completo con riferimenti e limiti.
- **Ancora da convalidare storicamente:** 155 candidati nominali e 351 record senza candidato. Nel crosswalk restano 4 concetti da valutare; 7 collisioni capitolo/periodo confermate separate.
- **Produzione invariata:** grafo, interfaccia e JS pubblici non toccati. I 210 lotti storico-filologici restano intatti.

**PROSSIMA RIPRESA AGGIORNATA:** confronto biografico effettivo dei 155 candidati nominali con i metadati Atlantis, poi controllo degli alias per i 351 nuovi. Preparare schema unione non distruttiva, quindi traduzione fedele di tutte le spiegazioni bidirezionali (comprese le eccezioni di `relationSentence`). Test radicati Mozart→Leopold, blocco di ponti generici, nessun capitolo nel grafo storico, hover/tap. Nessuna pubblicazione di grafo pubblico prima della certificazione.

### Fase 2C — confronto effettivo dei grafi, nuove identità e blocco delle false fusioni (8 novembre 2026)
**Fatto su `main` (solo audit; produzione invariata):**
- `CONFRONTO_IDENTITA_GRAFO_FASE2C_2026-11-08.json` — confronto di **509** record con il JSON *reale* Atlantis (754 nodi, 297 persone); verifica delle **155** coincidenze nominali e **3** alias precedentemente documentati: tutti i **158** target esistono e sono `persona`; 0 conflitti di ruolo macroscopici, ma **155 identità non sono per questo certificate storicamente**. Rispetto allo staging: 500/500 record base e 9/9 estensione conservati integralmente (payload invariati).
- Ricerca per similarità anche fra i **351** inizialmente senza match: **34** presentano un nome simile (soglia 0,66); **due vere ulteriori identità recuperate con fonti d'autorità**: Sergej Djagilev = Sergej Diaghilev (BnF) e Bronislava Nijinska = Bronislava Nižinskaja (GND/Deutsche Biographie). Le coppie alias convalidate sono quindi **5** (3 + 2); i nomi senza corrispondenza attestata scendono a **349**.
- **Tre false fusioni proibite:** Giuseppe Tartini ≠ Giuseppe Mazzini; Johann Christian Bach ≠ Johann Sebastian Bach; Giulio Rospigliosi (**Clemente IX**) ≠ Clemente VIII (**Ippolito Aldobrandini**; prova vatican.va).
- `AUDIT_FASE2C_RICONCILIAZIONE_IDENTITA_2026-11-08.md` — verbale completo e fonti.
- Nessun nodo/collegamento nel grafo pubblico alterato. Nessuna cancellazione o fusione di record.

**PROSSIMA RIPRESA:** audit di identità storico-documentale dei 155 match nominali; ricerca alias/nomi religiosi/titoli nei 349 senza match; valutazione 4 concetti. Solo dopo certificazione, progettare merge reversibile e preservazione di tutti gli archi spiegati, direzioni, fonti e dei 210 lotti, con test Mozart/Leopold e filtro di pertinenza radicata I–V. Mantenere **tutti i capitoli solo nella vista editoriale**.

### Fase 2D — audit 155 identità, 4 concetti e sentinella Mozart/Leopold (8 novembre 2026)
**Pubblicato su `main` ESCLUSIVAMENTE in `musurgia-atlantis/audit-integrazione/`:**
- `CONVALIDA_IDENTITA_FASE2D_155_2026-11-08.json`: classificati **155/155** abbinamenti nominali, di cui **21** sostenuti da schede biografiche o cataloghi istituzionali consultati, **134** ancora non autonomamente controllati. Fra questi ultimi: **87** senza URL, **5** con sola guida di traslitterazione (NON prova di biografia), **11** con fonte esterna da esaminare, **21** con rinvii contestuali/indiretti, **10** soltanto editoriali. `name_review.status=verificato` non equivale sempre a verifica biografica.
- `CROSSWALK_CONCETTI_FASE2D_2026-11-08.json`: i **4** concetti prima in sospeso risultano semanticamente compatibili fra le basi (dramma giocoso, opera buffa, opera seria, quartetto d'archi), ma **NESSUN merge**. Coinvolti 91 archi incidenti Atlante e 18 Atlantis, dei quali **13 capitolo/editoriali** da NON attraversare. Le 7 omonimie periodo/capitolo restano `keep_distinct`.
- **SCOPERTA SENTINELLA:** Leopold Mozart `compositore-leopold-mozart` esiste fra le 509 persone sorgente, **ma non è ancora presente fra i 297 nodi-persona Atlantis**; Wolfgang `pers:mozart` c'è. L'archivio specialistico contiene `form-leopold-wolfgang` con frasi in entrambe le direzioni. La Stiftung Mozarteum documenta sia paternità sia insegnamento: https://mozarteum.at/en/wolfgang-amade-mozart.
- `STAGING_TEST_MOZART_LEOPOLD_FASE2D_2026-11-08.json`: payload sorgente Leopold preservato, proposta di ID `pers:leopold-mozart`, due predicati DISTINTI (padre-figlio / maestro-allievo) con spiegazioni e fonti, cinque test sentinella **ancora da ESEGUIRE**. NON espandere al livello II tutte le relazioni di Leopold, per esempio cappella di Salisburgo e trattato 1756 senza prova radicata su Wolfgang.
- Due cautele filologiche da non cancellare: Petrucci morto **autunno 1538** secondo recente DBI vs precedente 1539; Jacopo Corsi: morte 1602 / circa 1604 discordante in fonti Treccani, richiede conferma.
- `AUDIT_FASE2D_IDENTITA_CONCETTI_SENTINELLA_2026-11-08.md`: verbale e riferimenti completi.

**NUMERI DA CONSERVARE:** 509 persone sorgente; 21 coppie nominali con riscontro biografico + 5 coppie di alias già documentate = **26 coppie supportate**, senza alcuna fusione; 134 candidati nominali ancora aperti; **349 senza target**, comprendenti Leopold; 4 concetti compatibili non fusi e 7 capitoli/periodi separati. **Produzione immutata**.

**Prossima ripresa:** continuare verifica documentale dei 134 nominali; predisporre in staging 349 nuovi nodi con Leopold prioritario; confrontare i 3.856 archi sorgente e 1.718 Atlantis senza sommare ciecamente; convertire le spiegazioni mouse-over e `forward/reverse` originali con eccezioni; *eseguire* (non soltanto definire) i test Mozart/Leopold e il filtro di pertinenza radicata. Nessuna pubblicazione grafico/UI storica senza verifica.

### Fase 2D — Lotto 01, identità nominali documentate (8 novembre 2026)
**Lavoro concluso su branch `main`, soltanto in `audit-integrazione/`:**
- `CONVALIDA_STORICA_NOMI_FASE2D_LOTTO01_2026-11-08.json`: **11 identità nominali** con riscontro storico indipendente, 6 gruppi: Andrea/Giovanni Gabrieli (Treccani); Alessandro/Domenico Scarlatti (Treccani); Giulio/Francesca Caccini (Treccani); Robert/Clara Schumann (Schumann-Haus); George/Ira Gershwin (Cambridge); Wolfgang Amadeus Mozart (Mozarteum). I rapporti familiari sono **relazioni fra individui distinti**, mai una fusione reciproca.
- `AUDIT_FASE2D_LOTTO01_2026-11-08.md`: verbale, fonti, cautele e prossimi passi.
- **Identità documentate complessivamente: 16** = 5 alias delle Fasi 2B–2C + 11 nominali di questo lotto. **144** corrispondenze nominali ancora da verificare; **349** record senza equivalenza Atlantis attestata (da importare salvo ulteriori varianti dimostrate).
- **9/11 schede sorgenti di questo lotto hanno descrizioni provvisorie**: la convalida dell'identità NON trasforma il testo generico in biografia certificata. I ruoli specializzati di Atlantis devono sopravvivere.
- I riferimenti a 6 relazioni familiari/professionali sono riportati con versi e fonti originali, ma la verifica **degli archi** rimane autonoma rispetto alla verifica delle **persone**. Mozart–Leopold rimane test sentinella di pertinenza radicata.
- Nessuna modifica a grafi o UI pubblici; nessuna fusione.

**PROSSIMA RIPRESA:** Fase 2D, **Lotto 02**: esaminare le **144** corrispondenze nominali residue con fonti indipendenti, dando priorità a omonimi, pseudonimi e ruoli multipli. Poi 349 senza equivalenza attestata, 4 concetti, archi bidirezionali e collaudo filtro radicato. Tutti i capitoli esclusivamente editoriali.

### Protocollo di continuità
Aggiornare questo thread/documento di ripresa ad ogni fase significativa, **prima** di raggiungere il limite della chat. In una nuova conversazione richiamare il file sopra anziché ricostruire a memoria. Non promettere di poter aprire automaticamente una nuova chat: il documento è il passaggio di consegne.


### Fase 2D — prima tranche documentale dei candidati nominali (8 novembre 2026)
**Fatto e pubblicato su `main`, solo in `audit-integrazione/`:**
- `VERIFICA_DOCUMENTALE_NOMI_FASE2D_2026-11-08.json`: matrice integrale di **155/155** coppie con identità nominale coincidente. **16** hanno riscontro esterno autorevole su identità e ruolo (`authority_supported_no_merge`); **139** restano `pending_independent_historical_review`. **Zero fusioni**; le fonti nelle schede supportano la riconciliazione d'identità, non convalidano automaticamente gli archi.
- `AUDIT_FASE2D_VERIFICA_DOCUMENTALE_2026-11-08.md`: rapporto filologico e casi discriminanti: Petrucci stampatore (data di morte 1538 in DBI rispetto a sintesi con 1539); Mameli poeta; Giulio/Francesca Caccini distinti; Johann Strauss II diverso da I; Hervé alias Florimond Ronger; ruoli precisi in *West Side Story*; George/Ira Gershwin distinti; Zarlino teorico e compositore.
- **4 concetti** ancora candidati, senza fusione: dramma giocoso, opera buffa, opera seria; **quartetto d'archi** presenta polisemia (organico, formazione, repertorio/genere) e richiede verifica delle definizioni e degli archi.
- Le **5 corrispondenze per alias** già documentate (2B–2C) restano distinte dalle 16 nominali di questa tranche; **349** persone fonte restano prive di corrispondenza attestata.
- **Produzione invariata:** nessuna modifica a `musurgia-atlantis/grafo.json`, `index.html`, script di navigazione o file pubblici di Musurgia Mundi. Preservati tutti i 210 lotti storici.

**PROSSIMA RIPRESA:** procedere con le **139 identità nominali ancora in verifica**, a piccoli gruppi con fonti autorevoli e attenzione a omonimi, cronologie, professioni, pseudonimi e attribuzioni. Cercare ulteriori alias fra i **349** nuovi record; verificare la semantica dei **4 concetti**. Preparare successivamente merge reversibile di persone e relazioni senza perdere la logica bidirezionale delle spiegazioni hover/tap. Collaudare i cinque livelli della pertinenza radicata: Mozart→Leopold sì, ramificazioni genericamente incidenti no; nessun capitolo in modalità storico-musicale. Aggiornare il thread dopo ogni tranche significativa.
