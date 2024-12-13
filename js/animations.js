document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all elements with animation classes
    document.querySelectorAll('.slide-in, .fade-in').forEach(el => {
        observer.observe(el);
    });

    // Dynamic background elements
    function createBackgroundElements() {
        const container = document.querySelector('.animated-bg');
        if (!container) return;

        for (let i = 0; i < 5; i++) {
            const element = document.createElement('div');
            element.className = 'slide-element';
            element.style.left = `${Math.random() * 100}%`;
            element.style.width = `${200 + Math.random() * 200}px`;
            element.style.height = element.style.width;
            element.style.animationDelay = `-${Math.random() * 15}s`;
            container.appendChild(element);
        }
    }

    createBackgroundElements();
}); 