

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

  $('.searchtab').click(function() {
      if ( $(this).find(".fa-chevron-circle-up").hasClass("rotatedown") ) {
        $(this).find(".fa-chevron-circle-up").removeClass("rotatedown");
        $(this).find('.searchtabtitle').removeClass('selected');
        $(this).find('.flaticon-people5').removeClass('selectedicon');
        $(this).removeClass('selectedtab');
        $(".searchslidedownoptions").slideUp();
      } else {
        $(this).find('.fa-chevron-circle-up').addClass('rotatedown');
        $(this).find('.searchtabtitle').addClass('selected');
        $(this).find('.flaticon-people5').addClass('selectedicon');
        $(this).addClass('selectedtab');

        $(this).parent().children(".searchslidedownoptions").slideDown();

      }
  });

  $('#panel2 h1').click(function() {
    $('#panel2').css({ "left": "-100%"});
  });

  

});