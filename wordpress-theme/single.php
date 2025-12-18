<?php
/**
 * Single post template
 *
 * @package SEO_Brain
 */

get_header();
?>

<main id="main-content" style="padding-top: 8rem;">
    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        <?php if (has_post_thumbnail()) : ?>
            <div class="hero" style="min-height: 50vh;">
                <div style="position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.9));">
                    <?php the_post_thumbnail('seobrain-hero', array('style' => 'width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; z-index: -1;')); ?>
                </div>
                <div class="container" style="position: relative; z-index: 10; text-align: center; padding: 4rem 0;">
                    <h1 class="hero-title" style="font-size: clamp(2rem, 4vw, 3rem);"><?php the_title(); ?></h1>
                    <div style="display: flex; justify-content: center; gap: 1rem; margin-top: 1rem; color: rgba(255,255,255,0.7);">
                        <?php seobrain_posted_on(); ?>
                        <span>&bull;</span>
                        <?php seobrain_posted_by(); ?>
                    </div>
                </div>
            </div>
        <?php else : ?>
            <div class="section" style="background: var(--gradient-hero); padding: 6rem 0 3rem;">
                <div class="container" style="text-align: center;">
                    <h1 style="color: white; font-size: clamp(2rem, 4vw, 3rem);"><?php the_title(); ?></h1>
                    <div style="display: flex; justify-content: center; gap: 1rem; margin-top: 1rem; color: rgba(255,255,255,0.7);">
                        <?php seobrain_posted_on(); ?>
                        <span>&bull;</span>
                        <?php seobrain_posted_by(); ?>
                    </div>
                </div>
            </div>
        <?php endif; ?>

        <div class="section" style="padding-top: 3rem;">
            <div class="container" style="max-width: 800px;">
                <div class="entry-content" style="font-size: 1.125rem; line-height: 1.8; color: var(--color-foreground);">
                    <?php
                    the_content();

                    wp_link_pages(array(
                        'before' => '<div class="page-links">' . __('Páginas:', 'seobrain'),
                        'after'  => '</div>',
                    ));
                    ?>
                </div>

                <?php if (get_the_tags()) : ?>
                    <div style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--color-border);">
                        <strong>Tags:</strong>
                        <?php the_tags('', ', ', ''); ?>
                    </div>
                <?php endif; ?>

                <?php
                // Post navigation
                the_post_navigation(array(
                    'prev_text' => '<span class="nav-subtitle">&laquo; Anterior</span><span class="nav-title">%title</span>',
                    'next_text' => '<span class="nav-subtitle">Próximo &raquo;</span><span class="nav-title">%title</span>',
                ));

                // Comments
                if (comments_open() || get_comments_number()) {
                    comments_template();
                }
                ?>
            </div>
        </div>
    </article>
</main>

<?php get_footer(); ?>
