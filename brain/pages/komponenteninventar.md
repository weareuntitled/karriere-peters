---
id: komponenteninventar
title: "Komponenteninventar (WordPress + Astro)"
category: concept
status: active
created: "2026-07-15T17:08:25"
updated: "2026-07-15T17:08:41"
---

## compiled_truth

## WordPress-Induxo (Hauptseite)

### Templates (7)
| Datei | Name | Typ |
|--------|------|-----|
| `template/homepage-template.php` | HomePage | page |
| `template/full-width-template.php` | Full Width | page, ts-service, ts-projects |
| `template/tpl-kontakt.php` | Kontakt | page |
| `template/tpl-ueber-uns.php` | Ueber uns | page |
| `template/tpl-service-dachsanierung.php` | Service: Dachsanierung | ts-service |
| `template/tpl-service-spenglerarbeiten.php` | Service: Spenglerarbeiten | ts-service |
| `template/tpl-service-fassadenverkleidung.php` | Service: Fassadenverkleidung | ts-service |
| `template/tpl-service-service-reparatur.php` | Service: Service & Reparatur | ts-service |
| `template/tpl-service-neubau.php` | Service: Neubau | ts-service |
| `template/tpl-service-folientechnik.php` | Service: Folientechnik | ts-service |
| `template/template-woo.php` | woocommerce | page |

**Fazit:** 7 Templates, alle das gleiche Pattern: ~920 Zeilen Inline-CSS/JS, kopiert statt shared. Nur Content-Texte, Bilder, Schema.org variieren.

### Template Parts (26)
- **Header:** 5 Varianten (header, transparent, standard, classic, box)
- **Footer:** 2 Varianten (footer, footer-style-1)
- **Banner:** 5 (blog, page, service, project, shop)
- **Navigation:** nav-primary.php
- **Blog:** 4 format templates + content, single, page, none
- **Blog Parts:** tags, related-post, author
- **Pagination:** pagination-style1.php
- **SEO:** Keine ??? manuelles Schema.org inline in Service-Templates

### Elementor Widgets (15)
OwlSlider, HistorySlider, Title, Testimonial, Service, Project, ProjectSlider, Team, OperateLocations, Latestnews, TimelineHistorySlider, AnnualReport, WorkingProcess, ServiceLists, VideoPopup

### Widget Areas (5)
sidebar-1, sidebar-woo, footer-left, footer-center, footer-right

### CPTs (3)
ts-projects, ts-service, ts-team

### Shortcodes
Keine (nur Plugin-Shortcodes f??r Mailchimp)

### Fazit WordPress
- 7 Service-Templates teilen ~920 Zeilen CSS/JS ??? Duplikationskandidaten #1
- 5 Header-Varianten, 2 Footer ??? Component-basiertes System fehlt
- Kein Build-Step, alles inline

---

## Astro-Karriereseite

### Layout (3)
| Komponente | Zweck |
|-----------|-------|
| `Base.astro` | HTML-Shell, Meta-Tags, Google-Fonts, Analytics, Scroll-Reveal |
| `SiteHeader.astro` | Sticky Nav, Logo, Burger-Men??, CTA |
| `Footer.astro` | 3-Spalten Footer |

### Sections (9)
| Komponente | Zweck | Datenquelle |
|-----------|-------|------------|
| `Hero.astro` | Hero mit Image, Badge, CTAs | `data.ts` |
| `Stellen.astro` | Job-Karten-Grid | `data.ts` |
| `Benefits.astro` | 6 Benefit-Karten | `data.ts` |
| `Gehaltsrechner.astro` | Live-Gehaltsrechner mit Slider | hartcodiert |
| `Team.astro` | Team-Foto | hartcodiert |
| `CtaBanner.astro` | CTA-Banner | hartcodiert |
| `Prozess.astro` | 5-Schritte Timeline | `data.ts` |
| `FAQ.astro` | Accordion FAQ | `data.ts` |
| `Bewerbung.astro` | Bewerbungsformular (Web3Forms) | `data.ts` |

### Pages (5)
`index.astro`, `stellen/[slug].astro`, `api/jobs.json.ts`, `datenschutz.astro`, `impressum.astro`

### Shared (2)
`data.ts` ??? alle Inhalte zentral, `global.css` ??? 650 Zeilen Design-System

### Fazit Astro
- 11 Komponenten, 100% datengetrieben aus `data.ts`
- Kein Template-Code dupliziert
- Typografie, Farben, Spacing zentral in `global.css`
- Build-Step (Astro) mit SSG output

---

## Refactoring-Plan

### Schritt 2: WordPress aufr??umen
1. **Inline-CSS/JS auslagern:** Service-Template-CSS (920??7 Zeilen) in eine shared `assets/css/service-template.css`
2. **Service-Template vereinheitlichen:** Ein `template/tpl-service.php` mit variablem Content (z.B. ACF-Fields statt 7 Dateien)
3. **Header reduzieren:** Active-Version von 5 auf 1 Standard + 1 Transparent

### Schritt 3: Karriere-Komponenten auf WordPress portieren
1. **Footer** ??? als `template-parts/footer/footer.php` (ersetzt Widget-basierten Footer)
2. **NavBar** ??? in `header.php` integrieren
3. **Stellen.astro** ??? WordPress-Shortcode oder Block (wird schon geplant in [[wordpress-job-embed]])
4. **Bewerbung.astro** ??? k??nnte als `template/tpl-bewerbung.php` existieren

Siehe auch [[design-tokens]], [[wordpress-job-embed]], [[karriereseite-standalone]]


## timeline

- time: 2026-07-15T17:08:25
  kind: decision
  summary: "Created this page: Komponenteninventar (WordPress + Astro)"
  source: session 2026-07-15
  affects: [komponenteninventar]

- time: 2026-07-15T17:08:41
  kind: decision
  summary: "Erstfassung: vollständiges Inventar WordPress-Induxo (Templates, Template Parts, Elementor Widgets, CPTs) und Astro-Karriere (Layout, Sections, Pages, Shared). Refactoring-Plan in 2 Schritten."
  source: codebase analysis 2026-07-15
  affects: [komponenteninventar]
