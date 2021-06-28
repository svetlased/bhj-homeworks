window.onload = function() {
	let count = 0;
	let items = Array.from(document.querySelectorAll('.slider__item'));
	document.querySelector('.slider__arrow_next').onclick = function() {
		count = items.findIndex((item) => {
            return item.classList.contains('slider__item_active')
        });
		items[count].classList.toggle('slider__item_active');
		count = (count + 1) % items.length;
		items[count].classList.toggle('slider__item_active');
	}
	document.querySelector('.slider__arrow_prev').onclick = function() {
		count = items.findIndex((item) => {
            return item.classList.contains('slider__item_active')
        });
		items[count].classList.toggle('slider__item_active');
		count = (count > 0) ? count - 1: items.length - 1;
		items[count].classList.toggle('slider__item_active');
	}
}