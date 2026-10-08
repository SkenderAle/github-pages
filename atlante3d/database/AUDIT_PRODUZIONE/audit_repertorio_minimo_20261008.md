# Musurgia Mundi — Audit del repertorio storico minimo
## Checkpoint del ramo `audit-produzione-correttivo-01`, 8 ottobre 2026

### Copertura anagrafica
- Repertorio obbligatorio: **332 nominativi unici**, inclusi teorici e altre figure storiche (non solo compositori).
- Figure individuate per nome o alias: **224**.
- Ancora non individuate e da ricercare: **108**.
- Database del ramo di audit: **331 nodi compositore, 753 nodi complessivi, 1222 relazioni**.
- Queste cifre valutano la presenza nominale e non certificano la completezza degli ambiti produttivi o delle genealogie artistiche.

| Periodo | Individuati | Da integrare/verificare | Totale |
|---|---:|---:|---:|
| Medioevo | 22 | 0 | 22 |
| Rinascimento | 48 | 0 | 48 |
| Barocco | 37 | 24 | 61 |
| Classicismo | 22 | 10 | 32 |
| Romanticismo e tardo Romanticismo | 50 | 20 | 70 |
| Primo Novecento e avanguardie storiche | 31 | 20 | 51 |
| Secondo Novecento e contemporaneità | 22 | 36 | 58 |

### Medioevo — copertura minima completata
Integrate 14 figure storiche precedentemente assenti: Gregorio Magno, Guido d'Arezzo e Franco di Colonia come `persona` (non compositori), e 11 autori di repertorio o poeti-musicisti: Notker Balbulus, Bernart de Ventadorn, Philippe de Vitry, Johannes Ciconia, Guglielmo IX d'Aquitania, Raimbaut de Vaqueiras, Comtessa de Dia, Walther von der Vogelweide, Lorenzo da Firenze, Antonio Zacara da Teramo, John Dunstaple. Aggiunte 19 relazioni di appartenenza/contesto storicamente motivate, senza attribuzioni spurie di opere. Commit grafo: `1226ec056`, `ff0ae29f`.

### Rinascimento — copertura minima completata
Integrati **11 compositori** mancanti: Nicolas Gombert, Philippe Verdelot, Jacques Arcadelt, Sigismondo d'India, Francesco da Milano, Giovanni Maria Trabaci, John Bull, Clément Janequin, Claude Le Jeune, Luis de Milán, Antonio de Cabezón. Sono stati creati **25 archi**, di cui 11 produttivi per repertori concretamente attestati e 14 di epoca (doppia appartenenza per d'India, Trabaci, Bull). Le fonti sono nelle schede e negli archi. Attenzioni specifiche: Verdelot non ha data di morte certa; liuto e vihuela non devono essere assimilati; attribuzione del God Save the King a Bull non provata; Gombert e Josquin non sono collegati come maestro/allievo certo senza riscontro. Commit: `a675ce4`; pulizia alias non confermati: `591ffc2`.

### Totale incrementale del ciclo repertorio minimo
- Nuovi nodi: **25** (22 compositori, 3 altre figure).
- Nuovi archi: **44** (19 medievali + 25 rinascimentali).
- Controllo di integrità durante le scritture: nessuna estremità source/target inesistente e nessuna coppia source/target/kind duplicata.
- Ramo pubblico `main` non modificato.

### Coda dei prossimi 100
File: `audit_minimi_prossimi100_staging_20261008.json`.
- La coda iniziale di 100 nominativi conta **19 integrati** e **81 ancora da verificare**.
- Altri **27** nominativi restano fuori dalla prima coda.
- Il passo successivo riguarda anzitutto i 24 nomi del Barocco ancora assenti, poi Classicismo e altre epoche.
- **Gli elementi non ancora verificati in coda non sono nuovi nodi, non sono relazioni documentate e non vanno integrati automaticamente.**

### Regole permanenti
1. Repertorio storico obbligatorio per il controllo di copertura, non limite quantitativo del database.
2. Schede distinte per persone, compositori e nodi collettivi. Attenzione a varianti, pseudonimi, sovrapposizioni cronologiche.
3. La sola presenza anagrafica non conclude l'audit: indagare generi produttivi, maestri, allievi, influenze, collaborazioni, istituzioni e trasmissioni.
4. Ogni arco deve conservare fonte e spiegazione storica proporzionate alla forza del legame. Nessun collegamento arbitrario.
5. Le categorie saranno riconsiderate al termine del giro. **Non trasformare i raggruppamenti in nuove lenti visuali**.
6. Prima della pubblicazione fare verifica storica e validazione tecnica; `main` resta invariato.
