// Client logos data
const clients = [
    'Logitech', 'MetLife', 'NASCAR', 'Pacific Life', 'Duolingo',
    'Intel', 'Autodesk', 'NVIDIA', 'Pluralsight', 'Spotify',
    'Starbucks', 'Adidas', 'Air', 'Deloitte', 'Delta',
    'Discovery'
];

// Load client logos
function loadClientLogos() {
    const clientLogosContainer = document.querySelector('.client-logos');
    clients.forEach(client => {
        const logo = document.createElement('div');
        logo.className = 'client-logo';
        logo.innerHTML = `<img src="images/logos/${client.toLowerCase()}.png" alt="${client} logo">`;
        clientLogosContainer.appendChild(logo);
    });
}

// Testimonials data
const testimonials = [
    {
        name: 'John Smith',
        company: 'Logitech',
        text: 'SlideGenius transformed our presentation strategy completely. The results were outstanding.'
    },
    // Add more testimonials
];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadClientLogos();
    initializeTestimonialCarousel();
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 