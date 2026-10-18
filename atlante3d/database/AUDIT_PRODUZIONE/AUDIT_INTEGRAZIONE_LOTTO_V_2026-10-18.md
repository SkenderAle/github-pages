# MUSURGIA MUNDI — Audit integrato V · attraversamenti verso le singole opere
**Data:** 18 ottobre 2026 · **Branch:** `main` · **Base:** `89d24094498d747ebd297d906012e293e4a4d774`

## Scopo e ricognizione
Il Lotto V affronta il terzo audit globale: ridurre la distanza fra costellazione dei musicisti e audioteche. Sono stati controllati i repertori strutturati di `concerti/`, `musica-da-camera/`, `dalla-sinfonia-alla-rapsodia/` e `parola-e-canto/` contro `indice-autori.json`. Nei cataloghi principali non emergono nuovi compositori da inserire automaticamente con certezza: le residue apparenti assenze sono abbreviazioni, cognomi condivisi e coppie di autori. **Non creare duplicati o attribuzioni su stringhe incomplete.**

## Cambiamenti implementati
1. **Da audioteca a grafo.** In `shared/musurgia-bridge-v1.js` aggiunto un rimando accessibile, discreto e senza autoplay vicino all'autore di una scheda `article.work`, sia per le opere HTML sia per quelle generate dai filtri. Le quattro pagine interessate sono Concerti, Musica da camera, Dalla sinfonia alla rapsodia e La parola e il canto.
2. **Riconoscimento conservativo.** Si usa soltanto il nome esattamente corrispondente a una voce o alias dell'indice e univocamente risolto. Non vengono sciolte per congettura le abbreviazioni o le attribuzioni composte. Non si altera il nome dell'opera, il lettore o il catalogo.
3. **Cataloghi dinamici.** Un osservatore dei soli elementi del catalogo rinnova i rimandi quando i filtri ricostruiscono le schede. La marcatura dei nodi evita doppie inserzioni. Nessun video viene avviato automaticamente.
4. **Dal grafo all'opera.** `collegamenti-sito.json` ora antepone **56 link specifici** a opere dell'audioteca sinfonica per **37 autori** univocamente risolti. Sono stati verificati in JSON i **103 ID di opere** del catalogo, compresa la loro unicità; gli URL usano proprio tali ID, riprodotti come `article.work[id]` dal codice della pagina. I precedenti rimandi sono conservati nell'inventario, anche se il pannello mostra i primi cinque.
5. **Cache.** Aggiornata la versione dello script condiviso per facilitare l'attivazione del ponte in tutte le pagine che caricano `atlas-anchor-arrival-v1.js`.

## Ambiguità lasciate volontariamente aperte
- Haydn, Mozart, Schumann, Saint-Saëns e Mahler quando compaiono solo come cognome;
- cataloghi con due autori, per esempio Musorgskij/Rimskij-Korsakov e Musorgskij/Ravel;
- alcune abbreviazioni e varianti documentarie da disambiguare tramite specifici repertori e numeri d'opera.

## Controlli strutturali
- Indice nominativo presente e consultato con chiave normalizzata; chiavi assegnate a più ID escluse.
- 103 ID d'opera verificati unici e non vuoti nel catalogo sinfonico.
- Collegamenti aggiunti solo a opere realmente presenti e con URL nell'Atlante; le schede del grafo usano il parametro pubblico `?n=<id>`.
- Codice dello script verificato sintatticamente; cambiamenti circoscritti al ponte e all'inventario editoriale.
- Numeri del database non modificati: **382 compositori, 785 nodi, 1081 archi generali, 1319 relazioni documentate**.

## Da proseguire
- Collaudo visuale desktop/Android di collegamenti, filtri, focus e tasto Indietro.
- Per Music da camera e La parola e il canto: introdurre ID stabili di opera o filtri profondi prima di costruire collegamenti dal grafo a una singola scheda; evitare ancore inventate.
- Ampliare l'audit del corpo narrativo, delle persone oltre i compositori e dei lemmi non biografici.
- Continuare la verifica filologica e il censimento di voci dirette Grove (accesso variabile), Treccani e Garzantina (riferimento bibliografico, non voci digitali inventate).

**Principio:** la musica non sta in fila; il grafo collega, il sito racconta e le fonti permettono di controllare.
