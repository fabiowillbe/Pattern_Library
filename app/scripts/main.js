'use strict';

$(document).ready(function() {


/**/	$('#bigtext').bigtext();
	
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
	});
	
	
	$('#brandBar').on('affixed-top.bs.affix', function(){
		$('#utilityBar').removeClass('colored');
	});
	/* FINE - NAVBAR - AFFIX TOP */
	
	
	
	/**********************/
	/* PRODUCT TAB		  */
	$('#productTab a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});
	/* FINE PRODUCT TAB   */
	/**********************/
	
	
	$('#owl-example').owlCarousel({
		 navigation : true, // Show next and prev buttons
		 slideSpeed : 300,
		 paginationSpeed : 400,
		 singleItem : true,
		 autoPlay : true
	});
	
	
});