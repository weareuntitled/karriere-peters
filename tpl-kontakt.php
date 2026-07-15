<?php
/**
 * Template Name: Kontakt
 * Template Post Type: page
 *
 * Kontaktseite mit Standort, Öffnungszeiten, Formular und Karte.
 * Spenglerei Peters - Spenglermeisterbetrieb
 *
 * @package Induxo_Child
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();
?>

<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&family=Space+Grotesk:wght@400..700&display=swap" rel="stylesheet">

<style>
:root {
    --sp-blue: #0071bc;
    --sp-blue-dark: #0056b3;
    --sp-blue-light: #3393d8;
    --sp-blue-tint: #d1e4ff;
    --sp-ink: #1a1c1e;
    --sp-ink-soft: #404751;
    --sp-surface: #f9f9fc;
    --sp-glass-bg: rgba(255, 255, 255, 0.7);
    --sp-glass-bg-heavy: rgba(255, 255, 255, 0.85);
    --sp-glass-border: rgba(255, 255, 255, 0.8);
    --sp-shadow-sm: 0 4px 12px rgba(0, 113, 188, 0.06);
    --sp-shadow-md: 0 8px 32px rgba(0, 113, 188, 0.08);
    --sp-shadow-lg: 0 20px 40px rgba(0, 113, 188, 0.1);
    --sp-radius-sm: 12px;
    --sp-radius-md: 16px;
    --sp-radius-lg: 24px;
    --sp-radius-xl: 32px;
    --sp-border-light: #eef0f4;
    --sp-border-input: #dce0e6;
    --sp-font-heading: 'Space Grotesk', 'DM Sans', system-ui, sans-serif;
    --sp-font-body: 'DM Sans', system-ui, -apple-system, sans-serif;
}

.sp-kontakt * { box-sizing: border-box; }
.sp-kontakt { font-family: var(--sp-font-body); color: var(--sp-ink); line-height: 1.6; }
.sp-kontakt h1, .sp-kontakt h2, .sp-kontakt h3 { font-family: var(--sp-font-heading); font-weight: 700; }
.sp-kontakt img { display: block; max-width: 100%; height: auto; }
.sp-kontakt a { color: var(--sp-blue); text-decoration: none; }

.sp-kontakt-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 32px;
}

/* ---------- HERO ---------- */
.sp-kontakt-hero {
    position: relative;
    min-height: 560px;
    display: flex;
    align-items: center;
    padding: 100px 0 80px;
    overflow: hidden;
    background: var(--sp-ink);
}

.sp-kontakt-hero__bg {
    position: absolute; inset: 0; z-index: 0;
}

.sp-kontakt-hero__bg img {
    width: 100%; height: 100%; object-fit: cover;
}

.sp-kontakt-hero__bg::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%);
}

.sp-kontakt-hero__content {
    position: relative; z-index: 2; max-width: 720px;
}

.sp-kontakt-hero__badge {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 8px 16px; background: rgba(255,255,255,0.15);
    border: 1px solid rgba(255,255,255,0.3); border-radius: 9999px;
    font-size: 13px; font-weight: 600; color: #fff;
    text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 24px;
    backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
}

.sp-kontakt-hero__badge .material-symbols-outlined { font-size: 18px; }

.sp-kontakt-hero h1 {
    font-size: 56px; font-weight: 700; line-height: 1.1;
    letter-spacing: -0.02em; color: #fff; margin: 0 0 20px;
}

.sp-kontakt-hero__sub {
    font-size: 20px; line-height: 1.5; color: rgba(255,255,255,0.85);
    margin: 0 0 32px; max-width: 580px;
}

/* ---------- SECTIONS ---------- */
.sp-kontakt-section { padding: 80px 0; }
.sp-kontakt-section--alt { background: var(--sp-surface); }

.sp-kontakt-section__head {
    text-align: center; max-width: 680px; margin: 0 auto 48px;
}

.sp-kontakt-section__eyebrow {
    display: inline-block; font-size: 13px; font-weight: 600;
    color: var(--sp-blue); text-transform: uppercase;
    letter-spacing: 0.1em; margin-bottom: 12px;
}

.sp-kontakt-section h2 {
    font-size: 38px; font-weight: 700; line-height: 1.2;
    letter-spacing: -0.01em; margin: 0 0 16px; color: var(--sp-ink);
}

.sp-kontakt-section__lead {
    font-size: 17px; line-height: 1.6; color: var(--sp-ink-soft); margin: 0;
}

/* ---------- GLASS CARDS (Adresse + Öffnungszeiten) ---------- */
.sp-kontakt-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    max-width: 900px;
    margin: 0 auto;
}

.sp-kontakt-card {
    background: var(--sp-glass-bg-heavy);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid var(--sp-glass-border);
    border-radius: var(--sp-radius-lg);
    padding: 40px 36px;
    box-shadow: var(--sp-shadow-md);
    transition: transform 200ms ease-out, box-shadow 200ms ease-out;
}

@media (hover: hover) and (pointer: fine) {
    .sp-kontakt-card:hover {
        transform: translateY(-4px);
        box-shadow: var(--sp-shadow-lg);
    }
}

.sp-kontakt-card__icon {
    width: 48px; height: 48px;
    border-radius: 50%; background: var(--sp-blue-tint);
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 20px;
}

.sp-kontakt-card__icon .material-symbols-outlined {
    font-size: 24px; color: var(--sp-blue);
}

.sp-kontakt-card h3 {
    font-size: 20px; font-weight: 600; color: var(--sp-ink);
    margin: 0 0 16px;
}

.sp-kontakt-card p {
    font-size: 16px; color: var(--sp-ink-soft);
    margin: 0 0 6px;
    line-height: 1.7;
}

.sp-kontakt-card p:last-child { margin: 0; }

.sp-kontakt-hours {
    list-style: none;
    padding: 0;
    margin: 0;
}

.sp-kontakt-hours li {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    font-size: 15px;
    color: var(--sp-ink-soft);
    border-bottom: 1px solid var(--sp-border-light);
}

.sp-kontakt-hours li:last-child { border-bottom: none; }

.sp-kontakt-hours__day {
    font-weight: 500; color: var(--sp-ink);
}

/* ---------- FORMULAR ---------- */
.sp-kontakt-form-wrap {
    max-width: 720px;
    margin: 0 auto;
    background: var(--sp-glass-bg-heavy);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid var(--sp-glass-border);
    border-radius: var(--sp-radius-xl);
    padding: 56px 48px;
    box-shadow: var(--sp-shadow-lg);
}

    .sp-kontakt-form-wrap .form-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }

    .sp-kontakt-form-wrap .form-group {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .sp-kontakt-form-wrap .form-group--full {
        grid-column: 1 / -1;
    }

    .sp-kontakt-form-wrap label {
        font-size: 14px;
        font-weight: 600;
        color: var(--sp-ink);
        display: block;
    }

    .sp-kontakt-form-wrap label .required {
        color: #d63638;
    }

    .sp-kontakt-form-wrap input,
    .sp-kontakt-form-wrap textarea,
    .sp-kontakt-form-wrap select {
        width: 100%;
        padding: 14px 16px;
        border: 1px solid var(--sp-border-input);
        border-radius: var(--sp-radius-sm);
        font-family: var(--sp-font-body);
        font-size: 16px;
        color: var(--sp-ink);
        background: #fff;
        transition: border-color 200ms ease-out, box-shadow 200ms ease-out;
    }

    .sp-kontakt-form-wrap input:focus,
    .sp-kontakt-form-wrap textarea:focus,
    .sp-kontakt-form-wrap select:focus {
        outline: none;
        border-color: var(--sp-blue);
        box-shadow: 0 0 0 3px var(--sp-blue-tint);
    }

    .sp-kontakt-form-wrap textarea {
        min-height: 150px;
        resize: vertical;
    }

    .sp-kontakt-form-wrap .btn-submit {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: auto;
        padding: 16px 36px;
        background: linear-gradient(135deg, var(--sp-blue) 0%, var(--sp-blue-dark) 100%);
        border: none;
        border-radius: 9999px;
        font-family: var(--sp-font-heading);
        font-weight: 600;
        font-size: 17px;
        color: #fff;
        cursor: pointer;
        transition: transform 200ms ease-out, box-shadow 200ms ease-out;
    }

    .sp-kontakt-form-wrap .btn-submit:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 28px rgba(0, 113, 188, 0.3);
    }

    .sp-kontakt-form-wrap .btn-submit:active {
        transform: scale(0.97);
    }

    .sp-kontakt-form-wrap .btn-submit:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    .sp-kontakt-form-wrap .dsgvo-row {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
    }

    .sp-kontakt-form-wrap .dsgvo-row input[type="checkbox"] {
        width: auto;
        flex-shrink: 0;
    }

    .sp-kontakt-form-wrap .dsgvo-row label {
        font-size: 14px;
        font-weight: 400;
        text-transform: none;
        letter-spacing: normal;
        color: var(--sp-ink-soft);
    }

    .sp-kontakt-form-wrap .dsgvo-row a {
        color: var(--sp-blue);
        text-decoration: underline;
    }

    .sp-kontakt-form-wrap .form-footer {
        grid-column: 1 / -1;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        flex-wrap: wrap;
    }

    .sp-kontakt-form-wrap .form-hint {
        font-size: 12px;
        color: var(--sp-ink-soft);
        margin: 0;
    }

    .sp-kontakt-success,
    .sp-kontakt-error {
        display: none;
        padding: 24px 0;
        text-align: center;
    }

    .sp-kontakt-success h3,
    .sp-kontakt-error h3 {
        font-family: var(--sp-font-heading);
        font-size: 20px;
        font-weight: 700;
        margin: 0;
        color: var(--sp-ink);
    }

    .sp-kontakt-success p,
    .sp-kontakt-error p {
        color: var(--sp-ink-soft);
        margin: 8px 0 0;
    }

/* ---------- MAP ---------- */
.sp-kontakt-map {
    border-radius: var(--sp-radius-xl);
    overflow: hidden;
    box-shadow: var(--sp-shadow-md);
    max-width: 1100px;
    margin: 0 auto;
}

.sp-kontakt-map iframe {
    width: 100%;
    height: 420px;
    display: block;
    border: 0;
}

/* ---------- CTA (blue gradient, no phone) ---------- */
.sp-kontakt-cta {
    position: relative;
    padding: 64px 48px;
    background: linear-gradient(135deg, var(--sp-blue) 0%, var(--sp-blue-dark) 100%);
    border-radius: var(--sp-radius-xl);
    box-shadow: 0 24px 60px rgba(0, 113, 188, 0.25);
    color: #fff; text-align: center;
    max-width: 1080px; margin: 0 auto; overflow: hidden;
}

.sp-kontakt-cta::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(circle at top right, rgba(255,255,255,0.2), transparent 60%);
    pointer-events: none;
}

.sp-kontakt-cta__inner { position: relative; z-index: 1; }

.sp-kontakt-cta h2 {
    font-size: 36px; font-weight: 700; line-height: 1.2;
    margin: 0 0 16px; color: #fff;
}

.sp-kontakt-cta p {
    font-size: 18px; line-height: 1.5; margin: 0 0 32px; color: rgba(255,255,255,0.92);
}

.sp-kontakt-cta__btn {
    display: inline-flex; align-items: center; gap: 12px;
    padding: 18px 36px; background: #fff;
    border-radius: 9999px; font-size: 18px; font-weight: 700;
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
    transition: transform 200ms ease-out, box-shadow 200ms ease-out;
}

.sp-kontakt .sp-kontakt-cta__btn { color: var(--sp-blue-dark); }
.sp-kontakt .sp-kontakt-cta__btn:hover { color: var(--sp-blue-dark); }

.sp-kontakt-cta__btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 32px rgba(0,0,0,0.2);
}

.sp-kontakt-cta__btn:active { transform: scale(0.97); }

.sp-kontakt-cta__btn .material-symbols-outlined { font-size: 22px; }

/* ========== RESPONSIVE ========== */
@media (max-width: 1024px) {
    .sp-kontakt-hero { min-height: 460px; padding: 80px 0 60px; }
    .sp-kontakt-hero h1 { font-size: 44px; }
    .sp-kontakt-hero__sub { font-size: 18px; }
    .sp-kontakt-section { padding: 64px 0; }
    .sp-kontakt-section h2 { font-size: 32px; }
    .sp-kontakt-cta { padding: 56px 40px; }
    .sp-kontakt-cta h2 { font-size: 30px; }
}

@media (max-width: 768px) {
    .sp-kontakt-container { padding: 0 20px; }
    .sp-kontakt-hero { min-height: 380px; padding: 64px 0 48px; }
    .sp-kontakt-hero h1 { font-size: 38px; }
    .sp-kontakt-hero__sub { font-size: 16px; }
    .sp-kontakt-section { padding: 56px 0; }
    .sp-kontakt-section h2 { font-size: 28px; }
    .sp-kontakt-info { grid-template-columns: 1fr; gap: 24px; }
    .sp-kontakt-card { padding: 32px 28px; }
    .sp-kontakt-form-wrap { padding: 40px 28px; border-radius: var(--sp-radius-lg); }
    .sp-kontakt-map iframe { height: 300px; }
    .sp-kontakt-cta { padding: 48px 28px; border-radius: var(--sp-radius-lg); }
    .sp-kontakt-cta h2 { font-size: 26px; }
    .sp-kontakt-cta p { font-size: 16px; }
    .sp-kontakt-cta__btn { padding: 16px 28px; font-size: 16px; }
}

@media (max-width: 640px) {
    .sp-kontakt-container { padding: 0 16px; }
    .sp-kontakt-hero { min-height: 340px; padding: 56px 0 40px; }
    .sp-kontakt-hero h1 { font-size: 32px; }
    .sp-kontakt-hero__sub { font-size: 15px; }
    .sp-kontakt-hero__badge { font-size: 11px; padding: 6px 12px; }
    .sp-kontakt-section { padding: 48px 0; }
    .sp-kontakt-section h2 { font-size: 24px; }
    .sp-kontakt-form-wrap { padding: 32px 20px; }
}

@media (max-width: 480px) {
    .sp-kontakt-hero { min-height: 300px; padding: 48px 0 32px; }
    .sp-kontakt-hero h1 { font-size: 28px; }
    .sp-kontakt-section h2 { font-size: 22px; }
    .sp-kontakt-cta { padding: 40px 24px; }
    .sp-kontakt-cta h2 { font-size: 22px; }
    .sp-kontakt-cta p { font-size: 15px; margin-bottom: 24px; }
    .sp-kontakt-cta__btn { padding: 14px 24px; font-size: 15px; }
}

@media (max-width: 360px) {
    .sp-kontakt-hero h1 { font-size: 26px; }
    .sp-kontakt-section h2 { font-size: 20px; }
}

@media (prefers-reduced-motion: reduce) {
    .sp-kontakt *, .sp-kontakt *::before, .sp-kontakt *::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
</style>

<main class="sp-kontakt" id="sp-kontakt-content">

    <!-- ===================== HERO ===================== -->
    <section class="sp-kontakt-hero">
        <div class="sp-kontakt-hero__bg" aria-hidden="true">
            <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/spengler_hero.jpg' ); ?>" alt="" loading="eager" fetchpriority="high">
        </div>

        <div class="sp-kontakt-container">
            <div class="sp-kontakt-hero__content">
                <span class="sp-kontakt-hero__badge">
                    <span class="material-symbols-outlined">location_on</span>
                    Unser Standort
                </span>

                <h1>So finden Sie uns</h1>
                <p class="sp-kontakt-hero__sub">
                    Kommen Sie vorbei, schreiben Sie uns eine Nachricht &mdash;
                    wir melden uns zeitnah bei Ihnen.
                </p>
            </div>
        </div>
    </section>

    <!-- ===================== ADRESSE + ÖFFNUNGSZEITEN ===================== -->
    <section class="sp-kontakt-section">
        <div class="sp-kontakt-container">
            <div class="sp-kontakt-info">
                <!-- Adresse -->
                <div class="sp-kontakt-card">
                    <div class="sp-kontakt-card__icon">
                        <span class="material-symbols-outlined">location_on</span>
                    </div>
                    <h3>Anschrift</h3>
                    <p>
                        Spenglerei Peters<br>
                        Norbert Peters<br>
                        Äußere Aichacher Straße 1<br>
                        86556 Kühbach
                    </p>
                    <p>
                        <span class="material-symbols-outlined" style="font-size:16px;vertical-align:middle;">mail</span>
                        <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#104;&#97;&#110;&#100;&#119;&#101;&#114;&#107;&#64;&#115;&#112;&#101;&#110;&#103;&#108;&#101;&#114;&#101;&#105;&#45;&#112;&#101;&#116;&#101;&#114;&#115;&#46;&#100;&#101;">&#104;&#97;&#110;&#100;&#119;&#101;&#114;&#107;&#64;&#115;&#112;&#101;&#110;&#103;&#108;&#101;&#114;&#101;&#105;&#45;&#112;&#101;&#116;&#101;&#114;&#115;&#46;&#100;&#101;</a>
                    </p>
                </div>

                <!-- Öffnungszeiten -->
                <div class="sp-kontakt-card">
                    <div class="sp-kontakt-card__icon">
                        <span class="material-symbols-outlined">schedule</span>
                    </div>
                    <h3>Öffnungszeiten</h3>
                    <ul class="sp-kontakt-hours">
                        <li>
                            <span class="sp-kontakt-hours__day">Montag &ndash; Donnerstag</span>
                            <span>08:00 &ndash; 17:00 Uhr</span>
                        </li>
                        <li>
                            <span class="sp-kontakt-hours__day">Freitag</span>
                            <span>08:00 &ndash; 14:00 Uhr</span>
                        </li>
                        <li>
                            <span class="sp-kontakt-hours__day">Samstag &amp; Sonntag</span>
                            <span>Geschlossen</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- ===================== KONTAKTFORMULAR ===================== -->
    <section class="sp-kontakt-section sp-kontakt-section--alt">
        <div class="sp-kontakt-container">
            <div class="sp-kontakt-section__head">
                <span class="sp-kontakt-section__eyebrow">Nachricht</span>
                <h2>Schreiben Sie uns</h2>
                <p class="sp-kontakt-section__lead">
                    Nutzen Sie unser Kontaktformular &mdash; wir antworten in der Regel
                    innerhalb von 24 Stunden.
                </p>
            </div>

            <div class="sp-kontakt-form-wrap">
                <form id="sp-kontakt-form" class="form-grid" action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" value="038c7074-31a3-4195-934e-0fb00d6608d9">
                    <input type="hidden" name="subject" value="Kontaktanfrage Spenglerei Peters">
                    <input type="hidden" name="from_name" value="Kontaktseite">
                    <input type="text" name="_honey" style="display:none">

                    <div class="form-group">
                        <label for="name">Name <span class="required">*</span></label>
                        <input id="name" name="name" required placeholder="Max Mustermann" autocomplete="name">
                    </div>

                    <div class="form-group">
                        <label for="email">E-Mail <span class="required">*</span></label>
                        <input id="email" name="email" type="email" required placeholder="max@beispiel.de" autocomplete="email">
                    </div>

                    <div class="form-group form-group--full">
                        <label for="betreff">Betreff</label>
                        <select id="betreff" name="betreff">
                            <option value="">Bitte wählen</option>
                            <option>Angebot anfragen</option>
                            <option>Termin vereinbaren</option>
                            <option>Reparaturanfrage</option>
                            <option>Sonstiges</option>
                        </select>
                    </div>

                    <div class="form-group form-group--full">
                        <label for="nachricht">Nachricht <span class="required">*</span></label>
                        <textarea id="nachricht" name="nachricht" required placeholder="Ihre Nachricht an uns…"></textarea>
                    </div>

                    <div class="form-group form-group--full dsgvo-row">
                        <input type="checkbox" id="dsgvo" name="dsgvo" required>
                        <label for="dsgvo">Ich habe die <a href="/datenschutz">Datenschutzerkl&auml;rung</a> gelesen und stimme der Verarbeitung meiner Daten zu.</label>
                    </div>

                    <div class="form-footer">
                        <button type="submit" class="btn-submit" id="sp-kontakt-submit">Nachricht senden</button>
                        <p class="form-hint">Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten zur Bearbeitung Ihrer Anfrage zu.</p>
                    </div>
                </form>

                <div class="sp-kontakt-success" id="sp-kontakt-success">
                    <h3>Nachricht eingegangen!</h3>
                    <p>Vielen Dank. Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
                </div>

                <div class="sp-kontakt-error" id="sp-kontakt-error">
                    <h3>Fehler beim Senden</h3>
                    <p>Bitte versuchen Sie es nochmal oder schreiben Sie uns direkt an <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#104;&#97;&#110;&#100;&#119;&#101;&#114;&#107;&#64;&#115;&#112;&#101;&#110;&#103;&#108;&#101;&#114;&#101;&#105;&#45;&#112;&#101;&#116;&#101;&#114;&#115;&#46;&#100;&#101;">&#104;&#97;&#110;&#100;&#119;&#101;&#114;&#107;&#64;&#115;&#112;&#101;&#110;&#103;&#108;&#101;&#114;&#101;&#105;&#45;&#112;&#101;&#116;&#101;&#114;&#115;&#46;&#100;&#101;</a>.</p>
                </div>

                <script>
                    document.getElementById('sp-kontakt-form')?.addEventListener('submit', async function(e) {
                        e.preventDefault();
                        var btn = document.getElementById('sp-kontakt-submit');
                        btn.disabled = true;
                        btn.textContent = 'Wird gesendet&hellip;';
                        var fd = new FormData(this);
                        try {
                            var r = await fetch(this.action, { method: 'POST', body: fd });
                            var d = await r.json();
                            if (d.success) {
                                this.style.display = 'none';
                                document.getElementById('sp-kontakt-success').style.display = 'block';
                            } else {
                                document.getElementById('sp-kontakt-error').style.display = 'block';
                            }
                        } catch {
                            document.getElementById('sp-kontakt-error').style.display = 'block';
                        }
                        btn.disabled = false;
                        btn.textContent = 'Nachricht senden';
                    });
                </script>
            </div>
        </div>
    </section>

    <!-- ===================== ANFAHRT / KARTE ===================== -->
    <section class="sp-kontakt-section">
        <div class="sp-kontakt-container">
            <div class="sp-kontakt-section__head">
                <span class="sp-kontakt-section__eyebrow">Anfahrt</span>
                <h2>Hier finden Sie uns</h2>
            </div>

            <div class="sp-kontakt-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2644.123!2d11.1803!3d48.4908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s%C3%84u%C3%9Fere+Aichacher+Stra%C3%9Fe+1%2C+86556+K%C3%BChbach!5e0!3m2!1sde!2sde!4v1"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Standort Spenglerei Peters in Kühbach"
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    </section>

    <!-- ===================== CTA ===================== -->
    <section class="sp-kontakt-section sp-kontakt-section--alt">
        <div class="sp-kontakt-container">
            <div class="sp-kontakt-cta">
                <div class="sp-kontakt-cta__inner">
                    <h2>Haben Sie ein Projekt?</h2>
                    <p>
                        Schreiben Sie uns &mdash; wir erstellen Ihnen gerne ein
                        unverbindliches Angebot.
                    </p>
                    <a href="#sp-kontakt-content" class="sp-kontakt-cta__btn">
                        <span class="material-symbols-outlined">edit_note</span>
                        Nachricht senden
                    </a>
                </div>
            </div>
        </div>
    </section>

</main>

<?php
get_footer();
