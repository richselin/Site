const menuToggle = document.querySelector('.menu-mobile-hamburger');
const menuClose = document.querySelector('.menu-close');
const navLinks = document.querySelector('.nav-links');
const navLinksAnchors = document.querySelectorAll('.nav-links a');


// Centralized function to set the state
const setMenuState = (isOpen) => {
    // 1. Toggle the CSS class
    navLinks.classList.toggle('is-active', isOpen);

    // 2. Sync ARIA attributes
    menuToggle.setAttribute('aria-expanded', isOpen);
};

// Open/close toggle
menuToggle.addEventListener('click', () => {
    const isCurrentlyOpen = navLinks.classList.contains('is-active');
    setMenuState(!isCurrentlyOpen);
});

// Close functionality
menuClose.addEventListener('click', () => setMenuState(false));

navLinksAnchors.forEach(link => {
    link.addEventListener('click', () => setMenuState(false));
});

// Add sentinel to show header border-bottom when user starts scrolling
const header = document.querySelector("header");
const sentinel = document.createElement("div");

sentinel.className = "scroll-sentinel";
header.insertAdjacentElement("afterend", sentinel);

const observer = new IntersectionObserver((entries) => {
    //If the sentinel is NOT visible, user is scrolling down
    header.classList.toggle("is-scrolled", !entries[0].isIntersecting);
}, {
    threshold: [0]
});

observer.observe(sentinel);

