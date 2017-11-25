    // document ready 
    jQuery(document).ready(function($){
    $('#home-page-slides').owlCarousel({
		nav: false,
		items: 1,
		loop: true,
		center: true,
		margin: 0,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplaySpeed: 1000,
		dots: false,
//        navText: ["<i class='zmdi zmdi-long-arrow-left'></i>","<i class='zmdi zmdi-long-arrow-right'></i>"],
	});
        // Main Slide Animation
             $("#home-page-slides").on("translate.owl.carousel", function(){
                $(".single-slide-item h2").removeClass("animated fadeInUp").css("opacity", "0");
                $(".single-slide-item a").removeClass("animated fadeInDown").css("opacity", "0");
            });

            $("#home-page-slides").on("translated.owl.carousel", function(){
                $(".single-slide-item h2").addClass("animated fadeInUp").css("opacity", "1");
                $(".single-slide-item a").addClass("animated fadeInDown").css("opacity", "1");
            });
        // Main Slide Animation end
    $('.attorneys-carousel').owlCarousel({
		nav: false,
		items: 4,
		loop: true,
        responsive: {
            320 : {
                items: 1
            },
            768 : {
                items: 2
            },
            992 : {
                items: 3
            },
            1199 : {
                items: 3
            }
        },
		margin: 30,
		dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 1000,
	});
    $('.testimonial-carousel').owlCarousel({
		nav: false,
		items: 1,
		loop: true,
		margin:30,
		dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 1000,
	});
    $('.clients-carousel').owlCarousel({
		nav: true,
		items: 4,
		loop: true,
        responsive: {
            320 : {
                items: 1
            },
            768 : {
                items: 3
            },
            992 : {
                items: 3
            },
            1199 : {
                items: 3
            },
            1200 : {
                items: 4
            }
        },
		margin: 30,
		dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        autoplayTimeout: 2000,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
	});
        // counter up
        $(".counter").counterUp({
            delay: 10,
            time: 2500
        });
        // mobile menu
        $("#lawyer-menu").slicknav({
            prependTo: '#mobile-menu-wrap',
        });
        // wow js
    new WOW().init();
        
        
    });
    

    
    
    
    
    
    
    
    
