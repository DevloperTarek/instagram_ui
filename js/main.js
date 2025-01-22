(function ($) {
"use strict";



// One Page Nav
// var top_offset = $('.header-area').height() - 10;
// $('.main-menu nav ul').onePageNav({
// 	currentClass: 'active',
// 	scrollOffset: top_offset,
// });


$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll > 150) {
		$("#stikcy-header").addClass("sticky");
	} else {
		$("#stikcy-header").removeClass("sticky");
	}
});
/* magnificPopup img view */
$('.team-member-img').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.video-popup-button').magnificPopup({
	type: 'iframe'
});
	$('.team-member-carousel').owlCarousel({
	loop:true,// ইনফিনিট লুপ চালু
	items:4,
    margin: 30, // আইটেমের মধ্যে ব্যবধান
    autoplay: true, // স্বয়ংক্রিয় চলা
    autoplayTimeout: 1500, // প্রতি স্লাইড ৩ সেকেন্ড ধরে
    autoplaySpeed: 1000, // ধীরগতির ট্রানজিশন
    //smartSpeed: 1000, // স্মার্ট ট্রানজিশন
    slideBy: 1, // একবারে একটি আইটেম স্লাইড হবে
    dots: true, // ডটস লুকানো
    nav: false, // নেভিগেশন লুকানো
    stagePadding: 0, // গ্যাপ বন্ধ করা
    responsive: {
      0: {
        items: 1 // মোবাইলে ১টি আইটেম
      },
      600: {
        items: 2 // ট্যাবলেটে ৩টি আইটেম
      },
      1000: {
        items: 4 // ডেস্কটপে ৫টি আইটেম
      }
    }
	});
// mainSlider
function mainSlider() {
	var BasicSlider = $('');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: false,
		autoplaySpeed: 10000,
		dots: false,
		fade: true,
		arrows: false,
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();
// isotop
$('.grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.grid-item',
	  }
	});
});

// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});




// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="ri ri-arrow-up-line"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// counter up 
$('.counter').counterUp({
   delay: 90,
   time: 2000
});

// WOW active
new WOW().init();


})(jQuery);