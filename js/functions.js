(function($)
{
	"use strict"

	/* Event - Window Scroll */
	$(window).scroll(function()
	{
		var scroll	=	$(window).scrollTop();
		var height	=	$(window).height();

		/*** set sticky menu ***/
		if( scroll >= 95 )
		{
			$('.header-section').addClass("navbar-fixed-top").delay( 2000 ).fadeIn();
			$('.header-sidebar').addClass("navbar-fixed-top").delay( 1000 ).fadeIn();
		}
		else if ( scroll <= height )
		{
			$('.header-section').removeClass("navbar-fixed-top");
			$('.header-sidebar').removeClass("navbar-fixed-top");
		}
		else
		{
			$('.header-section').removeClass("navbar-fixed-top");
			$('.header-sidebar').removeClass("navbar-fixed-top");
		} // set sticky menu - end

		if ($(this).scrollTop() >= 50)
		{
			// If page is scrolled more than 50px
			$('#back-to-top').fadeIn(500);    // Fade in the arrow
		}
		else
		{
			$('#back-to-top').fadeOut(500);   // Else fade out the arrow
		}
	});

	/* Event - Window Scroll /- */
	$('#back-to-top').on('click', function()
	{
		// When arrow is clicked
		$('body,html').animate(
		{
			scrollTop : 0 // Scroll to top of body
		},800);
	});

	/* Header Slider Section */
	$('.slider-section').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.slider-section .container .carousel-caption').addClass('animated fadeInLeft');
		});
	});

	/* About Section */
	$('.about-section > .section-header').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.about-section > .section-header').addClass('animated fadeInRight');
		});
	});

	$('.about-section > .container').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.about-section > .container').addClass('animated fadeInLeft');
		});
	});

	/* Statistics Section */
	$('.statistics-section').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('#statistics-participants').animateNumber({ number: 500 }, 1000);
			$('#statistics-sessions').animateNumber({ number: 4 }, 1000);
			$('#statistics-speakers').animateNumber({ number: 16 }, 1000);
			$('#statistics-hours').animateNumber({ number: 4 }, 1000);
		});
	});

	/* Places Section */
	$('.places-section').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.places-section > .places-title').addClass('animated fadeInRight');
			$('.places-section > .btn').addClass('animated fadeInLeft');
		});
	});

	/* Testimonials Section */
	$('.testimonials-section').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.testimonials-section .item-inner img').addClass('animated fadeInUp');
			$('.testimonials-section .item-inner .carousel-caption').addClass('animated fadeInDown');
		});
	});

	/* Trainers Section */
	$('.trainers-section').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.trainers-section > .section-header').addClass('animated fadeInRight');
			$('.trainers-section .container .trainer-inner').addClass('animated fadeInLeft rollIn');
		});
	});

	/* Program Section */
	$('.program-section').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.program-section > .section-header').addClass('animated fadeInRight');
			$('.program-section .container .program').addClass('animated fadeInLeft');
		});
	});

	/* Pricing Table Section */
	$('.pricing-table-section').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.pricing-table-section .container .col-md-4:nth-child(1)').addClass('animated fadeInLeft');
			$('.pricing-table-section .container .col-md-4:nth-child(2)').addClass('animated fadeInUp');
			$('.pricing-table-section .container .col-md-4:nth-child(3)').addClass('animated fadeInRight');
		});
	});

	/* Highlights Section */
	$('.highlights-section').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.highlights-section > .section-header').addClass('animated fadeInRight');
			$('.highlights-section .container .gallery-main .gallery').addClass('animated fadeInRight rollIn');
		});
	});

	/* Highlights Section */
	$('.subscribe-section').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.subscribe-section .container .subscribe-title').addClass('animated fadeInRight');
		});
	});

	/* Contact Section */
	$('.contact-section').each(function ()
	{
		var $this = $(this);
		var myVal = $(this).data("value");

		$this.appear(function()
		{
			$('.contact-section .container .contact-form').addClass('animated fadeInDown');
		});
	});


	/* Event - Document Ready /- */
	$(document).ready(function($)
	{
		var scroll	=	$(window).scrollTop();
		var height	=	$(window).height();

		/*** set sticky menu ***/
		if( scroll >= 95 )
		{
			$('.header-section').addClass("navbar-fixed-top").delay( 2000 ).fadeIn();
		}
		else if ( scroll <= height )
		{
			$('.header-section').removeClass("navbar-fixed-top");
		}
		else
		{
			$('.header-section').removeClass("navbar-fixed-top");
		} // set sticky menu - end

		$('.navbar-nav li a, .logo-block a').on('click', function (event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - 120
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});

		/* Window Hight Set to Elements /- */
		var window_height = $(window).height();
		var window_width = $(window).width();

		$("#sponsors").owlCarousel(
		{
			autoPlay: 3000, //Set AutoPlay to 3 seconds

			items : 4,
			itemsDesktop : [1199,4],
			itemsDesktopSmall : [979,3],
			navigation : false,
			pagination: false
		});

		/* Menu toggled */
		$("#menu-button").on('click',function(e)
		{
			e.preventDefault();
			$(".header-sidebar").toggleClass("toggled");
			$(".menu-button").addClass("menu-button-remove")
			$(".header-sidebar").addClass("animate fadeInLeft");

		});
		/* Close Menu Bar */
		$(".close-btn").on('click', function(e)
		{
			e.preventDefault();
			$(".header-sidebar").removeClass("toggled");
			$(".menu-button").removeClass("menu-button-remove")
			$(".header-sidebar").addClass("animate fadeInRight");
		});

		// Header Sidebar

		var cw = $('.slider-section').height() +  $('.slider-section > .container').height() + 83;
		$("#header-sidebar").css("height", cw + "px"); // set height to splash banner


		/* Lightbox for Highlights Gallery	*/
		$('.gallery-main').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			}
		});

	});
	/* document.ready /- */

	/* Event - Window Resize /- */
	$(window).resize(function()
	{
		/* Window Hight Set to Elements /- */
		var window_height = $(window).height();
		var window_width = $(window).width();

		// Header Sidebar
		var cw = $('.slider-section').height() +  $('.slider-section > .container').height() + 83;
		$("#header-sidebar").css("height", cw + "px"); // set height to splash banner

	});

	/* Event - Window Resize /- */

	var $itemsHolder = $('.portfolio-list');
	var $itemsClone = $itemsHolder.clone();
	var $filterClass = "";
	$('.portfolio-categories li').on('click', function(e)
	{
		e.preventDefault();
		$filterClass = $(this).attr('data-value');
		if($filterClass == 'all')
		{
			var $filters = $itemsClone.find('li');
		}
		else
		{
			var $filters = $itemsClone.find('li[data-type='+ $filterClass +']');
		}
		$itemsHolder.quicksand(
		$filters,
		{
			duration: 1000
		});
	});

/* Event - Window Load */
$(window).load(function()
{
	/* Loader */
	$("#site-loader").delay(2000).fadeOut("slow");
});
/* Event - Window Load /- */

})(jQuery);

