document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById('hamburger');
    const navRight = document.getElementById('navRight');

    hamburger.addEventListener('click', function() {
        navRight.classList.toggle('show');
    });
});