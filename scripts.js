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

// Get all work entry elements
const workEntries = document.querySelectorAll('.work-entry');

// Define options for the Intersection Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2 // Adjust the threshold as needed
};

// Callback function to handle the intersection
function handleIntersection(entries, observer) {
    console.log("Observer callback triggered!");
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log("Entry is intersecting!");
            entry.target.classList.add('appear');
            observer.unobserve(entry.target); // Stop observing after appearance
        }
    });
}

// Create an Intersection Observer instance
const entryObserver = new IntersectionObserver(handleIntersection, observerOptions);

// Observe each work entry element
workEntries.forEach(entry => {
    entryObserver.observe(entry);
});


