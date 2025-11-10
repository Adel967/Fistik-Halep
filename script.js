// Carousel animations
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('heroCarousel');
    
    carousel.addEventListener('slide.bs.carousel', function (e) {
        const outgoingSlide = e.relatedTarget;
        const outgoingElements = outgoingSlide.querySelectorAll('[class*="animate-"]');
        outgoingElements.forEach(el => {
            el.style.animation = 'none';
            el.style.opacity = '0';
            void el.offsetWidth;
        });
    });
    
    carousel.addEventListener('slid.bs.carousel', function (e) {
        const incomingSlide = e.relatedTarget;
        const incomingElements = incomingSlide.querySelectorAll('[class*="animate-"]');
        
        incomingElements.forEach(el => {
            const animationType = Array.from(el.classList).find(cls => cls.startsWith('animate-'));
            let delay = 0.3;
            
            switch(animationType) {
                case 'animate-title': delay = 0.3; break;
                case 'animate-subtitle': delay = 0.5; break;
                case 'animate-buttons': delay = 0.7; break;
                case 'animate-image': delay = 0.4; break;
            }
            
            el.style.animation = `slideInUp 0.8s ease-out ${delay}s forwards`;
        });
    });
});

// Navbar scroll effect
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar-glass');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }
    
    // Close mobile menu on link click
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });
});