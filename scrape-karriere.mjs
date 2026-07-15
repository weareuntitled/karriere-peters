import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { resolve, basename, dirname } from 'path';

const DIST = 'C:/Users/hi/Projekte/spenglerei-peters-karriere/dist';
const OUT = 'C:/Users/hi/Documents/spenglerei-peters-website/KARRIERE-REWRITE.md';

function stripHtml(html) {
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<head[^>]*>[\s\S]*?<\/head>/gi, '')
    .replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, '')
    .replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, '')
    .replace(/<[^>]+>/g, '\n')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&ndash;/g, '-')
    .replace(/&mdash;/g, ', ')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/[ \t]+/g, ' ')
    .split('\n')
    .map(l => l.trim())
    .filter(l => l.length > 0)
    .join('\n');
}

function findHtmlFiles(dir) {
  const files = [];
  function walk(d) {
    for (const entry of readdirSync(d, { withFileTypes: true })) {
      const full = resolve(d, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name.endsWith('.html')) files.push(full);
    }
  }
  walk(dir);
  return files;
}

const pages = findHtmlFiles(DIST);

// Jargon replacements
const JARGON = {
  'zertifiziert': 'geprüft',
  'fachgerecht': 'fachmännisch',
  'Gewährleistung': 'Garantie',
  'Instandhaltung': 'Wartung',
  'Instandsetzung': 'Reparatur',
  'Referenzobjekte': 'bisherige Projekte',
  'Vor-Ort-Begehung': 'Termin vor Ort',
  'normkonform': 'nach Vorschrift',
  'wartungsarm': 'pflegeleicht',
  'witterungsbeständig': 'wetterfest',
};

function clean(text) {
  let t = text;
  t = t.replace(/—/g, ', ');
  t = t.replace(/–/g, '-');
  for (const [j, s] of Object.entries(JARGON)) {
    t = t.replace(new RegExp(j, 'gi'), m => {
      if (m[0] === m[0].toUpperCase() && s[0] === s[0].toLowerCase()) return s[0].toUpperCase() + s.slice(1);
      return s;
    });
  }
  return t;
}

let output = '# Karriere-Seite — Copywriting\n\n';
output += '> Regeln: kein —, kein Jargon, kurze Sätze.\n\n';

for (const file of pages) {
  const rel = file.replace(DIST, '').replace(/\\/g, '/');
  const html = readFileSync(file, 'utf-8');
  const text = stripHtml(html);
  const cleaned = clean(text);

  // Deduplicate lines
  const lines = cleaned.split('\n');
  const seen = new Set();
  const unique = [];
  for (const line of lines) {
    const norm = line.toLowerCase().replace(/[^a-zäöüß0-9]/g, '');
    if (norm.length < 3) continue;
    if (seen.has(norm)) continue;
    seen.add(norm);
    unique.push(line);
  }

  output += `## ${rel === '/index.html' ? 'Startseite' : rel.replace('/index.html', '').replace(/^\//, '')}\n`;
  output += `Datei: \`${rel}\`\n\n`;
  output += unique.join('\n\n');
  output += '\n\n---\n\n';
}

writeFileSync(OUT, output);
console.log(`Done: ${OUT} (${output.split('\n').length} lines)`);
