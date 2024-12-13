const clients = [
    {
        name: 'Logitech',
        logo: '../images/logos/logitech.svg'
    },
    {
        name: 'Spotify',
        logo: '../images/logos/spotify.svg'
    },
    // Add all other clients...
];

function renderClientLogos() {
    const container = document.querySelector('.client-logos');
    clients.forEach(client => {
        const logoDiv = document.createElement('div');
        logoDiv.className = 'client-logo fade-in';
        logoDiv.innerHTML = `<img src="${client.logo}" alt="${client.name} logo">`;
        container.appendChild(logoDiv);
    });
}

document.addEventListener('DOMContentLoaded', renderClientLogos); 