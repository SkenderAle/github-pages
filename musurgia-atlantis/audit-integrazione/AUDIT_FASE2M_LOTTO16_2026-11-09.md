# Musurgia Atlantis — Fase 2M, Lotto 16
**9 novembre 2026 | audit storico-documentale non distruttivo sul branch main**

## Perimetro
Seconda tranche di **10** schede del registro di 210, nessuna duplicata rispetto alle 10 del Lotto 15. La revisione determina la qualità dell'evidenza sulla **categoria storica**, non certifica la presenza/assenza del target Atlantis, né uno degli archi incidenti. **20/210** dossier affrontati complessivamente, **190** ancora da sottoporre a verifica documentale; dei 10 nuovi: **4** con fonte diretta storico-tipologica, **2** con supporto solo contestuale/parziale, **4** con fonte specifica indipendente ancora da ottenere.

| ID | N. archi legacy | Stato | Evidenza |
|---|---:|---|---|
| `conservatorio-pietroburgo` | 8 | supported_historical_type | [Fonte](https://conservatory.ru/about-conservatory) |
| `generazione-1880-musica-italiana` | 8 | supported_historical_type | [Fonte](https://www.treccani.it/enciclopedia/gian-francesco-malipiero/) |
| `forma-preludio` | 8 | supported_historical_type | [Fonte](https://www.treccani.it/enciclopedia/preludio/) |
| `conservatori-napoletani-seicento-settecento` | 7 | supported_historical_type | [Fonte](https://www.treccani.it/enciclopedia/napoli_%28Enciclopedia-Italiana%29/) |
| `tradizione-operistica-francese-ottocento` | 15 | partial_context_evidence | [Fonte](https://www.metopera.org/globalassets/discover/education/access-opera/educator-guides/ballo-aoguide.pdf) |
| `tradizione-operistica-italiana-ottocento` | 12 | partial_context_evidence | [Fonte](https://www.metopera.org/globalassets/discover/education/access-opera/educator-guides/ballo-aoguide.pdf) |
| `tradizioni-organistiche-tedesche` | 13 | pending_independent_documentary_evidence | da reperire |
| `tradizione-inglese-elisabettiana` | 10 | pending_independent_documentary_evidence | da reperire |
| `stile-galante-e-sensibile` | 8 | pending_independent_documentary_evidence | da reperire |
| `avanguardia-italiana-secondo-novecento` | 9 | pending_independent_documentary_evidence | da reperire |

## Casi conclusivi e cautele
- **Conservatorio di San Pietroburgo**: fondazione 1862 documentata dall'istituzione stessa; relazioni insegnante, allievo, corso e conservatorio vanno documentate autonomamente.
- **Generazione dell'Ottanta**: categoria storiografica italiana, documentata anche per Malipiero, Casella, Respighi e Pizzetti; NON una società con appartenenza amministrativa.
- **Preludio**: genere e funzione introduttiva variabile, talora opera autonoma; non confondere il genere con il preludio di una singola composizione.
- **Quattro conservatori di Napoli**: il nodo aggregatore NON sostituisce quattro istituzioni storiche individuali; le date di istituzione musicale possono differire dalla fondazione originaria assistenziale.
- **Teatro francese e italiano ottocentesco**: la guida Metropolitan documenta in dettaglio il sottogenere *grand opéra* e un caso di influenza sul Verdi maturo, NON copre automaticamente tutte le tradizioni nazionali dell'Ottocento.
- **Quattro dossier ancora aperti**: tradizioni organistiche tedesche, tradizioni fra Tudor e Stuart, stile galante/empfindsamer Stil, avanguardia italiana del secondo Novecento. Le osservazioni di disambiguazione sono piste di verifica, non affermazioni già autonomamente certificate in questo lotto.

## Controlli effettuati
- PASS `all_selected_from_210`
- PASS `no_lotto15_duplicate`
- PASS `unique_ids`
- PASS `no_unverified_identity_approved`
- PASS `no_generic_transitive_traversal`
- PASS `historical_evidence_gaps_explicit`
- PASS `all_210_still_preserved`

**Limiti:** impossibile considerare confrontate integralmente le adiacenze Atlantis e gli archi originari in questo lotto; nessun target ID stabilito. Non eseguiti test Node `--live`, browser/Android, `prepare`/`byId` e pivot individuale. Niente pubblicazione di grafi o UI. Il Lotto 01 conserva già il test dell'adapter `relationSentence` sulle 7.712 stringhe V8.

## Prossimo Lotto 17
Prima chiudere le quattro fonti pendenti del Lotto 16, poi vagliare nuove schede per tipologia e centralità; perseguire confronto integrale documentato delle adiacenze, collegamenti ai materiali del sito, spiegazioni `forward/reverse`, note e fonti. Predisporre pacchetto di test reversibile senza toccare il grafo pubblico: `prepare`, `byId`, pivot, livelli I–V per tipologia; Node `--live`, browser e Android separatamente. Salvaguardare i 210 lotti filologici, 3.856 archi legacy, 1.718 Atlantis, 509 persone, 115 media/207 associazioni e 537 ancore.
