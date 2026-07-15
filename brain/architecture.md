---
slug: architecture
title: System architecture
role: system architecture
updated: "2026-07-15T19:56:10"
---

# System architecture

## Template-Architektur

### Live Templates: Parent Theme
\\\
induxo/template/
  tpl-service-spenglerarbeiten.php    Proof-of-Concept, 130 Zeilen
  tpl-service-dachsanierung.php
  tpl-service-fassadenverkleidung.php
  tpl-service-neubau.php
  tpl-service-folientechnik.php
  tpl-service-service-reparatur.php
  tpl-kontakt.php
  tpl-ueber-uns.php                  110 Zeilen
\\\

### Template-Parts (shared)
\\\
template-parts/
  service/   hero, intro, leistungen, materialien, galerie, faq, cta, schema, values, facts, bottom
  ueber/     hero, story, timeline, team, values, facts, gallery
\\\

### CSS-Extraktion
\\\
assets/css/
  service-template.css   613 Zeilen (alle Service-Styles + sp-folie-bottom)
  ueber-uns.css          450 Zeilen (alle ?ber-uns-Styles)
\\\

### Enqueue (functions.php)
- \sp_service_template_assets()\ ? l?dt CSS/JS auf ts-service CPTs (\is_singular()\)
- \sp_ueber_template_assets()\ ? l?dt ueber-uns.css + service-template.css auf tpl-ueber-uns

### Shared Bottom CTA
\service/bottom.php\ wird auf Service- UND ?ber-uns-Seiten verwendet. \ueber/bottom.php\ entfernt.

### CSS-Namespace
- Service: \.sp-folie-{section}\
- ?ber uns: \.sp-ueber-{section}\
- Shared: \.sp-folie-bottom\ (Bottom CTA)

### Design-Tokens
- \--accent: #0071bc\ (dunkelblau), \--accent-light: #007bff\ (hellblau)
- \--sp-blue: #007bff\ (konsistent mit Parent Theme)
- Body: DM Sans, Service-Headings: Space Grotesk, ?ber-uns-Headings: Manrope

### Validation
\
ode validate-tokens.mjs\ validiert \--sp-blue\ gegen Parent-Induxo-Referenz.
