# Audit Flaminio — Lotto 11: confronto dei 23 lemmi con i 374 nodi non-persona originali

**Data:** 10 novembre 2026 · **Repository:** SkenderAle/github-pages · **Branch:** main · **Ambito modificato:** soltanto `audit-integrazione/`.

## Nuova fonte effettivamente letta
`STAGING_NODI_NON_PERSONE_FASE2K_374_2026-11-08.json`: archivio di staging originario che conserva **374 identità di nodi non-persona** legacy e **375 varianti di record sorgente**, comprendendo anche periodi e correnti non coincidenti con generi musicali. Il JSON è stato letto e interrogato integralmente tramite il connettore GitHub. Rispetto al Lotto10, la copertura passa dal limitato overlay dei 50 termini a un insieme maggiore dell'Atlante originario; **non** copre però tutto il grafo pubblico di Atlantis e tutti gli alberi editoriali caricati dall'utente.

## Esito del confronto puntuale sulle 23 presunte assenze
- **1/23** identificazione esatta nel corpus di 374: `Poema sinfonico` = `poema-sinfonico-ottocentesco` (nodo legacy già presente; vietato crearne un duplicato).
- **5/23** hanno nodi concettualmente correlati ma più specifici o contestuali, non equivalenti: **Corale** (`polifonia-corale-luterana-cinquecento`, `corale-organistico-turingia-seicento`); **Graduale** (`editio-medicea-graduale-1614`); **Inno** (`inno-patriottico-canto-italiani-1847`); **Intermezzo** (`intermezzo-comico`); **Quartetto** (`genere-quartetto-archi`).
- **17/23** non presentano un nodo di genere generale con denominazione coincidente in questo archivio di staging. **Non significa che tali concetti siano assenti dalla federazione o che debbano essere aggiunti**.

Il file `CROSSWALK_23_LEMMI_VS_STAGING374_LOTTO11_2026-11-10.json` contiene tutti i 23 lemmi, gli ID legacy rilevati e la natura del match. Le corrispondenze sono ancorate agli ID originali, non a mere somiglianze di sottostringa (che produrrebbero falsi positivi: per esempio "Aria" dentro "Maria", "Trio" dentro "patriottici", "Studio" in nomi di istituzioni).

## Decisioni strutturali
1. `Poema sinfonico` non ha bisogno di un nuovo nodo legacy; occorre soltanto verificare identità e rappresentazione rispetto ad Atlantis.
2. `Quartetto` è più ampio di `Quartetto d'archi`, `Intermezzo` più ampio del sottotipo comico; non fonderli.
3. `Corale` può denominare tradizione e forma, mentre i nodi rilevati sono categorie storiche specifiche; vietata l'equivalenza automatica.
4. `Graduale` liturgico non equivale all'evento editoriale `Editio Medicea`.
5. `Inno` generale non equivale al singolo inno patriottico `Canto degli Italiani`.
6. Nessuna promozione in produzione e nessuna traversata di generi condivisi tra compositori come legami storici.

## Stato e ulteriori verifiche
Il Lotto09 ha aggregato **267** intestazioni Flaminio in **42** lemmi; 19 erano presenti nella selezione di 50 dell'overlay, 23 non vi comparivano. Questo nuovo controllo riduce le presunte assenze: uno dei 23, `Poema sinfonico`, è confermato nell'archivio legacy completo dei non-persona. Per i restanti 22 sono ancora aperte verifiche semantiche, identità e copertura del database federato; **5** hanno concetti correlati documentati.

Il connettore `fetch_file` ha restituito contenuto vuoto per `musurgia-atlantis/grafo.json` e `atlante3d/database/grafo.json` anche con intervalli di righe; per l'audit sono stati utilizzati gli snapshot già pubblicati, senza inventare verifiche sui file non leggibili.

**Prossima fase:** controllare gli ID di concetto nel dataset Atlantis tramite snapshot accessibili o estrazioni partizionate, verificare tassonomie ulteriori e riconciliare i 22 senza equivalenza generale documentata. Solo dopo costruire l'overlay per la preview e collegare singole opere Flaminio con più classi, organico, testi, versioni e fonti.

L'audit storico Checkpoint24 resta separato a **74/233** archi persona-persona (prossimo blocco 50). I 210 lotti precedenti e il grafo pubblico rimangono invariati.
