(function ($) {

    // wow js
    new WOW().init();

    // when li clicked active portfolio gallery
    $('.portfolio_nav button').on("click", function(event){
        //remove all pre-existing active classes
        $('.active').removeClass('active');

        //add the active class to the link we clicked
        $(this).addClass('active');
        event.preventDefault();
    });
    // slicknav
    $('#navigation').slicknav({
        prependTo: '.responsive_mobile_menu'
    });

    // isotope js  
    var $grid = $('.portfolio_all_items_wrap').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-item'
        }
    });
    // filter items on button click
    $('.portfolio_nav').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });


    // scroll top plugin
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
    // scroll top plugin end

    // magnific popup plugin
    $('.popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }

    });
    // magnific popup plugin end


    // preloader 
    $('.preloader_area_wrap').fadeOut(1000);




})(jQuery);
