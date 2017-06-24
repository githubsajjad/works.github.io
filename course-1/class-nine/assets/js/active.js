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
        
      $("#testimonial-carousel,#single-testimonial-carousel-theme-2").owlCarousel({
          items: 1,
          loop: true,
          dots: true,
          nav: false,
        navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
      });  
        

});

    
 

    
    
    
    
    
    
    
    
    
})(jQuery);