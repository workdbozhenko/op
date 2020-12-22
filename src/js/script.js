$(document).ready(() => {
	// init main banner slider

	const $firstScreen = $('.js-first-screen-slider');
	if ($firstScreen.length) {
		$firstScreen.slick({
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
	}

	// init release slider
	const $releaseSlider = $('.js-release-slider');
	if ($releaseSlider.length) {
		$releaseSlider.slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			dots: true,
			arrows: false,
			speed: 500,
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
				{
					breakpoint: 540,
					settings: "unslick"
				},
			]
		});
	}


	const $merchSlider = $('.js-merch-slider');
	if ($merchSlider.length) {
		$merchSlider.slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			arrows: false,
			speed: 500,
			autoplay: true,
			customPaging: function () {
				return '<div class="custom-dot"></div>';
			},
		})
	}

	// header burger
	$('.js-burger').click(function () {
		$(this).toggleClass('active');
		$('.js-header').toggleClass('active');
		$('body').toggleClass('no-scroll');
	});

	// cart
	$('.js-counter .counter_btn').click((e) => {
		const $btn = $(e.currentTarget);
		const type = $btn.data('type');
		const $parentContainer = $btn.closest('.js-counter');
		const $input  = $parentContainer.find('input[name="count"]');
		const inputValue = $input.val();
		const productCount  = inputValue ? parseFloat(inputValue) : 1;

		let newValue = productCount;

		if (type === 'inc') {
			newValue = productCount + 1;
			$parentContainer.find('.counter_btn[data-type="dec"]').removeClass('disabled');
		} else if (type === 'dec') {
			if (newValue > 1) {
				newValue = productCount - 1;
				if(newValue === 1) {
					$btn.addClass('disabled');
				}
			} else {
				newValue = 1;
			}
		}

		$input.val(newValue);
	});

	// tabs
	$('.js-dropdown-current').click(() => {
		$('.js-dropdown').toggleClass('open');
	});

	$('.js-dropdown-list [data-value]').click((e) => {
		const $el = $(e.currentTarget);
		const value = $el.data('value');
		$('[data-value]').removeClass('active');
		$('.js-dropdown-current').html(value);
		$('.js-dropdown').removeClass('open');
		$el.addClass('active');
	});


	$(window).scroll(function(){
		const sticky = $('.header');
		const	scroll = $(window).scrollTop();
		const windowHeight = window.innerHeight;

		if (scroll >= windowHeight) {
			sticky.addClass('fixed');
		} else {
			sticky.removeClass('fixed');
		}
	});
});