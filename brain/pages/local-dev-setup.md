---
id: local-dev-setup
title: "Lokale Entwicklungsumgebung (Local WP)"
category: decision
status: active
created: "2026-07-13T20:04:56"
updated: "2026-07-13T20:05:08"
---

## compiled_truth

**Tool:** Local WP (Local by Flywheel)
**Standort:** C:\Users\hi\Local Sites\spenglerei-peters
**Webserver:** nginx (client_max_body_size bereits 1000M)
**PHP:** 8.2.27 (PHP-FPM)
**WP Config:** C:\Users\hi\Local Sites\spenglerei-peters\app\public\wp-config.php
**PHP Config Template:** conf\php-8.2.27\php.ini.hbs
**PHP Config Override:** .user.ini im WordPress-Root (f?r PHP_INI_SYSTEM/PHP_INI_PERDIR)

**Upload-Limit auf 1000M erh?ht:**
- upload_max_filesize und post_max_size sind PHP_INI_SYSTEM/PHP_INI_PERDIR
- @ini_set() in wp-config.php funktioniert NICHT f?r diese Werte
- L?sung: .user.ini-Datei im WordPress-Root (wird von PHP-FPM automatisch gelesen)
- client_max_body_size in nginx.conf.hbs war bereits 1000M
- Nach ?nderungen: Site in Local WP stoppen und starten (PHP-FPM neu laden)

**Projektstruktur:**
- WordPress-Hauptseite: C:\Users\hi\Documents\spenglerei-peters-website\
  - Child-Theme: induxo-child/
  - Astro 5 Rewrite: spenglerei-peters-astro/
- Karriere-Astro-4-Projekt: C:\Users\hi\Projekte\spenglerei-peters-karriere

**Erkenntnis:** WordPress-Projekt und Karriere-Astro-Projekt geh?ren zusammen und sollten als Einheit behandelt werden.


## timeline

- time: 2026-07-13T20:04:56
  kind: decision
  summary: "Created this page: Lokale Entwicklungsumgebung (Local WP)"
  source: "Session 2026-07-13: Upload-Limit und Projektstruktur"
  affects: [local-dev-setup]

- time: 2026-07-13T20:05:08
  kind: decision
  summary: Rewrote compiled_truth to the new best understanding
  source: brain update-truth
  affects: [local-dev-setup]
