/*price range*/

 $('#sl2').slider();

	var RGBChange = function() {
	  $('#RGB').css('background', 'rgb('+r.getValue()+','+g.getValue()+','+b.getValue()+')')
	};

/*scroll to top*/
$(window).load(function() {
  $('.flexslider').flexslider({
  animation: "slide",
  controlNav: "thumbnails"
  });
});


$(document).ready(function(){
	$(function () {
		$.scrollUp({
	        scrollName: 'scrollUp', // Element ID
	        scrollDistance: 300, // Distance from top/bottom before showing element (px)
	        scrollFrom: 'top', // 'top' or 'bottom'
	        scrollSpeed: 300, // Speed back to top (ms)
	        easingType: 'linear', // Scroll to top easing (see http://easings.net/)
	        animation: 'fade', // Fade, slide, none
	        animationSpeed: 200, // Animation in speed (ms)
	        scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
					//scrollTarget: false, // Set a custom target element for scrolling to the top
	        scrollText: '<i class="fa fa-angle-up"></i>', // Text for element, can contain HTML
	        scrollTitle: false, // Set a custom <a> title if required.
	        scrollImg: false, // Set true to use image
	        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	        zIndex: 2147483647 // Z-Index for the overlay
		});
	});
});



$(document).ready(function(){

	// Change Price with Size
	$("#selSize").change(function(){
		var idsize = $(this).val();
		if(idsize==""){
			return false;
		}
		$.ajax({
			type:'get',
			url:'/get-product-price',
			data:{idsize:idsize},
			success:function(resp){
				var arr = resp.split('#');
				$("#getPrice").html("INR "+arr[0]);
				$("#price").val(arr[0]);
				if(arr[1]==0){
					$("#cartButton").hide();
					$("#Availability").text("Out Of Stock");
				}else{
					$("#cartButton").show();
					$("#Availability").text("In Stock");
				}


			},error:function(){
				alert("Error");
			}
		});
	});

	// Change Image
	$(".changeImage").click(function(){
		var image = $(this).attr('src');
		$("#mainImg").attr("src", image);
		/*$("#mainImgLarge").attr("href", image);*/
	});

	// Instantiate EasyZoom instances
        var $easyzoom = $('.easyzoom').easyZoom();

        // Setup thumbnails example
        var api1 = $easyzoom.filter('.easyzoom--with-thumbnails').data('easyZoom');

        $('.thumbnails').on('click', 'a', function(e) {
            var $this = $(this);

            e.preventDefault();

            // Use EasyZoom's `swap` method
            api1.swap($this.data('standard'), $this.attr('href'));
        });

        // Setup toggles example
        var api2 = $easyzoom.filter('.easyzoom--with-toggle').data('easyZoom');

        $('.toggle').on('click', function() {
            var $this = $(this);

            if ($this.data("active") === true) {
                $this.text("Switch on").data("active", false);
                api2.teardown();
            } else {
                $this.text("Switch off").data("active", true);
                api2._init();
            }
        });

});


$().ready(function(){
	// Validate Register form on keyup and submit
	$("#registerForm").validate({
		rules:{
			name:{
				required:true,
				minlength:2,
				accept: "[a-zA-Z]+"
			},
			password:{
				required:true,
				minlength:6
			},
			email:{
				required:true,
				email:true,
				remote:"/check-email"
			}
		},
		messages:{
			name:{
				required:"Please enter your Name",
				minlength: "Your Name must be atleast 2 characters long",
				accept: "Your Name must contain letters only"
			},
			password:{
				required:"Please provide your Password",
				minlength: "Your Password must be atleast 6 characters long"
			},
			email:{
				required: "Please enter your Email",
				email: "Please enter valid Email",
				remote: "Email already exists!"
			}
		}
	});

	// Validate Register form on keyup and submit
	$("#accountForm").validate({
		rules:{
			name:{
				required:true,
				minlength:2,
				accept: "[a-zA-Z]+"
			},
			address:{
				required:true,
				minlength:6
			},
			city:{
				required:true,
				minlength:2
			},
			state:{
				required:true,
				minlength:2
			},
			country:{
				required:true
			}
		},
		messages:{
			name:{
				required:"Please enter your Name",
				minlength: "Your Name must be atleast 2 characters long",
				accept: "Your Name must contain letters only"
			},
			address:{
				required:"Please provide your Address",
				minlength: "Your Address must be atleast 10 characters long"
			},
			city:{
				required:"Please provide your City",
				minlength: "Your City must be atleast 2 characters long"
			},
			state:{
				required:"Please provide your State",
				minlength: "Your State must be atleast 2 characters long"
			},
			country:{
				required:"Please select your Country"
			},
		}
	});

	// Validate Login form on keyup and submit
	$("#loginForm").validate({
		rules:{
			email:{
				required:true,
				email:true
			},
			password:{
				required:true
			}
		},
		messages:{
			email:{
				required: "Please enter your Email",
				email: "Please enter valid Email"
			},
			password:{
				required:"Please provide your Password"
			}
		}
	});

	$("#passwordForm").validate({
		rules:{
			current_pwd:{
				required: true,
				minlength:6,
				maxlength:20
			},
			new_pwd:{
				required: true,
				minlength:6,
				maxlength:20
			},
			confirm_pwd:{
				required:true,
				minlength:6,
				maxlength:20,
				equalTo:"#new_pwd"
			}
		},
		errorClass: "help-inline",
		errorElement: "span",
		highlight:function(element, errorClass, validClass) {
			$(element).parents('.control-group').addClass('error');
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).parents('.control-group').removeClass('error');
			$(element).parents('.control-group').addClass('success');
		}
	});

	// Check Current User Password
	$("#current_pwd").keyup(function(){
		var current_pwd = $(this).val();
		$.ajax({
			headers: {
			        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
			    },
			type:'post',
			url:'/check-user-pwd',
			data:{current_pwd:current_pwd},
			success:function(resp){
				/*alert(resp);*/
				if(resp=="false"){
					$("#chkPwd").html("<font color='red'>Current Password is incorrect</font>");
				}else if(resp=="true"){
					$("#chkPwd").html("<font color='green'>Current Password is correct</font>");
				}
			},error:function(){
				alert("Error");
			}
		});
	});

	// Password Strength Script
	$('#myPassword').passtrength({
      minChars: 4,
      passwordToggle: true,
      tooltip: true,
      eyeImg : "/images/frontend_images/eye.svg"
    });

    // Copy Billing Address to Shipping Address Script
    $("#copyAddress").click(function(){
    	if(this.checked){
    		$("#shipping_name").val($("#billing_name").val());
    		$("#shipping_address").val($("#billing_address").val());
    		$("#shipping_city").val($("#billing_city").val());
    		$("#shipping_state").val($("#billing_state").val());
    		$("#shipping_pincode").val($("#billing_pincode").val());
    		$("#shipping_mobile").val($("#billing_mobile").val());
    		$("#shipping_country").val($("#billing_country").val());
    	}else{
    		$("#shipping_name").val('');
    		$("#shipping_address").val('');
    		$("#shipping_city").val('');
    		$("#shipping_state").val('');
    		$("#shipping_pincode").val('');
    		$("#shipping_mobile").val('');
    		$("#shipping_country").val('');
    	}
    });



    // design from my design





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

function selectPaymentMethod(){
	if($('#Paypal').is(':checked') || $('#COD').is(':checked')){
		/*alert("checked");*/
	}else{
		alert("Please select Payment Method");
		return false;
	}
}
