<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php bloginfo('description'); ?>">
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
