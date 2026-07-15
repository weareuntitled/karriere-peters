---
id: ssh-key-peters-fin
title: SSH-Zugang Testserver 187.77.68.83
category: reference
status: active
tags: [ssh, server, credentials, hostinger]
created: "2026-07-12T23:50:54"
updated: "2026-07-12T23:51:03"
---

## compiled_truth

**Server:** 187.77.68.83 (Hostinger Shared Hosting, Ubuntu 24.04)
**User:** root
**Port:** 22 (Standard)

**Privater Schl?ssel:** `~/.ssh/id_ed25519_peters_fin` (auf dem Windows-Host des AI)
**?ffentlicher Schl?ssel:** im `~/.ssh/authorized_keys` auf dem Server hinterlegt
**Passwort-Auth:** deaktiviert (nur Key)
**SSH-Befehl (Windows PowerShell):**
```
ssh -o StrictHostKeyChecking=no -i "$env:USERPROFILE\.ssh\id_ed25519_peters_fin" root@187.77.68.83
```

**Hinweise:**
- Schl?ssel liegt nur lokal auf dem Entwickler-Rechner, nicht im Repo.
- StrictHostKeyChecking=no ist n?tig, weil der Host-Key nicht im bekannten Keys-Setup eingetragen ist.
- Zugang zu Docker-Containern erfolgt ?ber diesen SSH-Tunnel.
- Der Server hostet: WordPress (spenglerei-wordpress), MySQL, Karriere-Astro-Seite, GSWIN-ERP.


## timeline

- time: 2026-07-12T23:50:54
  kind: decision
  summary: "Created this page: SSH-Zugang Testserver 187.77.68.83"
  source: "Konversation 2026-07-12: User fragt nach SSH-Key-Dokumentation"
  affects: [ssh-key-peters-fin]

- time: 2026-07-12T23:51:03
  kind: decision
  summary: SSH-Key-Location und Verbindungsparameter dokumentiert
  source: Session 2026-07-12
  affects: [ssh-key-peters-fin]
