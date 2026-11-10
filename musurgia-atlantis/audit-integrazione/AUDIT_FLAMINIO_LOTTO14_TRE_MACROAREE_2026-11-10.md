# Musurgia Atlantis — Lotto 14: tredici lemmi Flaminio e tre macroaree tassonomiche

**Data:** 10 novembre 2026 · **Branch:** `main` · **Stato:** audit in staging, nessun rilascio nei grafi pubblici.

## Fonti controllate
1. `AUDIT_TASSONOMIE_CAMERA_SINFONICA_SACRA_2026-11-09.md` — verbale archivistico delle tre tassonomie fornite dall'utente (camera, sinfonico/orchestrale, sacro), con struttura di macroaree e dettagli semantici.
2. `CROSSWALK_FLAMINIO_LOTTO13_GRAFI_INTEGRALI_23_LEMMI_2026-11-10.json` — verifica del contenuto dei due grafi, rispettivamente 754 nodi Atlantis e 869 nodi Mundi.
3. I risultati Flaminio dei Lotti 09–10 e le cautele dei Lotti 11–13.

**Limite documentale essenziale:** il verbale GitHub conserva la descrizione ragionata dei tre alberi, **non il testo letterale integrale di ciascuna loro diramazione**. Questa fase individua quindi *macroarea, faccetta e rapporto plausibile*, non certifica la posizione di ogni termine in un ramo dell'originale. Le proposte musicologiche contrassegnate `proposta_da_verificare_sull_albero_integrale` non vengono attribuite erroneamente all'utente.

## Esito dei 13 termini senza nodo generale adeguato nei due grafi
| Lemma | Macroarea o dimensione da riconciliare | Cautela strutturale |
|---|---|---|
| **Antifona** | Sacra: canto/ufficio | testo, funzione e intonazione polifonica distinti |
| **Canzone** | Forma vocale e strumentale trasversale | canzone vocale, canzona strumentale e nome generico non sono lo stesso concetto |
| **Duetto** | Cameristica e teatro musicale | organico, genere e numero teatrale sono faccette diverse |
| **Mazurca** | Danza, repertorio strumentale | non ridurre la forma al metro |
| **Offertorio** | Sacra: Proprium Missae | testo, canto e opera singola distinti |
| **Polacca** | Danza, repertorio strumentale | polacca/Polonaise da verificare come alias; «musica polacca» è aggettivo geografico |
| **Quintetto** | Cameristica | quintetto generale ≠ solo quintetto d'archi |
| **Rondò** | Forma trasversale | movimento strutturale ≠ brano autonomo |
| **Salmo** | Sacra: testo/salmodia | il testo biblico non è una composizione singola; Sinfonia di Salmi non è Messa |
| **Scherzo** | Forma/movimento, strumentale | movimento di sinfonia o sonata ≠ Scherzo autonomo |
| **Sestetto** | Cameristica e teatro | sestetto vocale e sestetto strumentale distinti |
| **Studio** | Repertorio strumentale, funzione didattica | non confondere Studio come forma/pezzo con studio di registrazione |
| **Trio** | Cameristica e teatro | Trio non è automaticamente Sonata a tre; organico e numero vocale separati |

### Riscontro nel verbale delle tassonomie
Il documento di novembre elenca esplicitamente tra le fasce della **camera** trii e quintetti e tra le cautele sacre il **Proprium Missae**, i canti liturgici e i salmi (anche *Sinfonia di Salmi*). Queste sono basi di *macroarea* per il triage, non prove delle diramazioni precise dei tre alberi. Le altre voci sono proposte di collocazione da riconciliare col testo originale.

## Regole operative
1. Generi canonici al **singolare**, con forme storiche e alias conservati come campi separati.
2. Le tre macroaree sono **lenti di consultazione**, non supernodi storici che consentano percorsi compositore→genere→altro compositore.
3. Per ciascuna opera separare classificazione `opera → forma/genere`, `ha_organico`, `ha_funzione`, `realizza_testo`, `parte_di`, `versione_di`, `attribuito_a`.
4. Non assegnare categorie a opere per sola intestazione composita Flaminio; revisione su singola opera e fonte.
5. Senza il testo integrale degli alberi, non certificare la collocazione in un ramo né generare arbitrariamente `sottogenere_di`.
6. Nessuna creazione di nodi o archi pubblici, merge, o modifica alla GUI autorizzata dal Lotto14.

## File dati
`CROSSWALK_FLAMINIO_LOTTO14_13_VS_TRE_MACROAREE_2026-11-10.json` — 13 record con lemma, dimensione semantica, macroarea di lavoro, livello di documentazione, cautela e gate chiusi. Commit `14bc4ac1f2d00d55d75474d1a7ecaffecb3b7ed1`.

## Prossima ripresa
Ricostruire la **gerarchia letterale** degli alberi user-supplied da un archivio che contenga i testi originali, oppure creare in audit un albero canonico esplicitamente *nuovo e proposto*, senza attribuirlo alle fonti precedenti. Quindi individuare per ogni termine un identificativo stabile, rapporto multiassiale con antenati e figli, e passare ad audit delle singole composizioni Flaminio. I 10 lemmi del Lotto13 già rappresentati in nodi di senso vanno parimenti disambiguati, non sostituiti.

Checkpoint24 storico persona-persona resta a **74/233** e va ripreso separatamente, a blocchi di 50. I 210 lotti storici e i grafi `musurgia-atlantis/grafo.json`, `atlante3d/database/grafo.json` rimangono invariati.
