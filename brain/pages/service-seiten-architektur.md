---
id: service-seiten-architektur
title: Service-Seiten Architektur
category: decision
status: active
tags: [template, service, architecture]
created: "2026-07-15T15:00:09"
updated: "2026-07-15T19:56:41"
---

## compiled_truth

## Aktueller Stand

### Template-Modularisierung (abgeschlossen)
8 Templates in induxo/template/ (Parent Theme):
- 6 Service-Templates + 1 Kontakt + 1 ?ber-uns
- Jedes Template: ~110-130 Zeilen (Daten-Array + get_template_part()-Calls)
- Vorher: 870-920 Zeilen inline CSS+HTML pro Template

### Template-Parts
template-parts/
  service/   hero, intro, leistungen, materialien, galerie, faq, cta, schema, values, facts, bottom
  ueber/     hero, story, timeline, team, values, facts, gallery

### Shared CSS
assets/css/
  service-template.css   613 Zeilen (aus 7 Templates extrahiert)
  ueber-uns.css          450 Zeilen (aus tpl-ueber-uns extrahiert)

### Enqueue via functions.php
- sp_service_template_assets() laedt service-template.css/JS auf ts-service CPTs (is_singular())
- sp_ueber_template_assets() laedt ueber-uns.css + service-template.css auf tpl-ueber-uns

### Bottom CTA (wiederverwendet)
service/bottom.php wird auf Service- UND ?ber-uns-Seiten verwendet. ueber/bottom.php wurde entfernt.

### CSS-Spezifitaet
 siehe [[css-ausschluss-muster]] fuer das :not()-Muster.

### Muster: Daten-Array + get_template_part()
PHP-Template definiert -Array, ruft get_template_part() mit  auf.
Empfaengt  im Template-Part.

Font-Entscheidung: Service-Seiten nutzen Space Grotesk (intentional), siehe [[service-template-font]].


## timeline

- time: 2026-07-15T15:00:09
  kind: decision
  summary: "Created this page: Service-Seiten Architektur"
  source: created via brain create-page
  affects: [service-seiten-architektur]

- time: 2026-07-15T15:20:23
  kind: decision
  summary: "Corrected: templates live in parent theme induxo/template/, primary blue fixed"
  source: live validation session
  affects: [service-seiten-architektur]

- time: 2026-07-15T19:54:55
  kind: decision
  summary: "Modularisierung abgeschlossen: alle 8 Templates modulär, CSS extrahiert, shared bottom CTA, specificity fix"
  source: session 2026-07-15
  affects: [service-seiten-architektur]

- time: 2026-07-15T19:56:41
  kind: decision
  summary: "Added cross-reference to css-ausschluss-muster, cleaned up formatting"
  source: session 2026-07-15
  affects: [service-seiten-architektur]
