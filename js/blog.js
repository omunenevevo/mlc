jQuery(function($) { 
	// Posts Carousel
        if ($('.dt__posts-carousel').length) {
            $(".dt__posts-carousel").owlCarousel({
                rtl: $("html").attr("dir") == 'rtl' ? true : false,
                items: 1,
                margin: 30,
                loop: true,
                dots: true,
                nav: false,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                autoHeight: true,
                autoplay: false,
                autoplayTimeout: 30000,
                smartSpeed: 2000,
                stagePadding: 15,
                responsive: {
                    0: {
                        items: 1,
                    },
                    768: {
                        items: 2,
                    },
                    992: {
                        items: cosmobit_blog_options.itemsCount,
                    }
                }
            });
        } 
});