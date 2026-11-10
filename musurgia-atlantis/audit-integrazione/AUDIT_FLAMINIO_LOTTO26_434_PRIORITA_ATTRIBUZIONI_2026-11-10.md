# Musurgia Atlantis — Lotto 26: triage documentale delle priorità catalografiche

**Data:** 10 novembre 2026. **Ambito:** solo `audit-integrazione/`, senza importazione nel grafo pubblico.

## Perimetro realmente eseguito

Riletti integralmente i tre archivi del Lotto 25 (885 righe singole), selezionati **434 record sorgente distinti**, tramite tre criteri sovrapponibili: **164** note che dichiarano attribuzione errata, **132** righe Vivaldi con rubrica vuota, **199** righe nella rubrica «Composizioni vocali > Cantate sacre» di Bach. La somma dei tre gruppi non è il numero di schede distinte, per le sovrapposizioni. Questi numeri riguardano soltanto lo staging Lotto 25, non il catalogo intero.

Il registro JSON dedicato conserva fonte per riga, numero **case-sensitive**, autore e rubrica originali, titolo, anno, parte e URL guida; i dettagli narrativi originali restano integralmente nei tre file del Lotto 25, collegati tramite `source_id`. Le indicazioni «composizione di X» sono state estratte **solo quando esplicite nel testo Flaminio**, come *asserzioni della fonte*, non come convalide di attribuzione. Estrazioni nominative automatiche: **137**; righe con flag errata ma senza estrazione nominativa certa: **27**. Nessuna assegnazione automatica di `work_id` o `validated_composer_id`.

### Regole applicate

1. `source_row_id` identifica la riga, non l'opera; rubrica vuota e numero non formano un catalogo autonomo.
2. Rubrica «cantate sacre» consente soltanto il **lemma candidato** `cantata` (singolare), non certifica autenticità, identità d'opera, numero BWV o rapporto compositore→opera.
3. Le note «attribuzione errata» in una rubrica Bach/Vivaldi vietano di creare archi di paternità per quell'autore. Il compositore alternativo, anche se dichiarato nel testo, richiede una fonte d'autorità indipendente e verifica del catalogo.
4. Gli incipit delle cantate, le diverse versioni e le parti non vanno deduplicati solo per titolo o numero: rispettare l'identità opera/raccolta/versione/movimento e la distinzione fra cataloghi.
5. Per Vivaldi la cifra senza prefisso RV può essere numero di riga locale; vietata la conversione automatica in RV. Le schede senza rubrica restano sospese.
6. I testi, i metadati, le ancore, gli URL Flaminio e il corpus originale si conservano senza riscrivere il raw.

### Esito e limiti

**434/434** identificativi di riga distinti. **0 nuove attribuzioni certificate; 0 nuove identità d'opera certificate; 0 nodi o archi da pubblicare**. Questo lotto costituisce un triage analitico di **434** righe, non una verifica esterna delle singole opere. La dicitura HOLD è deliberata. Restano da confrontare risorse d'autorità (BWV/Bach Digital, RV/Ryom, cataloghi tematici, edizioni critiche) per riaprire i singoli gate.

### Prossimo lotto

Attaccare le dichiarazioni nominali estratte con riscontri indipendenti in blocchi, correggendo solo il livello derivato; confrontare le 132 rubriche Vivaldi con cataloghi RV effettivi, poi le 199 cantate con BWV/incipit/testi, distinguendo le 101 note bachiane di attribuzione errata già coinvolte. Successivamente verificare le 112 righe eccezionali del Lotto 25. **Nessuna modifica alla UI o al grafo di produzione prima del collaudo.**
