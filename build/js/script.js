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

    languageToggle.addEventListener("click", function(event) {
        event.preventDefault();

        var languageEnglish = document.querySelectorAll(".language__english");
        var languageRussian = document.querySelectorAll(".language__russian");
        var languageEnglishActive = document.querySelectorAll(".language__active.language__english");
        var a = 0;
        var b = 0;

        if(languageEnglishActive.length > 0) {
            for(a = 0; a < languageEnglish.length; a++) {
                languageEnglish[a].classList.remove("language__active");
            }
            for(b = 0; b < languageRussian.length; b++) {
                languageRussian[b].classList.add("language__active");
            }
        } else {
            for(a = 0; a < languageEnglish.length; a++) {
                languageEnglish[a].classList.add("language__active");
            }
            for(b = 0; b < languageRussian.length; b++) {
                languageRussian[b].classList.remove("language__active");
            }
        };
    });

}
