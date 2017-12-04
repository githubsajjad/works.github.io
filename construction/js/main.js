$(document).ready(function($){
  
    /* =====================
			 Menu Stick
	======================== */
		var s = $("#sticker");
		var pos = s.position();					   
		$(window).scroll(function() {
			var windowpos = $(window).scrollTop();
			if (windowpos > pos.top) {
			s.addClass("stick");
			} else {
			s.removeClass("stick");	
			}
		});	
    
    
        


	/* ==================
	   OnePageNav js
	===================== */
		 $("ul#navigation").onePageNav();	
		jQuery(function($) {
			$('ul#navigation a').bind('click', function(event) {
				var $anchor = $(this);
				$('html').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - 70
				}, 1000);
				event.preventDefault();
			});
		});   
  

	/* ==============
		jQuery ui 
	=================*/
	$( "#accordion" ).accordion();
	
    /* ===============
		Owl Slider
	=================*/
	$('#home-page-slides').owlCarousel({
		nav: false,
		items: 1,
		loop: true,
		center: true,
		margin: 0,
        autoplay: true,
        autoplayTimeout: 2000,
        nav: false,
//        autoplaySpeed: 1000,
		dots: false,
	});
        // Main Slide Animation
             $("#home-page-slides").on("translate.owl.carousel", function(){
                $(".single-slide-item h2").removeClass("animated fadeInUp").css("opacity", "0");
                $(".single-slide-item p").removeClass("animated fadeInLeft").css("opacity", "0");
                $(".single-slide-item a").removeClass("animated fadeInDown").css("opacity", "0");
            });

            $("#home-page-slides").on("translated.owl.carousel", function(){
                $(".single-slide-item h2").addClass("animated fadeInUp").css("opacity", "1");
                $(".single-slide-item p").addClass("animated fadeInLeft").css("opacity", "1");
                $(".single-slide-item a").addClass("animated fadeInDown").css("opacity", "1");
            });
        // Main Slide Animation end
	
    /* ===============
		Testimonial Slider
	=================*/
	$('.client-carousel').owlCarousel({
		nav: false,
		items: 1,
		loop: true,
		margin: 200,
        autoplay: true,
        autoplayTimeout: 2000,
		dots: false,
	});
		
	 /*================ 
			isotope
		================*/
	var $krisha = $('.myallproject').isotope({
	  itemSelector: '.grid-item'
	});
	$(".work-menu button").click(function(){			
		var clickMenu = $(this).attr('data-filter');
		$krisha.isotope({
			filter:clickMenu
		})
	});
	$(".work-menu button").click(function(){
		$(".work-menu button").removeClass("activemenu");
		$(this).addClass("activemenu");
		
	});
	
	/* ==============
		lightbox 
	=================*/
	lightbox.option({
			  'resizeDuration': 300,
			  'wrapAround': true
			});
 
	/* =================
		owlCarousel
	====================*/
	$('.active-client').owlCarousel({
				loop:true,
				autoplay:true,
				autoplayTimeout:2000,
				nav:false,
				responsive:{
					0:{
						items:2
					},
					600:{
						items:5
					},
					1000:{
						items:6
					}
				}
			});
			
			
        /*==================
	       Scroll Top btn
        =====================*/
            $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
            $('.scroll-up-btn').fadeIn().addClass('opacity');
            } else {
            $('.scroll-up-btn').fadeOut();
            }
            });
            $('.scroll-up-btn').on('click', function () {
            $("html, body").animate({
            scrollTop: 0
            }, 1000);
            return false;
            });
    
            // mobile menu
                $("#navigation").slicknav({
                    prependTo: '#mobile-menu-wrap',
                });
    

});

$(window).load(function(){
         // wow js        
    new WOW().init();
});
             

	