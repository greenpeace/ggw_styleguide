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
  $('.form-item .form-select').wrap('<div class="selector"></div>');
  $(".no-touch .chosen-select").chosen();
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
    offCanvasSidebar(),
    showMap(),
    mobileNav(),
    backToTop(),
    autocomplete(),
    tabsDropdown()
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
  $('.form-item .form-select').wrap('<div class="selector"></div>');

  // Apply chosen to select element.
  $(".chosen-select").chosen({width: "100%"});

  // Pass focused state to visible parent element.
  $('.form-item .form-select').focus(function(){
    $(this).parent('.selector').addClass('focused');
  });
  $('.form-item .form-select').blur(function(){
    $(this).parent('.selector').removeClass('focused');
  });

  // attach datepicker plugin to date iput fields
  if (!Modernizr.inputtypes.date) {
    $('input[type="date"]').pickadate({
      format: 'd mmm, yy',
      formatSubmit: 'yyyy-mm-dd'
    });
    $('input[type="date"]').addClass('date-field');
    $('input[type="date"]').after('<i class="icon-calendar"></i>');
  }

  //enhance with icons
  $('.form-text.error, textarea.error, .form-checkbox.error + label').after('<i class="icon-attention"></i>');
  $('.form-radio.error').parents('.form-radios').after('<i class="icon-attention"></i>');
  $('.form-select.error').parent('.selector').after('<i class="icon-attention"></i>');
  $('.form-select.error').parent('.selector').addClass('error');

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

   // add class to external links so they can be styled
  $('a').filter(function() {
    return this.hostname && this.hostname !== location.hostname;
  }).attr('target', '_blank').addClass('external');

});

