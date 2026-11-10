# Musurgia Atlantis — Lotto 20: 500 voci, copertura di tutti gli autori e indice d'identità sull'intero Flaminio

**Data:** 10 novembre 2026 · **Branch:** `main` · **Ambito:** `audit-integrazione/` soltanto; nessuna modifica a `musurgia-atlantis/grafo.json` o all'interfaccia.

## Fonte e campionamento
Fonte di lavoro: `compositori_flaminio.xlsx`, Sheet1, colonne A–H. Letto l'intero contenuto di **52.150 righe**, con **149 etichette compositore** e metadati di catalogo, titolo, parte, data, dettagli e collegamenti Flaminio. Recuperate le righe dei Lotti15–19 (**2.023** righe uniche), tutte escluse dalla nuova selezione.

**Nuovo lotto:** **500** righe distinte campionate per turnazione tra **tutti i 149 compositori**, scegliendo posizioni distribuite nell'insieme di righe ancora non esaminate di ciascun autore. Totale Lotti15–20 = **2.523 righe sorgente distinte**, non 2.523 opere autonome certificate.

## Conteggi Lotto20
- **500** nuove righe, **149** etichette compositore.
- **88** titoli con genere/forma candidato esplicito, **412** senza lemma ricavabile con sicurezza dal titolo; non assegnare automaticamente il lemma della rubrica Flaminio.
- **92** spiegazioni Flaminio collegate direttamente.
- **32** senza numero di catalogo.
- **0** casi di ripetizione esatta autore+numero+titolo nel lotto; **5** con medesimo autore+numero ma titoli differenti in altre righe dell'Excel; **79** con titolo identico e altro numero nel catalogo. I due ultimi conteggi sono segnali di confronto, non diagnosi di duplicato.
- **24** righe hanno almeno un flag per attribuzione, stato, versione, organico o parte.
- Principali lemmi candidati: Sonata 29, Concerto 12, Sinfonia 11, Quartetto 6, Ouverture 4, Trio 3, Quintetto 3, Variazione 3, Preludio 3, Fuga 3, Scherzo 3, Mazurca 2, Rondò 2. Restano invariati i nomi originali.

## NUOVO indice dell'intero catalogo
In aggiunta al campione, tutte le 52.150 righe sono state raggruppate per chiavi normalizzate (autore+numero, autore+numero+titolo, autore+titolo).
- **49.173** chiavi non vuote autore+numero.
- **583** gruppi autore+numero con **almeno due righe**, che coinvolgono **1.272** righe.
- **25** gruppi autore+numero+titolo ripetuti, che coinvolgono **56** righe.
- **3.580** gruppi autore+titolo con ripetizioni (il numero di righe interessate non è qui cumulato).

Questi gruppi NON dimostrano di per sé identità musicali: molti numeri editoriali sono omonimi o relativi a cataloghi diversi, e un titolo generico può identificare opere distinte. In particolare:
- `s. n.` (senza numero) **non è un vero identificativo catalografico univoco**: non fondere automaticamente per tale stringa (es. Mario Castelnuovo-Tedesco).
- Gli indici numerici brevi possono riferirsi a cataloghi o sezioni differenti: per Bach, la rubrica e il repertorio sono necessari prima di associare il numero `40` o `175`.
- `Erwartung` di Schönberg e altri titoli ricorrenti richiedono controllo di versione/attribuzione, non una fusione dalla sola stringa.
- Le voci di Vivaldi classificate sotto uguali numeri richiedono controllo della sigla del catalogo (RV, op., ecc.) e della sezione d'origine.

L'indice globalizzato è pubblicato come **riepilogo di gruppi e identificativi di riga campionata**, non come tabella di 52 mila identità storiche certificate.

## Confronto Atlantis: primo candidato opera coerente con autore e titolo
Letto il blob attuale dello snapshot `musurgia-atlantis/grafo.json`, SHA `4863b3fe263154387de3388c0b813b5f94546f12` (**754 nodi / 1.718 archi**). Nei 149 autori campionati, **67** hanno un nodo persona candidato coerente con il nome (matching non ancora certificato filologicamente). Richiesto poi un **arco autore↔opera già documentato in Atlantis** e una coincidenza sostanziale di titolo/catalogo.

**Un candidato affidabile per revisione manuale è stato individuato nel lotto:**
- **Olivier Messiaen — `Quatuor pour la fin du temps`**, sorgente Flaminio **riga 32642**, candidato Atlantis `opera:messiaen-quatuor-fin-du-temps-1940`, autore collegato `pers:messiaen`. Il titolo e l'arco interno coincidono; l'identità resta **candidata**, non fusa, per controllo di versione/fonti.

Per le altre **499** righe, la ricerca conservativa **non** fornisce un match abbastanza forte; questo **non** significa che tutte siano opere nuove o non ancora presenti in Musurgia, né autorizza la creazione di 499 nuovi nodi.

## Output integrale registrato su GitHub
1. `ATLANTIS_FLAMINIO_LOTTO20_500_VOCI_CON_INDICE_2026-11-10.csv`: tutti i 500 record con originali, fonti, genere proposto, flag e conteggio/riferimenti alle altre righe candidate.
2. `STAGING_FLAMINIO_LOTTO20_500_VOCI_CON_ATLANTIS_2026-11-10.json`: 500 record, 149 mappature di autore, ID Atlantis candidato, eventuale opera candidato, source row ID, status e gate.
3. `INDICE_FLAMINIO_LOTTO20_TUTTO_CATALOGO_2026-11-10.json`: riepilogo delle collisioni sull'intero catalogo e selezione di 500 righe, per prevenire ripetizioni future.
4. `AUDIT_FLAMINIO_LOTTO20_500_VOCI_2026-11-10.md`: presente rapporto.

Lavorazione locale riproducibile nel file `build_lotto20.py` conservato nel runtime della conversazione.

## Prossime verifiche
1. Raffinare la *chiave di opera* con sistema di catalogazione (BWV, RV, K, Hob., ecc.), autore identificato, titolo proprio, contesto di intestazione, e stato parte/versione.
2. Dare priorità ai **583 gruppi di numero ripetuto**, specie dove il numero è generico/senza sigla; non fonderli indiscriminatamente.
3. Allargare campioni di altri 500 o più, senza ripetizioni; farli confluire in un registro di copertura progressivo.
4. Esaminare i link Flaminio individuali e gli archi documentati per promuovere **opera→genere** soltanto con fonti.
5. Testare in preview la pertinenza radicata: genere condiviso non è ponte automatico fra compositori.
6. Separatamente Checkpoint24 storico persona↔persona è ancora a **74/233 archi**, prossimo lotto autonomo da 50.

**Nessuna modifica di produzione** ai grafi, alla GUI, ai capitoli, o ai 210 lotti storico-filologici già lavorati.
