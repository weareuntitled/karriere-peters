<?php
/**
 * Induxo Child Theme Functions
 * Spenglerei Peters
 */

if (!defined('ABSPATH')) exit;

/**
 * Enqueue parent and child theme styles
 */
function induxo_child_enqueue_styles() {
    // Parent theme styles
    $parent_style = 'parent-style';
    wp_enqueue_style($parent_style, get_template_directory_uri() . '/style.css');
    
    // Design tokens (loaded first, before child style)
    wp_enqueue_style('induxo-child-design-tokens', get_stylesheet_directory_uri() . '/design-tokens.css', array(), wp_get_theme()->get('Version'));
    
    // Child theme styles (after parent to override)
    wp_enqueue_style('induxo-child-style', get_stylesheet_uri(), array($parent_style, 'induxo-child-design-tokens'), wp_get_theme()->get('Version'));
}
add_action('wp_enqueue_scripts', 'induxo_child_enqueue_styles');

/**
 * Add Google Fonts - Manrope + Inter
 */
function induxo_child_google_fonts() {
    wp_enqueue_style('induxo-child-fonts', 'https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700&family=Inter:wght@400;500;600&display=swap', array(), null);
}
add_action('wp_enqueue_scripts', 'induxo_child_google_fonts');

/**
 * Register Custom Post Types
 * (Included directly - kann auch als separates Plugin genutzt werden)
 */
function spenglerei_register_cpts() {
    // Services
    register_post_type('service', [
        'labels' => [
            'name' => 'Dienstleistungen',
            'singular_name' => 'Dienstleistung',
            'add_new' => 'Neue Dienstleistung',
        ],
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-building',
        'supports' => ['title', 'editor', 'thumbnail', 'excerpt'],
        'show_in_menu' => true,
        'rewrite' => ['slug' => 'dienstleistungen'],
    ]);

    // Projects
    register_post_type('project', [
        'labels' => [
            'name' => 'Projekte',
            'singular_name' => 'Projekt',
            'add_new' => 'Neues Projekt',
        ],
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-images-alt2',
        'supports' => ['title', 'editor', 'thumbnail', 'excerpt'],
        'show_in_menu' => true,
        'rewrite' => ['slug' => 'projekte'],
    ]);

    // Jobs
    register_post_type('job', [
        'labels' => [
            'name' => 'Stellenangebote',
            'singular_name' => 'Stelle',
            'add_new' => 'Neue Stelle',
        ],
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-id',
        'supports' => ['title', 'editor', 'thumbnail'],
        'show_in_menu' => true,
        'rewrite' => ['slug' => 'karriere'],
    ]);

    // Team Members
    register_post_type('team_member', [
        'labels' => [
            'name' => 'Team',
            'singular_name' => 'Team-Mitglied',
            'add_new' => 'Neues Team-Mitglied',
        ],
        'public' => true,
        'menu_icon' => 'dashicons-groups',
        'supports' => ['title', 'editor', 'thumbnail'],
        'show_in_menu' => true,
        'rewrite' => ['slug' => 'team'],
    ]);
}
add_action('init', 'spenglerei_register_cpts');

/**
 * Flush rewrite rules on theme activation
 */
function induxo_child_flush_rewrite() {
    spenglerei_register_cpts();
    flush_rewrite_rules();
}
add_action('after_switch_theme', 'induxo_child_flush_rewrite');

/**
 * Custom body classes for Glassmorphism
 */
function induxo_child_body_classes($classes) {
    $classes[] = 'glassmorphism-theme';
    return $classes;
}
add_filter('body_class', 'induxo_child_body_classes');

/**
 * Remove parent theme's default fonts if needed
 * (Falls Induxo eigene Fonts lädt die wir nicht wollen)
 */
function induxo_child_dequeue_fonts() {
    // Falls nötig: wp_dequeue_style('parent-font-handle');
}
add_action('wp_enqueue_scripts', 'induxo_child_dequeue_fonts', 20);

/**
 * Add theme support
 */
function induxo_child_theme_support() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', ['search-form', 'comment-form', 'comment-list', 'gallery', 'caption']);
    
    // Elementor Support
    add_theme_support('elementor');
}
add_action('after_setup_theme', 'induxo_child_theme_support');

/**
 * Custom CSS for Services Page - Hover Colors & Mobile
 */
function induxo_child_services_custom_css() {
    if (is_singular('service') || is_post_type_archive('service') || is_page('services')) {
        ?>
        <style>
        /* Service Boxes - Hover Farben auf Blau ändern */
        .ts-service-wrapper:hover,
        .ts-service-area .ts-service-wrapper:hover,
        .elementor-widget-induxo-service .ts-service-wrapper:hover {
            background: #00355f !important;
            border-color: #00355f !important;
        }
        .ts-service-wrapper:hover .ts-title,
        .ts-service-wrapper:hover .ts-title a,
        .ts-service-area .ts-service-wrapper:hover .ts-title {
            color: #ffffff !important;
        }
        .ts-service-wrapper:hover p,
        .ts-service-area .ts-service-wrapper:hover p,
        .ts-service-wrapper:hover .service-box-info {
            color: rgba(255,255,255,0.9) !important;
        }
        /* Icon Hover - Blau statt Orange */
        .ts-service-wrapper:hover .ts-service-box-img i,
        .ts-service-wrapper:hover .fa,
        .ts-service-wrapper:hover [class^="icon-"] {
            background: #07497d !important;
            color: #ffffff !important;
        }
        
        /* Mobile Layout verbessern */
        @media (max-width: 768px) {
            .ts-service-wrapper {
                display: flex !important;
                flex-direction: column !important;
                align-items: center !important;
                padding: 25px 20px !important;
                margin-bottom: 15px !important;
                text-align: center !important;
            }
            .ts-service-box-img {
                position: relative !important;
                margin: 0 auto 15px !important;
                left: auto !important;
                top: auto !important;
                transform: none !important;
            }
            .service-box-info {
                text-align: center !important;
                padding-left: 0 !important;
            }
        }
        </style>
        <?php
    }
}
add_action('wp_head', 'induxo_child_services_custom_css', 99);

/**
 * Custom CSS & JS for Services Page - Fade In Animation
 */
function induxo_child_services_animation() {
    if (is_singular('service') || is_post_type_archive('service') || is_page('services') || is_page_template('template-service.php')) {
        ?>
        <style>
        /* Service Boxes - Fade In Entry Animation */
        .ts-service-wrapper {
            opacity: 0;
            transform: translateY(30px);
            transition: 
                opacity 0.6s ease-out,
                transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                background 0.3s ease,
                color 0.3s ease,
                border-color 0.3s ease;
        }

        .ts-service-wrapper.is-visible {
            opacity: 1;
            transform: translateY(0);
        }

        /* Staggered Delays */
        .ts-service-wrapper:nth-child(1) { transition-delay: 0s; }
        .ts-service-wrapper:nth-child(2) { transition-delay: 0.1s; }
        .ts-service-wrapper:nth-child(3) { transition-delay: 0.2s; }
        .ts-service-wrapper:nth-child(4) { transition-delay: 0.3s; }
        .ts-service-wrapper:nth-child(5) { transition-delay: 0.4s; }
        .ts-service-wrapper:nth-child(6) { transition-delay: 0.5s; }
        .ts-service-wrapper:nth-child(7) { transition-delay: 0.6s; }
        .ts-service-wrapper:nth-child(8) { transition-delay: 0.7s; }

        /* Hover: nur Farbe ändern - kein Lift */
        .ts-service-wrapper:hover .ts-title,
        .ts-service-wrapper:hover .ts-title a,
        .ts-service-area .ts-service-wrapper:hover .ts-title {
            color: #00355f !important;
        }
        .ts-service-wrapper:hover p,
        .ts-service-area .ts-service-wrapper:hover p,
        .ts-service-wrapper:hover .service-box-info {
            color: #191c1e !important;
        }
        .ts-service-wrapper:hover .ts-service-box-img i,
        .ts-service-wrapper:hover .fa,
        .ts-service-wrapper:hover [class^="icon-"] {
            color: #00355f !important;
            background: transparent !important;
        }

        /* Mobile Layout */
        @media (max-width: 768px) {
            .ts-service-wrapper {
                display: flex !important;
                flex-direction: column !important;
                align-items: center !important;
                padding: 25px 20px !important;
                margin-bottom: 15px !important;
                text-align: center !important;
            }
            .ts-service-box-img {
                position: relative !important;
                margin: 0 auto 15px !important;
                left: auto !important;
                top: auto !important;
                transform: none !important;
            }
            .service-box-info {
                text-align: center !important;
                padding-left: 0 !important;
            }
        }
        </style>
        <script>
        document.addEventListener('DOMContentLoaded', function() {
            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -50px 0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.ts-service-wrapper, .ts-service-area .ts-service-wrapper').forEach(el => {
                observer.observe(el);
            });
        });
        </script>
        <?php
    }
}
add_action('wp_head', 'induxo_child_services_animation', 98);

/**
 * About Page: dark jobs section + link fix
 */
function spenglerei_about_customizations() {
    if (is_page('about')) {
        ?>
        <style>
        .sp-ueber-section--inverted:has(.sp-ueber-jobs) {
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%) !important;
        }
        .sp-ueber-section--inverted:has(.sp-ueber-jobs) h2,
        .sp-ueber-section--inverted:has(.sp-ueber-jobs) p {
            color: #e8e8e8 !important;
        }
        .sp-ueber-section--inverted .sp-ueber-jobs__btn {
            display: inline-block !important;
            padding: 10px 24px !important;
            border: 1px solid rgba(255,255,255,0.25) !important;
            border-radius: 30px !important;
            color: #e8e8e8 !important;
            text-decoration: none !important;
            font-size: 13px !important;
            transition: background 0.2s !important;
        }
        .sp-ueber-section--inverted .sp-ueber-jobs__btn:hover {
            background: rgba(255,255,255,0.08) !important;
        }
        </style>
        <script>
        document.addEventListener('DOMContentLoaded', function() {
            var link = document.querySelector('.sp-ueber-jobs__btn');
            if (link && link.href.includes('stellenangebote')) link.href = 'https://karriere.peters-erp.com/';
        });
        </script>
        <?php
    }
}
add_action('wp_head', 'spenglerei_about_customizations', 99);