
jQuery(document).ready(function ($) {
  'use strict';

  var mobile_timer = false;
  if(navigator.userAgent.match(/iPhone/i)) {
    $('#viewport').attr('content','width=device-width,minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0');
    $(window).bind('gesturestart',function () {
      clearTimeout(mobile_timer);
      $('#viewport').attr('content','width=device-width,minimum-scale=1.0,maximum-scale=10.0');
    }).bind('touchend',function () {
      clearTimeout(mobile_timer);
      mobile_timer = setTimeout(function () {
        $('#viewport').attr('content','width=device-width,minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0');
      },1000);
    });
  }

  FastClick.attach(document.body);

  // Ajax include
  $("[data-replace]").ajaxInclude();

  // Universal selector for modal windows with external source
  $('.modal').magnificPopup({
    type: 'ajax',
    alignTop: true
  });

  $(".form-comment-message textarea, #shoutbox-comment").autogrow({
    animate: false
  });

  // Selector styling wrapper
  $('.form-item select').wrap('<div class="selector"></div>');

  // hide all dropdowns by default
  $('.dropdown').hide();

  //test slider
  $('.flexslider').flexslider({
    animation: "slide",
    animationSpeed: Modernizr.touch ? 400 : 1000,
    pauseOnHover: true
  });


  // run these functions once

  function resizeFunction() {
    mobileNav(),
    // this method is required because comments are loaded via ajaxInclude
    NiceCommentForm(),
    maxLength(),
    TabableSections(),
    showMap()
  };

  var resizeTimer; // Set resizeTimer to empty so it resets on page load
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(resizeFunction, 200);

});

