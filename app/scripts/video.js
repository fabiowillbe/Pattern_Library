'use strict';

var vid_w_orig;
var vid_h_orig;

function isMobile() {
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    return true;
  }
  else {
    return false;
  }
}

jQuery.fn.exists = function(){return this.length>0;}

function supportsVideo() {
	var elem = document.createElement('video'),
		bool = false;

	// IE9 Running on Windows Server SKU can cause an exception to be thrown, bug #224
	try {
		if ( bool = !!elem.canPlayType ) {
			bool      = new Boolean(bool);
			bool.ogg  = elem.canPlayType('video/ogg; codecs="theora"');

			// Workaround required for IE9, which doesn't report video support without audio codec specified.
			//   bug 599718 @ msft connect
			var h264 = 'video/mp4; codecs="avc1.42E01E';
			bool.h264 = elem.canPlayType(h264 + '"') || elem.canPlayType(h264 + ', mp4a.40.2"');

			bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"');
		}

	} catch(e) { }

	return bool;
}



jQuery(window).load(function() {
	videoBG();
});



jQuery(document).ready(function ($) {

	
	
	// VIMEO POP-UP
	
	$('#play-button').on('click', function(e) {
		
		var videoContainer = $('#vimeo-container');
		
		//videoContainer.prepend('<iframe src="//player.vimeo.com/video/95033884?title=0&byline=0&portrait=0&color=ff4242&autoplay=1" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
		videoContainer.prepend('<iframe width="560" height="315" src="//www.youtube.com/embed/VobEPIGIomk?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
		resizeVimeoToCover();
		
		videoContainer.css({'z-index':'100000','background':'#101010'}).fadeIn(300);
		
		$('#vimeo-controls').fadeIn(900);
		$('#center-control').fadeOut(700);
		e.preventDefault();
	});
	
	function bringCanvas() {
		$('#vimeo-controls').fadeOut(300);
		$('#vimeo-container').fadeOut(400, function() {
			$(this).html('').css({'z-index':-9999,'display':'none','background':'transparent'});
		});
		
		var windowWidth = $(window).width();
	}
	$('#close-vimeo').on('click', function(e) {
		bringCanvas();
		$('#center-control').fadeIn(200);
	});
	
	jQuery(function() { // runs after DOM has loaded
		
		jQuery(window).resize(function () { resizeVimeoToCover(); });
		jQuery(window).trigger('resize');
		
		//window.addEventListener("orientationchange", function() {resizeToCover();}, false);
	});

	function resizeVimeoToCover() {
		
		// Window Height
		var targetHeight = jQuery(window).height();
		
		// set the video viewport to the window size
		jQuery('#vimeo-container').width(jQuery(window).width());
		jQuery('#vimeo-container').height(targetHeight);
		
		var videoContainer = $('#vimeo-container');
		var videoEmbed = videoContainer.find('iframe');
		
		if (videoEmbed.exists()) {
			videoEmbed.width(videoContainer.width())
			videoEmbed.height(videoContainer.height());
		}
	}
	
	
});

function resizeToCover() {
	
	var vidContainer = $('#video-right-container');
	var vidContainerTwo = $('.video-right-container');
	// set the video viewport to the window size
	jQuery('#video-container').width(vidContainerTwo.width());
	jQuery('#video-container').height(vidContainerTwo.height());
	
	// use largest scale factor of horizontal/vertical
	var scale_h = vidContainerTwo.width() / vid_w_orig;
	var scale_v = vidContainerTwo.height() / vid_h_orig;
	var scale = scale_h > scale_v ? scale_h : scale_v;
	//var scale = scale_h;
	
	// don't allow scaled width < minimum video width
	//if (scale * vid_w_orig < min_w) {scale = min_w / vid_w_orig;};
	
	// now scale the video
	jQuery('video').width(scale * vid_w_orig);
	jQuery('video').height(scale * vid_h_orig);
	
	// and center it by scrolling the video viewport
	jQuery('#video-container').scrollLeft((jQuery('video').width() - vidContainerTwo.width()) / 2);
	jQuery('#video-container').scrollTop((jQuery('video').height() - vidContainerTwo.height()) / 2);
	
	// debug output
	/*
	jQuery('#debug').html("<p>win_w: " + vidContainer.width() + "</p>");
	jQuery('#debug').append("<p>win_h: " + vidContainer.height() + "</p>");
	jQuery('#debug').append("<p>viewport_w: " + jQuery('#video-container').width() + "</p>");
	jQuery('#debug').append("<p>viewport_h: " + jQuery('#video-container').height() + "</p>");
	jQuery('#debug').append("<p>video_w: " + jQuery('video').width() + "</p>");
	jQuery('#debug').append("<p>video_h: " + jQuery('video').height() + "</p>");
	jQuery('#debug').append("<p>vid_w_orig: " + vid_w_orig + "</p>");
	jQuery('#debug').append("<p>vid_h_orig: " + vid_h_orig + "</p>");
	jQuery('#debug').append("<p>scale: " + scale + "</p>");
	*/
	
};

// VIDEO BACKGROUND
function videoBG() {
	
	var video = $('#lexi-video');
	if ($('#lexi-video').exists()) {
		if (supportsVideo()) {
          
          if (isMobile()) {
          	$('#video-container').html('').addClass('mobile');
          }
          else {
            video.get(0).play();
          }
      
		}
      else {
      }
		jQuery(function() { // runs after DOM has loaded
			
			$('#debug').append("<p>DOM loaded</p>");
			
			vid_w_orig = parseInt(jQuery('video').attr('width'));
			vid_h_orig = parseInt(jQuery('video').attr('height'));
			
			jQuery(window).resize(function () { resizeToCover(); });
			jQuery(window).trigger('resize');
			
			//window.addEventListener("orientationchange", function() {resizeToCover();}, false);
		});
	
	}

}