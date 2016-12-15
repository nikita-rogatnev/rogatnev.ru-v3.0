$(document)
	.ready(function () {

		// ------------------------------------------ //
		// CERTIFICARES MODALS
		// ------------------------------------------ //
		$(".certificates__item")
			.click(function () {
				$(this)
					.children(".certificates__modal")
					.addClass("certificates__modal--active");
			});

		$(document).keydown(function (e) {
			if (e.keyCode == 27) {
				$(".certificates__item .certificates__modal").removeClass("certificates__modal--active");
			}
		});

		$(".certificates__close").click(function () {
			$(".certificates__item .certificates__modal").removeClass("certificates__modal--active");
		});

		// ------------------------------------------ //
		// MOBILE MENU
		// ------------------------------------------ //
		var menuToggle = document.querySelector("#header__mobile-toggle");
		var menuClose = document.querySelector("#header__mobile-close");
		var menuOpen = document.querySelector("#header__mobile-open");
		var header = document.querySelector("#header");
		var main = document.querySelector("#main");

		menuToggle.addEventListener("click", function (event) {
			event.preventDefault();
			if (menuOpen.classList.contains("header__mobile-icon--active")) {
				menuClose
					.classList
					.add("header__mobile-icon--active");
				menuOpen
					.classList
					.remove("header__mobile-icon--active");
				header
					.classList
					.add("header--active");
				main
					.classList
					.add("main--active");
			} else {
				menuClose
					.classList
					.remove("header__mobile-icon--active");
				menuOpen
					.classList
					.add("header__mobile-icon--active");
				header
					.classList
					.remove("header--active");
				main
					.classList
					.remove("main--active");
			};
		});

	});
