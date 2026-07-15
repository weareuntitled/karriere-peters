---
id: copywriting-workflow
title: "Copywriting Workflow & Stilregeln"
category: decision
status: active
tags: [copywriting, text, workflow, qualität]
created: "2026-07-15T15:48:14"
updated: "2026-07-15T16:22:27"
---

## compiled_truth

## Workflow (angewendet auf Karriereseite)

Gleiche Pipeline auch auf \spenglerei-peters-karriere\ (Astro 4) angewendet:

### Copywriting
- \src/data.ts\: 8 Satzzeichen-Fixes (? als Satztrenner ? .), 2 Jargon-Fixes
- \src/components/Bewerbung.astro\, \src/layouts/Base.astro\: 2 Satzzeichen-Fixes
- Datenschutz/Impressum unangetastet (Rechtstexte)

### Styling-Angleichung
Hauptseite = Single Source of Truth. Karriere-Styling angeglichen:
- \--accent\: \#00355f ? \#007bff
- Body font: Inter ? DM Sans
- Google Fonts Link aktualisiert in \Base.astro\
- \DESIGN.md\ aktualisiert

## Verwandt
- [[template-validation-harness]]
- [[service-template-font]]


## timeline

- time: 2026-07-15T15:48:14
  kind: decision
  summary: "Created this page: Copywriting Workflow & Stilregeln"
  source: "brainstorm+rewrite session 2026-07-15"
  affects: [copywriting-workflow]

- time: 2026-07-15T15:48:29
  kind: decision
  summary: "Dokumentiert: 4-Schritt-Workflow, Stilregeln, Jargon-Tabelle, Beispiel"
  source: "brainstorm+rewrite session 2026-07-15"
  affects: [copywriting-workflow]

- time: 2026-07-15T16:22:27
  kind: decision
  summary: "Karriereseite: copywriting fixes + styling an Hauptseite angeglichen"
  source: session 2026-07-15
  affects: [copywriting-workflow]
