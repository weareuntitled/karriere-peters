# Precision Enterprise – Spenglerei Peters Karriere

See `DESIGN.yaml` for source-of-truth tokens.

## Umsetzung

- **Hero**: Vollflächiger Blau-Banner (`#007bff`), weiße Schrift, CTA als weißer Button. 3 Stats mit dezenter Linie getrennt.
- **Sektionen**: Alternierend `surface` (`#f7f9fb`) und `surface-container` (`#eceef0`).
- **Karten**: Weiß, 1px `outline-variant`, 8px Radius, hover mit sanftem Schatten (kein translateY).
- **Buttons**: 4px Radius, `label-md`-ähnliche Schrift (12px 600 0.02em).
- **Formular**: Inputs weiß mit 1px Border, Focus = Navy 2px Halo.
- **Typografie**: Headlines = Manrope 600/700, Body = Inter 400.
- **Timeline**: Desktop horizontal mit Linie, Mobile vertikal. Zahlen in tabular-nums.
- **FAQ**: Light, ±-Marker in Navy, Border-Trennung.
- **Footer**: `inverse-surface` (`#2d3133`), helle Schrift.

## Build

```
node node_modules/astro/astro.js build
```

3 Seiten, ~720ms, `/dist`.
