

$(document).ready(function() {

// ==== backToTop  ====
    var $backToTop = $(".back-to-top");
    // $backToTop.hide();
  //Scroll event
  $(window).scroll(function(){
    var scrolled = $(window).scrollTop();
    // console.log(scrolled);
    if (scrolled > 25) {
        $backToTop.addClass("active");
      } else {
        $backToTop.removeClass("active");
      }

  });
  $backToTop.on('click', function(e) {
    $("html, body").animate({scrollTop: 0}, 500);
  });

//  END JQUERY
  });
