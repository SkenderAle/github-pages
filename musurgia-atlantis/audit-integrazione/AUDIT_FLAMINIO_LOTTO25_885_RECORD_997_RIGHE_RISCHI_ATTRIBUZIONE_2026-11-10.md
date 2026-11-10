# Musurgia Atlantis — Lotto 25: audit massivo delle 885 partizioni Flaminio e delle 112 eccezioni

**Data:** 10 novembre 2026 · **Repository:** `SkenderAle/github-pages` · **Branch:** `main` · **Ambito:** solo `musurgia-atlantis/audit-integrazione/`.

## Perimetro effettivamente elaborato

Prosecuzione del Lotto24 su **997/997 righe sorgenti** già tracciate: **885 partizioni con una sola riga all'interno della coppia rubrica+numero**, più **112 righe in 17 partizioni con numero ripetuto nella medesima rubrica**, lasciate in archivio di eccezioni. Per le **885** sono stati conservati autore, sezione, numero originale case-sensitive, titolo, anno, parte, dettagli, guida e provenienza, nonché classificazione di rischio, confronto delle persone con i due grafi reali e ipotesi di genere al singolare. Registri integrali in blocchi **300 + 300 + 285**, senza campionamento e senza inventare opere.

**Punto centrale:** 885 partizioni catalografiche univoche **non equivalgono a 885 opere certificate**. `source_row_id` non è `work_id`.

### Risultati misurati

| Indicatore | Esito |
|---|---:|
| Partizioni con una sola riga | **885** |
| Partizioni ancora ripetute | **17**, comprendenti **112** righe |
| Totale righe originarie preservate | **997** |
| Denominazioni d'autore | **18** |
| Record con candidato persona presente nel grafo Atlantis | **803** |
| Record con candidato persona nel grafo Atlante 3D originale | **858** |
| Guide Flaminio associate ai 885 record | **179** |
| Identità forte con nodo d'opera già presente, documentata | **1** |
| Record in HOLD per qualità fonte o storico-attributiva | **416** |
| Record con identità d'opera ancora da verificare | **468** |

Le corrispondenze di **persona** derivano da ID del grafo effettivamente esistenti e da un crosswalk di grafie; non equivalgono ancora a un'autorità filologica per i singoli brani, né danno diritto ad attribuirli al compositore indicato nella rubrica Flaminio.

### Punti di attenzione a rischio elevato

I flag si **sovrappongono**, quindi NON vanno sommati come opere distinte:

| Flag sui 885 record | Righe |
|---|---:|
| Assenza di rubrica originale | **136** |
| Titolo soltanto numerico | **25** |
| Numero segnaposto/non identificante | **6** |
| Nota con **attribuzione esplicitamente errata** | **164** |
| Rubrica «Composizioni erroneamente attribuite» | **57** |
| Rubrica di attribuzione dubbia | **111** |
| Nota con attribuzione dubbia/incerta | **102** |
| Rubrica perdute/frammentarie | **23** |

**164** righe contengono una formula di attribuzione errata nella *nota originaria*: se si collegassero al compositore intestatario senza leggere il dettaglio, si trasformerebbero false attribuzioni in archi biografici. Sono **flag estratti dalla fonte**, non correzioni autoriali verificate una per una.

**Bach:** tra le 424 righe in questo lotto figurano opere catalogate dalla fonte come erroneamente attribuite, dubbie o perdute. Occorre mantenere lo statuto attributivo e, dove il testo dice `attribuzione errata, composizione di ...`, verificare la paternità indipendentemente prima di creare l'arco `compone`. L'esempio BWV 1 *Wie schön leuchtet der Morgenstern* è chiaramente identificabile nella lista delle cantate del repertorio, ma il numero «1» compare anche nella rubrica delle opere perdute (titolo diverso). Fonte esterna di confronto: <https://www.bach.de/werk/vokalwerke.html>. **Non equiparare numeri fra rubriche**.

**Vivaldi:** **132** righe del campione riportano rubrica **vuota**. Il numero nudo è insufficiente per ricostruire lo spazio catalografico. Confronto sentinella: la riga Flaminio **50712**, nella rubrica `Composizioni per più strumenti e basso continuo`, indica il concerto in sol minore per flauto diritto, oboe e fagotto; la guida documenta **RV 103** (<https://www.flaminioonline.it/Guide/Vivaldi/Vivaldi-Concerto103.html>), confermato anche da <https://imslp.org/wiki/Concerto_in_G_minor,_RV_103_(Vivaldi,_Antonio)>. La riga di altro titolo con numero «103» e rubrica vuota **non** è per questo la stessa composizione: occorre recuperare il sistema originario e correggere solo i dati derivati da fonti.

**Monteverdi:** **25** titoli catalografici del lotto consistono soltanto in una cifra. È un indice locale, non una denominazione musicale; mantenere `needs_source_title_resolution`, senza creare nodi denominati «1», «2», ecc.

### Un'identità d'opera positiva, verificata contro la documentazione esterna

**Riga Excel 46039** — Schönberg, *Pierrot lunaire*, **op. 21**, 1912, testo di Albert Giraud nella versione tedesca di Otto Erich Hartleben.

- **Atlantis:** `opera:schoenberg-pierrot-lunaire-op21-1912`, già collegato a `pers:schonberg` tramite **`L202-A01`**, con flag `historical_verified_independently=true`.
- **Confronto indipendente:** IRCAM <https://resources.ircam.fr/en/work/pierrot-lunaire-op.-21> conferma opera, autore, anno, opus 21 e provenienza poetica.
- **Decisione:** crosswalk sorgente → nodo esistente in staging; **non aggiungere** una seconda opera, né cancellare metadati o fonti. Differenze di definizione delle date delle prime esecuzioni restano fuori da questo match e vanno registrate per tipo di evento.

Per gli altri **884 record** non emerge, dal controllo conservativo titolo+autore+arco Atlantis, un abbinamento di pari forza. **Non significa** che siano 884 opere nuove, inesistenti nel grafo o da creare.

### Tassonomia: suggerimenti non ancora archi

Le seguenti sono proposte **al singolare**, estratte dal titolo e/o dalla rubrica, ammettendo appartenenze multiple ma senza pretendere certificazione: `cantata` 205; `sonata` 102; `concerto` 89; `fuga` 33; `commedia per musica` 21; `sinfonia` 14; `trio` 8; `messa` 6; `quartetto` 4; `lied` 1. Non sono conteggi di opere distinte certificate; una riga può suggerire più lemmi. Vietata l'inferenza automatica autore→forma→tutti gli autori dello stesso genere. Le tre macroaree camera/sinfonica/sacra saranno verificate contro gli alberi completi prima di attribuire rami certi.

## Materiale pubblicato sul branch `main`

- `STAGING_FLAMINIO_LOTTO25_885_OPERE_CANDIDATE_1_300_2026-11-10.json` — **300** record integrali.
- `STAGING_FLAMINIO_LOTTO25_885_OPERE_CANDIDATE_301_600_2026-11-10.json` — **300** record integrali.
- `STAGING_FLAMINIO_LOTTO25_885_OPERE_CANDIDATE_601_885_2026-11-10.json` — **285** record integrali.
- `STAGING_FLAMINIO_LOTTO25_112_RIGHE_ECCEZIONI_2026-11-10.json` — tutte le **112** righe non disambiguate per rubrica e numero.
- `INDICE_FLAMINIO_LOTTO25_885_RECORD_E_112_ECCEZIONI_2026-11-10.json` — indice complessivo per riga Excel, stato, flags, forma, eventuali nodi esistenti.

## Prossima fase sostanziosa (Lotto 26)

Affrontare in modo **documentale e non casuale**:
1. i **416** record con rischi registrati, prioritizzando le **164** note che dicono attribuzione errata, con eventuale autore alternativo e prova indipendente;
2. le **132** righe Vivaldi con rubrica mancante, ricostruendo da catalogo Ryom il numero con `RV` e distinguendo i diversi repertori;
3. le **199** righe sotto «Cantate sacre» di Bach, confrontando codice e incipit con cataloghi autorevoli, senza contaminazione delle opere dubbie e perdute;
4. le **468** identità in sospeso e i 112 record in eccezione, a blocchi da 300–500 record sempre con confronto dei due grafi.

**Invarianti:** 210 lotti storico-filologici preservati; capitoli soltanto editoriali; pertinenza radicata; `casefold` solo per ricerca; spiegazioni `forward/reverse`, fonti, guide, versioni e parti custodite. **0 nodi, 0 archi e 0 GUI pubblici cambiati**.
