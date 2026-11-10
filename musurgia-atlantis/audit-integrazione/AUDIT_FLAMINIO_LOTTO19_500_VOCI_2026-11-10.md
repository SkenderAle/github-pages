# Musurgia Atlantis — Lotto 19: 500 nuove voci e deduplicazione interna Flaminio

**Data:** 10 novembre 2026 · **Branch:** `main` · **Stato:** area `audit-integrazione/`, grafo pubblico non modificato.

## Fonte e campionamento
Riletto **integralmente** `compositori_flaminio.xlsx` per le 52.150 righe Sheet1 (A–H), con parser read-only dello XML incluso nel file .xlsx. Escluse tutte le **1.523** righe sorgente già registrate nei Lotti 15–18. Campionate **500 righe nuove** distribuite a intervalli regolari fra **50 autori** (10 voci per autore), con eliminazione di ripetizioni `numero catalogo + titolo` entro il lotto. Cumulato **2.023 righe distinte** sottoposte a primo triage. Questi numeri descrivono *righe catalografiche*, non opere individuali certificate.

## Indicatori del lotto
- 500 righe selezionate, 50 autori, **490** con numero catalografico.
- **102** denominazioni con un candidato di genere singolare dal **titolo individuale**, **398** senza classificazione sicura dal solo titolo. La rubrica collettiva non determina il genere dell'opera.
- **81** URL di scheda esplicativa Flaminio conservati.
- **30** righe con uno o più flag cautelari di parte, versione, attribuzione o ambiguità.
- Tra le forme candidate: Sonata (33), Concerto (24), Sinfonia (9), Messa (8), Quartetto (7), Salmo (4), Cantata (2), Quintetto (3), Trio (2), Scherzo (2), *Sinfonia concertante* (1), e altre; nessun sottotipo viene schiacciato sulla famiglia più generale senza controllo.

## Nuovo controllo: possibili sovrapposizioni sull'intero catalogo Flaminio
Per ciascuna delle 500 voci è stata interrogata **l'intera fonte Excel**, non soltanto il campione:
1. **1** voce ha almeno un'altra riga con *stesso compositore + stesso numero di catalogo + stesso titolo*.
2. **19** voci hanno almeno una riga con *stesso compositore + stesso numero di catalogo + titolo diverso*.
3. **124** voci hanno lo stesso titolo in altre righe dello stesso compositore senza coincidenza completa di titolo+catalogo.

Sono **indicatori sovrapponibili**, non sommarli come casi unici e soprattutto **non chiamarli 144 duplicati certificati**. Nei casi (1), (2) e (3) occorre confrontare `Parte`, data, dettagli, catalogo, versione e fonti prima di scegliere se sia opera, movimento, versione, raccolta o omonimia. Il file contiene i numeri delle righe correlate per controllare gli esempi.

## Confronto preliminare con Atlantis
Riletto lo snapshot Atlantis con SHA `4863b3fe263154387de3388c0b813b5f94546f12` (754 nodi e 1.718 relazioni; comprende **193 nodi `opera`** e altre versioni). Test lessicale prudente sui titoli non generici, identificando eventuali forti somiglianze con le opere già presenti: **0 candidati sopra soglia** nel campione 500. **Questo non prova assenza né autorizza nuovi nodi**: i titoli editoriali sono spesso abbreviati o diversi, e serve una riconciliazione con ID autore, numero d'opera, alias, parti e raccolte, inclusi archi incompleti.

Il legacy `atlante3d/database/grafo.json`, nel suo snapshot usato precedentemente, contiene nodi di concetto e compositore ma **non un elenco autonomo generalizzato delle opere catalografiche**: non attribuirgli i 500 match d'opera.

## File dati effettivamente pubblicati su GitHub
1. `ATLANTIS_FLAMINIO_LOTTO19_500_VOCI_CON_DEDUP_2026-11-10.csv` — **500 record completi** (autore, catalogo, titolo, Parte, dettagli, link, lemma candidato, contatori e riferimenti alle righe incrociate), commit `3e72c9920255068db9c720595957165187e78e2d`.
2. `STAGING_FLAMINIO_LOTTO19_500_VOCI_CON_DEDUP_2026-11-10.json` — le medesime **500 voci in formato strutturato**, commit `eef6833c128d725b05faf6905f2e303bc599748c`.
3. `AUDIT_FLAMINIO_LOTTO19_500_VOCI_2026-11-10.md` — rapporto presente.

## Decisioni di metodo
- Canone al singolare e plurale originale sempre conservato.
- La stessa chiave di catalogo può indicare **raccolte** o **parti** e non certifica da sé un'unica opera.
- Una spiegazione Flaminio è collegamento documentale, non sempre prova di identità o paternità; attribuzioni sospese restano sospese.
- Nessun collegamento autore→genere→autore di un altro ramo mediante espansione non pertinente; nessun commit sui file pubblici.

## Prossimo lotto
Continuare con blocchi di **500** senza sovrapporre righe, ma rendere prioritaria una **tabella di identità opera** che raccolga tutte le righe per numero di catalogo, autore e versione e identifichi i nodi già presenti con accertamento documentale. In parallelo audit storico Checkpoint24 **74/233 archi** non va confuso con questa tassonomia. 210 lotti storico-filologici preservati.
