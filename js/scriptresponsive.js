// Ajustes em tempo real para responsividade
function adjustLayout() {
    const windowWidth = window.innerWidth;
    
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

// Otimização de imagens para diferentes densidades de pixel
function optimizeImages() {
    const images = document.querySelectorAll('img');
    const dpr = window.devicePixelRatio || 1;
    
    images.forEach(img => {
        const src = img.getAttribute('src');
        if (src && dpr > 1 && !src.includes('@2x') && !src.includes('@3x')) {
            img.classList.add('high-dpi');
        }
    });
}

window.addEventListener('load', optimizeImages);