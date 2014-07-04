function stickyForm() {

  'use strict';

  var Form = $('.comment-form')

  //check if the element exists
  if(Form != undefined) {

    // only for small devices
    if($(window).width() <= 900) {

      $('.comment-form-holder > .comment-form').insertBefore('.l-footer');
      $('input[type=file]').nicefileinput();

    } else if ($(window).width() >= 901) {

      $('.layout-base > .comment-form').insertAfter('.comment-form-title');
      $('input[type=file]').nicefileinput();

    }

  }

  if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
    $(document).on('focus', 'input, textarea', function() {
        $(document).addClass('IOSfocused');
        $(window).scrollTop(0)
    });
    $(document).on('blur', 'input, textarea', function() {
      if ($(document).hasClass('IOSfocused')) {
        $(document).removeClass('IOSfocused');
      }
    });
  }

};
