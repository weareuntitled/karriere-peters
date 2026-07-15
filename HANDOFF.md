<<<<<<< HEAD
# Handoff: Completed Work

## Farb-Fix (2026-07-15)
7 Templates: `--sp-blue: #0071bc` → `#007bff`. `node validate-tokens.mjs` → 7/7.

## Copywriting (2026-07-15)
Alle 7 Templates live umgesetzt: kein —, kein Jargon, kurze Sätze.

| Template | Status |
|----------|--------|
| tpl-service-folientechnik.php | ✅ live |
| tpl-service-service-reparatur.php | ✅ live |
| tpl-service-neubau.php | ✅ live |
| tpl-service-fassadenverkleidung.php | ✅ live |
| tpl-service-spenglerarbeiten.php | ✅ live |
| tpl-service-dachsanierung.php | ✅ live |
| tpl-kontakt.php | ✅ live |

## Files
| File | Purpose |
|------|---------|
| `validate-tokens.mjs` | CSS-Validierung |
| `copy-audit.mjs` | Text-Audit |
| `copy-rewrite.mjs` | Mechanische Bereinigung |
| `COPYWRITING-AUDIT.md` | Audit-Ergebnis |
| `COPYWRITING-REWRITE.md` | Finale Texte |
| `PLAN.md` | Methodik |
| `VALIDATION-SESSION.md` | Session-Protokoll |
| `HANDOFF.md` | Diese Datei |
=======
# Projektübergabe — Spenglerei Peters Karriere-Seite

Stand: laufender Dev-Server, ~50% fertig. Domain und Hosting noch offen.

## Wo es liegt

Projekt-Root: `C:\Users\hi\Projekte\spenglerei-peters-karriere`

Stack: Astro 4.16 (statisch), kein Framework-Frontend, kein CMS. Vanilla CSS in `src/styles/global.css`.

Dev-Server: läuft auf `http://127.0.0.1:4321/` (gestartet via `node node_modules/astro/astro.js dev` im Projekt-Root, Output-Log: `.planning/sketches/001-hero-direction/dev-out.log`).

## Was steht

- Layout + alle Sections (Hero, Stellen, Qualität, Benefits, Prozess, FAQ, Bewerbungsformular)
- Inhalte in `src/data.ts` zentral — eine Datei für alles
- Farben auf peters.local-Blau umgestellt: `--accent: #0071BC` (vorher Orange #c2410c)
- Akzent-Hover: `--accent-hover: #005a96`
- Pill-Backgrounds / Icon-Boxen von warm-orange auf hellblau angepasst (#e6f2fb / #bcdcf3)
- Sticky-Nav, Mobile-responsive Grids, FAQ als native `<details>`
- Web3Forms-Endpoint im Formular eingebaut, Access-Key noch Platzhalter `DEIN_WEB3FORMS_ACCESS_KEY`

## Was du noch tun musst

**Inhalt:**
- `src/data.ts`: Telefon, E-Mail, Web3Forms-Access-Key (kostenlos auf web3forms.com), Inhaber-Name
- Bewerbungs-Form: realer Access-Key einsetzen, sonst gehen Bewerbungen ins Leere

**Bilder:**
- Alle Platzhalter sind Unsplash-URLs (Spengler, Baustelle, Werkstatt)
- Echte Bilder aus dem Betrieb einsetzen: in `src/components/Hero.astro` (Hauptfoto + 5 Thumbnails) und `src/components/Qualitaet.astro` (Foto rechts)
- Bilder idealerweise nach `public/img/` legen und mit relativen Pfaden referenzieren

**Domain / Hosting:**
- Astro-Dev läuft auf `127.0.0.1:4321`, nicht auf `spenglerei-peters.local`
- Drei realistische Optionen fürs Go-Live (siehe Ende)

**Optional / später:**
- Impressum + Datenschutz als eigene Pages (footerlinks zeigen schon drauf)
- SEO: OpenGraph-Bild, structured data (JobPosting-Schema wäre nice für Google for Jobs)
- Form-Spamschutz: Honeypot-Feld oder Web3Forms hat eingebauten Bot-Schutz

## Domain-Entscheidung (offen)

Du wolltest "Subdomain auf Hauptdomain". Drei Wege:

| Option | Aufwand | Vorteil | Nachteil |
|---|---|---|---|
| A. `karriere.spenglerei-peters.de` als eigenes Astro-Static-Deploy (Netlify/Vercel/Hetzner) | klein | saubere Trennung, WP bleibt unberührt | zweites Hosting |
| B. Astro statisch exportieren → in `wp-proper` als statisches Theme-Asset unter `/karriere` einbinden | mittel | alles unter einer Domain | muss in WP-Theme passen |
| C. Local-WP zweite Site `karriere-spenglerei-peters.local` mit Astro-Static-Output | mittel | lokale Dev-Parität mit peters.local | später Migration nötig |

Für A spricht: schnellster Weg zu was Production-reifem, kein WP-Gefrickel. Domain zeigt eh auf einen Webhost, da kann auch ein zweites Static-Deploy parallel liegen.

## Encoding-Hinweis (zur Sicherheit)

Die Texte in `data.ts` sind echtes UTF-8, Browser-Rendering hatte beim ersten Anlauf Probleme weil Astro-Dev den `Content-Type` Header ohne `charset=utf-8` ausliefert. Das `<meta charset="utf-8">` im HTML-Head fängt das ab. Falls Browser trotzdem latin1 raten: Hard-Reload (Ctrl+Shift+R) und/oder Browser-Cache leeren. Im Production-Build (`npm run build` + Static-Serve) liefert Astro den Charset-Header korrekt mit.

## Build-Befehle

```bash
cd "C:\Users\hi\Projekte\spenglerei-peters-karriere"
npm run dev      # Dev auf 127.0.0.1:4321
npm run build    # Static output nach dist/
npm run preview  # dist/ lokal serven
```

## Verzeichnisstruktur (was wofür)

```
src/
├── data.ts                    # ALLE Inhalte hier ändern
├── layouts/Base.astro         # HTML-Shell, SEO-Meta, lädt global.css
├── components/
│   ├── Nav.astro              # Sticky Top-Nav
│   ├── Hero.astro             # Variante A — Split mit Foto
│   ├── Stellen.astro          # 3 Karten (Spengler/Folientechniker/Dachdecker)
│   ├── Qualitaet.astro        # 6 Säulen als Arbeitstag (Tagesbeginn, Werkzeug/Auto, München/Umland, Planung, Qualität, Feierabend) + Foto
│   ├── Benefits.astro         # 6 Benefits-Grid mit SVG-Icons
│   ├── Prozess.astro          # 5-Schritte Bewerbungsprozess
│   ├── FAQ.astro              # 6 Fragen als <details>
│   ├── Bewerbung.astro        # Web3Forms-Formular
│   └── Footer.astro
└── styles/global.css          # Design-Tokens oben, Komponenten-Styles unten

.planning/sketches/001-hero-direction/
├── SKETCH.md                  # A/B/C-Vergleich, Winner dokumentiert
└── dev-out.log                # Astro-Dev-Logs (live)
```
>>>>>>> 8a807e2174aa6d1cb8cdacc3f168bcf1ced0b84c
