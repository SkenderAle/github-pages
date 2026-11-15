# Musurgia Mundi–Atlantis–Flaminio, Lotto 1 — Audit ontologico «Concerto» e sottocategorie
**Data:** 15 novembre 2026. **Branch:** main. **Stato:** verifica e proposta editoriale, **non** autorizzazione a fondere automaticamente tutti i sottogeneri. **Lotto 2 Flaminio BLOCCATO.**

## Corpus effettivamente confrontato
- Mundi: `atlante3d/database/grafo.json` (blob `57c65e209628b0fe43d0d5040bd27deb7e1624c8`; 869 nodi, 2.437 archi).
- Atlantis: `musurgia-atlantis/grafo.json` (blob `4863b3fe263154387de3388c0b813b5f94546f12`; 754 nodi, 1.718 archi).
- Flaminio Lotto 1: `STAGING_GRAFO_FEDERATO_LOTTO01_JSB06_V11_GATE04_COPIA_2026-11-15.json` (blob `6f1793f3d8b07469a458c7bbbd768eb8cb37050e`; 1.365 nodi, 2.780 archi).
- Registro già presente: `CROSSWALK_TASSONOMICO_MUNDI_ATLANTIS_LOTTO01_2026-11-15.json`, con 8 equivalenze concettuali Mundi–Atlantis, 10 riferimenti legacy Flaminio, 4 concerti di Vivaldi e relativi archi nello staging curato. È già attivo nel modulo `DB_UNIFICATO_MUNDI_ATLANTIS_LOTTO01_2026-11-15.mjs`, senza cambiare i JSON pubblici.

## Identità: una sola radice Concerto, ma sottocategorie distinte
- Mundi `genere-concerto` = «Concerto», macrogenere.
- Atlantis `senso:concerto` = «Concerto, concerto grosso e solista», nodo-sintesi: l'accorpamento curato alla radice *Concerto* è ammissibile come tema generale, ma **non** autorizza a confondere grosso e solistico.
- Flaminio `legacy:gf:genere-concerto` = riferimento dichiarato all'ID Mundi `genere-concerto`, non un nuovo genere. La sua fusione in staging è ancorata a ID legacy e etichetta espliciti.

## Sottocategorie e attributi, regole da adottare
| Nodo / denominazione presente | Identità e predicato proposti | Trattamento |
| --- | --- | --- |
| Mundi `forma-concerto-grosso`, «Concerto grosso barocco» | Sottotipo storico di Concerto; mantenere epiteto barocco e contesto | Conservare come nodo distinto, eventualmente introdurre `concerto grosso` generale solo quando esistono attestazioni di varianti storiche ulteriori |
| Flaminio `audit:fl01:jsb03:genre:concerto-solista` | Tipologia «Concerto solistico» | Figlio del macrogenere; confrontare e riconciliare con `audit:gf25:concerto-solistico` della precedente preview |
| Flaminio `audit:fl01:jsb03:genre:concerto-piu-solisti` | «Concerto per più solisti» | Figlio del macrogenere, **non sinonimo** del concerto grosso; confrontare con l'etichetta editoriale «Concerto di gruppo» (`audit:gf25:concerto-di-gruppo`) |
| Flaminio `audit:fl01:jsb03:genre:concerto-brandeburghese` | Famiglia/sottocategoria editoriale dei sei concerti specifici di Bach | Conservare il raggruppamento richiesto; **non** dichiararlo automaticamente genere musicale storico autonomo né concerto grosso per tutti e sei |
| Flaminio `audit:fl01:jsb03:genre:concerto-trascrizione-organo` | Arrangiamento o trascrizione | Predicato `arranged_for` / `derived_from`, non solo `subgenre_of` |
| Flaminio `audit:fl01:jsb03:genre:concerto-tastiera-sola` | Riferimento allo stile del concerto | Predicato `in_concerto_style`; non equivale a concerto solistico con orchestra |
| Flaminio `audit:fl01:jsb03:genre:frammento-concerto` | Stato della fonte / conservazione | Predicato `preservation_state`, **non** `subgenre_of` |
| Mundi `forma-concerto-strumentale-romantico`, `forma-concerto-per-arpa-novecento`, ecc. | Varianti storiche e organici | Organico e periodo come *faccette*, mantenendo le specifiche fonti e relazioni Mundi |

**Modello minimo:** identità canonica ≠ relazione tassonomica ≠ organico ≠ periodo ≠ raccolta ≠ versione/trascrizione ≠ attestazione documentaria. Un'opera può avere classificazioni molteplici; nessuna equivalenza si deduce soltanto dal nome.

## Reti di opere: ciò che il dataset contiene
- Atlantis `opera:bach-sei-concerti-brandeburghesi-1721` è la **raccolta** di sei concerti, collegata a Bach.
- Flaminio Lotto 1 contiene **sei opere individuali** (righe Excel 3081–3086, BWV 1046–1051), già collegate a Bach, al proprio raggruppamento `concerto-brandeburghese` e alla raccolta documentaria. Esiste già un **ponte senza fusione** fra raccolta Atlantis e raccolta Flaminio. Verificare la canonizzazione della raccolta senza confonderla con i sei lavori.
- Atlantis `opera:quattro-stagioni` è un nodo-raccolta/sintesi, già con arco di autore Vivaldi. Il crosswalk curato ha aggiunto quattro concerti distinti: RV 269, 315, 293, 297. Conservare i quattro membri e la relazione con la raccolta, non fonderli con essa.
- Atlantis `senso:concerto` ha alcuni archi di concerto e contesto, ma NON espone in partenza una gerarchia completa per grosso/solistico: quella parte proviene da Mundi e dagli overlay di audit.

## Rischio di perdita funzionale fra preview vecchia e vista unificata
Il vecchio `OVERLAY_FAMIGLIA_CONCERTO_CHECKPOINT25_2026-11-10.json` contiene **2** nodi editoriali (Concerto solistico e Concerto di gruppo), **9** archi di gerarchia e **7** classificazioni di opere. `CHECKPOINT40_CONCERTO_SOTTOGENERI_15_OPERE_2026-11-10.json` contiene **44 opere** distribuite in cinque raggruppamenti. Le preview precedenti visualizzavano questo corpus, ma **il nuovo modulo unificato non carica questi due file come sorgenti**. La ricognizione delle categorie non può dichiararsi completa finché anche questi dati non saranno riconciliati, senza duplicare ciò che si trova già nel Lotto 1.

## Requisiti di test prima di dichiarare risolta la famiglia «Concerto»
1. Ricerca radicata `Concerto`: compare un solo macrogenere, seguito da sottocategorie formali distinte, relativi autori e opere documentate.
2. Ricerca radicata `Concerto grosso`: deve mostrare il padre Concerto, le opere esplicitamente classificate e le relazioni di autore, non attribuire automaticamente tutti i concerti a questa categoria.
3. Ricerca radicata `Bach`: solo opere pertinenti a Bach, inclusi sei Brandeburghesi, con anelli autore–opera–genere; non importare opere di altri autori attraversando il genere condiviso.
4. Ricerca radicata `Vivaldi`: Quattro stagioni come raccolta e quattro RV distinti, archi autore/concerto/strumento ove documentati.
5. Filtri `Persone`, `Opere`, `Generi e forme` ed etichette indipendenti, fino a profondità 5, con HOLD esclusi per impostazione iniziale.
6. Verifica reale desktop/Android, nessun arco orfano, nessuna perdita delle relazioni/provenienze originarie e nessuna creazione di nuovi autori dal solo titolo.

## Decisione operativa
**Non avviare Lotto 2.** Prima completare *l'audit di identità e gerarchie* di tutte le classi (non soltanto Concerto), recuperando il lavoro dei vecchi overlay e riconciliando Mundi, Atlantis e il Lotto 1 senza appiattimenti. Questo documento registra la diagnosi e le regole; **non promuove nuove fusioni né modifica il grafo di produzione**.
