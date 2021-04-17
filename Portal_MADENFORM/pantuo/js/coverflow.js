$(function(){
   $('.coverflow').css('max-width',$('.coverflow img').width());
if ($('.coverflow .carousel-inner div.item').length < 2 ) { 
	$('.carousel-indicators, .carousel-control').hide();
} 
});