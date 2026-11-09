# Checkpoint 22 — Tassonomia conservativa dei predicati delle relazioni fra persone

**Data:** 10 novembre 2026  
**Status:** staging, triage lessicale preliminare, non certificazione storica né ontologia definitiva.

## File e risultati

- `VOCABOLARIO_PREDICATI_CHECKPOINT22_2026-11-10.json`: tutte le **622** denominazioni letterali dei predicati preservate, con famiglia di revisione proposta, candidati alternativi, indizio di eventuale mediazione attraverso opera/evento e permesso di attraversamento **sempre negato** finché non vi sia convalida individuale.
- `TRIAGE_SEMANTICO_ARCHI_CHECKPOINT22_2026-11-10.json`: **789** indici per arco, con classe provvisoria e riferimento all'inventario Checkpoint21. Testi originali `forward/reverse`, note, fonti rimangono nelle 8 partizioni originarie della federazione e non devono essere rimpiazzati dal `kind` sintetico.

| Famiglia provvisoria | Predicati | Archi |
|---|---:|---:|
| Formazione/insegnamento | 107 | 227 |
| Trasmissione, influenza, ricezione | 118 | 137 |
| Mediazione/contesto da esaminare individualmente | 104 | 109 |
| Trasformazione del materiale musicale | 67 | 67 |
| Rapporto professionale e istituzionale | 57 | 60 |
| Produzione e creazione condivisa | 43 | 53 |
| Parole, musica, libretti | 40 | 48 |
| Contatto biografico e documentario | 40 | 42 |
| Esecuzione e interpretazione | 27 | 27 |
| Dedica, omaggio, commemorazione | 13 | 13 |
| Critica, storiografia e confronto | 4 | 4 |
| Parentela | 2 | 2 |
| **Totale** | **622** | **789** |

**Attenzione:** i conteggi si riferiscono alle stringhe del predicato (e all'arco a cui sono assegnate), non alla verità della relazione o a una nuova tassonomia storico-musicale certificata. Le famiglie sono **code di revisione**, non etichette pubbliche.

## Correzione interna eseguita

La prima versione dello script ha erroneamente riconosciuto `zio` come sottostringa in `composizione`, `ricezione`, `collaborazione`. Prima di concludere, sono stati riclassificati **259 predicati** mediante una condizione restrittiva di parola intera per gli indicatori di parentela. I file JSON sono stati riscritti e i conteggi precedenti sono invalidati. Questo è un esempio del motivo per cui un parser puramente lessicale non può confermare rapporti storici.

## Protocolli interpretativi

1. **Persona↔persona diretto:** ammissibile soltanto con fonte pertinente, predicato univoco, cronologia plausibile, direzione e spiegazione. Es. insegnamento documentato, parentela, collaborazione attestata.
2. **Persona→opera/evento→persona:** mantenere la mediazione; non trasformare ricezione di una partitura, dedica, orchestrazione, citazione o adattamento in rapporto personale. La visualizzazione può mostrare il percorso esplicito, non affermare un legame biografico.
3. **Comunità di genere, scuola, epoca, istituzione:** può spiegare il contesto ma non sblocca ramificazioni indiscriminate fra membri.
4. **Analogia, influenza presunta, confronti:** non certificare causalità; conservare frasi originale, attribuzioni e incertezza.
5. **Testi direzionali:** `forward` e `reverse` sono parte del patrimonio narrativo e devono essere testati separatamente dal nome della macro-famiglia.
6. **Attraversamento radicato:** ogni nodo successivo richiede un cammino di fatti specifici pertinente alla radice; non basta una relazione genericamente condivisa.

## Stato e lavoro successivo

**789/789 archi rimangono con gate chiuso nel nuovo triage.** Il Checkpoint18 conserva separatamente il test sentinella Leopold/Wolfgang: questo inventario non ne revoca le prove, ma non importa automaticamente nessun altro arco. Il Checkpoint22 NON modifica `grafo.json`, `index.html`, l'Atlante3D originario né la GUI. I 210 lotti di audit filologico restano intatti.

**Checkpoint23 proposto:** esame delle **104 etichette a revisione individuale** e delle famiglie con collisioni lessicali; poi revisione approfondita e documentata del sottoinsieme dei 233 archi con identità già riconciliate, con particolare attenzione a insegnamento, fatti mediati da opere, cronologie impossibili e bidirezionalità delle spiegazioni. Solo le relazioni certificate saranno candidate a un overlay generale, seguite da collaudo reale desktop/Android.
