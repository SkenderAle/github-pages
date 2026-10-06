# Musurgia Mundi · Ricerca documentaria assistita da banche dati

**Aggiornamento: 6 ottobre 2026.** La ricerca automatica è una macchina di **proposte**, non un enciclopedista infallibile. La scheda pubblicata richiede riscontri musicologici puntuali.

## Architettura: quattro lenti per il visitatore, cinque gruppi nel catalogo

| Lente visibile | Fonti dati |
|---|---|
| Storia musicale e scuole | `grafo.json.edges` + `relazioni.json` (`group=scuole`) |
| Maestri, allievi e influenze | `relazioni.json` (`formazione` + `influenze`) |
| Genealogie dei generi | `relazioni.json` (`genealogie`) |
| Incontri e collaborazioni | `relazioni.json` (`collaborazioni`) |

I gruppi originari non vengono fusi in un'unica classe indifferenziata: il maestro non equivale a una semplice influenza, un concerto non equivale alla frequentazione di una scuola e il genere non equivale alla tecnica compositiva.

## File nuovi

- **`PROTOCOLLO_RICERCA_AI.json`**: regole che l'assistente AI deve consultare prima di iniziare una ricognizione; disciplina fonti, direzioni, incertezza, qualità e pubblicazione.
- **`identita-esterne.json`**: registro aggiornabile automaticamente, una voce per ciascun compositore. QID di Wikidata e MBID di MusicBrainz vengono considerati affidabili soltanto dopo disambiguazione. Le voci senza QID non sono errori: sono *ricerche identitarie ancora aperte*.
- **`ricerca-fonti.mjs`**: legge i due database tramite API ufficiali. Wikidata P1066 (student of), P802 (student) e P737 (influenced by), oltre alla relazione docente-allievo di MusicBrainz, generano **candidati**, mai inserimenti diretti.
- **`sincronizza-identita.mjs`**: ogni nuovo compositore di `grafo.json` entra nella coda. Gli identificativi già verificati non vengono sostituiti.
- **`.github/workflows/musurgia-ricerca-fonti.yml`**: può avviarsi quando cambiano grafo, registro o procedure oppure con il pulsante GitHub *Run workflow*. Produce file JSON di candidati negli artefatti GitHub Actions; non effettua commit di relazioni non verificate.

## Avvio dal repository (GitHub Actions)

Aprire **Actions → Musurgia Mundi - ricerca fonti enciclopediche → Run workflow**. Si può scegliere:

1. `identita`: analizza i nomi non ancora riconciliati, dal numero `offset`, per `limit` nomi (massimo 50).
2. `relazioni`: legge gli identificativi già verificati e recupera gli insegnanti, gli allievi e le influenze candidate.

L'avvio automatico sul cambiamento del grafo individua **tutti i nomi nuovi**, li registra e cerca possibili corrispondenze in lotti di 50. Se non ci sono nuovi nomi, testa un lotto iniziale di identità già riconciliate. Il file `identita-esterne.json` prodotto da Actions è un artefatto: **non aggiorna da solo il branch**. I dati devono essere letti e valutati dal webmaster o dall'assistente nella chat.

## Comandi per il webmaster o l'assistente con accesso al repository

```bash
node atlante3d/database/ricerca-fonti.mjs --self-test
node atlante3d/database/sincronizza-identita.mjs --check
node atlante3d/database/sincronizza-identita.mjs --write
node atlante3d/database/ricerca-fonti.mjs --mode=relazioni --limit=12 --output=outputs/relazioni.json
node atlante3d/database/ricerca-fonti.mjs --mode=identita --limit=30 --offset=0 --output=outputs/identita.json
node atlante3d/database/verifica-relazioni.mjs
node atlante3d/database/verifica-nomi.mjs
```

Quando una fonte esterna presenta un candidato, bisogna controllare corrispondenza di persona, orientamento corretto, cronologia e rapporto musicologico. Wikidata e MusicBrainz possono contenere dati incompleti o inesatti. Per esempio **Beethoven studiò con Christian Gottlob Neefe**: proprietà Wikidata P1066/P802, riscontro del Beethoven-Haus Bonn, poi inserimento motivato in `relazioni.json`.

## Cosa la macchina non può inferire

- Due compositori della stessa città o della stessa epoca **non sono automaticamente collegati**.
- Un rapporto di filiazione biologica non viene inserito. Un genitore può essere anche un docente, ma serve la prova dell'insegnamento musicale.
- La proprietà Wikidata P69 (*educated at*) non prova da sola l'esistenza di una scuola compositiva. P463 (*member of*) non prova da sola un'influenza stilistica.
- I tag dei generi di MusicBrainz non sono genealogie dei generi. Quest'ultima lente richiede fonti storiche e interpretative autonome.
- Non si può copiare integralmente Musicmap, il suo codice o le sue descrizioni: resta un riferimento metodologico.

## Fonti e licenze

- Wikidata, proprietà P1066, P802, P737 e P434: https://www.wikidata.org/wiki/Wikidata:WikiProject_Music
- Wikidata, API: https://www.wikidata.org/w/api.php
- MusicBrainz, API e limite medio **non oltre una chiamata al secondo**, con User-Agent identificativo: https://musicbrainz.org/doc/MusicBrainz_API
- MusicBrainz, relazioni docente-allievo: https://musicbrainz.org/relationship/249fc24f-d573-4290-9d74-0547712d1f1e
- Licenze MusicBrainz: https://musicbrainz.org/doc/About/Data_License (core data CC0; i dati supplementari hanno licenza differente)
- Beethoven-Haus, Neefe: https://www.beethoven.de/en/media/view/4594507769184256/Christian%2BGottlob%2BNeefe%2B%281748-1798%29%2B-%2BStich%2Bvon%2BHeinrich%2BPhilipp%2BBo%C3%9Fler%2Bnach%2Beinem%2Beigenen%2BSchattenri%C3%9F?fromArchive=4886601146564608

## Verifiche e limiti ancora aperti

Le API remote e il flusso GitHub Actions devono essere verificati sull'esecuzione effettiva in rete. I test offline dei versi e dei rapporti non equivalgono a tale verifica. In questa fase soltanto una piccola quota del registro possiede identificativi Wikidata confermati: ciò è un dato di audit, **non un segno di copertura enciclopedica completa**. Prima di dichiarare «terminata» la ricognizione, ciascun compositore dovrà essere analizzato rispetto a tutte e quattro le lenti e alle fonti specifiche.
