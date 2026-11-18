# Regressione su dati reali — Musurgia Mundi / Atlantis / Flaminio
## Gate del 18 novembre 2026 · dopo la correzione della navigazione radicata

**Repository:** `SkenderAle/github-pages` · branch `main`  
**Ambito:** solo `musurgia-atlantis/audit-integrazione/` · nessuna modifica ai tre grafi/interfacce di produzione.  
**Stato:** `PASS_BUILDER_REAL_DATA_AND_ROOTED_LOGIC`; `NOT_RUN_BROWSER_WEBGL_ANDROID`; `LOTTO2_BLOCKED`.

### Modalità della prova

Sono stati recuperati dal repository, mediante SHA dei blob GitHub, tutti i **17 JSON reali** dichiarati dall'array `sourcePaths` del builder `DB_UNIFICATO_MUNDI_ATLANTIS_LOTTO01_2026-11-15.mjs`. I JSON sono stati interpretati in memoria e la funzione originale `buildUnifiedDatabase` è stata eseguita in JavaScript V8, adattando soltanto i marcatori di modulo per poterla valutare nell'ambiente isolato. **Non** è stato usato un campione o un sostituto sintetico dei dati.

È stato poi eseguito il corpo del test riproducibile `TEST_GATE_RADICATO_POST_UNIFICAZIONE_2026-11-18.mjs`, in V8 sulle medesime sorgenti, sostituendo l'accesso filesystem del runtime Node con letture virtuali che restituivano esattamente i blob originali. Il test estrae e invoca la logica di proiezione dall'**HTML effettivo** di staging, non una sua riscrittura semplificata. Esito: **PASS_LOGICAL_RUNTIME_NOT_BROWSER**. Il comando Node diretto del test non è stato avviato in un clone locale completo.

### Conteggi effettivi (PASS)

| Misura | Valore reale |
|---|---:|
| Sorgenti JSON caricate | 17 / 17 |
| Nodi unificati | 2.897 |
| Archi unificati | 8.725 |
| Record bibliografici Flaminio | 500 |
| Record Flaminio univoci | 500 |
| Nodi documentari Flaminio corrispondenti | 500 |
| Righe Flaminio senza scheda associata | 0 |
| Archi con estremi orfani | 0 |
| Identificativi di arco duplicati | 0 |
| Identità persone Mundi–Atlantis accettate | 162 |
| Identità tassonomiche Mundi–Atlantis accettate | 21 |
| Persone condivise con Flaminio | 5 |
| Riferimenti legacy Flaminio riconciliati | 12 |

Il builder non ha emesso avvisi numerici né errori ai gate interni. Il registro del 18 novembre attendeva **2.897/8.725**: quei valori sono ora **verificati sui dati reali**, non più soltanto previsti. Questo verifica integrità tecnica e cardinalità, **non** correttezza storica/ontologica di ogni relazione.

### Gate candidati: correzione confermata

Gli archi `counterpoint_staging::cf20261115:030` e `counterpoint_staging::cf20261115:031`, con `quality=STAGING_CANDIDATE_FORM_LINK_NOT_IDENTITY`, **esistono ancora** nel database, che conserva 8.725 archi; entrambi sono **assenti dalle proiezioni musicali predefinite** sia del builder sia dell'HTML. Non è stata trasformata una proposta in attribuzione certificata.

Correzioni:
- `23c84d798bcd58a8cbfeb71a3ea45264595dcdc4` — filtro del builder;
- `4a715c79c82e29210d4379df644a21ca2d1d69ab` — filtro HTML.

### Gate di pertinenza: radice e focus

Il grafo originale consentiva che una categoria condivisa propagasse centinaia di opere estranee al percorso. La nuova navigazione generica conserva i collegamenti diretti dalla radice; le opere e i compositori sono terminali rispetto all'espansione automatica attraverso un genere comune. Un clic su nodo intermedio apre **un passaggio contestuale alla volta**, con vincolo di appartenenza al perimetro di radice; le proiezioni specializzate mantengono la propria logica.

| Radice · profondità 5 | Prima (nodi) | Dopo (nodi) |
|---|---:|---:|
| Singspiel | 1.851 | 6 |
| Mozart | 1.808 | 62 |
| Opera | 1.864 | 197 |
| Concerto | 1.862 | 154 |
| Il flauto magico | 1.788 | 6 |

| Percorso con focus · profondità 5 | Prima | Dopo |
|---|---:|---:|
| Mozart → Concerto | 781 | 6 |
| Mozart → Opera | 812 | 13 |
| Singspiel → Mozart | 1.923 | 4 |
| Singspiel → Opera | 1.929 | 5 |
| Il flauto magico → Mozart | 1.923 | 3 |

Le **sei opere** che compaiono nella proiezione Mozart (radice) sono quelle attualmente collegate come opere direttamente pertinenti alla persona nel patrimonio unificato. La loro presenza non autorizza l'assegnazione automatica a un determinato genere. Il gate impedisce che Mozart → Concerto mostri opere di altri compositori attraverso il nodo «Concerto».

**Proiezioni specializzate immutate nei controlli effettuati:** Bach 468 nodi/467 archi; Sonata 109/108; Suite 47/46. Test riproducibile: `TEST_GATE_RADICATO_POST_UNIFICAZIONE_2026-11-18.mjs`.

Correzioni:
- `8cc4e1b4e15dd50d60ce57a299e6055d87bd6e85` — vincoli radice per persone, opere e generi;
- `411e60037c7d19f7eb7654376c549b68af93e0fd` — vincoli focus contestuale;
- `59c60ec5f005c636d009fd91b0169ec228c525f9` — spiegazione dei livelli nella vista.

### Questioni reali ancora aperte

1. **Autore → opera → genere**: Mozart → Opera, con focus radicato, non espone ancora opere perché non risulta confermata nel percorso una relazione esplicita opera-specifica adatta a quel filtro. Non si deve rimediare propagando genericamente `Mozart → Opera` a tutte le opere di Mozart.
2. **Singspiel**: esistono il collegamento a Mozart e quello a *Il flauto magico*. Negli inventari di nodi attualmente controllati di Mundi, Atlantis e staging Flaminio non è stata trovata una voce `Die Entführung aus dem Serail` / `Il ratto dal serraglio`. La sua eventuale introduzione richiede record e fonte attestati; non crearla dal solo titolo.
3. **Prova DOM/browser/WebGL/Canvas** su desktop e Android non eseguita. Restano da misurare performance, grafica, sfondo, etichette in hover/tap, filtri, confronto fra lemmi e continuità del percorso.
4. **Batteria preesistente `TEST_*_RUNTIME_*.mjs`**: non è stato eseguito singolarmente l'intero insieme degli harness. Il nuovo gate è stato eseguito in V8 con sostituzione dell'I/O come sopra; il comando `node ...` in un clone non è ancora attestato.
5. **Audit musicologico integrale** di opere, movimenti, adattamenti, versioni, HOLD e 500 schede come fonti non completato. La solidità del builder non equivale a catalogazione certificata.

### Decisioni di stato

- `Lotto 1 = OPEN / builder e logica radicata superati, revisione musicologica e browser aperti`.
- `Lotto 2 = BLOCKED`.
- `atlante3d/database/grafo.json`, `musurgia-atlantis/grafo.json` e `musurgia-atlantis/index.html`: **non modificati** da questa sessione.
- Nessuna promozione dalla vista di staging al frontend di produzione.

**Prossimo gate:** verificare l'assegnazione opera-specifica a generi e forme (priorità Mozart / Singspiel / Opera / Concerto), poi collaudare l'HTML in browser e Android con i nuovi vincoli, senza aprire Lotto 2.
