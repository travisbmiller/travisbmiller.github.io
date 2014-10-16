

var count = 0

$(function() {
    
  $('.filterbtn').click(function() {
    $("#employee_filter_panel").addClass("display");
    // Sliding filter employees panel on to screen
    $("#employee_filter_panel").addClass("slideon");
  });

  $('#employee_filter_panel .headerexit').click(function() {
    $('#employee_filter_panel').removeClass("slideon");
    setTimeout(function(){
      $('#employee_filter_panel').remove("display");
    },500);
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
        $(this).parent().children(".searchslidedownoptions").slideUp();
        $(this).parent().css({"border-bottom": "1px solid #dadada"});
        $(this).parent().prev().removeClass("nobottomborder");
      } else {
        $(this).find('.fa-chevron-circle-up').addClass('rotatedown');
        $(this).find('.searchtabtitle').addClass('selected');
        $(this).find('.flaticon-people5').addClass('selectedicon');
        $(this).addClass('selectedtab');

        $(this).parent().children(".searchslidedownoptions").slideDown();
        $(this).parent().css({"border-bottom": "2px solid #4DC3C7"});
        $(this).parent().prev().addClass("nobottomborder");
      }
  });

$("li").click(function() {
    var text = $(this).children().last().text();
    var id = "checked_" + text; // "checked_male"
    var string = id.replace(/\s+/g, "");
    
    if ( $(this).hasClass("clicked") ) {

      count = count - 1;
      
      
      $(this).first().children().find("i").removeClass("checked");
      $(this).first().children().last().removeClass("bold");
      $(this).removeClass("clicked");
      $("." + string).remove();
      
      if ( count < 1 ) {
        $(".selected_options").slideUp();
      }

    } else {
      
      count = count + 1;
      if ( count >= 1 ) {
        $(".selected_options").slideDown();
      }
      
      $(this).addClass("clicked");
      $(this).first().children().find("i").addClass("checked");
      $(this).first().children().last().addClass("bold");
      $('.selected_options_text').append('<span class="' + string +'">' + text + " " +'</span>');
      
    }  
  });


  $('.employee_filter_results_btn').click(function() {
    $('#employee_filter_panel').removeClass("slideon");
  });

  $('.add_note_btn_submit').click(function() {
    $('#add_note_panel').css({ "left": "-100%"});
    $('#employee_panel').show();
  });

  $('#add_note_panel .headerexit .fa-times-circle').click(function() {
    $('#add_note_panel').css({ "left": "-100%"});
    $('#employee_panel').show();
  });


  $('.employee_display_dropdown_icon').click(function() {
    if ( $(this).hasClass("down") ) {
      $(this).parent().next(".employee_options_dropdown").slideUp();
      $(this).removeClass('down');
    } else {
      $(this).addClass("down");
      $(this).parent().next(".employee_options_dropdown").slideDown();
    }  


  });
  
  $('.btn_add_note').click(function() {
    $('#add_note_panel').css({ "left": "0%"});
    setTimeout(function(){
      $('#employee_panel').hide();
    },500);

  });


  $('a').click(function() {
    $('#employee_panel').css({ "left": "-100%"});
    $('#employee_dashboard_panel').show();
  });

  $('#employee_dashboard_panel').click(function() {
    $('#employee_panel').css({ "left": "0%"});
    setTimeout(function(){
      $('#employee_dashboard_panel').hide();
    },500);
    
  });

  



});