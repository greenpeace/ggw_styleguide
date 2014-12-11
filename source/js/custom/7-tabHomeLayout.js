$(function() {

  var resizeTimer;

  function tabSections() {

    $('.page-home #content, .page-home .action-menu li:first').addClass('current');

    $('.page-home .tab').click(function(e){

      $('.action-menu li a, .l-main .current').removeClass('current');
      $(this).parent().addClass('current');
      var currentTab = $(this).attr('href');
      $(currentTab).addClass('current');

      e.preventDefault();

      $('input[type=file]').nicefileinput();

      // once link has been clicked
      if ($('#dropdown-action-menu').is(":visible") ) {
        //hide dropdown actionm-menu
        $('#dropdown-action-menu').hide();
        // reset class that inidcates dropdown is open
        $('.action-overflowing a').removeClass('dropdown-open');
      }

    });

  }

  // On resize, run the function and reset the timeout
  // 250 is the delay in milliseconds.
  $(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(tabSections, 250);
  });

  tabSections();

});
