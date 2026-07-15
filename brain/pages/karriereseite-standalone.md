---
id: karriereseite-standalone
title: "Karriereseite als eigenständiges Astro-4-Projekt"
category: decision
status: active
created: "2026-07-12T18:39:18"
updated: "2026-07-12T23:49:56"
---

## compiled_truth

**Entscheidung:** Die Karriereseite wird als unabh?ngiges Astro-4-Projekt (spenglerei-peters-karriere/) entwickelt, nicht als Teil des WordPress-Themes oder des Astro-5-WordPress-Rewrites.

**Alternative:** Integration in WordPress als Custom Post Type / Page, oder Teil des Astro-5-Projekts

**Begr?ndung:**
- Karriereseite hat eigenes Schema (Stellenanzeigen, Gehaltsrechner, Bewerbungsformular)
- Unabh?ngig deploybar von der Hauptseite
- Astro 4 war zum Startzeitpunkt stabiler/vertrauter
- Microsite-Konzept: separate URL (karriere.spenglerei-peters.de) m?glich

**API-Endpunkt:** `src/pages/api/jobs.json.ts` liefert `GET /api/jobs.json` ? alle Jobs aus `src/data.ts` als JSON-Array mit url-Feld (aus slug gemappt). Wird vom WordPress-Plugin [[wordpress-job-embed]] konsumiert.

**Konsequenzen:**
- Eigene CI/CD-Pipeline
- Eigenes GitHub-Repo
- Separater Build-Prozess
- Geteiltes Hosting auf All-Inkl (Unterverzeichnis oder Subdomain)
- Jobs werden per JSON-API an WordPress verf?ttert (keine Datenbank-Duplizierung)


## timeline

- time: 2026-07-12T18:39:18
  kind: decision
  summary: "Created this page: Karriereseite als eigenständiges Astro-4-Projekt"
  source: session 2026-07-12
  affects: [karriereseite-standalone]

- time: 2026-07-12T18:39:39
  kind: decision
  summary: "Eigenständiges Astro 4 Projekt"
  source: session 2026-07-12
  affects: [karriereseite-standalone]

- time: 2026-07-12T23:49:56
  kind: decision
  summary: Added API endpoint /api/jobs.json for WordPress plugin
  source: Session 2026-07-12
  affects: [karriereseite-standalone]
