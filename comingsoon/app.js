function showHideNav () {
    $("[class^='icon_bar']").toggleClass("clicked");
    
    if ( $('.icon_bar_1').hasClass("clicked") ) {
            $("#overlay").fadeToggle(function () {
                $(".non-drop-down").toggle();
                $(".non-drop-down").toggleClass('fadeInUp');
                $('body').css("overflow", "hidden");
                $(".social_icon").show();
                $(".social_icon").toggleClass("fadeInUp");
            });
    } else {
        $("#overlay").fadeToggle();
        $(".non-drop-down").toggle();
        $(".non-drop-down").toggleClass('fadeInUp');
        $('body').css("overflow", "");
        $(".social_icon").hide();
        $(".social_icon").toggleClass("fadeInUp");
    }
}

$(function() {
    $(".menu").on('click', showHideNav);
})


