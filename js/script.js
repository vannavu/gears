$(document).ready(function(){

  var rotate_on = false;
  $(".glyph").click(function(){
    if (rotate_on == false) {
      rotate_on = true;
      $(this).animate({
        opacity: 1,
      }, 1500, function() {
      });
    }
    else {
      rotate_on = false;
      $(this).animate({
        opacity: 0,
      }, 1500, function() {
      });
    }
  });

  var key_position = 0;
  var star_width = 35;
  var top = 0;
  $(document).keydown(function(keyPressed) {
  if (keyPressed.keyCode == 65) {
    $("#A").animate({
      opacity: 1,
    }, 1500, function() {
    });
  }
  else if (keyPressed.keyCode == 66) {
    $("#B").animate({
      opacity: 1,
    }, 1500, function() {
    });
  }
  else if (keyPressed.keyCode == 67) {
    $("#C").animate({
      opacity: 1,
    }, 1500, function() {
    });
  }
  else if (keyPressed.keyCode == 8) {
   $(".glyph").animate({
     opacity: 0,
   }, 1500, function() {
   });
  }
  });

});
