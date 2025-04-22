// Add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
window.onscroll = function () {
    const top = window.scrollY;
    if (top >= 100) {
        header.classList.add('navbarDark');
    } else {
        header.classList.remove('navbarDark');
    }
};

// Collapse navbar after clicking on small devices
const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('navbarSupportedContent');

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check local storage for dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
}

// Toggle dark mode on button click
darkModeToggle.addEventListener('click', function () {
    body.classList.toggle('dark-mode');

    // Save preference in localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});
