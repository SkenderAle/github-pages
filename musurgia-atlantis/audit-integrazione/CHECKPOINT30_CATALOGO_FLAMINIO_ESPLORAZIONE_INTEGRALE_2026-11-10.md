# Flaminio — catalogo integrale esplorabile (Checkpoint 30)
**Data:** 10 novembre 2026. **Decisione utente:** non attendere la verifica filologica delle 52.150 righe prima di poterle esplorare e individuare incongruenze.

## Fonte e risultato locale
Origine: file utente `compositori_flaminio.xlsx`, foglio `Sheet1`, intervallo A1:H52151. **52.150 righe, 149 intestazioni di compositore, 1.167 rubriche non vuote** (più rubrica vuota). Tutte le 52.150 righe sono state convertite integralmente e conservate in un artefatto HTML autonomo, `Musurgia_Atlantis_Flaminio_Explorer_52150.html`, fornito nella conversazione ChatGPT; compressione gzip incorporata nell'HTML, nessun server o fetch richiesto. Disponibile inoltre JSON gzip locale `flaminio_catalogo_integrale_52150.json.gz` e riepilogo `flaminio_catalogo_integrale_metadata.json` nella sessione di lavoro.

**Non è un sito già pubblicato su GitHub.** L'artefatto HTML completo e il file XLSX sorgente non sono stati trasferiti al repository. Prima della pubblicazione su musurgiamundi.com occorre versare il file completo o i dati spezzati in blocchi e verificare la navigazione mobile. Il registro di audit esistente rimane indipendente.

## Proprietà della preview integrale
Ricerca per compositore, rubrica, numero, titolo, anno, parte e testo della descrizione; filtri per compositore, rubrica originale e anomalie; 100 righe per pagina; scheda con provenienza `flaminio:excel:<numero_riga>`, URL guida Flaminio, descrizione originale, segnalazioni attribuzione/rubrica/perduta/versione; export CSV dei risultati. Nessuna parola dell'Excel è stata riscritta.

Flag euristici registrati, non certificati: **322** senza rubrica, **1.682** con segnale attribuzione sospetta nel testo/rubrica, **2.650** con indizi di perduto/frammentario/incompleto, **2.360** con numero assente/segnaposto, **2.096** con segnali di versione/trascrizione, **44.738** senza link. Si sovrappongono. Da considerare soltanto segnali di ricerca, non giudizi filologici.

## Regola di modellazione definitiva
1. L'unità iniziale è `source_row` con ID stabile basato sulla riga Excel. Una riga **non equivale** automaticamente a un'opera.
2. Conservare tutte le stringhe originali e gli URL; derivare separatamente `author_candidate`, `work_identity`, `collection`, `part`, `version`, `genre`, `instrumentation`, `attribution_status`, `evidence`.
3. Il livello catalografico si deve poter cercare e navigare **anche se privo di identità d'opera verificata**, per facilitare la scoperta di errori; distinguere visivamente `fonte importata`, `confrontata`, `convalidata`, `contestata`, `sospesa`.
4. **Non creare archi storici tra compositori** tramite rubriche, periodi, capitoli o generi. Non fare merge né attribuzioni automatiche al grafo storico. L'integrazione della preview nella UI Atlantis richiederà una modalità catalogo separata, con percorso dalla singola opera alle schede editorali quando documentato.
5. Mantenere la pertinenza radicata per la mappa 3D certificata e tutti i 210 lotti filologici esistenti.

## Pubblicazione futura
La prima milestone operativa è caricare gli stessi 52.150 record in `musurgia-atlantis/catalogo-flaminio/` come JSON compressi o partizionati per autore, serviti staticamente e interrogabili con un indice di ricerca. L'attuale preview integrale offline dimostra che il corpus è leggibile senza correggere prima ogni voce. Il corpus non è ancora raggiungibile dal sito; nessuna modifica a `grafo.json` o alla homepage.
