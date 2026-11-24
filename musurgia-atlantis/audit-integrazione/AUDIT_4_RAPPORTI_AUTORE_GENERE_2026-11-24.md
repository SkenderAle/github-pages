# Fase 1 — Gate mirato autore–genere: Lully, Rameau, Frescobaldi, Bach
## 24 novembre 2026

**Ambito:** `SkenderAle/github-pages`, `main`, solo staging `musurgia-atlantis/audit-integrazione/`. **Lotto 2 Flaminio bloccato, produzione invariata.**

## Origine
Il registro `REGISTRO_AUDIT_89_AUTORI_GENERI_2026-11-24.json` documenta 89 archi/83 coppie. I quattro collegamenti Atlantis con qualità interna `riscontro_storico_indipendente` sono:

| ID origine | Radice genere | Persona | Predicato di fonte |
|---|---|---|---|
| `L02-A30` | Comédie-ballet | Jean-Baptiste Lully | `compone_musiche_per_la_comedie_ballet` |
| `L02-A34` | Opéra-ballet | Jean-Philippe Rameau | `compone_nel_genere_opera_ballet` |
| `L07-A071` | Ricercare | Girolamo Frescobaldi | `compone_e_pubblica_ricercari` |
| `L07-A072` | Ricercare | Johann Sebastian Bach | `compone_ricercari_nell_offerta_musicale` |

Sono attestazioni **di prassi e rapporto con il genere**, non attribuzioni di singole opere. Le fonti esterne già annotate nel DB non sono state riaperte per nuova certificazione storica in questo intervento.

## Intervento tecnico
Nel viewer di staging è stata aggiunta una mappa chiusa `verifiedRootGenrePracticeRules` e la funzione `withVerifiedRootGenrePractices`, eseguita dalla funzione già esistente `withVerifiedRootRelations` **soltanto sulle proiezioni specializzate**. Non cambia il builder unificato.

Le condizioni comprendono simultaneamente ID fonte Atlantis, predicato, qualità `riscontro_storico_indipendente`, coppia esatta radice–persona, flag `historical_verified_independently`, stato `confermato_da_*` e URL di fonte. Sono rispettati filtro Persone, stato delle lenti, profondità e breadcrumb di focus. Il traversal non attraversa dal genere alle composizioni del musicista o viceversa.

**Commit HTML:** [`4fa2900`](https://github.com/SkenderAle/github-pages/commit/4fa2900d6553f2238ad820b7fdb87f0f9e1e9af9).

## Sei coppie già ripetute nel registro
Quattro nel Musical: Gershwin, Bernstein, Rodgers e Sondheim, ciascuno con una attestazione Mundi ed una `mundi_extension`. Due nel Ricercare: Frescobaldi e Bach, attestazione Atlantis distinta dalla relazione generale Mundi.

**Non deduplicare l'origine**: la medesima coppia di nodi può avere predicati e qualità differenti; nessun arco né nodo sorgente è stato fuso o cancellato. Gli archi originali `mundi::grafo::1878` e `mundi::grafo::1880` sono attesi ancora presenti nel builder. Il viewer aggiunge alla proiezione solo gli archi Atlantis qualificati quando la radice coincide.

## Verifiche
- **PASS mirato su grafo sintetico in JavaScript V8:** coppia corretta, filtro Persone, nessuna lente, profondità zero, focus e rifiuto di ID contraffatto (6 controlli).
- **Test sulle 17 sorgenti reali preparato ma NON ESEGUITO**: `TEST_4_RAPPORTI_AUTORE_GENERE_2026-11-24.mjs`, per i quattro link, i relativi metadati, la visibilità radicata, la non perdita dei due link Mundi e i filtri.
- **NON ESEGUITI** la regressione CLI integrale e il collaudo browser/DOM/WebGL/Android.
- Non aggiornare i numeri 515/688 delle relazioni archiviate sulla base della sola modifica della funzione: serve il ricalcolo effettivo delle 169 radici dopo tutte le correzioni del 24 novembre.

## Prossimi gate
1. Esecuzione reale dei nuovi harness e di quelli storici, controllo delle regressioni introdotte nelle viste specializzate.
2. Validazione bibliografica delle quattro attestazioni, ove necessaria, e delle sei coppie canoniche ripetute.
3. Audit separato degli otto link editoriali derivati e delle due relazioni di genere Hilverding/Molière.
4. Collaudo browser e Android; soltanto dopo valutare chiusura Lotto 1. **Non aprire Lotto 2.**
