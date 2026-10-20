# Musurgia Mundi — audit di navigazione e seconda verifica linguistica

**Data:** 20 ottobre 2026. **Base:** commit `029763b46f607e5998e69c3931070a00d43ad350`.

## Perché alcune bolle rosa sembravano scomparire

Da analisi del codice: quando l'utente fa doppio clic su una categoria non geolocalizzata, `focusOn` costruisce correttamente una rete schematica. Tuttavia `setPanel(true)` mostra un pannello che sui dispositivi stretti occupa fino all'89% della larghezza e si sovrappone al centro del grafo. L'oscuramento della rete è dunque una causa plausibile del difetto percepito; l'analisi statica non sostituisce la prova nel browser.

**Correzione:** sui display di larghezza fino a 700px, per nodi di corrente o ambito privi di coordinate, `focusOn` non apre automaticamente il pannello. La carta del nodo continua a popolarsi e resta apribile premendo «Esplora». Se il pannello era già aperto, viene chiuso per mostrare la rete. Desktop e compositori conservano il comportamento precedente.

## Verifica strutturale delle categorie

La fonte dati contiene 326 nodi di tipo `corrente` o `ambito`. Con le lenti iniziali attive nessuno è isolato; 119 nodi dispongono di un solo vicino diretto ammesso dai filtri. Una rete piccola non è quindi una prova di cancellazione di relazioni.

## Seconda passata sulle frasi della lente Scuole

Il soggetto che comincia con «Scuola» o «Seconda scuola» riceve l'articolo anche quando si arriva alla relazione nel verso inverso (ponti scuola → scuola). Per Léonin e Pérotin le frasi dirette diventano «La Scuola di Notre-Dame riconosce [nome] fra i maestri dell'organum attestati dalle testimonianze medievali». I nomi e la semantica storica non sono modificati.

Il verificatore segnala ora anche frasi che iniziano impropriamente con il sostantivo «Scuola» senza articolo.

## Limiti

La riproduzione pratica del difetto richiede una prova in un browser reale desktop/mobile. Non attribuire questa correzione a una verifica end-to-end già compiuta. L'audit filologico delle 392 relazioni non viene ripetuto e i dati storici non sono alterati.
