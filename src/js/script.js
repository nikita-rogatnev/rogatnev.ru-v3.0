window.onload = function() {

    // ------------------------------------------ //
    // MOBILE MENU
    // ------------------------------------------ //
    var menuToggle = document.querySelector("#header__mobile-toggle");
    var menuClose = document.querySelector("#header__mobile-close");
    var menuOpen = document.querySelector("#header__mobile-open");
    var header = document.querySelector("#header");
    var main = document.querySelector("#main");

    menuToggle.addEventListener("click", function(event) {
        event.preventDefault();
        if(menuOpen.classList.contains("header__mobile-icon--active")) {
            menuClose.classList.add("header__mobile-icon--active");
            menuOpen.classList.remove("header__mobile-icon--active");
            header.classList.add("header--active");
            main.classList.add("main--active");
        } else {
            menuClose.classList.remove("header__mobile-icon--active");
            menuOpen.classList.add("header__mobile-icon--active");
            header.classList.remove("header--active");
            main.classList.remove("main--active");
        };
    });


    // ------------------------------------------ //
    // CHANGE LANGUAGE
    // ------------------------------------------ //
    var languageToggle = document.querySelector("#header__navigation-language");
    var languageEnglish = document.querySelectorAll(".language__english");
    var languageRussian = document.querySelectorAll(".language__russian");

    languageToggle.addEventListener("click", function(event) {
        event.preventDefault();
        if(languageEnglish.classList.contains("language__active")) {
            languageEnglish.classList.remove("language__active");
            languageRussian.classList.add("language__active");
        } else {
            languageEnglish.classList.add("language__active");
            languageRussian.classList.remove("language__active");
        };
    });

}
