//$(document).ready(function() {
//
//  var resizeTimer; // Set resizeTimer to empty so it resets on page load
//
//  var $thead      = $(".tablesaw thead"),
//      $bar        = $(".tablesaw-bar"),
//      $theadclone = $('.tablesaw thead').clone();
//      $window     = $(window),
//      offset      = $thead.offset(),
//      topPadding  = $(".l-branding-header").height();
//
//  $theadclone.insertAfter('.tablesaw thead');
//
//  function scrollFunction() {
//    if ($window.scrollTop() > offset.top) {
//
//      if($(window).scrollTop() + $(".l-branding-header").height() < $(document).//height() - $(window).height() ){
//        $thead.stop().animate({
//          marginTop: $window.scrollTop() - offset.top + topPadding - 29
//        });
//        $bar.stop().animate({
//          marginTop: $window.scrollTop() - offset.top + topPadding
//        });
//        $thead.addClass('fixedthead');
//        $bar.addClass('fixednav');
//        $theadclone.show();
//      }
//
//    } else {
//      $thead.stop().animate({
//        marginTop: 0
//      });
//      $bar.stop().animate({
//        marginTop: 0
//      });
//      $thead.removeClass('fixedthead');
//      $bar.removeClass('fixednav');
//      $theadclone.hide();
//    }
//  };
//
//  $(window).scroll(function() {
//    clearTimeout(resizeTimer);
//    resizeTimer = setTimeout(scrollFunction, 300);
//  });
//
//  scrollFunction();
//
//
//});
//
//
