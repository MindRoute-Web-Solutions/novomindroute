// Ajustes em tempo real para responsividade
function adjustLayout() {
    const windowWidth = window.innerWidth;
    const heroContent = document.querySelector('.hero-content');
    
    // Ajustes para telas menores
    if (windowWidth <= 768) {
        // Ajustar tamanho de fontes para melhor legibilidade
        document.querySelectorAll('h1').forEach(h1 => {
            if (h1.textContent.length > 30) {
                h1.style.fontSize = '1.6rem';
            }
        });
    } else {
        // Restaurar valores padrão para telas maiores
        document.querySelectorAll('h1').forEach(h1 => {
            h1.style.fontSize = '';
        });
    }
    
    // Ajustes específicos para tablets
    if (windowWidth > 768 && windowWidth <= 1024) {
        // Ajustar grid de serviços para 2 colunas
        const servicosGrid = document.querySelector('.servicos-grid');
        if (servicosGrid) {
            servicosGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
        }
    } else {
        const servicosGrid = document.querySelector('.servicos-grid');
        if (servicosGrid) {
            servicosGrid.style.gridTemplateColumns = '';
        }
    }
    
    // Ajustes para telas muito grandes
    if (windowWidth > 1920) {
        // Limitar largura máxima do conteúdo
        const containers = document.querySelectorAll('.container');
        containers.forEach(container => {
            container.style.maxWidth = '1440px';
        });
    }
}

// Executar ao carregar e redimensionar
window.addEventListener('load', adjustLayout);
window.addEventListener('resize', adjustLayout);

// Otimização para dispositivos móveis - prevenir zoom em inputs
document.addEventListener('DOMContentLoaded', function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // Ajustar viewport para mobile
        const viewport = document.querySelector('meta[name="viewport"]');
        if (viewport) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
        }
        
        // Prevenir zoom em inputs (problema comum no iOS)
        const inputs = document.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                window.scrollTo(0, 0);
                document.body.scrollTop = 0;
            });
        });
    }
});

// Melhorar performance em scroll para mobile
let scrollTimeout;
window.addEventListener('scroll', function() {
    // Limpar timeout existente
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    
    // Adicionar classe durante o scroll
    document.body.classList.add('scrolling');
    
    // Remover classe após parar de scrollar
    scrollTimeout = setTimeout(function() {
        document.body.classList.remove('scrolling');
    }, 100);
});

// Ajustar altura de elementos com base na viewport
function adjustHeights() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    // Ajustar altura da seção hero para ocupar a tela inteira
    const hero = document.querySelector('.hero');
    if (hero) {
        const headerHeight = document.getElementById('header').offsetHeight;
        hero.style.minHeight = `calc(100vh - ${headerHeight}px)`;
    }
}

window.addEventListener('load', adjustHeights);
window.addEventListener('resize', adjustHeights);

// Otimização de imagens para diferentes densidades de pixel
function optimizeImages() {
    const images = document.querySelectorAll('img');
    const dpr = window.devicePixelRatio || 1;
    
    images.forEach(img => {
        const src = img.getAttribute('src');
        if (src && dpr > 1 && !src.includes('@2x') && !src.includes('@3x')) {
            // Em um cenário real, aqui carregaríamos imagens de alta resolução
            // Para este exemplo, apenas adicionamos uma classe para estilização
            img.classList.add('high-dpi');
        }
    });
}

window.addEventListener('load', optimizeImages);

// Accordion para footer em mobile
function initFooterAccordion() {
    const accordionSections = document.querySelectorAll('.accordion-section');
    const windowWidth = window.innerWidth;
    
    if (windowWidth <= 768) {
        accordionSections.forEach((section, index) => {
            // Pular a primeira seção (logo)
            if (index === 0) return;
            
            const toggle = section.querySelector('.accordion-toggle');
            const content = section.querySelector('.accordion-content');
            
            // Fechar todos os accordions inicialmente
            section.classList.remove('active');
            content.style.maxHeight = '0';
            
            toggle.addEventListener('click', () => {
                // Fechar todos os outros accordions
                accordionSections.forEach(otherSection => {
                    if (otherSection !== section && otherSection !== accordionSections[0]) {
                        otherSection.classList.remove('active');
                        otherSection.querySelector('.accordion-content').style.maxHeight = '0';
                    }
                });
                
                // Abrir/fechar o accordion clicado
                const isActive = section.classList.contains('active');
                
                if (isActive) {
                    section.classList.remove('active');
                    content.style.maxHeight = '0';
                } else {
                    section.classList.add('active');
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            });
        });
    } else {
        // Em desktop, garantir que tudo esteja visível
        accordionSections.forEach(section => {
            section.classList.add('active');
            const content = section.querySelector('.accordion-content');
            if (content) {
                content.style.maxHeight = 'none';
            }
        });
    }
}

// Inicializar accordion do footer
window.addEventListener('load', initFooterAccordion);
window.addEventListener('resize', initFooterAccordion);