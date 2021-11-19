/*******************
	 ANIMATION BUTTONS
	*******************/
	$(".btns").hover(function () {
		$(this).delay(10).queue(function(){
			$(this).addClass('active').clearQueue();
		});
	}, function () {
		$(this).removeClass('active');
	});
	
		
	$('.nav li').click(function(){
		$('.nav li').removeClass('active');
		$(this).addClass('active');
		
		var i = $(this).index();
		var classNumber = i+1;
		
		$('.widget').removeClass('demo1 demo2 demo3 demo4 wobble').addClass('demo'+classNumber);
		
		$('.widget').delay(10).queue(function(){
			$(this).addClass('wobble').clearQueue();
		});
		
		
	});	