# Audit integrato Flaminio–Atlantis — Lotto 04: prime 50 intestazioni composite

**Data:** 10 novembre 2026 · **Branch:** main · **Perimetro:** esclusivamente audit, nessuna modifica al grafo pubblico.

## Campo verificato
Fonte locale: `CROSSWALK_FLAMINIO_SINGOLARE_LOTTO03_2026-11-10.csv`, costruita dal catalogo `compositori_flaminio.xlsx`. Selezionate **le prime 50 per frequenza** tra le **635** voci precedentemente etichettate `intestazione_o_percorso_con_lemmi` oppure `composita_da_esaminare`. Le 50 intestazioni coprono **15.838** righe del catalogo. La selezione non equivale a 15.838 opere distinte.

## Esito del triage editoriale delle 50 intestazioni
- 21 `organico_destinazione`: per pianoforte, per orchestra, per coro, per organo, per chitarra sola e simili — nessun genere inferibile automaticamente.
- 6 `ambito_repertoriale`: musica da camera, musica strumentale, vocale da camera e simili.
- 4 `genere_organico`: per esempio Sonata per clavicembalo, Concerto per violino, Lied con accompagnamento.
- 3 `ambito_teatrale`: **Opere teatrali** e **Musica per il teatro** NON sono necessariamente sinonimi del genere Opera.
- 3 `generi_multipli`: Lieder e arie; Antifone, Offertori, Sequenze; Lieder e duetti. **Non assegnare tutti i generi a ogni riga** senza esaminare l'opera.
- 3 `ambito_funzionale`: musica sacra/profana come destinazione, non forma.
- 2 `sezione_catalografica`: intestazioni come Gruppo XXXI, categorie residuali.
- 1 `genere_organico_funzione`, 1 `genere_funzione`, 1 `genere_composito`, 1 `estratto_da_opera`, 1 `genere_teatrale`, 1 `genere_attribuzione_incerta`, 1 `sezione_editoriale`, 1 `genere_funzione_organico`.

## Casi sentinella
1. **Musica per pianoforte** (1.103 righe): organico senza forma determinata.
2. **Musica da camera** (1.824): ambito ampio, potenzialmente contenente generi diversi; non sostituire con Quartet/Trio.
3. **Opere teatrali** (814): repertorio, non inferire automaticamente il genere lirico.
4. **Lieder e arie per voce e pianoforte** (543): due generi candidati `Lied` e `Aria` per righe differenti; non creare un genere ibrido obbligatorio.
5. **Gruppo XXXI: Arrangiamenti di canti popolari > Gruppo XXXIa: 273 canti scozzesi** (368): raggruppamento di catalogo, lingua/tradizione, trattamento d'arrangiamento; non forma «Gruppo XXXIa».
6. **Composizioni per strumento solista, archi e basso continuo > Concerti per violino** (255): `Concerto` con organico; preservare il percorso.
7. **Preludi di corali** (187): `Preludio corale` come locuzione specifica; non separare automaticamente in due opere «Preludio» e «Corale».
8. **Arie tratte da opere** (180): `Aria` ma relazione `estratto_da` / `parte_di` con opera madre da identificare.
9. **Musica per strumento solista e orchestra** (169): organico che NON dimostra da solo il genere Concerto.
10. **Gruppo I: Sinfonie (supplementi di dubbia attribuzione)** (146): `Sinfonia` candidata; attribuzione separata con gate chiuso.
11. **Composizioni per pianoforte pubblicate individualmente** (131): modalità editoriale, non forma.

## Regole di modellazione
Conservare l'intestazione integrale Flaminio, la riga/catalogo sorgente, il lemma canonico singolare **solo quando motivato**, gli organici come attributi/entità distinte, e il contesto sacro/profano come altra faccetta. Raccolte, estratti, trascrizioni e versioni non sono automaticamente opere autonome; controllare l'identificativo catalografico. Predicato `sottogenere_di` non va usato per un rapporto `ha_organico` o `parte_di_raccolta`.

**Triage, non convalida:** i 50 record sono classificazioni editoriali proposte sulla base delle intestazioni originali; non sono stati revisionati uno per uno tutti i 15.838 record sottostanti, non sono state certificate attribuzioni e non sono stati importati nodi.

## Materiali
`ATLANTIS_FLAMINIO_LOTTO04_TOP50.csv` e `.json` creati per la conversazione: 50 record con etichetta originale, frequenza, tipologia, candidati e motivazione. Non caricati integralmente sul repository.

## Prossima ripresa
1. Continuare sulle restanti **585** intestazioni composite, prossime 50 per frequenza; controllare poi le 265 senza lemma e i casi non classificati.
2. Integrare i vocabolari completi Musurgia Mundi e Atlantis per confronti semantici reali, oltre i 50 termini della preview.
3. Incrociare singole opere Flaminio e identità già presenti, con versioni e raccolte separate; importazione solo dopo deduplicazione e gate documentale.
4. Audit storico Checkpoint24 rimane distinto e sospeso a **74/233** archi, prossimo blocco da 50.

**Produzione invariata**, 210 lotti storici salvaguardati.
