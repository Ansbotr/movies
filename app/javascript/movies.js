

$(document).ready(function() {


    let handle = $( "#custom-handle" );
    $( "#slider" ).slider({
      create: function() {
        handle.text( $( this ).slider( "value" ) );
      },
      slide: function( event, ui ) {
        handle.text( ui.value );
      }
    });


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
