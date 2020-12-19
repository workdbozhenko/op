$(document).ready(() => {
	// init main banner slider
	$('.js-first-screen-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		speed: 1000,
		fade: true,
		autoplay: true,
		customPaging: function () {
			return '<div class="custom-dot"></div>';
		},
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
				}
			},
		]
	});

	// init release slider
	$('.js-release-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: true,
		speed: 500,
		prevArrow: $('.releases_nav.slick-prev'),
		nextArrow: $('.releases_nav.slick-next'),
		customPaging: function () {
			return '<div class="custom-dot"></div>';
		},
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
			},
		]
	});


	$('.js-burger').click(function () {
		$(this).toggleClass('active');
		$('.js-header').toggleClass('active');
	});
});