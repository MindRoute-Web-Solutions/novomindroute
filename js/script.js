// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.getElementById('header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Fechar menu mobile após clicar em um link
            const navMenu = document.querySelector('.nav-menu');
            const hamburger = document.querySelector('.hamburger');
            
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    });
});

// Toggle do menu mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar fora dele
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Modal do portfólio
const portfolioItems = document.querySelectorAll('.portfolio-item');
const modal = document.getElementById('portfolio-modal');
const closeModal = document.querySelector('.close-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');

// Dados dos projetos (simulados)
const portfolioData = {
    1: {
        title: 'Site Institucional - Empresa X',
        description: 'Desenvolvimento de um site institucional moderno e responsivo para a Empresa X, com foco na apresentação de seus serviços e fortalecimento da marca no mercado digital.',
        image: 'images/portfolio-1.jpg'
    },
    2: {
        title: 'Landing Page - Produto Y',
        description: 'Criação de uma landing page otimizada para conversão do Produto Y, com design persuasivo e call-to-actions estratégicos que resultaram em aumento significativo de leads.',
        image: 'images/portfolio-2.jpg'
    },
    3: {
        title: 'Blog - Especialista A',
        description: 'Criação de um blog profissional para o Especialista A, com design clean, focado na experiência de leitura e otimizado para mecanismos de busca.',
        image: 'images/portfolio-3.jpg'
    },
    4: {
        title: 'Portfólio - Designer B',
        description: 'Desenvolvimento de um portfólio online para o Designer B, destacando seus projetos e habilidades de forma elegante e profissional.',
        image: 'images/portfolio-4.jpg'
    }
};

portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        const projectId = item.getAttribute('data-id');
        const project = portfolioData[projectId];
        
        if (project) {
            modalImg.src = project.image;
            modalImg.alt = project.title;
            modalTitle.textContent = project.title;
            modalDescription.textContent = project.description;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

// Fechar modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// FAQ acordeão
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Fecha todas as outras FAQs
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Abre/Fecha a FAQ clicada
        item.classList.toggle('active');
    });
});

// Formulário de contato
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulação de envio
    setTimeout(() => {
        contactForm.reset();
        
        // Remover classes filled dos campos
        document.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('filled');
        });
        document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(field => {
            field.classList.remove('filled');
        });
        
        contactForm.style.display = 'none';
        formSuccess.style.display = 'block';
        
        setTimeout(() => {
            formSuccess.style.display = 'none';
            contactForm.style.display = 'block';
        }, 5000);
    }, 1000);
});

// Efeito de preenchimento automático dos campos do formulário - CORRIGIDO
const formGroups = document.querySelectorAll('.form-group');

formGroups.forEach(group => {
    const input = group.querySelector('input, select, textarea');
    
    if (input) {
        // Verifica se o campo já tem valor ao carregar a página
        if (input.value) {
            group.classList.add('filled');
            input.classList.add('filled');
        }
        
        input.addEventListener('input', () => {
            if (input.value) {
                group.classList.add('filled');
                input.classList.add('filled');
            } else {
                group.classList.remove('filled');
                input.classList.remove('filled');
            }
        });
        
        // Para select, verificar mudanças também
        if (input.tagName === 'SELECT') {
            input.addEventListener('change', () => {
                if (input.value) {
                    group.classList.add('filled');
                    input.classList.add('filled');
                } else {
                    group.classList.remove('filled');
                    input.classList.remove('filled');
                }
            });
        }
    }
});

// Header com efeito de scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = 'var(--white)';
            header.style.backdropFilter = 'none';
        }
    }
});

// Botão Voltar ao Topo
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (backToTopButton) {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    }
});

if (backToTopButton) {
    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// CORREÇÃO DEFINITIVA: Problema do select no formulário
document.addEventListener('DOMContentLoaded', function() {
    const selectElement = document.getElementById('servico');
    
    if (selectElement) {
        // Marcar como preenchido se já tiver valor
        if (selectElement.value) {
            selectElement.parentElement.classList.add('filled');
            selectElement.classList.add('filled');
        }
        
        selectElement.addEventListener('focus', function() {
            this.parentElement.classList.add('select-focused');
        });
        
        selectElement.addEventListener('blur', function() {
            this.parentElement.classList.remove('select-focused');
        });
        
        selectElement.addEventListener('change', function() {
            if (this.value) {
                this.parentElement.classList.add('filled');
                this.classList.add('filled');
            } else {
                this.parentElement.classList.remove('filled');
                this.classList.remove('filled');
            }
        });
    }
});

// ACCORDION DO FOOTER PARA MOBILE - CORRIGIDO
function initFooterAccordion() {
    const footerSections = document.querySelectorAll('.footer-section');
    const isMobile = window.innerWidth <= 768;
    
    // Limpar accordions existentes para evitar duplicação
    footerSections.forEach(section => {
        const existingToggle = section.querySelector('.footer-accordion-toggle');
        const existingContent = section.querySelector('.footer-accordion-content');
        
        if (existingToggle) existingToggle.remove();
        if (existingContent) existingContent.remove();
        
        section.classList.remove('active');
    });
    
    if (isMobile) {
        // MOBILE: Criar accordion apenas para as seções de conteúdo
        footerSections.forEach((section, index) => {
            // Pular a primeira seção (logo)
            if (index === 0) return;
            
            const sectionTitle = section.querySelector('h3');
            if (!sectionTitle) return;
            
            // Criar botão do accordion
            const toggleButton = document.createElement('button');
            toggleButton.className = 'footer-accordion-toggle';
            toggleButton.innerHTML = `${sectionTitle.textContent} <i class="fas fa-chevron-down"></i>`;
            
            // Criar container para o conteúdo
            const contentDiv = document.createElement('div');
            contentDiv.className = 'footer-accordion-content';
            
            // Mover todo o conteúdo (exceto o título) para o container
            const children = Array.from(section.children);
            children.forEach(child => {
                if (child !== sectionTitle) {
                    contentDiv.appendChild(child);
                }
            });
            
            // Adicionar elementos à seção
            section.appendChild(toggleButton);
            section.appendChild(contentDiv);
            
            // Esconder título original
            sectionTitle.style.display = 'none';
            
            // Event listener simples e eficaz
            toggleButton.addEventListener('click', function(e) {
                e.stopPropagation();
                
                // Fechar todos os outros accordions
                footerSections.forEach(otherSection => {
                    if (otherSection !== section && otherSection !== footerSections[0]) {
                        otherSection.classList.remove('active');
                    }
                });
                
                // Alternar o accordion clicado
                section.classList.toggle('active');
            });
        });
    } else {
        // DESKTOP: Garantir que esteja no estado normal
        footerSections.forEach(section => {
            const sectionTitle = section.querySelector('h3');
            if (sectionTitle) {
                sectionTitle.style.display = 'block';
            }
            section.classList.remove('active');
        });
    }
}

// Fechar accordions ao clicar fora
document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
        const footerSections = document.querySelectorAll('.footer-section');
        if (!e.target.closest('.footer-section')) {
            footerSections.forEach(section => {
                if (section !== footerSections[0]) {
                    section.classList.remove('active');
                }
            });
        }
    }
});

// CORREÇÃO: Ajustar scroll para não ficar sob o header
function fixMobileScroll() {
    if (window.innerWidth <= 768) {
        const headerHeight = document.getElementById('header').offsetHeight;
        const sections = document.querySelectorAll('.servicos, .portfolio, .importancia, .faq, .sobre, .contato');
        
        sections.forEach(section => {
            section.style.paddingTop = (headerHeight + 50) + 'px';
        });
    }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    initFooterAccordion();
    fixMobileScroll();
    
    // Garantir que o select funcione perfeitamente
    const selectElement = document.getElementById('servico');
    if (selectElement) {
        selectElement.style.pointerEvents = 'auto';
        selectElement.style.zIndex = '1000';
    }
});

// Re-inicializar ao redimensionar
window.addEventListener('resize', function() {
    initFooterAccordion();
    fixMobileScroll();
});