---
id: template-validation-harness
title: Template Validation Harness
category: decision
status: active
tags: [validation, css, template, testing]
created: "2026-07-15T15:11:37"
updated: "2026-07-15T15:19:20"
---

## compiled_truth

## Final state (2026-07-15)

### Discovery: templates live in parent theme
The 7 PHP templates exist in \induxo/template/\ (parent theme), NOT in \induxo-child/\. The child theme copy is obsolete.

### Primary blue: fixed
All 7 templates had \--sp-blue: #0071bc\. Parent Induxo uses \--primary: #007bff\. Fixed across:
- tpl-service-folientechnik.php
- tpl-service-dachsanierung.php
- tpl-service-fassadenverkleidung.php
- tpl-service-neubau.php
- tpl-service-service-reparatur.php
- tpl-service-spenglerarbeiten.php
- tpl-kontakt.php

Also fixed shadows and derived tokens (\--sp-blue-dark\, \--sp-blue-tint\, rgba values).

### Space Grotesk: intentional
Service templates use \--sp-font-heading: 'Space Grotesk'\ by design. Normal Induxo pages use Manrope. This is an intentional distinction between service pages and standard pages ? NOT a bug.

### Validation script
\
ode validate-tokens.mjs\ scans all 7 templates and verifies \--sp-blue\ matches \#007bff\. Output: 7 passed, 0 failed.

### Learned
- Always check the LIVE theme directory, not just the repo copy
- Templates evolved in the parent theme after initial child theme development
- Design decisions (Space Grotesk vs Manrope) are encoded in template tokens, not accidents


## timeline

- time: 2026-07-15T15:11:37
  kind: decision
  summary: "Created this page: Template Validation Harness"
  source: brainstorm session 2026-07-15
  affects: [template-validation-harness]

- time: 2026-07-15T15:11:45
  kind: decision
  summary: "Initial: documented validation approach, only 1 mismatch found (primary blue)"
  source: brainstorm session
  affects: [template-validation-harness]

- time: 2026-07-15T15:14:23
  kind: decision
  summary: "Final findings: 2 mismatches (heading font, primary blue), 3 additional improvements documented"
  source: live comparison via Chrome DevTools
  affects: [template-validation-harness]

- time: 2026-07-15T15:19:20
  kind: decision
  summary: "Corrected: Space Grotesk is intentional, templates live in parent theme, primary blue fix applied to 7 files"
  source: live validation session
  affects: [template-validation-harness]
