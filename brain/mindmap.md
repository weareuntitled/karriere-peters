---
slug: mindmap
title: Feature mindmap
role: feature mindmap
updated: "2026-07-15T15:48:51"
---

# Feature mindmap

## Gebaute Features
- Service-Seiten (6): Dachsanierung, Spenglerarbeiten, Fassadenverkleidung, Neubau, Folientechnik, Service & Reparatur
- ??ber uns: Team-Vorstellung mit Gallery, Benefits, Kundenstimmen, Jobs
- Kontakt: Formular + Karte + ??ffnungszeiten
- Branding: #007bff Prim??rfarbe, lokale Projektfotos als Gallery-Images
- Template-Validierung: `node validate-tokens.mjs` (7 Templates, 0 Fehler)
- Copywriting-Toolchain: Scrapen, Audit, Rewrite (siehe [[copywriting-workflow]])

## Bekannte Probleme
- Footer Widgets werden nicht gerendert (FW-Konstante fehlt)
- CSS in Service-Templates ~600 Zeilen dupliziert (kein Partial)
- Font-Inkonsistenz: Service-Seiten = Space Grotesk, normale Seiten = Manrope (intentional, siehe [[service-template-font]])

## Gefixt
- Primary blue: 7 Templates von #0071bc auf #007bff korrigiert
- Copywriting: Alle 7 Templates gescraped, Jargon bereinigt, neugeschrieben
