# Checkpoint 27 — singolare delle forme e opere individuali nel catalogo Flaminio

**Data:** 10 novembre 2026 · **Solo staging su branch main.**

## Decisione editoriale dell'utente
Il nome canonico di un genere/forma va **al singolare**: `Sonate → Sonata`, `Lieder → Lied`, `Concerti → Concerto` e, in generale, pluralità lessicali equivalenti → lemma singolare. L'oggetto della classificazione è **il brano**; una denominazione di raccolta o sezione editoriale NON è sinonimo della sua singola opera. Conservare sempre nome originale e percorso Flaminio. Non applicare il singolare a forza ai titoli propri, ai testi musicali e alle denominazioni storiche non flessive; usare lemmi italiani/multilingui documentati, con revisione degli ambigui.

## Caso verificato su Excel
Rilette le **sei righe 3081–3086** di `compositori_flaminio.xlsx` (colonne compositore, genere/forma, numero, anno, brano, dettagli e link). Compositore scritto `BACH, Johann Sebastian`; intestazione collettiva `Concerti`; i titoli individuali `Concerto brandeburghese n. 1`–`n. 6`, cataloghi BWV **1046–1051**, con **sei URL di spiegazione distinti**. Le date delle singole voci sono diverse e restano come stringhe originali; NON assumere che tutte siano state composte nel 1721, data tradizionalmente associata alla dedica della raccolta.

La base Atlantis contiene la raccolta `opera:bach-sei-concerti-brandeburghesi-1721`, documentata dal Checkpoint25, e `pers:bach`. Il nome in lingua francese in cui questa raccolta è presentata nel database pubblico va verificato puntualmente: il presente audit non riscrive la denominazione pubblica e non certifica l'unicità di tutti gli ID d'opera nella base di produzione.

## Staging
`STAGING_BACH_BRANDEBURGHESI_CHECKPOINT27_2026-11-10.json`:
- 6 nodi candidati di opere singole `audit:flaminio:bach:bwv1046` ... `bwv1051`;
- 6 rapporti `pers:bach → concerto individuale` (ha_composto);
- 6 appartenenze `raccolta → concerto individuale` (contiene_opera);
- 6 classificazioni `concerto individuale → legacy:gf:genere-concerto` (ha_genere);
- ciascun nodo ha riga Excel, titolo, numero BWV, anno come fonte, intestazione plurale di provenienza, genere canonico e URL Flaminio. **18 archi proposti**, non certificati né pubblicati nel grafo storico.

## Modello generale
Separare almeno quattro entità: `classe_genere` (Concerto), `opera_individuale` (BWV 1046), `raccolta` (sei concerti) e `documentazione` (scheda Flaminio). Le singole opere possono essere incluse o escluse selettivamente dalla vista; la raccolta non deve imporre la visualizzazione automatica di tutti i componenti. Le eventuali relazioni `versione_di`, `trascrizione_di`, `riutilizza_materiale_di` vanno accertate caso per caso, non inferite da testo libero.

## Controlli mancanti
1. Confronto univoco contro tutte le opere individuali già presenti in Atlantis per evitare duplicati.
2. Validazione storica indipendente delle relazioni derivate e di eventuali riutilizzi.
3. Interfaccia solo-preview e test dei filtri di pertinenza: selezionare solo BWV 1046 e BWV 1048 senza inserire gli altri quattro per automatismo di raccolta.
4. Espansione controllata della lemmatizzazione singolare sugli altri generi Flaminio, con revisione delle eccezioni e testi originali intatti.
5. Prosecuzione audit tassonomico integrato e, separatamente, Checkpoint24 storico-filologico (74/233 archi già esaminati, prossimi 50).

**Nessun intervento in produzione** su `musurgia-atlantis/grafo.json`, `atlante3d/`, pagine narrative o renderer; 210 lotti storici tutelati.
