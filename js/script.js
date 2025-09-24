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
            document.body.style.overflow = 'hidden'; // Impede scroll do body
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
    
    // Simulação de envio (em um caso real, aqui seria uma requisição AJAX)
    setTimeout(() => {
        contactForm.reset();
        contactForm.style.display = 'none';
        formSuccess.style.display = 'block';
        
        // Restaura o formulário após 5 segundos (apenas para demonstração)
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
    
    // Verifica se o campo já tem valor ao carregar a página
    if (input.value) {
        input.parentNode.classList.add('filled');
    }
    
    input.addEventListener('input', () => {
        if (input.value) {
            input.parentNode.classList.add('filled');
        } else {
            input.parentNode.classList.remove('filled');
        }
    });
});

// Header com efeito de scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = 'var(--white)';
        header.style.backdropFilter = 'none';
    }
});

// Botão Voltar ao Topo
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});