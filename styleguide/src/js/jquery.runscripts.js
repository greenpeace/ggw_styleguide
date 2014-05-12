jQuery(document).ready(function ($) {
  'use strict';

  // Universal selector for modal windows with external source
  $('.modal').magnificPopup({
    type: 'ajax',
    alignTop: true
  });

  $('.form-item select').wrap('<div class="selector"></div>');

});
