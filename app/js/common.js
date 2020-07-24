$(function() {

$('input[type=tel]').mask('+7 (999) 999-99-99');

$('.fancybox').fancybox();

$('.js-modal-open').click(function(e) {
	e.preventDefault();
	$('body').addClass('overflow-hidden');
	$( $(this).attr('href') ).fadeIn();
});

$('.modal__close').click(function() {
	$('body').removeClass('overflow-hidden');
	$(this).parents('.modal').fadeOut();
});

$('.modal').click(function(e) {
	let modal = $(this).find('.modal__box');
	if (modal.is(e.target) || modal.has(e.target).length > 0) return;
	$('body').removeClass('overflow-hidden');
	$(this).fadeOut();
});

$('.tabs__content').hide();
$('.tabs__content:first').show();
$('.tabs__list li:first').addClass('active');
$('.tabs__list li').click(function(event) {
	event.preventDefault();
	let parent = $(this).parents('.tabs');
	parent.find('.tabs__list li').removeClass('active');
	$(this).addClass('active');
	parent.find('.tabs__content').hide();
	var selectTab = $(this).find('a').attr("href");
	$(selectTab).fadeIn();
});

$(window).scroll(function () {
	if ($(this).scrollTop() > 0) {
		$('.scroll-top').fadeIn(200);
	} else {
		$('.scroll-top').fadeOut(200);
	}
});

$('.scroll-top').click(function() {
	$('html, body').animate({scrollTop: 0}, 1000);
});

$('.js-scroll-link').click(function(e) {
	e.preventDefault();
	$('html, body').animate({
		scrollTop: $( $(this).attr('href') ).offset().top
	}, 1000);
});

$(window).scroll(function() {
	let 
		scrollTop = $(this).scrollTop(),
		max = 455;
	console.log(scrollTop);
	if (scrollTop >= 0 && scrollTop < max) {
		$('.hero__bg').css('top', scrollTop);
	}
	if (scrollTop > 0) {
		$('.hero__scroll-wrap').fadeOut();
	} else {
		$('.hero__scroll-wrap').fadeIn();
	}
});

$('.fancybox').fancybox();

$('.fancybox-media').fancybox({
	helpers : {
		media : {}
	}
});

$('.header__toggle').click(function() {
	$(this).toggleClass('active');
	$('.header__nav').slideToggle();
});

$('.advants__slider-list').slick({
	prevArrow: '.advants__prev',
	nextArrow: '.advants__next',
	dots: true
});

$('.projects__slider-list').slick({
	prevArrow: '.projects__prev',
	nextArrow: '.projects__next',
	dots: true
});

$('.about__certificates-list').slick({
	prevArrow: '.about__certificates-prev',
	nextArrow: '.about__certificates-next',
	dots: true,
	slidesToShow: 3,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		}
	]
});

$('.card-main__img-box img:first').show();
$('.card-main__price b:first').show();

$('.card-main__option-input').change(function() {
	let index = $(this).data('index');
	$('.card-main__img-box img').hide();
	$('.card-main__price b').hide();
	$('.card-main__img-box img').eq(index).fadeIn();
	$('.card-main__price b').eq(index).fadeIn();
});

});
