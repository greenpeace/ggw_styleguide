$(function() {

  var resizeTimer;

  function truncateTeasers() {

    $('.node-teaser .node-title').truncate({
      lines: 2,
      lineHeight: 19
    });

    // OLD

   //$('.node-teaser .field-name-body').truncate({
   //  lines: 2,
   //  lineHeight: 21
   //});

    // NEW
    if (!$('body').hasClass('page-who-is-who')) {
      $('.node-teaser .field-name-body').truncate({
        lines: 2,
        lineHeight: 21
      });

      $('.node-teaser .node-title').each(function() {
        if ($(this).height() > 19) {
          $(this).nextAll('.field-name-body').addClass('body-ellipsis');
          $(this).siblings('.field-group-format').children('.field-type-location').hide();
        }
      });
    }

  }

    // On resize, run the function and reset the timeout
  // 250 is the delay in milliseconds.
  $(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(truncateTeasers, 250);
  });

  truncateTeasers();

});
