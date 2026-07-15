---
id: ci-cd-github-actions
title: "Deployment über GitHub Actions CI/CD"
category: decision
status: active
created: "2026-07-12T18:39:19"
updated: "2026-07-12T18:39:41"
---

## compiled_truth

**Entscheidung:** Deployment erfolgt ??ber GitHub Actions CI/CD (build ??? FTP deploy bei Push auf main), plus optionalem lokalen deploy.sh f??r manuelle Deployments.

**Alternative:** Manuelles FTP, rsync, oder herstellerspezifisches Deploy-Tool

**Begr??ndung:**
- Automatischer Deploy bei jedem Push ??? kein manuelles FTP n??tig
- GitHub Actions ist kostenlos f??r ??ffentliche Repos
- Wiederholbarer, dokumentierter Build-Prozess
- deploy.sh als Fallback f??r lokale Entwicklung

**Konsequenzen:**
- FTP-Zugangsdaten als GitHub Secrets hinterlegen (FTP_HOST, FTP_USER, FTP_PASS)
- All-Inkl FTP muss vorher funktionieren
- Build-Gr????e und -Zeit beachten (Astro Build ~30s)


## timeline

- time: 2026-07-12T18:39:19
  kind: decision
  summary: "Created this page: Deployment über GitHub Actions CI/CD"
  source: session 2026-07-12
  affects: [ci-cd-github-actions]

- time: 2026-07-12T18:39:41
  kind: decision
  summary: "GitHub Actions CI/CD für automatischen Deploy"
  source: session 2026-07-12
  affects: [ci-cd-github-actions]
