// navbar.js
document.addEventListener("DOMContentLoaded", function() {
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentLocation) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});
