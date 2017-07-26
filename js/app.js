$(document).ready(function(){

    // mobile menu - hide and show depend on hamburger click
    const mobileMenu = $('.mobileMenu');
    const nav = $('nav');
    mobileMenu.on('click', function(event) {
        event.preventDefault();
        nav.slideToggle();
    })

    // navigation with header distance
    const links = $('a');
    links.on('click',function(event){
      event.preventDefault();
      console.log(this);
      $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top-200
        }, 500);
    });

    // slider (animation instead)
    // const slides = $('.slide');
    // let slide = 0;
    //
    // function nextSlide() {
    //   slides.eq(slide).addClass('hideInfo');
    //   slide--;
    //   if (slide < 0) {
    //     slide = slides.length -1;
    //   };
    //   slides.eq(slide).removeClass('hideInfo');
    // }

    // const intervalId = setInterval(function(){
    //   nextSlide();
    // }, 3000);

})
