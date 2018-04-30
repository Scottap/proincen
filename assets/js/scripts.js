$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        navContainer: '.nav-owl',
        loop: true
    });
});

(function() {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('#'+burger.dataset.target);
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
})();

$("html").easeScroll();

var $root = $('html, body');

$('a[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);

    return false;
});