# Musurgia Atlantis — Fase 2M, Lotto 18

9 novembre 2026 · audit non distruttivo, branch main

## Perimetro
10 ulteriori schede distinte da tutti i lotti precedenti. Sono verificate le categorie storiche nella misura documentata dalle fonti riportate, NON le equivalenze ad Atlantis o i singoli archi.

| Sorgente | Archi | Stato | Fonte |
|---|---:|---|---|
| scuola-nazionale-boema | 6 | category_supported | [Fonte](https://www.treccani.it/enciclopedia/le-scuole-nazionali_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/) |
| teatro-inglese-restaurazione | 6 | source_needed | fonte ancora da reperire |
| avanguardia-americana-indeterminazione | 5 | source_needed | fonte ancora da reperire |
| avanguardia-polacca-post-1956 | 5 | source_needed | fonte ancora da reperire |
| ballata-italiana-trecento | 5 | context_only | [Fonte](https://www.treccani.it/enciclopedia/i-generi-e-le-tecniche-della-musica-del-quattrocento_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/) |
| conservatori-russi-mosca | 5 | source_needed | fonte ancora da reperire |
| futurismo | 5 | source_needed | fonte ancora da reperire |
| musica-di-corte-estense-ferrara | 5 | source_needed | fonte ancora da reperire |
| musica-oratorio-romano-settecento | 5 | source_needed | fonte ancora da reperire |
| musica-viennese-illuminismo | 5 | source_needed | fonte ancora da reperire |

## Note e cautele
- Scuola nazionale boema: Smetana e Dvorak come esponenti nazionali boemi, non connessione automatica fra ogni compositore.
- Teatro musicale inglese della Restaurazione: Separare masque, semi-opera e produzioni della Restaurazione.
- Sperimentazione americana e indeterminazione: Indeterminazione tecnica e collaborazioni specifiche da distinguere.
- Nuova musica polacca dopo il 1956: Distinguere sonorismo, aleatorismo controllato e linguaggi individuali.
- Ballata polifonica italiana del Trecento: Fonte illustra la distinzione di forme nazionali, ma non certifica il repertorio specifico della ballata trecentesca.
- Tradizione compositiva del Conservatorio di Mosca: Istituzione, docenza e tradizione compositiva non equivalgono.
- Futurismo: Manifesto, arte dei rumori e singole opere sono entità differenti.
- Musica della corte estense a Ferrara: Servizio di corte documentato distinto dalla presenza in repertori locali.
- Oratorio e cantata nei salotti romani del primo Settecento: Oratorio e cantata non sono sinonimi; ambienti romani da documentare.
- Vita musicale viennese dell'Illuminismo: Contesto urbano-storico, non attraversamento generale fra autori.

## Gate di test specificati, NON eseguiti
prepare, byId, pivot selettivo, profondità I–V per tipologia, blocco attraversamenti generici, Node --live, hover desktop, tap Android restano da eseguire su staging isolato.

## Controlli di coerenza del registro
- PASS all_20_source_ids_real
- PASS no_prior_dossiers_repeated
- PASS distinct_new_ids
- PASS prior_210_preserved
- PASS no_merge_or_traversal
- PASS sources_not_fabricated

Nessun test Node/browser o validazione completa degli archi. Nessun JSON pubblico, pagina o script modificato. Nessuna fusione. Invariati 210 lotti storico-filologici, 3.856 archi legacy, 1.718 Atlantis, patrimoni editoriali/video/fonti.

## Prossima ripresa
Lotto 19: fonti specifiche per i dossier pendenti, adiacenze integrali, test effettivi di import reversibile, nessuna fusione pubblica prima della certificazione.
