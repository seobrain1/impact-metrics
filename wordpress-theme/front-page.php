<?php
/**
 * The template for displaying the front page
 *
 * @package SEO_Brain
 */

get_header();
?>

<main id="main-content">
    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <div class="hero-badge">
                    <?php echo seobrain_get_icon('zap'); ?>
                    <span>Cresça no Google com estratégias de SEO que geram tráfego, leads e vendas</span>
                </div>

                <h1 class="hero-title">
                    Consultoria de SEO focada em
                    <span class="highlight">crescimento orgânico</span>
                    e resultados reais
                </h1>

                <p class="hero-description">
                    A SEO Brain é uma consultoria de SEO especialista em posicionar empresas no topo do Google. Conquistando mais visibilidade, tráfego qualificado e conversões reais aos seus clientes.
                </p>

                <div class="hero-buttons">
                    <a href="#contato" class="btn btn-accent btn-lg">
                        Solicitar Análise Gratuita
                        <?php echo seobrain_get_icon('arrow-right'); ?>
                    </a>
                    <a href="#resultados" class="btn btn-outline btn-lg">
                        Ver Cases de Sucesso
                    </a>
                </div>

                <div class="hero-features">
                    <div class="hero-feature">
                        <div class="hero-feature-icon">
                            <?php echo seobrain_get_icon('search'); ?>
                        </div>
                        <h3>Análise Técnica</h3>
                        <p>Auditoria completa do seu site</p>
                    </div>
                    <div class="hero-feature">
                        <div class="hero-feature-icon">
                            <?php echo seobrain_get_icon('chart'); ?>
                        </div>
                        <h3>Estratégia de Conteúdo</h3>
                        <p>Conteúdo que ranqueia</p>
                    </div>
                    <div class="hero-feature">
                        <div class="hero-feature-icon">
                            <?php echo seobrain_get_icon('zap'); ?>
                        </div>
                        <h3>Link Building</h3>
                        <p>Autoridade de domínio</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero-gradient-bottom"></div>
    </section>

    <!-- Services Section -->
    <section id="servicos" class="section services">
        <div class="container">
            <div class="section-header">
                <span class="section-badge">Nossos Serviços</span>
                <h2 class="section-title">Serviços de Otimização <span class="text-gradient">para Buscadores</span></h2>
                <p class="section-description">Oferecemos um ecossistema completo de serviços de consultoria SEO para posicionar sua marca no topo do Google</p>
            </div>

            <div class="services-grid">
                <?php
                $services = array(
                    array(
                        'icon'        => 'search',
                        'title'       => 'SEO Técnico',
                        'description' => 'Otimização completa da estrutura do seu site para máxima indexação e velocidade de carregamento.',
                        'features'    => array('Auditoria técnica', 'Core Web Vitals', 'Schema Markup', 'Sitemap & Robots'),
                    ),
                    array(
                        'icon'        => 'file-text',
                        'title'       => 'Conteúdo SEO',
                        'description' => 'Criação de conteúdo estratégico que atrai e converte seu público-alvo ideal.',
                        'features'    => array('Pesquisa de palavras-chave', 'Produção de artigos', 'Otimização on-page', 'Blog estratégico'),
                    ),
                    array(
                        'icon'        => 'link',
                        'title'       => 'Link Building',
                        'description' => 'Construção de autoridade através de backlinks de qualidade e parcerias estratégicas.',
                        'features'    => array('Outreach personalizado', 'Guest posts', 'Digital PR', 'Análise de perfil de links'),
                    ),
                    array(
                        'icon'        => 'chart',
                        'title'       => 'Analytics & BI',
                        'description' => 'Dashboards personalizados com métricas que realmente importam para o seu negócio.',
                        'features'    => array('Google Analytics 4', 'Search Console', 'Relatórios mensais', 'KPIs personalizados'),
                    ),
                    array(
                        'icon'        => 'settings',
                        'title'       => 'SEO Local',
                        'description' => 'Domine as buscas locais e atraia clientes da sua região para seu negócio físico.',
                        'features'    => array('Google Meu Negócio', 'Citações locais', 'Reviews management', 'Maps optimization'),
                    ),
                    array(
                        'icon'        => 'trending-up',
                        'title'       => 'Consultoria SEO',
                        'description' => 'Consultoria especializada para equipes internas que desejam evoluir suas estratégias.',
                        'features'    => array('Treinamentos', 'Análise competitiva', 'Roadmap estratégico', 'Mentoria contínua'),
                    ),
                );

                foreach ($services as $service) :
                ?>
                <div class="service-card">
                    <div class="service-icon">
                        <?php echo seobrain_get_icon($service['icon']); ?>
                    </div>
                    <h3><?php echo esc_html($service['title']); ?></h3>
                    <p><?php echo esc_html($service['description']); ?></p>
                    <ul class="service-features">
                        <?php foreach ($service['features'] as $feature) : ?>
                            <li><?php echo esc_html($feature); ?></li>
                        <?php endforeach; ?>
                    </ul>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Stats Section -->
    <section id="resultados" class="section stats">
        <div class="container">
            <div class="section-header">
                <span class="section-badge">Nossos Resultados</span>
                <h2 class="section-title">Resultados da Nossa Estratégia de SEO</h2>
                <p class="section-description">Números reais de empresas que transformaram sua presença digital com nossa consultoria de otimização para buscadores</p>
            </div>

            <div class="stats-grid">
                <?php
                $stats = array(
                    array('icon' => 'users', 'value' => '150+', 'label' => 'Clientes Atendidos', 'description' => 'Empresas que confiaram na SEO Brain'),
                    array('icon' => 'trending-up', 'value' => '300%', 'label' => 'Aumento Médio de Tráfego', 'description' => 'Crescimento orgânico sustentável'),
                    array('icon' => 'award', 'value' => '1.500+', 'label' => 'Posições Ganhas no Google', 'description' => 'Palavras-chave ranqueadas no top 10'),
                    array('icon' => 'target', 'value' => '98%', 'label' => 'Taxa de Retenção', 'description' => 'Clientes que renovam conosco'),
                );

                foreach ($stats as $stat) :
                ?>
                <div class="stat-card">
                    <div class="stat-icon">
                        <?php echo seobrain_get_icon($stat['icon']); ?>
                    </div>
                    <p class="stat-value"><?php echo esc_html($stat['value']); ?></p>
                    <p class="stat-label"><?php echo esc_html($stat['label']); ?></p>
                    <p class="stat-description"><?php echo esc_html($stat['description']); ?></p>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section id="depoimentos" class="section testimonials">
        <div class="container">
            <div class="section-header">
                <span class="section-badge">Depoimentos</span>
                <h2 class="section-title">O Que Nossos Clientes de Consultoria SEO <span class="text-gradient">Dizem</span></h2>
                <p class="section-description">Histórias reais de empresas que transformaram sua presença digital com nossa agência de otimização</p>
            </div>

            <div class="testimonials-grid">
                <?php
                $testimonials = array(
                    array(
                        'name'    => 'Cinthia Landim',
                        'role'    => 'Proprietária, Aroma Leve',
                        'content' => 'Em 6 meses, nosso tráfego orgânico cresceu 420%. A SEO Brain entende profundamente o algoritmo do Google e entrega resultados consistentes.',
                        'rating'  => 5,
                    ),
                    array(
                        'name'    => 'Carolina Santos',
                        'role'    => 'Diretora de Marketing, E-commerce Plus',
                        'content' => 'A equipe é extremamente técnica e estratégica. Nossas vendas vindas de busca orgânica triplicaram desde que começamos a parceria.',
                        'rating'  => 5,
                    ),
                    array(
                        'name'    => 'Fernando Lima',
                        'role'    => 'Fundador, Clínica Saúde Total',
                        'content' => 'SEO local era um mistério para nós. Agora dominamos as buscas na nossa região e os agendamentos aumentaram 180%.',
                        'rating'  => 5,
                    ),
                );

                foreach ($testimonials as $testimonial) :
                ?>
                <div class="testimonial-card">
                    <svg class="testimonial-quote-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z"/>
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
                    </svg>
                    
                    <div class="testimonial-stars">
                        <?php for ($i = 0; $i < $testimonial['rating']; $i++) : ?>
                            <?php echo seobrain_get_icon('star'); ?>
                        <?php endfor; ?>
                    </div>
                    
                    <p class="testimonial-content">"<?php echo esc_html($testimonial['content']); ?>"</p>
                    
                    <div class="testimonial-author">
                        <div class="testimonial-avatar">
                            <?php echo esc_html(substr($testimonial['name'], 0, 1)); ?>
                        </div>
                        <div>
                            <p class="testimonial-name"><?php echo esc_html($testimonial['name']); ?></p>
                            <p class="testimonial-role"><?php echo esc_html($testimonial['role']); ?></p>
                        </div>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section id="contato" class="section cta">
        <div class="container">
            <div class="cta-content">
                <div class="section-header">
                    <span class="section-badge">Vamos Conversar</span>
                    <h2 class="section-title">Contrate Seu <span class="text-gradient">Especialista em SEO</span></h2>
                    <p class="section-description">Solicite uma análise gratuita do seu site e descubra como nossa Consultoria em SEO pode aumentar seu tráfego orgânico</p>
                </div>

                <?php
                // Show form messages
                if (isset($_GET['contact'])) {
                    if ($_GET['contact'] === 'success') {
                        echo '<div class="form-message success">Mensagem enviada com sucesso! Entraremos em contato em breve.</div>';
                    } elseif ($_GET['contact'] === 'error') {
                        echo '<div class="form-message error">Erro ao enviar mensagem. Por favor, tente novamente.</div>';
                    }
                }
                ?>

                <div class="cta-grid">
                    <form class="contact-form" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" method="POST">
                        <input type="hidden" name="action" value="seobrain_contact">
                        <?php wp_nonce_field('seobrain_contact_form', 'seobrain_contact_nonce'); ?>
                        
                        <div class="form-group">
                            <label class="form-label" for="contact_name">Nome completo</label>
                            <input type="text" id="contact_name" name="contact_name" class="form-input" placeholder="Seu nome" required>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label" for="contact_email">E-mail</label>
                            <input type="email" id="contact_email" name="contact_email" class="form-input" placeholder="seu@email.com" required>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label" for="contact_website">URL do seu site</label>
                            <input type="url" id="contact_website" name="contact_website" class="form-input" placeholder="https://seusite.com.br">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label" for="contact_message">Mensagem</label>
                            <textarea id="contact_message" name="contact_message" class="form-textarea" placeholder="Conte-nos sobre seu projeto..." required></textarea>
                        </div>
                        
                        <button type="submit" class="btn btn-accent" style="width: 100%;">
                            Solicitar Análise Gratuita
                            <?php echo seobrain_get_icon('arrow-right'); ?>
                        </button>
                    </form>

                    <div class="contact-info">
                        <h3>Entre em contato</h3>
                        <p>Estamos prontos para ajudar sua empresa a crescer organicamente. Entre em contato e receba uma análise personalizada.</p>

                        <div class="contact-items">
                            <div class="contact-item">
                                <div class="contact-item-icon">
                                    <?php echo seobrain_get_icon('mail'); ?>
                                </div>
                                <div>
                                    <p class="contact-item-label">E-mail</p>
                                    <p class="contact-item-value"><?php echo esc_html(get_theme_mod('contact_email', 'contato@seobrain.com.br')); ?></p>
                                </div>
                            </div>

                            <div class="contact-item">
                                <div class="contact-item-icon">
                                    <?php echo seobrain_get_icon('phone'); ?>
                                </div>
                                <div>
                                    <p class="contact-item-label">WhatsApp</p>
                                    <p class="contact-item-value"><?php echo esc_html(get_theme_mod('contact_phone', '(11) 99999-9999')); ?></p>
                                </div>
                            </div>

                            <div class="contact-item">
                                <div class="contact-item-icon">
                                    <?php echo seobrain_get_icon('map-pin'); ?>
                                </div>
                                <div>
                                    <p class="contact-item-label">Localização</p>
                                    <p class="contact-item-value"><?php echo esc_html(get_theme_mod('contact_location', 'São Paulo, Brasil')); ?></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
