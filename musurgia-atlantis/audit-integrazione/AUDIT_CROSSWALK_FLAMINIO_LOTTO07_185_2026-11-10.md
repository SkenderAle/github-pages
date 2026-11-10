# Audit Flaminio–Atlantis — Lotto 07: conclusione del primo triage delle intestazioni composite

**Data:** 10 novembre 2026 · **Branch:** main · **Ambito:** solo audit-integrazione; produzione invariata.

## Copertura
Dal file locale `CROSSWALK_FLAMINIO_SINGOLARE_LOTTO03_2026-11-10.json` sono state riesaminate in ordine decrescente di frequenza, con ordinamento alfabetico dei pareggi, le posizioni **451–635** del gruppo di **635 intestazioni composite**. L'insieme non si sovrappone alle **200** denominazioni del Lotto06 (251–450). Il Lotto07 contiene **185 denominazioni distinte** e rappresenta **773 righe** del catalogo Flaminio (non 773 opere autonome).

**Avanzamento complessivo:** Lotto04 = 50 intestazioni / 15.838 righe; Lotto05 = 200 / 10.707; Lotto06 = 200 / 3.081; Lotto07 = 185 / 773. Somma: **635/635 intestazioni** e **30.399 righe** dei gruppi composti esaminati mediante triage di intestazione. Non equivale a controllo di 30.399 singole opere.

## Qualità del lotto conclusivo
- **41** voci hanno avuto interpretazione editoriale mirata a partire dalle intestazioni e dalle conoscenze musicali necessarie a evitare fusioni improprie.
- **144** voci hanno ricevuto classificazione a regole, marcata come ancora da verificare.
- **185/185** conservano intestazione originale, frequenza, segmento finale, tipo candidato, lemmi candidati, motivazione, metodo, stato di verifica e `merge_autorizzato=false`.
- **0** deduplicazioni effettive di opere e **0** autorizzazioni di fusione storico-musicale. `record_opera_esaminati=false` per tutte le voci.

## Sentinelle e correzioni ontologiche
1. Pos. **451**: Contrafacta spirituali inediti = adattamento testuale da originale profano, non semplice genere.
2. Pos. **455**: Graduali, offertori e mottetti sono tipologie differenti, non un genere composito da assegnare in blocco.
3. Pos. **461**: Musica sinfonica è un ambito, non dimostrazione del genere `Sinfonia`.
4. Pos. **466**: Coro senza accompagnamento non implica `Corale` come forma.
5. Pos. **472**: Intermezzo nei balletti richiede relazione `parte_di` quando documentata.
6. Pos. **479**: `Opere` da sola non significa `Opera lirica`.
7. Pos. **480**: Opere erroneamente attribuite a Buxtehude non devono produrre arco `ha_composto` certificato.
8. Pos. **482**: Trascrizioni da altri compositori distinguono autore della fonte e trascrittore.
9. Pos. **494**: Baryton è strumento musicale, non registro vocale.
10. Pos. **499**: Quartetto vocale non coincide con Quartetto d'archi.
11. Pos. **502**: Messa completa distinta da ogni parte singola.
12. Pos. **508**: `Preludi e fughe` può contenere cicli unitari; non imporre sempre due opere autonome.
13. Pos. **515**: Orchestrazione di opera altrui non trasferisce la paternità della fonte.
14. Pos. **521**: Edizione di musica popolare non prova che l'editore ne sia compositore.
15. Pos. **531**: Aria da concerto va classificata prima come Aria, non automaticamente sotto Concerto.
16. Pos. **547**: Le ultime sette parole di Cristo sulla Croce: tema/titolo di ciclo e differenti realizzazioni, non genere unico per tutti i casi.
17. Pos. **552**: Pasticci richiedono attribuzioni dei numeri e degli interventi musicali.
18. Pos. **560**: Sonata grossa come locuzione storica, non sinonimo moderno di Sinfonia.
19. Pos. **580**, **602–603**: Film, radio e televisione indicano medium/destinazione; la forma va verificata sui brani.
20. Pos. **604**: Opere teoriche e didattiche sono scritti e non automaticamente composizioni.
21. Pos. **611**: Trautonium = strumento elettroacustico.
22. Pos. **623**: Riscoperta dopo 1997 non equivale a composizione post-1997.
23. Pos. **627**: Stabat Mater è anche testo musicale-religioso comune a opere e organici diversi.

## Artefatti prodotti nella conversazione
- `ATLANTIS_FLAMINIO_LOTTO07_185.csv`
- `ATLANTIS_FLAMINIO_LOTTO07_185.json`

Sono registri riga-per-riga di audit, conservati come allegati nella conversazione. Questo documento GitHub è un riassunto persistente e non incorpora i 185 payload completi.

## Stato dopo il primo triage
**Completato il primo triage delle 635 intestazioni composite** su 1.167 denominazioni distinte Flaminio, ma NON completata la tassonomia storico-musicale. Rimangono:
1. le **265** denominazioni del Lotto03 senza lemma musicale riconosciuto dal dizionario preliminare, oltre agli altri casi non compresi nella selezione composita;
2. il confronto con gli alberi storiografici completi Musurgia Mundi, e non soltanto con i 50 nodi della preview;
3. l'esame opera-per-opera, deduplicazione, raccolte/parti e attestazioni Flaminio;
4. validazione dei 41+144 casi qui registrati e delle preclassificazioni dei lotti precedenti;
5. test della navigazione e dell'algoritmo di pertinenza radicata.

Audit storico-personale Checkpoint24 ancora distinto: **74/233** archi revisionati, prossimo lotto da 50. Nessuna modifica al grafo di produzione, renderer, pagine Mundi o 210 lotti storici.
