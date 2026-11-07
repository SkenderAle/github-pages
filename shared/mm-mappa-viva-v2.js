/* Musurgia Mundi — mappe di studio vive, motore condiviso v2.
   Fonte: un Markdown ragionato per pagina.
   Vista strutturale: titoli e sottotitoli reali del documento, ricavati al caricamento.
   Non interpreta semanticamente le modifiche al testo discorsivo. */
(async function () {
  'use strict';
  const wrapper = document.getElementById('mappa-studio');
  const root = wrapper?.querySelector('markmap-view');
  if (!root) return;

  const status = wrapper.querySelector('#mm-mappa-stato');
  const buttons = [...wrapper.querySelectorAll('[data-mm-mappa-mode]')];
  const panel = wrapper.querySelector('#mm-mappa-pannello');
  const fullscreen = wrapper.querySelector('#mm-mappa-fullscreen');
  const sourceUrl = root.dataset.mmSource || './mappa-studio.md';
  // Considera anche i capitoli articolati in <article class="chapter">,
  // come nel Romanticismo: i nodi non devono essere limitati ai <section>.
  const sectionElements = [...document.querySelectorAll('section[id], article.chapter[id]')]
    .filter(section => section !== wrapper &&
      !section.closest('#mappa-studio') &&
      (section.matches('article.chapter[id]') ||
       !section.parentElement?.closest('section[id]')));
  const sections = new Map(sectionElements.map(section => [section.id, section]));
  let source = '';
  let mode = 'concetti';
  let groups = [];

  const clean = value => String(value || '').replace(/\s+/g, ' ').trim();
  const escapeLabel = value => clean(value)
    .replace(/\\/g, '\\\\').replace(/([\[\]])/g, '\\$1');
  const localId = url => {
    const hash = String(url || '').match(/#([a-zA-Z0-9_-]+)/);
    return hash ? hash[1] : '';
  };

  function titleFor(id) {
    const el = document.getElementById(id);
    if (!el) return '';
    if (/^H[1-6]$/.test(el.tagName)) return clean(el.textContent);
    const heading = el.querySelector(':scope > .section-title h2, :scope > h2, .section-title h2, h2, h3');
    return heading ? clean(heading.textContent) : '';
  }

  function readGroups(markdown) {
    const output = [];
    let current = null;
    for (const line of markdown.split(/\r?\n/)) {
      const group = line.match(/^##\s+(.+)$/);
      if (group) {
        const raw = group[1];
        current = { title: clean(raw.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')), ids: [] };
        output.push(current);
        const ownLink = raw.match(/\[[^\]]+\]\(([^)]+)\)/);
        const id = ownLink ? localId(ownLink[1]) : '';
        if (id) current.ids.push(id);
      } else if (current) {
        const linked = line.match(/^###\s+(?:\d+\.\s*)?\[[^\]]+\]\(([^)]+)\)/);
        const id = linked ? localId(linked[1]) : '';
        if (id && !current.ids.includes(id)) current.ids.push(id);
      }
    }
    return output;
  }

  function reasonedMap(markdown) {
    return markdown.split(/\r?\n/).map(line => {
      // Solo etichette dei nodi navigabili: i concetti restano autoriali.
      const match = line.match(/^(#{2,4})\s+(\d+\.\s*)?\[([^\]]+)\]\(([^)]+)\)(.*)$/);
      if (!match) return line;
      const id = localId(match[4]);
      const title = id && titleFor(id);
      return title
        ? match[1] + ' ' + (match[2] || '') + '[' + escapeLabel(title) + '](#' + id + ')' + match[5]
        : line;
    }).join('\n');
  }

  function headingsFor(section) {
    if (section.id === 'verifica') return [];
    if (section.id === 'uda-percorsi') {
      return [...section.querySelectorAll('details.mm-uda[id]')].map((el, index) => {
        const title = clean(el.querySelector('.mm-uda-title')?.textContent) || 'UDA ' + (index + 1);
        return '- [' + escapeLabel(title) + '](#' + el.id + ')';
      });
    }
    const headingSelector = section.matches('article.chapter') || (section.matches('section.chapter') && section.querySelector(':scope > h3')) ? 'h4' : 'h3';
    const headings = [...section.querySelectorAll(headingSelector)]
      .filter(el => !el.closest('dialog, [hidden], [aria-hidden="true"], .mm-uda, .mm-study-map'))
      .filter(el => {
        const named = el.closest('[id]');
        return !named || named === section || !groups.some(group => group.ids.includes(named.id));
      });
    const list = [];
    for (const heading of headings) {
      const label = clean(heading.textContent);
      if (!label) continue;
      if (!heading.id) {
        const slug = 'mm-mappa-' + section.id + '-' + headingSelector + '-' + (list.length + 1);
        let id = slug, counter = 2;
        while (document.getElementById(id)) id = slug + '-' + counter++;
        heading.id = id;
      }
      list.push('- [' + escapeLabel(label) + '](#' + heading.id + ')');
    }
    return list;
  }

  function structuralMap() {
    const rootTitle = clean(source.match(/^#\s+(.+)$/m)?.[1]) || 'Musurgia Mundi';
    const lines = ['# ' + rootTitle, ''];
    const used = new Set();

    function addSection(id) {
      const el = document.getElementById(id);
      if (!el || !el.isConnected) return;
      used.add(id);
      const title = titleFor(id) || id;
      lines.push('### [' + escapeLabel(title) + '](#' + id + ')');
      const subsections = headingsFor(el);
      if (subsections.length) lines.push(...subsections);
      lines.push('');
    }

    for (const group of groups) {
      lines.push('## ' + group.title);
      for (const id of group.ids) addSection(id);
      lines.push('');
    }

    const extras = sectionElements.filter(section => !used.has(section.id));
    if (extras.length) {
      lines.push('## Nuove sezioni del capitolo');
      extras.forEach(section => addSection(section.id));
    }
    return lines.join('\n');
  }

  function render() {
    if (!source) return;
    root.markdown = mode === 'concetti' ? reasonedMap(source) : structuralMap();
    buttons.forEach(button => button.setAttribute('aria-pressed',
      String(button.dataset.mmMappaMode === mode)));
    if (status) status.textContent = mode === 'concetti'
      ? 'Mappa ragionata: approfondimenti conservati, titoli e collegamenti sincronizzati con il capitolo.'
      : 'Struttura viva: titoli, nuove sezioni e sottoparagrafi ricavati dalla pagina pubblicata.';
  }

  function internalNavigation() {
    root.addEventListener('click', event => {
      const link = event.composedPath().find(node =>
        node?.tagName?.toLowerCase?.() === 'a' && node.getAttribute?.('href'));
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href) return;
      let url;
      try { url = new URL(href, location.href); } catch { return; }
      const normalize = path => path.replace(/\/index\.html$/, '/').replace(/\/$/, '');
      if (url.origin !== location.origin || normalize(url.pathname) !== normalize(location.pathname)) return;
      const id = decodeURIComponent(url.hash.slice(1));
      const target = document.getElementById(id);
      if (!target) return;
      event.preventDefault();
      event.stopPropagation();
      const go = () => {
        window.history.pushState(null, '', '#' + encodeURIComponent(id));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
      if (document.fullscreenElement) Promise.resolve(document.exitFullscreen()).finally(go);
      else go();
    }, true);
  }

  buttons.forEach(button => button.addEventListener('click', () => {
    if (button.dataset.mmMappaMode === mode) return;
    mode = button.dataset.mmMappaMode;
    render();
  }));

  fullscreen?.addEventListener('click', async () => {
    if (!panel?.requestFullscreen) return;
    try {
      if (document.fullscreenElement === panel) await document.exitFullscreen();
      else await panel.requestFullscreen();
    } catch (error) {
      console.info('Modalità schermo intero non disponibile', error);
    }
  });

  try {
    const response = await fetch(sourceUrl, { cache: 'no-store' });
    if (!response.ok) throw new Error('Sorgente Markdown non raggiungibile: ' + response.status);
    source = await response.text();
    if (!/^#\s+.+/m.test(source)) throw new Error('Il Markdown non ha un titolo');
    groups = readGroups(source);
    if (!groups.length) throw new Error('Il Markdown non contiene macrosezioni');
    await import('https://cdn.jsdelivr.net/npm/@markmap/element/+esm');
    await customElements.whenDefined('markmap-view');
    root.options = { foldLevel: 2, zoom: true, pan: true, fitPadding: 30 };
    internalNavigation();
    render();
  } catch (error) {
    if (status) status.textContent = 'Impossibile visualizzare la mappa. Puoi consultare il file Markdown attraverso il collegamento «Scarica il Markdown».';
    console.error('Musurgia Mundi: errore nella mappa viva', error);
  }
})();
