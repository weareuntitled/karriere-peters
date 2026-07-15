---
slug: stack
title: Tech stack
role: tech-stack choices
updated: "2026-07-12T23:50:06"
---

# Tech stack

| Bereich | Technologie | Begr?ndung |
|---------|------------|------------|
| **Hauptseite** | WordPress + Induxo-Child-Theme | Bestehende Inhalte, einfache Pflege durch Norbert |
| **Hauptseite (Neu)** | Astro 5 (Rewrite) | Moderner, schneller Static-Site-Generator |
| **Karriereseite** | Astro 4 | Eigenst?ndiges Microsite-Konzept |
| **WP Job Embed** | Eigenes WordPress-Plugin `karriere-job-embed` | Shortcode-basierte Einbindung der Karriere-API |
| **Hosting (Ziel)** | All-Inkl | Deutscher Anbieter, einfaches FTP-Hosting |
| **Test-Server** | Hostinger Shared (187.77.68.83), Ubuntu 24.04, nginx 1.24, Docker | Aktive Testumgebung |
| **CI/CD** | GitHub Actions ? FTP | Automatischer Build + Deploy bei Push |
| **HTTPS** | Let's Encrypt Certbot (Test) / Caddy (Ziel) | Automatische TLS-Zertifikate |
| **Backup** | Cron + Docker exec mysqldump (daily, 14d Rotation) | Minimal, ausreichend |
| **Monitoring** | Cron + curl + syslog (alle 5 min) | Bewusst minimale L?sung |
| **Email** | Microsoft 365 (aktuell) ? All-Inkl IMAP (Ziel) | Einfache Postf?cher, Outlook-kompatibel |
| **Domain** | ebit.at (aktuell) ? All-Inkl (Ziel) | Auth-Code von FirmenABC erforderlich |

## Aktuelle Infrastruktur (live)
- **Domain:** spenglerei-peters.de bei ebit.at (ns1/ns2.ebit.at)
- **Hosting:** ebit.at (185.54.208.127) ? statische HTML-Seite von FirmenABC
- **Email:** Microsoft 365 Exchange Online (spenglereipeters-de02e.mail.protection.outlook.com)
- **SPF:** v=spf1 include:spf.protection.outlook.com -all

## Test-Infrastruktur (187.77.68.83)
- **Domain:** peters-erp.com ? A-Record 187.77.68.83
- **website.peters-erp.com:** nginx ? Docker WordPress (127.0.0.1:8080)
- **karriere.peters-erp.com:** nginx ? Static Files (/var/www/karriere/) + JSON API /api/jobs.json
- **SSL:** Let's Encrypt wildcard *.peters-erp.com (bis 2026-10-10)
- **Docker (7 Container):** spenglerei-wordpress, spenglerei-mysql, peters-erp-backend/prod/staging, gswin-erp-frontend/backend
- **Backups:** /opt/backup.sh ? /var/backups/spenglerei/ (daily 3 AM, 14 Tage)
- **Monitoring:** /etc/cron.d/spenglerei-monitoring (alle 5 min)
- **nginx Rate Limiting:** 30r/s WordPress, 100r/s Karriere, 5r/m Login
- **Security Headers:** X-Frame-Options DENY, X-Content-Type-Options nosniff, Referrer-Policy, Permissions-Policy
- **TLS:** v1.2+ only, starke Ciphers, SSL Session Cache
