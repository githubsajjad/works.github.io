(function ($) {

	// slider carousel
	$('.homepage_slides').owlCarousel({
		items: 1,
		margin: 0,
		loop: true,
		nav: false,
		autoplay: true,
		autoplayTimeout: 2000,
		autoplaySpeed: 1000,
	});

	// service carousel
	$('.service_carousel').owlCarousel({
		items: 3,
		margin: 30,
		loop: true,
		autoplay: true,
		nav: false,
		autoplayTimeout: 2000,
		autoplaySpeed: 1000,
	});

	// gallery carousel
	$('.gallery_carousel_slide').owlCarousel({
		items: 6,
		margin: 0,
		loop: true,
		autoplay: true,
		nav: false,
		dots: false,
		autoplayTimeout: 2000,
		autoplaySpeed: 1000,
	});
	// gallery carousel 2
	$('.gallery_carousel_2').owlCarousel({
		items: 4,
		margin: 30,
		loop: true,
		autoplay: true,
		nav: false,
		dots: false,
		autoplayTimeout: 2000,
		autoplaySpeed: 1000,
	});
	// photo-stream carousel 2
	$('.photo_stream_carousel').owlCarousel({
		items: 3,
		margin: 15,
		loop: true,
		autoplay: true,
		nav: false,
		dots: true,
		autoplayTimeout: 2000,
		autoplaySpeed: 1500,
	});

	// testimonial carousel use slick slider
	$('.testimonial_slider_1').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		infinite: true,
		arrows: false,
		focusOnSelect: true,
		autoplay: false,
		swipe: true,
		asNavFor: '.testimonial_slider_2'
	});
	$('.testimonial_slider_2').slick({
		slidesToShow: 1,
		autoplay: true,
		slidesToScroll: 1,
		asNavFor: '.testimonial_slider_1',
		arrows: false,
		autoplaySpeed: 1500,
		swipe: true,
		dots: true

	});

	// counter up
	$(".counter").counterUp({
		delay: 10,
		time: 2500
	});

	// wow js
	new WOW().init();


	//	// swiper slider
	//	var swiper = new Swiper('.swiper-container', {
	//		direction: 'vertical',
	//		slidesPerView: 1,
	//		spaceBetween: 0,
	//		mousewheelControl: true,
	//		pagination: {
	//			el: '.swiper-pagination',
	//			clickable: true,
	//		},
	//	});

	// imagesLoaded
    $('.grid').imagesLoaded(function() {
        // filter items on button click
        $('.portfolio-menu').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: 1,
            }
        });
    });
	
	 $('.portfolio-menu button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });


	// Scroll Top btn

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



	/* Menu sticky  */
	var header = $('.header-sticky');
	var win = $(window);

	win.on('scroll', function () {
		var scroll = win.scrollTop();
		if (scroll < 245) {
			header.removeClass("sticky");
		} else {
			header.addClass("sticky");
		}
	});




	// OnePageNav js

	$("ul#navigation").onePageNav();
	jQuery(function ($) {
		$('ul#navigation a').bind('click', function (event) {
			var $anchor = $(this);
			$('html').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - 60
			}, 1000);
			event.preventDefault();
		});
	});

	
	// magnific popup plugin
		$('.popup').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}

		});
	// magnific popup plugin
		 $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		 	disableOn: 700,
		 	type: 'iframe',
		 	mainClass: 'mfp-fade',
		 	removalDelay: 160,
		 	preloader: false,

		 	fixedContentPos: false
		 });




})(jQuery);
