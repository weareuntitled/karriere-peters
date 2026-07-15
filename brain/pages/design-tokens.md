---
id: design-tokens
title: "Design Tokens — Karriereseite"
category: concept
status: active
tags: [design, css, tokens, styleguide]
created: "2026-07-15T16:39:48"
updated: "2026-07-15T17:00:41"
---

## compiled_truth

## Core Colors

| Token | Wert | Verwendung |
|-------|------|------------|
| `--accent` | `#0071bc` | Primary: Buttons, aktive Links, CTA, Akzent-Farbe |
| `--accent-hover` | `#0056b3` | Button hover, aktiver Zustand |
| `--accent-light` | `#007bff` | Sekund??r-Akzent: Hervorhebungen, Umrandungen |
| `--accent-soft` | `#cfe2ff` | Dezenter Akzent-Hintergrund |
| `--accent-container` | `#0056b3` | Container/Hintergrund mit Akzent |

### Oberfl??chen

| Token | Wert | Verwendung |
|-------|------|------------|
| `--bg` | `#f7f9fb` | Seitenhintergrund |
| `--bg-alt` | `#e4e7eb` | Alternierender Sektions-Hintergrund |
| `--bg-card` | `#ffffff` | Karten, Formulare |
| `--inverse-surface` | `#2d3133` | Dunkler Hintergrund (unused since footer restyle) |
| `--inverse-on-surface` | `#eff1f3` | Text auf dunklem Grund |

### Text

| Token | Wert | Verwendung |
|-------|------|------------|
| `--ink` | `#191c1e` | ??berschriften, prim??rer Text |
| `--ink-soft` | `#42474f` | Flie??text, Beschreibungen |
| `--ink-muted` | `#727780` | Hilfstext, Labels, Metadaten |

### Linien & Status

| Token | Wert | Verwendung |
|-------|------|------------|
| `--line` | `#c2c7d1` | Trennlinien, Input-Borders |
| `--line-strong` | `#727780` | St??rkere Trennlinien |
| `--secondary` | `#505f76` | Sekund??re UI-Elemente |
| `--error` | `#ba1a1a` | Fehler, Pflichtfelder |

## Typografie

### Font-Families

| Rolle | Font | Einsatz |
|-------|------|---------|
| Headings | **Manrope** (500, 600, 700) | h1-h4, `.section-title`, Cards, Logo |
| Body | **DM Sans** (400, 500, 700) | Flie??text, Nav, Buttons, Formulare |

Google Fonts URL: `Manrope:wght@500;600;700&family=DM+Sans:wght@400;500;700`

### Heading Scale

| Level | Gr????e | Weight | Line-Height | Letter-Spacing |
|-------|-------|--------|-------------|----------------|
| Hero Title | `clamp(2.5rem, 5.4vw, 3.75rem)` | 700 | 1.05 | -0.025em |
| H1 / `.section-title` | `clamp(1.75rem, 4vw, 2.5rem)` | 700 | 1.2 | -0.01em |
| H2 / `.h1` | `clamp(1.875rem, 5vw, 2.5rem)` | 700 | 1.2 | -0.02em |
| H3 / `.h2` | `clamp(1.5rem, 4vw, 2rem)` | 600 | 1.3 | -0.01em |
| H4 / `.h3` | `1.1rem` (17.6px) | 600 | ??? | ??? |
| H5 / `.h4` | `0.9rem` (14.4px) | 600 | ??? | ??? |

### Body Scale

| Rolle | Gr????e | Weight | Line-Height |
|-------|-------|--------|-------------|
| Lead-Text (`.lead`) | `1rem` (16px) | 400 | 1.6 |
| Hero-Lead | `1.125rem` (18px) | 400 | 1.65 |
| Section-Body | `1.0625rem` (17px) | 400 | 1.6 |
| Card-Body | `0.9375rem` (15px) | 400 | 1.65 |
| Standard | `0.875rem` (14px) | 400 | 1.6 |

### Utility-Text

| Rolle | Gr????e | Weight | Transform | Letter-Spacing |
|-------|-------|--------|-----------|----------------|
| Eyebrow | `0.75rem` (12px) | 600 | uppercase | 0.02em |
| Pill-Badge | `0.75rem` (12px) | 700 | uppercase | 0.06em |
| Data-Num | `0.8125rem` (13px) | 500 | ??? | tabular-nums |
| Label (Form) | `0.75rem` (12px) | 600 | uppercase | 0.02em |

## Spacing

| Token | Wert |
|-------|------|
| Section-Padding | `60px 0` (Desktop), `48px 0` (Mobile <720px) |
| Container-Max | `1200px` (`--max`) |
| Container-Padding | `0 24px` (Desktop), `0 16px` (Mobile <400px) |
| Nav-Link-Gap | `40px` |
| Nav-CTA-Abstand | `56px` |
| Card-Padding | `28px` |
| Form-Padding | `32px` |
| Hero-Grid-Gap | `64px` |
| Benefits-Grid-Gap | `32px` |
| Jobs-Grid-Gap | `20px` |
| Button-Padding | `12px 20px` |
| Button-LG-Padding | `14px 24px` |
| Input-Padding | `12px 14px` |

## Border-Radii

| Token | Wert | Verwendung |
|-------|------|------------|
| `--radius-sm` | `2px` (0.125rem) | Focus-Ring Innen |
| `--radius` | `4px` (0.25rem) | Buttons, Inputs Default |
| `--radius-md` | `6px` (0.375rem) | Job-Card-Foot Buttons |
| `--radius-lg` | `8px` (0.5rem) | Stat-Card, File-Upload |
| `--radius-xl` | `12px` (0.75rem) | Cards, Hero-Image, Form-Card |
| `--radius-full` | `9999px` | Badges, Pills |

## Schatten

| Element | Wert |
|---------|------|
| Job-Card | `0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)` |
| Job-Card Hover | `0 8px 28px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)` |
| Hero-Image | `0 8px 32px rgba(0,53,95,0.12)` |
| Form-Card | `0 4px 12px rgba(0,0,0,0.04)` |
| Stat-Card | `0 4px 16px rgba(0,0,0,0.08)` |
| Sidebar-Card | `0 2px 8px rgba(0,0,0,0.04)` |
| Sidebar-Card Hover | `0 8px 24px rgba(0,0,0,0.08)` |
| Process-Step Hover | `0 4px 12px rgba(0,53,95,0.2)` |

## Transitions & Animation

| Token | Wert |
|-------|------|
| `--ease-out` | `cubic-bezier(0.23, 1, 0.32, 1)` |
| `--ease-in-out` | `cubic-bezier(0.77, 0, 0.175, 1)` |
| `--ease-reveal` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `--duration-fast` | `150ms` |
| `--duration` | `200ms` |
| `--duration-slow` | `300ms` |
| Scroll-Reveal | `opacity + translateY 450ms` per `.reveal` |
| Stagger-Delay | `50ms` pro Kind-Element (`.stagger:nth-child`) |

## Header (Nav)

| Eigenschaft | Wert |
|-------------|------|
| H??he | `92px` |
| Hintergrund | `#fff` |
| Border-Bottom | `1px solid #e0e0e0` |
| Position | `sticky; top: 0` |
| Logo-H??he | `52px` |
| Nav-Link-Font | DM Sans, 14px, 700, uppercase |
| Nav-Link-Farbe | `#222`, hover ??? `--accent` |
| Nav-Link-Gap | `40px` |
| CTA-Button | `#0071bc` Hintergrund, wei??e Schrift, 12px, `margin-left: 56px` |
| Mobile Breakpoint | `720px` |

## Footer

| Eigenschaft | Wert |
|-------------|------|
| Hintergrund | `#f8f9fa` |
| Textfarbe | `--ink-soft` |
| Grid | `1.5fr 1fr 1fr` |
| Link-Hover | `--accent` mit Unterstrich-Animation |
| Trennlinie | `1px solid var(--line)` |

## Breakpoints

| Breakpoint | Verwendung |
|------------|------------|
| `400px` | Container-Padding schmaler |
| `600px` | 1-Spaltig (Jobs, Benefits) |
| `720px` | Mobile Nav, Section-Padding, Form |
| `800px` | Detail-Seite Sidebar statisch |
| `880px` | Stat-Card Position |
| `900px` | Detail-Grid 1-Spaltig |
| `960px` | Hero, Jobs, Benefits, Footer 2-Spaltig |


## timeline

- time: 2026-07-15T16:39:48
  kind: decision
  summary: "Created this page: Design Tokens — Karriereseite"
  source: global.css extraction 2026-07-15
  affects: [design-tokens]

- time: 2026-07-15T16:40:22
  kind: decision
  summary: "Vollständiger Styleguide extrahiert aus global.css: Farben, Typografie, Spacing, Radien, Schatten, Transitions, Header, Footer, Breakpoints"
  source: global.css extraction 2026-07-15
  affects: [design-tokens]

- time: 2026-07-15T17:00:41
  kind: note
  summary: "Typografie global reduziert, Mobile optimiert, Detail-Seiten mit Mood-Header, Prozess neu strukturiert, Form kompakter"
  source: session 2026-07-15
  affects: [design-tokens]
