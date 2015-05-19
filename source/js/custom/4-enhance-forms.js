

//enhance with icons
function showErrorIcons() {
  $('.has-error .form-text, .has-error textarea').after('<i class="form-feedback icon-cancel" aria-hidden="true"></i>');
  }

$(function() {
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
  $('.input-date')
    .pickadate({
      format: 'd mmmm yyyy',
      formatSubmit: 'yyyy/mm/dd'
    })
    .addClass('date-field')
    .after('<i class="icon-calendar"></i>');

  // attach datepicker plugin to time input fields
  $('.input-time')
    .pickatime({ interval: 15 })
    .addClass('time-field')
    .after('<i class="icon-clock"></i>');

  // enhance date of birth input
  $('.user-date-of-birth').pickadate({
    format: 'd mmmm yyyy',
    today: '',
    min: [1900,1,1],
    max: [2003,12,31],
    selectYears: 100,
    selectMonths: true
  });


  // toggle a fieldset  with a link
  $('#more-options-fieldset').hide();
  $('#toggle-more-options').click(function(event) {
    event.preventDefault();
    $(this).next('.collapsible-fieldset-wrapper').slideToggle(400);
  });

  var cookies_accepted = $.cookie("cookie_acceptance");

  $('#hide-cookies').click(function(event) {
    $(this).closest('.cookiewall').hide();
    $.cookie('cookie_acceptance', 'is_dismissed', { expires: 7, path: '/' });
    event.preventDefault();
  });

  if (cookies_accepted != 'is_dismissed') {
    $('.cookiewall').removeClass('element-hidden');
  }

  if(window.location.hash) {
    var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character

    if (hash == 'form-saved') {
      $('<div class="form-sent form-success"><i class="icon icon-check"></i> <p>Your changes have been saved.</p></div>').insertBefore('.l-main').show().delay(5000).fadeOut('slow');
    }

  }

  showErrorIcons();

});
