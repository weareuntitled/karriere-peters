---
id: styling-hauptseite-angleichung
title: Styling an Hauptseite angeglichen
category: decision
status: active
tags: [styling, design, css, angleichung]
created: "2026-07-15T16:21:37"
updated: "2026-07-15T17:00:31"
---

## compiled_truth

## Finales Styling (2026-07-15)

### Farben
| Token | Wert | Rolle |
|-------|------|-------|
| `--accent` | `#0071bc` | Primary: Buttons, Nav aktiv, CTAs |
| `--accent-light` | `#007bff` | Sekund??r: Hervorhebungen |
| Body | `#f7f9fb` BG, `#191c1e` Text | Seite |
| Nav-Links | `#222`, bold 14px | DM Sans uppercase |
| Header | `#fff`, 92px, `border-bottom: #e0e0e0` | Sticky |
| Footer | `#f8f9fa`, DM Sans 12px | 3-Spalten |

### Typografie (global reduziert)
- Hero: clamp(1.75rem, 7vw, 3.25rem)
- Section-Title: clamp(1.5rem, 3.5vw, 2.25rem)
- Body: 0.9375rem
- Detail: Heading 18px, Salary 16px, Lists 14px
- Form: Labels 11px, Inputs 14px

### Mobile (???720px)
- Nav: wei??, Links 16px normal (kein Uppercase), ein CTA-Button
- Section-Abstand: 64px
- Hero-Title: clamp(1.5rem, 8vw, 2rem)
- Job-Grid: auto-fit minmax(260px, 1fr)
- Form: kompakt (gap 14px, textarea 80px)

### Detail-Seiten
- Hero-Header mit WordPress-Moodbild (dark overlay 75%???30%)
- Pro Prozess-Schritt: Nummer links, Titel+Text rechts (flex)
- Prozess: 15px Titel, 13px Text

### Header
- WordPress-Match: DM Sans 14px 700 uppercase
- Links: Startseite, Leistungen, ??ber uns, Jobs (aktiv), Kontakt
- CTA-Button: `#0071bc`, wei??, 12px, 56px Abstand
- Mobile: Burger-Men?? mit einem CTA-Button

### Footer  
- WordPress-Match: #f8f9fa, 3 Spalten (Adresse | Links | Logo)
- Padding: 60px/50px

Siehe [[design-tokens]] f??r vollst??ndigen Styleguide.


## timeline

- time: 2026-07-15T16:21:37
  kind: decision
  summary: "Created this page: Styling an Hauptseite angeglichen"
  source: "copywriting+styling session 2026-07-15"
  affects: [styling-hauptseite-angleichung]

- time: 2026-07-15T16:21:55
  kind: decision
  summary: "Styling-Angleichung: accent #007bff, body font DM Sans, copywriting fixes"
  source: session 2026-07-15
  affects: [styling-hauptseite-angleichung]

- time: 2026-07-15T17:00:31
  kind: decision
  summary: "Final: Header/Footer WordPress-Match, globale Typografie reduziert, Mobile optimiert, Detail-Seiten mit Mood-Header"
  source: session 2026-07-15
  affects: [styling-hauptseite-angleichung]
