var breakpoint = 768;

$.fn.parallax = function(strength, offset) {
	if (this.length != 0) {
		if (!$.isNumeric(offset)) { offset = 0;	}
		if ( $(window).width() > breakpoint  ) {
			if ( this[0].offsetTop < ( $(window).scrollTop() + $(window).height() )) {
	 		   this.css('transform', 'translateY(' + Math.round( ( $(window).scrollTop() - this[0].offsetTop ) * strength + offset ) +'px)');
			}
		} else {
		    this.css('transform', '');
		}
	}
};

$(window).on('scroll load', function() {
	$('.block.hero .inner .cover-image').parallax(0.2, -260);
	$('.block.experimensen .inner .cover-image').parallax(0.1, -200);
	$('.block.book .inner .cover-image').parallax(0.1, -200);
	$('.block.media .inner .cover-image').parallax(0.1, -500);
	$('.block.contact .inner .cover-image').parallax(0.1, -420);
});