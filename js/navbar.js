document.addEventListener('DOMContentLoaded', function () {
    const navbarLinks = document.getElementById('navbar-links');
    const hamburger = document.getElementById('hamburger');

    hamburger.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevents the click event from propagating to the document
        navbarLinks.classList.toggle('show');
    });

    document.addEventListener('click', function (event) {
        const isClickInsideNavbar = navbarLinks.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);

        // If the click is outside the navbarLinks and hamburger, close the menu
        if (!isClickInsideNavbar && !isClickOnHamburger) {
            navbarLinks.classList.remove('show');
        }
    });
});
// -------------animation
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navbarLinks = document.getElementById('navbar-links');

    function toggleNavbar() {
        navbarLinks.classList.toggle('open');
        if (navbarLinks.classList.contains('open')) {
            navbarLinks.style.animation = 'slideIn 0.5s ease-in-out';
        } else {
            navbarLinks.style.animation = 'slideOut 0.5s ease-in-out';
        }
    }

    hamburger.addEventListener('click', toggleNavbar);

    document.addEventListener('click', function (event) {
        const isClickInsideNavbar = navbarLinks.contains(event.target) || hamburger.contains(event.target);
        if (!isClickInsideNavbar && navbarLinks.classList.contains('open')) {
            toggleNavbar();
        }
    });

    // Listen for the end of the animation and remove the animation styles
    navbarLinks.addEventListener('animationend', function () {
        navbarLinks.style.animation = '';
    });
});




// --------------------------- active link -----------------------------------
document.addEventListener('DOMContentLoaded', function () {
    var currentPath = window.location.pathname;
    var links = document.querySelectorAll('.navbar-links a');

    links.forEach(function (link) {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active-link');
        }
    });
});




// -------------------------------- to get the current year------------------------
// to get the current year
document.addEventListener('DOMContentLoaded', function() {
    var currentYear = new Date().getFullYear();
    document.getElementById('currentYear').innerText = currentYear;
});
