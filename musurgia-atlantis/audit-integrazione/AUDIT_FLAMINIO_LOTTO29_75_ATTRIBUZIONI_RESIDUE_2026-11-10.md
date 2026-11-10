# Musurgia Atlantis — Lotto 29: tutte le 75 attribuzioni residue, triage catalografico verificabile

**Data:** 10 novembre 2026 · Branch `main` · Solo `audit-integrazione/`.

## Perimetro

Sottratti dal registro Lotto27 (137 record) i 12 già affrontati nel Lotto27 e i 50 selezionati nel Lotto28: restano **75/75** record, identificati per `source_id` e mantenuti senza cambiamenti. Nessun duplicato. In questo lotto **17** schede hanno una concordanza esterna specifica in repertori o cataloghi consultati; **58** restano con sola asserzione originale Flaminio e classificazione analitica di rischio. Il campo `reference_tier` dichiara se la fonte è secondaria. **10** dichiarazioni riportano «autore ignoto», che NON è una persona. Gli estremi restano raw (titolo, numero, nome, ID originali).

## Un confronto decisivo: Bonporti

Le quattro invenzioni della raccolta `10 Inventions, op.10` (Bologna, 1712) di **Francesco Antonio Bonporti** corrispondono a numeri di raccolta **2, 5, 6, 7** e a vecchie sigle **BWV Anh.173–176**:
- `flaminio:excel:2798` — si minore, op.10 n.2, Anh.173;
- `flaminio:excel:2799` — si bemolle maggiore, op.10 n.5, Anh.174;
- `flaminio:excel:2800` — do minore, op.10 n.6, Anh.175;
- `flaminio:excel:2801` — re maggiore, op.10 n.7, Anh.176.

Controllo incrociato: https://imslp.org/wiki/10_Inventions%2C_Op.10_%28Bonporti%2C_Francesco_Antonio%29 . **Non equiparare le quattro righe alle dieci opere dell'intera raccolta** e non duplicare gli archi padre/figlio di Bach.

## Altri casi con concordanza da repertorio secondario

Il repertorio https://tobis-notenarchiv.de/wp/en/bach-archive/supplement/supplement-iii-falsely-attributed-works/ fornisce confronti per BWV Anh.161 (Graun, **soltanto primo movimento**), 162 (Wagner **probabile**), 164 (Altnikol **possibile**), 170 (corale Rosenmüller), 171 (Pachelbel), 172 (Krebs), 178 (Purcell), 179 (Heinichen), 180 (Kellner), 181 (Krebs), 182 (Witt), 183 (Couperin), 184 (Zuccari). La **Fuga BWV Anh.180** presenta anche partiture sotto Johann Peter Kellner (F 6.3) e testimoni ottocenteschi erroneamente intestati a J. S. Bach: https://imslp.org/wiki/Fugue_in_D_minor%2C_BWV_Anh_180_%28Bach%2C_Johann_Sebastian%29 .

**Attenzione alla qualità delle concordanze:** in alcuni casi il repertorio secondario cita soltanto un elemento musicale, un movimento, un corale o una probabilità attributiva, non l'opera nel suo insieme. Non usarlo come convalida automatica dei legami.

## Conflitti mantenuti aperti

- **BWV Anh.166** — il Lotto28 riportava Johann Ludwig Bach sulla base di un riscontro precedente, mentre Tobis Notenarchiv elenca Johann Nikolaus Bach. Questo è un **conflitto fra fonti**, non una nuova decisione. Verificare con fonti critiche primarie e correggere, se necessario, anche il Lotto28 con addendum non distruttivo.
- **BWV Anh.157** — Tobis lo assegna a compositore sconosciuto, mentre Flaminio lo attribuisce a Telemann e il Lotto28 segnalava due sigle TWV alternative; nessuna scelta automatica.
- **BWV Anh.159–160** — il repertorio secondario mantiene etichette tradizionali, ma la revisione filologica dei Lotti 28 e precedenti documenta interpretazioni più recenti e una possibile composizione pluristratificata. Vietato sovrascrivere le revisioni con liste vecchie.
- **BWV 53, `Schlage doch, gewünschte Stunde`** — nel corpus Flaminio si legge Hoffmann: l'attribuzione è comunemente proposta ma non unanimemente sicura; una cronologia del 1730 contrasta con la morte di Hoffmann nel 1715. È un caso da validare su manoscritti, non solo sul nome.

## Restanti righe Vivaldi e anomalie

Tra i 31 casi Vivaldi del Lotto29 si trovano `autore ignoto`, nomi alternativi e appunti `Inizialmente catalogata come RV ...` incollati nella medesima stringa del compositore. Mantenerli separati come testo grezzo; **non convertire** automaticamente i numeri locali in RV. Rilevata anche una riga con titolo che inizia con `>`, da correggere soltanto in strato di normalizzazione.

## Stato della migrazione

**75/75 righe tracciate, 17 concordanze esterne di forza eterogenea, 58 ancora senza confronto esterno specifico; zero `work_id` validati, zero autorizzazioni di merge, zero alterazioni al grafo pubblico.** Nessuna certificazione globale dei 137 claim (12 + 50 + 75) è implicata.

**LOTTO 30:** affrontare gruppi di attribuzione Vivaldi con verifica delle sigle RV e delle denominazioni originali, 132 rubriche vuote, poi 199 cantate Bach per BWV/incipit e i 112 casi multipli del Lotto25; dare priorità a pubblicazioni critiche e cataloghi tematici autorevoli, rispetto a repertori compilativi.
