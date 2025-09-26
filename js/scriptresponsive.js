// Ajustes em tempo real para responsividade
function adjustLayout() {
    const windowWidth = window.innerWidth;
    
    if (windowWidth <= 768) {
        document.querySelectorAll('h1').forEach(h1 => {
            if (h1.textContent.length > 30) {
                h1.style.fontSize = '1.6rem';
            }
        });
    } else {
        document.querySelectorAll('h1').forEach(h1 => {
            h1.style.fontSize = '';
        });
    }
    
    if (windowWidth > 768 && windowWidth <= 1024) {
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
    
    if (windowWidth > 1920) {
        const containers = document.querySelectorAll('.container');
        containers.forEach(container => {
            container.style.maxWidth = '1440px';
        });
    }
}

window.addEventListener('load', adjustLayout);
window.addEventListener('resize', adjustLayout);

// Restante do código original mantido...