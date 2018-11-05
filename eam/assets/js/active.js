(function ($) {
    "use strict";

    // slider carousel  
    $('.welcome_content_slides').owlCarousel({
        loop: true,
        items: 1,
        dots: false,
        autoplay: false,
        autoplayTimeout: 1000,
        autoplaySpeed: 1500,
        nav: true,
        navText: ['<i class="icofont icofont-simple-left"></i>', '<i class="icofont icofont-simple-right"></i>'],
        responsive: {
            0: {
                items: 1,
                nav: false,
                autoplayTimeout: 1500,
                autoplaySpeed: 2000
            },
            575: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1
            }
        }
    });
    // welcome slider animation
    $(".welcome_content_slides").on("translate.owl.carousel", function () {
        $(".single_content_slide_item h2, .single_content_slide_item p").removeClass("animated fadeInUp").css("opacity", "0");
        $(".single_content_slide_item a").removeClass("animated fadeInDown").css("opacity", "0");
    });
    $(".welcome_content_slides").on("translated.owl.carousel", function () {
        $(".single_content_slide_item h2, .single_content_slide_item p").addClass("animated fadeInUp").css("opacity", "1");
        $(".single_content_slide_item a").addClass("animated fadeInDown").css("opacity", "1");
    });

    // project slider carousel
    $('.project_carousel_slides').owlCarousel({
        autoplay: false,
        items: 2,
        loop: true,
        nav: true,
        navText: ['<i class="icofont icofont-simple-left"></i>', '<i class="icofont icofont-simple-right"></i>'],
        dots: false,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 2
            }
        }

    });
    // single client carousel
    $('.single_client_carousel').owlCarousel({
        autoplay: true,
        autoplaySpeed: 2000,
        autoplayTimeout: 1500,
        items: 2,
        loop: true,
        nav: false,
        dots: false,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 1,
                nav: false,
            },
            1000: {
                items: 2,
                nav: false,
            }
        }

    });

    // company logo carousel
    $('.company_carousel_slides').owlCarousel({
        autoplay: true,
        autoplaySpeed: 2000,
        autoplayTimeout: 1500,
        items: 4,
        loop: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            480: {
                items: 2,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            800: {
                items: 4,
                nav: false
            },
            1000: {
                items: 4
            }
        }
    });

    // counter js
    $('.number').counterUp({
        time: 2500,
        delay: 10
    });

    // isotope filter js
    $(".project_title li").on('click', function () {

        $(".project_title li").removeClass("active");
        $(this).addClass("active");

        var selector = $(this).attr('data-filter');
        $(".project_items").isotope({
            filter: selector,
            transitionDuration: '0.6s'
        });


    });


    // mobile menu activation
    $('.mainmenu > ul').slicknav({
        prependTo: '.responsive_mobile_menu',
        label: ""

    });



    // window load 
    jQuery(window).load(function () {
        // isotope js
        $(".project_items").isotope();
        $('.page-loader').delay(350).fadeOut('slow');



    });









})(jQuery);
