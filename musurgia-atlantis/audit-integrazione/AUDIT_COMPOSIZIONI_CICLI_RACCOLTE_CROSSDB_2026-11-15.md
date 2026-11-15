# Audit cross-database — Composizioni, movimenti, cicli e raccolte
**15 novembre 2026 · IN_REVIEW · Produzione invariata · Lotto 2 Flaminio BLOCCATO**

## Fondamento
Rilievo trasversale dei tre archivi a partire dal censimento da **2.988 record sorgente** e dal vincolo approvato: **una Suite è una composizione, anche se plurimovimentale**. Lo stesso criterio vale per Sonate, Sinfonie, Concerti e altre opere strutturalmente unitarie. I movimenti sono parti e **non si contano come nuove composizioni** soltanto perché possiedono titoli propri.

## Classi da mantenere separate
- **Composizione individuale**: entità musicale con propria identità.
- **Composizione plurimovimentale**: caso particolare di composizione unica con parti subordinate.
- **Movimento/numero/sezione**: parte, non opera indipendente per definizione.
- **Ciclo musicale**: unità progettuale, con componenti che possono avere propria identità compositiva; natura da valutare caso per caso.
- **Raccolta editoriale** e **insieme di opere autonome**: contenitori non equivalenti a un unico brano.
- **Versione**, **arrangiamento**, **estratto**, **numero di catalogo/op.**, **pubblicazione**: oggetti o proprietà diversi dall'identità primaria.

## Sentinelle disponibili nel censimento
1. Atlantis `opera:quattro-stagioni`: l'etichetta collettiva non può contare come unico Concerto; quattro RV componenti da verificare e collegare.
2. Atlantis `opera:sei-quartetti-haydn-mozart-1785`: insieme di sei quartetti, non un unico Quartetto.
3. Atlantis `opera:sonate-beethoven-op2-1796`: op. 2 comprende tre sonate, ciascuna composizione.
4. Atlantis `opera:smetana-ma-vlast-1874-1879`: ciclo di sei poemi sinfonici, con identità delle composizioni componenti.
5. Atlantis `opera:an-die-ferne-geliebte-op98` e Flaminio `audit:fl01:beethoven29:collection:excel4708`: possibile corrispondenza da verificare per il ciclo di Lieder, senza fondere ciecamente categorie catalografiche diverse.
6. Flaminio `audit:fl01:alf-cpe:collection:cpe:wq43`: sei concerti per cembalo concertato, non un concerto in sei movimenti.
7. Flaminio `audit:fl01:alf-cpe:collection:cpe:wq182`: sinfonie con identità individuale.
8. Flaminio `audit:fl01:jsb03:work:excel3081` e `...excel3082`: primo e secondo Concerto brandeburghese, due opere distinte.
9. Flaminio `audit:fl01:bbb:work:excel4263` («Suite per pianoforte in quattro movimenti») e `...excel4291` («Tancszvit», Suite di sei danze): ciascuna Suite una composizione, non quattro o sei opere.
10. Flaminio `audit:fl01:jsb04:doc:part:BWV1004-5`: la Ciaccona è movimento della Partita, non un secondo brano da sommare al catalogo.

## Overlay
`OVERLAY_TASSONOMICO_COMPOSIZIONI_CICLI_RACCOLTE_2026-11-15.json`: **12 nodi analitici**, **23 relazioni candidate**, **13 sentinelle con ID sorgente verificati nel censimento**. Gli endpoint esistono nel censimento o nel nuovo overlay; non sono state promosse identità canoniche. Ogni relazione ha motivazione e `production_gate=CLOSED`.

## Vincoli di implementazione per la navigazione
- Filtro **Opere**: conteggiare soltanto composizioni individuali validate; i gruppi hanno tipo esplicito e i movimenti espansione interna.
- **Autore → opera → movimenti** è gerarchia di composizione, non tre opere. **Autore → ciclo → opere componenti** è un altro schema, quando le componenti sono opere autonome.
- Evitare relazioni `subtype_of` fra un'opera concreta e la sua parte. Preferire `part_of`/`has_part`; per le collezioni `member_of_collection`; per cicli `member_of_cycle`.
- Le appartenenze di forma, periodo, organico sono attributi/relazioni specifici e non autorizzano propagazione indiscriminata attraverso una raccolta ad altri autori o epoche.
- Click sull'arco: motivo della relazione, direzione, evidenza, stato di validazione e provenienza. Percorsi indiretti: mostrare la motivazione di ogni passaggio.
- Varianti editoriali e numeri d'opus possono riferirsi al gruppo, non a tutte le singole parti; controllare cataloghi e fonti.

## Gate ancora aperti
1. Verifica dell'identità catalografica di tutte le opere/componenti nei tre DB, non solo delle 13 sentinelle.
2. Recupero dei nodi movimento, numerazioni e archi dal materiale Flaminio, dai capitoli Mundi e dagli overlay esistenti.
3. Risoluzione delle ambiguità ciclo unitario vs raccolta editoriale e opera autonoma vs movimento.
4. Test conteggi composizioni: Bach BWV 1007=1, Bartók *Tancszvit*=1, Beethoven op. 2=3 sonate, Brandeburghesi=6 concerti; nessuna doppia conta delle raccolte.
5. Test della vista filtro generi/forme: gli archi non devono produrre collegamenti cronologici fuorvianti (Medioevo → Paganini).

**Stato: IN_REVIEW. Nessun import Lotto 2, né grafo pubblico modificato.**
