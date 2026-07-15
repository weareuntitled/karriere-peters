---
id: monitoring-setup
title: Monitoring und Dashboard
category: decision
status: active
tags: [monitoring, bash, ponytail]
created: "2026-07-12T22:40:24"
updated: "2026-07-12T22:49:10"
---

## compiled_truth

## compiled_truth

**Entscheidung**: HTTP- und Docker-Monitoring per einfacher Bash-Cron-Jobs statt externer Dienste (UptimeRobot, Grafana, Prometheus). Ziel: lokale ?bersicht ?ber alle Dienste auf srv1634390 ohne externe Abh?ngigkeiten.

**Warum**: srv1634390 l?uft nur f?nf Webservices (Karriere, Website, Peters ERP, Staging Frontend, Staging API, Prod API) ? Prometheus/Grafana w?ren Overkill. Ein Bash-Skript mit curl und einer CSV-Datei erf?llt denselben Zweck mit null Abh?ngigkeiten.

**Architektur**:
- /etc/monitoring-targets.txt ? eine Liste label|url|expected_code pro Zeile (# kommentiert)
- /opt/monitor.sh ? liest targets, ruft per curl auf. Loggt als pipe-delimited CSV nach /var/log/monitoring.csv + via logger nach syslog. H?lt 30 Tage (8640 Zeilen). Rotiert per sed + truncate (kein logrotate n?tig)
- /opt/monitor-report.sh ? parst CSV, erzeugt HTML Dashboard (/var/www/monitoring/index.html) + sendet w?chentliche E-Mail an root (Montag 06:00). F?llt auf report file zur?ck (/var/log/monitoring/weekly-*.txt) wenn mail fehlschl?gt
- /opt/monitor-discover.sh ? scannt nginx sites-enabled + Docker container mit published ports, gibt Vorschl?ge f?r targets aus
- /etc/cron.d/spenglerei-monitoring ? monitor.sh alle 5 min, report um 06:00 UTC

**Nginx**: /monitoring/ Location in karriere.peters-erp.com.conf ? serve /var/www/monitoring/ + auth_basic + auth_basic_user_file /etc/nginx/.htpasswd-monitoring

**E-Mail (MTA)**:
- msmtp versucht, scheiterte an fehlenden Gmail App Password (SMTP_USER/SMTP_PASSWORD leer in peters-erp .env)
- postfix (local-only) installiert ? mail an root funktioniert. Weekly report geht an root@localhost
- Gmail App Password fehlt f?r externe Zustellung

**Wartung**: Neuen Dienst hinzuf?gen = eine Zeile in /etc/monitoring-targets.txt. Discovertool liefert das Format.

**Aktuelle Targets (7)**:
- Karriere (https://karriere.peters-erp.com/)
- Website (https://website.peters-erp.com/)
- Peters ERP (https://peters-erp.com/)
- Peters ERP API (https://peters-erp.com/api/health)
- Staging Frontend (http://187.77.68.83:5175/)
- Staging API (http://127.0.0.1:8001/health)
- Prod API (http://127.0.0.1:8000/health)

**2026-07-12: Dashboard Relaunch**

Umstellung von karriere.peters-erp.com/monitoring/ auf peters-erp.com/monitoring/.

Redesign:
- Light Design (weiße Cards auf hellgrauem Hintergrund)
- Status-Gruppierung (UP first, dann Dienste mit Fehlern)
- SVG-Icons pro Dienst-Typ (page/globe/box/code/window)
- Klickbare Links mit voller URL
- Fortschrittsbalken für Uptime-Prozente
- Sparkline-Charts (letzte ~48 Checks)
- Liftshadow beim Hover (box-shadow + translate)

Design Engineering Prinzipien:
- Layered box-shadows statt harter border: 1px
- Font-Smoothing, tabular-nums, text-wrap: balance
- transition: box-shadow,translate statt transition: all
- ::after Pseudo-Element für 40px+ Sichttreffer auf Links
- box-shadow statt border-bottom für Sections

## timeline

- time: 2026-07-12T22:40:24
  kind: decision
  summary: "Created this page: Monitoring und Dashboard"
  source: created via brain create-page
  affects: [monitoring-setup]

- time: 2026-07-12T22:49:10
  kind: decision
  summary: "Full content: monitoring architecture, email setup, targets, MTA status"
  source: brain update-truth
  affects: [monitoring-setup]

- time: 2026-07-12T21:08:00
  kind: update
  summary: "Dashboard Relaunch — redesign mit Gruppen, Icons, Links, Progress-Bars, Design Engineering"
  source: session
  affects: [monitoring-setup, architecture]
