# Musurgia Atlantis — Fase 2M, Lotto 13
**9 novembre 2026 · Audit non distruttivo, branch `main`**

## Perimetro realmente controllato
Controllati **244/244** concetti senza proposta dopo il Lotto 12, usando il catalogo legacy reale (869 nodi / 2.437 archi base), Atlantis reale (754 nodi / 1.718 archi) e la baseline delle 344 radici di concetto e delle 509 persone. È uno **screening strutturale e semantico**, non una certificazione storico-filologica di tutti i 244 casi. Ogni voce ha categoria, tassonomia originale, numero di relazioni, priorità, stato e piano di verifica.

Sono state registrate **38 nuove ipotesi sorgente–target**, relative a **34 concetti distinti**, senza duplicazioni dei Lotti 11–12; **210** concetti sono rimasti senza nuova proposta, *non dichiarati assenti in Atlantis*. Tutti i target esistono realmente.

## Evidenze importanti
**Messa come genere, non quattro esempi.** Il profilo `genere-messa` del corpus originale contiene **40 compositori distinti** e **40 record compositore–genere**, a fronte di **46 relazioni incidenti complessive**. Ho conservato nel JSON l'elenco **integrale** degli autori, non una selezione. Sono presenti in Atlantis quattro messe specifiche (*Missa Papae Marcelli*, *Se la face ay pale*, *Missa prolationum*, *Missa solemnis*), che NON equivalgono al genere. Il nodo generico `senso:messa` non compare nel grafo Atlantis attuale: occorre valutarne la creazione nel merge reversibile, ma senza dichiararne certificata la rete. Nessun autore diventa collegato agli altri attraverso l'appartenenza al genere.

**Cage, opera e versione.** `quattro-minuti-trentatre-cage` rinvia alla composizione `opera:cage-433-1952`, mentre `versione:cage-433-notazione-proporzionale-1952-53` è una specifica edizione della notazione, distinta dall'originale e dal contesto della prima esecuzione. Documentazione MoMA: https://www.moma.org/collection/works/163616 .

**Madrigale senza falsi appiattimenti.** Il madrigale trecentesco e quello cinquecentesco condividono un nome, ma non un'identica forma compositiva. Il `madrigale-ars-nova-primo-trecento` deve essere rapportato al nodo del Trecento; la `commedia-madrigalesca` resta una forma narrativa specifica. Treccani: https://www.treccani.it/vocabolario/madrigale/ e https://www.treccani.it/enciclopedia/il-madrigale_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/ .

**Sottotipi e tecniche.** Concerti per arpa, marimba, chitarra, sonata per viola, organum quadruplum, lauda filippina, oratorio inglese, opera cameristica/televisiva, forme del jazz, sinfonismi regionali e tradizioni cortesi sono stati catalogati come sottoambiti o contesti, non identità certificate.

**False fusioni bloccate:** ballata italiana ≠ ballade francese di Du Fay; *Miserere* romano di Allegri ≠ policoralità veneziana; scuola del partimento ≠ basso continuo; un repertorio afroamericano non coincide automaticamente con il jazz.

## Test
- PASS — `all_244_screened`
- PASS — `source_ids_real`
- PASS — `targets_and_sources_real`
- PASS — `new_pairs_unique`
- PASS — `no_previous_pairs_repeated`
- PASS — `all_proposals_scoped_to_244`
- PASS — `all_344_concepts_accounted`
- PASS — `baseline_has_344_concept_roots`
- PASS — `baseline_has_509_person_roots`
- PASS — `messa_original_composers_preserved`
- PASS — `madrigale_original_composers_preserved`
- PASS — `no_generic_messa_target`
- PASS — `no_editorial_chapter_recommendation`
- PASS — `no_approved_merge_or_traversal`
- PASS — `cage_work_and_version_separate`

Questi **15 controlli** verificano integrità e gate di staging. NON rappresentano Node `--live` o prove UI/browser/Android. Il porting fedele delle 7.712 stringhe di `relationSentence` era già stato verificato in V8 al Lotto 01 e non è stato inutilmente ripetuto.

## Prossima ripresa — Lotto 14
Focalizzarsi sui **210** concetti senza target proposto per distinguere (A) concetti realmente mancanti nella tassonomia Atlantis, da importare come nodi **nuovi** con identità propria, (B) documenti, opere, eventi e istituzioni cui servono schede separate, (C) sinonimi/varianti da certificare e (D) soli contesti editoriali, mai nodi attraversabili. Controllare con cataloghi e fonti indipendenti i nuovi raccordi, poi costruire un pacchetto di import **reversibile** con test di `prepare`, `byId`, profondità per tipo e pivot individuale. Solo dopo collaudo Node e browser/Android esaminare la fusione dei grafi.

Restano protetti i **210 lotti storico-filologici**, **3.856** relazioni legacy, **1.718** Atlantis, frammenti `forward/reverse`, note e fonti, **115 media/207 associazioni** e **537 URL con ancora**. **Zero merge e zero modifiche pubbliche**.

