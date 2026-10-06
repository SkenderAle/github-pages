# Protocollo dei nomi · Musurgia Mundi

Ogni persona è rappresentata da **un solo nodo canonico** con ID stabile, anche quando ha usato nomi diversi durante la vita (esempio: Giovanni Battista Lulli / Jean-Baptiste Lully). Il nodo contiene `label`, `aliases`, `name_review.status` e `name_review.sources`.

## Aggiunta obbligatoria di un nuovo compositore

1. **Ricercare fonti esterne attendibili**, dando precedenza a dizionari e repertori musicologici, archivi di autorità (VIAF, BnF, Library of Congress), enciclopedie, IMSLP quando cita autorità.
2. **Controllare l'eventuale esistenza dell'identità nel database** anche sotto altri nomi. Non inserire un nuovo nodo se la persona è già catalogata: ampliare gli alias del nodo esistente.
3. **Registrare le grafie storiche e internazionali realmente documentate**: nome di nascita, eventuale nome assunto, forme italiane, inglesi, francesi e tedesche, diacritici, patronimici, nomi originali in alfabeto non latino (cirillico, greco ecc.), traslitterazioni scientifiche e forme editoriali correnti. Non fabbricare alias mediante sostituzioni casuali.
4. **Attribuire `name_review.status = "verificato"` e almeno un URL reale in `name_review.sources`**. Non pubblicare nuovi compositori con `da-verificare` o `revisione-redazionale`.
5. **Verificare collisioni** con alias di altri compositori e aggiornare collegamenti e video_nodes senza duplicati.
6. **Eseguire `node atlante3d/database/verifica-nomi.mjs`**. Quando si aggiungono nuovi nodi, passare anche il JSON precedente come secondo argomento per verificare l'obbligo delle fonti per i nuovi ingressi.

Le schede precedenti alla versione 1 del protocollo possono avere `name_review.status = "da-verificare"`; sono debito catalografico, **non una certificazione**. Le forme aggiunte solo editorialmente hanno stato `revisione-redazionale` finché non viene completata la verifica.

## Fonti utilizzate nella prima ricognizione

- [Treccani, Giovanni Battista Lulli (Lully)](https://www.treccani.it/enciclopedia/giovanni-battista-lulli_%28Dizionario-Biografico%29/)
- [Larousse, Jean-Baptiste Lully](https://www.larousse.fr/encyclopedie/personnage/Jean-Baptiste_Lully/130652)
- [Université Laval, GDRM: translittération et transcription des principaux noms russes](https://roberge.mus.ulaval.ca/gdrm/01-trans.htm)
- [Tchaikovsky Research: romanization of Russian](https://en.tchaikovsky-research.net/pages/Project:Romanization_of_Russian)

**Regola tecnica:** la normalizzazione (accenti, apostrofi, trattini, segni speciali) facilita la ricerca, ma **non sostituisce la ricerca storica delle denominazioni**.
