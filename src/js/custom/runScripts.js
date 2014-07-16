
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
  $("[data-append],[data-replace],[data-after],[data-before]").ajaxInclude();

  // Universal selector for modal windows with external source
  $('.modal').magnificPopup({
    type: 'ajax',
    alignTop: true
  });

  $('.openMap').click(function(e) {
    $('#mobilemap, #close-map').addClass('ontop');
    e.preventDefault();
  });

  if ($('#mobilemap').has('.ontop')) {
    $('#close-map').click( function(){
      $('#mobilemap, #close-map').removeClass('ontop');
    });
  }


  $(".form-comment-message textarea").autogrow({
    animate: false
  });

  // Selector styling wrapper
  $('.form-item select').wrap('<div class="selector"></div>');

  $('input[type=file]').nicefileinput();

  // hide all dropdowns by default
  $('.dropdown').hide();

  // run these functions once

  function resizeFunction() {
    mobileNav(),
    // this method is required because comments are loaded via ajaxInclude
    NiceCommentForm()
  };

  var resizeTimer; // Set resizeTimer to empty so it resets on page load
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(resizeFunction, 200);



});
