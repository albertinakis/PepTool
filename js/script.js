$(function() {
	var rangePercent = $('[type="range"]').val();

	$('[type="range"]').on('change input', function() {
		rangePercent = $('[type="range"]').val();
		$('h4').text(rangePercent);
		$('[type="range"]').css('filter', 'hue-rotate(-' + rangePercent + 'deg)');
	});
});

/*
$(function() {
	var rangePercent = $('[type="range"]').val();
  var rangeLifetime = $('[type="lifetime"]').val();

	$('[type="range"]').on('change input', function() {
		rangePercent = $('[type="range"]').val();
		$('h4').text(rangePercent);
		$('[type="range"]').css('filter', 'hue-rotate(-' + rangePercent + 'deg)');
	});

  $('[type="lifetime"]').on('change input', function() {
		rangeLifetime = $('[type="lifetime"]').val();
		$('h4').text(rangeLifetime);
		$('[type="lifetime"]').css('filter', 'hue-rotate(-' + rangeLifetime + 'deg)');
	});

});
*/
