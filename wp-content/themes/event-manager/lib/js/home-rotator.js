
// Carousel
jQuery(document).ready (function(){

	jQuery("#tS2").thumbnailScroller({
		scrollerType:"clickButtons",
		scrollerOrientation:"horizontal",
		scrollSpeed:800,
		scrollEasing:"linear",
		scrollEasingAmount:600,
		acceleration:4,
		noScrollCenterSpace:10,
		autoScrolling:0,
		autoScrollingSpeed:25000,
		autoScrollingEasing:"linear",
		autoScrollingDelay:5000
	});

	jQuery('.jTscrollerPrevButton').hide();
	jQuery('.jTscrollerNextButton').hide();

	jQuery('#home-rotator').hover(function  () {
		jQuery('.jTscrollerPrevButton, .jTscrollerNextButton').stop(true,true).fadeIn();
	}, function() {
		jQuery('.jTscrollerPrevButton, .jTscrollerNextButton').fadeOut();
	});

	var $ = jQuery;
	$(window).resize(function() {
		var $this=$(this);
		var $scrollerContainer=$(".jTscrollerContainer");
		var $scroller=$this.children(".jTscrollerContainer").children(".jTscroller");

		var totalWidth=$scroller.outerWidth(true);
		if ($this.innerWidth < totalWidth) {
			$scrollerContainer.css("width",$this.innerWidth);
		}
	});

});

