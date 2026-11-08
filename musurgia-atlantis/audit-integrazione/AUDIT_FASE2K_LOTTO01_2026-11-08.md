# Musurgia Atlantis — Fase 2K, Lotto 01: 349 persone residue
**Data:** 2026-11-08  
**Stato:** audit/staging, `main`; nessuna variazione pubblica.

## Controllo effettivo
Analizzati i **351** record che la Fase 2C elencava come inizialmente senza corrispondenza; le 2 coppie già validate in 2C (Diaghilev e Nijinska) restano escluse, dunque **349**. Confrontati **349/349** con i **297** nodi-persona reali di Atlantis, anche con una normalizzazione prudente della denominazione (parentesi biografiche). Si scoprono **2 equivalenze aggiuntive**, non riconosciute dall'abbinamento nominale precedente: `persona-moliere` → `pers:moliere`; `compositore-ferdinand-david` → `pers:ferdinand-david`.

## Nuove equivalenze documentate — solo identità, non archi
1. **Molière = Jean-Baptiste Poquelin**, ruolo drammaturgo. Autorità: BnF <https://catalogue.bnf.fr/ark:/12148/cb11916418p>; Comédie-Française <https://www.comedie-francaise.fr/moliere>. Atlantis mostra `Molière (Jean-Baptiste Poquelin)`. NON fondere Molière con Lully né dedurre opere/relazioni dalla sola identità.
2. **Ferdinand David (1810–1873)**, violinista, docente e compositore. Autorità: Deutsche Biographie <https://www.deutsche-biographie.de/sfz11399.html>, WeGA <https://weber-gesamtausgabe.de/de/A003165.html>. Atlantis mostra `Ferdinand David (1810–1873)`. Avvertenza: alcune fonti differiscono sul giorno preciso della nascita/morte, da evitare nel trasferimento automatico.

## Partizione aggiornata del corpus 509
- **155** corrispondenze nominali documentate e non fuse.
- **5** equivalenze per alias precedentemente documentate.
- **2** equivalenze ora recuperate: Molière e Ferdinand David.
- **347** persone prive di equivalente Atlantis documentato, predisposte in staging, NON ancora certificate singolarmente.
- **Totale: 509**. Le 297 persone Atlantis originarie restano preservate. Nessun accorpamento o nuovo arco pubblicato.

## Manifest completo di preimportazione
`musurgia-atlantis/audit-integrazione/STAGING_NUOVE_PERSONE_FASE2K_347_2026-11-08.json`: **347** record completi con nome, ID originale, tipo, payload senza perdita, ID Atlantis proposto, stato sospeso e provenienza. I **347** ID proposti sono distinti fra loro e non collidono con alcun nodo già presente in `musurgia-atlantis/grafo.json`. Leopold Mozart è presente come `pers:leopold-mozart` solo nello staging. Nessun generatore automatico deve trasformare i 347 in identità certificate: per ognuno occorre tracciare fonti e verifiche.

## Prossimi passaggi obbligatori
1. In staging, traduzione bidirezionale originale di **2.437** archi base + **1.389** relazioni specialistiche + **30** relazioni estensione, confrontate semanticamente con **1.718** link Atlantis (non concatenazione cieca).
2. Separazione completa del piano editoriale `cap:*` dai nodi storici; attraversamento I–V soltanto con pertinenza documentata rispetto alla radice.
3. Esecuzione e documentazione dei test Mozart–Leopold, compresa la visibilità dei testi su hover/tap; il test dati non certifica da solo l'interfaccia browser.
4. Solo dopo collaudo: piano di merge reversibile, senza alterare o perdere i 210 lotti.

**Produzione intatta:** `musurgia-atlantis/grafo.json`, `index.html`, `atlante3d/` e pagine Musurgia Mundi non modificati.
