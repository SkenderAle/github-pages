# Rilievo tassonomico integrale — checkpoint 15 novembre 2026

**Ambito:** Musurgia Mundi, Musurgia Atlantis, Flaminio Lotto 1. **Lotto 2: BLOCCATO.**
**Stato:** censimento effettivo di ogni record sorgente, non ancora convalida musicologica di tutti i collegamenti. Nessun grafo pubblico modificato.

## Registro riga per riga
`CENSIMENTO_TASSONOMICO_TUTTI_RECORD_2026-11-15.jsonl` contiene **2.988 record individuali**, ciascuno con archivio, ID, denominazione, tipo/sottotipo originale, ruolo inferito, grado nel grafo sorgente, parole-spia familiari e stato di audit. Le parole-spia **non sono classificazioni validate**; molti falsi positivi derivano da parole nei titoli, per esempio concerto come luogo di esecuzione o opera come sostantivo generico. Mai trasformarle automaticamente in archi.

| Sorgente | Nodi | Archi | Nodi senza archi nel solo grafo sorgente |
|---|---:|---:|---:|
| Mundi `atlante3d/database/grafo.json` | 869 | 2.437 | 164 |
| Atlantis `musurgia-atlantis/grafo.json` | 754 | 1.718 | 3 |
| Flaminio Lotto 1 staging | 1.365 | 2.780 | 0 |
| **Totale record sorgente** | **2.988** | **6.935** | **167** |

I 167 non significano 167 orfani del *grafo unificato*: il calcolo riguarda esclusivamente l'arco nella rispettiva fonte. Il dato non include i file di relazioni specialistiche, gli overlay storici o gli archi sintetizzati dal builder unificato.

### Ruoli provvisori individuati nel censimento
- 810 record riconoscibili come **persone**;
- 194 **candidati genere/forma** (non tutti certificati);
- 697 **opere candidate, versioni, parti o raccolte** da distinguere (208 Atlantis + 489 Flaminio);
- 29 **raccolte** Flaminio da distinguere da un'opera;
- 758 **documentazioni sorgente** Flaminio: NON trasformare in composizioni autonome;
- 15 **capitoli editoriali** Atlantis: escludere dal grafo storico-musicale;
- altri contesti, luoghi, strumenti, concetti e stati documentali mantengono la propria identità.

**Registro precedente preservato:** 21 coppie tassonomiche Mundi–Atlantis e 31 archi semantici espliciti nel crosswalk curato alla data del checkpoint. Il numero non costituisce una garanzia di adeguatezza di tutte le loro classificazioni.

## Nuova struttura generale da sottoporre a convalida
Le famiglie **non formano un solo albero**: le opere possono avere più appartenenze senza essere replicate.

### Repertorio strumentale
- **Repertorio per strumento solo**, **musica da camera**, **repertorio orchestrale/sinfonico**, **repertorio concertante** sono famiglie di accesso; non sinonimi dei rispettivi generi.
- **Suite** è una forma trasversale. *Partita per strumento solo* → relazione qualificata `subtype_of` Suite quando denota una successione di danze; le *partite-variazioni* vanno connesse alla forma Variazioni, non fuse alla Suite.
- **Suite sinfonica/orchestrale** → `member_of_repertoire` Repertorio sinfonico + `form_of` Suite.
- **Poema sinfonico**, **Rapsodia sinfonica/orchestrale**, **Sinfonia**, **Ouverture da concerto**, **Fantasia orchestrale**, **Variazioni orchestrali**, **Scherzo sinfonico**, **Capriccio orchestrale** → valutazione come articolazioni del Repertorio sinfonico. Non classificare ogni Ouverture operistica come Ouverture da concerto.
- **Sinfonia concertante** → doppia appartenenza motivata a Sinfonia e Repertorio concertante; senza creare duplicato.
- **Concerto** → distinguere concerto solistico, concerto per più solisti, concerto grosso storico, concerto per orchestra/senza solista, eventuale concertino. `concerto per più solisti` non è sinonimo di `concerto grosso`. Non confondere "concerto in stile italiano" per tastiera sola con solista + orchestra.

### Repertorio teatrale / vocale
- **Opera (melodramma)** è genere, mentre `opera` generica è composizione; `capitolo opera` è risorsa editoriale.
- Singspiel, dramma giocoso, opera buffa, opera seria, opéra-comique ecc. devono essere legati con un predicato coerente, non fusi sulla base della sola etichetta.
- **Raccolta, ciclo, opera individuale, versione, numero/movimento** devono restare categorie distinte (es. Quattro stagioni e quattro RV; Brandeburghesi e sei BWV).

## Casi concreti da risolvere nel prossimo passaggio
1. Mundi `genere-suite` è già un nodo forma generale; il crosswalk Flaminio lo richiama come legacy, ma manca un'esplicita radice Suite riconciliata con le articolazioni strumentali e orchestrali del catalogo.
2. Mundi `forma-suite-orchestrale-novecento` e Atlantis opere `opera:daphnis-suite-1`, `opera:daphnis-suite-2`, `opera:mandarino-suite-1927` vanno distinti come tipologia storica e composizioni.
3. Flaminio presenta **partite per clavicembalo, violino, flauto** e **partite su corale per organo**: queste ultime richiedono verifica come variazioni su corale, non un collegamento automatico alla Suite.
4. Mundi `forma-rapsodia-orchestrale`, `poema-sinfonico-ottocentesco`, `forma-ouverture`, `forma-fantasia` vanno riconciliati con i nodi di senso Atlantis senza scambiare forme, specificazioni storiche e opere individuali.
5. Atlantis `senso:poema-sinfonico` e Mundi `poema-sinfonico-ottocentesco` restano correttamente **non fusi** nell'audit precedente, in attesa di predicato storico qualificato.
6. Ricostruire le relazioni `autore → opera → forma → famiglia repertoriale` senza attraversamenti indiscriminati, preservando fonti e inversi descrittivi.

## Protocollo per i 2.988 record
Per ogni record, verificare in ordine:
1. **Esistenza e natura:** persona, genere/forma, opera, raccolta, parte, versione, contesto, luogo, strumento, documento, capitolo.
2. **Identità:** crosswalk esplicito; omonimi e collisioni semantiche separati.
3. **Collocazione:** `subtype_of`, `member_of_repertoire`, `has_form`, `has_instrumentation`, `has_period`, `part_of_collection`, `version_of`, `based_on`, `composed_by`, `attested_by`, `related_to`. Nessun predicato dedotto dalla sola somiglianza lessicale.
4. **Copertura degli archi:** verificare tutte le relazioni sorgente, gli archi specialistici, i vecchi overlay e i rapporti di provenienza; non sommare i duplicati.
5. **Stato:** `validated`, `candidate`, `hold`, `editorial_only`, `source_only`, `unresolved`. Un record isolato resta nel registro, non si forza un arco fittizio per farlo apparire connesso.
6. **Test:** Bach → Partite, Suite e variazioni su corale; Suite sinfonica → Suite e Repertorio sinfonico; Mozart → Flauto magico → Singspiel; Sinfonia concertante → Sinfonia e Concertante; Vivaldi e Bach → raccolte e singoli concerti; filtri Persone/Opere/Generi.

### Limiti del checkpoint
Il censimento riga per riga **è stato eseguito**, ma non equivale a completa revisione storico-musicologica dei 2.988 record. I 6.935 archi sono quelli dei tre file sorgente specificati, non il totale delle relazioni del builder unificato; non ancora analizzati uno per uno. Il crosswalk delle identità deve essere verificato nuovamente nella fase successiva. Nessun JSON di produzione è stato alterato.


## REGOLA PERMANENTE — propagazione integrale di OGNI rilievo tassonomico (15 novembre 2026)
**Decisione dell'utente:** questo protocollo si applica indistintamente a **Concerto, Opera (melodramma), Suite/Partita, Sonata, Sinfonia/Repertorio sinfonico, Rapsodia, Poema sinfonico, repertorio concertante** e a tutte le famiglie che saranno investigate in seguito. Una correzione locale non chiude una famiglia.

### Contratto per ogni famiglia e per ogni nuova regola
1. **Scansione completa dei tre patrimoni**, sull'intero Lotto 1: Mundi, Atlantis, Flaminio. Includere i record *non ancora classificati* e quelli con denominazioni storiche, traduzioni, alias e cataloghi; non limitarsi ai match lessicali.
2. **Recupero di tutte le sorgenti pertinenti**: grafi principali, crosswalk canonici, registri Flaminio, relazioni specialistiche, estensioni Mundi e overlay/checkpoint precedenti. I record documentari restano documentazione, non diventano automaticamente opere.
3. **Una identità per entità**, dopo verifica, con tutti gli ID sorgente preservati; **nessuna fusione** fra famiglia di repertorio, genere, forma, opera individuale, ciclo/raccolta, movimento, versione, organico, epoca, concetto e capitolo editoriale. Identità solo quando giustificata da evidenze.
4. **Multiappartenenza esplicita**, non duplicazione: per es. Suite sinfonica → Suite + Repertorio sinfonico; Sinfonia concertante → Sinfonia + Repertorio concertante; una singola partita barocca può appartenere a Suite, mentre una partita su corale può essere classificata Variazioni. La relazione con la forma non si deduce dal solo titolo.
5. **Archi musicologicamente specifici**, con direzione, significato, grado di certezza, provenienza e note per hover/tap. Gli archi condivisi non devono provocare propagazione arbitraria di tutte le opere: filtro di pertinenza radicata I–V. I capitoli editoriali restano in una vista separata.
6. **Registro di copertura per famiglia**: record sorgente inclusi, crosswalk d'identità, gerarchie convalidate, rapporti opera–genere–autore, eccezioni motivate, casi sospesi, eventuali orfani, overlay recuperati, test superati/falliti. Registrare esplicitamente anche quando non c'è alcuna corrispondenza e nessun arco dimostrabile: non inventare relazioni per rendere il grafo connesso.
7. **Gate per conclusione**: dichiarare `FAMILY_VALIDATED` solo dopo l'esame dei candidati e delle relazioni pertinenti, riconciliazione delle fonti, test di non regressione e prova di navigazione filtrata. Il censimento automatico produce soltanto `INVENTORIED`; la proposta tassonomica produce `PROPOSED`. Un risultato parziale è `IN_REVIEW` o `HOLD`.
8. **Incrementalità e ripetibilità**: ogni nuova decisione in qualsiasi famiglia riapre i record coinvolti e i loro collegamenti in tutti e tre i database. Aggiornare il registro e confrontare il risultato con il precedente, senza distruggere fonti o note. Mantenere `Lotto 2 Flaminio BLOCCATO` fino alla certificazione dell'unificazione.
9. **Nessuna pubblicazione implicita**: l'applicazione dei rilievi avviene prima nel database unificato di staging e nei registri; grafi e UI di produzione cambiano solo dopo collaudo.
10. **Copertura globale esplicita**: oltre al completamento per famiglia, produrre una matrice che renda conto di **ogni record** dei tre database, inclusi persone, luoghi, strumenti, altre entità e documentazione, distinguendo stati risolti e non risolti. «Coperto» non significa necessariamente collegato ad un genere: può essere `source_only`, `editorial_only`, `hold` o non risolto con motivazione.

### Test sentinella permanenti
- *Opera*: Mozart → *Die Zauberflöte* → Singspiel → Opera; non classificare tutte le opere di Mozart come Singspiel.
- *Suite*: Partita per violino solo → Suite, con Bach BWV 1002/1004/1006; **partita su corale per organo** verificata come variazioni, non automaticamente Suite.
- *Suite sinfonica*: stessa entità di forma collegata a Suite e al Repertorio sinfonico; non duplicare il nodo e non confonderlo con una particolare composizione.
- *Sinfonia*: Sinfonia concertante → Sinfonia e Repertorio concertante; Poema sinfonico e Rapsodia sinfonica → Repertorio sinfonico, non sottotipi di Sinfonia.
- *Concerto*: solistico, grosso, gruppo/più solisti e senza solista distinti; raccolte Brandeburghesi/Quattro stagioni con singoli lavori, autore e forma, senza propagazioni errate.
- *Sonata*: Sonata genere ≠ forma-sonata; articolazione cameristica/strumento solo verificata senza identificazioni cieche.

**Stato alla data di questa aggiunta:** la scansione dei 2.988 record è stata eseguita nel censimento generale, ma **NESSUNA delle famiglie citate è qui certificata integralmente** con questo nuovo protocollo; restano da svolgere i controlli puntuali e la riconciliazione completa degli archi.
