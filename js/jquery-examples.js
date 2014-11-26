// css3 selectors
// jquery handlers
// fadeIn
// fadeOut
// scroll

$(function() {


	// css3 selectors
	$('ul.cool-list li').click(function(e) {
		var button = $(e.target).text();

		if (button === "List 1") {
			$('#section1').fadeIn();
			$('#section1').addClass('btn-jitter');
			$('#section2').fadeOut();
			$('#section3').fadeOut();
		} else if (button === "List 2") {
			$('#section2').fadeIn();
			$('#section1').fadeOut();
			$('#section3').fadeOut();
		} else if (button === "List 3") {
			$('#section3').fadeIn();
			$('#section1').fadeOut();
			$('#section2').fadeOut();
		}
	});

	// make sure only section 1 shows
	$('#section1').fadeIn();
	$('#section2').hide();
	$('#section3').hide();

	// 
});