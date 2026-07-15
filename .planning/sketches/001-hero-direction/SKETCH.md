# Sketch 001 — Hero Direction (A / B / C)

Strikter Nachbau von karriere.geruestbau-pletschacher.com, drei grundverschiedene
Hero-Ansaetze zum Vergleichen. Echte Inhalte aus dem Gespraech (Spenglerei Peters,
Kuehbach, 20 km, Spengler / Folientechniker / Dachdecker, Du-Form).

Alle drei Varianten sind vollstaendige Karriereseiten — nur der Hero oben ist
unterschiedlich. Rest (Stellen / Benefits / Prozess / FAQ / Formular) ist unten
jeweils identisch angedeutet.

---

## Variante A — Split mit Foto rechts  (1:1 wie Pletschacher)

Klassisch sicher. Funktioniert weil Pletschacher es genau so macht.

```
+----------------------------------------------------------------------+
| Spenglerei Peters   Stellen  Benefits  Prozess  FAQ   [Bewerben]     |  <- sticky
+----------------------------------------------------------------------+
|                                                                      |
|  ( Jetzt Neu )                                                       |
|                                                                      |
|  Starte Deine Karriere bei der                                       |
|  Spenglerei Peters                              +------------------+ |
|                                                |                  | |
|  Bei uns arbeitest Du auf abwechslungs-         |     [ FOTO ]     | |
|  reichen Baustellen rund um Kuehbach.           |     Spengler     | |
|  Als Spengler, Folientechniker oder             |     auf Dach     | |
|  Dachdecker bist Du Teil eines starken          |                  | |
|  Teams.                                         |                  | |
|                                                +------------------+ |
|  [ Jetzt bewerben ]   [ Offene Stellen ]                             |
|                                                                      |
|  [img] [img] [img] [img] [img]   <- 5 Thumbnails                    |
+----------------------------------------------------------------------+
|                                                                      |
|  Offene Stellen                                                      |
|  +-----------+  +-----------+  +-----------+                         |
|  | Spengler  |  | Folien-   |  | Dach-     |                         |
|  | m/w/d     |  | techniker |  | decker    |                         |
|  | Kuehbach  |  | m/w/d     |  | m/w/d     |                         |
|  | [Apply]   |  | [Apply]   |  | [Apply]   |                         |
|  +-----------+  +-----------+  +-----------+                         |
|                                                                      |
+----------------------------------------------------------------------+
```

Visuell:
- Grid 1.05fr / 1fr, links Textblock, rechts grosses Hochformat-Foto (4:5)
- "Jetzt Neu" Pill ueber Headline (orange Akzent)
- Headline 2-zeilig, Firmenname in Akzentfarbe
- Lead 1-zeilig, max 60ch
- Zwei CTAs: orange Pill + Ghost
- 5 quadratische Thumbnails darunter (Werkstatt / Team / Baustelle)

Staerken:    Vertraut, hohe Scanbarkeit, Foto macht sofort klar was Handwerk ist
Schwaechen:  Text links geht auf Mobile unter, dann springt Foto nach oben
Risiko:      Niedrig — safe choice, "Pletschacher-Look" garantiert

---

## Variante B — Foto-Hintergrund, zentriert

Volles Foto, dunkler Verlauf drueber, Headline mittig. Mehr "Show, less tell".

```
+----------------------------------------------------------------------+
| Spenglerei Peters   Stellen  Benefits  Prozess  FAQ   [Bewerben]     |
+----------------------------------------------------------------------+
|::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::|
|::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::|
|::::::::::::::::::::::::::::  [ FOTO HINTERGRUND ]  ::::::::::::::::::|
|:::::::::::::::::::::::::::  Baustelle, Person am ::::::::::::::::::::|
|::::::::::::::::::::::::::::  Dach, Abendlicht     ::::::::::::::::::::|
|::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::|
|::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::|
|                       ( Jetzt Neu )                                  |
|                                                                      |
|             Starte Deine Karriere bei der                            |
|             Spenglerei Peters                                        |
|                                                                      |
|        Bei uns arbeitest Du auf abwechslungsreichen                  |
|        Baustellen rund um Kuehbach.                                  |
|                                                                      |
|        [ Jetzt bewerben ]   [ Offene Stellen ]                       |
|                                                                      |
|        Stellen  Benefits  Prozess                                    |
|        (Quick-Anchors, dotted underline)                             |
+----------------------------------------------------------------------+
|                                                                      |
|  Offene Stellen                                                      |
|  ... (identisch zu A)                                                |
+----------------------------------------------------------------------+
```

Visuell:
- min-height 88vh, Foto full-bleed mit 55%→75% dunklem Gradient
- Pill in transluzent-weiss mit backdrop-blur
- Headline clamp(2.4rem, 5.5vw, 4.2rem) — richtig gross
- Akzentfarbe wird zu hellem Orange (#fdba74) ueber dunklem Grund
- Quick-Anchor Links unter den CTAs als sekundaere Navigation

Staerken:    Emotional, "die Baustelle lebt", bleibt im Kopf
Schwaechen:  Textkontrast kann bei manchen Fotos kippen, kein "trust"-Foto sichtbar
Risiko:      Mittel — Text/Foto-Balance stimmt nur wenn Foto stimmt

---

## Variante C — Editorial Statement (typografisch statt bildgetrieben)

Grosses typografisches Statement, Foto klein am Ende der Sektion.
Wirkt seriöser, mehr "Sueddeutsche Zeitung" als "Pletschacher".

```
+----------------------------------------------------------------------+
| Spenglerei Peters   Stellen  Benefits  Prozess  FAQ   [Bewerben]     |
+----------------------------------------------------------------------+
|                                                                      |
|  (LEITBETRIEB IN KUHBACH SEIT 19XX)                                  |
|                                                                      |
|  Handwerk,                                                      |
|  das Du                                          +-----------+      |
|  *ernst nimmst.*                                | Wir suchen|      |
|                                                 | Dich.     |      |
|                                                 | [Apply]   |      |
|  ------------------------------------------------+-----------+      |
|                                                                      |
|  Wir suchen Spengler, Folientechniker       [Bewerben] [Stellen]     |
|  und Dachdecker, die anpacken. Mit                                       |
|  Erfahrung, mit Verantwortung, mit                                      |
|  Lust auf Dach und Wetter.                                              |
|                                                                      |
|  Standort          Einsatz              Start                         |
|  Kuehbach          20 km Umkreis        ab sofort                     |
|                                                                      |
|  [ --------------------------------------------------------------- ]   |
|  [                CINEMATIC FOTO 21:9, Baustelle                 ]   |
|  [ --------------------------------------------------------------- ]   |
|                                                                      |
+----------------------------------------------------------------------+
|                                                                      |
|  Offene Stellen                                                      |
|  ... (identisch zu A)                                                |
+----------------------------------------------------------------------+
```

Visuell:
- Hintergrund warm-grau (var(--bg-alt)), Eyebrow in Akzentfarbe klein
- Headline max-width 14ch, italic-Wort mittendrin als Stilmittel
- Trennlinie + Zweispalten-Row: Lead links, CTAs rechtsbuendig
- Meta-Strip (Standort / Einsatz / Start) als dritte Zeile
- Foto erst ganz unten als "cinematic reveal" — 21:9

Staerken:    Anders als alle Mitbewerber, hebt sich von Standard-Handwerk ab
Schwaechen:  Verlangt mehr Lesedisziplin, Foto hat weniger Gewicht im Hero
Risiko:      Hoch — kann "zu schick" wirken fuer klassischen Handwerksbetrieb

---

## Was zu vergleichen ist

| Frage | A | B | C |
|-------|---|---|---|
| Wirkt das wie Spenglerei / Handwerk? | mittel | hoch | niedrig |
| Macht klar was die Firma macht? | hoch | hoch | mittel |
| Fuehlt sich modern an? | mittel | mittel | hoch |
| Hebt sich von anderen Handwerkern ab? | niedrig | mittel | hoch |
| Konversionsstaerke (CTA sichtbar)? | hoch | hoch | mittel |
| Bleibt im Kopf? | mittel | hoch | hoch |
| Risiko wenn Inhalt mittelmaessig? | niedrig | mittel | hoch |

## Realitaetscheck (Pletschacher-Stil)

Variante A ist der 1:1 Pletschacher-Look — wenn dein Dad genau das wollte, nimm A.
Variante B ist Pletschacher mit mehr "Kino", bringt aber nichts wenn Foto nicht stimmt.
Variante C ist eine bewusste Abkehr — nur wenn er/sie was Eigenes will.

---

## Entscheidung

Welche? Oder sag mir was du aus den dreien mixen willst (z.B. "A-Layout aber
Headline wie in C").
---

## Gew�hlt

**A � Split mit Foto rechts.** Implementiert in `src/components/Hero.astro:1`.
Entscheidung: 1:1 Pletschacher-Look, niedrigstes Risiko, Foto macht den Handwerks-Kontext sofort klar.
