import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const DIR = 'C:/Users/hi/AppData/Local/Temp/opencode';

const pages = [
  { file: 'scrape-01-folientechnik.json', name: 'Folientechnik', url: '/service/folientechnik/' },
  { file: 'scrape-02-service-reparatur.json', name: 'Service & Reparatur', url: '/service/service-reparatur/' },
  { file: 'scrape-03-neubau.json', name: 'Neubau', url: '/service/neubau/' },
  { file: 'scrape-04-fassade.json', name: 'Fassadenverkleidung', url: '/service/fassadenverkleidung/' },
  { file: 'scrape-05-spengler.json', name: 'Spenglerarbeiten', url: '/service/flachdach-abdichtung/' },
  { file: 'scrape-06-dach.json', name: 'Dachsanierung', url: '/service/sanierungen/' },
  { file: 'scrape-07-kontakt.json', name: 'Kontakt', url: '/contact-two/' },
  { file: 'scrape-08-about.json', name: 'About (Referenz)', url: '/about/' },
];

// ─── Jargon-Wörterbuch ───
const JARGON = new Map([
  ['Abdichtungssystem', 'Dichtung'],
  ['rissüberbrückend', 'dehnbar, reißt nicht'],
  ['Gewährleistung', 'Garantie'],
  ['System-Garantie', 'Garantie'],
  ['wartungsarm', 'pflegeleicht'],
  ['normkonform', 'nach allen Regeln'],
  ['fachgerecht', 'fachmännisch, richtig'],
  ['Flüssigkunststoff-Abdichtung', 'Flüssig-Dichtung'],
  ['Bauwerksabdichtung', 'Gebäude-Dichtung'],
  ['witterungsbeständig', 'wetterfest'],
  ['bitumenfrei', 'ohne Bitumen'],
  ['Dauerelastisch', 'bleibt elastisch'],
  ['Detailabdichtungen', 'Abdichtungen an Ecken und Kanten'],
  ['Anschluss- und Detailabdichtungen', 'Abdichtung an Übergängen'],
  ['Fachbetrieb', 'Betrieb'],
  ['zertifizierter Fachbetrieb', 'geprüfter Betrieb'],
  ['Systeme', 'Produkte, Lösungen'],
  ['zertifizierte Systeme', 'geprüfte Produkte'],
  ['Hersteller', 'Produzent'],
  ['Untergrund', 'Boden, Fläche'],
  ['Vor-Ort-Begehung', 'Besuch vor Ort'],
  ['Auftragsbestätigung', 'Auftrag'],
  ['Materialbereitstellung', 'Materiallieferung'],
  ['Gebäudehülle', 'Gebäude-Außenhaut'],
  ['Anforderungsprofil', 'Anforderungen'],
  ['Referenzobjekte', 'Beispiele, bisherige Projekte'],
  ['Instandhaltung', 'Wartung'],
  ['Instandsetzung', 'Reparatur'],
  ['Flächenabdichtung', 'Abdichtung'],
  ['Komplettsanierung', 'Sanierung'],
  ['Bestandssanierung', 'Sanierung im Bestand'],
  ['Korrosionsschutz', 'Rostschutz'],
  ['Wärmeschutz', 'Dämmung'],
]);

// ─── Satzkomplexität prüfen ───
function subclauseCount(text) {
  // Count relative pronouns, subordinating conjunctions
  const markers = /\b(dass|weil|wenn|obwohl|damit|sondern|wobei|wodurch|wofür|worauf|womit|wonach|weshalb|deren|dessen|denen|welche[rsnm]?)\b/gi;
  const matches = text.match(markers);
  // Also count commas minus simple list commas
  const commas = (text.match(/,/g) || []).length;
  return { subclauses: matches ? matches.length : 0, commas };
}

// ─── Geviertstrich prüfen ───
function hasEmDash(text) {
  return text.includes('—') || text.includes('–');
}

// ─── Jargon prüfen ───
function findJargon(text) {
  const found = [];
  for (const [jargon, suggestion] of JARGON) {
    if (text.toLowerCase().includes(jargon.toLowerCase())) {
      found.push({ word: jargon, suggestion });
    }
  }
  return found;
}

// ─── Rewrite a text block ───
function rewrite(text) {
  let cleaned = text;
  
  // Remove em dashes — replace with comma or period
  cleaned = cleaned.replace(/—/g, ', ');
  cleaned = cleaned.replace(/–/g, '-');
  
  // Replace jargon
  for (const [jargon, suggestion] of JARGON) {
    const re = new RegExp(jargon, 'gi');
    cleaned = cleaned.replace(re, m => {
      // Preserve first-letter capitalization
      if (m[0] === m[0].toUpperCase() && suggestion[0] === suggestion[0].toLowerCase()) {
        return suggestion[0].toUpperCase() + suggestion.slice(1);
      }
      return suggestion;
    });
  }
  
  return cleaned;
}

// ─── MAIN ───
let output = '# Copywriting Audit & Rewrite\n\n';
output += `> Regeln: kein Geviertstrich (—), kein Jargon, max. 1 Nebensatz\n\n`;
output += `---\n\n`;

let totalIssues = 0;
let totalBlocks = 0;

for (const page of pages) {
  try {
    const data = JSON.parse(readFileSync(resolve(DIR, page.file), 'utf-8'));
    if (data.error) {
      output += `## ${page.name}\n\n*Fehler: ${data.error}*\n\n---\n\n`;
      continue;
    }

    output += `## ${page.name}\n`;
    output += `URL: \`${page.url}\`\n\n`;
    
    let pageIssues = 0;
    
    for (const block of data.blocks) {
      totalBlocks++;
      const text = block.text;
      const sc = subclauseCount(text);
      const emDash = hasEmDash(text);
      const jargon = findJargon(text);
      const hasIssues = sc.subclauses > 1 || emDash || jargon.length > 0;
      
      // Rewrite text
      const rewritten = rewrite(text);
      
      if (hasIssues) {
        pageIssues++;
        totalIssues++;
        output += `### ❌ Block ${totalBlocks}\n\n`;
        output += `**Original:** ${text}\n\n`;
        
        if (sc.subclauses > 1) {
          output += `- ⚠ ${sc.subclauses} Nebensätze + ${sc.commas} Kommas → Satz aufteilen\n`;
        }
        if (emDash) {
          output += `- ⚠ Geviertstrich gefunden\n`;
        }
        if (jargon.length > 0) {
          for (const j of jargon) {
            output += `- ⚠ Jargon: "${j.word}" → "${j.suggestion}"\n`;
          }
        }
        
        output += `\n**Vorschlag:** ${rewritten}\n\n`;
      } else if (block.type === 'text' && text.length > 30) {
        // Show rewritten version even for clean blocks
        output += `### ✅ Block ${totalBlocks}\n\n`;
        output += `**Original:** ${text}\n\n`;
        output += `**Bereinigt:** ${rewritten}\n\n`;
      }
    }
    
    output += `---\n\n`;
    
  } catch (e) {
    output += `## ${page.name}\n\n*Fehler beim Lesen: ${e.message}*\n\n---\n\n`;
  }
}

// Summary
output += `\n## Zusammenfassung\n\n`;
output += `- **${totalBlocks}** Textblöcke analysiert\n`;
output += `- **${totalIssues}** Blöcke mit Problemen\n`;
output += `- Regeln: kein —, kein Jargon, Sätze kurz\n`;

const outPath = resolve('C:/Users/hi/Documents/spenglerei-peters-website', 'COPYWRITING-AUDIT.md');
writeFileSync(outPath, output);
console.log(`Geschrieben: ${outPath}`);
console.log(`${totalBlocks} Blöcke, ${totalIssues} mit Problemen`);
