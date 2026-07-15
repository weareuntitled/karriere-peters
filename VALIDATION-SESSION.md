# Template Consistency Fix Plan

> Live comparison: `/service/folientechnik/` (template) vs `/about/` (parent Induxo reference)
> Script: `node validate-tokens.mjs`

## Findings & Fixes

### 1. Heading Font: Space Grotesk → Manrope

**Symptom:** Template headings render in Space Grotesk, parent theme uses Manrope.

**Root cause:** `tpl-service-folientechnik.php` line 25 loads Space Grotesk via Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&family=Space+Grotesk:wght@400..700&display=swap" rel="stylesheet">
```
Parent theme's `induxo-master-inline-css` declares `h1,h2 { font-family: "Manrope" }` but Space Grotesk wins because it's loaded after.

**Fix (pick one):**
- **Recommended:** Remove `&family=Space+Grotesk:wght@400..700` from the link. Let headings inherit Manrope from parent theme.
- Alternative: Keep Space Grotesk but add `font-family: 'Manrope', sans-serif` explicitly on `.sp-folie-hero h1` and `.sp-folie-section h2`.

### 2. Primary Blue: #0071bc → #007bff

**Symptom:** Buttons and accents render `#0071bc`, parent Induxo uses `--primary: #007bff`.

**Root cause:** `:root` block in template CSS defines `--sp-blue: #0071bc`. This propagates to CTA buttons, check icons, borders, and shadow tints.

**Fix:** Change one line in template `:root`:
```css
--sp-blue: #007bff;
```
Also update derived tokens:
```css
--sp-blue-dark: #005bb5;  /* darker variant of #007bff */
--sp-blue-tint: #cfe2ff;  /* lighter tint of #007bff */
--sp-shadow-sm: 0 4px 12px rgba(0, 123, 255, 0.06);
--sp-shadow-md: 0 8px 32px rgba(0, 123, 255, 0.08);
--sp-shadow-lg: 0 20px 40px rgba(0, 123, 255, 0.1);
```

### 3. Hero Background: Custom Gradient (INFO)

**Finding:** Template hero uses `linear-gradient(135deg, #f9f9fc 0%, #e8f1ff 100%)`. Parent theme's About page uses a different hero style (image-based, white text on dark overlay). Not necessarily a bug — custom hero backgrounds are expected per page. But the gradient colors should use `--sp-*` tokens instead of hex literals.

**Fix (optional):**
```css
.sp-folie-hero {
  background: linear-gradient(135deg, var(--sp-surface) 0%, var(--sp-blue-tint) 100%);
}
```

### 4. Hardcoded Values: 54 px/hex Literals (LOW PRIORITY)

**Finding:** 54 unique hardcoded `px` and hex values in template CSS (breakpoints, padding, font sizes, radii).

**Risk:** If parent theme changes spacing scale or radius scale, template won't automatically follow.

**Fix (long-term):** Replace hardcoded values with CSS custom properties referencing the parent theme's design system. Example:
```css
/* Before */
padding: 24px;
border-radius: 12px;

/* After */
padding: var(--spacing-lg, 24px);
border-radius: var(--radius-2xl, 12px);
```

### 5. No `font-family` Rule on Template Headings (DESIGN GAP)

**Finding:** `.sp-folie-hero h1` and `.sp-folie-section h2` don't set `font-family`. They inherit from the cascade — which means any change to font loading order silently changes heading appearance.

**Fix:** Add explicit `font-family` to heading rules:
```css
.sp-folie-hero h1 {
  font-family: 'Manrope', sans-serif; /* match parent theme */
}
.sp-folie-section h2 {
  font-family: 'Manrope', sans-serif;
}
```

### 6. Template Page Not Registered in WP Admin Pages List (OPS)

**Finding:** The template `Template Name: Service: Folientechnik` exists in the PHP file but the page at `/service/folientechnik/` does not appear in the WordPress admin Pages list. It appears to be a custom post type (`service`) entry rather than a standard Page.

**Impact:** Template dropdown in Page Attributes won't show this template for standard pages. Need to verify template is registered for the correct post type.

**Fix:** Verify `Template Post Type: page` line in template header is correct, and ensure the page is created as a standard WordPress Page (not a CPT).

---

## Priority Order

| # | Issue | Effort | Impact |
|---|-------|--------|--------|
| 2 | Primary blue mismatch | 5 min | High — visible on every CTA |
| 1 | Heading font mismatch | 5 min | High — visible on every heading |
| 5 | Missing font-family on headings | 5 min | Medium — prevents future drift |
| 3 | Hero gradient tokens | 5 min | Low — cosmetic |
| 6 | Template page registration | 15 min | Low — works currently via CPT |
| 4 | Tokenize hardcoded values | 2-4 hours | Low — nice to have |

**Total quick fixes (1+2+5): ~15 minutes.**
