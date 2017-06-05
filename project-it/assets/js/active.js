(function ($) {
    "use strict";

    // Document ready 
    jQuery(document).ready(function ($) {

        // Owl Carousel Main Slider
        $('#main_carousel_slider').owlCarousel({
            loop: true,
            margin: 20,
            nav: false,
            items: 4,
            autoplay: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 2
                },
                700: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        })
        // End Owl Carousel

        // Mobile menu
        $('.main_menu > nav').slicknav({
            prependTo: '.responsive_menu_wrap'
        });
        // magnific popup plugin
        $('.popup').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
        // magnific popup plugin end
        // Wow Js
        new WOW().init();
        // End
    });

    // window load 
    jQuery(window).load(function () {


    });

})(jQuery);
