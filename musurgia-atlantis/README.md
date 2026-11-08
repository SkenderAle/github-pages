# Musurgia Atlantis — esperimento autonomo

Interfaccia pubblicata in `musurgia-atlantis/`, indipendente dalle altre pagine del sito.

## Stato — 8 novembre 2026

**Revisione storico-filologica chiusa al Lotto 210.** Commit storico di riferimento `12578a0726873af6c6c315d0e8c1089c363224fd`.

- Dataset `grafo.json`: **754 nodi, 1.718 archi**.
- **586 flag di verifica indipendente**, **550 gate di riscontro indipendente** (indicatori non sommabili), **125 sospensioni esplicite** preservate.
- Collaudo automatico dei dati e dei percorsi I–V **positivo**; collaudo visivo e gestuale su browser desktop/Android **da certificare**.
- [Verbale di chiusura e collaudo](./VERBALE_CHIUSURA_E_COLLAUDO_2026-11-08.md).
- [Registro storico completo](./AUDIT_VALIDAZIONE_STORICA_2026-11-07.md).

## Componenti

- `index.html`: interfaccia 3D Force Graph; il motore WebGL può essere caricato da CDN.
- `grafo.json`: grafo autonomo, con distinzioni storico-filologiche fra rapporti verificati, menzioni e sospensioni.
- `compat-graph.js`: rendering Canvas 3D di compatibilità, senza dipendenza dalla CDN.
- `fallback.svg`: anteprima grafica locale.
- `PROTOCOLLO_AGGIORNAMENTI.json`: regole per eventuali aggiornamenti successivi, inalterate.

Atlantis non compare nei menu del sito ed è richiesto `noindex`; questo non costituisce un controllo di accesso. La presenza di un cammino fra due entità non prova di per sé una relazione causale.
