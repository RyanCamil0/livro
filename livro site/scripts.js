// Função para animar o aparecimento das seções ao rolar a página
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const options = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Efeito de transição suave no menu de navegação
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.1)';
        link.style.transition = 'transform 0.2s ease-in-out';
    });

    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
    });
});
