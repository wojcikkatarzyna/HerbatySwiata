$(document).ready(function(){

    // mobile menu - hide and show depend on hamburger click
    const mobileMenu = $('.mobileMenu');
    const nav = $('nav');
    mobileMenu.on('click', function(event) {
        event.preventDefault();
        nav.slideToggle();
    })

    // slider
    const prev = $('.fa-chevron-left');
    const next = $('.fa-chevron-right');
    const spans = $('#gallery span');
    let slide = 0;

    prev.on('click', function(event){
        event.preventDefault();
        spans.eq(slide).addClass('hideInfo');
        slide++;
        if (slide >spans.length -1) {
          slide = 0;
        };
        spans.eq(slide).removeClass('hideInfo');
    })

    function nextSlide() {
      spans.eq(slide).addClass('hideInfo');
      slide--;
      if (slide < 0) {
        slide = spans.length -1;
      };
      spans.eq(slide).removeClass('hideInfo');
    }

    next.on('click', function(event){
        event.preventDefault();
        nextSlide();
    })

    const intervalId = setInterval(function(){
      nextSlide();
    }, 3000);

})
