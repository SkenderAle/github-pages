# Checkpoint 21 — Crosswalk globale persone e triage degli archi persona↔persona

**Data:** 10 novembre 2026  
**Branch:** `main`  
**Ambito:** esclusivamente `musurgia-atlantis/audit-integrazione/` — nessuna modifica a grafo pubblico, JS/GUI o Atlante originario.

## Risultati materializzati

- `CROSSWALK_GLOBALE_PERSONE_CHECKPOINT21_2026-11-10.json`: **509/509** persone Mundi indicizzate in corrispondenze individuali, con namespace originario, ID storico sorgente e ID destinazione proposta. **162** corrispondenze d'identità già documentate dai lotti storici, **347** nuovi ingressi ancora candidati; **509 ID target distinti**. Tutti i 297 record-persona Atlantis originali preservati.
- `INVENTARIO_ARCHI_PERSONA_CHECKPOINT21_2026-11-10.json`: **789/789** archi con entrambi gli estremi persona/compositore legacy, tutti provvisti di ID originario, origine, indice di archivio, estremi originali e target proposti, predicato/kind, indicatori di testi e fonti e gate preliminare.
- **9** archi provengono da `mundi_base`, **780** da `mundi_specialist`. Nessuno dall'estensione in questa selezione strutturale.
- **622 denominazioni diverse** nel campo `kind`/`relation`, frequentemente descrittive anziché tassonomiche (es. `citazione-musicale-come-un-agnello`): NON rimpiazzare il testo originale con categorie grossolane. Progettare una tassonomia di predicati sovraordinati con mantenimento del predicato specifico, descrizioni `forward/reverse`, note e fonti.

## Gate: non certificano la verità storica

| Gate preliminare | Conteggio | Significato |
|---|---:|---|
| `needs_identity_review` | 554 | almeno uno dei due estremi è nuova persona candidata, non ancora certificata |
| `needs_edge_authority_review` | 233 | entrambi gli estremi riconciliati; la fonte e l'asserzione dell'arco richiedono verifica autonoma |
| `needs_independent_source` | 2 | arco senza URL fonte nel payload selezionato, ricerca di fonte necessaria |
| **Totale** | **789** | **zero archi promossi** |

I due casi senza URL possono comunque avere documentazione altrove; l'assenza di una URL è segnale di triage, non prova di falsità. Un URL già presente non certifica l'arco.

## Sentinelle e interpretazione

- `fd:ms:0` Leopold Mozart → Wolfgang: arco didattico già discusso in Checkpoint18. La posizione di Leopold resta ID candidato nel crosswalk generale; la sentinella dell'overlay possiede prova specifica indipendente e non deve essere persa.
- Wolfgang / Johann Christian Bach, Padre Martini, Giuseppe Sarti: proposte persona↔persona, da interpretare come influenza, lezioni o citazione specifica e **non** come generici archi equivalenti di «maestro».
- Mozart / Haydn: `modello-quartettistico` e `dedica-artistica-documentata` sono fatti diversi e non si fondono per la sola coincidenza di estremi.
- Mozart / Bach, Händel, Beethoven, Rossini: distinguere ricezione di opere, elaborazione, citazione e modello artistico da contatti biografici diretti e impossibili.

## Verifiche automatiche eseguite

Dopo la pubblicazione, entrambe le nuove risorse sono state rilette direttamente dal repository. **11/11 controlli PASS**: 509 record; unicità dei 509 ID sorgente e target; partizione 162+347; 789 archi e unicità; 100% estremi riconciliati; tutti i gate chiusi; riferimenti agli indici originali presenti; origini attese; conteggi coerenti. Questi sono test di **integrità strutturale e readback**, non certificazione storico-filologica né prova GUI.

## Decisione e prossimo lotto

1. Creare un vocabolario stabile e non distruttivo di **macro-predicati** (parentela, insegnamento, collaborazione, ricezione, trascrizione/rielaborazione, dedica, testimonianza, appartenenza contestuale, confronto, ecc.) con conservazione dei 622 predicati letterali.
2. Separare ogni relazione persona↔persona direttamente documentata dalle relazioni **mediate da opera/evento** e dalle corrispondenze **non causali**. Non trattare una somiglianza come discendenza.
3. Verificare prioritariamente i **233** archi con identità già riconciliate e poi i **554** che richiedono nuovi ingressi, curando insieme biografia e predicato. Rendere esplicito se un predicato è transitabile nella rete radicata I–V.
4. Solo dopo, generare overlay **generale** con subset certificato e test di regressione per Mozart, Leopold, J. C. Bach, Gabrieli, Schütz, Bach, Vivaldi. Non attraversare mai generi, epoche, scuole e capitoli come ponti automatici.
5. UI etichette/hover desktop/tap Android ancora da collaudare sul browser: nessuna affermazione di funzionalità pubblica verificata.

**Invarianti:** 210 lotti storico-filologici preservati; nessun JSON pubblico, pagina narrativa o GUI pubblica modificati; nessuna fusione di archi né persone.
