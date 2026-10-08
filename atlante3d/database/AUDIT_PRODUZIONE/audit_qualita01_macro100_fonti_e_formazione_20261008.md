# MUSURGIA MUNDI · Audit di qualità 01 — fonti e formazione, primo macroblocco

Data: 8 ottobre 2026. Ramo `audit-produzione-correttivo-01`. Commit genitore `0b2c986fb0e3cbe3e8862751fbdde942167f4a09`.

## Principio e perimetro
Nel primo macroblocco di 100 ID persistenti sono presenti **218** archi produttivi e **377** relazioni specialistiche incidenti. Questo passaggio NON è revisione completa dei 595 rapporti incidenti, ma un audit critico selettivo con correzioni concrete e dimostrate.

**Risultati:** 8 aggiornamenti bibliografici di archi produttivi già presenti; due rapporti formativi rettificati nella certezza/interpretazione. Nessun nuovo arco e nessuna relazione eliminata.

## Produzione: 8 riscontri specifici
Gli archi preesistenti citavano in più casi voci generali o una recensione giornalistica. Ora una partitura/catalogo concreto compare come prima fonte; la precedente è conservata per provenienza. Le note identificano opere, organici, datazioni e versioni dove pertinenti.

| # | Compositore | Genere | Giustificazione aggiornata | Fonte primaria |
|---:|---|---|---|---|
| 1 | Alessandro Marcello | Concerto | Il Concerto per oboe in re minore S.Z799, per oboe, archi e continuo, fu pubblicato nel 1716 nella raccolta dei 12 Concerti a cinque. La successiva trascrizione per tastiera BWV 974 di Bach è ricezione di un'opera di Marcello, non una composizione originale di Bach per oboe. | [Nuova fonte](https://imslp.org/wiki/Oboe_Concerto_in_D_minor%2C_S.Z799_%28Marcello%2C_Alessandro%29) |
| 2 | Adriano Willaert | Madrigale | Musica nova, stampata nel 1559, contiene madrigali italiani a quattro, cinque, sei e sette voci accanto a mottetti latini; il madrigale Liete et pensose ne rappresenta una testimonianza concreta. La raccolta documenta direttamente il genere, senza estenderlo indiscriminatamente ai brani sacri. | [Nuova fonte](https://imslp.org/wiki/Musica_nova_%28Willaert%2C_Adrian%29) |
| 3 | Bartolomeo Tromboncino | Frottola delle corti italiane | Por chio vado, frottola a quattro voci pubblicata nel 1507 nel settimo libro delle Frottole di Ottaviano Petrucci, attesta direttamente la produzione profana di Tromboncino e la distingue dalle laude sacre. | [Nuova fonte](https://imslp.org/wiki/Por_chio_vado_%28Tromboncino%2C_Bartolomeo%29) |
| 4 | Cristóbal de Morales | Mottetto | Jubilate Deo omnis terra (1538), mottetto latino a sei voci SAATTB di Cristóbal de Morales pubblicato nel 1542, è documentato da edizione musicologica della sua Opera Omnia; non va confuso con il successivo mottetto omonimo di Cipriano de Rore. | [Nuova fonte](https://imslp.org/wiki/Jubilate_Deo_omnis_terra_%28Morales%2C_Crist%C3%B3bal_de%29) |
| 5 | Antonio Salieri | Opera / teatro musicale | Falstaff, ossia Le tre burle, dramma giocoso in due atti su libretto di Carlo Prospero Defranceschi, composto nel 1798 e rappresentato a Vienna nel 1799; la partitura dell'archivio operistico di Dresda documenta la produzione teatrale di Salieri. | [Nuova fonte](https://imslp.org/wiki/Falstaff_%28Salieri%2C_Antonio%29) |
| 6 | Arrigo Boito | Opera / teatro musicale | Mefistofele, opera di Arrigo Boito con prologo ed epilogo, rappresentata per la prima volta alla Scala nel 1868 e profondamente revisionata per Bologna nel 1875; la partitura successiva documenta il teatro musicale, distinguendo versioni e revisioni. Non attribuire a Boito da solo composizioni musicali comuni con Franco Faccio. | [Nuova fonte](https://imslp.org/wiki/Mefistofele_%28Boito%2C_Arrigo%29) |
| 7 | Antonio Vivaldi | Opera / teatro musicale | Ottone in villa RV 729, dramma per musica in tre atti su libretto di Domenico Lalli, andò in scena a Vicenza nel 1713. Il manoscritto autografo è conservato nella Biblioteca Nazionale di Torino (Foa 37). Questo è un esempio della produzione operistica di Vivaldi, parallela a quella concertistica e sacra. | [Nuova fonte](https://imslp.org/wiki/Ottone_in_villa%2C_RV_729_%28Vivaldi%2C_Antonio%29) |
| 8 | Carlo Gesualdo | Madrigale | Sei libri di madrigali a cinque voci, pubblicati originariamente fra il 1594 e il 1611, sono riuniti nella partitura integrale curata da Simone Molinaro e stampata a Genova nel 1613; distinguere la data della raccolta successiva dalle edizioni originali. | [Nuova fonte](https://imslp.org/wiki/Madrigals%2C_Books_1-6_%28Gesualdo%2C_Carlo%29) |

## Formazione: rettifiche storiche
1. **Giovanni Legrenzi → Antonio Caldara**, ID `audit12-legrenzi-caldara-allievo`. Il DBI **Caldara** dice che fu *probabile ma non dimostrato* allievo di Legrenzi, mentre il DBI **Legrenzi** include Lotti fra gli allievi sicuri ma non Caldara. La precedente frase sosteneva scorrettamente che Treccani collocasse Caldara fra gli allievi sicuri. Stato passato da `documentato` a **`da_verificare`**. Modificati `kind`, `forward`, `reverse`, `note`, lasciando intatti ID e estremità e conservando le fonti originarie. Fonti: [DBI Caldara](https://www.treccani.it/enciclopedia/antonio-caldara_%28Dizionario-Biografico%29/), [DBI Legrenzi](https://www.treccani.it/enciclopedia/giovanni-legrenzi_%28Dizionario-Biografico%29/).
2. **Adriano Willaert → Cipriano de Rore**, ID `audit12-willaert-rore-cerchia-discepolo`. Le testimonianze chiamano Rore *discepolo* di Willaert ma non chiariscono se fosse uno studente diretto o membro della cerchia. Riformulata la nota; stato passato da `documentato` a **`documentato-con-cautela`**: il dato della qualifica storica è attestato, la modalità dell'insegnamento NO. [DBI Rore](https://www.treccani.it/enciclopedia/cipriano-de-rore_%28Dizionario-Biografico%29/).

**Rapporto Legrenzi → Antonio Lotti:** resta `documentato`, giacché la voce DBI sul Legrenzi cita esplicitamente Lotti tra gli allievi certi. Differenza fondante per la semantica del grafo.

## Stato del database
- Nodi: **860**; compositori: **438**; archi del grafo generale: **1670**; archi produttivi: **590**.
- Relazioni specialistiche: **1280**, di cui **377** incidenti sul macroblocco.
- Prima di queste rettifiche: i due archi formativi erano `documentato`; adesso `da_verificare` (Caldara) e `documentato-con-cautela` (de Rore).
- Nessuna coppia `(kind,source,target)` duplicata nel grafo e nessun estremo mancante.
- Non è una validazione degli URL restanti, né una certificazione esaustiva dei 100 autori.
- `main` resta fuori dal lavoro. Nessun mutamento alle tre lenti, alle geografie, ai codici UI o alla tassonomia.

## Priorità di approfondimento
1. Estendere il controllo puntuale delle fonti dalle 8 produzioni corrette agli altri **210** archi produttivi del primo macroblocco.
2. Verificare nel testo delle fonti, non nel loro solo titolo, le **84** relazioni formative incidenti, a partire da quelle segnate come `maestro-allievo` ma con formulazioni congetturali.
3. Verificare separatamente influenze, collaborazione, genealogie e scuole, incluse le possibili duplicazioni semantiche (Rubinstein → Čajkovskij) senza distruggere testimonianze originali.
4. Riconsiderare alla fine del giro la distinzione fra genere stretto e ambito produttivo ampio, senza alterare ora le lenti.
