document.addEventListener('DOMContentLoaded', function() {
    var nav = document.getElementById('mainNav');
    var toggler = document.querySelector('.navbar-toggler');

    toggler.addEventListener('click', function() {
        if (nav.classList.contains('show')) {
            nav.style.maxHeight = '0px';
        } else {
            nav.style.maxHeight = nav.scrollHeight + 'px';
        }
    });

    nav.addEventListener('transitionend', function() {
        if (!nav.classList.contains('show')) {
            nav.style.maxHeight = null;
        }
    });
});