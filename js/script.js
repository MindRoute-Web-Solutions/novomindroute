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

// Efeito de preenchimento automático dos campos do formulário
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

// ACCORDION DO FOOTER - VERSÃO CORRIGIDA E ESTÁVEL
function initFooterAccordion() {
    // Sair se for desktop
    if (window.innerWidth > 768) {
        // Garantir que esteja no estado normal em desktop
        const footerSections = document.querySelectorAll('.footer-section');
        footerSections.forEach(section => {
            section.classList.remove('active');
            const toggle = section.querySelector('.footer-accordion-toggle');
            const content = section.querySelector('.footer-accordion-content');
            if (toggle) toggle.remove();
            if (content) {
                // Restaurar conteúdo para posição original
                const children = Array.from(content.children);
                children.forEach(child => {
                    section.appendChild(child);
                });
                content.remove();
            }
            // Mostrar título original
            const title = section.querySelector('h3');
            if (title) title.style.display = 'block';
        });
        return;
    }
    
    // MOBILE: Criar accordion
    const footerSections = document.querySelectorAll('.footer-section');
    
    // Limpar accordions existentes
    footerSections.forEach(section => {
        const existingToggle = section.querySelector('.footer-accordion-toggle');
        const existingContent = section.querySelector('.footer-accordion-content');
        
        if (existingToggle) existingToggle.remove();
        if (existingContent) {
            const children = Array.from(existingContent.children);
            children.forEach(child => {
                section.appendChild(child);
            });
            existingContent.remove();
        }
        
        section.classList.remove('active');
    });

    // Criar accordions apenas para seções de conteúdo (não a primeira)
    footerSections.forEach((section, index) => {
        if (index === 0) return; // Pular primeira seção (logo)
        
        const sectionTitle = section.querySelector('h3');
        if (!sectionTitle) return;

        // Criar botão do accordion
        const toggleButton = document.createElement('button');
        toggleButton.type = 'button'; // IMPORTANTE: evitar submit de form
        toggleButton.className = 'footer-accordion-toggle';
        toggleButton.innerHTML = `${sectionTitle.textContent} <i class="fas fa-chevron-down"></i>`;
        
        // Criar container para o conteúdo
        const contentDiv = document.createElement('div');
        contentDiv.className = 'footer-accordion-content';
        
        // Mover conteúdo para o container (exceto o título)
        const children = Array.from(section.children);
        children.forEach(child => {
            if (child !== sectionTitle && !child.classList.contains('footer-accordion-toggle')) {
                contentDiv.appendChild(child.cloneNode(true));
                child.remove(); // Remover original
            }
        });
        
        // Adicionar elementos à seção
        section.appendChild(toggleButton);
        section.appendChild(contentDiv);
        
        // Esconder título original
        sectionTitle.style.display = 'none';
        
        // Event listener MELHORADO
        toggleButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const isActive = section.classList.contains('active');
            
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
}

// CORREÇÃO: Ajustar scroll para não ficar sob o header
function fixMobileScroll() {
    if (window.innerWidth <= 768) {
        const headerHeight = document.getElementById('header').offsetHeight;
        const sections = document.querySelectorAll('.servicos, .portfolio, .importancia, .faq, .sobre, .contato');
        
        sections.forEach(section => {
            section.style.paddingTop = (headerHeight + 50) + 'px';
        });
    } else {
        // Restaurar padding normal para desktop
        const sections = document.querySelectorAll('.servicos, .portfolio, .importancia, .faq, .sobre, .contato');
        sections.forEach(section => {
            section.style.paddingTop = '';
        });
    }
}

// CORREÇÃO PARA DEVTOLS - Observar mudanças no viewport
function handleViewportChange() {
    initFooterAccordion();
    fixMobileScroll();
}

// Observar mudanças no viewport do DevTools
let currentViewport = window.innerWidth;

function checkViewportChange() {
    if (window.innerWidth !== currentViewport) {
        currentViewport = window.innerWidth;
        handleViewportChange();
    }
}

// Event listener seguro para clicks fora do accordion
function handleClickOutsideAccordion(e) {
    if (window.innerWidth <= 768) {
        const footerSections = document.querySelectorAll('.footer-section');
        const isAccordionToggle = e.target.closest('.footer-accordion-toggle');
        const isInsideFooter = e.target.closest('.footer-section');
        
        if (!isAccordionToggle && isInsideFooter) {
            // Clicou dentro do footer mas não no toggle - não fazer nada
            return;
        }
        
        if (!isInsideFooter) {
            // Clicou fora do footer - fechar todos
            footerSections.forEach(section => {
                if (section !== footerSections[0]) {
                    section.classList.remove('active');
                }
            });
        }
    }
}

// Inicializar quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(initFooterAccordion, 100);
        setTimeout(fixMobileScroll, 100);
        setInterval(checkViewportChange, 500);
        document.addEventListener('click', handleClickOutsideAccordion);
        window.addEventListener('resize', handleViewportChange);
    });
} else {
    // DOM já está pronto
    setTimeout(initFooterAccordion, 100);
    setTimeout(fixMobileScroll, 100);
    setInterval(checkViewportChange, 500);
    document.addEventListener('click', handleClickOutsideAccordion);
    window.addEventListener('resize', handleViewportChange);
}