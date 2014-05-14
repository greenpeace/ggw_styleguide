jQuery(document).ready(function ($) {
  'use strict';

  $('#main-menu-show').click(function(e) {
    $(document.body).toggleClass('primary-nav');
    e.stopPropagation();
  });

  $('#secondary-menu-show').click(function(e) {
    $(document.body).toggleClass('secondary-nav');
    e.stopPropagation();
  });

});
