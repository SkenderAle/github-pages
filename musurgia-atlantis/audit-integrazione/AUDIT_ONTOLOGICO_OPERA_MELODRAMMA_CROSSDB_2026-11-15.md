# Musurgia Mundi–Atlantis–Flaminio — Audit ontologico «Opera» (melodramma)
**Data:** 15 novembre 2026. **Branch:** main. **Stato:** integrazione tassonomica *reversibile nello staging*; produzione invariata; Lotto 2 Flaminio BLOCCATO.

## Ambito ed equivoci da evitare
**Opera** qui è il **genere di teatro musicale / melodramma**, non la categoria informatica `opere` che raccoglie singole composizioni. La voce canonica condivisa è **Opera** (`mundi:genere-opera`, `atlantis:senso:opera`); il riferimento `flaminio:legacy:gf:genere-opera` già rimanda a Mundi e confluisce nella stessa identità di navigazione. «Melodramma», «opera in musica», «dramma per musica» e «opera lirica» hanno usi storici differenziati, non sono sempre sinonimi perfetti. «Melodramma» può inoltre indicare in altra tradizione linguistica il *melologo*, non l'opera cantata.

**NON fondere** con la radice:
- Mundi `melodramma` = **Melodramma barocco**, ambito storico/didattico;
- Mundi `opera-lirica` = **Opera lirica**, ambito storico/didattico di Ottocento e sviluppi;
- Atlantis `cap:melodramma`, `cap:opera-lirica`, `cap:anatomia-del-melodramma` = capitoli editoriali;
- un singolo nodo `opera:...` / `work:...` = composizione individuale, non genere;
- libretti, allestimenti, esecuzioni, versioni, traduzioni = entità proprie.

**Fonti di definizione e storia:** [Treccani, Opera](https://www.treccani.it/enciclopedia/opera/); [Treccani, Melodramma](https://www.treccani.it/vocabolario/melodramma/); [Treccani, Opera — Enciclopedia Italiana](https://www.treccani.it/enciclopedia/opera_%28Enciclopedia-Italiana%29/); [Ellen Rosand, *Opera in Seventeenth-Century Venice*](https://publishing.cdlib.org/ucpressebooks/public/book/opera-in-seventeenth-century-venice-the-creation-of-a-genre.html).

## Tre sorgenti effettivamente analizzate
- Mundi `atlante3d/database/grafo.json`, blob `57c65e209628b0fe43d0d5040bd27deb7e1624c8`: **869 nodi, 2.437 archi**; `genere-opera` ha **151 archi diretti** prima della fusione.
- Atlantis `musurgia-atlantis/grafo.json`, blob `4863b3fe263154387de3388c0b813b5f94546f12`: **754 nodi, 1.718 archi**; `senso:opera` ha **11 archi diretti**.
- Flaminio Lotto 1 `STAGING_GRAFO_FEDERATO_LOTTO01_JSB06_V11_GATE04_COPIA_2026-11-15.json`, blob `6f1793f3d8b07469a458c7bbbd768eb8cb37050e`: **1.365 nodi, 2.780 archi**; `legacy:gf:genere-opera` ha **11 archi diretti** (10 a opere, uno ad autore Alfano).

Si tratta di archi **originali incidenti alla radice**, non di numeri di opere uniche né di conteggi del grafo dopo redirect. Gli archi di Mundi sono spesso relazioni di repertorio, non automaticamente attestazioni di una specifica opera.

## Identità curate nello staging
Preesistenti e preservate (3): `opera-buffa` ↔ `senso:opera-buffa`, `opera-seria` ↔ `senso:opera-seria`, `dramma-giocoso` ↔ `senso:dramma-giocoso`.

Nuove (4), aggiunte in `CROSSWALK_TASSONOMICO_MUNDI_ATLANTIS_LOTTO01_2026-11-15.json`:
| Mundi | Atlantis | Etichetta della vista | Decisione |
|---|---|---|---|
| `genere-opera` | `senso:opera` | **Opera** | Macrogenere, senza conflazione con singole opere |
| `opera-comique` | `senso:opera-comique` | **Opéra-comique** | Genere francese con dialoghi parlati; distinto da opera buffa |
| `tragedie-en-musique-francese` | `senso:tragedie-en-musique` | **Tragédie en musique** | Genere francese storico |
| `intermezzo-comico` | `senso:intermezzo` | **Intermezzo comico** | Forma teatrale, non opera completa |

La fusione è soltanto d'identità di **navigazione**: entrambi i payload originali rimangono in `provenance`, gli archi originali in `original`; nessun identificativo pubblico è riscritto.

## Gerarchie e collegamenti trasversali
- **Opera seria / buffa / semiseria / dramma giocoso**: generi o sottogeneri nel rapporto storico appropriato; non fonderli per affinità.
- **Grand opéra**: Mundi `grand-opera` è genere; Atlantis `senso:grand-opera-francese` associa genere e istituzione. È introdotto un ponte `stesso_nucleo_storico_editoriale_non_identita`, **non** redirect. Atlantis `senso:opera-francese` è un'ulteriore trattazione del sistema francese, non sinonimo di ogni grand opéra.
- **Opéra-comique**, **Singspiel** e **opéra-ballet**: distinte articolazioni storiche operistiche, con nuovi archi di collegamento alla radice Opera senza equiparazione reciproca. [Opéra Comique (istituzione)](https://www.opera-comique.com/en/opera-comique); [Philharmonie de Paris, generi dell'opera classica](https://mediatheque.philharmoniedeparis.fr/contexte-opera-classique.aspx?_lg=fr-FR).
- **Opéra-bouffe**: relazione di confine con operetta, non sinonimo di tutta l'operetta francese, di opera buffa o opéra-comique. Mantenere `senso:opera-bouffe` come nodo distinto.
- **Rettungsoper**: tipologia storica drammaturgica, non unificazione automatica con Singspiel/opéra-comique.
- **Opera romantica**: l'ambito generale Atlantis `senso:opera-romantica` non è identico alla **tradizione tedesca** Mundi `opera-romantica-tedesca`.
- **Intermezzo comico**: subordinazione storica all'opera e relazione di origine con opera buffa; non forzare `intermezzo` (Flaminio, ambito non ancora ristretto) allo stesso ID.

Sei nuovi archi curati in staging collegano `senso:opera` a Singspiel, opéra-ballet, opéra-bouffe, Rettungsoper e opera romantica; un sesto è il ponte non identitario Grand opéra Mundi–Atlantis. Sono `CURATED_STAGING_SOURCE_NOTES` e non sostituiscono alcun arco precedente.

## Il significato dei dati Flaminio
- `legacy:gf:genere-opera` è riferimento all'ID di genere Mundi: non deve diventare una terza radice.
- `audit:fl01:genre:dramma-per-musica` classifica **Astarto** e **Statira** di Albinoni nello staging. Conservare la denominazione originale del libretto/testimonianza; proporre `historical_designation_of` o `form_on_source`, non identità alla cieca con `Opera` o `Opera seria`.
- `audit:fl01:genre:dramma-comico-pastorale` riguarda **L'incostanza schernita**; categoria specifica, non alias di tutti i melodrammi.
- `audit:fl01:genre:intermezzo` riguarda **Vespetta e Pimpinone**; non fonderlo automaticamente al nodo `Intermezzo comico` senza verifica testuale dell'estensione.
- `legacy:gf:genere-opera` collega 10 opere nel sottocorpus Flaminio e Franco Alfano come autore di repertorio; verificare le singole identità e i libretti prima di collegarle a un genere più specifico.
- Le rubriche `Melodrammi`, `Intermezzi` e `Libretti > Drammi per musica` sono **fonti/rubriche**, non sottogeneri: mantenere provenienza documentaria.

## Stato effettivo dei file e integrità
Il crosswalk curato passa da **8 a 12 identità tassonomiche** e da **18 a 24 archi semantici curati**. Il gate di integrità del modulo `DB_UNIFICATO_MUNDI_ATLANTIS_LOTTO01_2026-11-15.mjs` è aggiornato agli stessi numeri; le identità personali attese restano **162**, i riferimenti legacy **10**, le opere curate Vivaldi **4**, e le schede Flaminio **500**.

**Preflight dati:** verificati nel repository ID di entrambi i lati delle 4 equivalenze; compatibilità tassonomica tipizzata (Mundi `corrente` con classe genere/forma/sottogenere ↔ Atlantis `nodo-di-senso` con sottotipo genere/forma); assenza di ripetizioni tra le 12 coppie; esistenza degli estremi dei 6 nuovi archi; unicità dei 24 identificatori di arco. Nessun file `grafo.json` di produzione viene alterato.

**Limite dei test:** questa integrazione è verificata **a livello di struttura/crosswalk e condizioni statiche del modulo**. Non è certificato un esito runtime del motore con tutti i JSON aggiornati, né il rendering reale su desktop/Android; tali test restano aperti.

## Gate di accettazione prima del Lotto 2 Flaminio
1. Cercando **Opera**: una sola radice canonica della famiglia *generi e forme*, che riceve gli archi di Mundi, Atlantis e Flaminio; non appare un doppione nella categoria *Opere*.
2. Cercando **Opera buffa**, **Opera seria**, **Dramma giocoso**, **Opéra-comique**, **Tragédie en musique**, **Intermezzo comico**: nessun doppione dalle due sorgenti riconciliate, con ogni arco originale presente.
3. Cercando **Singspiel** o **Mozart**: le opere pertinenti già documentate e il legame col genere si vedono; nessuna opera di altri autori si propaga per attraversamento del nodo condiviso.
4. **Opéra-bouffe**, **Operetta**, **Grand opéra**, **Opera romantica tedesca**: differenze storiche e istituzionali preservate; link trasversali etichettati.
5. **Dramma per musica** e rubriche Flaminio: visibili come fonti/denominazioni, senza nuovi doppioni del genere Opera né nuove opere inventate.
6. Filtri indipendenti `Persone`, `Opere`, `Generi e forme` e relative etichette, profondità fino a 5; nessun HOLD nell'impostazione base, zero orfani e duplicati di archi. Verifica su browser/Android ancora necessaria.

**Decisione:** proseguire la riconciliazione delle altre famiglie e delle singole opere **prima del Lotto 2**; nessuna promozione alla produzione in questo intervento.
