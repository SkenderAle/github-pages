# Musurgia Atlantis — Lotto 22: correzione delle false collisioni causate da `casefold`

**Data:** 10 novembre 2026. **Ambito:** solo audit Flaminio, nessuna pubblicazione di dati/GUI. **Origine:** revisione dei 584 gruppi e 1.278 righe del Lotto 21.

## Risultato riproducibile

La precedente chiave `NFKC + casefold + trim` su compositore e numero cancella la distinzione tra maiuscole e minuscole **in posizioni musicologicamente significative**. Non va usata come chiave unica di *identità d'opera*. Per ogni gruppo del Lotto21 abbiamo riletto le righe originali (CSV di evidenza) e ripartito per numero dopo `NFKC + trim + collasso spazi` **senza `casefold`**. Sono conteggi di **collisioni catalografiche**, non opere accertate.

| Misura | Prima | Dopo la rettifica |
|---|---:|---:|
| Gruppi con chiave autore+numero ripetuta | 584 | **477** |
| Righe comprese nei gruppi tuttora ripetuti | 1.278 | **1.064** |
| Gruppi P1 da esaminare | 136 | **30** |
| Gruppi P0 da esaminare | 448 | **447** |
| Gruppi separati interamente dalla grafia originale | — | **107** |

I **107** gruppi separati comprendono 26 per **Haydn**, 77 per **Tartini**, 3 per **Mozart** e 1 per **Stravinskij**. Due codici che differiscono solo per il maiuscolo/minuscolo non costituiscono *di per sé* due opere accertate; non fonderli senza identificazione individuale. **103/107** riguardano le coppie Haydn/Tartini, dove i titoli della fonte mostrano la differenza fra tonalità maggiori/minori. I 3 Mozart e lo Stravinskij richiedono un crosscheck autonomo sul catalogo.

### Sentinelle ad alta priorità

- **Haydn:** `Hob:I:C1` (Sinfonia in do maggiore, Excel 18994) ≠ `Hob:I:c1` (Sinfonia in do minore, 19028); entrambi nello stesso gruppo di attribuzione dubbia, ma numeri letteralmente diversi. **Non trasferire come due opere autentiche automaticamente**.
- **Tartini:** coppie `1.A01` / `1.a01` e `2.C01` / `2.c01` con corrispondenti titoli maggiore/minore; preservare la distinzione esatta, compresi gruppi concerto/sonata/movimento.
- **Mozart:** `K 384B` (Andante in mi bemolle per fiati, Excel 34848) e `K 384b` (Marcia in si bemolle, 34863) presentano testimonianza catalografica differenziata; pagina di confronto: https://www.mozartportal.com/it/composition/movimento-strumentale-andante-in-mi-bemolle-maggiore-k-384b-it. **K 508a/K 508A e K 33b/K 33B** rimangono da controllare direttamente nelle edizioni Köchel, senza merge.
- **Stravinskij:** `16A` / `16a`, canone sul tema dell'*Uccello di fuoco* e balletto originale: non associare sulla base del solo numero.

### Un secondo errore di identificazione, indipendente da `casefold`

**Mendelssohn, Excel 31439 e 31450:** entrambe le righe Flaminio espongono `Op. 62 n. 6`, ma i titoli sono il **n. 30 in la maggiore** e il **n. 43 in mi minore**. Il primo è correttamente *Frühlingslied* op. 62 n. 6, MWV U 161. La composizione in mi minore, n. 43, è *Andante un poco agitato*, **op. 102 n. 1, MWV U 162**. Il campo numerico del secondo record richiede una correzione catalografica *derivata con fonte*, **senza modificare il valore originale**. Riscontri: https://www.editionpeterspublications.us/products/mendelssohn-piano-works-volume-1-songs-without-words-peters ; https://imslp.org/wiki/Lieder_ohne_Worte,_Op.102_(Mendelssohn,_Felix) . **Non creare un rapporto di identità fra i due lavori**.

## I 30 P1 rimanenti, ricostruzione senza fusione

**Tutte le 30 schede qui sotto conservano gate di pubblicazione chiusi.** L'omonimia di titolo o numero impone ulteriori controlli su opera, raccolta, pezzo, versione, movimento, scheda esplicativa e fonti esterne.

1. `flaminio:g21:21c3aa1df8f8a3` — **BEETHOVEN, Ludwig van**, numero `Op. 108`, righe 4632, 4633, 4634, 4635; 25 Schottische lieder (Lieder scozzesi) / 25 Schottische lieder (Lieder scozzesi) / 25 Schottische lieder (Lieder scozzesi).
2. `flaminio:g21:afbaf540f111cd` — **BEETHOVEN, Ludwig van**, numero `WoO 155`, righe 4637, 4638, 4639, 4640; 26 canzoni gallesi / 26 canzoni gallesi / 26 canzoni gallesi.
3. `flaminio:g21:dc9a1ea9a7f8e5` — **CHOPIN, Fryderyk**, numero `15`, righe 12650, 12651, 12652; Tre notturni / Tre notturni / Tre notturni.
4. `flaminio:g21:3c22c55a5ecaff` — **CHOPIN, Fryderyk**, numero `68`, righe 12624, 12625, 12626; Quattro mazurche per pianoforte / Quattro mazurche per pianoforte / Quattro mazurche per pianoforte.
5. `flaminio:g21:f250a21bcf4f76` — **LISZT, Franz**, numero `242`, righe 25382, 25391, 25392; Rhapsodies hongroises (Magyar rhapsodiak) / Ungarische Nationalmelodien (Magyar dalok) / Ungarische Rhapsodien.
6. `flaminio:g21:8d1790ff43a5f7` — **BACH, Johann Sebastian**, numero `968`, righe 3942, 3943; Adagio in sol maggiore / Adagio in sol maggiore.
7. `flaminio:g21:a1402ba4b27387` — **BEETHOVEN, Ludwig van**, numero `Op. 52`, righe 4696, 4697; 8 Lieder per voce e pianoforte / 8 Lieder per voce e pianoforte.
8. `flaminio:g21:30084ec039dc4d` — **BEETHOVEN, Ludwig van**, numero `Op. 72`, righe 4915, 4916; Fidelio / Fidelio.
9. `flaminio:g21:d5e4f86c9d53e5` — **BEETHOVEN, Ludwig van**, numero `Op. 83`, righe 4691, 4692; 3 Lieder per voce e pianoforte / 3 Lieder per voce e pianoforte.
10. `flaminio:g21:6c3331dea90714` — **BEETHOVEN, Ludwig van**, numero `Op. 84`, righe 4906, 4907; Egmont / Egmont.
11. `flaminio:g21:52c57803c7ce13` — **BONONCINI, Giovanni**, numero `663`, righe 6344, 6345; Sì che costante / Sì che costante.
12. `flaminio:g21:688dae66e3a706` — **CAJKOVSKIJ, Petr Ilic**, numero `29`, righe 9502, 9504; Sinfonia n. 3 in re maggiore "Polacca" / Sinfonia n. 5 in mi minore.
13. `flaminio:g21:2423ba0c325f9d` — **CHERUBINI, Luigi**, numero `123`, righe 12574, 12575; Médée / Médée.
14. `flaminio:g21:3e6e21b498d909` — **CHOPIN, Fryderyk**, numero `CI 146 BI 51`, righe 12631, 12632; Czary (Stregoneria) / Czary (Stregoneria).
15. `flaminio:g21:7b39355e3e779d` — **FRESCOBALDI, Girolamo**, numero `8.25b`, righe 16025, 16031; Canzon Prima, due canti, e due bassi / Canzon prima a tre, due bassi, e canto.
16. `flaminio:g21:848cf966a34971` — **HAYDN, Franz Joseph**, numero `Hob:XI:2`, righe 19669, 19682; Trio in do maggiore per baryton, viola e violoncello / Trio in la maggiore per baryton, viola e violoncello.
17. `flaminio:g21:11d753382d7096` — **HÄNDEL, Georg Friedrich**, numero `6`, righe 24016, 24017; Agrippina / Agrippina.
18. `flaminio:g21:9cd1a0cde96f31` — **MENDELSSOHN-BARTOLDY, Felix**, numero `Op. 62 n. 6`, righe 31439, 31450; Lied ohne Worte (Lied senza parole) n. 30 in la maggiore per pianoforte / Lied ohne Worte (Lied senza parole) n. 43 in mi minore per pianoforte.
19. `flaminio:g21:156abecd73a069` — **MONTEVERDI, Claudio**, numero `249`, righe 34314, 34338; 4 / 6.
20. `flaminio:g21:f3f84a490e4434` — **MOZART, Wolfgang Amedeus**, numero `K 527 (K 527)`, righe 35267, 35268; Don Giovanni (Il dissoluto punito) / Don Giovanni (Il dissoluto punito).
21. `flaminio:g21:ab4e021b4a3c24` — **PALESTRINA, Giovanni Pierluigi da**, numero `625`, righe 37684, 37685; Benedicite gentes / Benedicite gentes.
22. `flaminio:g21:714e00c6b3b455` — **PALESTRINA, Giovanni Pierluigi da**, numero `626`, righe 37679, 37680; Ascendit Deus / Ascendit Deus.
23. `flaminio:g21:ce2c5d283d22a4` — **POULENC, Francis**, numero `15a n. 5`, righe 38350, 38351; 5. L'écrevisse / 5. L'écrevisse.
24. `flaminio:g21:17f76624f32e5f` — **PROKOFIEV, Sergej**, numero `44`, righe 38607, 38608; Sinfonia n. 3 in do minore / Sinfonia n. 3 in do minore.
25. `flaminio:g21:9d6155bf134662` — **SCHUBERT, Franz**, numero `911`, righe 45237, 45238; Winterreise / Winterreise.
26. `flaminio:g21:66ffe1705ef82f` — **SIBELIUS, Jean**, numero `op. 22`, righe 46518, 46519; Lemminkäinen Suite (4 leggende di Kalevala) / Lemminkäinen Suite (4 leggende di Kalevala).
27. `flaminio:g21:b5df711864d882` — **STRAUSS, Richard**, numero `227c`, righe 47745, 47746; Introduzione e valzer da "Der Rosenkavalier", op. 59, I. e II. Atto, nuova suite per orchestra / Introduzione e valzer da "Der Rosenkavalier", op. 59, I. e II. Atto, nuova suite per orchestra.
28. `flaminio:g21:0552715e345785` — **STRAUSS, Richard**, numero `227d`, righe 47770, 47771; Suite dall'opera "Der Rosenkavalier", op.59, per orchestra / Suite dall'opera "Der Rosenkavalier", op.59, per orchestra.
29. `flaminio:g21:f30da03ad9ecfb` — **WEBER, Carl Maria von**, numero `291`, righe 51774, 51775; Euryanthe / Euryanthe.
30. `flaminio:g21:711f91f66f5c0d` — **WEBER, Carl Maria von**, numero `306`, righe 51776, 51777; Oberon / Oberon.

## Scelta dello schema dati

1. `catalogue_number_raw`: stringa originale, mai sovrascritta.
2. `catalogue_namespace`: Köchel, BWV, Hoboken, catalogo tematico di Tartini, op., TH ecc.; classificazione *verificata* da fonte.
3. `catalogue_number_case_preserved`: chiave conservativa per bloccare falsi match; `search_key_casefolded` è **solo** indice di ricerca, mai identità.
4. `work_id`, `collection_id`, `member_number`, `version_id`, `part_id`, `documentation_id`: tipi distinti, espliciti e reversibili.
5. `evidence_urls`, `source_row_id`, `source_original_record`, `status` e `merge_gate` per ogni corrispondenza.

## Limitazioni e prossima ripresa

Questo è **un ricalcolo sul registro del Lotto21**, non una nuova importazione di 52.150 opere. Sono **477 gruppi ancora problematici**, non 477 duplicati da fondere. Le differenze di maiuscole/minuscole vengono tutelate anche quando la loro natura musicologica non è ancora certificata. Prossimo lotto: audit documentale dei **30 P1 effettivi**, dando precedenza a: errori di namespace/numero (Mendelssohn, Čajkovskij, Haydn XI), opere+ouverture o schede alternative (Fidelio, Don Giovanni, Egmont, opere teatrali), parti di raccolte (Chopin, lieder Beethoven), e ruoli differenti per opere adattate. Separatamente rimangono **447 P0** e l'audit storico persona↔persona **74/233**.

**Produzione invariata**: grafi, atlante3d, renderer, GUI e 210 lotti storico-filologici non toccati.
