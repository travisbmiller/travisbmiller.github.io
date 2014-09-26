$(function(){

  var input;
  var output;
  var i;

  function pingPong (input) {

  for( i = 1; i <= input; i++ ) {

    // each loop

    if ( i % 3 == 0 && i % 5 == 0 ) {
      // print ping-pong ping pong
      $( ".output" ).append( '<div class="num">Ping-Pong</div>' );
    } else if ( i % 3 == 0 ) {
      // print ping
      $( ".output" ).append( '<div class="num">Ping</div>' );
    } else if ( i % 5 == 0) {
      // print pong
      $( ".output" ).append( '<div class="num">Pong</div>' );
    } else {
      // print number
      $( ".output" ).append( '<div class="num">' + i + '</div>' );
    }

   }

   // Add Clear Button
   $( ".output" ).append( '<div class="num" id="clear">Clear All</div>' );


   // Clear output by clicking on input field
  $("#numInput").click(function() {
    // remove content from output section
      $(".output").contents().remove();

  });

  // Clear output by clicking on #clear

  $("#clear").click(function() {
    // remove content from output section
      $(".output").contents().remove();

  });


  }


  // Clear output by clicking on input field
  $("#numInput").click(function() {
    // remove content from output section
      $(".output").contents().remove();

  });

  // Clear output by clicking on #clear

  $("#clear").click(function() {
    // remove content from output section
      $(".output").contents().remove();

  });




  $( "form" ).submit(function( event ) {
      

      // assign input val
      var num = $( "#numInput" ).val();
      
      // run pingPong with input val
      pingPong(num);

      event.preventDefault();
  });


 


});


