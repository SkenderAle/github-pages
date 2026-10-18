# MUSURGIA MUNDI — Audit integrato VI · Collegamenti permanenti alle opere cameristiche e vocali
**Data:** 18 ottobre 2026 · **Branch operativo:** `main` · **Base:** `532ee7b2b34770b0ea01f1a8291bb53870ff1c54`

## Obiettivo e intervento

Il Lotto V aveva collegato il grafo alle opere dell'audioteca sinfonica, i cui 103 titoli avevano già ID stabili. Il Lotto VI affronta le altre due audioteche generate dinamicamente, senza modificare gli ascolti, i filtri, i dati editoriali o le registrazioni.

In `shared/musurgia-bridge-v1.js`, per ogni `article.work` di `musica-da-camera/` e `parola-e-canto/`, viene assegnato un `id` permanente derivato dal titolo (o autore più titolo per le opere vocali). L'ID è aggiunto soltanto se la scheda non ne possiede già uno; non dipende dall'ordine di visualizzazione. Un osservatore già presente controlla le schede rigenerate dai filtri. Se l'URL di ingresso reca l'ID richiesto, la pagina porta la scheda in vista dopo la sua costruzione.

La normalizzazione usa i caratteri latini dopo rimozione dei segni combinanti, così che gli URL inventariati coincidano con quelli generati sul browser. I titoli sono conservati integralmente a video. **Questi ID identificano opere o schede di ascolto, non voci enciclopediche.**

## Analisi strutturata

| Audioteca | Schede censite | Chiavi d'opera univoche | Opere con autore identificato univocamente | Non risolte senza congetture |
|---|---:|---:|---:|---:|
| Musica da camera | 255 | 255 | 210 | 45 |
| La parola e il canto | 97 | 97 | 91 | 6 |
| **Totale** | **352** | **352** | **301** | **51** |

Il riconoscimento degli autori avviene con il catalogo `indice-autori.json`. Le abbreviazioni non risolte, le attribuzioni composte e le varianti problematiche **non** sono state trasformate in collegamenti automatici. Il numero di schede con autore identificato non coincide col numero di rimandi pubblicati: si privilegia una selezione navigabile, evitando di far dominare il pannello da decine di opere dello stesso autore.

## Dal grafo alle singole opere

Aggiunti a `atlante3d/database/collegamenti-sito.json` **139 rimandi verificati** alle due audioteche:
- **75** collegamenti cameristici, per 50 autori;
- **64** collegamenti vocali, per 49 autori.

Le 139 risorse interessano **88 nodi distinti**, considerando gli autori presenti in entrambe le raccolte. L'inventario complessivo raggiunge **201 nodi** dotati di almeno un riferimento a una pagina o opera. Gli URL dell'inventario iniziano con `../musica-da-camera/#mm-opera-camera-` oppure `../parola-e-canto/#mm-opera-canto-`.

Nel pannello del grafo, le opere espongono ora una descrizione specifica ricavata dal titolo registrato nell'inventario, evitando di mostrare soltanto il nome dell'audioteca. È possibile visualizzare fino a otto collegamenti editoriali prioritari, conservando anche i riferimenti preesistenti.

## Dall'opera al grafo

Resta operativo il pulsante discreto «✧ Musurgia» già predisposto nel Lotto V accanto alle schede i cui autori sono riconosciuti univocamente. La navigazione resta bidirezionale e non altera i lettori; nessun autoplay viene introdotto.

## Verifiche e limiti

- Verificata l'unicità delle **255** chiavi cameristiche e delle **97** chiavi vocali nei dati strutturati.
- Verificate le corrispondenze esatte fra le chiavi generate e gli URL salvati nell'inventario.
- Verificata sintatticamente la nuova versione degli script condivisi e di `app-livelli.js`.
- Non è stato introdotto alcun nuovo autore, arco o rapporto storico: rimangono **382 compositori, 785 nodi, 1.081 archi generali e 1.319 relazioni documentate**.
- La verifica dei singoli titoli/attribuzioni e delle **51** schede non collegate richiede un audit filologico separato; non assegnare per somiglianza.
- I nuovi ID dipendono dai titoli editoriali correnti: in caso di rinomina, aggiungere una compatibilità con gli URL già pubblicati.
- **Collaudo visuale nel browser desktop e Android non effettuato**: verificare caricamento, arrivo sul catalogo, comportamento dei filtri, tasto Indietro, disponibilità delle fonti e accessibilità. Non dichiarare un controllo riuscito senza provarlo.

## Prossimo Lotto VII

Indagare sistematicamente le 51 schede con nome irrisolto o composto; distinguere trascrizioni/arrangiamenti da autori delle opere originali; completare il censimento dei protagonisti nei corpi narrativi e ampliare i ponti con le enciclopedie (Grove Music Online, Treccani, Garzantina come riferimento bibliografico), senza inventare URL né archi.

**Principio:** La musica non sta in fila: il grafo collega, il sito racconta, le fonti permettono di controllare.
