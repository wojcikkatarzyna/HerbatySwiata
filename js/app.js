$(document).ready(function(){

    // mobile menu - hide and show depend on hamburger click
    const mobileMenu = $('.mobileMenu');
    console.log(mobileMenu);
    mobileMenu.on('click', function(event) {
        event.preventDefault();
        $(this).next().slideToggle();
    })


})