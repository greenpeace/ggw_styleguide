// will only run once the page DOM is ready for JavaScript code to execute.
$( document ).ready(function() {
  'use strict';

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

});
