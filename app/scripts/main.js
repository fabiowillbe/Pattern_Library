'use strict';

window.typekitLoad( 'uns6pkh' );


$(document).ready(function() {

	$('.stiyleGuideLink a').tooltip();

    $('#bigtext').bigtext();
    $('#bigtextdue').bigtext();

	
	/**********************/
	/* NAVBAR - AFFIX TOP */
	/* Controlla la posizione della pagina per attivare classe .colored ad #utilityBar se #brandBar è affix */
	var checkScroll = $(window).scrollTop();
	var affixTrigger = $('#hero').height() - $('#utilityBar').outerHeight();
	if ( checkScroll > affixTrigger ) {
		$('#utilityBar').addClass('colored');
	}
		
	$('#brandBar').affix({
		offset: {
			top: $('#hero').height() - $('#utilityBar').outerHeight()
		}
	});
	$('#brandBar').on('affixed.bs.affix', function(){
		$('#utilityBar').addClass('colored');
		$('#main').css('padding-top', $('#utilityBar').outerHeight());
	});
	
	
	$('#brandBar').on('affixed-top.bs.affix', function(){
		$('#utilityBar').removeClass('colored');
		$('#main').css('padding-top', 0);
	});
	/* FINE - NAVBAR - AFFIX TOP */
	
	
	
	/**********************/
	/* PRODUCT TAB		  */
	$('#productTab a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});
	$('#featTab a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});
	/* FINE PRODUCT TAB   */
	/**********************/
	



	/**********************/
	/* OWL CAROUSEL		  */

	/*
	$('#owl-example').owlCarousel({
		 navigation : true, // Show next and prev buttons
		 slideSpeed : 300,
		 paginationSpeed : 400,
		 singleItem : true,
		 autoPlay : true,
		 navigationText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
	});

	*/
	var dragging = true;
	var owlElementID = '#owl-example';
	
	function fadeInReset() {
		if (!dragging) {
			$(owlElementID + ' .caption .fadeIn-1, ' + owlElementID + ' .caption .fadeIn-2, ' + owlElementID + ' .caption .fadeIn-3').stop().delay(800).animate({ opacity: 0 }, { duration: 400, easing: 'easeInCubic' });
		}
		else {
			$(owlElementID + ' .caption .fadeIn-1, ' + owlElementID + ' .caption .fadeIn-2, ' + owlElementID + ' .caption .fadeIn-3').css({ opacity: 0 });
		}
	}
	
	function fadeInDownReset() {
		if (!dragging) {
			$(owlElementID + " .caption .fadeInDown-1, " + owlElementID + " .caption .fadeInDown-2, " + owlElementID + " .caption .fadeInDown-3").stop().delay(800).animate({ opacity: 0, top: "-15px" }, { duration: 400, easing: "easeInCubic" });
		}
		else {
			$(owlElementID + " .caption .fadeInDown-1, " + owlElementID + " .caption .fadeInDown-2, " + owlElementID + " .caption .fadeInDown-3").css({ opacity: 0, top: "-15px" });
		}
	}
	
	function fadeInUpReset() {
		if (!dragging) {
			$(owlElementID + " .caption .fadeInUp-1, " + owlElementID + " .caption .fadeInUp-2, " + owlElementID + " .caption .fadeInUp-3").stop().delay(800).animate({ opacity: 0, top: "15px" }, { duration: 400, easing: "easeInCubic" });
		}
		else {
			$(owlElementID + " .caption .fadeInUp-1, " + owlElementID + " .caption .fadeInUp-2, " + owlElementID + " .caption .fadeInUp-3").css({ opacity: 0, top: "15px" });
		}
	}
	
	function fadeInLeftReset() {
		if (!dragging) {
			$(owlElementID + " .caption .fadeInLeft-1, " + owlElementID + " .caption .fadeInLeft-2, " + owlElementID + " .caption .fadeInLeft-3").stop().delay(800).animate({ opacity: 0, left: "15px" }, { duration: 400, easing: "easeInCubic" });
		}
		else {
			$(owlElementID + " .caption .fadeInLeft-1, " + owlElementID + " .caption .fadeInLeft-2, " + owlElementID + " .caption .fadeInLeft-3").css({ opacity: 0, left: "15px" });
		}
	}
	
	function fadeInRightReset() {
		if (!dragging) {
			$(owlElementID + " .caption .fadeInRight-1, " + owlElementID + " .caption .fadeInRight-2, " + owlElementID + " .caption .fadeInRight-3").stop().delay(800).animate({ opacity: 0, left: "-15px" }, { duration: 400, easing: "easeInCubic" });
		}
		else {
			$(owlElementID + " .caption .fadeInRight-1, " + owlElementID + " .caption .fadeInRight-2, " + owlElementID + " .caption .fadeInRight-3").css({ opacity: 0, left: "-15px" });
		}
	}
	
	function fadeIn() {
		$(owlElementID + " .active .caption .fadeIn-1").stop().delay(500).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
		$(owlElementID + " .active .caption .fadeIn-2").stop().delay(700).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
		$(owlElementID + " .active .caption .fadeIn-3").stop().delay(1000).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
	}
	
	function fadeInDown() {
		$(owlElementID + " .active .caption .fadeInDown-1").stop().delay(500).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
		$(owlElementID + " .active .caption .fadeInDown-2").stop().delay(700).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
		$(owlElementID + " .active .caption .fadeInDown-3").stop().delay(1000).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
	}
	
	function fadeInUp() {
		$(owlElementID + " .active .caption .fadeInUp-1").stop().delay(500).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
		$(owlElementID + " .active .caption .fadeInUp-2").stop().delay(700).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
		$(owlElementID + " .active .caption .fadeInUp-3").stop().delay(1000).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
	}
	
	function fadeInLeft() {
		$(owlElementID + " .active .caption .fadeInLeft-1").stop().delay(500).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
		$(owlElementID + " .active .caption .fadeInLeft-2").stop().delay(700).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
		$(owlElementID + " .active .caption .fadeInLeft-3").stop().delay(1000).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
	}
	
	function fadeInRight() {
		$(owlElementID + " .active .caption .fadeInRight-1").stop().delay(500).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
		$(owlElementID + " .active .caption .fadeInRight-2").stop().delay(700).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
		$(owlElementID + " .active .caption .fadeInRight-3").stop().delay(1000).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
	}
	
	$(owlElementID).owlCarousel({
		
		autoPlay: 5000,
		stopOnHover: true,
        navigation: true,
		pagination: true,
		singleItem: true,
		addClassActive: true,
        transitionStyle: 'fade',
        //navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        navigationText: ['<i class="icon-left-open"></i>', '<i class="icon-right-open"></i>'],
			
    	afterInit: function() {
        	fadeIn();
        	fadeInDown();
        	fadeInUp();
        	fadeInLeft();
        	fadeInRight();
    	},
		
    	afterMove: function() {
        	fadeIn();
			fadeInDown();
        	fadeInUp();
        	fadeInLeft();
        	fadeInRight();
    	},
		
    	afterUpdate: function() {
        	fadeIn();
			fadeInDown();
        	fadeInUp();
        	fadeInLeft();
        	fadeInRight();
    	},
		
    	startDragging: function() {
			dragging = true;
    	},
		
    	afterAction: function() {
        	fadeInReset();
			fadeInDownReset();
			fadeInUpReset();
        	fadeInLeftReset();
        	fadeInRightReset();
			dragging = false;
    	}
		
    });
	
	if ($(owlElementID).hasClass('owl-one-item')) {
		$(owlElementID + '.owl-one-item').data('owlCarousel').destroy();
	}
	
	$(owlElementID + '.owl-one-item').owlCarousel({
		singleItem: true,
		navigation: false,
		pagination: false
	});
	
	$('#transitionType li a').click(function () {
		
		$('#transitionType li a').removeClass('active');
		$(this).addClass('active');
		
		var newValue = $(this).attr('data-transition-type');
		
		$(owlElementID).data('owlCarousel').transitionTypes(newValue);
		$(owlElementID).trigger('owl.next');
		
		return false;
		
	});
	
		
	$('.slider-next').click(function () {
		owl.trigger('owl.next');
	})
	
	$('.slider-prev').click(function () {
		owl.trigger('owl.prev');
	})


	/* FINE OWL CAROUSEL  */
	/**********************/

	/**********************/
	/*  ISOTOPE PRODUCT   */
	var $container = $('.items');
	
	var resizeTimer;
	
	function resizeFunction() {
		$container.isotope('layout');
	}
	
	$(window).resize(function() {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(resizeFunction, 100);
	});
	
	$('#isotopeProduct .isotope-filter li a').click(function () {
		$('.isotope-filter li a').removeClass('active');
		$(this).addClass('active');
		
		var selector = $(this).attr('data-filter');
	
		$container.isotope({
			filter: selector
		});
		
		return false;
		
	});
	/* END ISOTOPE PRODUCT */
	/***********************/

	/**********************/
	/*  SearchOverlay     */
	$('a.itemSearchBtn').click(function (e) {
		e.preventDefault();
		$('.itemSearchOverlayBox').fadeIn(300, 'easeInCubic');
	});

	$('a.itemSearchOverlayCloseBtn').click(function (e) {
		e.preventDefault();
		$('.itemSearchOverlayBox').fadeOut(300, 'easeInCubic');
	});
	
	
	
	/**********************/
	/*  MixItUp Product   */
	$('#mixItUpProduct').mixItUp();
	
	
	
	
});