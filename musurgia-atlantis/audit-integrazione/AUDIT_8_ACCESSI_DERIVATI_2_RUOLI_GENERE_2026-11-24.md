# Chiusura audit degli otto accessi derivati e di due ruoli storici di genere
## Musurgia Mundi / Atlantis / Flaminio — 24 novembre 2026

**Repository:** `SkenderAle/github-pages` (`main`). Solo `musurgia-atlantis/audit-integrazione/`; **Lotto 2 BLOCCATO**. Grafi di produzione invariati.

## Otto raccordi editoriali: mantenimento fuori dalla navigazione storica
Il registro `REGRESSIONE_RICONCILIAZIONE_531_PERSONE_2026-11-21.json` contiene esattamente otto archi con predicato `accesso_indiretto_alla_famiglia`, qualità `DERIVED_NAVIGATION_NOT_DIRECT`. Non sono attestazioni storiche individuali e non autorizzano né un'attribuzione musicale né un percorso autore→opera. **Decisione: conservare nell'archivio esplicativo, senza promuoverli alle proiezioni storiche.**

| Famiglia | Persona | Arco |
|---|---|---|
| Madrigale | Giovanni da Cascia | `mundi::raccordo-tassonomico::13` |
| Musical | Jeanine Tesori | `mundi::raccordo-tassonomico::15` |
| Sinfonia | Alexander Glazunov | `mundi::raccordo-tassonomico::5` |
| Sinfonia | Reinhold Glière | `mundi::raccordo-tassonomico::10` |
| Variazioni | Dietrich Buxtehude | `mundi::raccordo-tassonomico::22` |
| Variazioni | Girolamo Frescobaldi | `mundi::raccordo-tassonomico::21` |
| Variazioni | Jean-Baptiste Lully | `mundi::raccordo-tassonomico::23` |
| Chanson | Guillaume de Machaut | `mundi::raccordo-tassonomico::19` |

## Due rapporti storici di genere
`L02-A20`: Franz Anton Hilverding `contribuisce_alle_prime_riforme_del_balletto_pantomimico` (Ballet d'action). `L02-A31`: Molière `scrive_testi_per_la_comedie_ballet` (Comédie-ballet).

A differenza degli accessi derivati, i due archi sono originali Atlantis con qualità `riscontro_storico_indipendente` già registrata. È stata introdotta nel viewer la mappa chiusa `verifiedRootGenreContextRules` e la funzione `withVerifiedRootGenreContexts`, innestata nella catena esistente di `withVerifiedRootRelations`.

Il recupero richiede l'esatta coppia di estremi, ID originale, predicato, qualità, flag di verifica storica, stato di verifica, almeno un URL della fonte, categoria Persone e lente attiva, profondità almeno 1. Focus limitato al rapporto storico originale, senza propagazioni al catalogo delle opere o interpretazioni di paternità musicale.

Commit correttivo: [`e1258a6`](https://github.com/SkenderAle/github-pages/commit/e1258a6b3a7c7cc6e89f23add548586518e6f6ce).

## Prove e limiti
- **PASS isolato** su grafo minimo JavaScript V8: presenza dell'arco, filtro Persone, tutte le lenti spente, profondità zero e focus.
- Creato `TEST_DUE_RUOLI_STORICI_GENERE_2026-11-24.mjs` per il controllo Node CLI su 17 sorgenti vere, **non ancora eseguito**.
- **Non ancora eseguiti**: collaudo generale Node CLI, DOM/WebGL/Canvas e Android. Nessuna riconvalida delle fonti esterne.
- I conteggi storici 515/688 delle relazioni residue non sono certificati sulla versione finale dello staging dopo i recuperi.

## Decisione
Otto link editoriali: **archiviati deliberatamente**. Due link di genere: **abilitati nello staging**, con nessuna mutazione del builder o dei grafi pubblici.

Prossimo passo prioritario: eseguire la batteria completa di regressione sui 17 JSON, confrontare i conteggi reali dopo tutti gli interventi del 24/11 e fare il collaudo effettivo della vista di staging. Solo allora valutare se il Lotto 1 sia tecnicamente chiudibile. **Lotto 2 rimane bloccato.**
