---
id: css-ausschluss-muster
title: "CSS :not() Ausschluss-Muster für shared Template-Parts"
category: decision
status: active
tags: [css, specificity, template]
created: "2026-07-15T19:55:05"
updated: "2026-07-15T19:55:18"
---

## compiled_truth

## Problem
Globale Link-Regeln (\\\.sp-ueber a\\\, \\\.sp-folie a\\\) ?berschreiben CSS-Eigenschaften von wiederverwendeten Template-Parts (Buttons, Telefon-Links).

## Muster
\\\css
/* Regel: alle Links blau */
.sp-ueber a:not(.sp-folie-bottom__btn):not(.sp-folie-bottom__phone) {
  color: var(--sp-blue);
  text-decoration: none;
}
\\\

Gleiches Muster in \\\service-template.css\\\:
\\\css
.sp-folie a:not(.sp-folie-cta__phone):not(.sp-folie-bottom__btn):not(.sp-folie-bottom__phone) {
  color: var(--sp-blue);
  text-decoration: none;
}
\\\

## Warum
Wenn \\\service/bottom.php\\\ auf ?ber-uns-Seite eingebunden wird, gilt \\\.sp-ueber a\\\ f?r alle Links im Wrapper. Die globale Regel hat h?here Spezifit?t als \\\.sp-folie-bottom__btn { color: #fff }\\\ und ?berschreibt die wei?e Button-Textfarbe.

## L?sung
\:not()\\ Exclude f?r Elemente, die ihre eigene Farbe behalten sollen (Buttons, Telefon-Links).

## Alternativen
- \\\!important\\\ ? schlechte Praxis, macht zuk?nftige Anpassungen schwer
- H?here Spezifit?t (\\\.sp-ueber .sp-folie-bottom__btn\\\) ? funktioniert, aber \:not()\\ ist expliziter und weniger fragil

## Gilt f?r
Jedes Template-Part, das auf mehreren Seiten mit unterschiedlichen Wrapper-Klassen wiederverwendet wird.


## timeline

- time: 2026-07-15T19:55:05
  kind: decision
  summary: "Created this page: CSS :not() Ausschluss-Muster für shared Template-Parts"
  source: created via brain create-page
  affects: [css-ausschluss-muster]

- time: 2026-07-15T19:55:18
  kind: decision
  summary: "Created: CSS :not() exclusion pattern for shared template parts"
  source: session 2026-07-15
  affects: [css-ausschluss-muster]
