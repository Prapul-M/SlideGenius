class PortfolioManager {
    constructor() {
        this.portfolioItems = [
            {
                id: 1,
                title: "Corporate Annual Report",
                client: "Fortune 500 Company",
                category: "presentations",
                image: "https://picsum.photos/600/400?random=1",
                description: "A comprehensive annual report design."
            },
            {
                id: 2,
                title: "Pitch Deck Design",
                client: "Tech Startup",
                category: "pitch-decks",
                image: "https://picsum.photos/600/400?random=2",
                description: "Investor pitch deck design."
            },
            {
                id: 3,
                title: "Product Launch",
                client: "Consumer Brand",
                category: "presentations",
                image: "https://picsum.photos/600/400?random=3",
                description: "Product launch presentation."
            }
            // Add more items as needed
        ];
        
        this.init();
    }

    init() {
        this.renderPortfolio('all');
        this.setupFilters();
    }

    renderPortfolio(filter) {
        const grid = document.querySelector('.portfolio-grid');
        const items = filter === 'all' 
            ? this.portfolioItems 
            : this.portfolioItems.filter(item => item.category === filter);

        grid.innerHTML = items.map(item => this.createPortfolioItem(item)).join('');
    }

    createPortfolioItem(item) {
        return `
            <div class="portfolio-item fade-in" data-category="${item.category}">
                <img src="${item.image}" alt="${item.title}">
                <div class="portfolio-overlay">
                    <h3>${item.title}</h3>
                    <p>${item.client}</p>
                    <span class="view-project">View Project →</span>
                </div>
            </div>
        `;
    }

    setupFilters() {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelector('.filter-btn.active').classList.remove('active');
                e.target.classList.add('active');
                this.renderPortfolio(e.target.dataset.filter);
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new PortfolioManager();
}); 