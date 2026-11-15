# Sonata e musica da camera — riconciliazione operativa (16 novembre 2026)

**Ambito:** Musurgia Mundi, Atlantis, 500 schede Flaminio Lotto 1. **Branch:** main. **Stato:** staging reversibile; produzione invariata; Lotto 2 BLOCCATO.

## Operazione eseguita
Il builder `DB_UNIFICATO_MUNDI_ATLANTIS_LOTTO01_2026-11-15.mjs` carica ora `SONATA_CAMERA_RACCORDI_OPERATIVI_2026-11-16.json`, selezione filologicamente prudente del precedente `OVERLAY_TASSONOMICO_SONATA_MUSICA_CAMERA_2026-11-15.json`. La radice `genere-sonata` Mundi è già riconciliata con `senso:sonata` Atlantis e NON viene duplicata.

- **7 nuovi nodi di articolazione:** Repertorio per strumento solo, Sonata per strumento solo, Sonata per due strumenti, Sonata a tre (trio sonata), Sonata da chiesa, Sonata da camera, Sonata in trio per organo solo.
- **11 nuovi raccordi** di tipologia, repertorio e specializzazione storica. Il nodo Mundi `genere-musica-da-camera` viene RIUTILIZZATO come famiglia cameristica: evitata una seconda «Musica da camera».
- **23 proposte trattenute:** corrispondenza incerta della camera Atlantis, `distinct_from` forma-sonata da trattare come distinzione e non gerarchia, allineamenti Flaminio per organico, nodi quartetto già condivisi, raccolte e singole opere da verificare.

## Distinzioni ontologiche
- **Sonata (genere)** non equivale a **forma-sonata**. La relazione originale di distinzione Atlantis va preservata, non sostituita da sottogenere.
- **Da chiesa / da camera** sono tipologie storiche; **a due / a tre** descrivono configurazioni di scrittura e organico; **per strumento solo** è altra faccetta. Le faccette possono coesistere.
- **Sonata a tre** implica ordinariamente due parti melodiche e continuo, non tre esecutori in senso aritmetico.
- **Sonate in trio per organo BWV 525–530**: scrittura a tre voci, un solo esecutore; perciò il nodo appartiene al Repertorio per strumento solo, non automaticamente al Trio cameristico.
- Una **raccolta** di più sonate non è una sola composizione. L'overlay op. 2 beethoveniano resta in sospeso per il collegamento alle tre singole sonate; lo stesso vale per le altre raccolte.
- **Nessun collegamento autore→opera** è inferito dalla sola somiglianza del titolo.

## Esito dei controlli sui dati reali
Builder eseguito integralmente sui JSON effettivi di Mundi, Atlantis, estensione, relazioni, Flaminio Lotto 1 e crosswalk curato:
- 2.813 nodi nella vista di staging, 8.517 archi;
- 8.354 archi originali conservati;
- 7 nodi e 11 archi Sonata nuovi;
- 67 archi direttamente incidenti sulla radice canonica Sonata (conteggio della vista corrente);
- **0 archi orfani, 0 identificativi arco duplicati, 500/500 schede Flaminio**;
- un solo nodo denominato «Musica da camera» dopo la correzione;
- `atlantis::senso:forma-sonata` permane come nodo distinto.

Questo è un test effettivo del builder, **non** una certificazione storico-musicale di tutte le opere né un collaudo browser desktop/Android.

## Registro trasversale
`REGISTRO_INTEGRAZIONE_OVERLAY_TASSONOMICI_2026-11-16.json` documenta 8 famiglie con **122 nodi candidati e 253 archi proposti** nell'insieme degli overlay originali. Solo il sottoinsieme operativo Sonata sopra descritto è stato caricato come nuova struttura. Le altre famiglie restano IN_REVIEW: non devono essere dichiarate integrate solo perché censite.

## Prossime verifiche Sonata
1. Confrontare gli ID Flaminio delle sonate per violino, tastiera, flauto e viola da gamba con la sorgente di ciascuna opera.
2. Distinguere sonata a due e sonata in trio dalla consistenza reale delle parti e da quella degli esecutori.
3. Collegare opere singole e raccolte con `has_form`, `part_of_collection`, `has_instrumentation` e fonte originale, senza fusioni nominali.
4. Verificare nel viewer la cascata Sonata → sottotipo → opera e l'esclusione di opere appartenenti ad altri compositori.
5. Proseguire alla verifica delle famiglie rimanenti prima del Lotto 2.
