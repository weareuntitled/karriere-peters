<?php
/**
 * Plugin Name: Spenglerei Peters - Custom Post Types
 * Description: CPTs für Spenglerei Peters Website
 * Version: 1.0.0
 */

if (!defined('ABSPATH')) exit;

function spenglerei_register_cpts() {
    // Services
    register_post_type('service', [
        'labels' => [
            'name' => 'Dienstleistungen',
            'singular_name' => 'Dienstleistung',
        ],
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-building',
        'supports' => ['title', 'editor', 'thumbnail', 'excerpt'],
        'show_in_menu' => true,
    ]);

    // Projects
    register_post_type('project', [
        'labels' => [
            'name' => 'Projekte',
            'singular_name' => 'Projekt',
        ],
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-images-alt2',
        'supports' => ['title', 'editor', 'thumbnail', 'excerpt'],
        'show_in_menu' => true,
    ]);

    // Jobs
    register_post_type('job', [
        'labels' => [
            'name' => 'Stellenangebote',
            'singular_name' => 'Stelle',
        ],
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-id',
        'supports' => ['title', 'editor', 'thumbnail'],
        'show_in_menu' => true,
    ]);

    // Team Members
    register_post_type('team_member', [
        'labels' => [
            'name' => 'Team',
            'singular_name' => 'Team-Mitglied',
        ],
        'public' => true,
        'menu_icon' => 'dashicons-groups',
        'supports' => ['title', 'editor', 'thumbnail'],
        'show_in_menu' => true,
    ]);

    // Testimonials (optional)
    register_post_type('testimonial', [
        'labels' => [
            'name' => 'Referenzen',
            'singular_name' => 'Referenz',
        ],
        'public' => false,
        'show_ui' => true,
        'menu_icon' => 'dashicons-testimonial',
        'supports' => ['title', 'editor'],
    ]);
}
add_action('init', 'spenglerei_register_cpts');

// Taxonomy für Projects
function spenglerei_register_taxonomies() {
    register_taxonomy('project_category', 'project', [
        'labels' => [
            'name' => 'Projekt-Kategorien',
            'singular_name' => 'Kategorie',
        ],
        'hierarchical' => true,
        'show_admin_column' => true,
    ]);
}
add_action('init', 'spenglerei_register_taxonomies');