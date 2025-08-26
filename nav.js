document.addEventListener('DOMContentLoaded', function() {
    const dropbtn = document.getElementById('dropbtn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-item a')

    //Check for elements
    if (dropbtn && navMenu) {
        dropbtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    //Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
});