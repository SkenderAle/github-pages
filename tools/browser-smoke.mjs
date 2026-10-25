#!/usr/bin/env node
/**
 * Musurgia Mundi — browser smoke-test reale (Chromium/Playwright).
 * Eseguire da root con un server HTTP locale:
 *   npm install --no-save --package-lock=false playwright
 *   npx playwright install chromium
 *   python3 -m http.server 8765 --bind 127.0.0.1
 *   node tools/browser-smoke.mjs
 * Risorse esterne volutamente bloccate: NON verifica YouTube, licenze o immagini remote.
 */
import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';

const base = process.env.MM_BROWSER_BASE || 'http://127.0.0.1:8765/';
const root = new URL(base);
const screenshots = 'audit-browser-artifacts';
const errors = [], observations = [];
const tablet = { width: 390, height: 844 };
const desktop = { width: 1280, height: 800 };
const paths = [
  'medioevo/', 'rinascimento/', 'barocco/', 'classicismo/',
  'romanticismo/', 'melodramma/', 'musica-da-camera/',
  'dalla-sinfonia-alla-rapsodia/', 'parola-e-canto/', 'concerti/',
  'risorgimento/', 'dal-musical-al-film/', 'melodramma-classico/',
  'anatomia-del-melodramma/'
];
const assert = (condition, message) => { if (!condition) errors.push(message); };

await mkdir(screenshots, { recursive: true });
const browser = await chromium.launch({ headless: true });
async function makePage(viewport) {
  const context = await browser.newContext({ viewport, locale: 'it-IT', reducedMotion: 'reduce' });
  // Smoke-test offline: le dipendenze esterne non devono determinare l'esito
  // dell'impaginazione né innescare riproduzioni multimediali.
  await context.route('**/*', route => {
    const requested = new URL(route.request().url());
    if (requested.origin !== root.origin) return route.abort();
    return route.continue();
  });
  const page = await context.newPage();
  page.setDefaultTimeout(15000);
  return { page, context };
}
async function visit(page, path) {
  const response = await page.goto(new URL(path, root).href, {
    waitUntil: 'domcontentloaded',
    timeout: 45000
  });
  assert(response?.ok(), path + ': HTTP non valido (locale)');
  await page.waitForLoadState('load', { timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(200);
}
try {
  for (const path of paths) {
    for (const viewport of [tablet, desktop]) {
      const { page, context } = await makePage(viewport);
      try {
        await visit(page, path);
        const metrics = await page.evaluate(() => ({
          documentWidth: document.documentElement.scrollWidth,
          windowWidth: window.innerWidth,
          lang: document.documentElement.lang,
          title: document.title,
          viewportMeta: !!document.querySelector('meta[name="viewport"]'),
          autoPlaying: [...document.querySelectorAll('iframe')].some(
            f => /[?&]autoplay=1(?:&|$)/.test(f.getAttribute('src') || '')
          )
        }));
        assert(metrics.viewportMeta, path + ': meta viewport assente');
        assert(!!metrics.title, path + ': title assente');
        assert(!metrics.autoPlaying, path + ': iframe con autoplay=1 all’apertura');
        // Non assumere che la pagina intera non possa avere tabelle scorrevoli.
        // Il test segnala lo sforamento per la revisione delle viste mobile.
        const overflow = Math.max(0, metrics.documentWidth - metrics.windowWidth);
        observations.push({
          page: path, width: viewport.width, overflow, title: metrics.title
        });
        if (viewport.width === 390 && overflow > 16)
          errors.push(path + ': sforamento orizzontale mobile di ' + overflow + 'px');
        if (path === 'barocco/' || path === 'concerti/' || path === 'romanticismo/')
          await page.screenshot({
            path: screenshots + '/' + path.replaceAll('/', '') + '-' + viewport.width + '.png',
            fullPage: false
          });
      } catch (e) {
        errors.push(path + ' @' + viewport.width + ': ' + e.message);
      } finally {
        await context.close();
      }
    }
  }

  // Il menu non deve ricordare il capitolo aperto nel passaggio precedente.
  {
    const { page, context } = await makePage(desktop);
    try {
      await visit(page, 'barocco/');
      const toggle = page.locator('.atlas-autonav .atlas-menu-toggle').first();
      await toggle.waitFor();
      await toggle.click();
      const chapter = page.locator('.atlas-autonav details.mm-compact-chapter').first();
      await chapter.waitFor();
      await chapter.locator('summary').first().click();
      assert(await chapter.evaluate(n => n.open), 'Barocco: capitolo non apribile');
      await toggle.click();
      await page.waitForTimeout(150);
      assert(!(await chapter.evaluate(n => n.open)),
        'Barocco: capitolo rimane aperto dopo la chiusura del menu');
      await toggle.click();
      assert(!(await chapter.evaluate(n => n.open)),
        'Barocco: capitolo si riapre senza richiesta del lettore');
    } catch (e) { errors.push('Navigazione capitoli: ' + e.message); }
    finally { await context.close(); }
  }

  // I segnalibri creati da JavaScript devono comparire dopo la costruzione delle schede.
  const dynamicAnchors = [
    ['musica-da-camera/', 'mm-opera-camera-biber-quindici-sonate-del-rosario'],
    ['parola-e-canto/', 'mm-opera-canto-arnold-schonberg-waldsonne-vier-lieder-op-2-n-4'],
    ['dalla-sinfonia-alla-rapsodia/', 'chabrier-048']
  ];
  for (const [path, id] of dynamicAnchors) {
    const { page, context } = await makePage(desktop);
    try {
      await visit(page, path + '#' + encodeURIComponent(id));
      await page.locator('[id="' + id + '"]').first().waitFor({ timeout: 15000 });
      assert(await page.locator('[id="' + id + '"]').count() === 1,
        path + ': ancora dinamica duplicata ' + id);
    } catch (e) { errors.push(path + ': segnalibro dinamico ' + id + ': ' + e.message); }
    finally { await context.close(); }
  }

  // Prepara / ferma: il semplice accesso non avvia video, neppure dal filtro URL.
  {
    const { page, context } = await makePage(desktop);
    try {
      await visit(page,
        'dalla-sinfonia-alla-rapsodia/?autore=Chabrier&opera=Espa%C3%B1a#catalogo');
      const item = page.locator('article#chabrier-048');
      await item.waitFor({ timeout: 15000 });
      assert(await page.locator('iframe[src*="youtube-nocookie.com"]').count() === 0,
        'Sinfonica: player video caricato prima del clic');
      await item.locator('button[data-load="chabrier-048"]').click();
      const iframe = item.locator('iframe');
      await iframe.waitFor();
      const src = await iframe.getAttribute('src');
      assert(!!src && src.includes('youtube-nocookie.com/embed/9iHFZX9xD3M'),
        'Sinfonica: URL di registrazione non riconosciuto');
      assert(!!src && src.includes('autoplay=0'),
        'Sinfonica: player impostato in autoplay');
      await item.locator('button[data-stop="chabrier-048"]').click();
      assert(await item.locator('iframe').count() === 0,
        'Sinfonica: iframe non rimosso dopo Ferma');
    } catch (e) { errors.push('Sinfonica, avvio manuale: ' + e.message); }
    finally { await context.close(); }
  }
} finally {
  await browser.close();
}
const report = {
  type: 'musurgia-browser-smoke-v1',
  date: new Date().toISOString(),
  base, testedPages: paths.length, viewportWidths: [390, 1280],
  results: observations, errors,
  caveat: 'Browser Chromium locale; risorse esterne bloccate. Non certifica riproducibilità dei video YouTube o immagini remote.'
};
await writeFile(screenshots + '/report.json', JSON.stringify(report, null, 2) + '\n');
console.log('Browser smoke: ' + paths.length + ' pagine × 2 viewport, '
  + dynamicAnchors.length + ' segnalibri dinamici, menu e player manuale. Problemi: '
  + errors.length);
for (const e of errors) console.error('ERRORE: ' + e);
if (errors.length) process.exitCode = 1;
