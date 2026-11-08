# Musurgia Atlantis — Fase 2C: confronto con il grafo effettivo, alias recuperati e falsi positivi
**Data:** 8 novembre 2026 · **Branch:** `main` · **Stato:** audit non distruttivo, solo documentazione. Non è stata eseguita alcuna fusione o modifica all'interfaccia pubblica.

## Fonti lette e controllate
- `atlante3d/database/grafo.json` — 869 nodi, tra cui 500 compositori/persone interessati dalla migrazione.
- `atlante3d/database/integrazione-operetta-musical.json` — 15 nodi, tra cui 9 compositori da includere.
- `musurgia-atlantis/grafo.json` — 754 nodi, fra cui 297 nodi `category=persona`.
- `audit-integrazione/STAGING_IMPORT_PERSONE_2026-11-08.json` — 509 record sorgente integrali.

**Controllo dell'integrità dello staging contro le fonti correnti:** 500/500 record base ritrovati, payload JSON identico; 9/9 record di estensione ritrovati, payload JSON identico. **Zero** record mancanti o alterati.

## Esito confronto reale
Il nuovo `CONFRONTO_IDENTITA_GRAFO_FASE2C_2026-11-08.json` contiene, per tutte le 509 persone, i dati target effettivamente letti da Atlantis e una revisione preliminare del ruolo.
- 155 nomi identici dopo normalizzazione; 3 alias già convalidati in Fase 2B; **tutti i 158 target esistono** in Atlantis, con `category=persona`.
- Nessuna incompatibilità di ruolo evidente: 11 sottotipi specializzati/multiruolo non vanno erroneamente considerati discrepanze di identità (per es. Caccini compositrice/cantante, Zarlino teorico, Kusevickij direttore/committente). Questi ruoli vanno preservati come attributi plurimi.
- Atlantis al momento offre nei propri nodi persona principalmente ID, nome, categoria e sottotipo: non contiene metadati cronologici/bibliografici sufficienti per certificare automaticamente tutte le 155 identità nominali. **155 restano formalmente da verificare**.
- I 351 record inizialmente senza match sono stati confrontati con le 297 persone Atlantis considerando anche gli alias sorgente. **34** producono una somiglianza di stringa almeno 0,66 con qualche target (potenziali falsi positivi). Tutti i suggerimenti e le decisioni sono documentati nel JSON, senza fusioni automatiche.

## Due ulteriori identità recuperate e documentate
1. `persona-sergej-diaghilev` (Sergej Djagilev) = `pers:diaghilev` (Sergej Diaghilev). Il catalogo d'autorità BnF elenca esplicitamente Djagilev come romanizzazione italiana e Diaghilev come forma francese della stessa persona: https://catalogue.bnf.fr/ark:/12148/cb11900087r
2. `persona-bronislava-nijinska` (Bronislava Nijinska) = `pers:bronislava-nizinskaja` (Bronislava Nižinskaja). La scheda d'autorità di Deutsche Biographie/GND riporta entrambe le varianti e le associa alla stessa coreografa: https://www.deutsche-biographie.de/118786237.html ; riscontro sul ruolo: https://www.loc.gov/collections/bronislava-nijinska/about-this-collection/

**Totale coppie d'identità documentate tramite alias: 5** (3 precedenti + 2 nuove). Nessuna unione di payload o archi.

## Tre similitudini lessicali esplicitamente rifiutate
- `compositore-giuseppe-tartini` **≠** `pers:giuseppe-mazzini`: persone differenti, nessuna identità comune.
- `compositore-johann-christian-bach` **≠** `pers:bach` (Johann Sebastian Bach): figlio e padre, distinti. Il possibile rapporto familiare è semmai un arco documentato, **non** una fusione di identità.
- `persona-giulio-rospigliosi` **≠** `pers:clemente-viii`: Rospigliosi fu papa Clemente **IX**, mentre Clemente VIII fu Ippolito Aldobrandini. Fonte primaria d'autorità: https://www.vatican.va/content/vatican/it/holy-father/clemente-ix.html e https://www.vatican.va/content/vatican/it/holy-father/clemente-viii.html

### Conteggi dopo la verifica
- **509** persone nella fonte, da preservare integralmente.
- **160** corrispondenze candidate totali con Atlantis (**155** per nome ancora da validare filologicamente; **5** per alias con evidenza d'autorità).
- **349** persone senza corrispondenza attestata in Atlantis finora: tutte da importare come entità nuove salvo ulteriori equivalenze documentabili.
- Nessuna persona eliminata; 297 record Atlantis di partenza restano tutelati.

## Vincoli e prossimi passaggi
1. Audit con fonti storiche delle 155 corrispondenze nominali, con separazione fra `identity_confirmed`, `requires_disambiguation` e `distinct`. Non considerare la mera uguaglianza del nome una verifica storica indipendente.
2. Analisi ulteriore dei 349 non abbinati con forme d'autorità, soprannomi, nomi di famiglia e nomi religiosi/di regno. **Non fondere** da sole varianti ad alta similarità.
3. Verifica dei 4 candidati concettuali (dramma giocoso, opera buffa, opera seria, quartetto d'archi); mantenere le 7 omonimie capitolo/epoca in `keep_distinct` e **nessun capitolo mai come ponte traversabile**.
4. Confronto di **3.856** relazioni dei due archivi Atlante (2.437 + 1.389 + 30) con le **1.718** Atlantis, senza sommare ciecamente. Preservare testi `forward/reverse`, eccezioni linguistiche `relationSentence`, note, fonti, revisioni e spiegazioni mouse-over/tap.
5. Test sentinella: Mozart→Leopold sì; ramificazioni non pertinenti via Leopold, periodi, generi, capitoli no. Nessuna promozione di una formula linguistica automatica a prova storica.

**File creato:** `CONFRONTO_IDENTITA_GRAFO_FASE2C_2026-11-08.json`. **Dati di produzione invariati.**
