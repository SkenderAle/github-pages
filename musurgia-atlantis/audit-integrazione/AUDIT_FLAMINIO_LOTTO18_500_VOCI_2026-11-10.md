# Musurgia Atlantis — Lotto 18: 500 ulteriori voci Flaminio, confronto con Atlantis

**Data:** 10 novembre 2026 · **Branch:** main · **Stato:** dati e audit pubblicati, grafo e GUI pubblici immutati.

## Corpus e progressione
- Sorgente: `compositori_flaminio.xlsx`, Sheet1. Scansione streaming di **52.150 righe**.
- Escluse **1.023 righe** già comprese nei Lotti 15–17; selezionate **500 nuove righe** su **30 compositori** con distribuzione lungo i cataloghi. Nessuna riga sovrapposta ai lotti precedenti.
- Cumulato Lotti 15–18: **1.523 righe sorgente distinte**. Una riga non equivale sempre a un'opera autonoma; una stessa composizione può avere parti, versioni o schede diverse.

## Triaging delle 500
| Indicatore | Quantità |
|---|---:|
| Nuove voci | 500 |
| Genere singolare candidato esplicito nel titolo | 117 |
| Titolo senza genere determinabile con le regole | 383 |
| Link spiegazione Flaminio | 62 |
| Numero catalografico assente | 19 |
| Possibile versione/trascrizione/elaborazione | 11 |
| Segnali attributivi/documentari | 2 |
| Titoli con flag specifico Sinfonia concertante | 2 |

Forme candidate dai titoli: Sonata **35**, Concerto **21**, Sinfonia **15**, Messa **10**, Fuga **10**, Trio **8**, Quartetto **6**, Preludio **3**, Salmo **3**, Variazione **2**, Marcia **2**, Aria **1**, Mottetto **1**. **Non determinato: 383**.

## Confronto concreto con il grafo Atlantis
Letto il blob `musurgia-atlantis/grafo.json` SHA `4863b3fe263154387de3388c0b813b5f94546f12` (754 nodi, 1.718 archi). Per le 500 righe sono stati tentati:
1. riconoscimento conservativo degli autori nel patrimonio persona (cognome univoco; **16/30** con identificativo persona candidato, non identità storica certificata);
2. ricerca sulle opere e versioni Atlantis con normalizzazione del titolo/numero, eventuale appartenenza a relazioni autore–opera preesistenti, senza affidarsi a generi o epoche come ponti;
3. distinzione fra coincidenza forte e informazioni insufficienti.

**0/500** corrispondenze che superano la soglia conservativa di match autore + opera, con questi alias e questo snapshot. **Non significa** che nessuna opera sia già presente: titoli, sigle catalografiche, alias dei compositori, raccolte e collegamenti incompleti possono far fallire il matching. La creazione pubblica resta vietata per tutte le 500.

### Casi sentinella
- `Sinfonia Concertante in si bemolle maggiore` (Haydn): **Sinfonia concertante** come sottotipo da verificare, non ridurre automaticamente a ogni Sinfonia.
- `Trio per baryton, viola e violoncello`: **baryton** è strumento, non voce; organico e forma come dimensioni separate.
- `Brano per flötenuhr`: destinazione strumentale/meccanica; non derivare un genere dalla parola `flötenuhr`.
- Le intestazioni di dubbia attribuzione vanno conservate come tali, senza arco compositivo con stato di certezza storico-filologica.

## Materiali pubblicati integralmente su GitHub
- `ATLANTIS_FLAMINIO_LOTTO18_500_VOCI_2026-11-10.csv`: tutte le **500 righe**, fonti, titoli e segnali; commit `6e19818b27743fcc9b7f479e4e7d16678868b486`.
- `STAGING_FLAMINIO_LOTTO18_500_VOCI_CONFRONTO_ATLANTIS_2026-11-10.json`: tutte le **500 voci**, corrispondenze persona, tentativi di matching opera, flags e gate; commit `955bebcd4d77e4917f96307f2a5a93abfee1cbc0`.
- Copie della conversazione: `ATLANTIS_FLAMINIO_LOTTO18_500_VOCI.csv` e `.json`.

## Qualità / successiva attività
Da riprendere come priorità: recuperare e comparare varianti di nome, titolo, numero d'opera e sistemi catalografici, comprese le opere Atlantis che non hanno archi `persona → opera`. Le 383 voci senza lemma richiedono la classificazione *della specifica composizione* con fonte, non una assegnazione meccanica dalla rubrica catalografica. Le parti e versioni devono essere relazioni, non nuovi compositori e generi.

**Prossimo lotto**: altri **500** record inediti, ma parallelamente progettare un indice persistente delle identità già esaminate per impedire revisioni circolari e ricalcolare l'audit per autore e genere. Checkpoint24 storico persona–persona separato a 74/233; 210 lotti precedenti tutelati. Nessuna modifica ai grafi o all'interfaccia.
