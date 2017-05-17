var $frame = $(".primeImg");
var	$thumbs = $(".thumbs a");

$(document).on('click', '.thumbs a', function(clicked){
	var $select;
	
	clicked.preventDefault();
	$select = $('<img/>');
	
	$thumbs.removeClass('active');
	$(this).addClass('active');
	
	$select.attr({
		'src': this.href,
		'alt': this.title ||''
	});
	
	$frame.empty().append($select);
});

$('.thumbs .active').eq(0).click();