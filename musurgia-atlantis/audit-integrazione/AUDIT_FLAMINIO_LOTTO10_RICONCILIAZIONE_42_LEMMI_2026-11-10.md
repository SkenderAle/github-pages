# Lotto 10 — riconciliazione dei 42 lemmi Flaminio

**Data:** 10 novembre 2026 · **Repository:** `SkenderAle/github-pages`, branch `main` · **Stato:** staging e controllo parziale, nessuna modifica al grafo pubblico.

## Campo verificato
Ripresi i **267** record del file del Lotto 09 (`ATLANTIS_FLAMINIO_LOTTO09_267.json`) e aggregati per **42** lemmi canonici singolari, mantenendo frequenza delle intestazioni, somme delle righe catalografiche (che possono sovrapporsi su più lemmi), esempi di intestazione originale e ID legacy associati al termine.

In questa fase sono stati confrontati i lemmi con il vocabolario selezionato di **50** nodi nel file `GENERI_FORME_LEGACY_PREVIEW_CHECKPOINT11_2026-11-09.json`: **19** lemmi con ID diretto selezionato, **23** senza ID in quella selezione. Non sono stati recuperabili integralmente i grandi file `atlante3d/database/grafo.json` e `musurgia-atlantis/grafo.json` tramite connettore: **quindi NON è stato possibile verificare l'assenza o la presenza di quei 23 nel patrimonio completo**. Il Lotto 10 NON è una certificazione del confronto globale promesso, ma un registro intermedio verificabile per farlo senza ripetizioni.

## Registro di confronto
File prodotti in conversazione:
- `ATLANTIS_FLAMINIO_LOTTO10_CROSSWALK_42_LEMMI.csv`
- `ATLANTIS_FLAMINIO_LOTTO10_CROSSWALK_42_LEMMI.json`

Ogni voce conserva: lemma singolare, numero di intestazioni che lo contengono, somma delle righe catalografiche collegate, ID identificato nei 50 nodi (se presente), esempi di denominazioni originali e cautela editoriale specifica; `stato_merge=vietato_pendente_fonti`. **I file completi sono allegati alla conversazione e non sono stati importati nel repo né nel grafo di produzione.**

## Distinzioni tassonomiche obbligatorie
- **Quartetto** è più ampio di `Quartetto d'archi`: non fonderli; distinto anche da quartetto vocale.
- **Corale** non è sinonimo automatico di «musica corale»; organico corale e tradizione/forma musicale devono avere predicati diversi.
- **Trio** non è automaticamente **Sonata a tre**; **Duetto**, **Quintetto**, **Sestetto** possono indicare organico e/o forma storica.
- **Variazione** è il lemma canonico singolare mentre l'ID legacy selezionato espone `Variazioni`: mantenere alias e provenienza, non rinominare ID in modo distruttivo.
- **Messa**, **Salmo**, **Antifona**, **Graduale**, **Offertorio**, **Inno** possono richiedere separazione di testo liturgico, composizione autonoma, parti e funzione.
- **Intermezzo** teatrale e intermezzo strumentale devono essere distinti; **Aria** può essere opera autonoma, estratto d'opera o aria da concerto.
- **Poema sinfonico** non è sinonimo della sinfonia; **Ouverture**, **Preludio**, **Scherzo** possono anche essere parti di opere, non sempre autonome.
- **Balletto** teatrale e balletto vocale storico non sono equivalenti automatici.
- Le forme singolari canoniche non sostituiscono i titoli letterali di raccolte come i sei Concerti brandeburghesi: classificare i singoli lavori, collezione separata.

## Stato dell'avanzamento
- Primo triage delle **1.167** intestazioni Flaminio: già completato nei Lotti 04–09.
- Lotto 10: tutti i 42 lemmi dotati di registro di confronto; **19** ID selezionati, **23** da ricerca completa; nessuna nuova classe pubblica, nessuna fusione, nessun arco opera/genere approvato.
- **Non** equivalenza a completamento della tassonomia generale Musurgia: la selezione Checkpoint11 copre solo 50 voci e i file integrali vanno riesaminati.
- Checkpoint24 storico persona↔persona rimane indipendente a **74/233**, prossimo blocco di **50**.
- I **210** lotti storici precedenti non sono stati alterati.

## Prossimo passo
Acquisire e interrogare il vocabolario completo di Mundi (inclusi gli alberi musicologici caricati originariamente dall'utente), confrontare realmente i 23 casi aperti, le sottoclassi esistenti e gli ID Atlantis; poi trasformare il crosswalk in schema `opera specifica → genere/forma` multiappartenenza, con predicati separati per organico, ambito, raccolta, testo e stato attributivo. Test UI e pertinenza radicata prima di qualunque rilascio pubblico.
