# MUSURGIA MUNDI — Audit relazionale 02 · Rubinstein e Čajkovskij

Data: 8 ottobre 2026. Ramo: `audit-produzione-correttivo-01`. Parent verificato: `18e17eefd08d512a237d7ec45ebb4ba8624ca6c6`.

## Perimetro e metodo
Riesame puntuale della duplicazione semantica già segnalata nel primo macroblocco. Nessuna modifica al grafo, alle lenti, all'interfaccia, a `main` o alle relazioni esistenti. I due identificativi persistenti rimangono intatti: questo rapporto propone soltanto una futura riconciliazione semantica senza perdita di provenienza.

## Record esaminati
1. `lotto03-form-rubinstein-tchaikovsky`, gruppo `formazione`, `kind=maestro-allievo`, Anton Rubinstein → Pëtr Il'ič Čajkovskij. Nota: insegnamento di composizione e orchestrazione; fonti: autobiografia e lettera 2854.
2. `audit20-rubinstein-tchaikovsky-formazione`, stesso gruppo, stessa direzione, `kind=strumentazione-e-composizione-conservatorio-pietroburgo`. Nota: strumentazione/composizione, esercizi svolti e successiva raccomandazione. Fonti: scheda biografica Anton Rubinstein e lettera 2854.

## Riscontro primario
Nell'autobiografia redatta nel 1889, Čajkovskij distingue espressamente:
- armonia, contrappunto e fuga studiati con **Nikolaj Zaremba**;
- strumentazione e composizione libera studiate **in parte con Anton Rubinstein**.

Fonte autobiografica: https://en.tchaikovsky-research.net/pages/Autobiography (testo inglese, paragrafo sulle lezioni al Conservatorio di San Pietroburgo; paragrafo corrispondente nel testo tedesco).

Fonti contestuali già registrate:
- https://en.tchaikovsky-research.net/pages/Anton_Grigoryevich
- https://en.tchaikovsky-research.net/pages/Letter_2854

Le due righe del database rappresentano quindi **una relazione docente-allievo reale**, non due insegnamenti indipendenti che richiedano altrettante frecce. Il secondo record specifica l'ambito disciplinare del primo. La testimonianza autobiografica sostiene direttamente la disciplina, con la sfumatura «in parte»: non attribuire a Rubinstein l'intera formazione compositiva di Čajkovskij.

## Delibera editoriale proposta, NON applicata
- Conservare entrambi gli ID come record di provenienza e storicizzazione.
- In una futura normalizzazione dei dati, rappresentare una sola relazione *visibile* fra Anton Rubinstein e Čajkovskij, di tipo `formazione`, con dettaglio disciplinare «strumentazione e composizione libera (in parte)».
- Collegare come evidenze i due record esistenti, mantenendo tutte le fonti e le note storiche, e distinguendo l'insegnamento di Zaremba.
- Non eliminare o fondere `kind` differenti prima che lo schema preveda una forma esplicita di alias/aggregazione semantica non distruttiva.
- La questione della raccomandazione e dell'invito presso il Conservatorio di Mosca va trattata separatamente dall'insegnamento a San Pietroburgo e confrontata con la testimonianza autobiografica sul ruolo di **Nikolaj Rubinstein** nell'offerta del posto.

## Esito
**1 coppia di record esaminata, 1 duplicazione semantica confermata, 0 archi rimossi, 0 cambi di stato, 0 nuovi collegamenti.** Questa è verifica delle testimonianze dichiarate, non collazione integrale di un corpus di carteggi. La questione rimane aperta esclusivamente sul piano dell'implementazione della normalizzazione del grafo.

## Prossima coda
Dopo la riconciliazione semantica, proseguire le 84 relazioni di formazione incidenti sul macro100 controllando direzione, grado di prova e fonte specifica. Distinguere sempre l'azione di formazione da influenza, patronato e successione istituzionale. Evitare nuove ricontabilizzazioni dei controlli qualità 01, 02 e 02b.
