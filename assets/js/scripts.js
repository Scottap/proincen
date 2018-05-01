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

(function() {
    var burgerOne = document.querySelector('.burger-one');
    var menu = document.querySelector('#'+burgerOne.dataset.target);
    burgerOne.addEventListener('click', function() {
        burgerOne.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
})();

(function() {
    var burgerTwo = document.querySelector('.burger-two');
    var menu = document.querySelector('#'+burgerTwo.dataset.target);
    burgerTwo.addEventListener('click', function() {
        burgerTwo.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
})();

(function() {
    var burgerThree = document.querySelector('.burger-three');
    var menu = document.querySelector('#'+burgerThree.dataset.target);
    burgerThree.addEventListener('click', function() {
        burgerThree.classList.toggle('is-active');
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