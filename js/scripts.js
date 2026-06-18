/*!
* Start Bootstrap - New Age v6.0.7 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            responsiveNavItem.classList.add('is-marked');
            window.setTimeout(() => responsiveNavItem.classList.remove('is-marked'), 700);
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    const featureIcons = document.querySelectorAll('.interactive-feature-icon');
    featureIcons.forEach((featureIcon) => {
        const markIcon = () => {
            featureIcon.classList.remove('is-marked');
            window.requestAnimationFrame(() => featureIcon.classList.add('is-marked'));
            window.setTimeout(() => featureIcon.classList.remove('is-marked'), 800);
        };

        featureIcon.addEventListener('click', markIcon);
        featureIcon.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                markIcon();
            }
        });
    });

});
