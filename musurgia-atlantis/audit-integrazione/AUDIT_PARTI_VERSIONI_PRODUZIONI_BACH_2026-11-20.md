# Gate opere composte, parti, versioni e produzioni sceniche
## Musurgia Mundi / Atlantis / Flaminio — 20 novembre 2026

**Ambito:** solo `musurgia-atlantis/audit-integrazione/` su `main`. Nessuna modifica ai grafi pubblici; Lotto 2 Flaminio ancora **BLOCCATO**.

### Origine del gate
L'audit trasversale delle 137 radici specializzate con 713 occorrenze di archi originali non visualizzati ha individuato **13 collegamenti diretti a nodi di categoria «Opere»** rimasti fuori dalle rispettive proiezioni. Non sono 13 mancanze di catalogazione: tutti i relativi archi esistono già nel database Atlantis originale.

I tredici casi sono stati separati per **natura ontologica**:
- **8 relazioni specifiche verificate** fra partitura, suite derivata, sua parte o produzione scenica;
- **2 relazioni verificate incentrate su Bach**, con verbi «trascrivere» e «presentare una raccolta manoscritta», da non assimilare indiscriminatamente a «compone»;
- **3 confronti editoriali non causali** (`L02-A25`, `L05-A018`, `L04-A05`), da conservare nell'archivio consultabile ma non attivare come automatismi di appartenenza, derivazione o autore.

### Otto raccordi originali nuovamente percorribili in Scena/Danza

| Arco Atlas | Radice specifica | Entità connessa | Senso originale |
|---|---|---|---|
| `L06-A039` | Prima produzione Broadway 1957 | *West Side Story* | `ha_prima_produzione_broadway` |
| `L05-A045` | *Daphnis et Chloé*, Suite n. 1 | Partitura *Daphnis et Chloé* | `ha_suite_orchestrale_estratta` |
| `L05-A046` | *Daphnis et Chloé*, Suite n. 2 | Partitura *Daphnis et Chloé* | `ha_suite_orchestrale_estratta` |
| `L05-A057` | *Il mandarino meraviglioso*, suite 1927 | Partitura scenica | `rielabora_in_suite_orchestrale` |
| `L05-A053` | *La Valse*, allestimento Rubinstein/Nižinskaja 1929 | *La Valse* di Ravel (1920) | `viene_allestita_in` |
| `L05-A036` | *La sagra della primavera*, coreografia Bausch 1975 | Partitura della *Sagra* | `usa_musica_in_nuova_coreografia` |
| `L05-A030` | *La sagra della primavera*, prima coreografia 1913 | Partitura della *Sagra* | `ha_prima_coreografia` |
| `L03-A02` | Finale delle *Creature di Prometeo*, op. 43 | Balletto integrale | `contiene_numero` |

Gli otto archi Atlantis registravano `historical_verified_independently=true` e `verification_status=confermato_da_fonti_esterne`, con un predicato specifico. La proiezione `sceneScopedProjection` ora li riutilizza soltanto previa corrispondenza esatta fra ID originale, predicato e stato di verifica.

**Vincolo radicato:** il collegamento fra due entità è percorribile soltanto come **arco diretto dalla radice corrente**. Un focus sulla partitura raggiunta dalla Suite n. 1 non recupera automaticamente il collegamento originale con la Suite n. 2. Il test di regressione controlla proprio `L05-A046` in tale situazione. Nessuna fusione né ricostruzione dell'identità delle opere.

### Due azioni catalografiche di Bach
La proiezione radicata di Bach era predisposta soprattutto alle relazioni `compone` e assimilabili, oscurando così due legami originali **specificamente verificati**:

- `L175-A02`: Bach **trascrive per organo** BWV 593, dal concerto in la minore di Vivaldi. Conservare il verbo **trascrive**, non reinterpretarlo come paternità della composizione di Vivaldi.
- `L177-A01`: Bach **presenta nel manoscritto del 1721** sei concerti con più strumenti (i Concerti brandeburghesi). La data riguarda la dedica/presentazione della raccolta, non necessariamente la composizione di ogni singolo concerto.

I due archi sono ammessi soltanto se corrispondono esattamente a ID, nodo opera, predicato e `verification_status=confermato_da_fonti_esterne_consultate`. Non si allarga la regola generale sui cataloghi dei compositori.

### Tre confronti non promossi
Restano consultabili nell'archivio delle relazioni originali fuori dalla vista, ma **non** entrano nella proiezione musicale radicata:
1. `L02-A25`: *Les Petits Riens* ↔ Ballet d'action e pantomima, confronto storicamente qualificato ma non appartenenza di genere certificata.
2. `L05-A018`: *Prélude à l’après-midi d’un faune* ↔ riuso di una partitura da concerto per la danza, confronto didattico non causale.
3. `L04-A05`: *Il Canto degli Italiani* ↔ *Suona la tromba* (1848), due opere diverse con testi e musiche di paternità distinte.

### Verifiche eseguite sul dataset reale
Eseguito integralmente il corpo dell'harness `TEST_GATE_RADICATO_POST_UNIFICAZIONE_2026-11-18.mjs` in V8 con letture virtualizzate **dai 17 blob JSON reali** del branch `main`, usando il builder originale e l'HTML di staging aggiornato. Il parser V8 del corpo del modulo HTML ha confermato anche la correttezza sintattica (import estratto per sola compilazione).

**211 asserzioni: PASS.** Sono stati controllati tutti gli otto archi Scena/Danza, entrambi i collegamenti documentati a Bach, la mancata propagazione dalla Suite n. 1 alla Suite n. 2, la permanenza dei tre confronti fuori dal percorso e l'integrità preesistente.

| Misura dopo l'intervento | Valore |
|---|---:|
| Sorgenti JSON reali | 17 |
| Nodi | 2.897 |
| Archi | 8.743 |
| Schede bibliografiche Flaminio | 500 |
| Archi orfani | 0 |
| ID arco duplicati | 0 |

**Commit visualizzatore:** [937c0b1](https://github.com/SkenderAle/github-pages/commit/937c0b134047f389c6d021636d0b6ac463b0d090).  
**Commit regressioni:** [9e0d6d2](https://github.com/SkenderAle/github-pages/commit/9e0d6d27656097bc526173915f333b21f43c0672).

### Limiti, decisioni e prossimi gate
**Non si dichiara** PASS da CLI Node dell'intera batteria degli altri harness, né collaudo del browser DOM/WebGL/Canvas o Android; test del corpo in V8 e compilazione sintattica non sostituiscono queste prove. Non sono stati ricertificati gli altri archi di Mundi e Atlantis, né le identità/versioni delle 500 schede Flaminio.

L'archivio on-demand permette già di leggere altri collegamenti diretti senza dilatare la rete visualizzata; il prossimo audit va dedicato in modo prioritario ai **531 riferimenti verso persone** per discriminare presenza bibliografica, coltivazione di genere, attribuzione opera-specifica e semplice confronto editoriale, senza inferire una composizione da un generico autore→genere.

**Stato:** Lotto 1 OPEN; Lotto 2 BLOCKED; grafi pubblici invariati.
