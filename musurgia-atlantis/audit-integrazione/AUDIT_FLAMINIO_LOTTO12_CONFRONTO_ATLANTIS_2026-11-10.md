# Lotto 12 — i 23 lemmi Flaminio confrontati con il crosswalk Atlantis precedente

**Data:** 10 novembre 2026 · **Branch:** main · **Intervento:** soltanto audit-integrazione, niente grafi o UI pubblici.

## Fonti effettivamente rilette
1. `CROSSWALK_23_LEMMI_VS_STAGING374_LOTTO11_2026-11-10.json`, 23 denominazioni e confronto contro 374 nodi non-persona originali.
2. `CROSSWALK_GLOBALE_FASE2M_LOTTO08_2026-11-09.json`, confronto storico preesistente di **344** concetti sorgente contro **410** nodi Atlantis non-persona, con candidati lessicali e stato di validazione; file interamente riletto. Lo snapshot dichiara 754 nodi/1718 archi Atlantis all'epoca, ma non mette a disposizione un elenco esaustivo dei nomi di tutti i 410 nodi target: si possono confermare candidati presenti, **non** assenze.
3. I file `musurgia-atlantis/grafo.json` e `atlante3d/database/grafo.json` continuano a restituire contenuto vuoto dal connettore, anche interrogandoli per intervallo: non dichiarare lettura attuale diretta dei file pubblici.

## Risultato positivo: tre candidati Atlantis documentati
- **Poema sinfonico:** legacy `poema-sinfonico-ottocentesco` → Atlantis `senso:poema-sinfonico`, label Atlantis «Poema sinfonico e immaginazione musicale». Il crosswalk lo segnala come candidato, NON come identità filologica certificata. Non creare duplicati.
- **Intermezzo:** legacy `intermezzo-comico` → Atlantis `senso:intermezzo`, label «Intermezzo comico e forma teatrale». Concetto teatrale più delimitato del generico intermezzo strumentale; mappatura con vincolo semantico.
- **Quartetto:** legacy `genere-quartetto-archi` → Atlantis `senso:quartetto`, label «Quartetto d'archi». La denominazione breve dell'ID Atlantis NON autorizza la fusione con il Quartetto generico, che può anche essere vocale o per altri organici.

Gli altri **20/23** non presentano un candidato recuperato attraverso **questo specifico crosswalk**: non dedurre assenza di un nodo nell'intera Atlantis. Il database originale del Lotto11 ha inoltre concetti contestuali per Corale, Graduale, Inno.

## Conteggi e limiti
| Verifica | Esito |
|---|---:|
| Lemmi oggetto del Lotto 12 | 23 |
| Candidati Atlantis con ID attestato nel crosswalk precedente | 3 |
| Lemmi senza un ID candidato attestato in quel documento | 20 |
| Identità certificate o fusioni autorizzate dal lotto | 0 |

Il file `CROSSWALK_FLAMINIO_LOTTO12_23_VS_ATLANTIS_2026-11-10.json` conserva per tutte le 23 voci l'analisi del Lotto11 e le eventuali corrispondenze del crosswalk globale, con gate chiusi. Nessuna opera o classificazione nuova viene creata.

## Regole da trasferire
- Generi e forme al singolare, ma non trasformare raccolte editoriali in un'unica composizione.
- Le sottocategorie storiche (Intermezzo comico, Quartetto d'archi) possono comparire come figlie del genere generale, non come sinonimi automatici.
- Tenere separati genere, organico, testo, funzione, opera singola, sezione, versione, raccolta, attribuzione.
- Nessuna traversata autore→genere→autore diverso senza rapporto specifico e documentato.
- Quando le fonti cambiano la definizione o un genere ha polisemie, tenere il candidato non fuso.

## Prossimo passo
Reperire, mediante snapshot partizionati o altro accesso supportato, l'intero inventario dei 410 target Atlantis e gli ulteriori alberi Mundi; applicare confronto semantico verificabile ai 20 casi ancora non risolti e avviare campioni opera-per-opera con test delle classificazioni multiple. L'audit storico persona↔persona Checkpoint24 resta separato a **74/233** archi, prossimo blocco 50. **210 lotti** precedenti tutelati.

**Produzione invariata:** `musurgia-atlantis/grafo.json`, `atlante3d/`, pagine pubbliche e renderer non toccati.
