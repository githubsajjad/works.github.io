(function ($) {
    "use strict";

    /*====  sticky menu js active =====*/
    $('.header_area').sticky({
        stopSpacing: 0
    });


    // slider carousel  
    $('.screenshot_slides').owlCarousel({
        loop: true,
        items: 5,
        margin: 40,
        dots: false,
        autoplay: false,
        autoplayTimeout: 2500,
        autoplaySpeed: 2000,
        nav: false,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            992: {
                items: 5
            }
        }
    });

    /*=============================
                Smoothscroll js
        ==============================*/
    $(function () {
        $('a.smooth-scroll').on('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1000);
            event.preventDefault();
        });
    })

    // counter up
    $(".number2").counterUp({
        delay: 10,
        time: 2500
    });

    // window load 
    jQuery(window).load(function () {


    });

    // SlickNav Mobile Menu
    $('#menu').slicknav({
        prependTo: '.responsive_mobile_menu',
        label: '',
        closeOnClick: true
    });









})(jQuery);
