# Musurgia Mundi — Quinto lotto: audit inverso dei generi teatrali e delle tecniche
Data: 19 ottobre 2026 · `main` · Commit precedente `a31f89afa734d4cbe12399ad7a64abaf2dc867c2`.

## Esito
La verifica ha ripreso le **categorie storiche prive di archi diretti**, con esempi di opere controllati su Treccani, BnF, teatri storici e INA-GRM.

| Categoria | Prima | Nuovi archi | Dopo |
|---|---:|---:|---:|
| Opera semiseria | 0 | 3 | 3 |
| Dramma giocoso | 0 | 3 | 3 |
| Intermezzo comico | 0 | 4 | 4 |
| Belcanto | 1 | 2 | 3 |
| Grand opéra | 3 | 3 | 6 |
| Opéra-comique | 2 | 5 | 7 |
| Tragédie en musique nella Francia barocca | 2 | 2 | 4 |
| Corale polifonico luterano del primo Cinquecento | 0 | 1 | 1 |
| Musica concreta | 2 | 1 | 3 |
| Musica elettronica | 9 | 1 | 10 |

**25 nuovi archi**, **1929 → 1954** in totale; **842 nodi**, senza modifiche alla loro consistenza numerica.
Integrità: nessun estremo inesistente, nessun arco diretto duplicato nelle dieci categorie trattate.

## Distinzioni editoriali
- `Opera semiseria`: diversa sia da opera buffa sia da opera seria; i tre esempi sono **La gazza ladra**, **La sonnambula**, **Linda di Chamounix**.
- `Dramma giocoso`: le etichette storiche di **Don Giovanni**, **Il matrimonio segreto** e lavori di **Paisiello** non sono dedotte da una generica comicità.
- `Intermezzo comico`: confrontare **Pergolesi** e **Paisiello** sulla medesima *Serva padrona*, senza confondere partiture; **La Dirindina** di Domenico Scarlatti non ebbe la prevista prima rappresentazione del 1715.
- `Belcanto`: pratica vocale, non movimento organizzato.
- `Grand opéra`: solo repertori effettivamente concepiti nel modello storico francese; **Aida** è menzionata come successiva ricezione, non posta sullo stesso piano di **Les vêpres siciliennes**.
- `Opéra-comique`: forma con parti recitate anche quando il soggetto è tragico (**Carmen**, **Médée**); non significa soltanto opera buffa.
- `Tragédie en musique`: recuperate anche **Jacquet de La Guerre** e **Marais**, evitando esclusioni delle musiciste.
- `Polifonia corale luterana`: relazione a **Johann Walter** e alla raccolta del 1524, distinguendo repertorio ed editoria.
- `Musica concreta` e `Musica elettronica`: distinzione storica editoriale riscritta nella descrizione. **Xenakis** praticò composizione su nastro al GRM, senza fargli attribuire l'invenzione della tecnica.

## Limiti e passaggi aperti
- Non sono stati generati archi di scuola da affinità stilistiche, né copiati quelli presenti nelle lenti specialistiche.
- L'audit resta selettivo; le categorie possono ancora avere autori pertinenti non censiti.
- Il teatro musicale di Brecht menziona **Hanns Eisler** ma non c'è ancora un suo nodo compositore nel grafo: introdurlo con protocollo completo di ammissione, non come pallina isolata.
- Resta da collaudare la resa visuale nel browser e da verificare la bidirezionalità con gli ascolti.
