---
slug: flow
title: Key flows
role: key flows
updated: "2026-07-15T15:49:04"
---

# Key flows

## Page Rendering
1. WordPress Page erstellt ??? Page Attribute ??? Template ausgew??hlt (z.B. "Service: Folientechnik")
2. PHP-Template rendert komplette Seite inkl. Inline-CSS und HTML
3. Bei Service-Seiten: Elementor Canvas optional nutzbar

## Kontaktformular
1. Nutzer f??llt Formular (Name, Email, Tel, Nachricht, DSGVO)
2. POST an Web3Forms API
3. Weiterleitung auf Danke-Seite

## Copywriting-Workflow
1. Chrome DevTools: Texte von Live-Seiten scrapen ??? JSON
2. `node copy-audit.mjs`: Geviertstrich, Jargon, Satzl??nge pr??fen ??? AUDIT.md
3. `node copy-rewrite.mjs`: Jargon ersetzen, bereinigen ??? REWRITE.md
4. Manuell: Kurze S??tze, kein Blabla ??? finale Texte in Templates einbauen
5. Siehe [[copywriting-workflow]]

## Template-Validierung
1. `node validate-tokens.mjs`: `--sp-blue` gegen Parent-Induxo-Referenz pr??fen
2. Bei Abweichung: `:root` Token im Template korrigieren
3. Siehe [[template-validation-harness]]
