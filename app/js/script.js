$("document").ready(function() {
	menuButtonToggle();
	slider();
})

function menuButtonToggle() {
	let menu = $(".menu");
	let menuOpenedClass = "menu--opened";
	let menuButton = $(".menu-button");
	let menuButtonText = $(".menu-button__text");
	let menuButtonIcon = $(".menu-button__icon");
	let iconClosingClass = "menu-button__icon--closing";

	menuButton.click(function() {
		if(menuButtonIcon.hasClass(iconClosingClass)) {
			menuButtonText.html("Меню");
			menuButtonIcon.removeClass(iconClosingClass)
			menu.removeClass(menuOpenedClass);
		} else {
			menuButtonText.html("Закрыть");
			menuButtonIcon.addClass(iconClosingClass);
			menu.addClass(menuOpenedClass);
		}
	})
}

function slider() {
	let scrollLeftButton = $(".slider_buttons__arrow--left");
	let scrollRightButton = $(".slider_buttons__arrow--right");
	let firstLeftValue = $($(".slider__element")[0]).offset().left;
	scrollLeftButton.click(function() {
		scroll("left", firstLeftValue);
		changeNumber("left");
	});
	scrollRightButton.click(function() {
		scroll("right", firstLeftValue);
		changeNumber("right");
	});
}

function scroll(direction, firstLeftValue) {
	direction = (direction == "left") * -2 + 1
	let slider = $($(".slider")[0]);
	let sliderElement = $($(".slider__element")[0]);
	let leftValue = sliderElement.offset().left;
	$('.slider').animate({
		scrollLeft: slider.width() * direction + (firstLeftValue - leftValue) + 6 * direction
	}, 250);
}
var count = 1;

function changeNumber(direction) {
	direction = (direction == "left") * -2 + 1
	let size = $(".slider__element").length;
	console.log(count);
	if(count + direction && count + direction <= size) {
		count += direction;
		$($(".slider_buttons__page_number")[count - 1]).toggleClass("slider_buttons__page_number--active");
		$($(".slider_buttons__page_number")[count - 1 - direction]).toggleClass("slider_buttons__page_number--active")
	}
}