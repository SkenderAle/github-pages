# CHECKPOINT 24 — Lotto 01: verifiche storico-documentali dei primi 12 archi fra persone riconciliate

**Data:** 10 novembre 2026 | **Branch:** main | **Ambito:** esclusivamente staging e rapporto di audit

## Corpus e risultato

Dal gruppo dei **233** archi persona↔persona già riconciliati del Checkpoint 21 sono stati selezionati **12** casi, riletti integralmente dalle partizioni originali `federazione-v1/archi-01..08.json`, conservando estremi, `kind`, `forward`, `reverse`, `note` e `sources`. Nuovo file `CONVALIDA_ARCHI_FASE24_LOTTO01_2026-11-10.json` (commit `5c8b8bfd8b3e1e0556f4f5468bc17be4fb879cd8`).

**9/12** hanno riscontro esterno specifico del fatto (in alcuni casi con cautela linguistica); **3/12** sono rimasti in attesa di riscontro puntuale. **221/233** ancora da esaminare. Il riscontro storico del fatto non abilita automaticamente alcun attraversamento radicato nella GUI.

| ID | Relazione | Esito della verifica | Struttura corretta |
|---|---|---|---|
| fd:ms:2 | Haydn → Beethoven: studio a Vienna | Riscontro Beethoven-Haus: dal 1793 | Insegnamento personale |
| fd:ms:7 | J. S. Bach → Mozart: eredità contrappuntistica | Da individuare specifiche opere e mediazione; evitare semplificazione causale | Ricezione di repertorio |
| fd:ms:71 | Bach → Mendelssohn: Passione secondo Matteo 1829 | British Library conserva le parti della rappresentazione | Opera/evento mediatore |
| fd:ms:76 | Vivaldi → Bach: trascrizioni di concerti | Netherlands Bach Society documenta BWV 593 | Opera→trascrizione |
| fd:ms:90 | Haydn → Mozart: modello quartettistico | Köchel-Verzeichnis Mozarteum | Opere/corpus quartettistico |
| fd:ms:191 | Andrea → Giovanni Gabrieli: formazione | Treccani DBI: rapporto indicato come *presumibile*; mantenere la cautela | Formazione, con qualificatore |
| fd:ms:434 | Mozart → Haydn: dedica dei sei quartetti | Köchel-Verzeichnis Mozarteum, 1785 | Opere/dedica |
| fd:ms:726 | Händel → Mozart: adattamento Messiah K 572 | Fonte legacy NMA, ancora da riscontrare puntualmente in questa tranche | Opera/adattamento, sospeso |
| fd:ms:956 | Mozart → Beethoven: variazioni su temi operistici | Schede Beethoven-Haus legacy, ancora da ricontrollare puntualmente | Opere/variazioni, sospeso |
| fd:ms:1015 | Pergolesi → Bach: Stabat Mater / BWV 1083 | Bachipedia: rielaborazione 1746/47 ca. | Opera/adattamento |
| fd:ms:1016 | Paisiello → Mozart: K 398 | Neue Mozart-Ausgabe: aria da I filosofi immaginari | Opera/variazioni |
| fd:ms:1018 | Gluck → Mozart: K 455 | Neue Mozart-Ausgabe: tema da La rencontre imprévue | Opera/variazioni |

### Fonti indipendenti consultate
- Beethoven-Haus: https://internet.beethoven.de/en/exhibition/beethoven-on-postage-stamps/
- British Library: https://searcharchives.bl.uk/catalog/032-002104229
- Netherlands Bach Society: https://www.bachvereniging.nl/en/bwv/bwv-593
- Mozarteum: https://kv.mozarteum.at/en/work/quartet-in-c-5528
- Treccani DBI Giovanni Gabrieli: https://www.treccani.it/enciclopedia/giovanni-gabrieli_%28Dizionario-Biografico%29/
- Bachipedia BWV 1083: https://bachipedia.org/werke/bwv-1083-tilge-hoechster-meine-suenden/
- Neue Mozart-Ausgabe, indice K 398 e K 455: https://dme.mozarteum.at/DME/nma/nma_toc.php?l=2&vsep=199

### Regole filologiche da applicare nella rappresentazione

Il caso Mozart–Haydn comporta **almeno due predicati distinti in direzioni diverse** (Haydn modello della scrittura quartettistica di Mozart; Mozart dedicatario? **No:** Mozart è il dedicante e Haydn il destinatario dei sei quartetti). La semantica bidirezionale va conservata senza invertire il senso.

La trascrizione di un'opera non è un contatto personale. Percorsi Bach→opera di Vivaldi→adattamento di Bach, Pergolesi→Stabat Mater→BWV 1083, Paisiello→aria→K398 sono storicamente più precisi del semplice collegamento persona↔persona. Non inventare dati di opera o evento; creare gli intermediari dopo riscontro delle identità d'opera.

La relazione Andrea→Giovanni Gabrieli non va liquidata come insegnamento formalmente documentato da atti didattici: la voce DBI parla di **presunzione** circa l'apprendistato dallo zio, mentre altre sintesi lo indicano come allievo. Conservare la differenza fra attestazione documentaria diretta e ricostruzione storiografica.

### Test

**9/9 controlli di integrità/readback PASS** dopo pubblicazione: 12 record, ID unici, nove riscontri specifici e tre pendenti, spiegazioni originali nelle due direzioni, fonti originarie, URL di controllo per ogni caso supportato, original index conservati, 221 archi residui, nessun gate aperto. Questi test NON sono collaudi browser o prove di validità delle singole fonti.

**Produzione invariata:** nessun aggiornamento a `musurgia-atlantis/grafo.json`, interfaccia pubblica, Atlante 3D o pagine narrative, nessuna cancellazione/merge di archi. **210 lotti storico-filologici preservati.**

**Prossimo Lotto 02:** altri archi dal gruppo dei 221, con precedenza a archi di didattica reale e a quelli di ricezione musicale fuorviante; confronto caso Gabrieli→Schütz con eventuale arco Atlantis preesistente senza duplicazione.
