# Musurgia Mundi–Atlantis–Flaminio — Audit ontologico trasversale di generi e forme
**Data:** 15 novembre 2026. **Branch:** main. **Stato:** DIAGNOSI E PIANO DI RICONCILIAZIONE; nessuna fusione aggiuntiva approvata; Lotto 2 Flaminio BLOCCATO.

## Principio vincolante
Non occorrono audit isolati per ciascun genere, ma un **registro ontologico unico**, confrontando in parallelo tutte le classi di Mundi, Atlantis e delle 500 schede del Lotto 1. Identità canonica, sottogenere, genere storico, organico, periodo, funzione, stile di scrittura, raccolta, versione/trascrizione, stato conservativo e documento di fonte non sono equivalenti. Un'opera può avere più classificazioni e più relazioni motivate. Nessun collegamento documentato va omesso soltanto per rendere più leggero il grafo: i filtri della vista gestiscono la densità.

**Sorgenti effettivamente lette e confrontate**
- Mundi: `atlante3d/database/grafo.json`, blob `57c65e209628b0fe43d0d5040bd27deb7e1624c8` (869 nodi, 2.437 archi).
- Atlantis: `musurgia-atlantis/grafo.json`, blob `4863b3fe263154387de3388c0b813b5f94546f12` (754 nodi, 1.718 archi).
- Staging Flaminio Lotto 1: `STAGING_GRAFO_FEDERATO_LOTTO01_JSB06_V11_GATE04_COPIA_2026-11-15.json`, blob `6f1793f3d8b07469a458c7bbbd768eb8cb37050e` (1.365 nodi, 2.780 archi).
- Crosswalk già curato: `CROSSWALK_TASSONOMICO_MUNDI_ATLANTIS_LOTTO01_2026-11-15.json`, 8 identità tassonomiche + 10 rinvii Flaminio legacy. Non è un crosswalk completo.
- Precedenti overlay da conservare/riconciliare: `OVERLAY_FAMIGLIA_CONCERTO_CHECKPOINT25_2026-11-10.json`, `CHECKPOINT40_CONCERTO_SOTTOGENERI_15_OPERE_2026-11-10.json`, `GENERI_FORME_LEGACY_PREVIEW_CHECKPOINT11_2026-11-09.json`.

## Rettifica immediata: Concerto di gruppo NON significa concerto per più solisti
L'etichetta editoriale dell'utente **«Concerto di gruppo» indica qui un concerto senza solisti distinti**. Va distinta dal concerto per più solisti e dal concerto grosso. Adottare una definizione esplicita per evitare polisemia:
- **Concerto per orchestra / di gruppo, senza solisti distinti:** tipologia per complesso strumentale; relazione `soloist_configuration = none`. Il Concerto per orchestra di Béla Bartók è già nello staging, scheda `flaminio:excel:4277` e opera candidata `audit:fl01:bbb:work:excel4277`. Richiede verifica della classificazione e della sua specificità novecentesca.
- **Concerto ripieno:** tipologia barocca di concerto per archi/orchestra senza solisti; sottoarticolazione storica del precedente, **non** sinonimo storico di ogni concerto per orchestra. Fonte esplicita di Flaminio per Vivaldi RV 133: https://www.flaminioonline.it/Guide/Vivaldi/Vivaldi-Concerto133.html .
- **Concerto per più solisti:** due o più parti solistiche individuabili, distinto da «senza solisti»; mantenere eventuali sottotipi per 2, 3, 4 e combinazioni di strumenti.
- **Concerto grosso:** tipologia barocca con dialogo concertino/ripieno; non coincide né con il concerto ripieno senza solisti né indistintamente con tutti i concerti per più solisti.
- **Concerto brandeburghese:** raggruppamento editoriale delle sei opere individuali, senza farne automaticamente un sottogenere storico distinto o classificare tutti i sei concerti come «grossi».

**Conseguenza sui dati:** il vecchio overlay `OVERLAY_FAMIGLIA_CONCERTO_CHECKPOINT25_2026-11-10.json` definisce `audit:gf25:concerto-di-gruppo` come «gruppo di strumenti solisti». Tale uso è incompatibile con la nuova definizione editoriale. Prima di rinominare/fondere il nodo devono essere revisionati almeno:
1. `audit:gf25:tax:09` («Concerto grosso» -> «Concerto di gruppo»): NON importare nella gerarchia «senza solisti»;
2. `audit:gf25:work:02` (Vivaldi RV 522 -> «Concerto di gruppo»): riclassificare verso «Concerto per due violini solisti» / «Concerto per più solisti», senza perdere la provenienza originale;
3. tutti gli altri archi entranti/uscenti da `audit:gf25:concerto-di-gruppo`, evitando migrazioni nominali automatiche.
Il modulo unificato attuale non importa direttamente i due overlay Concerto; la riconciliazione non è quindi terminata.

## Altre famiglie: riscontri diretti e stato
| Famiglia | Mundi | Atlantis | Flaminio Lotto 1 | Esito/Gate |
| --- | --- | --- | --- | --- |
| Concerto | `genere-concerto` | `senso:concerto` | `legacy:gf:genere-concerto` | Radice già riconciliata; sottocategorie e overlay incompleti |
| Sonata | `genere-sonata` | `senso:sonata`; distinto `senso:forma-sonata` | `legacy:gf:genere-sonata`; almeno sette sottocategorie specifiche | Radice già riconciliata; sottotipi/organici ancora da esaminare |
| Sinfonia | `genere-sinfonia` | `senso:sinfonia` | `legacy:gf:genere-sinfonia` | Flaminio legacy rinvia a Mundi, ma Mundi–Atlantis NON presente nelle 8 identità curate: due radici nella vista |
| Cantata | `genere-cantata` | `senso:cantata` | `legacy:gf:genere-cantata` con `atlas:gf:cantata-sacra` e `atlas:gf:cantata-profana` | Da verificare e gerarchizzare |
| Oratorio | `genere-oratorio` | `senso:oratorio` | `atlas:gf:oratorio` e `audit:fl01:jsb04:genre:oratorio` | Potenziale duplicazione nella sorgente Flaminio |
| Lied | `genere-lied` | `senso:lied` | `legacy:gf:genere-lied` | Radice da riconciliare con verifica concettuale |
| Opera | `genere-opera` | `senso:opera` | `legacy:gf:genere-opera` | Genere teatrale distinto dai record di singole opere; verificare anche sottogeneri |
| Suite | `genere-suite` | nessuna radice semplice `senso:suite` nel campione di nodi di senso | `legacy:gf:genere-suite` e articolazioni per organico/funzione | Conservare distinzioni raccolta, trascrizione, suite orchestrale |
| Quartetto d'archi | `genere-quartetto-archi` | `senso:quartetto` | nessun corrispettivo nominale fra i 69 nodi genere/forma dello staging | Identità Mundi–Atlantis già curata; completare repertorio |

I conteggi degli archi **direttamente incidenti sulle radici originali** sono: Mundi Concerto 89, Sonata 49, Sinfonia 82; Atlantis Concerto 4, Sonata 5, Sinfonia 7; staging Flaminio Concerto 47, Sonata 5, Sinfonia 11. Sono conteggi dei grafi sorgente, **non** del grafo risultante dopo redirect, e non dimostrano che ogni arco sia semanticamente omogeneo.

### Sonata
- Mantieni separati **genere Sonata** e **forma-sonata** (forma di movimento utilizzata anche da sinfonie, quartetti e concerti).
- Distinguere la funzione storica (da chiesa/da camera), la disposizione strumentale (a due/a tre), l'organico (tastiera sola, violino e clavicembalo, flauto e continuo, viola da gamba, trio per organo) e il periodo. Le diverse faccette possono coesistere.
- Il Lotto 1 contiene `audit:fl01:jsb04:genre:sonata-camera`, `sonata-violino-clavicembalo`, `sonata-flauto`, `sonata-viola-da-gamba` e le tipologie per violino solo, trio d'organo e tastiera dei sottolotti JSB05–06. Queste classi NON si devono fondere tra loro soltanto perché sono tutte «sonate».
- Atlantis distingue `senso:sonata-strumentale-1590` da `senso:forma-sonata`, con relazione originaria `non_equivale_a`; preservarla.
- Fonte lessicografica: https://www.treccani.it/enciclopedia/sonata/ .

### Sinfonia
- Priorità alta: audit esplicito dell'identità concettuale `genere-sinfonia` ↔ `senso:sinfonia`, prima di promuovere un redirect. Attualmente **non** appartiene alle 8 fusioni tassonomiche approvate nello staging.
- **Sinfonia concertante:** non è attualmente un nodo autonomo nei tre grafi esaminati. Introdurlo **solo con fonti e ID di identità**; collocarlo nella famiglia Sinfonia, con relazione storica/di ibridazione verso Concerto e scrittura concertante. NON sinonimo di concerto grosso, né di qualsiasi concerto per più solisti.
- **Sinfonia con coro** (Atlantis `senso:sinfonia-con-coro`) indica una configurazione organico-vocale, non automaticamente un genere indipendente.
- **Sinfonia a programma**: relazione/formalizzazione del programma extramusicale; non sovrapporre al poema sinfonico.
- Distinguere sinfonia d'opera/ouverture, sinfonia autonoma, opere sinfoniche con solisti o voci, ciclo di sinfonie e singola opera; ogni riclassificazione deve citare una fonte.
- Riferimenti: https://www.treccani.it/enciclopedia/sinfonia/ e https://www.report.rai.it/dl/portali/site/articolo/ContentItem-fb69432f-5617-4226-96e8-3d6857a9d692.html .

## Protocollo per il crosswalk generale
Per **ogni** entità `generi_forme` / tassonomia storica / terminologia di genere individuata in Mundi, Atlantis e Flaminio Lotto 1:
1. registrare `source_layer, source_id, source_label, source_category, source_parent, source_relations, evidence_urls`;
2. confrontare candidature per concetto e funzione storica, **non** solo per etichetta;
3. attribuire **uno** stato: `IDENTITY_CURATED`, `SUBTYPE_OF`, `RELATED_HISTORICALLY`, `FACET_INSTRUMENTATION`, `FACET_PERIOD`, `WORK_COLLECTION`, `VERSION_ARRANGEMENT`, `SOURCE_DOCUMENT`, `AMBIGUOUS_HOLD`, `DISTINCT`;
4. non usare `subgenre_of` per trascrizione, frammento, raccolta, documento o periodo;
5. consentire più classificazioni per opera, con provenance di ogni arco e delle eventuali fonti discordanti;
6. preservare ID e payload originari mediante mapping reversibile, senza alterare i JSON pubblici durante l'audit.

**Ordine di revisione:** (a) tutte le radici con corrispondenti nei tre DB; (b) tutte le sottocategorie e faccette; (c) opere e raccolte già note e overlay precedenti; (d) casi ambigui e duplicati; (e) filtri del viewer e test browser reali. Dopo Concerto/Sonata/Sinfonia continuare con Cantata, Oratorio, Opera, Suite, Lied, Quartetto, forme strumentali e vocali, teatro, danza e tradizioni. Non fermarsi alle tre famiglie-esempio.

## Test di accettazione
- `Concerto` mostra la radice condivisa e i distinti rami **senza solisti**, **solistico**, **più solisti**, **grosso**, con raggruppamento Brandeburghese e faccette strumentali/storiche non appiattiti.
- Il Concerto per orchestra di Bartók non compare come concerto per più solisti; Vivaldi RV 522 rimane due violini solisti; RV 133 è candidato per la tipologia ripieno solo dopo ammissione documentata al corpus.
- `Sonata`: radice unica; forma-sonata separata; sonate per organico e funzione collegabili senza doppioni; ricerca Bach non si allarga a opere altrui.
- `Sinfonia`: unica radice nell'output dopo revisione; 82/7/11 archi di ingresso originari preservati con relativi predicati; Sinfonia concertante riconoscibile come entità distinta quando documentata.
- Ogni altra famiglia con crosswalk approvato ha **una** identità di navigazione, ma conserva le provenienze, i record di fonte, le relazioni e le esclusioni.
- Filtri Persone, Opere, Generi e forme, etichette indipendenti, livelli 1–5, ricerca radicata e HOLD esclusi di default funzionanti su desktop/Android; zero archi orfani e duplicati di ID; 500/500 schede originarie preservate.

## Decisione
**Non avviare Lotto 2. Non modificare i grafi di produzione.** Prima completare il registro di riconciliazione di **tutte** le famiglie e verificare con test effettivi il nuovo grafo unificato. Questo audit rettifica la definizione di «Concerto di gruppo» e amplia lo scope; NON esegue nuove fusioni né attribuzioni.
