class TestimonialSlider {
    constructor() {
        this.testimonials = [
            {
                text: "SlideGenius transformed our pitch deck into a compelling story that helped us secure our Series A funding.",
                name: "Sarah Chen",
                role: "CEO",
                company: "Logitech",
                image: "../images/testimonials/sarah.jpg"
            },
            {
                text: "The team's attention to detail and creative approach helped us stand out at our annual conference.",
                name: "Michael Rodriguez",
                role: "Marketing Director",
                company: "Duolingo",
                image: "../images/testimonials/michael.jpg"
            },
            {
                text: "Working with SlideGenius has elevated our presentation game to a whole new level.",
                name: "Emily Watson",
                role: "Product Manager",
                company: "Spotify",
                image: "../images/testimonials/emily.jpg"
            }
        ];
        
        this.currentSlide = 0;
        this.init();
    }

    init() {
        this.container = document.querySelector('.testimonial-slider');
        this.render();
        this.startAutoPlay();
    }

    render() {
        const testimonial = this.testimonials[this.currentSlide];
        this.container.innerHTML = `
            <div class="testimonial-card fade-in">
                <div class="testimonial-content">
                    <blockquote>${testimonial.text}</blockquote>
                    <div class="client-info">
                        <div class="client-image">
                            <img src="${testimonial.image}" alt="${testimonial.name}">
                        </div>
                        <div class="client-details">
                            <h4>${testimonial.name}</h4>
                            <p>${testimonial.role}, ${testimonial.company}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
        this.render();
    }

    startAutoPlay() {
        setInterval(() => this.nextSlide(), 5000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new TestimonialSlider();
}); 