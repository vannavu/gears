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
  var animation_duration = 1500;
  $(document).keydown(function(keyPressed) {
  if (keyPressed.keyCode == 65) {
    $(".A").animate({
      opacity: 1,
    }, animation_duration, function() {
    });
  }
  else if (keyPressed.keyCode == 66) {
    $(".B").animate({
      opacity: 1,
    }, animation_duration, function() {
    });
  }
  else if (keyPressed.keyCode == 67) {
    $(".C").animate({
      opacity: 1,
    }, animation_duration, function() {
    });
  }
  else if (keyPressed.keyCode == 68) {
    $(".D").animate({
      opacity: 1,
    }, animation_duration, function() {
    });
  }
  else if (keyPressed.keyCode == 69) {
    $(".E").animate({
      opacity: 1,
    }, animation_duration, function() {
    });
  }
  else if (keyPressed.keyCode == 70) {
    $(".F").animate({
      opacity: 1,
    }, animation_duration, function() {
    });
  }
  else if (keyPressed.keyCode == 71) {
    $(".G").animate({
      opacity: 1,
    }, animation_duration, function() {
    });
  }
  else if (keyPressed.keyCode == 72) {
    $(".H").animate({
      opacity: 1,
    }, animation_duration, function() {
    });
  }
  else if (keyPressed.keyCode == 73) {
    $(".I").animate({
      opacity: 1,
    }, animation_duration, function() {
    });
  }
  else if (keyPressed.keyCode == 74) {
    $(".J").animate({
      opacity: 1,
    }, animation_duration, function() {
    });
  }
  else if (keyPressed.keyCode == 75) {
    $(".K").animate({
      opacity: 1,
    }, animation_duration, function() {
    });
  }
  else if (keyPressed.keyCode == 76) {
    $(".L").animate({
      opacity: 1,
    }, animation_duration, function() {
    });
  }
  else if (keyPressed.keyCode == 77) {
    $(".M").animate({
      opacity: 1,
    }, animation_duration, function() {
    });
  }
  else if (keyPressed.keyCode == 78) {
    $(".N").animate({
      opacity: 1,
    }, animation_duration, function() {
    });
  }
  else if (keyPressed.keyCode == 79) {
    $(".O").animate({
      opacity: 1,
    }, animation_duration, function() {
    });
  }
  else if (keyPressed.keyCode == 80) {
    $(".P").animate({
      opacity: 1,
    }, animation_duration, function() {
    });
  }
  else if (keyPressed.keyCode == 81) {
    $(".Q").animate({
      opacity: 1,
    }, animation_duration, function() {
    });
  }
  else if (keyPressed.keyCode == 82) {
    $(".R").animate({
      opacity: 1,
    }, animation_duration, function() {
    });
  }
  else if (keyPressed.keyCode == 83) {
    $(".S").animate({
      opacity: 1,
    }, animation_duration, function() {
    });
  }
  else if (keyPressed.keyCode == 84) {
    $(".T").animate({
      opacity: 1,
    }, animation_duration, function() {
    });
  }
  else if (keyPressed.keyCode == 85) {
    $(".U").animate({
      opacity: 1,
    }, animation_duration, function() {
    });
  }
  else if (keyPressed.keyCode == 86) {
    $(".V").animate({
      opacity: 1,
    }, animation_duration, function() {
    });
  }
  else if (keyPressed.keyCode == 87) {
    $(".W").animate({
      opacity: 1,
    }, animation_duration, function() {
    });
  }
  else if (keyPressed.keyCode == 88) {
    $(".X").animate({
      opacity: 1,
    }, animation_duration, function() {
    });
  }
  else if (keyPressed.keyCode == 89) {
    $(".Y").animate({
      opacity: 1,
    }, animation_duration, function() {
    });
  }
  else if (keyPressed.keyCode == 90) {
    $(".Z").animate({
      opacity: 1,
    }, animation_duration, function() {
    });
  }
  else if (keyPressed.keyCode == 16) {
    $(".exclam").animate({
      opacity: 1,
    }, animation_duration, function() {
    });
  }
  else if (keyPressed.keyCode == 8) {
   $(".glyph").animate({
     opacity: 0,
   }, animation_duration, function() {
   });
  }
  });

});
