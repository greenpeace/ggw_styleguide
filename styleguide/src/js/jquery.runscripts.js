jQuery(document).ready(function ($) {
  'use strict';
  // Style all <select>, <input type=['radio'], <input type=['radio']  elements
  $("select, input[type='radio'], input[type='checkbox']").uniform();

  // Disable autowidth on certain selects
  $(".contact-form select, .form-item-timezone select, .form-item-domain-source select, .form-field-name-field-signup-event select").uniform({selectAutoWidth: false});

});
