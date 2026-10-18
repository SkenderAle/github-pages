# Verifica collegamenti bidirezionali dell’Atlante · 18 ottobre 2026

Verificati: **84** rimandi puntuali in **13** pagine.
- Ritorni espliciti: 22.
- Ritorni integrabili tramite script condiviso: 62.
- Ancore mancanti: 0.

shared/atlas-anchor-arrival-v1.js aggiunge, al caricamento di ciascuna pagina, un collegamento diretto all'Atlante per gli span di ancoraggio delle schede individuali privi di ritorno. I link statici già presenti non sono duplicati.

Verifica del codice e della sua sintassi; il funzionamento DOM va confermato con uno smoke test nel browser reale. La raggiungibilità di ciascuna fonte esterna va auditata separatamente.
