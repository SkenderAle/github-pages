# Checkpoint 25 — La ricerca «Concerto» deve espandere la tassonomia e le opere reali

**Data:** 10 novembre 2026 · **Branch:** main · **Ambito modificato:** solo file di anteprima e overlay di `audit-integrazione/`.

## Problema riprodotto tramite codice e dati
La preview `PREVIEW_RADICATA_CHECKPOINT06.html` mostrava per una ricerca sul genere `legacy:gf:genere-concerto` le relazioni legacy compositore→genere; **non iterava affatto i legami dei sotto-generi** espressi nei record `taxonomy.parent` dei nodi Mundi. Il modulo Flaminio mostrava opere catalogate, ma soltanto secondo proprie classificazioni ed espansioni, non la gerarchia specifica dei concerti. Era quindi possibile vedere molti compositori ma nessuna articolazione strutturata Concerto→forme→opere. Il corpus Atlantis già contiene invece cinque opere/raccolte concertistiche specifiche con relazioni di autore.

## Intervento materializzato
- Nuovo `OVERLAY_FAMIGLIA_CONCERTO_CHECKPOINT25_2026-11-10.json` (commit `ce42435f1201009e08a05b95fec5f393fd23e2ae`): **2** sotto-categorie editoriali provvisorie «Concerto solistico» e «Concerto di gruppo», **9** archi gerarchici e **7** classificazioni riferite a **5** opere/raccolte già documentate. Terminologia Mundi originale preservata: «Concerto grosso barocco», «Concerto strumentale romantico», tipologie per arpa/chitarra/marimba, «Concertino strumentale novecentesco».
- `PREVIEW_RADICATA_CHECKPOINT06.html` aggiornata, ultimo commit `76f568b94230f42a9c97944e60da1e6e92e0ffeb`:
   1. caricamento dell'overlay Concerto;
   2. ricerca di **Concerto**: figli tassonomici al I livello, opere attestate nella rispettiva categoria al II livello, autori al III quando profondità e visibilità lo consentono; nodo padre visibile per sottocategoria radicata senza aprire tutte le categorie sorelle;
   3. ricerca di **Corelli**, **Vivaldi**, **Bach** o **Mendelssohn**: le rispettive opere concertistiche già attestate vengono mostrate come **figlie dirette del compositore** anche quando il motore generale non le presenta; la forma viene associata alla singola opera;
   4. opere e categorie condivise non fungono da ponte per importare lavori/compositori altrui in una ricerca radicata su persona;
   5. il catalogo mostra soltanto opere documentate: NON è stata inventata una discografia completa per gli autori.

### Riscontro sul patrimonio esistente
| Opera Atlantis | Autore storico | Classificazione in preview |
|---|---|---|
| `opera:corelli-concerti-grossi-op6-1714` | Corelli | Concerto grosso (raccolta dei 12 op. 6) |
| `opera:vivaldi-rv522-op3-8` | Vivaldi | Concerto di gruppo (due violini solisti); concerto |
| `opera:bach-sei-concerti-brandeburghesi-1721` | J. S. Bach | Concerto (raccolta di sei, organici differenziati: non classificare in blocco come un unico concerto grosso) |
| `opera:mendelssohn-concerto-violino-op64` | Mendelssohn | Concerto solistico |
| `opera:bach-bwv593` | Bach, trascrizione di RV 522 | Concerto solistico in senso organologico dell'arrangiamento, classificazione editoriale da affinare: **non** attribuire a Bach la composizione originale di Vivaldi |

**Distinzione fondamentale:** la tassonomia percorre una gerarchia di *classi*, la mappa personale percorre *opere con autore verificato*. Un record compositore→genere senza documenti d'opera non autorizza la generazione di un titolo. Restano da importare molte opere specifiche da cataloghi documentati e da classificare in più generi quando giustificato.

## Test eseguiti e limiti
- Overlay letto dalla sorgente GitHub: 2 nodi editoriali, 16 archi (9 gerarchia + 7 classificazione); estremi corrispondenti al repertorio federato/legacy.
- Preview aggiornata con caricamento e inizializzazione dell'overlay; applicazione alle due vie di esplorazione (radice genere e radice persona).
- Blocco JavaScript inline **compilato con successo** dopo aggiornamento (controllo statico; 1 blocco script).
- **NON è stato eseguito un collaudo in un browser reale** né la simulazione 3D interattiva su telefono. Il risultato va verificato sul sito, per profondità genere/opera/persona almeno 3 e categorie visibili «Persone», «Opere» e «Generi e forme». Nessuna modifica a `musurgia-atlantis/grafo.json`, a `atlante3d/` o alle pagine Mundi pubbliche.

## Prossimo lavoro generale
1. Estendere questa gerarchia **a tutto il vocabolario** generi e forme, non limitarsi al concerto e neppure a Mozart.
2. Costruire un importatore incrementale compositore→opera→forma/tassonomia con provenance per opera da Flaminio e altri cataloghi; rilevare duplicati con il database Atlantis esistente.
3. Applicare l'espansione orientata alla radice: una tassonomia selezionata può mostrare discendenti documentati; una persona selezionata può mostrare soltanto le proprie opere e forme, mai autori terzi per transizione attraverso classe o epoca.
4. Verificare i dati quantitativi e i filtri UI per non appiattire la rete al genere superiore.
5. Non mescolare questo lavoro con il Checkpoint24 storico-filologico (74/233 archi esaminati; prossimo lotto 50). 210 lotti storici preservati.
