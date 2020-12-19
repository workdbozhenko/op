$(document).ready(() => {
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

});