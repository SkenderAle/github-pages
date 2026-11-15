# Regressione tassonomica — Bach, Cantata, BWV 120
**15 novembre 2026 · STAGING · Lotto 2 Flaminio BLOCCATO**

## Caso di controllo
- Radice persona: `atlantis::pers:bach`
- Genere canonico di navigazione: `atlantis::senso:cantata` (include il riferimento legacy Mundi `genere-cantata` tramite crosswalk)
- Composizione del Lotto 1: `flaminio::fl49:jsbach:bwv120`, *Gott, man lobet dich in der Stille* BWV 120.
- Relazione diretta autore→opera preesistente nel grafo di staging: **conservare**.

## Nuove relazioni
1. `curated-l01-bach-cantata-attested`: Bach → Cantata, attestata dalla composizione BWV 120.
2. `curated-l01-bwv120-genre`: Cantata → BWV 120, relazione `opera_appartiene_al_genere_cantata`.

Fonti:
- https://www.carus-verlag.com/musiknoten-und-aufnahmen/johann-sebastian-bach-gott-man-lobet-dich-in-der-stille-3112000.html
- https://www.bachvereniging.nl/en/bwv/bwv-120

Nessun nuovo nodo e nessun movimento autonomo inventato. Il predicato autore→genere NON si eredita automaticamente da tutte le opere di Bach. Le varianti BWV 120a e BWV 120b non sono la BWV 120 e non vengono fuse per titolo.

## Prova UI richiesta
Ricercare Bach e selezionare la BWV 120 con un clic. Nella sottovista radicata dovrebbero essere presenti Bach, Cantata e BWV 120 con i due archi curati e il legame diretto preesistente. La selezione della BWV 120 deve mostrare sempre la sua etichetta, anche con «Etichette: solo generi e forme».

Gli archi devono esporre `rationale`, stato `CURATED_STAGING_SOURCE_NOTES` e fonti alla selezione o al passaggio del mouse.

## Stato
I nuovi archi sono stati integrati nel crosswalk consumato dal builder e il relativo gate numerico è stato adeguato da 31 a 33 relazioni semantiche curate. Non ancora verificato nel browser e non certificato un collaudo integrale del Lotto 1. Il grafo pubblico resta invariato. Questa regressione è il modello per ripetere la verifica su altre opere individuali.
