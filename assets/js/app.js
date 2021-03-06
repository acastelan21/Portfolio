$(function() {

    "use strict";

    var wind = $(window);

    /* Preloader
          -------------------------------------------------------*/
    $(window).on('load', function() {
        $("#loader").fadeOut(500);
    });


    /* smooth scroll
    -------------------------------------------------------*/
    $.scrollIt({

        upKey: 40, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'linear', // the easing function for animation
        scrollTime: 1500, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed

    });


    /* navbar scrolling background
    -------------------------------------------------------*/
    wind.on("scroll", function() {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar-default");

        if (bodyScroll > 500) {

            navbar.addClass("nav-scroll");

        } else {

            navbar.removeClass("nav-scroll");
        }

    });




    /* typejs
    -------------------------------------------------------*/
    $(' .typed-element').typed({
        strings: ["Web Developer", "Problem Solver", "Full Stack Developer"],
        loop: true,
        startDelay: 1000,
        backDelay: 2000
    });




    /* owlCarousel for testimonial
    -------------------------------------------------------*/
    $('.testimonial .owl-carousel').owlCarousel({

        items: 1,
        mouseDrag: true,
        autoplay: true,
        smartSpeed: 500

    });

    /* owlCarousel for Single Portfolio
    -------------------------------------------------------*/
    $('.single-portfolio .owl-carousel').owlCarousel({

        items: 1,
        mouseDrag: true,
        autoplay: true,
        smartSpeed: 500

    });

    /* owlCarousel Blog
    -------------------------------------------------------*/
    $('.clients .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 500,
        stopOnHover: true,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            576: {
                items: 2,
                nav: false
            },
            767: {
                items: 3,
                nav: false
            },
            991: {
                items: 4,
                nav: false,
                loop: false
            }
        }
    });




    /* owlCarousel Blog
    -------------------------------------------------------*/
    $('.blog .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 500,
        stopOnHover: true,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false,
                loop: false
            }
        }
    });




    /* magnificPopup
    -------------------------------------------------------*/
    $('.img-pop').magnificPopup({

        type: 'image',
        gallery: {
            enabled: true
        }

    });

    $('.link').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });




    // counterUp
    $('.numbers .counter').countUp({
        delay: 10,
        time: 1500
    });




    /* Progress Bars
    -------------------------------------------------------*/
    wind.on("scroll", function() {

        var bodyScroll = wind.scrollTop()

        if (bodyScroll > 2200) {

            $('#bar1').barfiller({
                // color of bar
                barColor: '#6F0F13',
                // duration in ms
                duration: 2000
            });

            $('#bar2').barfiller({
                // color of bar
                barColor: '#6F0F13',
                // duration in ms
                duration: 1800
            });

            $('#bar3').barfiller({
                // color of bar
                barColor: '#6F0F13',
                // duration in ms
                duration: 1600
            });

            $('#bar4').barfiller({
                // color of bar
                barColor: '#6F0F13',
                // duration in ms
                duration: 1400
            });
            $('#bar5').barfiller({
                // color of bar
                barColor: '#6F0F13',
                // duration in ms
                duration: 1200
            });

            $('#bar6').barfiller({
                // color of bar
                barColor: '#6F0F13',
                // duration in ms
                duration: 1000
            });

        }

    });


});



$(window).on("load", function() {


    // isotope
    $('.gallery').isotope({
        // options
        itemSelector: '.items'
    });

    var $gallery = $('.gallery').isotope({
        // options
    });

    // filter items on button click
    $('.filtering').on('click', 'span', function() {

        var filterValue = $(this).attr('data-filter');

        $gallery.isotope({
            filter: filterValue
        });

    });

    $('.filtering').on('click', 'span', function() {

        $(this).addClass('active').siblings().removeClass('active');

    });



    // Wow
    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 50, // default
        mobile: true, // default
        live: true // default
    });
    wow.init();

   

})