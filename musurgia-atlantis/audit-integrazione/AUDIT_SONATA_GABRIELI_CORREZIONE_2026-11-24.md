# Gate mirato: Sonata strumentale tardocinquecentesca → Sonata pian e forte
## 24 novembre 2026 — Fase 1 Mundi / Atlantis / Flaminio

**Ambito:** esclusivamente staging `musurgia-atlantis/audit-integrazione/` su `main`. **Lotto 2 Flaminio bloccato.**

### Riscontro
- L'audit delle 133 relazioni verso persone e quattro verso opere ha individuato un solo esempio storico rimasto escluso: `L07-A050`.
- Coppia: `atlantis::senso:sonata-strumentale-1590` ↔ `atlantis::opera:sonata-pian-e-forte-1597`.
- Predicato di fonte: `esemplifica_sonata_strumentale_tardocinquecentesca`; qualità registrata: `riscontro_storico_indipendente`.
- La proiezione Sonata precedente accettava relazioni formali generiche, ma non questo predicato specifico.

### Correzione
Nel visualizzatore `VISTA_DB_FEDERATO_LOTTO01_2026-11-15.html`, all'interno della proiezione Sonata, è stato permesso **solo** il collegamento con ID originale `L07-A050`, layer Atlantis, identica coppia di estremi, predicato e qualità già registrati. Il controllo si applica da radice di genere Sonata tardocinquecentesca, non a tutte le opere o a tutte le relazioni «esemplifica».

Commit: [`f41ebca`](https://github.com/SkenderAle/github-pages/commit/f41ebca50964f3b6fccd36caa10a8ed4a651a43f).

### Controlli realmente eseguiti
- **PASS mirato in V8 su grafo minimo artificiale**, usando il corpo aggiornato della funzione: compare l'arco specifico, un arco contraffatto con stesso predicato ma coppia errata è escluso, disabilitare categoria Opere nasconde opera e arco, profondità zero esclude l'opera.
- **NON ESEGUITO il test sul database completo delle 17 sorgenti in ambiente Node CLI**. È stato creato `TEST_SONATA_GABRIELI_RADICATA_2026-11-24.mjs` per riprodurre il gate: verifica conteggi invariati, ID fonte e predicato, visibilità radicata, categoria Opere, profondità e assenza del collegamento. Non dichiarare PASS di questo harness senza eseguirlo.
- **NON ESEGUITO il collaudo browser/DOM/WebGL/Canvas/Android**.
- Nessun nodo o arco aggiunto; invariati builder e grafi pubblici.

### Prossimi passi
1. Eseguire il nuovo harness sul corpus reale, con eventuali correzioni a fronte di errori; proseguire con la suite Node CLI.
2. Collaudare ricerca «Sonata strumentale tardocinquecentesca» sul viewer desktop e Android: visualizzazione opera e arco, click, focus, filtro Opere, profondità 1–5.
3. Audit semantico dei 23 ruoli letterari/scenici tra le 133 relazioni residue, senza convertirli in autorialità musicale.

**Stato:** correzione applicata in staging; mock V8 PASS; gate dati reali / Node / browser OPEN; Fase 1 OPEN; Lotto 2 BLOCKED.
