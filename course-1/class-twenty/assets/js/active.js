(function($){
    "use strict";
    
    
//     document ready 
    jQuery(document).ready(function($){
        
	 $('#home-page-slides').owlCarousel({
		nav: true,
		items: 1,
		loop: true,
		center: true,
		margin: 0,
		lazyLoad:true,
		dots: true,
        navText: ["<i class='zmdi zmdi-long-arrow-left'></i>","<i class='zmdi zmdi-long-arrow-right'></i>"],
	});
        
      $("#case-studies-carousel").owlCarousel({
          items: 3,
          margin: 30,
          loop: true,
          dots: true,
          nav: false,
          autoplay: true,
      });
      $("#case-studies-carousel-theme-3").owlCarousel({
          items: 5,
          margin: 0,
          loop: true,
          dots: true,
          nav: false,
          autoplay: true,
      });
        
      $("#logo-carousel").owlCarousel({
          items: 6,
          margin: 30,
          loop: true,
          dots: false,
          nav: false,
          autoplay: true,
      });
        
      $("#single-testimonial-carousel-theme-2").owlCarousel({
          items: 1,
          loop: true,
          dots: true,
          nav: false,
          navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
      });
        
      $("#testimonial-carousel").owlCarousel({
          items: 1,
          loop: true,
          dots: true,
          nav: false,
          navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>']
      }); 
        
        // off-canvas menu js code
        $(".menu-trigger").on('click', function(){
            $(".off-canvas-menu").addClass("show");
            $(".off-canvas-menu-shade").addClass("active");
        });
        $(".close-btn , .off-canvas-menu-shade").on('click', function(){
            $(".off-canvas-menu").removeClass("show");
            $(".off-canvas-menu-shade").removeClass("active");
        });
        
        // hover effect for home-4 testimonial section
        $('.single-testimonial-box').hover(function () {
            
            $('.single-testimonial-box').removeClass('active');
            $(this).addClass('active');
        });
        
        $('.video-play-btn').magnificPopup({
            type: 'video'
        });
        

});

    
 

    
    
    
    
    
    
    
    
    
})(jQuery);