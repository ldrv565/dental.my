$("document").ready(function() {
	menuButtonToggle();
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