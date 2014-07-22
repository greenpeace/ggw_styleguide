// this method is required because ajaxInclude will not pass on functions to loaded content. This funtion is called whenever an ajax request is completed.

function runAgain() {
  'use strict';

  // these element must autogrow as the user types on multiple lines
  $('.form-comment-message textarea, #shoutbox-comment').autogrow({
    animate: false
  });

  // hide all dropdowns by default
  $('.dropdown').hide();

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

  // hide all dropdowns by default
  $('.dropdown').hide();

    // activate sliders
  $('.flexslider').flexslider({
    animation: "slide",
    animationSpeed: Modernizr.touch ? 400 : 1000,
    pauseOnHover: true
  });

  // run these functions when new blocks are added with ajax
  mobileNav(),
  NiceCommentForm(),
  maxLength(),
  TabableSections(),
  showMap()
}


jQuery(document).ready(function ($) {
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

  // Whenever Ajax has been added run the script again once.
  $(document).ajaxComplete(function() {
    runAgain()
    $(document).unbind('ajaxComplete');
  });

  NiceCommentForm()

  // these element must autogrow as the user types on multiple lines
  $('.form-comment-message textarea, #shoutbox-comment').autogrow({
    animate: false
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

