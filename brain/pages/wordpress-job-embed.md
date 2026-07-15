---
id: wordpress-job-embed
title: "WordPress Plugin: Karriere Job Embed"
category: project
status: active
tags: [wordpress, karriere, plugin, shortcode]
created: "2026-07-12T23:49:23"
updated: "2026-07-12T23:49:43"
---

## compiled_truth

**Zweck:** Ein WordPress-Plugin, das die offenen Stellen von karriere.peters-erp.com (Astro-4-Karriereseite, [[karriereseite-standalone]]) per Shortcode in WordPress-Seiten einbindet.

**API-Quelle:** `GET https://karriere.peters-erp.com/api/jobs.json` - Array von Job-Objekten: title, level, salary_range, short_description, location, slug, url.

**Implementierung (karriere-job-embed.php):**
- Single-File-Plugin, aktiviert per PHP-Skript im Docker-Container.
- `karriere_jobs_fetch()` - wp_remote_get + Transient-Cache (1h), stale-fallback.
- `[karriere_jobs]` - Shortcode mit Attributen count (default -1), show_header, show_link.
- `karriere_jobs_render()` - HTML-Karten: Badge, Gehalt, Titel, Beschreibung, Standort, Button.
- CSS via registriertem Handle `karriere-jobs` (eigene Enqueue, nicht an wp-block-library).

**Behobene Bugs:**
1. count=0 -> min(0, n)=0 Karten. Fix: default auf -1 (alle).
2. CSS nicht geladen (wp-block-library fehlte auf Elementor-Seiten). Fix: eigenes Handle.

**Deployment:** Docker-Container `/var/www/html/wp-content/plugins/karriere-job-embed/`. Shortcode via Elementor auf Startseite (ID 592) und Karriere-Seite (ID 1189).

**Status:** Aktiv. Karten rendern auf Startseite mit korrektem CSS.


## timeline

- time: 2026-07-12T23:49:23
  kind: decision
  summary: "Created this page: WordPress Plugin: Karriere Job Embed"
  source: "Session 2026-07-12: Plugin development & deployment"
  affects: [wordpress-job-embed]

- time: 2026-07-12T23:49:43
  kind: decision
  summary: "Initial compiled truth: plugin architecture, bugs, deployment"
  source: Session 2026-07-12
  affects: [wordpress-job-embed]
