<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consultoria SEO - Posicionamento no Google</title>
    <meta name="description" content="A SEO Brain é uma consultoria SEO especializada em estratégias para aumentar o tráfego orgânico, gerar leads qualificados e posicionar sua empresa no Google.">
    <link rel="canonical" href="<?php echo esc_url(home_url('/')); ?>">
    
    <!-- Open Graph -->
    <meta property="og:title" content="Consultoria de SEO - Posicionamento no Google">
    <meta property="og:description" content="A SEO Brain é uma consultoria de SEO especializada em estratégias para aumentar o tráfego orgânico, gerar leads qualificados e posicionar sua empresa no Google.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo esc_url(home_url('/')); ?>">
    <meta property="og:locale" content="pt_BR">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@SEOBrain">
    
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- Exit Intent Popup -->
<div class="exit-popup-overlay" id="exitPopup">
    <div class="exit-popup">
        <button class="exit-popup-close" id="exitPopupClose" aria-label="Fechar">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
<header class="site-header" id="site-header">
    <div class="container">
        <div class="header-inner">
            <a href="<?php echo esc_url(home_url('/')); ?>" class="site-logo">
                <div class="logo-icon">
                    <?php echo seobrain_get_icon('brain'); ?>
                </div>
                <span class="logo-text"><?php bloginfo('name'); ?></span>
            </a>

            <nav class="main-nav">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'container'      => false,
                    'items_wrap'     => '%3$s',
                    'fallback_cb'    => function() {
                        ?>
                        <a href="#servicos">Serviços</a>
                        <a href="#resultados">Resultados</a>
                        <a href="#depoimentos">Depoimentos</a>
                        <a href="#contato">Contato</a>
                        <?php
                    }
                ));
                ?>
            </nav>

            <div class="header-cta">
                <a href="https://wa.me/5511961412794" target="_blank" rel="noopener noreferrer" class="btn btn-outline">Fale Conosco</a>
            </div>

            <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Menu">
                <?php echo seobrain_get_icon('menu'); ?>
            </button>
        </div>
    </div>
</header>
