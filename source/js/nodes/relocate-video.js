$(function() {

  if ($('.page-type-video .container-lazyload').length != 0 && $(window).width() > 899) {
    $('.page-type-video .container-lazyload').insertBefore('.l-main-column');
  }

});