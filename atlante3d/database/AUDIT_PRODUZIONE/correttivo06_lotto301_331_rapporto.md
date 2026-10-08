# Musurgia Mundi — Audit correttivo 301–331: rapporto di chiusura

Data: 8 ottobre 2026. Ramo `audit-produzione-correttivo-01`. **Main invariato**.

## Risultato del ciclo
- **31 figure compositrici analizzate** seguendo gli identificativi persistenti dell'Atlante, numeri 301–331.
- **29/31 con almeno un arco `produzione` documentato**. Undici rinascimentali avevano già un arco dal precedente audit dei nomi minimi.
- **18 archi produttivi aggiunti** in questo ciclo (9 ai compositori 301–309, 9 a quelli medievali); totale complessivo: 376 archi produttivi.
- **Due eccezioni motivate**, con note e fonti conservate nel nodo `audit_production_review`:
  - Philippe de Vitry: DIAMM e BnF attestano un gruppo di mottetti sotto il suo nome ma la paternità specifica di *Garrit gallus* non è sicura e il manoscritto del *Roman de Fauvel* non lo accredita direttamente. Non promuovere un'attribuzione dubbia a rapporto produttivo certo.
  - Guglielmo IX d'Aquitania: testi lirici e ruolo fondativo del trobar attestati; le melodie non sopravvivono con una notazione attribuita direttamente. La singola testimonianza indiretta studiata da Carapezza non permette di nominare un originale certo.

## Esempi significativi
- Notker: il *Liber ymnorum* testimonia versi per sequenze cantate, ma non gli si possono attribuire automaticamente tutte le melodie preesistenti.
- Bernart de Ventadorn: *Can vei la lauzeta mover* in 22 fonti testuali, 3 anche musicali, con varianti melodiche e contrafacta.
- Raimbaut de Vaqueiras: *Kalenda maya* come estampida vocale; autore del testo, con origine della melodia e ritmo storico discutibili.
- Comtessa de Dia: *A chantar m'er* con notazione nel Chansonnier du Roi, ff. 204r-v; paternità del testo attestata, identità anagrafica controversa.
- Johannes Ciconia: *O felix templum*, attribuzione manoscritta nel codice Bodleian Canon. Misc. 213 e in Bologna Q.15, registrata da DIAMM.
- Zacara da Teramo: Gloria *Fior gentil* in Bologna Q.15. È una sezione liturgica dell'Ordinario, non una Messa completa.
- John Dunstaple: *Veni sancte spiritus/Veni creator spiritus* con attribuzioni nominali in più codici; evitare per prova autoriale *Quam pulchra es* che DIAMM dichiara incerto.
- Walther von der Vogelweide: *Palästinalied* con melodia presente nel frammento di Münster del XIV secolo; non corrisponde al Lied ottocentesco anche se unificato provvisoriamente nel nodo aggregato.
- Lorenzo da Firenze: madrigale dell'Ars nova distinto dal madrigale polifonico del Cinquecento. La tassonomia sarà rivista solo alla conclusione degli audit.

## Controlli tecnici e storico-redazionali
- Nodi complessivi: 753; di tipo compositore: 331; archi totali: 1339.
- Archi con estremità non valide: 0. Coppie source/target/kind duplicate: 0. Archi produttivi privi di nota, fonte o stato: 0.
- I collegamenti già presenti in `relazioni.json` non sono stati mutati.
- Il numero 29/31 indica copertura produttiva minima, non un repertorio esaustivo di ogni autore.

## Fase successiva
Riprendere l'integrazione degli altri **108 nomi minimi** che non erano individuati nell'ultimo rapporto censuario, iniziando dalle 24 assenze barocche. Prestare attenzione a ruoli non solo compositivi, varianti e scuole multiple. Poi eseguire l'audit di densificazione plurigenere, formazione e influenze su tutti gli autori.
