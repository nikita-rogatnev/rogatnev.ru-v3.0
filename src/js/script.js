$(document).ready(function() {

    // ------------------------------------------ //
    // ACTIVE MENU
    // ------------------------------------------ //
    $('.header__navigation .header__navigation-item a').click(function(e) {
        e.preventDefault();

        $('body').scrollTo($(this).attr('href'));

        $('.header__navigation .header__navigation-item').removeClass('header__navigation-item--active');
        var $parent = $(this).parent();
        if(!$parent.hasClass('header__navigation-item--active')) {
            $parent.addClass('header__navigation-item--active');
        }
    });

});
