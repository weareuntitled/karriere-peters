---
slug: architecture
title: System architecture
role: system architecture
updated: "2026-07-13T20:05:36"
---

# System architecture

`mermaid
graph TD
    subgraph Live [Live - ebit.at / spenglerei-peters.de]
        A[spenglerei-peters.de] --> B(ebit.at DNS)
        B --> C[ebit.at Hosting / Statisches HTML]
        B --> D[Microsoft 365 / Email]
    end
    subgraph Test [Test - 187.77.68.83 / peters-erp.com]
        E[peters-erp.com] --> F[Hostinger Shared Hosting]
        F --> G[nginx Reverse Proxy]
        G --> H[website.peters-erp.com / Docker WordPress]
        G --> I[karriere.peters-erp.com / Astro 4 Static + JSON API]
        F --> J[Weitere Docker / staging, prod, gswin]
        H --> K[(MySQL 8.0)]
        I -- "/api/jobs.json" --> L[WordPress Plugin karriere-job-embed]
        L -- "[karriere_jobs]" --> H
    end
    subgraph Ziel [Ziel - All-Inkl]
        M[spenglerei-peters.de neu] --> N[All-Inkl DNS]
        N --> O[All-Inkl Hosting / WordPress Hauptseite]
        N --> P[Karriere Microsite / Astro 4]
        N --> Q[All-Inkl Postfach / IMAP Email]
    end
    subgraph Entwicklung
        R[GitHub Repo] --> S[GitHub Actions CI/CD]
        S --> T[FTP Deploy zu All-Inkl]
    end
`

## Lokale Entwicklung (Local WP)

**Tool:** Local WP (Local by Flywheel)
**Standort:** C:\Users\hi\Local Sites\spenglerei-peters
**URL:** http://spenglerei-peters.local/
**Webserver:** nginx, PHP 8.2.27 (PHP-FPM), MySQL
**PHP-Konfig:** conf\php-8.2.27\php.ini.hbs (Template) + .user.ini (Override)
**Theme-Quelle:** C:\Users\hi\Documents\spenglerei-peters-website\induxo-child\

**Upload-Limit (1000M):**
- upload_max_filesize / post_max_size sind PHP_INI_SYSTEM/PHP_INI_PERDIR
- @ini_set() in wp-config.php greift NICHT
- overriden via .user.ini im WordPress-Root (wird von PHP-FPM gelesen)
- nginx client_max_body_size = 1000M (in nginx.conf.hbs)

## Datenfluss Job Embed
1. Astro-Karriereseite baut /api/jobs.json aus src/data.ts
2. WordPress-Plugin ruft GET https://karriere.peters-erp.com/api/jobs.json auf
3. Plugin cached Ergebnis als Transient (1h), stale-fallback
4. Shortcode [karriere_jobs] rendert HTML-Karten in Elementor-Seiten
5. CSS via dediziertem Handle karriere-jobs (nicht an wp-block-library)

## Repository-Struktur

### spenglerei-peters-karriere (Astro 4)
- src/pages/api/jobs.json.ts - JSON-API-Endpunkt fuer WordPress
- src/ - Astro-Quellcode
- public/ - Statische Assets
- dist/ - Build-Output
- .github/workflows/deploy.yml - CI/CD
- deploy.sh - Lokales Deploy-Script
- SERVER-INVENTORY.md - Serverdokumentation
- firmenabc-nachfassen.md - Follow-up E-Mail Entwurf

### spenglerei-peters-website (Hauptseite)
- induxo-child/ - WordPress Custom Theme
- spenglerei-peters-astro/ - Astro 5 Rewrite

**Hinweis:** Beide Projekte gehoeren zusammen (WordPress-Hauptseite + Astro-Karriere) und sollten als Einheit behandelt werden.

### WordPress Plugin: karriere-job-embed
- Single-File-Plugin /var/www/html/wp-content/plugins/karriere-job-embed/karriere-job-embed.php
- Siehe [[wordpress-job-embed]]
