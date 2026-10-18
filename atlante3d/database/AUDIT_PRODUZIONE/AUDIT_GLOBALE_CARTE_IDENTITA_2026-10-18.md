# Musurgia Mundi — Audit globale carte d'identità e fonti · 18 ottobre 2026

## Perimetro
Branch `main`. Ricognizione integrale degli 824 nodi in `grafo.json` e dei profili e fonti censiti in `consultazione.json`, senza confondere la documentazione delle relazioni con quella delle biografie.

## Baseline misurata
- 824 nodi complessivi.
- 491 nodi di tipo `compositore` o `persona`.
- 113 persone con profilo strutturato in `consultazione.profiles`.
- 73 persone con almeno una voce Treccani individuale in `consultazione.entries`.
- 33 persone con entrambe le condizioni; 338 senza entrambe (possono comunque avere `grafo.description` o altre fonti).
- 157 nodi con descrizione letterale provvisoria `Inquadramento orientativo da verificare e integrare con fonti`, di cui 76 senza profilo strutturato.
- 198 persone/compositori con almeno un rimando in `collegamenti-sito.byNode`. Il dato NON quantifica necessariamente tutte le forme di navigazione presenti in interfaccia.

## Problema editoriale
La carta d'identità legge prima `consultazione.profiles[id]`, poi `grafo.description` e mostra i link solo per `consultazione.entries[id]`. Un profilo compilato ma senza voce Treccani censita attivava un messaggio che poteva sembrare una smentita della ricerca biografica già svolta.

Il messaggio è stato sostituito con `Fonti biografiche individuali in corso di ricognizione.` nel commit `8a8f667b`. **Questa è una correzione testuale, non un ampliamento fittizio delle fonti.**

## Politica del passaggio integrale
1. Per tutte le 491 persone verificare esistenza di una biografia pertinente, con cronologia e luoghi coerenti.
2. Cercare e registrare per ciascuna una voce biografica individuale Treccani, dove effettivamente presente. Inserire l'URL canonico verificato, non una pagina di ricerca o una homepage.
3. Dove Treccani non copra adeguatamente il caso, distinguere le fonti alternative autorevoli dalla voce Treccani; considerare l'estensione della policy di `consultazione.json` soltanto con etichette, attribuzioni e controlli coerenti.
4. Per le 157 descrizioni provvisorie sostituire il testo con un profilo individuale basato sulle fonti; per le altre persone verificare completezza senza riscritture superflue.
5. Verificare collegamenti verso percorsi dell'Atlante, ascolti e bidirezionalità separatamente dalle relazioni storiche.
6. Validare automaticamente ID dei nodi, voci bibliografiche duplicate, URL sintattici ed estremi dei rapporti. Prove HTTP e browser si registrano separatamente.
7. Procedere per lotti operativi di **40 persone**; il perimetro globale resta di 491, quindi 12 lotti da 40 e un lotto finale da 11, sottraendo nei successivi solo le verifiche già chiuse.
8. Una scheda senza Treccani non deve ricevere una falsa citazione; una scheda con fonte accertata deve mostrare il link specifico.
9. Non riaprire altri audit, non alterare le lenti storiche né aggiungere relazioni ipotetiche.

## Limiti della ricognizione iniziale
I conteggi sono ricavati da dati del repository, non dimostrano ancora l'accessibilità HTTP di ogni URL, né la fedeltà filologica di tutte le sintesi né un test visuale delle 491 carte. I 113 profili inseriti non equivalgono a 113 fonti individuali controllate.
