# Lotto 13 — confronto diretto dei 23 lemmi con i due grafi integrali

**Data:** 10 novembre 2026 · **Ambito:** solo audit su branch `main`, nessuna fusione.

## Nuovo accesso ai dati
Usando gli SHA già restituiti dal repository, sono stati letti i **blob integrali** dei due JSON (non le sole anteprime):
- `musurgia-atlantis/grafo.json`, SHA `4863b3fe263154387de3388c0b813b5f94546f12`: **754 nodi**, **1.718 archi**;
- `atlante3d/database/grafo.json`, SHA `57c65e209628b0fe43d0d5040bd27deb7e1624c8`: **869 nodi**, **2.437 archi**.

Questi numeri e SHA identificano gli snapshot letti, non necessariamente eventuali modifiche posteriori. Il precedente ostacolo (contenuto vuoto da `fetch_file`) è superato con lettura di `fetch_blob`.

## Confronto dettagliato
Tutti i **23** lemmi non coperti dai 50 nodi dell'overlay Checkpoint11 sono stati confrontati con etichette e categorie effettive dei **1.623** nodi delle due basi.

**10 lemmi** hanno almeno un nodo esistente pertinente, ma con ampiezza diversa dalla classe generale:
1. **Aria:** `senso:aria-cavatina`, nodo composto «Aria, cavatina, romanza, cantabile».
2. **Corale:** `senso:corale` e due tradizioni luterane/organistiche originali; non equiparare alla generica scrittura corale.
3. **Graduale:** nodo sulla revisione del Graduale nell'Editio Medicea (evento editoriale, non classe generale).
4. **Inno:** `senso:inno` nella funzione politico-civica, non tutti gli inni liturgici.
5. **Intermezzo:** `senso:intermezzo` e `intermezzo-comico`, sottodominio teatrale.
6. **Marcia:** un'opera specifica `opera:grieg-marcia-dei-nani-op54n3`, non il genere generale.
7. **Poema sinfonico:** `poema-sinfonico-ottocentesco` e `senso:poema-sinfonico`, allineamento di definizioni ancora da certificare.
8. **Quartetto:** `genere-quartetto-archi` e `senso:quartetto`, entrambi più specifici di quartetto generico.
9. **Romanza:** compare dentro `senso:aria-cavatina`, richiede distinzione dalla propria forma generale.
10. **Valzer:** `senso:valzer` «Valzer: danza e memoria cittadina», contesto culturale presente.

**13 lemmi** senza un nodo di genere generale pertinente rilevato in questi due grafi: Antifona, Canzone, Duetto, Mazurca, Offertorio, Polacca, Quintetto, Rondò, Salmo, Scherzo, Sestetto, Studio, Trio. Ciò **non prova** che manchino dagli alberi storiografici preparati dall'utente o da ogni materiale editoriale di Musurgia Mundi.

## Falsi positivi evitati
- `avanguardia-polacca-post-1956` designa nuova musica *polacca*, non la danza **Polacca**.
- `studio-elettronico-wdr-colonia` designa un'istituzione, non lo **Studio** come pezzo musicale.
- `trio-for-strings-la-monte-1958` è un'opera specifica, non il tipo generale **Trio**.
- `opera:grieg-marcia-dei-nani-op54n3` è un esempio di **Marcia**, non il suo nodo generico.

## Output prodotto
`CROSSWALK_FLAMINIO_LOTTO13_GRAFI_INTEGRALI_23_LEMMI_2026-11-10.json`, 23 record con ID reali di origine e di Atlantis, ambito della relazione e gate `automatic_merge_authorized=false`.

## Passo successivo
1. Confrontare ora l'intero corpo dei tre alberi tassonomici preparati dall'utente (cameristico, sinfonico, sacro) con i 13 casi senza nodo generale pertinente e i 10 con sottotipi o contesti.
2. Definire uno schema di concetti canonici al singolare senza cancellare nodi di senso storici, periodi o risorse editoriali; rapporto `sottogenere_di` solo se giustificato; classificazione molti-a-molti delle singole opere Flaminio.
3. Testare il caso dei sei Concerti brandeburghesi: una raccolta + sei opere autonome, selezionabili indipendentemente, con organico e link Flaminio individuali.
4. Riprendere separatamente Checkpoint24 (74/233 archi persona↔persona, prossimo lotto da 50), senza usare la tassonomia come ponte storico fra compositori.

**Produzione invariata**; non modificati `grafo.json`, renderer, capitoli e i 210 lotti precedenti.
