jQuery(document).ready(function ($) {
  'use strict';

  // Universal selector for modal windows with external source
  $('.modal').magnificPopup({
    type: 'ajax',
    alignTop: true
  });

  //
  // Selector + chosen
  //

  $('.form-item select').wrap('<div class="selector"></div>');

  // Redirect user on a change event of the country switcher select.
  $('.country-selector select').change(function() {
    window.location = window.location.protocol + '//' + window.location.host + '/' + $(this).val();
  });

  // country selector, apply chosen styling
  $('.country-selector .form-select').chosen({
    disable_search: true
  });

  // hide button when JS is active
  $('.country-selector .form-submit').hide();

  // Special resize function for better performance

  var resizeTimer; // Set resizeTimer to empty so it resets on page load

  function resizeFunction() {

        // only for small devices
        if($(window).width() <= 901) {

          //add contrib navigation script
          $('.main-menu .menu').navgoco({
            caretHtml: '<i class="caret"></i>',
            accordion: true,
            openClass: 'open',
            save: true,
            cookie: {
              name: 'navgoco',
              expires: false,
              path: '/'
            },
            slide: {
              duration: 300,
              easing: 'swing'
            }
          });

          // attach fastclick
          $(function() {
            FastClick.attach(document.body);
          });

          // undo the removing of style attr when switching from wide display
          $('.main-menu .menu .menu').css('display', 'none');
        }
        // for desktop remove the style attribute.
        else if($('.mobile-nav').is(':hidden')) {
          $('.main-menu .menu .menu').removeAttr('style');
        }
    };

    // On resize, run the function and reset the timeout
    // 250 is the delay in milliseconds. Change as you see fit.
    $(window).resize(function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(resizeFunction, 250);
    });

    resizeFunction();

});
