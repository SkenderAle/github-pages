# Audit e recupero contestuale di 21 ruoli — 24 novembre 2026

**Ambito:** staging Mundi–Atlantis–Flaminio, ramo `main`. **Lotto 2 Flaminio BLOCKED**. Nessuna modifica ai grafi pubblici.

## Perimetro
Dal registro storico `REGRESSIONE_RICONCILIAZIONE_531_PERSONE_2026-11-21.json` sono stati identificati 23 archi verso persone etichettati ruoli letterari/librettistici (8) e scenici/storici/occasioni (15).

- **21** archi riguardano una radice nominativa di opera o produzione (`atlantis::opera:*` oppure `atlantis::produzione:*`).
- **2** archi non sono riferiti a una singola opera o produzione e **restano archivistici**: `L02-A20` Hilverding–Ballet d'action (contributo alle riforme) e `L02-A31` Molière–Comédie-ballet (testi per il genere).
- Un ruolo di librettista, poeta, coreografo, produttore, direttore, committente, destinatario commemorativo o occasione storica non equivale alla composizione musicale. Il predicato originale è conservato.

## Correzione alla vista di staging
Commit [`b7d11ba`](https://github.com/SkenderAle/github-pages/commit/b7d11bab82f8cfc3a799cfa87b2b2a1ca0235630).

Aggiunte `verifiedRootContextRoleRules` e `withVerifiedRootContextRoles`; la nuova funzione è applicata dopo il recupero preesistente degli autori della musica nelle sette proiezioni specializzate. Non muta il database.

Il collegamento viene mostrato soltanto se corrispondono contemporaneamente ID originale Atlantis, coppia esatta opera/produzione–persona, predicato originale, flag storico, stato di verifica e presenza di URL fonte. Servono lente attiva, filtro Persone e profondità almeno 1. Durante il focus viene conservato esclusivamente il breadcrumb diretto da opera a persona: nessuna estensione al repertorio della persona. In caso di filtro Persona disabilitato e focus preesistente, il breadcrumb è conservato come nella funzione autori precedente.

## Controlli realmente svolti
**PASS su grafo minimo JavaScript V8:** apparizione del ruolo esatto, filtro Persone, tutte le lenti spente, profondità zero, mantenimento del focus. Si tratta di prove isolate, non di esecuzione sul database reale.

**NON eseguiti:** test sulle 17 sorgenti effettive in Node CLI, collaudo completo browser/DOM/WebGL/Canvas e Android, batteria preesistente di regressioni. Il file [`TEST_RUOLI_CONTESTUALI_RADICATI_2026-11-24.mjs`](TEST_RUOLI_CONTESTUALI_RADICATI_2026-11-24.mjs) è stato creato per verificare su dati reali i 21 archi e i filtri; preparazione del test non significa PASS.

**Attenzione:** i vecchi conteggi di 515 persone archiviate e 688 relazioni archiviate si riferiscono al gate precedente; non dichiarare nuovi conteggi senza ricostruire tutti i 169 percorsi sul builder completo aggiornato.

## Prossimi gate
1. Eseguire il nuovo test su tutti i JSON del Lotto 1, correggere eventuali mismatch su orientamento, categoria, predicato e fonte.
2. Rieseguire i gate storici e il test Sonata Gabrieli; controllare anche gli altri archi storici esclusi.
3. Collaudare il viewer su desktop e Android, senza pubblicare prima del PASS.
4. Passare poi ai 13 contesti storici e alle 89 pratiche/repertori autore–genere, senza promuoverli ad autorialità di composizioni.

**Stato:** 21 ruoli abilitati nello staging, gate mock V8 PASS, test integrale/CLI/browser OPEN; Fase 1 OPEN; Lotto 2 BLOCKED.
