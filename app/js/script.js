$("document").ready(function() {
	menuToggle();
})

function menuToggle() {
	let menuButton = $(".menu-button");
	let menuButtonText = $(".menu-button__text");
	let menuIcon = $(".menu-button__icon");
	let closingClass = "menu-button__icon--closing";

	menuButton.click(function() {
		if(menuIcon.hasClass(closingClass)) {
			menuButtonText.html("Меню");
			menuIcon.removeClass(closingClass)
		} else {
			menuButtonText.html("Закрыть");
			menuIcon.addClass(closingClass);
		}
	})
}