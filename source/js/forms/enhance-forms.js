

//enhance with icons
function showErrorIcons() {
  $('.has-error .form-text, .has-error textarea').after('<i class="form-feedback icon-cancel" aria-hidden="true"></i>');
}

function showAttentionIcons() {
  $('.has-attention .form-text, .has-attention textarea').after('<i class="form-feedback icon-attention" aria-hidden="true"></i>');
}

$(function() {
  'use strict';

  function isMobile() {
    try{ document.createEvent("TouchEvent"); return true; }
    catch(e){ return false; }
  }

  // Apply chosen to select element.
  $(".chosen-select").chosen({width: "100%"});

  // Pass focused state to visible parent element.
  $('.form-item .form-select')
    .wrap('<div class="selector"></div>')
    .focus(function(){
      $(this).parent('.selector').addClass('focused');
    })
    .blur(function(){
      $(this).parent('.selector').removeClass('focused');
    });

  // attach datepicker plugin to date input fields
  if ( isMobile() == false ) {

    $('.js-date-picker')
      .pickadate({
        format: 'dd mmmm yyyy',
        formatSubmit: 'yyyy/mm/dd'
      })
      .addClass('date-field')
      .after('<i class="icon-calendar"></i>');
  
    // attach datepicker plugin to time input fields
    $('.js-time-picker')
      .pickatime({ interval: 15 })
      .addClass('time-field')
      .after('<i class="icon-clock"></i>');
  
    // enhance date of birth input
    $('.js-birthdate-picker')
      .pickadate({
        format: 'd mmmm yyyy',
        formatSubmit: 'yyyy/mm/dd',
        today: '',
        min: [1900,1,1],
        max: [1997,6,10],
        selectYears: 100,
        selectMonths: true
      })
      .addClass('date-field')
      .after('<i class="icon-calendar"></i>');
  }

  // toggle a fieldset  with a link
  $('#more-options-fieldset').hide();
  $('#toggle-more-options').click(function(e) {
    e.preventDefault();
    $(this).next('.collapsible-fieldset-wrapper').slideToggle(400);
  });

  showErrorIcons();

  // * iOS zooms on form element focus. This script prevents that behavior.
  // * <meta name="viewport" content="width=device-width,initial-scale=1">
  //      If you dynamically add a maximum-scale where no default exists,
  //      the value persists on the page even after removed from viewport.content.
  //      So if no maximum-scale is set, adds maximum-scale=10 on blur.
  //      If maximum-scale is set, reuses that original value.
  // * <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=2.0,maximum-scale=1.0">
  //      second maximum-scale declaration will take precedence.
  // * Will respect original maximum-scale, if set.
  // * Works with int or float scale values.
  function cancelZoom() {
    var d = document,
        viewport,
        content,
        maxScale = ',maximum-scale=',
        maxScaleRegex = /,*maximum\-scale\=\d*\.*\d*/;
 
    // this should be a focusable DOM Element
    if(!this.addEventListener || !d.querySelector) {
      return;
    }
 
    viewport = d.querySelector('meta[name="viewport"]');
    content = viewport.content;
 
    function changeViewport(event) {
      // http://nerd.vasilis.nl/prevent-ios-from-zooming-onfocus/
      viewport.content = content + (event.type == 'blur' ? (content.match(maxScaleRegex, '') ? '' : maxScale + 10) : maxScale + 1);
    }
 
    // We could use DOMFocusIn here, but it's deprecated.
    this.addEventListener('focus', changeViewport, true);
    this.addEventListener('blur', changeViewport, false);
  }
 
  // jQuery-plugin
  (function($) {
    $.fn.cancelZoom = function() {
      return this.each(cancelZoom);
    };
     
    // Usage:
    $('input:text,select,textarea').cancelZoom();
  })(jQuery);

});
