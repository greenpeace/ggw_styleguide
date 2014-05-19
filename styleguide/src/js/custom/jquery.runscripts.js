jQuery(document).ready(function ($) {
  'use strict';

  // Universal selector for modal windows with external source
  $('.modal').magnificPopup({
    type: 'ajax',
    alignTop: true
  });

  $('.form-item select').wrap('<div class="selector"></div>');

  // make sure links with submenus are accesible
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

});
