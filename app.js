const navbar = document.querySelector('.navbar');

function changeNavbarBackground() {
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(48, 74, 45, 0.9)';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
}


window.addEventListener('scroll', changeNavbarBackground);


changeNavbarBackground();
