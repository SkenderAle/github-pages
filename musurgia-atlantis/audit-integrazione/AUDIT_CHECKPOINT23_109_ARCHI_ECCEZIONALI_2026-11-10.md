# Checkpoint 23 — Revisione documentale preliminare di 109 archi a predicato eccezionale
**Data:** 10 novembre 2026 · **Branch:** main · **Ambiente:** audit-integrazione, non produzione.

## Materiale pubblicato
`TRIAGE_INDIVIDUALE_CHECKPOINT23_109_ARCHI_2026-11-10.json` (commit `41912cd9d425a6accad4c0a26928a60d76276ff0`): 109 archi su 104 predicati rimasti nella coda «da esame individuale» del Checkpoint22, rintracciati e confrontati con i payload originali delle otto partizioni federate e con gli ID del Checkpoint21. Copie delle spiegazioni `forward`, `reverse`, note, fonti, status legacy, estremi e indici d'origine incluse nel nuovo registro di revisione; nessuna modifica dei testi originali.

| Coda semantica | Archi |
|---|---:|
| Opera/evento mediato | 27 |
| Collaborazione creativa | 18 |
| Formazione | 17 |
| Ricezione e contesto | 16 |
| Contatto biografico | 11 |
| Istituzioni | 8 |
| Editoria | 6 |
| Testi e poesia | 5 |
| Ripresa esecutiva | 1 |
| **Totale** | **109** |

**Limiti:** sono raggruppamenti espliciti basati sulla lettura del predicato, **non** nuove prove storiche. 109/109 record hanno fonti URL dichiarate e testi bidirezionali originali, ma URL presente non significa fonte sufficiente a certificare il fatto. Tutti i gate di attraversamento restano chiusi.

## Esempi di cautele
- `fd:ms:74` Wagner→Schönberg, `crisi-del-linguaggio`: l'archivio parla di eredità armonica, non di contatto o insegnamento diretto. Classe «ricezione e contesto»; evitare la trasformazione in rapporto personale.
- `fd:ms:87` Schaeffer→Boulez, `ricerca-elettroacustica`: il testo originale menziona collaborazione nelle sperimentazioni; verificarne gli episodi e la fonte indipendente prima di autorizzare un arco attraversabile.
- `fd:ms:330` Cavalli→Barbara Strozzi, `precettore-attestato`: la nota originale rinvia alla dedica dell'op. II (1651); l'asserzione è storicamente specifica, ma deve essere verificata autonomamente prima di promuoverla.
- `poesie-winterreise`, `poesie-dichterliebe`, `poesie-morike-lieder`: relazione fra poeta e compositore **mediata da testi/opere**, non necessariamente collaborazione di persona.
- `retuschen-sinfonie-beethoven` e `retuschen-sinfonie-schumann`: distinguere le modifiche orchestrali e la loro ricezione da contatto personale fra autori di epoche diverse.

## Test reali eseguiti sul readback GitHub
**9/9 PASS:** 109 record, ID unici, 9 code, somma dei gruppi =109, 104 predicati distinti, ogni record con entrambe le frasi direzionali, indice originale, gate chiuso, array fonti. Tutti i 109 conservano URL fonte; questo NON costituisce una validazione filologica delle 109 affermazioni. Nessuna prova browser o Android.

## Prossima ripresa — Checkpoint 24
1. Confrontare prioritariamente i **233** archi Checkpoint21 fra persone già riconciliate con le fonti e il predicato specifico; registrare separatamente la validità dell'evento e la transitabilità.
2. Per i 554 archi con almeno una nuova identità, verificare prima la persona e poi l'arco. I 2 senza URL richiedono ricerca indipendente.
3. Definire un modello `persona→opera/evento→persona` per le relazioni realmente mediate, evitando di inventare nodi-evento quando la documentazione manca.
4. Integrare nell'overlay generale solo archi che superano identità, fonte, cronologia, direzione, pertinenza radicata. Collaudare la GUI dopo, non prima.

**Invarianti:** 210 lotti filologici intatti; nessuna fusione, nessuna modifica a `musurgia-atlantis/grafo.json`, `index.html`, `atlante3d/` o pagine Musurgia Mundi.
