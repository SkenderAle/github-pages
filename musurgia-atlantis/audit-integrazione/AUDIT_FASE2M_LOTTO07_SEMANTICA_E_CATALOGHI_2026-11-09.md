# Musurgia Atlantis — Fase 2M · Lotto 07
## Protocollo catalografico, revisione di 210 tassonomie mancanti e il caso Morricone
**9 novembre 2026 · ramo `main` · SOLO `musurgia-atlantis/audit-integrazione/`.**

### Risultato e limiti
L'esame riprende l'inventario dei Lotti 05–06, **senza ripetere la ricognizione del Lotto 04**. Il nuovo file `REVISIONE_SEMANTICA_CATALOGRAFICA_FASE2M_LOTTO07_2026-11-09.json` contiene **210/210** concetti che non avevano `taxonomy.class` nel database legacy. Tutti conservano la classificazione proposta al Lotto 05, una proposta Lotto 07 e la provenienza. **8 rettifiche di classe suggerite, 8 ulteriori casi segnalati per disambiguazione, 194 proposte lasciate provvisorie.** La revisione è **editoriale per tipologia**, NON verifica storica indipendente di 210 schede.

Sono ripresi i **14 candidati** autore↔genere del Lotto 06, senza certificare nuovi archi: 5 fonti mirate sono state ricontrollate (Rota/IRCAM, Korngold/Schott, Hoffmeister/IMSLP, Boieldieu/BnF, Tesori/Concord); per gli altri 9 si conserva la fonte del Lotto 06 come già citata, **non autonomamente ricontrollata in questo lotto**. Rimangono sei falsi indizi lessicali, che non provano il rapporto. Non convertire mai menzione contestuale in autorialità.

### 1. Otto proposte di riclassificazione da validare
Sono tutte proposte semantiche **in staging**, non modifiche al grafo:

| ID legacy | Lotto 05 | Lotto 07 proposto | Ragione |
|---|---|---|---|
| `recitar-cantando-peri-euridice` | `tecnica_prassi` | `caso_studio_ibrido` | Il nodo combina una prassi storica (recitar cantando) e un'opera identificata (Euridice). |
| `sinestesia-luce-prometeo-skriabin` | `tecnica_prassi` | `caso_studio_ibrido` | Il caso combina un'opera specifica, Prométhée, e la prassi luce/suono. |
| `madrigale-drammatico-petrassi-1941` | `genere_forma` | `caso_studio_ibrido` | La scheda unisce l'etichetta di forma e la composizione Coro di morti: evitare un unico genere attraversabile. |
| `mikrokosmos-bartok-pianoforte-didattico` | `tecnica_prassi` | `raccolta_documento` | Mikrokosmos è un ciclo/raccolta pedagogica identificabile, non una tecnica astratta. |
| `deserts-nastri-edgard-varese-1954` | `tecnica_prassi` | `opera_specifica` | Déserts designa un'opera specifica che impiega anche nastro magnetico, non la tecnica in sé. |
| `quattro-pezzi-una-nota-scelsi-1959` | `raccolta_documento` | `opera_specifica` | I Quattro pezzi su una nota sola costituiscono una composizione identificabile, pur articolata in movimenti. |
| `forma-concerto-per-arpa-novecento` | `opera_specifica` | `genere_forma` | La dicitura identifica una tipologia di concerto, non un'opera singola. |
| `forma-suite-orchestrale-novecento` | `raccolta_documento` | `genere_forma` | Suite orchestrale novecentesca indica una forma/tipologia, non una raccolta identificata. |

**Altri 8 casi con ambiguità segnalata** (classe proposta invariata): `poema-sinfonico-romano-respighi`, `opera-evento-storico-nixon-1987`, `stampa-frottole-petrucci-1504`, `inno-patriottico-canto-italiani-1847`, `standard-jazz-perdido-tizol`, `mathis-der-maler-sinfonia-1934`, `concerti-due-organi-soler-escorial`, `cappella-san-marco-venezia`. La matrice JSON riporta il motivo particolare di ciascuno. Questi casi richiedono separazione netta fra titolo di un'opera, ciclo, contesto didattico, prassi, evento, luogo e organizzazione.

### 2. Protocollo per i 14 candidati documentali
Le 14 attestazioni del Lotto 06 sono mantenute come **candidati**, non come relazioni certificate. La procedura di ammissione prevede: (1) identificazione persona e opera; (2) fonte catalografica che attribuisca l'opera all'autore; (3) verifica della definizione del genere; (4) predicato storico preciso, senza deduzione dalla sola parola; (5) relazioni spiegate nei due versi e relative fonti. Il file JSON riporta tutti i 14 record con ID, opera/corpus, URL e livello di riscontro.

Cinque verifiche campione con evidenza più specifica:
- Nino Rota: [IRCAM, opere per genere](https://ressources.ircam.fr/en/composer/nino-rota/worksbykind) elenca più concerti concertanti per solista e orchestra.
- Korngold: [Schott](https://www.schott-music.com/en/concerto-in-d-major-noc36983.html) specifica il *Concerto per violino*, op. 35.
- Hoffmeister: [IMSLP](https://imslp.org/wiki/Viola_Concerto_in_D_major_%28Hoffmeister%2C_Franz_Anton%29) descrive un concerto per viola e orchestra con manoscritti; va comunque verificata l'attribuzione catalografica definitiva.
- Boieldieu: [BnF](https://catalogue.bnf.fr/ark:/12148/cb139087151) identifica il *Concerto per arpa e orchestra in do maggiore* (1801), genere «concerto».
- Jeanine Tesori: [Concord Theatricals](https://www.concordtheatricals.com/p/58581/fun-home) attribuisce espressamente a lei la musica di *Fun Home*.

Queste attestazioni consentono di **istruire** il fascicolo di una relazione specifica, non di saltare il gate di compatibilità con la tassonomia Atlantis.

### 3. Morricone: distinzione importante rispetto al Lotto 06
Il Lotto 06 teneva `Morricone → Concerto` sospeso perché il [*Primo Concerto* (1957)](https://medias.ircam.fr/fr/work/primo-concerto) è per sola orchestra. Il [*Quarto concerto* (1993)](https://medias.ircam.fr/fr/work/quarto-concerto) documenta invece organo, ottoni e orchestra; l'[editore Wise Music](https://www.wisemusicclassical.com/work/63630/Quarto-concerto--Ennio-Morricone/) distingue espressamente organo e quattro ottoni come parti solistiche. Ne consegue **un candidato più forte di prassi concertante**, non una riqualificazione automatica di *Primo Concerto* e non un nuovo arco. Va stabilito se il nodo «Concerto» intenda rigorosamente la prassi solista/ensemble o l'intera storia delle opere denominate concerto.

### 4. Conservazione e test
Il file di staging registra solo ID originali, classe precedente, proposta, contesto e condizioni di ingresso. Gli **8** rettificativi NON sono applicati al `taxonomy.class` originario. Niente deduplicazione delle relazioni persona-concetto: **1.846 record** legacy per **1.603 coppie** uniche, inclusi **111** concetti con record plurimi, sono ancora la baseline del Lotto 06. Non attraversare per BFS indiscriminata periodi, scuole, generi, luoghi o capitoli. Nessuna modifica ai **3.856** record originali, **1.718** archi Atlantis, spiegazioni `forward/reverse`, media, URL, ancore o titoli del sito.

**Test del file prodotto:** 11/11 controlli strutturali superati; **non** si tratta di test Node `--live` né di verifiche browser/Android e non si certificano gli archi storici. Il crosswalk complessivo con opere e concetti Atlantis resta **da ampliare**: non è lecito dichiararlo completo sulla base delle cinque comparazioni precedenti o delle classificazioni per etichetta.

### Prossimo Lotto 08
1. Riscontro catalografico puntuale dei 14 candidati + Morricone secondo i predicati ammessi, senza dichiarare altre relazioni già convalidate.
2. Controllo indipendente delle 8 proposte di riclassificazione e degli 8 casi ambigui, con attenzione a composizione/opera specifica, ciclo, evento, istituzione, ambiente e prassi.
3. Crosswalk **effettivo** e documentato fra **tutte** le schede candidate legacy e le categorie `opera`/`nodo-di-senso` Atlantis, non soltanto gli esatti omonimi, recuperando i file grandi in ambiente di analisi idoneo.
4. Test Node `--live` e poi browser/Android dell'interfaccia staging, pivot per singolo nodo, controlli separati per tipo e profondità. Nessun rilascio pubblico prima del collaudo.

**Produzione invariata per questo Lotto 07.** Tutti i materiali restano nel perimetro `audit-integrazione/`; il thread di continuità GitHub va aggiornato con gli SHA effettivamente risultanti.
