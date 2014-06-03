jQuery(document).ready(function ($) {
  'use strict';

  $('#main-menu-show').click(function(e) {
    $(document.documentElement).toggleClass('primary-nav');
    e.preventDefault();
  });

  $('#secondary-menu-show').click(function(e) {
    $(document.documentElement).toggleClass('secondary-nav');
    e.preventDefault();
  });

});
