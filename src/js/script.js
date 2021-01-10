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
		const $input = $parentContainer.find('input[name="count"]');
		const inputValue = $input.val();
		const productCount = inputValue ? parseFloat(inputValue) : 1;

		let newValue = productCount;

		if (type === 'inc') {
			newValue = productCount + 1;
			$parentContainer.find('.counter_btn[data-type="dec"]').removeClass('disabled');
		} else if (type === 'dec') {
			if (newValue > 1) {
				newValue = productCount - 1;
				if (newValue === 1) {
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

	$(window).scroll(function () {
		const sticky = $('.header');
		const scroll = $(window).scrollTop();
		const windowHeight = window.innerHeight;

		if (scroll >= windowHeight) {
			sticky.addClass('fixed');
		} else {
			sticky.removeClass('fixed');
		}
	});

	const $fullPage = $('#fullpage');
	// if ($fullPage.length) {
	// 	$fullPage.fullpage({
	// 		//options here
	// 		licenseKey: '05558DB6-5984466D-A33F10BD-AC91C099',
	// 		autoScrolling: true,
	// 		scrollHorizontally: true
	// 	});
	// }


	const $lng = $('.js-lng');
	$lng.click(function () {
		$(this).addClass('active');
	});

	$('.js-lng .lang_list_item').click((e) => {
		e.stopPropagation();
		const $el = $(e.currentTarget);
		const lng = $el.data('lng');
		$('.lang_list_item').removeClass('active');
		$el.addClass('active');
		$('.lang_selected').html(lng);
		$lng.removeClass('active');
	});

	$(document).click(function (event) {
		const isActive = $lng.hasClass('active');
		if (!isActive) {
			return;
		}
		const lngBlock = $lng[0];
		const target = event.target;
		const isSame = target.isEqualNode(lngBlock);
		const isChild = lngBlock.contains(target);

		if (!isSame && !isChild) {
			$lng.removeClass('active');
		}
	});

	// TODO:
	if ($('.popup-modal').magnificPopup) {
		$('.popup-modal').magnificPopup({
			type: 'inline',
			closeOnBgClick: true,
		});
	}
});