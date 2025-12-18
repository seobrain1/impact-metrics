<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consultoria SEO | Agência SEO | Consultor SEO | Top #1Google</title>
    <meta name="description" content="Consultoria SEO ✓ Domine o topo do Google ✓ + Leads e vendas ✓ Conheça nosso serviço de SEO! Agência SEO ✓ Consultor SEO ✓ Resultados REAIS ✓">
    <meta name="keywords" content="consultoria SEO, agência SEO, consultor SEO, otimização para buscadores, SEO Brasil">
    <link rel="canonical" href="<?php echo esc_url(home_url('/')); ?>">
    
    <!-- Open Graph -->
    <meta property="og:title" content="Consultoria SEO | Agência SEO | Consultor SEO | Top #1Google">
    <meta property="og:description" content="Consultoria SEO ✓ Domine o topo do Google ✓ + Leads e vendas ✓ Conheça nosso serviço de SEO!">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo esc_url(home_url('/')); ?>">
    <meta property="og:locale" content="pt_BR">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Consultoria SEO | Agência SEO | Consultor SEO | Top #1Google">
    <meta name="twitter:description" content="Consultoria SEO ✓ Domine o topo do Google ✓ + Leads e vendas ✓ Conheça nosso serviço de SEO!">
    
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>


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
                <a href="#contato" class="btn btn-outline">Fale Conosco</a>
            </div>

            <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Menu">
                <?php echo seobrain_get_icon('menu'); ?>
            </button>
        </div>
    </div>
</header>
