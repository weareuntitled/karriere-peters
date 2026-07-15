---
id: testserver-rollback
title: "Hostinger VPS Test – Setup und Rollback"
category: decision
status: active
created: "2026-07-12T18:39:46"
updated: "2026-07-12T22:33:07"
---

## compiled_truth

**Entscheidung:** Der kurzzeitig getestete Hostinger VPS (76.13.4.77) wurde zur??ckgerollt. Stattdessen wurde der Shared-Hosting-Server (187.77.68.83), auf den peters-erp.com bereits zeigte, zur aktiven Test- und Vorab-Deployment-Plattform ausgebaut.

**Umsetzung auf 187.77.68.83:**
- website.peters-erp.com ??? Docker WordPress (6.7 + MySQL 8.0) via nginx Reverse Proxy auf 127.0.0.1:8080
- karriere.peters-erp.com ??? Astro 4 Static Build von /var/www/karriere/ (Homepage, Datenschutz, Impressum, Stellenanzeigen ??? alle HTTP 200)
- SSL via Let's Encrypt Certbot (wildcard *.peters-erp.com, g??ltig bis 2026-10-10)
- Docker-Compose mit Logging (json-file, max-size 10m, max-file 3), Healthchecks (WordPress: curl localhost, 30s Interval), Ressourcenlimits (WordPress: 512MB RAM / 1 CPU, MySQL: 1GB RAM / 1 CPU), oom_kill_disable f??r MySQL
- nginx geh??rtet: Rate Limiting (30r/s WordPress, 100r/s Karriere, 5r/m Login), Security Headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy), TLS 1.2+ mit starken Ciphern, server_tokens off, xmlrpc.php blockiert (403)
- Statisches Asset Caching f??r Karriereseite (1 Jahr, immutable)
- Automatisierte Backups: /opt/backup.sh (mysqldump + wp-content, daily 3 AM via cron, 14 Tage Rotation)
- Monitoring: Cron-basierte Health Checks (curl alle 5 min auf beide Subdomains, syslog via logger, t??glicher Report)
- Docker Daemon Log Rotation global konfiguriert (/etc/docker/daemon.json)

**Nicht umgesetzt (bewusste Entscheidungen f??r minimale L??sung):**
- Kein Uptime Kuma oder separates Monitoring-Tool
- Kein separates Backup-Container
- Kein Fail2Ban ??? nginx rate limiting als erste Stufe

**Konsequenzen:**
- VPS 76.13.4.77 ist zur??ckgesetzt
- Shared Hosting 187.77.68.83 ist die aktive Testumgebung f??r beide Subdomains
- All-Inkl bleibt Zielhosting f??r Live-Schaltung
- CI/CD-Workflow existiert (.github/workflows/deploy.yml) aber ben??tigt GitHub Repo
- SERVER-INVENTORY.md dokumentiert gesamte Infrastruktur


## timeline

- time: 2026-07-12T18:39:46
  kind: decision
  summary: "Created this page: Hostinger VPS Test – Setup und Rollback"
  source: session 2026-07-12
  affects: [testserver-rollback]

- time: 2026-07-12T18:40:00
  kind: decision
  summary: "VPS-Setup zurückgerollt, falscher Host identifiziert"
  source: session 2026-07-12
  affects: [testserver-rollback]

- time: 2026-07-12T22:32:58
  kind: decision
  summary: "Shared Hosting wurde zur aktiven Testplattform – nginx, Docker, Monitoring aufgebaut"
  source: session 2026-07-12
  affects: [testserver-rollback]

- time: 2026-07-12T22:33:03
  kind: decision
  summary: "nginx gehärtet: Rate Limiting (30r/s, 100r/s, 5r/m), Security Headers, TLS 1.2+, server_tokens off, xmlrpc.php blockiert, Asset Caching für Karriere"
  source: session 2026-07-12
  affects: [testserver-rollback]

- time: 2026-07-12T22:33:04
  kind: decision
  summary: "Docker-Compose aktualisiert: Logging, Healthchecks (WordPress curl, MySQL), Ressourcenlimits (512MB/1GB RAM, 1 CPU), oom_kill_disable"
  source: session 2026-07-12
  affects: [testserver-rollback]

- time: 2026-07-12T22:33:05
  kind: decision
  summary: "Monitoring via Cron eingerichtet (curl alle 5 min auf beide Subdomains, syslog, täglicher Report)"
  source: session 2026-07-12
  affects: [testserver-rollback]

- time: 2026-07-12T22:33:06
  kind: decision
  summary: "Git-Repo bereinigt: .gitignore erstellt, node_modules + dist aus Tracking entfernt"
  source: session 2026-07-12
  affects: [testserver-rollback]

- time: 2026-07-12T22:33:07
  kind: decision
  summary: "SERVER-INVENTORY.md vollständig aktualisiert (alle Server, Docker, nginx, Backups, Monitoring, DNS, Email, Pending Tasks)"
  source: session 2026-07-12
  affects: [testserver-rollback]
