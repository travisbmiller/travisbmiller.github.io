

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
        $(this).parent().css({"border-bottom": "1px solid #dadada"});
      } else {
        $(this).find('.fa-chevron-circle-up').addClass('rotatedown');
        $(this).find('.searchtabtitle').addClass('selected');
        $(this).find('.flaticon-people5').addClass('selectedicon');
        $(this).addClass('selectedtab');

        $(this).parent().children(".searchslidedownoptions").slideDown();
        $(this).parent().css({"border-bottom": "3px solid #4DC3C7"});
      }
  });

$("li").click(function() {
    
    if ( $(this).hasClass("clicked") ) {
      $(this).first().children().find("i").removeClass("checked");
      $(this).first().children().last().removeClass("bold");
      $(this).removeClass("clicked");;
    } else {
      $(this).addClass("clicked");
      $(this).first().children().find("i").addClass("checked");
      $(this).first().children().last().addClass("bold");
    }  
  });


  $('.employee_filter_results_btn').click(function() {
    $('#employee_filter_panel').css({ "left": "-100%"});
  });

  $('.add_note_btn_submit').click(function() {
    $('#add_note_panel').css({ "left": "-100%"});
  });

  $('#add_note_panel .headerexit .fa-times-circle').click(function() {
    $('#add_note_panel').css({ "left": "-100%"});
  });


  $('.employee_display_dropdown_icon').click(function() {
    $('.employee_options_dropdown').slideDown();
  });
  
  $('.btn_add_note').click(function() {
    $('#add_note_panel').css({ "left": "0%"});
  });

});