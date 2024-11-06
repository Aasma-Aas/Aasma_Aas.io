(function($) {
    "use strict";

    // Windows load

    $(window).on("load", function() {

        // Site loader 

        $(".loader-inner").fadeOut();
        $(".loader").delay(200).fadeOut("slow");

    });


    // Scroll to

    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scroll-to-top').addClass('top');
            } else {
                $('.scroll-to-top').removeClass('top');
            }
        });
    });


    // Scroll to

    $('a.scroll').smoothScroll({
        speed: 800,
        offset: -85
    });


    // Tabs setup

    $('.wrapper.home').easytabs({
        animate: true,
        updateHash: false,
        transitionIn: 'fadeIn',
        transitionOut: 'fadeOut',
        animationSpeed: 400,
        tabActiveClass: 'active',
        tabs: ' #main-nav.tabbed > ul > li ',
        transitionInEasing: 'linear',
        transitionOutEasing: 'linear'

    });


    // Update window position
	
	
    if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
            $('#main-nav.tabbed > ul > li, .project-nav li a').on('click', function() {
        $.smoothScroll('+=' + $(window).height());
    });
    }


    // Testimonials caroussel

    $(".testimonial-carousel").owlCarousel({

        items: 2,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [979, 2],
        itemsTablet: [768, 1],
        itemsTabletSmall: [550, 1],
        itemsMobile: [480, 1],
        pagination: true,
        autoPlay: true,
        pagination: true,
        mouseDrag: false,
        autoplayTimeout: 9800
    });


    // Slider caroussel

    $(".block-slider").owlCarousel({
        navigation: false,
        slideSpeed: 900,
        paginationSpeed: 400,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,
        pagination: false,
        singleItem: true,
        navigation: true,
        navigationText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"]
    });


    //Popup element

    $('.venobox').venobox();


    //Skills percentage

    $(".percentage").each(function() {
        var width = $(this).text();
        $(this).css("width", width).empty();
    });


    // Filtred portfolio


    $('.filter li a').on("click", function(e) {

        e.preventDefault();
        $(this).addClass('active');
        $(this).parent().siblings().find('a').removeClass('active');

        var filters = $(this).attr('data-filter');
        $(this).closest('.work').find('.item').removeClass('disable');

        if (filters !== 'all') {

            var selected = $(this).closest('.work').find('.item');

            for (var i = 0; i < selected.length; i++) {

                if (!selected.eq(i).hasClass(filters)) {
                    selected.eq(i).addClass('disable');
                }

            }

        }


    });


    // Parallax animated elements


    if ($('.parallax').length > 0) {
        var scene = $('.parallax').get(0);
        var parallax = new Parallax(scene, {
            relativeInput: true,
        });
    }


    // Text rotating setup


    $(".text-rotating").Morphext({
        animation: "bounceInDown",
        separator: ",",
        speed: 6000,
        complete: function() {}
    });


    // Search input setup


    $('.header-search-form .search-form-icon').on("click", function() {
        $(this).closest('.header-search-form').find('input[type="text"]').focus();
        if ($(this).closest('.header-search-form').find('input[type="text"]').val()) {
            $(this).closest('.header-search-form').find('input[type="submit"]').trigger('click');
        }
    });


    // Contact form setup


    $('.send').on("click", function() {

        $('input#name').removeClass("error-Form");
        $('textarea#message').removeClass("error-Form");
        $('input#email').removeClass("error-Form");

        var error = false;
        var name = $('input#name').val();
        if (name == "" || name == " ") {
            error = true;
            $('input#name').addClass("error-Form");
        }


        var msg = $('textarea#message').val();
        if (msg == "" || msg == " ") {
            error = true;
            $('textarea#message').addClass("error-Form");

        }

        var email_compare = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
        var email = $('input#email').val();
        if (email == "" || email == " ") {
            $('input#email').addClass("error-Form");
            error = true;
        } else if (!email_compare.test(email)) {
            $('input#email').addClass("error-Form");
            error = true;
        }

        if (error == true) {
            return false;
        }

        var data_string = $('.contact-form').serialize();


        $.ajax({
            type: "POST",
            url: $('.contact-form').attr('action'),
            data: data_string,

            success: function(message) {
                if (message == 'SENDING') {
                    $('#success').fadeIn('slow');
                } else {
                    $('#error').fadeIn('slow');
                }
            }

        });

        return false;
    });



    // Style toggle


    $('.toggle,.close-styler').click(function(e) {
        e.preventDefault();
        var styler = $('.styler');
        console.log(styler.css('left'));
        if (styler.css('left') === '-278px') {
            $('.styler').animate({
                left: '30px'
            });

        } else {
            $('.styler').animate({
                left: '-278px'
            });

        }
    });



})(jQuery);