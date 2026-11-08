# Musurgia Atlantis — Fase 2: importazione integrale delle persone e preservazione delle spiegazioni
**Data:** 8 novembre 2026  
**Stato:** copiati in un archivio di staging tutti i 509 record di persone/compositori dell'Atlante 3D e dell'estensione. Nessuna fusione con Atlantis attivo; nessuna modifica all'interfaccia pubblica.

## 1. Perimetro CORRETTO dell'importazione
L'importazione **non** è limitata alle identità già comuni ad Atlantis. È inclusivo: tutto il patrimonio dell'Atlante 3D deve essere mantenuto, anche quando un nodo non compare in Atlantis.

| Fonte | Compositori | Altre persone | Totale |
|---|---:|---:|---:|
| `atlante3d/database/grafo.json` | **400** | **100** | **500** |
| `atlante3d/database/integrazione-operetta-musical.json` | **9** | **0** | **9** |
| **Totale preservato in staging** | **409** | **100** | **509** |

Il file `STAGING_IMPORT_PERSONE_2026-11-08.json` contiene **tutti i record sorgente integrali**, con ID storico, tipo, label, alias, metadati, fonti e altri campi presenti; a ciascuno associa l'azione preliminare di importazione e gli eventuali candidati in Atlantis. Nessuno è eliminato o unito automaticamente.

### Esito ricognizione dei 509 nominativi
- **155** corrispondenze per nome normalizzato (le **146** già presenti nel crosswalk di base + **9** compositori dell'estensione).
- **3** ulteriori possibili equivalenze rilevate tramite alias dichiarati nella sorgente: Guillaume Dufay, Frédéric Chopin, Sergej Kusevickij ↔ nomi attualmente presenti in Atlantis; da confermare prima di qualsiasi unificazione.
- **351** senza corrispondenza per nome/alias in Atlantis: **non sono esclusi**; tutti sono previsti per l'importazione come nuovi candidati, previa verifica d'identità e alias.
- I **297** nodi-persona già in Atlantis saranno conservati a prescindere dalla corrispondenza; non appiattire compositore/persona o ruoli non equivalenti.

*Avvertenza:* assenza di corrispondenza testuale non prova identità differente. I conteggi dei nodi risultanti dopo fusione saranno determinati soltanto dopo il crosswalk scientifico.

## 2. Preservazione obbligatoria delle spiegazioni degli archi
La funzione attiva nel codice `atlante3d/app-livelli.js` è `relationSentence(e,perspectiveId)`, costruita a partire da `relationSentenceBase` e da **tre livelli successivi di rettifica linguistica**, soprattutto sulle scuole/tradizioni. Non è una semplice etichetta di collegamento: restituisce **una frase naturale adattata al verso di lettura**. La visualizzazione attuale la usa effettivamente sul `pointermove` di un arco (`relationTooltip.textContent=relationSentence(edge,selected?.id)`).

Quando si fa clic/tap sull'arco, la funzione `showRelation` presenta una scheda **«Perché sono collegati?»**, contenente:
1. Frase discorsiva del rapporto dal punto di vista dell'autore selezionato;
2. Nota contestuale originale `e.note` quando esiste;
3. Fonti originali `e.sources`, quando disponibili.

Il `pointerup` chiama `showRelation(d.relation)` in assenza di trascinamento: il codice originale supporta già il tocco. La nuova Atlantis deve mantenere questo comportamento, adattandolo a una grafica 3D e a gesture touch affidabili.

### Copertura degli archivi sorgente
| Insieme | Archi | Frasi direzionali esplicite | Note proprie | Fonti URL dichiarate |
|---|---:|---:|---:|---:|
| Atlante: `grafo.json` | 2.437 | **Generate dal codice**, non campi `forward/reverse` | 1.231 | 1.210 |
| Atlante: `relazioni.json` | 1.389 | **1.389 forward + 1.389 reverse** | 1.389 | 1.389 |
| Atlantis: `grafo.json` | 1.718 | Campo `relation` e descrizione, non sempre bidirezionale | **1.712 descrizioni** | 1.698 con `evidence_urls` |

Una spiegazione generata **non equivale** necessariamente a un testo filologico manualmente validato. Nessun campo mancante va inventato; gli archi con formula generica o privi di fonti richiedono classificazione di qualità e revisione.

### Contratto di migrazione senza perdita
Ogni relazione deve portare, o poter recuperare fedelmente:
- `source_record`: dati originali e ID originale, repository, percorso, tipologia (base / specialistica / Atlantis / estensione);
- `predicate` e `direction`: significato e verso documentato, senza supposizioni di causalità;
- `explanation_forward` e `explanation_reverse` **oppure il riferimento versionato alla funzione originale che produce entrambi**;
- `note`, `sources`, `validation`, `historical_status`, `quality_gate` e ogni cautela presente;
- `domain`: storico / tassonomico / editoriale / multimediale / interpretativo;
- `root_relevance`: **non** desumere automaticamente da un percorso di due archi. Va giustificata con evidenza relativa alla radice.
La nuova resa delle frasi dovrà essere confrontata **arco per arco** con quella originale nelle due direzioni per assicurare che le eccezioni linguistiche restino valide.

### Specifiche interfaccia obbligatorie
- **Desktop:** passaggio del mouse sopra un arco = comparsa immediata della spiegazione discorsiva. Clic = scheda completa «Perché sono collegati?» con note, provenienza e fonti.
- **Android/iOS:** tap sull'arco o sulla corrispondente voce nella lista relazioni = scheda con **lo stesso testo**. Non affidare contenuti essenziali al solo hover; separare tap da trascinamento/rotazione.
- **Tastiera/screen reader:** scegliere la relazione da una lista accessibile e aprire testo, nota e fonti senza richiedere puntamento accurato su una linea 3D.
- **Nessun arco muto:** se una relazione è visibile deve esistere una frase intelligibile che ne dichiari natura e limiti; se non è documentata, mostrarne esplicitamente lo stato senza inventare verifiche.
- **Nessuna promozione editoriale:** capitoli e pagine non entrano nel grafo storico per il fatto di possedere una spiegazione o un link.

### Test sentinella — Mozart / Leopold
Sorgente: `atlante3d/database/relazioni.json`, ID `form-leopold-wolfgang`.
- Da Leopold a Wolfgang: «Leopold Mozart insegnò composizione e pratica musicale a Wolfgang Amadeus Mozart.»
- Da Wolfgang a Leopold: «Wolfgang Amadeus Mozart apprese composizione e pratica musicale da Leopold Mozart.»
- Nota: Leopold fu il primo insegnante di composizione e pratica musicale di Wolfgang.
- Stato: relazione di formazione documentata, con fonte dichiarata nel record sorgente.
Questi testi sono l'**atteso semantico** della migrazione, da confrontare con la funzione originale `relationSentence` in fase di test eseguibile.

### Verifiche ancora da svolgere
- Confermare 158 identità candidate (155 per nome + 3 per alias); rilevare identità già presenti sotto altri nomi.
- Confrontare uno a uno 509 record sorgente con le persone Atlantis e preservare eventuali dati divergenti come provenienze separate.
- Estrarre dall'attuale JS le spiegazioni finali dei **2.437** archi di base, con tutte le eccezioni, e i testi direzionali delle 1.389 relazioni specialistiche.
- Riconciliare concetti, generi, forme, periodi, estensione, opere ed eventi, senza fondere gli omonimi editoriali.
- Verificare ancore, audio/video e schede biografiche; poi test visivo e touch. Nessuna di queste operazioni è dichiarata conclusa.

## File generati
- `musurgia-atlantis/audit-integrazione/STAGING_IMPORT_PERSONE_2026-11-08.json` — snapshot integrale dei 509 record, più matching preliminare.
- `musurgia-atlantis/audit-integrazione/AUDIT_FASE2_PERSONE_E_SPIEGAZIONI_2026-11-08.md` — questo documento.

**Protezione produzione:** nessun cambiamento a `atlante3d/` o a `musurgia-atlantis/grafo.json`, `index.html`, `compat-graph.js`. Tutto il materiale di questa fase è confinato alla directory di audit.
