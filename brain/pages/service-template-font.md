---
id: service-template-font
title: "Service Template Font (Space Grotesk)"
category: decision
status: active
tags: [typography, font, template]
created: "2026-07-15T15:19:25"
updated: "2026-07-15T15:19:32"
---

## compiled_truth

## Decision
Service template pages use \Space Grotesk\ for headings, while normal Induxo pages use \Manrope\. This is intentional.

## Where it's defined
Each template in \induxo/template/\ defines:
\\\css
--sp-font-heading: 'Space Grotesk', 'DM Sans', system-ui, sans-serif;
--sp-font-body: 'DM Sans', system-ui, -apple-system, sans-serif;

.sp-folie h1, .sp-folie h2, .sp-folie h3 { font-family: var(--sp-font-heading); font-weight: 700; }
\\\

Space Grotesk is loaded via Google Fonts in each template's \\
ink\ tag.

## Rationale
The service pages have a distinct visual identity from the standard company pages. Space Grotesk gives a slightly more technical, modern feel appropriate for construction/trade services.

## Related
- [[template-validation-harness]]
- [[template-namespace-pattern]]


## timeline

- time: 2026-07-15T15:19:25
  kind: decision
  summary: "Created this page: Service Template Font (Space Grotesk)"
  source: live comparison session
  affects: [service-template-font]

- time: 2026-07-15T15:19:32
  kind: decision
  summary: Documented Space Grotesk font decision for service templates
  source: live comparison session
  affects: [service-template-font]
