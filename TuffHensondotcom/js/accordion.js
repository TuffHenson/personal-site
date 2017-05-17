/*This code creates a menu which will expand when the title is clicked*/

$('.accordion').on('click', '.accordion-btn', function(clicked){
	
	clicked.preventDefault();
	$(this)
		.next('.accordion-panel')
		.not(':animated')
		.slideToggle();
		
});