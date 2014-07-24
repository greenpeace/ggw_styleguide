// this method is required because ajaxInclude will not pass on functions to loaded content. This funtion is called whenever an ajax request is completed.

function runAgain() {
  'use strict';

  // show/hide event enrollment form
  $('#togglEnrollForm').click(function() {
    if ($('#event-signup-node-form').css('display') == 'none') {
      $(this).text('Hide form');
      $('#event-signup-node-form').slideDown("400");
    } else {
      $(this).text('Click here to change');
      $('#event-signup-node-form').slideUp("400");
    }
  });

  // Selector styling wrapper
  $('.form-item select').wrap('<div class="selector"></div>');

  // attach datepicker plugin to date iput fields
  if (!Modernizr.inputtypes.date) {
    $('input[type="date"]').pickadate();
  }

}

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

  // Ajax include
  $('[data-replace]').ajaxInclude();

});

// This will run once the entire page (including ajax requests), not just the DOM, is ready
$( window ).load(function() {

  function resizeFunction() {
    NiceCommentForm(),
    offCanvasNav(),
    showMap(),
    mobileNav()
  };

  var resizeTimer;
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(resizeFunction, 200);

    // these element must autogrow as the user types on multiple lines
  $('.form-comment-message textarea, #shoutbox-comment').autogrow({
    animate: false
  });

  // show/hide event enrollment form
  $('#togglEnrollForm').click(function() {
    if ($('#event-signup-node-form').css('display') == 'none') {
      $(this).text('Hide form');
      $('#event-signup-node-form').slideDown("400");
    } else {
      $(this).text('Click here to change');
      $('#event-signup-node-form').slideUp("400");
    }
  });

  // Selector styling wrapper
  $('.form-item select').wrap('<div class="selector"></div>');

  // attach datepicker plugin to date iput fields
  if (!Modernizr.inputtypes.date) {
    $('input[type="date"]').pickadate();
  }

    // activate sliders
  $('.flexslider').flexslider({
    animation: "slide",
    animationSpeed: Modernizr.touch ? 400 : 1000,
    pauseOnHover: true
  });

  // Universal selector for modal windows with external source
  $('.modal').magnificPopup({
    type: 'ajax',
    callbacks: {
      ajaxContentAdded: function() {
        // Make functions available for content in modal windows
        runAgain()
      }
    }
  });

});

