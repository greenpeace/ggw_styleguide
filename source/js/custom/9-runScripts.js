// will only run once the page DOM is ready for JavaScript code to execute.
$( document ).ready(function() {
  'use strict';

  //improve user experience by altering zooming on orientation change
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

  // Activate fastclick function
  FastClick.attach(document.body);
});

// This will run once the entire page (including ajax requests), not just the DOM, is ready
$( window ).load(function() {

  // Universal selector for modal windows with external source
  $('.modal-inline').magnificPopup({
    type: 'inline',
    midClick: true,
    callbacks: {
      open: function() {
        $(window).trigger("load");
        $('.form-comment-message textarea').trigger('keyup');
      }
    }
  });

  $('.album-thumbnail').magnificPopup({
    preloader: true,
    type: 'image',
    verticalFit: true,
    mainClass: 'mfp-img-mobile',
    gallery:{
      enabled:true,
      navigateByImgClick: true,
      preload: [1,2] //pre load one image before and two images after
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: 'title'
    },
    callbacks: {
      close: function () {
        $(document).trigger('sleepyHead');
      }
    }
  });


   // add class to external links so they can be styled
  $('.field-name-body a').filter(function() {
    return this.hostname && this.hostname !== location.hostname;
  }).attr('target', '_blank').addClass('external');

  var ua = navigator.userAgent.toLowerCase();

  if (ua.indexOf('safari') != -1) {
    if (ua.indexOf('chrome') > -1) {
      // Chrome
    } else {
      $("<link/>", {
        rel: "stylesheet",
        type: "text/css",
        href: "/css/fonticons.woff.css"
      }).appendTo("head");
    }

  };


});

