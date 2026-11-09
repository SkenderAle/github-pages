# Musurgia Atlantis — Audit di riconciliazione, Checkpoint 03
**Data:** 9 novembre 2026 · **Ambito:** sola cartella `audit-integrazione/` su `main`.

## Acquisizione effettiva dei JSON completi
Il precedente blocco tecnico è stato superato: `fetch_file` sul contenuto dei tre grandi JSON restituiva stringhe vuote, ma il recupero diretto **dei blob Git mediante gli SHA effettivi** ha permesso la lettura integrale e il parsing in V8 dei tre file monolitici. Nessun dato pubblico modificato.

| Archivio | Nodi | Relazioni |
|---|---:|---:|
| `atlante3d/database/grafo.json` | 869 | 2.437 |
| `atlante3d/database/relazioni.json` | — | 1.389 |
| `atlante3d/database/integrazione-operetta-musical.json` | 15 dichiarati | 30 |
| `musurgia-atlantis/grafo.json` | 754 | 1.718 |

**Controlli V8 effettivamente eseguiti: 22/22 PASS.** Nel registro JSON compaiono tutte le asserzioni, gli SHA degli input e il dettaglio delle 20 sovrapposizioni.

### Integrità strutturale verificata
- **Zero archi orfani** nei quattro contenitori fonte/Atlantis; identificativi dei nodi unici nei due grafi principali.
- Tutti gli **11 file di staging** (5 base, 5 specialistici, 1 estensione) confrontati *record per record e al medesimo indice* con i JSON originari: **2.437 + 1.389 + 30 = 3.856/3.856 payload integrali identici**, compresi `forward/reverse`, note e fonti ove presenti. La conversione esatta del renderer base è un problema distinto già affrontato nell'adapter e da collaudare in UI.
- Le **509 persone** legacy si partizionano esattamente in **162 equivalenze d'identità documentate** con target Atlantis reale, univoco e presente, più **347 nuovi candidati** senza collisioni di ID proposti. Il controllo è sui mapping, **non** sull'attendibilità di tutte le biografie.
- I **quattro** ID di crosswalk concettuali esistono effettivamente in entrambe le basi; **nessuna identità semantica/fusione viene autorizzata** per questo solo motivo. `quartetto d'archi` conserva la polisemia già documentata.

### Confronto reale delle coppie di estremi
Tra le 3.856 relazioni legacy e i 1.718 archi Atlantis sono emerse **20 relazioni specialistiche** su **16 coppie** di estremi comuni; **zero sovrapposizioni per coppia** dagli archi base o di estensione con questo mapping conservativo. Sono *collisioni di estremi*, **non** doppioni semantici convalidati: le 20 schede analitiche del registro richiedono verifica distinta di predicato, verso, cronologia e fonti. Evitare deduplicazione automatica.

### Sentinella Mozart–Leopold
Nel **grafo Atlantis di produzione** Mozart ha **17 archi diretti**, precisamente **8** indipendentemente verificati e **9** editoriali ai capitoli (esclusi dalla ricerca storico-musicale). In `relazioni.json` Leopold possiede **3** rapporti specialistici, di cui uno maestro–allievo con Wolfgang; gli altri due riguardano la cappella salisburghese e il trattato del 1756 e NON si trasmettono automaticamente alla radice Mozart. **Leopold non è ancora un nodo pubblico Atlantis.**

La coppia documentata `E0732` (Mozart → *Le nozze di Figaro*) / `E0874` (Da Ponte → *Le nozze di Figaro*) è presente e verificata nel JSON Atlantis, esempio di cammino di II livello dotato di pertinenza specifica. Questo è un test di presenza dati, **non l'esecuzione del motore di navigazione I–V**.

## Limiti, gate e prossime verifiche
1. **Non eseguiti:** runtime reale `prepare`/`byId`, pivot, profondità radicata I–V per tipo, Node `--live`, UI browser hover e Android tap. Non dichiararli PASS.
2. Per le **20** sovrapposizioni, iniziare validazione per predicato e confronto delle fonti senza sopprimere relazioni parallele lecite; poi procedere per adiacenze di alta centralità.
3. Continuare collaudi reversibili su staging, distinguendo persone, opere/versioni, epoche, generi, luoghi, scuole e risorse editoriali. Nessuna transitività generica attraverso appartenenze o categorie.
4. Salvaguardare 210 lotti storico-filologici, archi e annotazioni originarie, 509 persone, media e 537 URL con ancora; nessun merge pubblico prima della certificazione.

**Conclusione:** raggiunta per la prima volta la verifica diretta e integrale fra tre JSON pubblici e gli 11 registri sorgente di staging. **Integrità strutturale ≠ certificazione storica ≠ collaudo della UI.**
