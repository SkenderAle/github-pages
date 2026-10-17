# Musurgia Mundi — Audit hero figurativi · Controllo documentario e correttivi
**Data:** 18 ottobre 2026 · **Branch:** `main` · **Base verificata:** `bfa2aac231ff356d0ac4338eb4ea1373a46035e9`

## Esito
Il lotto I era già pubblicato nel commit `bfa2aac231ff356d0ac4338eb4ea1373a46035e9` (successivo a `9aceb11754e18415c13a202459a36f424610fb83`): i sei hero risultano inseriti nel codice delle rispettive pagine. Questa verifica **non** ricrea né sostituisce gli hero; corregge un residuo incongruo nel Rinascimento e precisa un credito di datazione.

| Pagina | Opera in uso | Verifica iconografica |
| --- | --- | --- |
| `medioevo/` | *Cantigas de Santa María*, Codice dei musicisti, f. 39v (ca. 1280), Escorial | Manoscritto del tempo, conservata la grande M grafica; pubblico dominio. |
| `musica-da-camera/` | Gerrit van Honthorst, *The Concert* (1623), National Gallery of Art, Washington | Musica d'insieme e pratica sociale; Commons CC0/NGA Open Access. |
| `dalla-sinfonia-alla-rapsodia/` | Edgar Degas, *L'Orchestre de l'Opéra* (ca. 1870), Musée d'Orsay | Rappresenta una buca d'orchestra teatrale, non una sinfonia: relazione con la pratica orchestrale generale; pubblico dominio. |
| `parola-e-canto/` | Caravaggio, *Suonatore di liuto* (1595–1596), Ermitage | Voce, liuto e musica scritta nello stesso dipinto; pubblico dominio. |
| `post-romanticismo/` | Umberto Boccioni, *La città che sale* (1910), MoMA | Futurismo e modernizzazione; non pretende di rappresentare tutte le correnti musicali; pubblico dominio. |
| `dal-musical-al-film/` | Georges Méliès, bozzetto per *Le Voyage dans la Lune* (1902) | Immaginario del cinema delle origini; non indicare come manifesto definitivo; pubblico dominio. |

## Correzioni di questo intervento
1. `rinascimento/index.html`: rimossa l'ultima occorrenza CSS della riproduzione delle *Cinque giornate di Milano*, sostituendola con il riferimento all'*Uomo vitruviano* già usato nell'override grafico. Opera visualizzata e taglio dell'hero preservati; nessun riferimento storico anacronistico residuo in testata.
2. `parola-e-canto/index.html`: credito cronologico del *Suonatore di liuto* reso più preciso, **1595–1596** secondo l'Ermitage.

## Verifiche statiche
- Confrontate le sei pagine con il commit precedente al lotto I (`9aceb117`): **zero ID HTML rimossi, zero ID aggiunti**; conteggi di elementi `<script>` e `<iframe>` invariati.
- Nel confronto delle sei pagine non compaiono nuove occorrenze di `autoplay`; nelle audioteche esistono parametri espliciti `autoplay=0`. Non si è riaperto il funzionamento dei lettori o la logica degli ancoraggi.
- Le sei fonti Wikimedia sono state individuate, e corrispondono a opere realmente catalogate. Le immagini sono incorporate tramite CSS (varianti di dimensione ridotta ove disponibili), con credito cliccabile. CSS mobile e gradiente per la leggibilità già introdotti nel lotto I.
- Nessun cambiamento alla grande M del Medioevo, alla selezione degli hero preesistenti, agli script, ai video o alla navigazione.

## Fonti primarie / schede
- Cantigas: https://commons.wikimedia.org/wiki/File:Cantigas_de_Santa_Maria,_Musician%27s_Codex,_page_Bl-2_039V.jpg
- Honthorst: https://commons.wikimedia.org/wiki/File:Gerrit_van_Honthorst%2C_The_Concert%2C_1623%2C_NGA_163184.jpg
- Degas: https://commons.wikimedia.org/wiki/File:Edgar_Degas_-_The_Orchestra_at_the_Opera_-_Google_Art_Project.jpg
- Caravaggio: https://commons.wikimedia.org/wiki/File:The_Lute_Player-Caravaggio_%28Hermitage%29.jpg
- Datazione Ermitage: https://support.hermitagemuseum.org/en/projects/caravaggio
- Boccioni: https://commons.wikimedia.org/wiki/File:The_City_Rises_by_Umberto_Boccioni_1910.jpg
- Méliès: https://commons.wikimedia.org/wiki/File:Voyage_dans_la_Lune_affiche.jpg
- Leonardo: https://commons.wikimedia.org/wiki/File:Uomo_Vitruviano.jpg

## Controlli ancora necessari sul sito pubblicato
Un test CSS statico **non** equivale a collaudo visivo nel browser: resta da validare in browser reale l'effettiva erogazione delle varianti CDN Wikimedia e il ritaglio su schermi piccoli/larghi. In particolare, per `dal-musical-al-film/` controllare la resa verticale del bozzetto di Méliès. Eventuali richieste di thumbnail che gli strumenti remoti non riescono ad aprire non sono da sole prova che l'immagine sia rotta.
