function stickyForm() {

  //check if the element exists
  if($('.comment-form') != undefined) {

    // only for small devices
    if($(window).width() <= 900) {

      $(".comment-form-holder > .comment-form").insertBefore(".l-footer");
      $("input[type=file]").nicefileinput();

    } else if ($(window).width() >= 901) {

      $(".layout-base > .comment-form").insertAfter(".comment-form-title");
      $("input[type=file]").nicefileinput();

    }

  }

  if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
    $(document).on('focus', 'input, textarea', function() {
        $('.comment-form').css({'position':'static'});
        $('html, body').animate({ scrollTop: $("#myID").scrollTop() });
    });
    $(document).on('blur', 'input, textarea', function() {
        $('.comment-form').css({'position':'fixed'});
    });
  }

};
