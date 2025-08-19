// Mobile menu toggle
document.getElementById('menuButton').addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobileMenu').classList.add('hidden');
    });
});

// Gallery images loader
const galleryContainer = document.querySelector('#gallery .grid');
const imageCount = 6;

// Load gallery images
for (let i = 1; i <= imageCount; i++) {
    const figure = document.createElement('figure');
    figure.className = 'gallery__item overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105';
    
    const img = document.createElement('img');
    img.src = `assets/images/image_${i}.jpeg`;
    img.alt = `Artwork ${i}`;
    img.className = 'w-full h-64 object-cover';
    img.loading = 'lazy'; // Enable lazy loading for better performance
    
    figure.appendChild(img);
    galleryContainer.appendChild(figure);
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
