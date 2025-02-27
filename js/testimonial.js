jQuery(function($) {     
		   // Service
        if ($('.dt__testimonial-carousel').length) {
            $(".dt__testimonial-carousel").owlCarousel({
                rtl: $("html").attr("dir") == 'rtl' ? true : false,
                items: 1,
                margin: 30,
                loop: true,
                dots: true,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                autoHeight: true,
                autoplay: false,
                autoplayTimeout: 30000,
                smartSpeed: 2000,
                stagePadding: 17,
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    768: {
                        items: 2,
                        nav: $(".dt__testimonial").is(".dt__testimonial--one") ? false : true
                    },
                    992: {
                        stagePadding: $(".dt__testimonial").is(".dt__testimonial--three") ? 100 : 17,
                        items: $(".dt__testimonial").is(".dt__testimonial--two") ? cosmobit_testimonial_options.itemsCount : cosmobit_testimonial_options.itemsCount,
                        nav: $(".dt__testimonial").is(".dt__testimonial--one") ? false : true
                    }
                }
            });
        }
});