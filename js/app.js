$(document).ready(function(){

    // mobile menu - hide and show depend on hamburger click
    const mobileMenu = $('.mobileMenu');
    const nav = $('nav');
    mobileMenu.on('click', function(event) {
        event.preventDefault();
        nav.slideToggle();
    })

    // slider
    const slides = $('.slide');
    let slide = 0;

    function nextSlide() {
      slides.eq(slide).addClass('hideInfo');
      slide--;
      if (slide < 0) {
        slide = slides.length -1;
      };
      slides.eq(slide).removeClass('hideInfo');
    }

    const intervalId = setInterval(function(){
      nextSlide();
    }, 3000);

})
