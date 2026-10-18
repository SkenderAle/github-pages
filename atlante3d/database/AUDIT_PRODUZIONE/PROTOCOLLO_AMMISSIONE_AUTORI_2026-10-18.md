# Protocollo di ammissione di un autore in Musurgia Mundi

Data: 18 ottobre 2026 · Branch: main.

## Regola editoriale vincolante
L'inserimento di un nome NON equivale alla pubblicazione di un nodo.

1. **Identità e geografia:** nome, eventuali alias, epoca, paese, luoghi documentati (distinguere nascita e attività), coordinate con precisione dichiarata. Collegare al periodo e alla geografia, senza baricentri inventati.
2. **Forma, genere e pratica:** associare il repertorio pertinente a una forma, genere o istituzione realmente documentata. Non confondere paese e scuola artistica.
3. **Relazioni storiche:** famiglia, maestro/allievo, amicizia, committenza, incontri, corrispondenza, scuole, collaborazioni; ogni arco ha tipo, fonte, nota e due verbi prospettici. Quando non emerge una relazione, registrare «da investigare», non crearne una fittizia.
4. **Atlante e ascolti:** individuare schede specifiche, non sole macrocategorie. Il link reca titolo riconoscibile e URL con ancora puntuale; la pagina di destinazione offre il ritorno alla scheda di Musurgia.
5. **Fonti enciclopediche:** ove verificata, voce Treccani individuale; altrimenti sintesi redazionale esplicitamente attribuita all'Atlante.
6. **Fasi di ammissione:** bozza → contestualizzato (tempo e luogo) → connesso (forme e relazioni possibili) → integrato (rimandi bidirezionali) → pubblicabile dopo audit. Ogni lacuna deve restare tracciata.

## Verifica automatizzata
Eseguire: node atlante3d/database/validate-author-admission.mjs --new-id compositore-...

Il controllo blocca l'ammissione se mancano geografia, periodo, forma, ancoraggio specifico o ritorno dal sito. L'assenza di relazioni personali viene solo segnalata, NON colmata forzosamente. Esecuzione senza --new-id: censimento diagnostico del pregresso, senza mutazioni. Il controllo non dimostra l'affidabilità filologica delle fonti e non sostituisce il collaudo mobile.

## Risanamento di tre nodi sudamericani
- **Alberto Ginastera:** Argentina/Buenos Aires, Novecento, concerto per arpa e rapporto di formazione e corrispondenza con Aaron Copland. Fonte: https://www.cambridge.org/core/journals/journal-of-the-royal-musical-association/article/modern-latin-american-art-music-at-the-berkshire-music-center-at-tanglewood-194146/F48FF8D1D2C77DFC15B71250A717C240
- **Heitor Villa-Lobos:** Brasile/Rio de Janeiro, Novecento, concerto per chitarra e rapporto artistico con Andrés Segovia, comprensivo dei conflitti documentati. Fonte: https://www.cambridge.org/core/journals/journal-of-the-society-for-american-music/article/heitor-villalobos-and-the-traces-of-coloniality-in-andres-segovias-guitar-repertoire/27B94B0CBD7D875B4EC2FBCA1287187C
- **Ney Rosauro:** Brasile/Brasília, Novecento, concerto per marimba e formazione con Siegfried Fink. Fonte: https://pas.org/ney-rosauro/

Aggiunti due nodi geografici, tre nodi di forma e due persone storiche, tre relazioni fontate. Le schede dell'audioteca già collegate hanno ora un ritorno esplicito all'autore; nessun lettore modificato.
