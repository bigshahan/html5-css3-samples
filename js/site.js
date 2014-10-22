$(function() {
	var count = 0;

	$('#press-me').click(function() {
		if (count > 3) {
			$('#press-me').addClass('btn-jitter');
		}

		if (count > 7) {
			$('#press-me').removeClass('btn-yellow').addClass('btn-red');
		}

		console.log(count);

		count++;
	});
});