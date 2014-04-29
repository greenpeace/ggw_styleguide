jQuery(document).ready(function ($) {
  'use strict';
  // Style all <select>, <input type=['radio'], <input type=['radio']  elements
  $("select, input[type='radio'], input[type='checkbox']").uniform();

  // Universal selector for modal windows with external source
  $(".modal").magnificPopup({
    type: 'ajax',
    alignTop: true
  })

});
