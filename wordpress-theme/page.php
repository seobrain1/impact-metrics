<?php
/**
 * Page template
 *
 * @package SEO_Brain
 */

get_header();
?>

<main id="main-content" style="padding-top: 8rem;">
    <?php while (have_posts()) : the_post(); ?>
        <article id="page-<?php the_ID(); ?>" <?php post_class(); ?>>
            <div class="section" style="background: var(--gradient-hero); padding: 6rem 0 3rem;">
                <div class="container" style="text-align: center;">
                    <h1 style="color: white; font-size: clamp(2rem, 4vw, 3rem);"><?php the_title(); ?></h1>
                </div>
            </div>

            <div class="section" style="padding-top: 3rem;">
                <div class="container" style="max-width: 800px;">
                    <?php if (has_post_thumbnail()) : ?>
                        <div style="margin-bottom: 2rem;">
                            <?php the_post_thumbnail('seobrain-hero', array('style' => 'width: 100%; border-radius: var(--radius);')); ?>
                        </div>
                    <?php endif; ?>

                    <div class="entry-content" style="font-size: 1.125rem; line-height: 1.8; color: var(--color-foreground);">
                        <?php
                        the_content();

                        wp_link_pages(array(
                            'before' => '<div class="page-links">' . __('Páginas:', 'seobrain'),
                            'after'  => '</div>',
                        ));
                        ?>
                    </div>

                    <?php
                    if (comments_open() || get_comments_number()) {
                        comments_template();
                    }
                    ?>
                </div>
            </div>
        </article>
    <?php endwhile; ?>
</main>

<?php get_footer(); ?>
