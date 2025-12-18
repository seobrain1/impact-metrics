/**
 * SEO Brain Theme JavaScript
 *
 * @package SEO_Brain
 */

(function() {
    'use strict';

    // Header scroll effect
    const header = document.getElementById('site-header');
    
    function handleScroll() {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on load

    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    let isMobileMenuOpen = false;

    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            isMobileMenuOpen = !isMobileMenuOpen;
            
            if (isMobileMenuOpen) {
                mainNav.style.display = 'flex';
                mainNav.style.position = 'absolute';
                mainNav.style.top = '100%';
                mainNav.style.left = '0';
                mainNav.style.right = '0';
                mainNav.style.flexDirection = 'column';
                mainNav.style.padding = '1.5rem';
                mainNav.style.background = 'rgba(248, 250, 252, 0.98)';
                mainNav.style.backdropFilter = 'blur(12px)';
                mainNav.style.borderBottom = '1px solid var(--color-border)';
                mainNav.style.boxShadow = 'var(--shadow-lg)';
                
                // Update link colors for mobile menu
                const links = mainNav.querySelectorAll('a');
                links.forEach(link => {
                    link.style.color = 'var(--color-foreground)';
                    link.style.padding = '0.5rem 0';
                });
            } else {
                mainNav.style.display = '';
                mainNav.style.position = '';
                mainNav.style.top = '';
                mainNav.style.left = '';
                mainNav.style.right = '';
                mainNav.style.flexDirection = '';
                mainNav.style.padding = '';
                mainNav.style.background = '';
                mainNav.style.backdropFilter = '';
                mainNav.style.borderBottom = '';
                mainNav.style.boxShadow = '';
                
                const links = mainNav.querySelectorAll('a');
                links.forEach(link => {
                    link.style.color = '';
                    link.style.padding = '';
                });
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                // Close mobile menu if open
                if (isMobileMenuOpen && mobileMenuToggle) {
                    mobileMenuToggle.click();
                }
                
                const headerHeight = header.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for animations
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-up');
                animateOnScroll.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe elements for animation
    document.querySelectorAll('.service-card, .stat-card, .testimonial-card').forEach(el => {
        el.style.opacity = '0';
        animateOnScroll.observe(el);
    });

    // Form validation enhancement
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const submitBtn = this.querySelector('button[type="submit"]');
            submitBtn.innerHTML = 'Enviando...';
            submitBtn.disabled = true;
        });
    }

})();
