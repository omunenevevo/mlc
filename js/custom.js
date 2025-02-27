(function($) {
    'use strict';

    // Prealoader
    $(window).on('load', function () {
        if ( $( '.prealoader' ).length ) {
            $( '.prealoader' ).delay(400).queue(function () {
                $(this).remove();
            });
        }
    });

    if ($('.dt__uptop').length) {
        $(document).on('scroll', function () {
            if ($(this).scrollTop() > 300) {
                $('.dt__uptop').addClass('active');
            } else {
                $('.dt__uptop').removeClass('active');
            }
        }); 
        //Click event to scroll to top
        $(document).on('click', '.dt__uptop', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 600);
            return false;
        });
    }

    if ( $('body').hasClass("footer--parallax") ) {
        function onFooter() {
            if ( window.matchMedia('(min-width: 992px)').matches ) {
                var m = 0;$('.dt__footer').each(function(){ $(this).outerHeight(true) > m ? m = $(this).outerHeight(true) : '';});$( '#content' ).css('margin-bottom', m);
            } else {$( '#content' ).css('margin-bottom', '0');}
        }$(window).on("resize", onFooter),$(window).on("load", onFooter);
    }

    // Pricing Tab Content
    if ($('.dt__pricing').length) {
        function onPricing() {
            var m = 0;$('.dt__pricing .tab-content .tab-pane').each(function(){ $(this).outerHeight(true) > m ? m = $(this).outerHeight(true) : '';});$( '.dt__pricing .tab-content' ).css('min-height', m);
        }$(window).on("resize", onPricing),$(window).on("load", onPricing);
    }

    $(document).ready(function() {
        
        // Clients
        if ($('.dt__clients-carousel').length) {
            $(".dt__clients-carousel").owlCarousel({
                rtl: $("html").attr("dir") == 'rtl' ? true : false,
                items: 1,
                margin: 30,
                loop: true,
                dots: false,
                nav: false,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                autoHeight: true,
                autoplay: false,
                autoplayTimeout: 30000,
                smartSpeed: 2000,
                responsive: {
                    0: {
                        items: 2,
                    },
                    576: {
                        items: 3,
                    },
                    992: {
                        items: 6,
                    }
                }
            });
        }

        // Counter
        if ($('.counter').length) {
            $('.counter').counterUp({
                delay: 20,
                time: 3000
            });
        }

        // Load More
        $('.dt__services .loadmore').btnloadmore();

        // Skillbars
        $('.dt__skillbars-main').each(function() {
            $(this).find('.dt__skillbars-line').animate({
                width: $(this).attr('data-percent')
            }, 6000);
            $(this).find('.dt__skillbars-percent').animate({
                left: $(this).attr('data-percent')
            }, 6000);
        });
        $('.dt__skillbars-count').each(function() {
            var self = $(this);
            $({
                Counter: 0
            }).animate({
                Counter: self.text()
            }, {
                duration: 6000,
                easing: 'swing',
                step: function() {
                    self.text(Math.ceil(this.Counter));
                }
            });
        });
        

        // Circle Percent
        $(".circleprogress__percent").each(function () {
            var $this = $(this),
            $dataV = $this.data("percent"),
            $dataDeg = $dataV * 3.6,
            $round = $this.find(".circleprogress__round-per");
            $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
            $this.append(
                '<div class="circleprogress__inbox"><span class="circleprogress__percent-text"></span></div>'
            );
            $this.prop("Counter", 0).animate(
                { Counter: $dataV },
                {
                    duration: 2000,
                    easing: "swing",
                    step: function (now) {
                        $this.find(".circleprogress__percent-text").text(Math.ceil(now) + "%");
                    }
                }
            );
            if ($dataV >= 51) {
                $round.css("transform", "rotate(" + 360 + "deg)");
                setTimeout(function () {
                    $this.addClass("circleprogress__percent--more");
                }, 1000);
                setTimeout(function () {
                    $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
                }, 1000);
            }
        });


        // Accordion
        $(document).on("click", ".accordion__title", function () {
            const accordionWrapper = $(this).parent();
            const accordionContent = $(this).parent().find(".accordion__content").first();
            const accordionOpen = "accordion--open";

            // If this accordion is already open
            if (accordionWrapper.hasClass(accordionOpen)) {
                accordionContent.slideUp(); // Close the content.
                accordionWrapper.removeClass(accordionOpen); // Remove the accordionm--open class.
            }
            // If this accordion is not already open
            else {
                accordionContent.slideDown(); // Show this accordion's content.
                accordionWrapper.addClass(accordionOpen); // Add the accordion--open class.
            }
        });

        // Tab Content
        $(".dt__tabs").each(function() {
            var $myTabs = $(this);
            $myTabs.find(".tabs li:first-child a").addClass("active");
            $myTabs.find(".tab-content .tab-pane:first-child").addClass("active").addClass("show");
            $myTabs.find(".tabs li a").click(function () {
                var tab_id = $(this).attr("data-tab");
                $myTabs.find(".tabs li a").removeClass("active");
                $myTabs.find(".tab-content .tab-pane").removeClass("active").removeClass("show");
                $(this).addClass("active");

                setTimeout(function () {
                    $("#" + tab_id).addClass("active").addClass("show");
                }, 100);

                return false;
            });
        });

        // Posts Carousel
        if ($('.dt__portfolio-carousel').length) {
            $(".dt__portfolio-carousel").owlCarousel({
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
                        items: 3,
                    }
                }
            });
        }

        // MagnificPopup
        $('.popup-trigger').magnificPopup({
            type: 'iframe'
        });
        $('.mgf-popup').magnificPopup({
            delegate: 'a.image',
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            callbacks: {
                elementParse: function(item) {
                    //console.log(item.el[0].className);
                    if(item.el[0].className == 'video') {
                        item.type = 'iframe',
                        item.iframe = {
                            patterns: {
                                youtube: {
                                    index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                                    id: 'v=', // String that splits URL in a two parts, second part should be %id%
                                    // Or null - full URL will be returned
                                    // Or a function that should return %id%, for example:
                                    // id: function(url) { return 'parsed id'; } 

                                    src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe. 
                                },
                                vimeo: {
                                    index: 'vimeo.com/',
                                    id: '/',
                                    src: '//player.vimeo.com/video/%id%?autoplay=1'
                                },
                                gmaps: {
                                    index: '//maps.google.',
                                    src: '%id%&output=embed'
                                }
                            }
                        }
                    } else {
                        item.type = 'image',
                        item.tLoading = 'Loading image #%curr%...',
                        item.mainClass = 'mfp-img-mobile',
                        item.image = {
                            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
                        }
                    }
                }
            }
        });

        // Project
        activePostFilter();
        function activePostFilter(){
            var postFilter = $('.dt-filter-init');
            $.each(postFilter,function (index,value) {
                var el = $(this), parentClass = $(this).parent().parent().attr('class'), $selector = $('#'+el.attr('id'));
                $($selector).imagesLoaded(function () {
                    var festivarMasonry = $($selector).isotope({
                        itemSelector: '.dt-filter-item',
                        percentPosition: true,
                        masonry: {
                            columnWidth: 0,
                            gutter:0
                        }
                    });
                    $(document).on('click', '.'+parentClass+' .dt-tab-filter a', function (e) {
                        e.preventDefault();
                        var filterValue = $(this).attr('data-filter');
                        festivarMasonry.isotope({
                            filter: filterValue
                        });
                    });
                });
            });
        }
        $(document).on('click', '.dt-tab-filter a', function (e) {
            e.preventDefault();
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });

        // dt__infoservices-row
        if ($('.dt__infoservices-row .dt__infoservices-block').length) {
            $('.dt__infoservices-row .dt__infoservices-block').each(function(){
                $(this).hover(function(){$(this).parents('.dt__infoservices-row').find('.dt__infoservices-block').removeClass('active');$(this).addClass('active');});
            });
        }

        // dt__contactinfo
        if ($('.dt__contactinfo-row .dt__contactinfo').length) {
            $('.dt__contactinfo-row .dt__contactinfo').each(function(){
                $(this).hover(function(){$(this).parents('.dt__contactinfo-row').find('.dt__contactinfo').removeClass('active');$(this).addClass('active');});
            });
        }
    });

    var tiltSettings = [
        {},
        {
            movement: {
                imgWrapper : {
                    translation : {x: 10, y: 10, z: 30},
                    rotation : {x: 0, y: -10, z: 0},
                    reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
                },
                lines : {
                    translation : {x: 10, y: 10, z: [0,70]},
                    rotation : {x: 0, y: 0, z: -2},
                    reverseAnimation : {duration : 2000, easing : 'easeOutExpo'}
                },
                caption : {
                    rotation : {x: 0, y: 0, z: 2},
                    reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
                },
                overlay : {
                    translation : {x: 10, y: -10, z: 0},
                    rotation : {x: 0, y: 0, z: 2},
                    reverseAnimation : {duration : 2000, easing : 'easeOutExpo'}
                },
                shine : {
                    translation : {x: 100, y: 100, z: 0},
                    reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
                }
            }
        },
        {
            movement: {
                imgWrapper : {
                    rotation : {x: -5, y: 10, z: 0},
                    reverseAnimation : {duration : 900, easing : 'easeOutCubic'}
                },
                caption : {
                    translation : {x: 30, y: 30, z: [0,40]},
                    rotation : {x: [0,15], y: 0, z: 0},
                    reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
                },
                overlay : {
                    translation : {x: 10, y: 10, z: [0,20]},
                    reverseAnimation : {duration : 1000, easing : 'easeOutExpo'}
                },
                shine : {
                    translation : {x: 100, y: 100, z: 0},
                    reverseAnimation : {duration : 900, easing : 'easeOutCubic'}
                }
            }
        },
        {
            movement: {
                imgWrapper : {
                    rotation : {x: -5, y: 10, z: 0},
                    reverseAnimation : {duration : 50, easing : 'easeOutQuad'}
                },
                caption : {
                    translation : {x: 20, y: 20, z: 0},
                    reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
                },
                overlay : {
                    translation : {x: 5, y: -5, z: 0},
                    rotation : {x: 0, y: 0, z: 6},
                    reverseAnimation : {duration : 1000, easing : 'easeOutQuad'}
                },
                shine : {
                    translation : {x: 50, y: 50, z: 0},
                    reverseAnimation : {duration : 50, easing : 'easeOutQuad'}
                }
            }
        },
        {
            movement: {
                imgWrapper : {
                    translation : {x: 0, y: -8, z: 0},
                    rotation : {x: 3, y: 3, z: 0},
                    reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
                },
                lines : {
                    translation : {x: 15, y: 15, z: [0,15]},
                    reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
                },
                overlay : {
                    translation : {x: 0, y: 8, z: 0},
                    reverseAnimation : {duration : 600, easing : 'easeOutExpo'}
                },
                caption : {
                    translation : {x: 10, y: -15, z: 0},
                    reverseAnimation : {duration : 900, easing : 'easeOutExpo'}
                },
                shine : {
                    translation : {x: 50, y: 50, z: 0},
                    reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
                }
            }
        },
        {
            movement: {
                lines : {
                    translation : {x: -5, y: 5, z: 0},
                    reverseAnimation : {duration : 1000, easing : 'easeOutExpo'}
                },
                caption : {
                    translation : {x: 15, y: 15, z: 0},
                    rotation : {x: 0, y: 0, z: 3},
                    reverseAnimation : {duration : 1500, easing : 'easeOutElastic', elasticity : 700}
                },
                overlay : {
                    translation : {x: 15, y: -15, z: 0},
                    reverseAnimation : {duration : 500,easing : 'easeOutExpo'}
                },
                shine : {
                    translation : {x: 50, y: 50, z: 0},
                    reverseAnimation : {duration : 500, easing : 'easeOutExpo'}
                }
            }
        },
        {
            movement: {
                imgWrapper : {
                    translation : {x: 5, y: 5, z: 0},
                    reverseAnimation : {duration : 800, easing : 'easeOutQuart'}
                },
                caption : {
                    translation : {x: 10, y: 10, z: [0,50]},
                    reverseAnimation : {duration : 1000, easing : 'easeOutQuart'}
                },
                shine : {
                    translation : {x: 50, y: 50, z: 0},
                    reverseAnimation : {duration : 800, easing : 'easeOutQuart'}
                }
            }
        },
        {
            movement: {
                lines : {
                    translation : {x: 40, y: 40, z: 0},
                    reverseAnimation : {duration : 1500, easing : 'easeOutElastic'}
                },
                caption : {
                    translation : {x: 20, y: 20, z: 0},
                    rotation : {x: 0, y: 0, z: -5},
                    reverseAnimation : {duration : 1000, easing : 'easeOutExpo'}
                },
                overlay : {
                    translation : {x: -30, y: -30, z: 0},
                    rotation : {x: 0, y: 0, z: 3},
                    reverseAnimation : {duration : 750, easing : 'easeOutExpo'}
                },
                shine : {
                    translation : {x: 100, y: 100, z: 0},
                    reverseAnimation : {duration : 750, easing : 'easeOutExpo'}
                }
            }
        }
    ];
    
    var idx = 0;
    [].slice.call(document.querySelectorAll('.tilter')).forEach(function(el, pos) { 
        idx = pos%2 === 0 ? idx+1 : idx;
        new TiltDt(el, tiltSettings[idx-1]);
    });

})(jQuery);
