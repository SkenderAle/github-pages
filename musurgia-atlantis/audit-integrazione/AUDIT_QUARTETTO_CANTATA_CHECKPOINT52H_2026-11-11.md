# Musurgia Atlantis — Checkpoint 52H
## Quartetto e Cantata: invarianti di qualità e riusi intergenere

**Data:** 11 novembre 2026 · **Branch:** main · **Ambiente:** solo `musurgia-atlantis/audit-integrazione/`.

### Continuità
Il Checkpoint 52G risultava già presente quando è iniziata questa ripresa: `bdf3e72c52edc09407c02ba9d7490a91d4303093` recupera la Sonata op.1 di Alban Berg dalle prove di organico Flaminio17 e assegna al sottogenere Sonata per pianoforte due indici non transitivi. I thread del 52G erano già stati aggiornati. Non è stato duplicato il lotto.

### Verifiche effettuate sui manifesti reali
I quattro JSON originali dei lotti **42, 43, 44, 51** sono stati riletti su GitHub e valutati con **otto asserzioni**, tutte PASS. Registro macchina: `REGRESSIONE_QUARTETTO_CANTATA_CHECKPOINT52H_2026-11-11.json`, commit `1d4fbb46e071a747c28f090c5587de0742d7d613`.

- **Quartetto**: `atlas:gf:quartetto` è il genere padre e `legacy:gf:genere-quartetto-archi` è il ramo documentato per archi.
- **Lotto43, 25 opere**: 21 con pianoforte, 3 per flauto e archi, 1 per oboe e archi. Non sono sinonimi o uno stesso organico.
- **K 285b**: attribuzione discussa; la scheda resta in `review_queue`, nessuna attribuzione automatica a Mozart. Il frammento K 493a è da distinguere dalle opere complete.
- **J. C. F. Bach B 37–42**: sono sei quartetti per flauto, violino, viola e **basso continuo**, non un organico automaticamente con violoncello solista. Gli altri sei B 43–48 sono quartetti per archi. Il frammento I4 non è una tredicesima composizione completa.
- **BWV 189**: attribuzione incerta, `composer_id:null`, stato HOLD e nessun arco Bach automatico.
- **BWV 200**: solo aria/frammento superstite (`one_surviving_aria_fragment`), non cantata completa.
- **Terzo Brandeburghese BWV 1048 → BWV 174**: arco `fl51:reuse:11` attestato per riutilizzo di movimento, `root_permission:specific_work_nontransitive`; non rende identici il concerto e la cantata.

### Protezione introdotta nel codice
**Commit:** `00d1cf4b6614731ceebdbe9c23bf441855b46908`.
Dentro `PREVIEW_RADICATA_CHECKPOINT06.html`, la suite `AtlantisCheckpoint52D.run()` ora produce anche `catalogue_invariants_52h` con **sei controlli federati** che, dopo la pipeline completa, verificano automaticamente:
1. sei quartetti J. C. F. Bach con continuo;
2. esclusione di K285b dall'attribuzione automatica Mozart;
3. HOLD e mancata attribuzione di BWV189;
4. natura frammentaria di BWV200;
5. arco specifico BWV1048→BWV174;
6. gerarchia Quartetto → Quartetto per archi.

Un FAIL entra nel conteggio complessivo degli errori di 52D. Gli archi non sono stati alterati, sono stati aggiunti **controlli**, non nuove interpretazioni.

### Stato dei test e limiti
**PASS**: otto controlli su manifesti originali, sintassi JavaScript verificata nel caricamento della patch. **NON ESEGUITO**: suite completa nel browser con tutti i 24 JSON, attestazione globale di tutti gli archi dopo la federazione, test grafici WebGL/mobile. Il 52D rimane dunque **NON CERTIFICATO**, anche dopo questa aggiunta. Nessuna modifica a `musurgia-atlantis/grafo.json` né `musurgia-atlantis/index.html` di produzione.

### Prossima ripresa
Eseguire la suite runtime con `catalogue_invariants_52h` e verificare le radici Quartetto, per archi, con pianoforte, per flauto, J. C. F. Bach, BWV174 e BWV1048. Poi proseguire con le effettive anomalie, senza ricatalogare opere già presenti né promuovere dati sospesi.
