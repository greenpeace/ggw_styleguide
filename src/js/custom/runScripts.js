jQuery(document).ready(function ($) {
  'use strict';

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

  // hide all dropdowns by default
  $('.dropdown').hide();

  // Ajax include
  $("[data-append],[data-replace],[data-after],[data-before]").ajaxInclude();

  // run these functions once
  overflowDropdown();
  function resizeFunction() {
    //stickyForm()
    // when enabling this the browser freezes ???
    //overflowDropdown()
  };

  var resizeTimer; // Set resizeTimer to empty so it resets on page load
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(resizeFunction, 1000);

});
