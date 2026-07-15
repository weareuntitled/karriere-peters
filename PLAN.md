# Plan: Template Consistency Validation

## Goal
Ensure PHP template pages visually match the parent Induxo theme (fonts, colors, spacing).

## Method
1. Extract live computed styles from a **reference page** (normal Induxo page, e.g. `/about/`) via Chrome DevTools
2. Extract live computed styles from the **template page** (`/service/folientechnik/`)  
3. Compare key properties: body font, heading font, sizes, weights, colors, primary accent
4. Report mismatches

## Tool
`validate-tokens.mjs` — two modes:
- **Live mode:** Hardcoded REFERENCE/LIVE_TEMPLATE objects populated from Chrome DevTools extraction
- **Static mode:** Parses template `<style>` block + `:root` tokens, checks font usage

Run: `node validate-tokens.mjs`

To refresh reference data, run this in Chrome DevTools on the reference page:
```js
JSON.stringify({
  bodyFont: getComputedStyle(document.body).fontFamily,
  h1Font: getComputedStyle(document.querySelector('h1')).fontFamily,
  h1Size: getComputedStyle(document.querySelector('h1')).fontSize,
  h1Weight: getComputedStyle(document.querySelector('h1')).fontWeight,
  h2Font: getComputedStyle(document.querySelector('h2')).fontFamily,
  h2Size: getComputedStyle(document.querySelector('h2')).fontSize,
  h2Weight: getComputedStyle(document.querySelector('h2')).fontWeight,
  h2Color: getComputedStyle(document.querySelector('h2')).color,
})
```

## Extendability
Drop new templates into the script's check — add a `LIVE_TEMPLATE_N` object or a new static parser. Same diff logic applies.

## Files
- `validate-tokens.mjs` — the validation script
- `VALIDATION-SESSION.md` — full findings and fix plan
- `brain/pages/template-validation-harness.md` — brain entry
