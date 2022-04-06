
$(document).ready(function() {
	$("#html").click(function(event) {
		if (window.innerWidth>700) {
			$('.desarrollo-web .img .carril').css('transform', 'translateX(0px)');
			$('.desarrollo-web .img h2').text('HTML');
		}

		if (window.innerWidth<700) {
			$('.desarrollo-web .img .carril').css('transform', 'translateX(0px)');
			$('.desarrollo-web .img h2').text('HTML');
		}
		
	});
	
	$("#css").click(function(event) {
		if (window.innerWidth>700) {
			$('.desarrollo-web .img .carril').css('transform', 'translateX(-650px)');
			$('.desarrollo-web .img h2').text('CSS');
		}
		if (window.innerWidth<700) {
			$('.desarrollo-web .img .carril').css('transform', 'translateX(-350px)');
			$('.desarrollo-web .img h2').text('CSS');
		}
	});

	$("#js").click(function(event) {
		if (window.innerWidth>700) {
			$('.desarrollo-web .img .carril').css('transform', 'translateX(-1300px)');
			$('.desarrollo-web .img h2').text('JavaScript');
		}
		if (window.innerWidth<700) {
			$('.desarrollo-web .img .carril').css('transform', 'translateX(-700px)');
			$('.desarrollo-web .img h2').text('JavaScript');
		}
	});
	

	$('#menu').click(function(event) {

		var propiedad=$('.header .nav').css('padding');
		
		if(propiedad=="0px")
		{
			$('.header .nav').css('right', '0');
			$('.header .nav').css('padding', '0.01px');

		}
		else
		{
			$('.header .nav').css('right', '-50%');
			$('.header .nav').css('padding', '0px');
		}
		

	})
});


//ancho de pantalla
function anchoPantalla(){

	var ancho=window.innerWidth;
	
	if (ancho>700) {
		$('.header .nav').css('right', '0');
		$('.header .nav').css('padding', '0px');
	}

}

setInterval(anchoPantalla,100);


