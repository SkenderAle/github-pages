# Audit tassonomico cross-DB — forme vocali sacre e profane
**15 novembre 2026 · Stato IN_REVIEW · Lotto 2 Flaminio bloccato · nessun grafo pubblico modificato**

## Tre archivi controllati
- Musurgia Mundi: **869 nodi, 2.437 archi**. 42 record nominali contenenti termini pertinenti nel primo filtro (comprendono falsi positivi).
- Musurgia Atlantis: **754 nodi, 1.718 archi**. 45 record nominali nel primo filtro (opere, concetti, persone e contesti).
- Flaminio Lotto 1: **1.365 nodi, 2.780 archi**. 148 candidati nominali dopo esclusione di schede e rubriche di provenienza più evidenti (non il numero totale delle opere vocali).
- Tutti i 2.988 record di base sono nel `CENSIMENTO_TASSONOMICO_TUTTI_RECORD_2026-11-15.jsonl`; la ricerca nominale per questa famiglia è un **punto d'ingresso**, non una convalida universale né una classificazione automatica.

## Crosswalk già presente da non duplicare
`genere-cantata ↔ senso:cantata`, `genere-oratorio ↔ senso:oratorio`, `genere-lied ↔ senso:lied`, `madrigale ↔ senso:madrigale`, `genere-lauda ↔ senso:lauda`. Rispettare provenienza e limiti d'estensione dei rispettivi nodi concettuali.

## Nuove distinzioni
1. **Musica vocale**: repertorio trasversale; la separazione sacro/profano è dimensione per testo, destinazione, contesto e uso, non una divisione totale di tutti i generi. La stessa opera può avere uso liturgico e concertistico.
2. **Messa**: distinguere rito/testo liturgico, composizione musicale e singole sezioni (Kyrie, Gloria, Credo, Sanctus, Agnus Dei). **Requiem** come tradizione della Messa dei defunti, pur con composizioni concertistiche e testi aggiunti (es. *War Requiem*); **Officium defunctorum** di Victoria include ufficio e Messa, non ridurlo a sola Messa.
3. **Mottetto**: non appiattire il medievale (compresa isoritmia dove attestata), il rinascimentale e il barocco in un unico sottotipo. Il nodo Atlantis `senso:motetto-barocco` comprende anche concerto sacro: ponte storico, non identità tassonomica piena.
4. **Cantata**: sacra/profana sono articolazioni d'uso del genere, non due radici di composizioni indipendenti. Conservare eventuali riusi, parodie, versioni e attribuzioni dubbie. Non classificare automaticamente come sacra ogni cantata di Bach.
5. **Oratorio**: di soggetto sacro o profano; distinto dalla Passione e dall'Opera teatrale, con possibili intersezioni storico-drammaturgiche. Ogni singola parte dell'**Oratorio di Natale BWV 248** resta parte della struttura integrale e non un nuovo Oratorio autonomo.
6. **Passione**: forma con rapporto al testo evangelico, storicamente plurale; distinguere Passione responsoriale, motettistica, oratoriale ove fonti consentano. Le versioni della Passione secondo Giovanni di Bach non diventano composizioni totalmente indipendenti per semplice etichetta di redazione.
7. **Lied**: genere vocale, non esclusivamente voce-pianoforte in tutte le epoche e contesti. **Ciclo di Lieder** è struttura composita: `An die ferne Geliebte` op.98 si collega alla categoria ciclo; singoli Lieder distinti.
8. **Madrigale**: il madrigale trecentesco e quello cinquecentesco hanno storie formali differenti; i madrigali spirituali, il madrigale rappresentativo e il teatro madrigalistico richiedono legami qualificati, non merge ciechi.
9. **Corale luterano**: distinguere canto vocale/assembleare, polifonia e repertorio **strumentale su corale**. Un preludio corale d'organo deriva dal corale ma non è un sottogenere vocale.
10. **Chanson, Ballata, Lauda, Inno**: mantenere specificità linguistiche/storiche e funzioni. Il termine ballata italiano del Trecento non è sinonimo generale di ballad tardo-moderna; l'Inno civico non include ogni inno liturgico.

## Sentinelle documentate negli archivi
- Atlantis: `opera:messe-notre-dame`, `opera:missa-papae-marcelli`, `opera:beethoven-missa-solemnis-op123`, `opera:britten-war-requiem-op66-1962`, `opera:victoria-officium-defunctorum-1605`.
- Atlantis: `opera:dufay-nuper-rosarum-flores-1436`, `opera:isaac-quis-dabit-capiti-meo-1492`, `opera:handel-messiah-hwv56`, `opera:haydn-die-schoepfung-1798`.
- Atlantis: `opera:an-die-ferne-geliebte-op98`, `opera:schubert-erlkoenig-d328`, `opera:passione-matteo`.
- Flaminio: `audit:fl01:jsb04:genre:messa`, `audit:fl01:jsb04:genre:messa-kyrie-gloria`, `audit:fl01:jsb04:genre:passione`, `audit:fl01:jsb04:genre:mottetto`, `audit:fl01:jsb04:genre:oratorio`, `audit:fl01:jsb04:genre:magnificat`.
- Flaminio: parti dell'Oratorio di Natale `audit:fl01:jsb04:doc:part:BWV248-1` … `BWV248-6`; versione della Giovanni `audit:fl01:jsb04:doc:version:245.1`; `audit:fl01:jsb02:work:excel3006` con attribuzione a Bach spuria: NON promuovere autore.
- Flaminio: cantata profana `audit:fl01:jsb01:work:excel2660` con attribuzione incerta; `audit:fl01:jsb01:work:excel2668` materiale riutilizzato: preservare provenienza e tracciato.

## Output e verifiche
`OVERLAY_TASSONOMICO_VOCALE_SACRO_PROFANO_2026-11-15.json`: **24 nodi analitici proposti, 50 relazioni proposte** con ID di origine verificati in Mundi, Atlantis e Flaminio (controllo di integrità degli endpoint: **0 riferimenti mancanti**). **Non caricato nel builder** e **non validato musicologicamente in blocco**. Un ID Flaminio abbozzato e non esistente è stato scartato e riportato come HOLD, non creato arbitrariamente.

## Gate aperti per completamento
1. Ricercare e collocare sistematicamente tutti i record pertinenti, anche non riconoscibili dal titolo, nel corpus e negli overlay di relazioni specialistiche.
2. Verificare le fonti sulle differenze storiche e le attribuzioni, registrando HOLD quando serva; non attribuire forme sacre/profane solo dal titolo.
3. Allineare `genere-messa` con `audit:fl01:jsb04:genre:messa` senza produrre duplicati, valutando le differenze storico-liturgiche.
4. Controllare relazione autore→opera→genere→testo/organico→famiglia con filtri radicati I–V, senza espansione da un genere comune a opere di altri autori.
5. Verificare i legami fra Opera, Oratorio, Cantata, Passione e teatro sacro; conservare le differenze di realizzazione scenica e storica.
6. Solo al termine convalidare lo stato `FAMILY_VALIDATED`; al momento **IN_REVIEW**.

**Il Lotto 2 di Flaminio non deve partire prima dell'unificazione dimostrata del Lotto 1.**
