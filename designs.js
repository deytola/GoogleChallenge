// Select color input
var paint = $('#colorPicker').val();
// Select size input
var N = $('#inputHeight').val();
var M = $('#inputWidth').val();
// When size is submitted by the user, call makeGrid()
$(document).ready(function() {
	$('#sizePicker').submit(function makeGrid(grid) {
    $('table tr').remove();
// Your code goes here!
	for (var i = 1; i <= N; i++){
		$('table').append('<tr></tr>');
			for (var j = 1; j <= M; j++){
				$('tr:last').append('<td></td>');
				$('td').attr("class", 'cells');
			}
	}
   grid.preventDefault();

 $('.cells').click(function(event){
	$(event.target).css('background-color', paint);
    });
  });
});
