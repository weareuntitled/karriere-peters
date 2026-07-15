import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT = resolve(__dirname);

// ─── Reference values from parent Induxo theme (live) ───
const REFERENCE = {
  url: 'http://spenglerei-peters.local/about/',
  bodyFont: '"DM Sans"',
  headingFont: 'Manrope',        // parent theme default for normal pages
  primaryBlue: '#007bff',
  h1: { size: '56px', weight: '700' },
  h2: { size: '38px', weight: '700', color: 'rgb(26, 28, 30)' },
};

// It's intentional that service templates use Space Grotesk for headings
// (defined in --sp-font-heading token). Only flag if --sp-blue is wrong.
const SERVICE_HEADING_FONT = 'Space Grotesk';

function norm(v) { return v.replace(/['"]/g, '').replace(/\s+/g, ' ').trim().toLowerCase(); }
function rgbToHex(rgb) {
  const m = rgb.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  return m ? '#' + [+m[1], +m[2], +m[3]].map(x => x.toString(16).padStart(2, '0')).join('') : rgb;
}

// ─── Validate a single live page ───
function validateLive(name, url) {
  // Run this in Chrome DevTools on the page:
  //   JSON.stringify({ ctaBg: ..., spBlue: ..., headingFont: ... })
  // Paste results into LIVE_PAGES below.
  console.log(`\n─── ${name} ───`);
  console.log(`  Navigate to ${url} and run extract snippet in DevTools.`);
  console.log('  Paste result into the LIVE_PAGES map in this script.');
}

// ─── Static: validate template PHP file ───
function validateStatic(filePath) {
  const raw = readFileSync(filePath, 'utf-8');
  const cssMatch = raw.match(/<style>([\s\S]*?)<\/style>/);
  const css = cssMatch ? cssMatch[1] : '';

  const root = css.match(/:root\s*\{([^}]*)\}/);
  if (!root) return { file: filePath, error: 'no :root block' };

  const tokens = {};
  const re = /(--[\w-]+)\s*:\s*([^;]+)/g;
  let m;
  while ((m = re.exec(root[1])) !== null) tokens[m[1].trim()] = m[2].trim();

  const issues = [];
  if (tokens['--sp-blue'] && rgbToHex(tokens['--sp-blue']) !== REFERENCE.primaryBlue) {
    issues.push(`--sp-blue: ${tokens['--sp-blue']} → should be ${REFERENCE.primaryBlue}`);
  }

  const ok = [];
  if (tokens['--sp-font-heading']) ok.push(`Heading font token: ${tokens['--sp-font-heading']} (intentional)`);
  if (tokens['--sp-font-body']) ok.push(`Body font token: ${tokens['--sp-font-body']}`);
  if (tokens['--sp-blue'] && rgbToHex(tokens['--sp-blue']) === REFERENCE.primaryBlue) {
    ok.push(`--sp-blue: ${tokens['--sp-blue']} ✅`);
  }

  return { file: filePath, tokens, issues, ok };
}

// ─── Main ───
console.log('═══════════════════════════════════════════');
console.log('  TEMPLATE CONSISTENCY VALIDATION');
console.log(`  Reference: ${REFERENCE.url}`);
console.log('═══════════════════════════════════════════');

const LAYOUT = 'C:/Users/hi/Local Sites/spenglerei-peters/app/public/wp-content/themes/induxo/template';

const templates = existsSync(LAYOUT)
  ? ['tpl-service-folientechnik.php','tpl-service-dachsanierung.php','tpl-service-fassadenverkleidung.php',
     'tpl-service-neubau.php','tpl-service-service-reparatur.php','tpl-service-spenglerarbeiten.php','tpl-kontakt.php']
  : []; // fallback to repo

if (templates.length === 0) {
  console.log('\nLive theme not found. Editing repo files only.');
  console.log(`Expected at: ${LAYOUT}`);
  process.exit(0);
}

let passed = 0, failed = 0;

for (const tpl of templates) {
  const path = resolve(LAYOUT, tpl);
  if (!existsSync(path)) { console.log(`  SKIP ${tpl} (not found)`); continue; }
  const r = validateStatic(path);
  if (r.error) { console.log(`  ERROR ${tpl}: ${r.error}`); continue; }
  
  const status = r.issues.length === 0 ? '✅' : '❌';
  console.log(`\n${status} ${tpl}`);
  
  // Show tokens
  for (const [k, v] of Object.entries(r.tokens)) {
    if (k.startsWith('--sp-blue') || k.startsWith('--sp-font') || k === '--sp-ink') {
      const marker = k === '--sp-blue' && rgbToHex(v) === REFERENCE.primaryBlue ? ' ✅' : '';
      const warn = k === '--sp-blue' && rgbToHex(v) !== REFERENCE.primaryBlue ? ' ❌ MISMATCH' : '';
      console.log(`  ${k}: ${v}${marker}${warn}`);
    }
  }

  for (const i of r.issues) { console.log(`  ❌ ${i}`); failed++; }
  for (const o of r.ok) { /* already shown */ }
  if (r.issues.length === 0) passed++;
}

console.log(`\n───────`);
console.log(`✅ ${passed} passed  ❌ ${failed} failed`);
