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

  // attach datepicker plugin to date input fields
  if (!Modernizr.inputtypes.date) {
    $('input[type="date"]').pickadate({
      format: 'dd/mm/yy',
      formatSubmit: 'yyyy-mm-dd'
    });
    $('input[type="date"]').addClass('date-field');
    $('input[type="date"]').after('<i class="icon-calendar"></i>');
  }

  // attach datepicker plugin to time input fields
  if (!Modernizr.inputtypes.time) {
    $('input[type="time"]').pickatime({
      interval: 15
    });
    $('input[type="time"]').addClass('time-field');
    $('input[type="time"]').after('<i class="icon-clock"></i>');
  }

  // enhance date of birth input
  $('.user-date-of-birth').pickadate({
    format: 'd mmmm yyyy',
    today: '',
    min: [1900,1,1],
    max: [2003,12,31],
    selectYears: 100,
    selectMonths: true
  });

  //enhance with icons
  $('.has-error .form-text, .has-error textarea').after('<i class="form-feedback icon-cancel" aria-hidden="true"></i>');
});
