---
slug: mindmap
title: Feature mindmap
role: feature mindmap
updated: "2026-07-15T17:09:00"
---

# Feature mindmap

---
slug: mindmap
title: Feature mindmap
role: feature mindmap
updated: "2026-07-15T17:09:00"
---

# Feature mindmap

## Feature-Bereiche

### Karriereseite (Astro 4)
- Hero-Bereich mit Mood-Header (WordPress-Bilder, dark overlay)
- Offene Stellen: Spengler, Folientechniker, Dachdecker
- Gehaltsrechner (interaktiv, JavaScript)
- Benefits-Sektion (6 Cards)
- Bewerbungsprozess (5 Schritte)
- FAQ (7 Eintr?ge, Akkordeon)
- Bewerbungsformular (Web3Forms API)
- Responsive Design (Mobile/Desktop)

### Erledigt (2026-07-15)
- [x] Copywriting: Satzzeichen und Jargon bereinigt (10 Fixes in data.ts)
- [x] Styling: An Hauptseite angeglichen (Header, Footer, Typografie, Mobile, Detail)
- [x] Komponenteninventar: Siehe [[komponenteninventar]]
- [x] Siehe [[styling-hauptseite-angleichung]], [[design-tokens]]

### Hauptseite (WordPress Induxo)
- 7 Service-Templates (~920 Zeilen Inline-CSS dupliziert)
- 5 Header-Varianten, 2 Footer-Varianten
- 15 Elementor Widgets, 3 CPTs (Projects, Service, Team)
- Komponenteninventar: [[komponenteninventar]]
- Refactoring: Inline-CSS auslagern, Templates vereinheitlichen, Header reduzieren
- Karriere-Komponenten auf WordPress portieren (Footer, Nav, Bewerbungsformular)

### Infrastruktur
- CI/CD: GitHub Actions
- Hosting: All-Inkl (geplant)
- Email: M365 ? All-Inkl IMAP
- Domain: ebit.at

## Ausstehend
- Auth-Code von FirmenABC (Domain)
- WordPress-Komponenten refactoren (Schritt 2)
- WordPress-Templates mit Astro-Komponenten erg?nzen (Schritt 3)
