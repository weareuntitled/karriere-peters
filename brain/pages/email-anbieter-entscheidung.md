---
id: email-anbieter-entscheidung
title: "Email: All-Inkl IMAP statt GoDaddy M365"
category: decision
status: active
created: "2026-07-12T18:39:17"
updated: "2026-07-12T18:39:38"
---

## compiled_truth

**Entscheidung:** Die drei E-Mail-Postf??cher (norbert@, info@, bewerbung@) werden zu All-Inkl IMAP migriert, nicht zu GoDaddy M365.

**Alternative:** GoDaddy M365 Business (w??re m??glich gewesen, da Domain zu All-Inkl kommt und GoDaddy dort auch M365 anbietet)

**Begr??ndung:**
- All-Inkl IMAP reicht f??r 3 Postf??cher eines Handwerksbetriebs v??llig aus
- Kein Exchange / Teams / SharePoint n??tig
- G??nstiger als M365
- Norbert kann Outlook (Mail.app) weiter nutzen
- IMAP ist protokollseitig identisch

**Konsequenzen:**
- M365 muss vor K??ndigung per IMAP ausgelesen werden
- Keine Kalender-/Kontakt-Synchronisation ??ber Server (nur lokal)
- SPF-Record muss nach Migration aktualisiert werden (include:spf.protection.outlook.com entfernen)
- MX-Record muss von outlook.com auf All-Inkl zeigen


## timeline

- time: 2026-07-12T18:39:17
  kind: decision
  summary: "Created this page: Email: All-Inkl IMAP statt GoDaddy M365"
  source: session 2026-07-12
  affects: [email-anbieter-entscheidung]

- time: 2026-07-12T18:39:38
  kind: decision
  summary: All-Inkl IMAP statt GoDaddy M365
  source: session 2026-07-12
  affects: [email-anbieter-entscheidung]
