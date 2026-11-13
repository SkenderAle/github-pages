# Musurgia Atlantis — Lotto Flaminio 01/15 · checkpoint Beethoven

**Data:** 13 novembre 2026 · **Branch:** `main` · **Ambito:** `musurgia-atlantis/audit-integrazione/` · **Stato:** STAGING, Lotto01 ancora OPEN, 0/15 lotti chiusi.

## Perimetro e risultato verificato

Sono state riprese le 12 righe originali con guida Flaminio **4632–4635, 4637–4640, 4691–4692, 4696–4697** già comprese nelle 500 schede prioritarie. Identificate quattro **raccolte** (op.108, WoO155, op.83, op.52) e undici **brani individuali**; la riga 4633 rimanda alla guida dell'intera op.108. Le altre 11 righe rimandano alle guide dei singoli canti. Conservati tutti gli identificativi e URL dell'Excel; nessuna riga cancellata o interpretata come clone.

| Riga Excel | Raccolta | Identità suggerita dalla guida | Livello |
|---:|---|---|---|
| 4632 | Op. 108 · 25 canti scozzesi | n. 6 · Dim, dim is my eye | Guida individuale |
| 4633 | Op. 108 · 25 canti scozzesi | Raccolta | Scheda complessiva |
| 4634 | Op. 108 · 25 canti scozzesi | n. 5 · The sweetest lad was Jamie | Guida individuale |
| 4635 | Op. 108 · 25 canti scozzesi | n. 11 · Oh! Thou art the lad of my heart, Willy! | Guida individuale |
| 4637 | WoO 155 · 26 canti gallesi | n. 9 · To the Aeolian Harp | Guida individuale |
| 4638 | WoO 155 · 26 canti gallesi | n. 17 · The Dairy House | Guida individuale |
| 4639 | WoO 155 · 26 canti gallesi | n. 15 · When mortals all to rest retire | Guida individuale |
| 4640 | WoO 155 · 26 canti gallesi | n. 7 · O let the night my blushes hide (Oh Let the Night) | Guida individuale |
| 4691 | Op. 83 · Tre Lieder | n. 2 · Sehnsucht | Guida individuale |
| 4692 | Op. 83 · Tre Lieder | n. 1 · Wonne der Wehmut (Flaminio: Wehmuth) | Guida individuale |
| 4696 | Op. 52 · Otto Lieder | n. 8 · Das Blümchen Wunderhold | Guida individuale |
| 4697 | Op. 52 · Otto Lieder | n. 4 · Maigesang | Guida individuale |

Il totale dei brani nelle quattro raccolte (25/26/3/8) è **contesto catalografico**, non significa che tutte queste opere siano state importate o abbiano guida fra i 7.412 record linkati.

## Confronto con grafi e overlay, verifiche di non-duplicazione

- `musurgia-atlantis/grafo.json`: 754 nodi / 1.718 archi; nessuna identità d'opera o raccolta corrispondente ai 15 ID candidato; autore **già esistente** `pers:beethoven`.
- `atlante3d/database/grafo.json`: 869 nodi / 2.437 archi; nessuna identità d'opera o raccolta esatta; autore legacy **già esistente** `compositore-ludwig-van-beethoven`.
- Confrontati anche **23 manifesti JSON distinti** della preview federata attiva (registro, tassonomie, overlay, Lotti35–51): **zero** corrispondenze esatte alle 12 righe Excel, ID sorgente o guide individuali; non si inferisce da ciò l'assenza da ogni archivio storico non caricato nella preview.
- `legacy:gf:genere-lied` esiste nell'overlay Generi e forme Checkpoint11. Da riutilizzare, non duplicare.
- Il filtro attribuzioni e collisioni resta separato dalle corrispondenze puramente grafiche.

## Dati effettivamente pubblicati in staging

1. `CROSSWALK_LOTTO01_BEETHOVEN_12_GUIDE_2026-11-13.json`, commit `3a432e6078399cdfc4f70712ed7113a7ed9e4e54`: 4 raccolte e 11 opere individuali, 12 corrispondenze riga→guida, ID provvisori.
2. `OVERLAY_BEETHOVEN_RACCOLTE_12_GUIDE_LOTTO01_2026-11-13.json`, commit `751932dcc78157b9cebe4c4068bae9e9e5836254`: **17 nodi** (15 entità candidate + 2 ancore riusate, Beethoven e Lied), **45 archi**: 12 fonte→identità; 11 raccolta→brano; 4 Beethoven→raccolta; 11 Beethoven→brano; 6 raccolte/brani di Lied→genere; 1 Beethoven→Lied limitato alle opere attestate.
3. `VISTA_GRAFO_FONTE_FLAMINIO_LOTTO01_BEETHOVEN_2026-11-13.html`, commit `388d286043e5b687712803e931b0ce3bae38c248`: anteprima AUDIT separata, caricamento tre JSON (fonte + overlay critico + Beethoven), non sostituisce l'interfaccia pubblica.
4. `REGRESSIONE_BEETHOVEN_LOTTO01_OVERLAY_PREVIEW_2026-11-13.json`, commit `d4b0166a0882abe72b2750b2c0a9daa611bd7927`: test effettivamente eseguito su strutture JSON reali: **500 record fonte / 611 nodi / 1.075 archi / 0 ID duplicati / 0 archi orfani**, 12/12 origini presenti, filtro Beethoven = 41 schede, 15 entità (4+11), filtro Bach = 0 entità Beethoven, parsing JavaScript **PASS**.

## Distinzione filologica e semantica vincolante

- **Op.108/WoO155:** Beethoven `elabora_melodia_tradizionale` / `elabora_raccolta_di_canti_tradizionali`; **nessuna paternità inventata della melodia preesistente** e **nessun arco automatico al Lied tedesco**.
- **Op.83/Op.52:** Beethoven `compone_la_musica_di` singoli Lieder su testi letterari; le raccolte mantengono la propria identità, distinta da ognuno dei canti.
- I predicati autore→genere sono radicati alle opere riscontrate, non sono un permesso di attraversare il nodo Lied verso altri autori.
- Le categorie sono **provvisorie di staging**: niente nuove fusioni con dati di produzione, niente deduzioni senza fonti o conversioni silenziose di etichette Flaminio.

### Fonti consultate e limiti

Cataloghi delle raccolte nel Beethoven-Haus Bonn:
- Op. 108 · 25 canti scozzesi — https://www.beethoven.de/en/work/view/5444611451387904/25%2BScottish%2BSongs%2Bfor%2Bvoice%252C%2Bviolin%252C%2Bvioloncello%2Band%2Bpiano%2Bop.%2B108
- WoO 155 · 26 canti gallesi — https://www.beethoven.de/en/work/view/5959321271664640/26%2BWelsh%2BSongs%2Bfor%2Bone%2Bor%2Btwo%2Bvoices%2C%2Bviolin%2C%2Bvioloncello%2Band%2Bpiano%2BWoO%2B155
- Op. 83 · Tre Lieder — https://www.beethoven.de/en/work/view/ag9iZWV0aG92ZW4tdml1cjNyEQsSBHdvcmsYgICA3N2ntgoM/Three%2BSongs%2Bfor%2Bvoice%2Band%2Bpiano%2Bop.%2B83
- Op. 52 · Otto Lieder — https://www.beethoven.de/en/work/view/ag9iZWV0aG92ZW4tdml1cjNyEQsSBHdvcmsYgICArNzZrQgM/Eight%2BSongs%2Bof%2Bvarious%2Bpoets%2Bfor%2Bvoice%2Band%2Bpiano%2Bop.%2B52

Indice delle guide Flaminio: https://www.flaminioonline.it/Guide/Beethoven-Guide.html . Le **12 URL Flaminio sono conservate dall'Excel**; non è ancora stato eseguito un controllo HTTP di apertura **individuale 12/12**. Il catalogo Beethoven-Haus attesta collocazione e numerazione dei membri delle quattro raccolte, non un controllo critico definitivo di ogni eventuale revisione/assetto editoriale.

**Limiti del test:** il parsing JavaScript e la simulazione di filtro NON equivalgono a rendering Canvas o accettazione reale browser/Android; preview non certifica l'integrazione nel grafo storico canonico. Mancano il crosswalk con gli altri staging non attivi, la chiusura degli alert attributivi del Lotto01 e la riconciliazione 500/500, le verifiche individuali di tutte le guide, e l'accettazione visiva reale.

## Prossima ripresa

**Lotto01 sempre aperto.** Proseguire con i 17 alert attribuzioni non ancora corroborati, il controllo guide dei record prioritari e le 408 schede senza corrispondenza esatta nei 23 manifesti esaminati; applicare la stessa distinzione raccolta/opera/parte/versione e preservare le fonti originali. Non aprire Lotto02 fino al completamento di ogni gate del protocollo 7.412.
