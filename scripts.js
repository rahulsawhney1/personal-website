const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Get a reference to the navigation bar element
const navBar = document.querySelector('nav');

// Listen for the scroll event
window.addEventListener('scroll', () => {
    // Calculate the scroll position
    const scrollY = window.scrollY;

    // If the user has scrolled down, add the class to hide the navigation bar; otherwise, remove the class
    if (scrollY > 0) {
        navBar.classList.add('hide-navbar');
    } else {
        navBar.classList.remove('hide-navbar');
    }
});

particlesJS("title-content", {
    particles: {
        number: {
            value: 500, // Number of particles
        },
        color: {
            value: "#2ecc71", // Particle color
        },
        // More configuration options...
    },
});
