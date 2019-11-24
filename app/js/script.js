$(document).ready(function () {

// nice select
//$('.select-beauty').niceSelect();
// nice select === end


// fix top-menu
var shrinkHeader = 250;
var head = $('.header');
var heightHeader = head.height();
$(window).scroll(function() {
	var scroll = $(this).scrollTop();
	if ( scroll >= shrinkHeader ) {
			$('body').css('paddingTop',heightHeader);
			head.addClass('shrink');
		}
		else {
				$('body').css('paddingTop',0);
				head.removeClass('shrink');
		}
});

$(window).resize(function(){
	heightHeader=head.height();
});
// fix top-menu === end

});
