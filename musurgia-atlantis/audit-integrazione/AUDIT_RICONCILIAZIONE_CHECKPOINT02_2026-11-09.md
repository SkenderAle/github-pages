# Musurgia Atlantis — Checkpoint di riconciliazione 02
**9 novembre 2026 · branch main · soli audit e test, niente merge pubblico**

## 1. Ambito: tutti i 3.856 archi legacy realmente consultati nello staging
Sono stati letti e analizzati **tutti i file JSON staged** delle relazioni originali, non soltanto riepiloghi:
- **2.437 archi base**, 5 parti da 500/500/500/500/437; `CHECKPOINT_RICONCILIAZIONE_02_ARCHI_BASE_2026-11-09.json`.
- **1.389 archi specialistici**, 5 parti da 300/300/300/300/189; `CHECKPOINT_RICONCILIAZIONE_02_ARCHI_SPECIALISTICI_2026-11-09.json`.
- **30 archi di estensione operetta–musical**, dal JSON originale `STAGING_ARCHI_ESTENSIONE_FASE2K_30_2026-11-08.json`.
- **Totale 3.856** archi di staging, con ID staging univoci in ciascuna partizione, range di indici continui, payload conservato, e tutti i `source`/`target` originali presenti nei registri di **509 persone** e **374 altri nodi sorgente** (375 varianti di payload).

I test di continuità, integrità e preservazione dei dati sono stati **eseguiti in V8** sulle parti JSON effettivamente lette dal repository, e gli esiti registrati. **Non certificano il contenuto storico di ogni singola relazione**.

## 2. Quattro falsi allarmi di risoluzione d'identità
Il primo controllo dei target di staging aveva cercato solo tra le **347 nuove persone proposte**, le corrispondenze esplicite nel registro iniziale e i **374** altri nodi: mancava una classe di eccezioni già documentate nei registri successivi.

| Stage ID | Sorgente legacy | Motivazione |
|---|---|---|
| `pers:moliere` | `persona-moliere` | `new_authority_equivalences` — equivalenza nominale documentata da BnF e Comédie-Française |
| `pers:ferdinand-david` | `compositore-ferdinand-david` | `new_authority_equivalences` — Deutsche Biographie e Weber-Gesamtausgabe |
| `pers:diaghilev` | `persona-sergej-diaghilev` | `previous_alias_ids_excluded` |
| `pers:bronislava-nizinskaja` | `persona-bronislava-nijinska` | `previous_alias_ids_excluded` |

Tutte e quattro le sorgenti **esistono nei 509 record originali**. Due hanno equivalenze documentate specificamente e due sono escluse dalle 347 nuove identità perché già classificate tra le equivalenze pregresse. I quattro mancati riscontri del *lookup iniziale* sono dunque **spiegati dalla struttura delle tabelle**, non sono quattro persone sicuramente mancanti in Atlantis.

**Gate ancora aperto:** non è stata verificata l'esistenza effettiva dei quattro ID nella versione pubblica di `musurgia-atlantis/grafo.json`; il file ha dimensioni superiori ai limiti di lettura integrale del connettore. Non considerare risolto il controllo dell'identità nel live graph.

## 3. Collisione non-personale da conservare
Il nodo legacy `genere-musical` è presente in **due varianti sorgente** da:
- `atlante3d/database/grafo.json`;
- `atlante3d/database/integrazione-operetta-musical.json`.

Sono preservate entrambe in `STAGING_NODI_NON_PERSONE_FASE2K_374_2026-11-08.json`. Collidono per ID ma **non vanno accorpate perdendo uno dei due payload**, né trasformate in un collegamento storico transitivo indiscriminato.

## 4. Prova concreta di radice: Mozart
Ho caricato tutti i **1.389** archi specialistici e ho calcolato la rete di radice `pers:mozart`:
- **30 archi specialistici incidenti direttamente**, riferiti a **27 ID vicini distinti**;
- se da ciascuno dei vicini si espandono automaticamente tutte le relazioni, si incontrano **249 record specialistici** incidenti ai vicini, cioè **219 record oltre i 30 iniziali**, su **148 ID estremità complessivi**;
- dei **3 archi specialistici di Leopold Mozart**, soltanto il predicato sorgente `form-leopold-wolfgang` è direttamente pertinente a Wolfgang; il rapporto con la cappella di corte di Salisburgo e il trattato violinistico del 1756 **non diventano collegamenti della ricerca su Wolfgang per sola transitività**;
- **padre–figlio** è un predicato aggiuntivo distinto proposto nello staging; non va falsamente descritto come se fosse già un arco originale fra i 1.389.

Il dato **249** non rappresenta il numero di archi storici da visualizzare a livello II: è il risultato *diagnostico dell'espansione ingenua*, che conferma la necessità del filtro di pertinenza alla radice.

Registro eseguibile dei risultati: `CHECKPOINT_RICONCILIAZIONE_02_RADICE_MOZART_2026-11-09.json`.

## 5. Test ripetibile
Pubblicato `TEST_RICONCILIAZIONE_02_STAGING.cjs`, script Node di **sola lettura**, per controllare archi, continuità delle parti, ID, due alias esclusi, collisione `genere-musical` e pivot Mozart.

Da radice del repository:

```bash
node musurgia-atlantis/audit-integrazione/TEST_RICONCILIAZIONE_02_STAGING.cjs
```

I corrispondenti calcoli sono stati effettivamente eseguiti sui dati in V8 in questa ripresa; **l'esecuzione del runner Node pubblicato è ancora da effettuare** e non va dichiarata superata.

## 6. Gate ancora necessari
- Accedere ai grafi pubblici completi `atlante3d/database/grafo.json`, `atlante3d/database/relazioni.json` e `musurgia-atlantis/grafo.json` per certificare ID target e confronto tra gli archi, non solo registri staged.
- Eseguire i veri percorsi `prepare`, `byId`, filtro di radice I–V e non soltanto una BFS diagnostica.
- Collaudare hover desktop, tap Android, spiegazioni avanti/indietro, fonti, ancore e tracce multimediali.
- Non fondere i grafi pubblici prima della certificazione. Conservare i 210 lotti di audit storico-filologico, le 509 persone sorgente, tutte le 3.856 relazioni e le risorse editoriali.

**Prossima ripresa:** confronto dei tre JSON integrali tramite metodo capace di trasportare i grandi blob e collaudo runtime isolato, senza creare altri lotti di semplice catalogazione.
