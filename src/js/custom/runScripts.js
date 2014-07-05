
jQuery(document).ready(function ($) {
  'use strict';

  FastClick.attach(document.body);

  // Ajax include
  $("[data-append],[data-replace],[data-after],[data-before]").ajaxInclude();

  // Universal selector for modal windows with external source
  $('.modal').magnificPopup({
    type: 'ajax',
    alignTop: true
  });

  $(".form-comment-message").autogrow({
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
