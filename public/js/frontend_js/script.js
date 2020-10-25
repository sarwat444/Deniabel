/***************************************************************************************************************
||||||||||||||||||||||||||||        CUSTOM SCRIPT FOR ASSURANCE            |||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
||||||||||||||||||||||||||||              TABLE OF CONTENT                  ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
****************************************************************************************************************
01. Preloader
02. Sticky header
03. mainmenu
04. Revolution slider
05. scoll to Top
06. Testimonial Slider
07. Sponser Slider
08. Accordion
09. Fact counter
10. Prealoder
11. Select Dropdown
12. ContactFormValidation


****************************************************************************************************************
||||||||||||||||||||||||||||            End TABLE OF CONTENT                ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************/
(function($) {
    "use strict";

/*----------------------------
   Preloader
  ------------------------------ */
    function prealoader () {
        if($('.loader-container').length) {
          $('.loader-container').fadeOut(1000);
        }
    }

/*=================== Sticky Header ===================*/
    function stickyHeader () {
        var scroll = $(window).scrollTop();
        if (scroll > 200) {
            $(".mainmenu-area.stick, .header-lower.stick, .header-area.stick").addClass("sticky animated fadeInDown");
            var nav_height = $(".mainmenu-area.stick, .header-lower.stick, .header-area.stick").innerHeight();
            $(".menu-height").css({
                "height": nav_height
            });
        } else if (scroll < 200) {
            $(".mainmenu-area.stick, .header-lower.stick, .header-area.stick").removeClass("sticky animated fadeInDown");
            $(".menu-height").css({
                "height": 0
            });
        }
    }

//====Main menu===
    function mainmenu() {
        //Submenu Dropdown Toggle
        if($('.main-menu li.dropdown ul').length){
            $('.main-menu li.dropdown').append('<div class="dropdown-btn"></div>');

            //Dropdown Button
            $('.main-menu li.dropdown .dropdown-btn').on("click", function() {
                $(this).prev('ul').slideToggle(500);
            });
        }

    }


//===RevolutionSliderActiver===
    function revolutionSliderActiver () {
        if ($('.rev_slider_wrapper #slider1').length) {
            $("#slider1").revolution({
                sliderType:"standard",
                sliderLayout:"auto",
                delay:5000,

                navigationType:"bullet",
                navigationArrows:"0",
                navigationStyle:"preview3",

                dottedOverlay:'yes',

                hideTimerBar:"off",
                onHoverStop:"off",
                navigation: {
                    arrows:{enable:true}
                },
                responsiveLevels:[1920,1280,975,600,300],
                gridwidth: [1170, 720, 500, 500, 300],
                gridheight: [650, 600, 550, 450, 400]
            });
        };
    }



//===scoll to Top===
    function scrollToTop() {
        if ($('.scroll-to-target').length) {
            $(".scroll-to-target").on("click", function() {
                var target = $(this).attr('data-target');
                // animate
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 1000);

            });
        }
    }


//===Sponser Slider Style 2===


/*-----------------------------------
        TESTMONIAL SLIDER ACTIVE
-----------------------------------*/
    function clientBxSlider () {
        var clientBxSlider = $('.clinet-carousal .item');
        if (clientBxSlider.length > 0) {
            clientBxSlider.bxSlider({
                // adaptiveHeight: true,
                auto: false,
                controls: true,
                nextText: '<i class="flaticon-right-arrow"></i>',
                prevText: '<i class="flaticon-left-arrow"></i>',
                mode: 'fade',
                pause: 3000,
                speed: 500,
                pager: false
            });
        }
    }

/*-----------------------------------
        TESTMONIAL SLIDER ACTIVE
-----------------------------------*/
    function testmonialBxSlider () {
        var testmonialBxSlider = $('.testimonials-slider .slider');
        if (testmonialBxSlider.length > 0) {
            testmonialBxSlider.bxSlider({
                // adaptiveHeight: true,
                auto: false,
                controls: true,
                nextText: '<i class="fas fa-angle-right"></i>',
                prevText: '<i class="fas fa-angle-left"></i>',
                mode: 'fade',
                pause: 3000,
                speed: 500,
                pager: true,
                pagerCustom: '#testimonials-slider-pager'
            });
        }
    }

//===Search box ===
    function searchbox() {
        //Search Box Toggle
        if($('.search-toggle').length){
            //Dropdown Button
            $('.search-toggle').on("click", function() {
                $(this).toggleClass('active');
                $(this).next('.search-box').toggleClass('now-visible');
            });
        }

    }

    $('.toggle').on("click", function(e) {
    e.preventDefault();

    var $this = $(this);

    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});


/*=================== Accordion ===================*/
    function accordion () {
        $(".toggle").each(function(){
            $(this).find('.content').hide();
            $(this).find('h5:first').addClass('active').next().slideDown(500).parent().addClass("activate");
            $('h5', this).on("click", function() {
                if ($(this).next().is(':hidden')) {
                    $(this).parent().parent().find("h5").removeClass('active').next().slideUp(500).removeClass('animated fadeInUp').parent().removeClass("activate");
                    $(this).toggleClass('active').next().slideDown(500).addClass('animated fadeInUp').parent().toggleClass("activate");
                }
            });
        });
    }

//=== Fact counter ===
    function CounterNumberChanger () {
        var timer = $('.timer');
        if(timer.length) {
            timer.appear(function () {
                timer.countTo();
            })
        }
    }

//=== Select menu ===
    function selectDropdown () {
        if($(".selectmenu").length) {
            $( ".selectmenu" ).selectmenu();
        };
    }


//=== Thm scroll anim===
    function thmScrollAnim() {
        if ($('.wow').length) {
            var wow = new WOW({
                mobile: false
            });
            wow.init();
        };
    }

//=== offsetgap===
    function offsetgap() {
        var offset_gap = $(".container").offset().left;
        $(".right-text-area, .right-content-are").css({
           right: offset_gap
        });
        $(".left-content-are, .left-content-are, .more-project .sec-title").css({
           left: offset_gap
        });
    }

// ===Project===
    function projectMasonaryLayout() {

        if ($('.post-filter').length) {
            $('.post-filter li').children('span').on("click", function() {
                var Self = $(this);
                var selector = Self.parent().attr('data-filter');
                $('.post-filter li').children('span').parent().removeClass('active');
                Self.parent().addClass('active');


                $('.filter-layout').isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 500,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });
        }

        if ($('.post-filter.has-dynamic-filter-counter').length) {
            // var allItem = $('.single-filter-item').length;

            var activeFilterItem = $('.post-filter.has-dynamic-filter-counter').find('li');

            activeFilterItem.each(function() {
                var filterElement = $(this).data('filter');
                console.log(filterElement);
                var count = $('.gallery-content').find(filterElement).length;

                $(this).children('span').append('<span class="count"><b>' + count + '</b></span>');
            });
        };
    }


//=== Contact Form Validation ===
    function ContactFormValidation() {
      if(('.form-sec').length) {
            var form = $('#ajax-contact');
            var formMessages = $('.form-messages');
            $(form).submit(function(e) {
              e.preventDefault();
              var formData = $(form).serialize();
              $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
              }).done(function(response) {
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');
                $(formMessages).text(response);
                $(this).find("input").val("");
                $(form).trigger("reset");
              }).fail(function(data) {
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');
                if (data.responseText !== '') {
                  $(formMessages).text(data.responseText);
                } else {
                  $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
              });
            });
        }
    }



    //**** Account Login Popup ****//
    function accountlogin() {
        $('.account-login').on('click', function(){
            $('.popup-sec').addClass('active');
            $('.login-account').addClass('active');
            $('html').addClass('stop-scroll');
        });
        $('.close-account').on('click', function(){
            $('.popup-sec').removeClass('active');
            $('.login-account').removeClass('active');
            $('html').removeClass('stop-scroll');
        });
    }

    //**** Account Login Popup ****//
    function accountregister() {
        $('.account-register').on('click', function(){
            $('.popup-sec').addClass('active');
            $('.register-account').addClass('active');
            $('html').addClass('stop-scroll');
        });
        $('.close-account').on('click', function(){
            $('.popup-sec').removeClass('active');
            $('.register-account').removeClass('active');
            $('html').removeClass('stop-scroll');
        });
    }


/* ==========================================================================
   When document is loading, do
   ========================================================================== */

    $(window).on('load', function() {
        prealoader ();
        revolutionSliderActiver ();
        mainmenu ();
        clientBxSlider ();
        sponsercarousel ();
        scrollToTop ();
        CounterNumberChanger ();
        accordion ();
        ContactFormValidation ();
        selectDropdown ();
        thmScrollAnim ();
        searchbox ();
        offsetgap ();
        projectMasonaryLayout ();
        testmonialBxSlider ();
        accountlogin ();
        accountregister ();
    });

/* ==========================================================================
   When document is Scrolling, do
   ========================================================================== */

    $(window).on('scroll', function() {
            stickyHeader();
        });

})(window.jQuery);


(function($) {
  "use strict";
  $.fn.sliderResponsive = function(settings) {

    var set = $.extend(
      {
        slidePause: 5000,
        fadeSpeed: 1000,
        autoPlay: "on",
        showArrows: null,
        hideDots: null
      },
      settings
    );

    var $slider = $(this);
    var size = $slider.find("> div").length; //number of slides
    var position = 0; // current position of carousal
    var sliderIntervalID; // used to clear autoplay

    // Add a Dot for each slide
    $slider.append("<ul></ul>");
    $slider.find("> div").each(function(){
      $slider.find("> ul").append('<li></li>');
    });

    // Put .show on the first Slide
    $slider.find("div:first-of-type").addClass("show");

    // Put .showLi on the first dot
    $slider.find("li:first-of-type").addClass("showli")

     //fadeout all items except .show
    $slider.find("> div").not(".show").fadeOut();

    // If Autoplay is set to 'on' than start it
    if (set.autoPlay === "on") {
        startSlider();
    }

    // If showarrows is set to 'on' then don't autoHide them
    if (set.showArrows === "on") {
        $slider.addClass('showArrows');
    }

    // If hideDots is set to 'on' then hide them
    if (set.hideDots === "on") {
        $slider.addClass('hideDots');
    }

    // function to start auto play
    function startSlider() {
      sliderIntervalID = setInterval(function() {
        nextSlide();
      }, set.slidePause);
    }

    // on mouseover stop the autoplay
    $slider.mouseover(function() {
      if (set.autoPlay === "on") {
        clearInterval(sliderIntervalID);
      }
    });
    // on mouseout starts the autoplay
    $slider.mouseout(function() {
      if (set.autoPlay === "on") {
        startSlider();
      }
    });

    //on right button click
    $slider.find("> .right").click(nextSlide)

    //on left button click
    $slider.find("> .left").click(prevSlide);

    // Go to next slide
    function nextSlide() {
      console.log('--next--');
      console.log('currently at position ' + position);
      position = $slider.find(".show").index() + 1;
      if (position > size - 1) position = 0;
      console.log('moving to next position ' + position);
      changeCarousel(position);
    }

    // Go to previous slide
    function prevSlide() {
      console.log('--previous--');
      console.log('currently at position ' + position);
      position = $slider.find(".show").index() - 1;
      if (position < 0) position = size - 1;
      console.log('moving to previous position ' + position);
      changeCarousel(position);
    }

    //when user clicks slider button
    $slider.find(" > ul > li").click(function() {
      console.log('go to specific slide at index ' + $(this).index());
      position = $(this).index();
      changeCarousel($(this).index());
    });

    //this changes the image and button selection
    function changeCarousel() {
      $slider.find(".show").removeClass("show").fadeOut();
      $slider
        .find("> div")
        .eq(position)
        .fadeIn(set.fadeSpeed)
        .addClass("show");
      // The Dots
      $slider.find("> ul").find(".showli").removeClass("showli");
      $slider.find("> ul > li").eq(position).addClass("showli");
    }

    return $slider;
  };
})(jQuery);



//////////////////////////////////////////////
// Activate the sliders
//////////////////////////////////////////////
$(document).ready(function() {

  $("#slider1").sliderResponsive({
    // Using default everything
    // slidePause: 3000,
    // fadeSpeed: 500,
    // autoPlay: "on",
    // showArrows: "off",
    // hideDots: "off"
  });

  $("#slider2").sliderResponsive({
    fadeSpeed: 300,
    autoPlay: "off",
    showArrows: "on",
    hideDots: "off"
  });

});
