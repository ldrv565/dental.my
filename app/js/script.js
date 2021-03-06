$("document").ready(function() {
	menuButtonToggle();
	slider();
	modalToggle();
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
	let firstLeftValue = $(".slider__element:eq(0)").offset().left;
	let sliderLength = $(".slider__element").length - 1;
	let lastSliderElement = $(".slider__element:eq(" + sliderLength + ")");

	if(lastSliderElement.children().length == 1) {
		lastSliderElement.addClass("slider__element--last")
	}

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
	if(count + direction && count + direction <= size) {
		count += direction;
		$($(".slider_buttons__page_number")[count - 1]).toggleClass("slider_buttons__page_number--active firm_color");
		$($(".slider_buttons__page_number")[count - 1 - direction]).toggleClass("slider_buttons__page_number--active firm_color")
	}
}

function modalToggle() {
	let modal = $(".modal");
	let openButton = $(".open_button");
	let closeButton = $(".modal__icon");

	openButton.click(function() {
		modal.toggleClass("modal--opened");
	})
	closeButton.click(function() {
		modal.toggleClass("modal--opened");
	})
}