# Astro-Migrations- & Recruiting-Plan

> Stand: Juli 2026  
> Ziel: Gesamte Website auf Astro migrieren, Karriere-Seite als primärer Fokus.  
> Architektur-Regel: Keine Komponente überschreitet 200 Zeilen Code.

---

## 1. Zusammenfassung der Entscheidungen

| Thema | Entscheidung |
|-------|-------------|
| Scope | Gesamte Website auf Astro migrieren |
| Projektstruktur | Ein Astro-Projekt für Hauptsite + Karriere |
| Content-Management | Markdown/MDX im Git-Repository |
| Design | Bestehendes Liquid-Glass-System 1:1 portieren |
| Karriere-Startseite | Root der Karriere-Subdomain = Conversion-Landingpage |
| Über-uns | Emotionaler Einstieg, verlinkt von Karriere |
| Zielgruppen | Junge Fachkräfte (20–30) + erfahrene Handwerker (30–45) |
| Primärer Karriere-CTA | Typebot-Chatbot („Kennenlernen/Probearbeiten vereinbaren“) |
| Kontaktformular | Formspree |
| Bilder | Astro `<Image />`-Komponente mit `src/assets/images/` |
| Hosting | Hostinger oder All-Inkl (Shared Hosting) |
| Deployment | GitHub Actions baut `astro build`, deployt `dist/` per SFTP/SSH |

---

## 2. Ziele

### Business-Ziele
1. Mehr qualifizierte Bewerbungen für Spengler, Folientechniker und Dachdecker generieren.
2. Employer Brand als moderner, familiärer Ausbildungs- und Meisterbetrieb stärken.
3. Ladezeit, Wartbarkeit und Core Web Vitals gegenüber WordPress verbessern.

### Qualitätsziele
- Jede Astro-Komponente ≤ 200 Zeilen Code.
- 100 % statische Seiten (kein clientseitiges JS für Content).
- Bilder werden automatisch in WebP/AVIF optimiert.
- Design bleibt visuell identisch zur bestehenden WordPress-Seite.

---

## 3. Architektur

### Tech-Stack

| Ebene | Technologie |
|-------|-------------|
| Framework | Astro 5.x |
| Sprache | TypeScript |
| Styling | Bestehende CSS-Dateien (`design-tokens.css`, `liquid-glass-system.css`, `style.css`) |
| Schrift | DM Sans via Google Fonts |
| Icons | Material Symbols |
| Bilder | Astro Assets + `<Image />` |
| Formulare | Typebot (Karriere), Formspree (Kontakt) |
| Content | Markdown/MDX + Astro Content Collections |
| Hosting | Hostinger / All-Inkl |
| CI/CD | GitHub Actions |

### Domain-Setup

```
spenglerei-peters.de      → Astro-Hauptsite
karriere.spenglerei-peters.de  → Karriere-Landingpage (entweder Subpath oder eigenes Deployment)
```

**Empfehlung:** Beide Domains auf denselben Astro-Build zeigen lassen. Astro liefert je nach Host unterschiedliche Inhalte aus, oder wir nutzen einen Subpath-Redirect. Bei Shared Hosting ist die einfachste Lösung: beide Domains auf `dist/` zeigen, Astro rendert die Karriere-Seite unter `/karriere`, und der Webserver macht `karriere.spenglerei-peters.de` → `spenglerei-peters.de/karriere`.

---

## 4. Komponenten-Design-Prinzipien

### 200-Zeilen-Regel

Jede Datei mit Logik, Markup oder Styling darf maximal 200 Zeilen enthalten. Wenn eine Komponente größer wird, wird sie aufgeteilt.

**Konkrete Regeln:**
- Eine Komponente macht **eine Sache**.
- Layout-Komponenten enthalten keinen Inhalt.
- Inhalts-Komponenten enthalten kein Layout.
- Styling wird in separaten `.css`-Dateien gehalten, nicht inline.
- Wiederholende Strukturen (Cards, Buttons) werden in atomare Komponenten ausgelagert.

### Komponenten-Hierarchie

```
layouts/          → Seiten-Rahmen (max. 200 Zeilen)
  BaseLayout.astro
  CareerLayout.astro

sections/         → Seitenabschnitte (max. 200 Zeilen)
  HeroSection.astro
  JobsSection.astro
  BenefitsSection.astro
  TeamSection.astro
  ProjectGallerySection.astro
  ContactSection.astro

components/       → Wiederverwendbare UI-Elemente (max. 200 Zeilen)
  GlassButton.astro
  GlassCard.astro
  GlassBadge.astro
  JobCard.astro
  BenefitCard.astro
  TeamCard.astro
  ProjectCard.astro
  TypebotEmbed.astro
  FormspreeForm.astro
  Navigation.astro
  Footer.astro

content/          → Markdown/MDX-Inhalte
  pages/
  jobs/
  projects/
  team/

styles/           → Globale CSS-Dateien
  design-tokens.css
  liquid-glass-system.css
  style.css
```

---

## 5. Content-Modell

### Content Collections

```
src/content/
├── pages/
│   ├── index.mdx           # Home
│   ├── ueber-uns.mdx       # Über uns
│   ├── dienstleistungen.mdx
│   ├── projekte.mdx
│   ├── kontakt.mdx
│   ├── karriere.mdx        # Karriere-Landingpage
│   ├── impressum.mdx
│   └── datenschutz.mdx
├── jobs/
│   ├── spengler-geselle.md
│   ├── folientechniker.md
│   └── dachdecker.md
├── projects/
│   ├── oberfoehring.md
│   ├── leopolstrasse.md
│   ├── edelweissstrasse.md
│   ├── alpenstrasse.md
│   ├── herrenchiemseestrasse.md
│   ├── elsaesser-strasse.md
│   └── poschinger-weiher.md
└── team/
    ├── spenglermeister.md
    └── folientechniker.md
```

### Frontmatter-Schema

#### Jobs
```yaml
---
title: "Spengler-Geselle (m/w/d)"
type: "Geselle"
location: "86556 Kühbach"
hours: "Vollzeit"
summary: "Wir suchen einen erfahrenen Spengler-Gesellen für Dach- und Fassadenarbeiten."
order: 1
---
```

#### Projects
```yaml
---
title: "Villa Oberföhring"
location: "Oberföhringer Straße, München"
images:
  - "001-oberfoehringerstrasse.jpg"
  - "002-oberfoehringerstrasse.jpg"
order: 1
---
```

#### Team
```yaml
---
name: "Max Mustermann"
role: "Spenglermeister"
image: "team-spenglermeister.jpg"
cert: "Spenglermeister"
---
```

---

## 6. Seitenstruktur

### Hauptseiten

| Seite | Zweck | Haupt-Komponenten |
|-------|-------|-------------------|
| Home | Firmenimage + Übersicht | Hero, Services-Teaser, About-Teaser, Project-Teaser, CTA |
| Über uns | Emotionaler Einstieg | Timeline, Team, Certifications, Partner |
| Dienstleistungen | Leistungsübersicht | Service Grid, Detail Cards, CTA |
| Projekte | Referenzobjekte | Filterable Gallery, Project Cards |
| Kontakt | Erreichbarkeit | Contact Form, Map, Info Cards, FAQ |
| Impressum | Rechtlich | Text |
| Datenschutz | Rechtlich | Text |

### Karriere-Seiten

| Seite | Zweck | Haupt-Komponenten |
|-------|-------|-------------------|
| /karriere (Root) | Conversion-Landingpage | Hero, Jobs Section, Benefits, Team-Teaser, Project-Teaser, Typebot-CTA, FAQ |
| /karriere/team | Detaillierte Team-/Kultur-Seite | Team Grid, Work Environment, Values |
| /karriere/jobs | Alle Stellen auf einen Blick | Job Cards, Filters |
| /karriere/jobs/[slug] | Einzelne Stellenanzeige | Job Detail, Typebot-CTA |

---

## 7. Komponenten-Inventar

### Layouts

| Komponente | Aufgabe | Zeilen-Ziel |
|------------|---------|-------------|
| `BaseLayout.astro` | HTML-Grundgerüst, Fonts, Meta-Tags, Nav, Footer | ≤ 80 |
| `CareerLayout.astro` | Variante mit abgespeckter Navigation für Fokus | ≤ 80 |

### Sections

| Komponente | Aufgabe | Zeilen-Ziel |
|------------|---------|-------------|
| `HeroSection.astro` | Hero mit Bild, Headline, Subline, CTA | ≤ 120 |
| `JobsSection.astro` | Liste der aktuellen Jobs | ≤ 120 |
| `BenefitsSection.astro` | Raster mit Benefits | ≤ 120 |
| `TeamSection.astro` | Team-Teaser/Grid | ≤ 120 |
| `ProjectGallerySection.astro` | Projekte-Teaser/Galerie | ≤ 140 |
| `AboutTimelineSection.astro` | Firmengeschichte als Timeline | ≤ 140 |
| `CertificationsSection.astro` | Auszeichnungen/Zertifikate | ≤ 100 |
| `ContactSection.astro` | Kontakt-Form + Infos | ≤ 140 |
| `FaqSection.astro` | FAQ-Accordion | ≤ 120 |
| `CtaBannerSection.astro` | Call-to-Action-Banner | ≤ 80 |

### UI-Komponenten

| Komponente | Aufgabe | Zeilen-Ziel |
|------------|---------|-------------|
| `GlassButton.astro` | Primärer/Sekundärer Button | ≤ 60 |
| `GlassCard.astro` | Container für Inhalte | ≤ 60 |
| `GlassBadge.astro` | Pill-Badge | ≤ 40 |
| `JobCard.astro` | Job-Preview-Card | ≤ 80 |
| `BenefitCard.astro` | Benefit-Item | ≤ 60 |
| `TeamCard.astro` | Team-Mitglied | ≤ 80 |
| `ProjectCard.astro` | Projekt-Preview | ≤ 80 |
| `Navigation.astro` | Hauptnavigation | ≤ 120 |
| `Footer.astro` | Footer | ≤ 100 |
| `TypebotEmbed.astro` | Typebot-Chatbot-Einbindung | ≤ 60 |
| `FormspreeForm.astro` | Kontaktformular | ≤ 100 |
| `ImageGallery.astro` | Bildergalerie mit Astro Image | ≤ 140 |

---

## 8. Dateistruktur

```
spenglerei-peters-astro/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── images/           # Alle 48 Bilder + Team-Fotos
│   │   └── fonts/
│   ├── components/
│   │   ├── ui/               # Atome: Button, Card, Badge
│   │   ├── cards/            # JobCard, TeamCard, ProjectCard
│   │   ├── forms/            # TypebotEmbed, FormspreeForm
│   │   └── layout/           # Navigation, Footer
│   ├── content/
│   │   ├── config.ts         # Content-Collections-Schema
│   │   ├── pages/
│   │   ├── jobs/
│   │   ├── projects/
│   │   └── team/
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── CareerLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── ueber-uns.astro
│   │   ├── dienstleistungen.astro
│   │   ├── projekte.astro
│   │   ├── kontakt.astro
│   │   ├── karriere/
│   │   │   ├── index.astro
│   │   │   ├── team.astro
│   │   │   ├── jobs/
│   │   │   │   ├── index.astro
│   │   │   │   └── [slug].astro
│   │   │   └── danke.astro
│   │   ├── impressum.astro
│   │   └── datenschutz.astro
│   ├── sections/             # Seitenabschnitte
│   ├── styles/
│   │   ├── design-tokens.css
│   │   ├── liquid-glass-system.css
│   │   ├── style.css
│   │   └── global.css        # Import + kleine Fixes
│   └── utils/
│       ├── imageHelpers.ts
│       └── formatters.ts
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs       # Optional: nur für Utilities
├── tsconfig.json
└── README.md
```

---

## 9. Implementierungs-Phasen

### Phase 1: Setup (ca. 1 Tag)
- [ ] Astro-Projekt initialisieren
- [ ] TypeScript konfigurieren
- [ ] Bestehende CSS-Dateien nach `src/styles/` kopieren
- [ ] `BaseLayout.astro` und globale Imports bauen
- [ ] GitHub Actions Deployment-Workflow einrichten
- [ ] Ersten Test-Deploy auf Hostinger/All-Inkl durchführen

### Phase 2: Karriere-Landingpage (ca. 2–3 Tage)
- [ ] Content Collections für Jobs anlegen
- [ ] `HeroSection.astro`, `JobsSection.astro`, `BenefitsSection.astro` bauen
- [ ] Typebot-Einbindung
- [ ] Karriere-Root-Seite (`/karriere`) zusammensetzen
- [ ] Mobile Responsiveness prüfen

### Phase 3: Über-uns-Seite (ca. 1–2 Tage)
- [ ] Content für Timeline, Team, Zertifikate anlegen
- [ ] `AboutTimelineSection.astro`, `TeamSection.astro`, `CertificationsSection.astro` bauen
- [ ] Über-uns-Seite (`/ueber-uns`) zusammensetzen

### Phase 4: Hauptsite-Migration (ca. 3–4 Tage)
- [ ] Home, Dienstleistungen, Projekte, Kontakt migrieren
- [ ] 48 Bilder in `src/assets/images/` integrieren
- [ ] Formspree für Kontaktformular einrichten
- [ ] FAQ-Section bauen
- [ ] Impressum + Datenschutz übernehmen

### Phase 5: Feinschliff & Go-Live (ca. 1–2 Tage)
- [ ] SEO-Meta-Tags für alle Seiten
- [ ] 301-Redirects von alten WordPress-URLs
- [ ] Performance-Test (Lighthouse)
- [ ] Domain-Umstellung
- [ ] Alte WordPress-Seite deaktivieren

---

## 10. Offene Punkte

| Punkt | Status | Nächster Schritt |
|-------|--------|------------------|
| Exakte Benefits/Arbeitsbedingungen | Offen | Vom Betrieb erfragen |
| Team-Fotos | Offen | Fotos machen oder aus bestehendem Material auswählen |
| Hostinger vs. All-Inkl | Offen | Entscheidung fällen |
| Typebot-Flow | Offen | Chatbot-Logik für Karriere definieren |
| Formspree-Account | Offen | Account anlegen |
| Alte URLs / Redirects | Offen | WordPress-URL-Struktur dokumentieren |

---

## 11. 200-Zeilen-Regel: Durchsetzung

Jede neue Komponente wird vor Merge auf Zeilenzahl geprüft:

```bash
# Beispiel-Check im CI
find src -name "*.astro" -o -name "*.ts" -o -name "*.css" | while read f; do
  lines=$(wc -l < "$f")
  if [ "$lines" -gt 200 ]; then
    echo "FAIL: $f hat $lines Zeilen (max. 200)"
    exit 1
  fi
done
```

Alternativ: Manuelle Review-Regel, keine Datei > 200 Zeilen.

---

**Nächster Schritt:** Phase 1 starten – Astro-Projekt initialisieren und erstes Deployment testen.
