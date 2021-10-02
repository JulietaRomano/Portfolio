$(document).ready(function(){
	$('.frame').click(function(){
		$('.top').addClass('open');
		$('.message').addClass('pull');
	})
});


const tamaño=window.matchMedia("(max-width:430px)")
console.log(tamaño)

$(document).ready(function pantalla() {  


   return window.matchMedia("(max-width:430px)").matches;
    
});


