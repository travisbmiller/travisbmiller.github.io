

$(function() {
    
  $('.filterbtn').click(function() {
    
    console.log("clicked");
    $( "#employee_filter_panel" ).css({ "left": "0"});
    
  });

  $('#employee_filter_panel .headerexit').click(function() {
    $('#employee_filter_panel').css({ "left": "-105%"});
  });

  // $('.searchdropdownicon').click(function() {
  //   $(this).find('.fa-chevron-circle-up').addClass('rotatedown');
  // });

  $('.searchdropdownicon').click(function() {
      if ( $(this).children().hasClass("rotatedown") ) {
        $(this).children().removeClass("rotatedown")
      } else {
        $(this).find('.fa-chevron-circle-up').addClass('rotatedown');
      }
  });

  $('#panel2 h1').click(function() {
    $('#panel2').css({ "left": "-100%"});
  });

  

});