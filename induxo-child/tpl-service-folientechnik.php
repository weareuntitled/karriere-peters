<?php
/**
 * Template Name: Service: Folientechnik
 * Template Post Type: ts-service, page
 *
 * Spenglerei Peters — Spenglermeisterbetrieb
 *
 * @package Induxo_Child
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

$sp_folie_canvas = function_exists( 'elementor_theme_do_location' ) && elementor_theme_do_location( 'single' );

if ( ! $sp_folie_canvas ) {
    get_header();
}

$data = array(
    'hero' => array(
        'image'    => 'Edelweiss-2.jpg',
        'iconId'   => 'layers',
        'title'    => 'Folientechnik für Flachdach & Balkon',
        'subtitle' => 'Langlebige Abdichtung mit geprüften Produkten. Zufriedene Kunden seit 2017. Vom TÜV-geprüften Folientechniker. Alles was vom Dach abfließt bleibt bei uns dicht.',
    ),
    'intro' => array(
        'eyebrow' => 'Folientechnik',
        'title'   => 'Abdichtung, die dicht bleibt',
        'body'    => 'Wasser ist der größte Feind jeder Bausubstanz. Mit moderner Folientechnik dichten wir Flachdächer, Balkone und Terrassen dauerhaft ab. In unserer eigenen Werkstatt schneiden wir alle Materialien passgenau zu. So sitzt jedes Teil auf Anhieb.',
    ),
    'leistungen' => array(
        'title' => 'Was wir für Sie abdichten',
        'lead'  => 'Von der Flachdach-Sanierung bis zur Balkon-Beschichtung. Sauber, nach allen Regeln und mit Garantie.',
        'items' => array(
            'Flachdach-Abdichtung mit Wolfin- und Kemperol-Produkten',
            'Balkon- und Terrassen-Abdichtung',
            'Anschluss- und Detailabdichtungen',
            'Sanierung undicht gewordener Dachflächen',
            'Flüssigfolien-Beschichtung mit Kemper-Produkten',
            'Wartung und Inspektion bestehender Abdichtungen',
        ),
    ),
    'materialien' => array(
        'title' => 'Ausschließlich geprüfte Produkte',
        'lead'  => 'Wir verarbeiten nur geprüfte Markenprodukte. Für maximale Haltbarkeit und Garantie.',
        'cards' => array(
            array( 'icon' => 'science',           'title' => 'Kemperol',            'body' => 'Flüssigabdichtung für Übergänge und Details. Dauerhaft elastisch und auch bei Rissen dicht. Seit Jahrzehnten bewährt.' ),
            array( 'icon' => 'shield',            'title' => 'Wolfin',              'body' => 'Premium-Bahnenware für Flachdächer. Wetterfest, langlebig und ohne Bitumen.' ),
            array( 'icon' => 'workspace_premium', 'title' => 'Geprüfte Verarbeitung','body' => 'Geprüfter Betrieb mit geschultem Personal. Sie bekommen die volle Hersteller-Garantie.' ),
        ),
    ),
    'galerie' => array(
        'title'  => 'Ausgewählte Projekte',
        'images' => array(
            array( 'src' => 'Edelweiss-2.jpg',          'alt' => 'Flüssigfolien-Abdichtung auf einem Balkon' ),
            array( 'src' => '030-poschingerweiher.jpg',  'alt' => 'Flachdach nach Abdichtung' ),
            array( 'src' => '007-poschingerweiher.jpg',  'alt' => 'Folienbahnen auf Flachdach verlegt' ),
        ),
    ),
    'faq' => array(
        'title' => 'Was Sie wissen sollten',
        'items' => array(
            array(
                'q' => 'Wie lange hält eine Folien-Abdichtung?',
                'a' => 'Bei guter Verarbeitung und regelmäßiger Wartung 25 Jahre und länger. Für Kemperol-Flüssigfolien gibt es eine Hersteller-Garantie.',
            ),
            array(
                'q' => 'Was kostet eine Flachdach- oder Balkon-Abdichtung?',
                'a' => 'Das hängt von Fläche und gewähltem Produkt ab. Wir machen Ihnen gerne ein kostenloses Angebot nach einem Termin vor Ort.',
            ),
            array(
                'q' => 'Arbeiten Sie auch bei laufendem Betrieb?',
                'a' => 'Ja. In vielen Fällen ist eine Sanierung ohne Räumung möglich. Wir planen die Arbeiten so, dass Sie kaum gestört werden.',
            ),
            array(
                'q' => 'Welche Garantie bekomme ich auf die Abdichtung?',
                'a' => 'Als geprüfter Betrieb geben wir die volle Hersteller-Garantie auf das Material. Inklusive schriftlicher Dokumentation.',
            ),
            array(
                'q' => 'Wie schnell können Sie starten?',
                'a' => 'Nach Auftrag und Lieferung meist in 2 bis 4 Wochen. Bei Wasserschäden kommen Sie als erstes dran.',
            ),
        ),
    ),
    'bottom' => array(
        'jobsTitle'  => 'Verstärkung gesucht',
        'jobsBody'   => 'Sie sind Spengler, Dachdecker oder Quereinsteiger? Wir freuen uns über Ihre Bewerbung — ob zur Festanstellung oder als Ausbildungsplatz.',
        'jobsUrl'    => 'https://karriere.peters-erp.com/',
        'jobsLabel'  => 'Offene Stellen',
        'phoneTitle' => 'Jetzt anrufen für ein Angebot',
    ),
    'schema' => array(
        'serviceType' => 'Folientechnik',
        'name'        => 'Folientechnik - Flachdach- und Balkonabdichtung',
        'description' => 'Professionelle Folientechnik für Flachdach, Balkon und Terrasse. Abdichtung mit geprüften Kemper- und Wolfin-Produkten vom TÜV-geprüften Folientechniker in Kühbach.',
        'url'         => home_url( '/dienstleistungen/folientechnik/' ),
    ),
);
?>

<main class="sp-folie" id="sp-folie-content">

    <?php get_template_part( 'template-parts/service/hero',       null, array( 'data' => $data['hero'] ) ); ?>
    <?php get_template_part( 'template-parts/service/intro',      null, array( 'data' => $data['intro'] ) ); ?>
    <?php get_template_part( 'template-parts/service/leistungen',  null, array( 'data' => $data['leistungen'] ) ); ?>
    <?php get_template_part( 'template-parts/service/materialien', null, array( 'data' => $data['materialien'] ) ); ?>
    <?php get_template_part( 'template-parts/service/galerie',    null, array( 'data' => $data['galerie'] ) ); ?>
    <?php get_template_part( 'template-parts/service/faq',        null, array( 'data' => $data['faq'] ) ); ?>
    <?php get_template_part( 'template-parts/service/bottom',     null, array( 'data' => $data['bottom'] ) ); ?>

</main>

<?php get_template_part( 'template-parts/service/schema', null, array( 'data' => $data['schema'] ) ); ?>

<?php
if ( ! $sp_folie_canvas ) {
    get_footer();
}
