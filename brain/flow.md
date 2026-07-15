---
slug: flow
title: Key flows
role: key flows
updated: "2026-07-12T18:38:18"
---

# Key flows

## Deployment-Pipeline

```mermaid
sequenceDiagram
    participant Dev as Entwickler
    participant Git as GitHub
    participant GHA as GitHub Actions
    participant FTP as All-Inkl FTP
    participant Live as Live-Server

    Dev->>Git: git push main
    Git->>GHA: Trigger workflow
    GHA->>GHA: npm install && npm run build
    GHA->>FTP: Upload dist/ via FTP
    FTP->>Live: Dateien live
    Note over Live: Karriere-Seite deployt
```

## Bewerbungsprozess (Karriereseite)

```mermaid
sequenceDiagram
    participant User as Bewerber
    participant Site as Karriereseite
    participant API as Web3Forms API
    participant Mail as Email (handwerk@...)

    User->>Site: F??llt Formular aus
    Site->>API: POST Bewerbungsdaten
    API->>Mail: Sendet Benachrichtigung
    Site->>User: Best??tigungsmeldung
```

## Migration Live ??? Neu

```mermaid
sequenceDiagram
    participant Alt as ebit.at (FirmenABC)
    participant DNS as Domain-Registrar
    participant Neu as All-Inkl
    participant Email as M365 / All-Inkl

    Note over Alt,Email: Phase 1: Vorbereitung
    Alt->>DNS: Auth-Code f??r Domain-Transfer
    Email->>Email: IMAP-Migration M365 -> All-Inkl

    Note over Alt,Email: Phase 2: Umschaltung
    DNS->>Neu: Nameserver auf All-Inkl ??ndern
    Neu->>Neu: Website live schalten

    Note over Alt,Email: Phase 3: Altsystem
    Alt->>Alt: ebit.at Hosting deaktivieren
    Email->>Email: M365 deaktivieren
```
