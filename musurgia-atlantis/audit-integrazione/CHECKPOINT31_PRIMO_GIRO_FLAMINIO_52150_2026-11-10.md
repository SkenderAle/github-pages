# Musurgia Atlantis — Checkpoint 31: primo giro massivo sulle 52.150 righe Flaminio

**Data:** 10 novembre 2026. **Decisione:** grandi lotti, più passaggi, inserimento progressivo delle sole identità d'opera *effettivamente certificate* nel grafo 3D, senza attendere la conclusione degli altri lotti.

## Verifica eseguita

Il file `compositori_flaminio.xlsx` presente nella Libreria è stato letto completamente (52.150 righe, 149 nomi d'autore). Creati **11 lotti locali**, di cui 10 da 5.000 righe e uno da 2.150. Conservati identificatori `flaminio:excel:<riga>`, titolo, intestazione d'autore, rubrica, numero, anno, parte, descrizione, URL e provenienza.

Il filtro automatico ha individuato **46.205 candidati documentari** senza alcune anomalie selezionate e **5.945 record da riesaminare**. I criteri di blocco comprendono: note di attribuzione errata/dubbia, rubrica vuota, numero assente o segnaposto, titolo non identificante, duplicati stesso autore/numero/titolo. **Attenzione: 46.205 NON sono 46.205 opere certe**. Le altre segnalazioni (parti/versioni, perdute, incomplete) si conservano come flag e non sempre bloccano il primo passaggio; il filtro andrà raffinato.

| Anomalia euristica | Segnalazioni |
|---|---:|
| Attribuzione dubbia o errata | 2.598 |
| Numero assente/non identificante | 2.361 |
| Rubrica vuota | 322 |
| Titolo non identificante | 741 |
| Duplicato autore/numero/titolo | 60 |
| Versione o parte | 3.591 |
| Perduta/frammentaria/incompleta | 2.649 |

Le categorie si sovrappongono.

## Esplorazione 3D già prodotta in locale

Artefatto della conversazione: `Musurgia_Atlantis_Flaminio_3D_Primo_Giro_52150.html`, pagina indipendente con **tutti i 52.150 record incorporati**, vista tridimensionale paginata per autore, ricerca, dettagli, segnali cautelativi e rotazione. Sono presenti nodi per autore, righe opera e generi candidati. I collegamenti sono **associazioni di catalogo Flaminio, non archi storici certificati**. Non caricare simultaneamente tutte le 52.150 righe nella simulazione.

Questo artefatto locale **NON è ancora pubblicato sul sito**; i grandi file gzip dello staging (11 lotti e uno aggregato) sono disponibili nella sessione, ma non sono ancora stati committati sul repository perché il connector GitHub disponibile scrive solo testi UTF-8 e non accetta il riferimento al file binario. Il sito pubblico `musurgia-atlantis/index.html` e `grafo.json` restano invariati.

## Passaggio successivo: importazione certificata nel 3D

1. Costruire un registro d'identità `source_row → work_id` con provenienza, cataloghi e criteri di concordanza; evitare la trasformazione automatica di ogni riga in un'opera.
2. Pubblicare un overlay verificato accanto al grafo, senza riscrivere o perdere i 210 lotti storici; unire solo per `work_id` certificato, con rollback e test.
3. Eseguire i giri successivi sulle 5.945 righe prioritarie e sulle 46.205 candidate da verificare; usare i suggerimenti e le incongruenze che emergono nell'esplorazione 3D.
4. Quando una scheda diventa certa, entra progressivamente nella rete storica di Atlantis. Le righe non ancora certificate restano consultabili come materiale documentario e possono comparire separatamente con stato evidente.

**Nessuna nuova opera certificata né importata nel grafo pubblico con questo checkpoint**. L'obiettivo è accelerare il trattamento massivo senza scambiare un controllo di qualità delle righe per una validazione storico-musicale.
