# Musurgia Atlantis — Fase 2M, Lotto 11
**9 novembre 2026 · Branch `main` · Solo audit-integrazione; nessuna modifica alla produzione**

## Risultato effettivo

Controllate e classificate **27 coppie sorgente–target ancora aperte**, appartenenti a **18 concetti**. I 27 giudizi sono proposte semantiche, non prove esaustive di identità. Sono state ricondotte a un **registro unificato di 344 concetti** tutte le candidature lessicali e quelle conservate dai lotti precedenti: **107 coppie distinte** in tutto (27 Lotto 09 + 53 Lotto 10 + 27 Lotto 11), senza doppioni né coppie saltate.

I concetti con almeno un candidato sono **75**; gli altri **269** non ne hanno nel crosswalk del Lotto 08: non implica che siano assenti da Atlantis, e soprattutto **non** autorizza nuove corrispondenze arbitrarie. Le **24** associazioni pregresse sono preservate e riesaminate come parte della matrice complessiva; la presenza di un target NON è una convalida storica. I **210** `taxonomy.class` assenti nell'originale restano assenti, senza normalizzazione distruttiva.

## Distinzioni decisive

- **Genere e opera:** Sinfonia ≠ *Pastorale* di Beethoven o Terza di Bruckner; Suite ≠ *Peer Gynt* op. 46 né le suite di *Daphnis et Chloé*; Ouverture ≠ una delle singole ouverture *Leonore*.
- **Leonore/Fidelio, errore cronologico da prevenire:** *Leonore* n. 1 fu composta **nel 1807** per una prevista esecuzione praghese, mentre n. 2 appartiene al **1805** e n. 3 al **1806**: numeri non cronologici. Beethoven-Haus: https://www.beethoven.de/en/work/view/6601170042748928/ . Tenere i tre nodi-opera separati.
- **Sottogeneri non sinonimi:** Opera ≠ opéra-ballet (Treccani, https://www.treccani.it/enciclopedia/opera-ballet/ ), né opéra-bouffe (Larousse, https://www.larousse.fr/encyclopedie/musdico/op%C3%A9ra_bouffe/169398 ), né opera seria. Qualsiasi relazione di appartenenza deve essere esplicita.
- **Geografie e pratiche:** Minnesang è una specifica tradizione poetico-musicale germanica, non l'intero canto cortese (Treccani, https://www.treccani.it/enciclopedia/minnesanger/ ). Il mottetto non equivale all'isoritmia; il Jazz non si esaurisce nell'improvvisazione.
- **Forme storicamente plurali:** il ricercare documenta almeno la ricercata strumentale dal carattere improvvisativo e la forma imitativa polifonica (Treccani: https://www.treccani.it/vocabolario/ricercare1/ ). Non comprimere queste accezioni in un unico predicato generico.
- **Candidato di equivalenza non significa merge:** Sonata, Sinfonia, Lied, Oratorio, Ragtime, Ricercare, Opera generale ed altre etichette comuni restano con gate chiuso finché non siano confrontate le **definizioni complete** e gli archi.

## Rettifica esplicita della continuità

Nel Lotto 10 era stato indicato come ancora da eseguire il porting `relationSentence`: **questa indicazione era imprecisa**. Dal verbale della **Fase 2M Lotto 01** risulta che `ADAPTER_RELATIONSENTENCE_FASE2M_2026-11-08.cjs` era già stato costruito con copia letterale dell'algoritmo e **7.712 frasi** confrontate senza differenze in V8, su tutti i 3.856 archi legacy e due direzioni. Anche nel Lotto 02 erano state eseguite 14 asserzioni diagnostiche sulla preparazione della vista, e nel Lotto 03 erano stati eseguiti conteggi reali in V8. **Restano davvero aperti** Node `--live` da checkout, la parità delle etichette dopo `prepare` e il collaudo WebGL/Android; non ha senso rifare il porting già certificato come copia letterale.

## Test del presente lotto

- PASS — `source_concepts_344`
- PASS — `no_duplicate_review_in_lotto11`
- PASS — `all_new_pairs_in_existing_crosswalk`
- PASS — `all_crosswalk_pairs_covered`
- PASS — `unique_source_target_keys`
- PASS — `all_24_previous_target_references_retained`
- PASS — `no_identity_or_arc_certified`
- PASS — `every_source_accounted_for`
- PASS — `source_original_210_missing_taxonomy_preserved`
- PASS — `without_candidate_not_marked_absent`
- PASS — `no_public_writes_in_plan`

Questi **11** test sono controlli logici sui JSON già conservati in GitHub e sul nuovo registro. Non costituiscono certificazione dell'attendibilità delle identità, esecuzione Node o test dell'interfaccia.

## Stato e prossimo lavoro

**Invariati** `musurgia-atlantis/grafo.json`, `index.html`, `atlante3d/database/*`, pagine Mundi e renderer; **210 lotti** filologici, **3.856 archi** legacy, **1.718** Atlantis, spiegazioni direzionali, media, 207 associazioni e 537 ancore preservati.

**Fase 2M Lotto 12:** per i **269** concetti privi di candidato e per i candidati di equivalenza residui, ricerca non lessicale con definizioni, ruoli e fonti; controllare relazioni specifiche e tipologie, niente ponti universali. Reimpiegare l'adapter letterale già testato e fare test reali del filtro radicato, precedenza PREPARE, `byId`, profondità per tipologia e pivot individuale; Node `--live` e UI browser/Android prima di qualsiasi integrazione.
