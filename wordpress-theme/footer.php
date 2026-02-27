<footer class="site-footer">
    <div class="container">
        <div class="footer-grid">
            <div class="footer-brand">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="site-logo">
                    <div class="logo-icon">
                        <?php echo seobrain_get_icon('brain'); ?>
                    </div>
                    <span class="logo-text"><?php bloginfo('name'); ?></span>
                </a>
                <p>Somos uma consultoria seo com foco em resultados mensuráveis. Ajudamos empresas a conquistar as primeiras posições do Google de forma sustentável.</p>
                <div class="footer-social">
                    <?php if (get_theme_mod('social_linkedin', '#')) : ?>
                        <a href="<?php echo esc_url(get_theme_mod('social_linkedin', '#')); ?>" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <?php echo seobrain_get_icon('linkedin'); ?>
                        </a>
                    <?php endif; ?>
                    <?php if (get_theme_mod('social_instagram', '#')) : ?>
                        <a href="<?php echo esc_url(get_theme_mod('social_instagram', '#')); ?>" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <?php echo seobrain_get_icon('instagram'); ?>
                        </a>
                    <?php endif; ?>
                    <?php if (get_theme_mod('social_youtube', '#')) : ?>
                        <a href="<?php echo esc_url(get_theme_mod('social_youtube', '#')); ?>" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <?php echo seobrain_get_icon('youtube'); ?>
                        </a>
                    <?php endif; ?>
                </div>
            </div>

            <div class="footer-links">
                <h4>Links Rápidos</h4>
                <ul>
                    <li><a href="#servicos">Serviços</a></li>
                    <li><a href="#resultados">Resultados</a></li>
                    <li><a href="#depoimentos">Depoimentos</a></li>
                    <li><a href="<?php echo esc_url(get_permalink(get_option('page_for_posts'))); ?>">Blog</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </div>

            <div class="footer-links">
                <h4>Serviços</h4>
                <ul>
                    <li><a href="#servicos">SEO Técnico</a></li>
                    <li><a href="#servicos">Conteúdo SEO</a></li>
                    <li><a href="#servicos">Link Building</a></li>
                    <li><a href="#servicos">SEO Local</a></li>
                    <li><a href="#servicos">Consultoria</a></li>
                </ul>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2026 <?php bloginfo('name'); ?>. Todos os direitos reservados.</p>
            <div class="footer-bottom-links">
                <a href="https://seobrain.com.br/politica-de-privacidade/" target="_blank" rel="noopener noreferrer">Política de Privacidade</a>
                <a href="#">Termos de Uso</a>
            </div>
            <p class="footer-legal">DXC Empreendimentos Digitais LTDA - CNPJ: 57.887.403/0001-11</p>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
