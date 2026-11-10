# Musurgia Atlantis — Lotto 21: audit globale delle ripetizioni dei numeri Flaminio

**Data:** 10 novembre 2026 · **Repository:** `SkenderAle/github-pages` · **Branch:** `main` · **Stato:** audit e dati integrali, **nessuna modifica al grafo pubblico**.

## Obiettivo
Riesaminare i 583 gruppi con numero di catalogo condiviso annunciati nel Lotto 20, senza confondere condivisione della chiave, identità dell'opera, raccolta, singolo numero, redazione o descrizione editoriale. Nessuna generazione automatica di opere o relazioni.

## Verifica riproducibile della sorgente
È stato riletto direttamente `compositori_flaminio.xlsx`, Sheet1 A:H (**52.150 righe dati**, **149 denominazioni d'autore**). Per tutti i record con autore e numero non vuoti è stata costruita una chiave `NFKC + casefold + trim e collasso degli spazi` sui campi **compositore + numero**. Il materiale originale, mai modificato, è conservato a livello di riga insieme a titolo, rubrica, anno, Parte, Dettagli e URL.

**Rettifica del Lotto 20:** il nuovo procedimento uniforme restituisce **49.176** chiavi autore/numero distinte, **584** gruppi ripetuti e **1.278** righe coinvolte, rispetto ai precedenti **583 / 1.272**. La differenza è registrata come rettifica di metodo; non affermiamo una causa unica delle sei righe di scarto senza riprodurre anche l'algoritmo originario. L'indice del Lotto20 resta documento storico, ma per questo controllo il riferimento operativo è il Lotto21.

### Triage di TUTTI i 584 gruppi
| Stato strutturale provvisorio | Gruppi | Priorità |
|---|---:|---|
| Numero segnaposto, non identificante (s. n., s.n., -) | 3 | P0 |
| Numero breve non qualificato ripetuto in sezioni differenti | 419 | P0 |
| Altri numeri riutilizzati fra rubriche differenti | 26 | P0 |
| Numero condiviso e titoli diversi nella stessa rubrica | 112 | P1 |
| Stesso titolo, più schede non identiche | 22 | P1 |
| Stesso titolo, indicazioni Parte differenti | 2 | P1 |
| **Totale** | **584** | **448 P0 / 136 P1** |

**560 gruppi** contengono titoli diversi; **24** un solo titolo normalizzato. **448** gruppi contengono rubriche differenti; **zero** gruppi presentano righe identiche in tutti gli otto campi, secondo il confronto letterale della sorgente. I gruppi con numeri segnaposto riuniscono **79** righe: questi non sono vere chiavi catalografiche. Se li si esclude, rimangono **581** gruppi ripetuti per numeri informativi, **1.199** righe; anche questi non sono necessariamente opere duplicate.

**Significato delle priorità:** P0 = *pericolo di fusione indebita* (non priorità storiografica del compositore); P1 = *possibile unità compositiva o relazione fra record da ricostruire*. Tutti i 584 sono **classificazioni strutturali automatiche**, non 584 convalide musicologiche.

## Casi specifici riscontrati
1. **Castelnuovo-Tedesco, «s. n.»**: 63 composizioni/schede con titoli e rubriche eterogenei. **Casella «s.n.» 8**, **Sgambati «-» 8**. Insieme 79 righe che non devono condividere un unico `work_id`.
2. **Monteverdi, numeri 1–9**: vari brani con lo stesso numero in rubriche come contrafacta spirituali e musica profana; numero non globalmente univoco. Le eventuali relazioni di contrafactum vanno documentate, non inferite dalla cifra.
3. **J. S. Bach, numero 135**, righe **2617** e **2861**: una *Burlesca in la minore* fra le opere dubbie e la cantata *Ach Herr, mich armer Sünder*. La cifra senza namespace del catalogo non prova identità.
4. **Chopin, op. 15**, righe **12650–12652**: le tre schede «Tre notturni» corrispondono ai numeri individuali 2, 3, 1. Il link `Chopin-Notturno55.html` punta in realtà al **Notturno op. 15 n. 1** (non all'op. 55): la pagina indica anche BI 55. Le altre pagine Flaminio confermano op. 15 nn. 2 e 3. Regola: **una raccolta/opera d'opus → tre composizioni individuali** con riferimento al numero del pezzo, senza inventare tre opere op. 15 autonome non numerate.
5. **Beethoven, Fidelio op. 72**, righe **4915–4916**: titolo uguale, ma una scheda è dedicata all'ouverture e l'altra alla *opera*. Non creare due opere omonime; distinguere la relazione di documentazione e l'eventuale `parte_di`.
6. **Čajkovskij, numero «29»**, righe **9502 / 9504**: confronto esterno conferma che la Terza sinfonia è **op. 29**, mentre la Quinta è **TH 29**, **op. 64**. Sono **due opere differenti**; senza il **namespace** della sigla la chiave 29 produce una falsa identità.
7. **Liszt, numero 242**, righe **25382, 25391, 25392**: titoli differenti nella medesima rubrica; non equipararli senza controllare numerazioni editoriali e stadi dell'elaborazione.

### Fonti dei controlli indipendenti (solo casi 4 e 6)
- https://www.flaminioonline.it/Guide/Chopin/Chopin-Notturno55.html
- https://www.flaminioonline.it/Guide/Chopin/Chopin-Notturno15-2.html
- https://www.flaminioonline.it/Guide/Chopin/Chopin-Notturno15-3.html
- https://en.tchaikovsky-research.net/pages/Symphonies
- https://en.tchaikovsky-research.net/pages/Symphony_No._5

## Materiali pubblicati su GitHub
1. `ATLANTIS_FLAMINIO_LOTTO21_INDICE_584_GRUPPI_2026-11-10.csv` — **584 schede** con classificazione, priorità, rubriche, titoli e numeri di riga, commit `621efb5c0e6d2c644dd1e627f48e46d542d74972`.
2. `ATLANTIS_FLAMINIO_LOTTO21_EVIDENZE_1278_RIGHE_2026-11-10.csv` — tutte le **1.278 righe** di evidenza originali con anno, titolo, Parte, Dettagli e URL, commit `75b60aa352dea8222014104a24d8e7721a7270cb`.
3. `STAGING_FLAMINIO_LOTTO21_IDENTITA_584_GRUPPI_2026-11-10.json` — **584 gruppi e 1.278 record** annidati, gate di creazione/fusione chiusi, commit `15ec44d77c51606181cec8967686e42b80111964`.
4. `RISCONTRI_FILOL_CATALOGRAFICI_LOTTO21_2026-11-10.json` — casi specifici Chopin/Čajkovskij/Beethoven, commit `8bd07bb17981e856c5d0382068719fe61fc36015`.

## Correzione dello schema d'identità
Il futuro identificatore di una composizione non deve derivare dalla sola concatenazione `compositore + numero`. Deve distinguere almeno:

`composer_identity` · `catalogue_namespace` (BWV, KV, Hob, WoO, Op., TH, ecc.) · `catalogue_value` · `work_or_collection` · `item_number` · `version_id` · `part_of` · `source_provenance`.

Un campo vuoto o segnaposto **non è** un namespace. Conservare i numeri letterali Flaminio anche quando si aggiungono qualificazioni da cataloghi esterni, e tracciare ogni risoluzione con fonte e stato.

## Prossima ripresa
Prima di altre 500 righe casuali, esaminare per gruppi **i 136 P1** (112 rubrica comune/titoli diversi, 22 stesso titolo/schede, 2 parti esplicite), a blocchi sostanziosi; definire le relazioni tra opere, parti e versioni. I **448 P0** restano esplicitamente bloccati fino alla distinzione di namespace, rubrica e documenti. Solo dopo estendere i controlli di identità agli altri record del catalogo e agli ID Atlantis.

**Nessuna modifica ai grafi di produzione, alla GUI, a `atlante3d/` o ai 210 lotti storici**. Audit storico persona↔persona Checkpoint24 rimane separato a **74/233** archi.
