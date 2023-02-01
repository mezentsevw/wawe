$(function () {

   $(".menu a").on("click",  function (e) {
              e.preventDefault();
              var id  = $(this).attr('href'),
                  top = $(id).offset().top;
              $('body,html').animate({scrollTop: top}, 1500);
          });
      

   $('.slider__blog-input').slick({
      dots: true,
      prevArrow: false,
      nextArrow: false
   });

   $('.menu__btn').on('click', function () {
      $('.menu__list').toggleClass('menu__list--active');
   });

   var mixer = mixitup('.gellery__images');

});