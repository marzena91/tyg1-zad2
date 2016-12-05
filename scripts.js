(function() {
	$(document).ready(function($) {
		
		$('.grid.grid-12').css('color', '#FFD700').css('border', 'solid 10px #000000');

		$('.nav a[href^="http"]').css('color', 'green').css('border', 'solid 10px #000000');
		
		$('input:radio, input:checkbox').not(':checked').addClass('taadaam');
		
		$('#text p:empty:first').css('background', '#FFD700').css('border', 'solid 10px #000000');
		
		$('.pagination-item:not(span)').css('color', '#FFD700').css('border', 'solid 10px #000000');

	});
})();