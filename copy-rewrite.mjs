import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const DIR = 'C:/Users/hi/AppData/Local/Temp/opencode';
const ICON_WORDS = new Set(['check', 'call', 'science', 'shield', 'workspace_premium', 'verified', 'arrow_forward', 'phone', 'email', 'location_on', 'schedule', 'star', 'info', 'menu', 'close', 'chevron_right', 'chevron_left', 'add', 'remove']);

const pages = [
  { file: 'scrape-01-folientechnik.json', name: 'Folientechnik', tpl: 'tpl-service-folientechnik.php' },
  { file: 'scrape-02-service-reparatur.json', name: 'Service & Reparatur', tpl: 'tpl-service-service-reparatur.php' },
  { file: 'scrape-03-neubau.json', name: 'Neubau', tpl: 'tpl-service-neubau.php' },
  { file: 'scrape-04-fassade.json', name: 'Fassadenverkleidung', tpl: 'tpl-service-fassadenverkleidung.php' },
  { file: 'scrape-05-spengler.json', name: 'Spenglerarbeiten', tpl: 'tpl-service-spenglerarbeiten.php' },
  { file: 'scrape-06-dach.json', name: 'Dachsanierung', tpl: 'tpl-service-dachsanierung.php' },
  { file: 'scrape-07-kontakt.json', name: 'Kontakt', tpl: 'tpl-kontakt.php' },
];

const JARGON = {
  'Abdichtungssysteme?n?': 'Abdichtung',
  'rissüberbrückend': 'bleibt auch bei Rissen dicht',
  'Gewährleistung': 'Garantie',
  'System-Garantie': 'Garantie',
  'wartungsarm': 'pflegeleicht',
  'normkonform': 'nach allen Regeln',
  'fachgerecht': 'fachmännisch',
  'Flüssigkunststoff-Abdichtung': 'Flüssigabdichtung',
  'Bauwerksabdichtung': 'Gebäudeabdichtung',
  'witterungsbeständig': 'wetterfest',
  'bitumenfrei': 'ohne Bitumen',
  'Dauerelastisch': 'Bleibt dauerhaft elastisch',
  'zertifizierter Fachbetrieb': 'geprüfter Betrieb',
  'zertifizierte Systeme': 'geprüfte Produkte',
  'geprüfte Systeme': 'geprüfte Produkte',
  'Kemperol-Systemen': 'Kemperol-Produkten',
  'Wolfin- und Kemperol-Systemen': 'Wolfin- und Kemperol-Produkten',
  'geprüfte Produkt-Partner': 'geprüfte Partner',
  'zertifiziert': 'geprüft',
  'Vor-Ort-Begehung': 'Termin vor Ort',
  'Auftragsbestätigung': 'Beauftragung',
  'Materialbereitstellung': 'Lieferung',
  'Referenzobjekte': 'Referenzen',
  'Instandhaltung': 'Wartung',
  'Instandsetzung': 'Reparatur',
  'Komplettsanierung': 'Komplettsanierung',
  'Korrosionsschutz': 'Rostschutz',
  'Anschlussbereiche': 'Übergänge',
  'Wärmedämmverbundsystem': 'Dämmsystem',
  'Vorhangfassade': 'Fassade',
};

function clean(text) {
  let t = text.replace(/\s+/g, ' ').trim();
  t = t.replace(/—/g, ', ');
  t = t.replace(/–/g, '-');
  for (const [j, sug] of Object.entries(JARGON)) {
    t = t.replace(new RegExp(j, 'gi'), m => {
      if (m[0] === m[0].toUpperCase() && sug[0] === sug[0].toLowerCase()) return sug[0].toUpperCase() + sug.slice(1);
      return sug;
    });
  }
  return t;
}

let output = '# Copywriting — Template-Seiten\n\n';
output += '> Regeln: kein —, kein Jargon, maximal ein Nebensatz pro Satz.\n';
output += '> Texte maschinell extrahiert und bereinigt. Manuell prüfen vor Einbau.\n\n';

for (const page of pages) {
  try {
    const data = JSON.parse(readFileSync(resolve(DIR, page.file), 'utf-8'));
    if (data.error) { output += `## ${page.name}\n\n*Fehler: ${data.error}*\n\n---\n\n`; continue; }
    
    output += `## ${page.name}\n`;
    output += `Template: \`${page.tpl}\`\n\n`;
    
    const seen = new Set();
    for (const block of data.blocks) {
      let t = clean(block.text);
      if (t.length < 5) continue;
      
      // Skip pure icon text
      if (ICON_WORDS.has(t.toLowerCase())) continue;
      // Remove leading icon words
      t = t.replace(/^(check|call|verified|science|shield|workspace_premium|star|info|phone|email|location_on)\s*/i, '').trim();
      if (t.length < 5) continue;
      
      // Fix double commas and whitespace artifacts from em-dash replacement
      t = t.replace(/,\s*,/g, ',');
      t = t.replace(/\s+,/g, ',');
      t = t.replace(/,\s+/g, ', ');
      
      // Normalize for dedup (ignore minor differences)
      const norm = t.toLowerCase().replace(/[,.!?;:]/g, '').replace(/\s+/g, ' ').trim();
      if (seen.has(norm)) continue;
      seen.add(norm);
      
      // Fix grammar: "Kostenlose Termin" → "Kostenloser Termin"
      t = t.replace(/Kostenlose\s+Termin\s+vor\s+Ort/, 'Kostenloser Termin vor Ort');
      // Fix double commas ",  ," 
      t = t.replace(/,\s*,/g, ',');
      
      if (block.type.startsWith('h')) {
        const level = parseInt(block.type[1]);
        output += `${'#'.repeat(level)} ${t}\n\n`;
      } else if (block.type === 'bullet') {
        output += `- ${t}\n`;
      } else if (block.type === 'label') {
        output += `**[${t}]**\n\n`;
      } else if (block.type === 'card') {
        output += `> ${t}\n`;
      } else {
        output += `${t}\n\n`;
      }
    }
    output += `---\n\n`;
  } catch (e) {
    output += `## ${page.name}\n\n*Fehler: ${e.message}*\n\n---\n\n`;
  }
}

const OUT = resolve('C:/Users/hi/Documents/spenglerei-peters-website', 'COPYWRITING-REWRITE.md');
writeFileSync(OUT, output);
console.log(`Geschrieben: ${OUT} (${output.split('\n').length} Zeilen)`);
