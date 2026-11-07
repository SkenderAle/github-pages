/* Musurgia Mundi — mappa di studio viva (pilota: Medioevo).
   La mappa ragionata conserva il Markdown curato; le intestazioni si
   sincronizzano ai titoli del DOM a ogni caricamento. La vista "Struttura"
   viene costruita integralmente dai titoli correnti della pagina. */
(async function () {
  'use strict';

  const root = document.getElementById('mm-medioevo-map');
  const status = document.getElementById('mm-mappa-stato');
  const buttons = Array.from(document.querySelectorAll('[data-mm-mappa-mode]'));
  if (!root) return;

  const groups = [
    { title: '1. Radici, liturgia e memoria', ids: ['radici', 'voce', 'gesto'] },
    { title: '2. La nascita della polifonia', ids: ['polifonia'] },
    { title: '3. La musica fuori dalla liturgia', ids: ['cammina'] },
    { title: '4. Strumenti, immagini e società', ids: ['occhio', 'convento', 'lodare'] },
    { title: '5. La musica come numero e come costruzione', ids: ['numero', 'arsnova', 'trecento', 'continua'] },
    { title: '6. Fonti e bibliografia', ids: ['bibliografia'] },
    { title: '7. Percorsi didattici', ids: ['uda-percorsi'] }
  ];

  const chapter = document.querySelector('main.content');
  const allSections = Array.from(chapter?.querySelectorAll('section[id]') || [])
    .filter(section => section.parentElement === chapter &&
      section.id !== 'mappa-studio');
  const sections = new Map(allSections.map(section => [section.id, section]));
  const knownIds = new Set(groups.flatMap(group => group.ids));
  let source = '';
  let mode = 'concetti';

  const escapeLabel = value => String(value || '').replace(/[\\[\]]/g, '\\$&')
    .replace(/\s+/g, ' ').trim();

  function sectionTitle(id) {
    const section = sections.get(id);
    const heading = section?.querySelector(':scope > .section-title h2, :scope > h2');
    return heading?.textContent?.replace(/\s+/g, ' ').trim() || '';
  }

  function conceptMap(markdown) {
    // Aggiorna le etichette dei nodi con link alle sezioni, senza cancellare
    // i rami di approfondimento scelti editorialmente dall'autore.
    return markdown.replace(/^(#{2,3})\s+(\d+\.\s+)?\[([^\]]+)\]\(https:\/\/musurgiamundi\.com\/medioevo\/#([^)]+)\)/gm,
      (line, level, number, previousTitle, id) => {
        const liveTitle = sectionTitle(id);
        if (!liveTitle) return line;
        return level + ' ' + (number || '') + '[' + escapeLabel(liveTitle) + '](#' + id + ')';
      });
  }

  function structureMap() {
    const result = ['# MEDIOEVO — Musurgia Mundi', ''];
    const linked = new Set();

    function addSection(id) {
      const section = sections.get(id);
      if (!section) return;
      linked.add(id);
      result.push('### [' + escapeLabel(sectionTitle(id) || id) + '](#' + id + ')');

      // Solo titoli realmente presenti nel capitolo, mai testo ricostruito
      // automaticamente da frasi isolate. Per i sottotitoli senza id assegna
      // ancore locali stabili per la sessione di lettura.
      const headings = Array.from(section.querySelectorAll('h3'))
        .filter(heading => !heading.closest('[hidden], dialog, [aria-hidden="true"], .mm-uda'));
      headings.forEach((heading, index) => {
        if (!heading.id) {
          const idBase = 'mm-mappa-' + id + '-h3-' + (index + 1);
          let candidate = idBase;
          let suffix = 1;
          while (document.getElementById(candidate)) candidate = idBase + '-' + (++suffix);
          heading.id = candidate;
        }
        const title = heading.textContent.replace(/\s+/g, ' ').trim();
        if (title) result.push('- [' + escapeLabel(title) + '](#' + heading.id + ')');
      });
      if (!headings.length) result.push('- Vai alla sezione per approfondire');
      result.push('');
    }

    groups.forEach(group => {
      result.push('## ' + group.title);
      group.ids.forEach(addSection);
      result.push('');
    });

    const ungrouped = allSections.filter(section => !linked.has(section.id) && !knownIds.has(section.id));
    if (ungrouped.length) {
      result.push('## Nuove sezioni del capitolo');
      ungrouped.forEach(section => addSection(section.id));
    }
    return result.join('\n');
  }

  function render() {
    if (!source) return;
    root.markdown = mode === 'concetti' ? conceptMap(source) : structureMap();
    buttons.forEach(button => {
      const selected = button.dataset.mmMappaMode === mode;
      button.setAttribute('aria-pressed', String(selected));
    });
    if (status) status.textContent = mode === 'concetti'
      ? 'Mappa ragionata: concetti originali conservati, titoli aggiornati dal capitolo.'
      : 'Struttura viva: titoli e sottotitoli letti direttamente da questa pagina.';
  }

  // In una mappa inserita nella stessa pagina, i link ai nodi devono navigare
  // alla relativa sezione senza aprire una scheda vuota o duplicata.
  function enableInternalLinks() {
    root.shadowRoot?.addEventListener('click', event => {
      const anchor = event.composedPath().find(node =>
        node?.tagName?.toLowerCase?.() === 'a' && node.getAttribute?.('href'));
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      let url;
      try { url = new URL(href, window.location.href); } catch { return; }
      const currentPath = window.location.pathname.replace(/\/$/, '');
      if (url.origin !== window.location.origin ||
          url.pathname.replace(/\/$/, '') !== currentPath ||
          !url.hash) return;
      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!target) return;
      event.preventDefault();
      window.history.pushState(null, '', url.hash);
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, true);
  }

  buttons.forEach(button => button.addEventListener('click', () => {
    mode = button.dataset.mmMappaMode;
    render();
  }));

  const fullscreen = document.getElementById('mm-mappa-fullscreen');
  const mapPanel = document.getElementById('mm-mappa-pannello');
  fullscreen?.addEventListener('click', async () => {
    if (!mapPanel?.requestFullscreen) return;
    try {
      if (document.fullscreenElement === mapPanel) await document.exitFullscreen();
      else await mapPanel.requestFullscreen();
    } catch { /* Il browser può rifiutare la modalità a schermo intero. */ }
  });

  try {
    const response = await fetch('./mappa-studio.md', { cache: 'no-store' });
    if (!response.ok) throw new Error('File della mappa non raggiungibile');
    source = await response.text();
    if (!source.includes('# MEDIOEVO')) throw new Error('Sorgente della mappa non valida');
    await import('https://cdn.jsdelivr.net/npm/@markmap/element/+esm');
    await customElements.whenDefined('markmap-view');
    root.options = { foldLevel: 2, zoom: true, pan: true, fitPadding: 30 };
    enableInternalLinks();
    render();
  } catch (error) {
    if (status) status.textContent = 'Mappa non disponibile in questo momento. Puoi consultare il testo Markdown dal collegamento sottostante.';
    console.warn('Musurgia Mundi: mappa viva non caricata', error);
  }
})();
