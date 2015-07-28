$(".menu").on('click', function () {
    $("[class^='icon_bar']").toggleClass("clicked")
    
    if ( $('.icon_bar_1').hasClass("clicked") ) {
            $("#overlay").fadeToggle(function () {
            $(".non-drop-down").toggle();
            $(".non-drop-down").toggleClass('fadeInUp');
            $('body').css("overflow", "hidden")
        });
    } else {
        $("#overlay").fadeToggle()
        $(".non-drop-down").toggle();
        $(".non-drop-down").toggleClass('fadeInUp');
        $('body').css("overflow", "")
    }
    

    
})