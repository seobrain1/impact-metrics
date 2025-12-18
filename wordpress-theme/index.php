<?php
/**
 * The main template file
 *
 * @package SEO_Brain
 */

get_header();
?>

<main id="main-content" class="section" style="padding-top: 8rem;">
    <div class="container">
        <?php if (have_posts()) : ?>
            <div class="section-header">
                <h1 class="section-title">
                    <?php
                    if (is_home() && !is_front_page()) {
                        single_post_title();
                    } elseif (is_archive()) {
                        the_archive_title();
                    } elseif (is_search()) {
                        printf(__('Resultados para: %s', 'seobrain'), '<span>' . get_search_query() . '</span>');
                    } else {
                        _e('Blog', 'seobrain');
                    }
                    ?>
                </h1>
            </div>

            <div class="services-grid">
                <?php while (have_posts()) : the_post(); ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class('service-card'); ?>>
                        <?php if (has_post_thumbnail()) : ?>
                            <a href="<?php the_permalink(); ?>">
                                <?php the_post_thumbnail('seobrain-card', array('style' => 'border-radius: var(--radius); margin-bottom: 1rem;')); ?>
                            </a>
                        <?php endif; ?>
                        
                        <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                        
                        <p><?php echo wp_trim_words(get_the_excerpt(), 20); ?></p>
                        
                        <div style="margin-top: 1rem;">
                            <a href="<?php the_permalink(); ?>" class="btn btn-primary">
                                Ler mais
                                <?php echo seobrain_get_icon('arrow-right'); ?>
                            </a>
                        </div>
                    </article>
                <?php endwhile; ?>
            </div>

            <?php the_posts_pagination(array(
                'prev_text' => '&laquo; Anterior',
                'next_text' => 'Próximo &raquo;',
            )); ?>

        <?php else : ?>
            <div class="section-header">
                <h1 class="section-title"><?php _e('Nenhum conteúdo encontrado', 'seobrain'); ?></h1>
                <p class="section-description"><?php _e('Desculpe, não há posts para exibir.', 'seobrain'); ?></p>
            </div>
        <?php endif; ?>
    </div>
</main>

<?php get_footer(); ?>
