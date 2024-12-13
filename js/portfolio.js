const portfolioItems = [
    {
        id: 1,
        category: 'presentations',
        title: 'Corporate Annual Report',
        client: 'Logitech',
        image: '../images/portfolio/presentation-1.jpg'
    },
    // Add more portfolio items
];

function filterPortfolio(category) {
    const items = category === 'all' 
        ? portfolioItems 
        : portfolioItems.filter(item => item.category === category);
    
    renderPortfolioItems(items);
}

function renderPortfolioItems(items) {
    const grid = document.querySelector('.portfolio-grid');
    grid.innerHTML = items.map(item => `
        <div class="portfolio-item">
            <img src="${item.image}" alt="${item.title}">
            <div class="portfolio-item-overlay">
                <h3>${item.title}</h3>
                <p>${item.client}</p>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize portfolio
    filterPortfolio('all');

    // Add click handlers to filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelector('.filter-btn.active').classList.remove('active');
            e.target.classList.add('active');
            filterPortfolio(e.target.dataset.filter);
        });
    });
}); 