# Audit cross-DB — Contrappunto, fuga, ricercare, canone, passacaglia, ciaccona, variazioni
**15 novembre 2026 — IN_REVIEW — audit separato, Lotto 2 Flaminio bloccato.** Nessuna modifica a grafo JSON o interfaccia di produzione.

## Ambito realmente controllato
Snapshot Mundi: 869 nodi, 2.437 archi; Atlantis: 754 nodi, 1.718 archi; Flaminio Lotto 1: 1.365 nodi, 2.780 archi. Ricerca esplorativa per termini/tipologie su tutti e tre i nodi sorgente: 11 riscontri nominali Mundi, 9 Atlantis, 214 Flaminio (150 dopo esclusione delle rubriche e schede sorgente più evidenti). Questi sono **candidati** e non un computo delle opere reali: alcune espressioni ricorrono nei titoli e nella documentazione, mentre altre composizioni con quelle tecniche non le nominano affatto.

## Decisioni da applicare senza duplicazione
- **Contrappunto** è procedimento/ambito tecnico; **Fuga** può essere forma autonoma o sezione e impiega il contrappunto; il nodo Atlantis `senso:fuga` contiene esplicitamente 'Contrappunto e fuga', perciò **non fonderlo ciecamente** con `forma-fuga` Mundi.
- **Ricercare** è una forma storica; Mundi `forma-ricercare` e Atlantis `senso:ricercare` sono già accoppiati nel crosswalk precedente: una sola identità canonica quando integrati. Ricercare imitativo e fuga vanno messi in relazione storico-stilistica, non resi equivalenti.
- **Canone** è tecnica contrappuntistica, ma anche composizione autonoma. Non confondere `senso:canone-beethoven` Atlantis (canone della ricezione storica, non forma musicale!) con il canone musicale.
- **Tema e variazioni**, **variazioni su corale**, **variazioni canoniche**, **passacaglia** e **ciaccona** condividono procedure, ma non sono termini intercambiabili. Conservare sovrapposizioni storico-musicali con rapporti qualificati.
- **Ostinato** è tecnica; passacaglia e ciaccona possono impiegarlo, ma il termine non è sinonimo di nessuna delle due.
- **Partita su corale** (Bach) va riconciliata con le variazioni su corale, non automaticamente con le Suite/Partite di danze già revisionate.

## Sentinelle di opere, parti e raccolte
1. `audit:fl01:jsb06:work:excel3797` e `audit:fl01:jsb06:doc:part:bwv582-passacaglia` e `...bwv582-fuga`: Passacaglia e fuga BWV 582 è un'opera unica con due parti, non due opere.
2. `audit:fl01:jsb04:doc:part:BWV1004-5`: Ciaccona come movimento finale della Partita per violino BWV 1004, non singola composizione inventata.
3. `audit:fl01:jsb04:doc:part:BWV1079-ricercar3` e `...ricercar6`: Ricercar a 3 e a 6 nella raccolta *Offerta musicale*; conservare gli archi `part_of_collection`.
4. `audit:fl01:jsb06:work:excel3977`: Variazioni Goldberg BWV 988 come opera unitaria; le trenta variazioni restano parti, non trenta nuove opere autonome.
5. Atlantis `opera:webern-passacaglia-op1-1908`, `opera:grosse-fuge-op133`, `opera:variazioni-eroica-op35`: forme associate a opere concrete, mantenendo i collegamenti esistenti (ad esempio Große Fuge e Quartetto op. 130).
6. Gli otto piccoli preludi e fughe BWV 553–560 nella documentazione Flaminio hanno attribuzione a Bach problematica: **HOLD** per l'asserzione di autore, pur registrando la tipologia della composizione.
7. L'etichetta 'variazioni' in un nome di sezione catalografica non certifica l'identità o l'autore di ogni voce.

## Output
`OVERLAY_TASSONOMICO_CONTRAPPUNTO_VARIAZIONI_2026-11-15.json` con **13 nodi analitici proposti** e **36 relazioni esplicite proposte**, alcune fra record già presenti e alcuni nuovi identificativi di staging. Non è una fusione di 13 nuove identità né una certificazione delle 36 relazioni; è un overlay **non ancora caricato dal builder unificato**.

## Gate per completamento
- Controllare tutti i possibili record coinvolti, comprese le forme non nominate nel titolo, le relazioni specialistiche e gli overlay storici; non accontentarsi del filtro lessicale.
- Convalidare fonti e qualificatori, distinguere attribuzioni spuria/incerta/documentata e verificare versioni o movimenti.
- Risolvere gli allineamenti contro i crosswalk precedenti, rimuovendo duplicati virtuali in fase di integrazione.
- Test radicati autore → opera → parte/forma → repertorio con filtri indipendenti Opere, Generi e forme, Persone; la navigazione non deve attraversare altri autori attraverso la generica forma Fuga.
- Registrare per ogni record `validated / candidate / hold / editorial_only / source_only / unresolved`. Solo dopo i test promuovere la famiglia a `FAMILY_VALIDATED`.

**Stato finale: IN_REVIEW.** I dati musicali pubblici restano invariati.
