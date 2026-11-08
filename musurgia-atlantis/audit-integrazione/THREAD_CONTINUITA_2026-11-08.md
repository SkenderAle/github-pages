# THREAD DI CONTINUITÀ — MUSURGIA ATLANTIS
## Fusione dell'Atlante 3D di Musurgia Mundi nella nuova Atlantis
**Data:** 8 novembre 2026 · **Fase in corso:** audit di compatibilità, dopo la revisione storica conclusa al Lotto 210.

### Visione irrinunciabile
Atlantis diventerà la nuova interfaccia esplorativa di Musurgia Mundi, mantenendo il sito narrativo indipendente. Migrare tutti i dati dell'Atlante 3D: nodi, archi, tassonomie, relazioni spiegate e bidirezionali, fonti, profili, approfondimenti, rimandi precisi ai paragrafi, video e audioteche. Integrare la revisione storico-filologica Atlantis senza perdere i 210 lotti. Nessuna fusione cieca.

### Regola chiave dell'utente
**PERTINENZA RADICATA:** cercando Mozart, al livello I compare Leopold per il rapporto padre-maestro. Ai livelli successivi si mostrano solo rami dotati di evidenza pertinente *a Mozart*, NON tutti i vicini di Leopold. I capitoli del sito, le tassonomie, i luoghi e i generi non sono ponti automatici. Persone e opere possono essere collegate tramite rapporti specifici e documentati, non generici.

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

### Prossima ripresa AUTOMATICA
**Fase 2 — audit di identità e ontologia del crosswalk**: confermare le 146 persone, valutare i 4 concetti, NON fondere 7 categorie omonime con i capitoli; ricercare alias e identità non riconoscibili dal nome. Poi affrontare fusione delle relazioni specialistiche e del patrimonio multimediale. Nessuna interfaccia pubblica da modificare fino al collaudo.

### Protocollo di continuità
Aggiornare questo thread/documento di ripresa ad ogni fase significativa, **prima** di raggiungere il limite della chat. In una nuova conversazione richiamare il file sopra anziché ricostruire a memoria. Non promettere di poter aprire automaticamente una nuova chat: il documento è il passaggio di consegne.
