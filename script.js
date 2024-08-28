// script.js

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Apply the fade-in class when elements scroll into view
function addFadeInOnScroll() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    
    fadeInElements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('visible'); // Add class to trigger the animation
        }
    });
}

window.addEventListener('scroll', addFadeInOnScroll);

// Trigger the function to ensure elements that are already in view are animated
document.addEventListener('DOMContentLoaded', addFadeInOnScroll);

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
