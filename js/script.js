$(document).ready(function() {
	$('.burger').click(function() {
		$('.burger, .menu').toggleClass('active');
		$('body').toggleClass('scroll-lock');
	});
	$('.menu__list').click(function() {
		$('.burger, .menu').removeClass('active');
		$('body').removeClass('scroll-lock');
	});

	$('.tabs__blocks').on('click', 'div:not(.active)', function() {
		$(this)
		  .addClass('active').siblings().removeClass('active')
		  .closest('.container').find('.tabs__content-inner').removeClass('active').eq($(this).index()).addClass('active');
	 });
}); 