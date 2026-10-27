// Genera la imagen de portada (1200x630) de un artículo del blog con la
// identidad de la clínica: fondo crema, título en Figtree y acento verde salvia.
//
// Uso: node scripts/blog-cover.mjs <slug> "<Categoría>" "<Título>"
// Salida: public/images/blog/<slug>.png
import { createRequire } from 'node:module';
import { mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Playwright no es dependencia de la web: se usa el instalado en el sistema
// (require respeta NODE_PATH, import no). Ejecutar con NODE_PATH=$(npm root -g).
const { chromium } = createRequire(import.meta.url)('playwright');

const [slug, category, title] = process.argv.slice(2);
if (!slug || !category || !title) {
    console.error('Uso: node scripts/blog-cover.mjs <slug> "<Categoría>" "<Título>"');
    process.exit(1);
}

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'public/images/blog', `${slug}.png`);
mkdirSync(dirname(out), { recursive: true });

const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

const html = `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Figtree:wght@500;600&family=Inter:wght@500;600&display=swap" rel="stylesheet">
<style>
  *{margin:0;box-sizing:border-box}
  body{width:1200px;height:630px;background:#F3F7F4;font-family:Figtree,system-ui,sans-serif;position:relative;overflow:hidden}
  .glow1{position:absolute;width:720px;height:720px;border-radius:50%;background:#6B9E8B;opacity:.18;filter:blur(110px);top:-320px;right:-200px}
  .glow2{position:absolute;width:560px;height:560px;border-radius:50%;background:#2C6E8A;opacity:.10;filter:blur(120px);bottom:-300px;left:-180px}
  .wrap{position:absolute;inset:0;padding:84px 96px;display:flex;flex-direction:column;justify-content:space-between}
  .cat{display:inline-flex;align-items:center;gap:12px;font:600 18px Inter,sans-serif;letter-spacing:.22em;text-transform:uppercase;color:#2C6E8A}
  .dot{width:10px;height:10px;border-radius:50%;background:#6B9E8B}
  h1{font-weight:600;font-size:66px;line-height:1.08;letter-spacing:-.02em;color:#1A3A48;max-width:960px}
  .rule{width:96px;height:6px;border-radius:6px;background:#6B9E8B;margin-bottom:28px}
  .foot{display:flex;justify-content:space-between;align-items:flex-end;font:500 20px Inter,sans-serif;color:#5E7A84}
  .brand{font:600 22px Figtree,sans-serif;color:#2C6E8A}
</style></head><body>
<div class="glow1"></div><div class="glow2"></div>
<div class="wrap">
  <div class="cat"><span class="dot"></span>${esc(category)}</div>
  <div><div class="rule"></div><h1>${esc(title)}</h1></div>
  <div class="foot"><span class="brand">Clínica de la Ansiedad Catalunya</span><span>Joan Ramon Soto · Psicoanalista / Psicoterapeuta</span></div>
</div></body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: 'networkidle' }).catch(() => page.setContent(html));
await page.screenshot({ path: out, type: 'png' });
await browser.close();
console.log(out);
