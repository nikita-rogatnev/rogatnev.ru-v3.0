$(document).ready(function() {

    // ------------------------------------------ //
    // MOBILE MENU
    // ------------------------------------------ //
    $('.header__mobile .header__mobile-toggle').click(function(e) {
        e.preventDefault();
        $('.header__mobile-icon').toggleClass("header__mobile-icon--active");
        $('.header').toggleClass("header--active");
        $('.main').toggleClass("main--active");
    });

});
