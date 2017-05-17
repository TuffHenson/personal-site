$('.slider').each(function(){
	var $this = $(this);
	var $slides = $this.find('.slide');
	var $group = $this.find('.group');
	var buttons = [];
	var current = 0;
	var timeout;
	
// 	Pass jQuery object that is the container of your slides,
//	Will then delete first slide and append it to the back
//	rotating the last element to the back
	function rotate($slidey){
		var $tempo = $slidey.get(0).cloneNode(true);
		$group.find('.current1').remove();
		$group.append($tempo);
		$slides = $this.find('.slide');
	}

//	Rotates in the opposite direction, 
//	for when the user clicks the scroll left button
	function rotateOpp($slidey){
		var $tempo = $slidey.get($slidey.length - 1).cloneNode(true);
		var namey = $slidey.get($slidey.length - 1).id;
		var stringy = "#" + namey;
		$group.find(stringy).remove();
		$group.prepend($tempo);
		$slides = $this.find('.slide'); 
	}
	
	function move(type){
		var animateLeft, slideLeft;
		
		advance();
		
		if($group.is(':animated') ){
			return;
		}
		if(type === true){
			slideLeft = '32%';
			animateLeft = '-32%';
			$group.animate({left: animateLeft}, function(){
				rotate($slides);
				$slides.eq($slides.length-1).removeClass('current1');
				$slides.eq(0).css({left:0}).addClass('current1').removeClass('current2');
				$slides.eq(1).addClass('current2').removeClass('current3');
				$slides.eq(2).addClass('current3');
				$group.css({left:0});
			
			});
		}else{
			slideLeft = '-32%';
			animateLeft = '32%';
			$group.animate({left: animateLeft}, function(){
				rotateOpp($slides);
				$slides.eq(0).css({left:0}).addClass('current1');
				$slides.eq(1).addClass('current2').removeClass('current1');
				$slides.eq(2).addClass('current3').removeClass('current2');
				$slides.eq(3).removeClass('current3');
				$group.css({left:0});
			});
		}
	};
	
	function advance() {
		clearTimeout(timeout);
		timeout = setTimeout(function(){
				move(true);
		}, 4000);
	}
	
	
	$butR = $this.find('.slide-btnR');
	$butR.on('click', function(){
		move(true);
	});
	$butL = $this.find('.slide-btnL');
	$butL.on('click',function(){
		move(false);
	});

	
	advance();
});