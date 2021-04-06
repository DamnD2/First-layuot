$(document).ready(function() {
	$('.burger').click(function() {
		$('.burger, .menu').toggleClass('active');
		$('body').toggleClass('scroll-lock');
	});
	$('.menu__list').click(function() {
		$('.burger, .menu').removeClass('active');
		$('body').removeClass('scroll-lock');
	});
}); 