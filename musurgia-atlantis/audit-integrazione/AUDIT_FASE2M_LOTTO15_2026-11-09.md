# Musurgia Atlantis — Fase 2M, Lotto 15
**9 novembre 2026 · Prima tranche di ricerca storica non distruttiva**

## Verifiche effettive
Selezionate 10 schede ad alta priorità dal registro integrale di 210 del Lotto 14. Confrontata la categoria storica con fonti di riferimento esterne, senza pretendere di aver certificato corrispondenze a ID Atlantis o verificato singolarmente gli archi originali. Tutte le conclusioni riguardano l'esistenza/differenziazione del **concetto storico**, non la piena identità tra grafi.

| Scheda legacy | Archi sorgente | Esito storico | Fonte |
|---|---:|---|---|
| `gruppo-dei-sei` | 15 | historical_collective | [Riferimento](https://www.treccani.it/enciclopedia/gruppo-dei-sei/) |
| `gruppo-dei-cinque` | 14 | historical_collective | [Riferimento](https://www.treccani.it/enciclopedia/gruppo-dei-cinque/) |
| `genere-melodie-francese` | 10 | historical_vocal_genre | [Riferimento](https://edutheque.philharmoniedeparis.fr/EXPLOITATION/ermes/player.aspx?id=0760355) |
| `tradizione-melodie-francese` | 9 | historical_repertoire_tradition | [Riferimento](https://edutheque.philharmoniedeparis.fr/EXPLOITATION/ermes/player.aspx?id=0760355) |
| `genere-rapsodia` | 10 | musical_form_genre | [Riferimento](https://www.treccani.it/enciclopedia/rapsodia/) |
| `forma-notturno` | 8 | musical_form_genre | [Riferimento](https://www.treccani.it/enciclopedia/notturno/) |
| `forma-toccata` | 9 | musical_form_genre | [Riferimento](https://www.treccani.it/enciclopedia/forme-musicali_%28Enciclopedia-dei-ragazzi%29/) |
| `conservatorio-parigi-primo-ottocento` | 7 | historical_institution_with_temporal_scope | [Riferimento](https://www.conservatoiredeparis.fr/en/school/le-conservatoire/history) |
| `tradizione-viennese-classica` | 9 | historiographical_context | [Riferimento](https://www.treccani.it/enciclopedia/classicismo_%28Enciclopedia-Italiana%29/) |
| `genere-ballata` | 6 | historically_polysemous_genre | [Riferimento](https://www.treccani.it/enciclopedia/ballata/) |

## Distinzioni semantiche da non perdere
- **Les Six:** sei membri documentati (Auric, Durey, Honegger, Milhaud, Poulenc, Tailleferre), mentre Satie e Cocteau sono figure di riferimento esterne al sestetto. Identità collettiva non autorizza attraversamento arbitrario fra i membri.
- **Gruppo dei Cinque:** Balakirev, Borodin, Cui, Musorgskij e Rimskij-Korsakov, ma appartenenza a una corrente non prova legami personali individuali tra ciascuna coppia.
- **Mélodie francese:** genre `genere-melodie-francese` e contesto storico `tradizione-melodie-francese` richiedono livelli semantici distinti, almeno finché non siano esaminate le definizioni e le adiacenze originali.
- **Rapsodia, toccata, notturno:** le definizioni di forma/genere non equivalgono a opere specifiche; per notturno la trasformazione d'uso nel Settecento/Ottocento richiede ambito cronologico.
- **Conservatorio di Parigi:** ente storico fondato nel 1795, diverso da una generica scuola stilistica; distinguere istituzione, epoca e rapporti verificati individualmente.
- **Classicismo viennese** e **ballata:** categorie storiografiche e ambiguità terminologiche da preservare senza inferire rapporti interpersonali o identità con un'opera.

## Test eseguiti (solo integrità dati)
- PASS — `all_cases_in_lotto14`
- PASS — `unique_ids`
- PASS — `all_sources_recorded`
- PASS — `all_identity_gates_closed`
- PASS — `unreviewed_210_preserved`
- PASS — `correct_melodie_separation`

**Limite operativo:** non è stato possibile esaminare in modo completo con questo lotto il payload integrale degli archi incidenti e del grafo Atlantis tramite endpoint per grandi file. L'assenza di ID target nel presente file indica **mancata verifica, non assenza nel grafo**. I dati pubblici non sono cambiati; i test `prepare` / `byId`, pivot selettivo, profondità, Node `--live`, browser/Android **non sono stati eseguiti**. I 210 lotti storico-filologici e le 3.856 relazioni legacy rimangono protetti.

## Prossima ripresa — Lotto 16
Proseguire con una seconda tranche storico-documentale; acquisire un accesso completo verificabile alle due adiacenze (legacy e Atlantis) prima di approvare qualsiasi equivalenza, confrontando predicati, direzioni, cronologia, fonti e bidirezionalità. Trattare la messa generica, già documentata nel Lotto 13, come caso trasversale senza duplicare i 210. Poi preparare test eseguibili di `prepare`, `byId`, pivot e gate I–V, senza fusione dei grafi pubblici.
