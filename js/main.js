jQuery(document).ready(function()
{
	 "use strict"

	 $(".slider").ripples({     
	  dropRadius:12 ,
	  perturbance: 0.01,
	  
	});


	var typed = new Typed(".text", {
	  strings:["hello world ","<strong class='primary'>welcome,</strong>you are at right place","start <strong class='primary'>learning</strong>"],
	 
	  typeSpeed:40,
	  backSpeed:30,
	  loop: true 
	});


	$(window).scroll(function(){
		var top=$(window).scrollTop();
		if (top>=60) 
		{
			$("nav").addClass('secondary'); 
		}

		else 
			if($("nav").hasClass('secondary'))
		{
			$("nav").removeClass('secondary');
		}

	});


	$('.work').magnificPopup({
	  delegate: 'a',
	  type: 'image',
	  gallery:{ enabled:true}
	});


	$('.owl-carousel').owlCarousel();
});