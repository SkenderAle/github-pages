# Checkpoint 12 — Lacuna gerarchica fra opere, generi e forme
**Data:** 9 novembre 2026  
**Stato:** audit dei dati, senza merge e senza modifica della UI pubblica.

## Decisioni dell'utente da preservare
- Nel selettore iniziale: **Persone, Opere, Reti culturali, Generi e forme**, in quest'ordine, attive; tutte le altre categorie inizialmente spente.
- **Generi e forme** è categoria autonoma (concerto, sinfonia, messa, sonata, madrigale, opera ecc.), non sinonimo di tutti i nodi di senso.
- Mozart è un **caso di regressione**, non l'ambito della migrazione: applicazione all'intero patrimonio attestato, senza aggiunte compositore per compositore.
- Non anticipare l'audit di completezza dei generi mancanti (es. Mozart–Sonata): distinguere lacuna sorgente da mancata resa di un dato presente.
- Distinguere **opera/composizione singola** da **Opera/genere**, da **Dramma giocoso/sottogenere** e da **capitolo editoriale**. I capitoli non compaiono mai come nodi attraversabili del grafo storico.
- Le relazioni di appartenenza tassonomica possono essere consultate in entrambi i sensi, ma **non** autorizzano a percorrere un genere come ponte indiscriminato fra autori.

## Verifica diretta effettuata sui file GitHub di main
Letto il file `GENERI_FORME_LEGACY_PREVIEW_CHECKPOINT11_2026-11-09.json` (50 nodi, 271 link compositore–genere, 93 compositori coinvolti). Sono presenti **16 record con `original_legacy_record.taxonomy.parent`**, tra cui:
- `opera-buffa` → `genere-opera`
- `opera-seria` → `genere-opera`
- `opera-semiseria` → `genere-opera`
- `dramma-giocoso` → `genere-opera`
- sottotipi di concerto → `genere-concerto`; sonata per viola → `genere-sonata`; suite orchestrale → `genere-suite`.

La gerarchia è **già nei metadati** delle entità originarie, ma il file overlay del Checkpoint 11 ha un elenco `links` dedicato agli archi compositore–genere, non un catalogo di archi fra sottogenere e genere. Quindi la mancata visualizzazione **Dramma giocoso ↔ Opera** è un difetto di proiezione della tassonomia, non prova che il patrimonio legacy ne sia privo.

Nel medesimo overlay, l'arco `legacy:gf:edge:1926` è `pers:mozart` → `legacy:gf:dramma-giocoso` e la sua nota cita esplicitamente `Il dissoluto punito ossia Don Giovanni (1787)`, dramma giocoso in due atti, con fonte Teatro alla Scala. Tale nota documenta il contenuto, ma **non costituisce ancora un arco strutturato** fra il nodo dell'opera singola e il nodo della forma. Non inventare un collegamento solo per inferenza sulla stringa: identificare e riscontrare l'ID della composizione in Atlantis e la relazione originaria, quindi aggiungere solo in staging una relazione tipizzata con fonte.

## Regola di rappresentazione
1. `Mozart — [compone] → Don Giovanni` (relazione su composizione specifica).
2. `Don Giovanni — [appartiene a] → Dramma giocoso` (attribuzione di forma, con fonte e contesto).
3. `Dramma giocoso — [sottogenere di] → Opera` (gerarchia presente nella tassonomia legacy, da rendere come relazione tipizzata e non causale).
4. `Opera — [risorsa editoriale] → capitolo` solo nella scheda/editoriale, mai come arco transitabile I–V.
5. Non convertire `Opera` in opera buffa, e non attribuire lo stesso sottogenere a tutte le composizioni mozartiane. Per *Le nozze di Figaro* conservare la pluralità delle denominazioni storiche con il contesto documentario.

## Prossima azione tecnica
- Estrarre e controllare **tutti** i parent tassonomici del legacy (non soltanto i 16 dell'overlay) e rilevare ID di parent non presenti, schede concettuali non visualizzabili e potenziali cicli.
- Riconciliare gli ID delle singole opere con quelli dei generi per ogni composizione già attestata; mantenere due registri distinti: relazioni esplicite e attribuzioni candidate da verificare.
- Costruire **overlay separato, additivo, reversibile** di gerarchie e opere–forme; le gerarchie si mostrano su selezione ma non servono da ponti di pertinenza radicata fra persone.
- Test su Don Giovanni, *Le nozze di Figaro*, *Così fan tutte*, *Il flauto magico*, altri compositori e generi; controllare tooltip bidirezionali, fonti, livello I–V e filtri.
- Solo dopo i test, proporre il rilascio. Nessuna modifica ora a `musurgia-atlantis/grafo.json`, `index.html`, agli archivi Mundi, ai media o ai 210 lotti.

**Limite dichiarato:** in questo checkpoint è stato ispezionato direttamente l'overlay del Checkpoint 11; non è stata ancora effettuata la ricostruzione completa degli archi singola opera–genere sui due grafi integrali né un collaudo browser/Android.
