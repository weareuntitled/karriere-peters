# Server-Übersicht

## 1. Hostinger VPS – 76.13.4.77 (srv1276110)
**SSH:** root@76.13.4.77
**OS:** Ubuntu 24.04 LTS
**Zweck:** Daniel Peters' private Projekte / Docker-Host

### Docker-Container
| Container | Ports | Zweck |
|-----------|-------|-------|
| fixundfertig_caddy | 80, 443 | Caddy Reverse Proxy (auto HTTPS) |
| fixundfertig_app | 8000 | Fixundfertig App (NiceGUI) |
| fixundfertig_n8n | 5678 | n8n Workflow Automation |
| fixundfertig_task_runners | 5680 | n8n Task Runners |
| fixundfertig_db | 5432 | PostgreSQL (n8n) |
| fixundfertig_redis | 6379 | Redis Cache |
| fixundfertig_backup | – | Automatische Docker-Backups |
| ux-portfolio | 3000 | Portfolio-Seite |
| watchtower | 8080 | Auto-Update Docker Container |
| tracklistify | 5000 | Tracklistify |
| spotify-smartlinks | 5003 | Spotify Smartlinks |
| bgutil-provider | 4416 | YouTube DL Provider |

### Domains (auf diesem Server)
- app.untitled-ux.de
- n8n.untitled-ux.de
- tracklistify.untitled-ux.de
- portfolio.untitled-ux.de
- smartlinks.untitled-ux.de

---

## 2. Hostinger Shared Hosting – 187.77.68.83 (srv1634390)
**Webserver:** nginx/1.24.0 (Ubuntu 24.04)
**SSH:** root@187.77.68.83 (id_ed25519_peters_fin)
**RAM:** 7.8 GB (5.9 GB frei)
**Disk:** 96 GB (82 GB frei)
**Zweck:** Testdeployment Spenglerei Peters (Karriere + Website)

### Docker-Container
| Container | Status | Ports | Zweck |
|-----------|--------|-------|-------|
| spenglerei-wordpress | up (healthy) | 127.0.0.1:8080→80 | WordPress 6.7 (0.5 CPU / 512 MB) |
| spenglerei-mysql | up (healthy) | – | MySQL 8.0 (1 CPU / 1 GB) |
| peters-erp-staging-frontend | up (3 weeks) | 0.0.0.0:5175→80 | Staging Frontend |
| peters-erp-staging-backend | up (3 weeks) | 0.0.0.0:8001→8000 | Staging Backend |
| peters-erp-prod-backend | up (3 weeks) | 0.0.0.0:8000→8000 | Production Backend |
| gswin-erp-frontend-1 | up (3 weeks) | 0.0.0.0:5174→5174 | GSWIN ERP Frontend |
| gswin-erp-backend-1 | up (3 weeks) | 0.0.0.0:8002→8000 | GSWIN ERP Backend |

### nginx
- **Version:** 1.24.0
- **SSL:** Let's Encrypt (website.peters-erp.com + karriere.peters-erp.com wildcard, exp. 2026-10-10)
- **Sicherheit:** rate limiting (30r/s WP, 100r/s karriere, 5r/m login), security headers, TLS v1.2+, xmlrpc.php blocked
- **Configs:** /etc/nginx/sites-available/ (website + karriere + peters-erp + staging)

### Websites
| URL | Typ | Status |
|-----|-----|--------|
| https://karriere.peters-erp.com/ | Astro 4 (static, /var/www/karriere/) | ✅ HTTP 200, alle Seiten |
| https://website.peters-erp.com/ | Docker WordPress (127.0.0.1:8080) | ✅ HTTP 200, Installation an /wp-admin/install.php |

### Docker Compose
- **Pfad:** /opt/wordpress/docker-compose.yml
- **Logging:** max-size 10m, max-file 3 (global daemon + compose)
- **Healthchecks:** MySQL (mysqladmin ping), WordPress (curl localhost)
- **Ressourcen:** WordPress 512 MB / 1 CPU, MySQL 1 GB / 1 CPU

### Backups
- **Script:** /opt/backup.sh (MySQL dump --no-tablespaces + wp-content)
- **Cron:** /etc/cron.d/spenglerei-backup (täglich 3:00)
- **Storage:** /var/backups/spenglerei/ (14 Tage Rotation)

### Monitoring
- **Targets:** /etc/monitoring-targets.txt (7 Dienste, label|url|expected_code)
- **Check:** /opt/monitor.sh alle 5 min (curl → CSV → syslog)
- **Log:** /var/log/monitoring.csv (pipe-delimited, 30 Tage Rotation = 8640 Zeilen)
- **Dashboard:** https://karriere.peters-erp.com/monitoring/ (HTML, zeigt Uptime % + letzte 48 Checks + Docker + nginx)
- **Report:** /opt/monitor-report.sh um 06:00 UTC (HTML + Weekly E-Mail an root via postfix local-only)
- **Discover:** /opt/monitor-discover.sh (scannt nginx + Docker → gibt target-Zeilen aus)
- **Email:** postfix local-only installiert – mail an root@localhost funktioniert. Für externe Zustellung fehlt Gmail App Password

### Domains (DNS auf diesen Server)
- website.peters-erp.com → A 187.77.68.83
- karriere.peters-erp.com → A 187.77.68.83

---

## 3. ebit.at – 185.54.208.127 (aktuell live: spenglerei-peters.de)
**DNS:** ns1.ebit.at / ns2.ebit.at
**Zweck:** Aktuelles Hosting von FirmenABC für die Live-Seite
**Aktuell:** Statische HTML-Seite von FirmenABC

### Domain
- spenglerei-peters.de → 185.54.208.127
- Auth-Code für Domain-Transfer bei FirmenABC angefragt (noch offen – 2. Nachfrage nötig)

### Email (Microsoft 365)
- MX: spenglereipeters-de02e.mail.protection.outlook.com
- SPF: v=spf1 include:spf.protection.outlook.com -all
- Postfach: handwerk@spenglerei-peters.de (3 Postfächer)
- Admin-Zugang bei FirmenABC angefragt (noch offen)

---

## 4. Lokal (Windows)
**SSH-Key:** `$env:USERPROFILE\.ssh\id_ed25519_peters_fin`

**Pfade:**
- `C:\Users\hi\Projekte\spenglerei-peters-karriere\` – Karriere-Seite (Astro 4, Git-Repo)
- `C:\Users\hi\Documents\spenglerei-peters-website\` – Hauptseite (WP Theme + Astro 5)

### CI/CD
- `.github/workflows/deploy.yml` – GitHub Actions → FTP-Deploy (braucht Repo + Secrets)
- `deploy.sh` – Lokales FTP-Deploy-Script (braucht FTP_HOST, FTP_USER, FTP_PASSWORD, FTP_TARGET_DIR)
- **Status:** Noch kein GitHub-Repo eingerichtet, keine All-Inkl FTP-Credentials

---

## Ausstehend
- [ ] Auth-Code von FirmenABC für Domain-Transfer anfordern (2. Nachfrage)
- [ ] M365 Admin-Zugang/Infos von FirmenABC klären
- [ ] All-Inkl Account einrichten (Ziel-Hosting)
- [ ] GitHub Repo erstellen + CI/CD einrichten
- [ ] Migration: DNS, Email, Website zu All-Inkl
- [ ] WordPress Setup Wizard durchführen (https://website.peters-erp.com/wp-admin/install.php)
- [ ] Gmail App Password eintragen (in /etc/msmtprc oder peters-erp .env) für externe E-Mail-Zustellung vom Server
