$(function() {

  var resizeTimer;

  if ($('.logged-in').length!==0) {

    var notiValue = $.cookie("notifications");
    var date = new Date();
    var minutes = 1;
    date.setTime(date.getTime() + (minutes * 60 * 1000));

    if (notiValue == undefined) {
      $.cookie("notifications", "6", { expires: date });
      var notifications = '6';
    } else {
      var notifications = notiValue;
    }

    $('.num-notifications').text(notifications);

    if (notiValue == "0") {
      $('.num-notifications').hide();
    }

    $('#showallnotifications').click(function(e) {
      var extraalerts = $('#hidden-notifications').html();
      $('#notialerts .notifications-section').append(extraalerts);
      $("#notialerts .notifications-section").animate({
        scrollTop: 518
      });
      $(this).addClass('disabled');
      e.preventDefault();
    });

    $('.notifications-trigger').click(function(e) {
      $('.num-notifications').text('2');
      if (notiValue == "6") {
        $.cookie('notifications', '2', { expires: date });
      }

      $('.tab:last-child').click(function(e) {
        $('.num-notifications').hide();
        if (notiValue == "2") {
          $.cookie('notifications', '0', { expires: date });
        }
      });
    });

  }

      function notificationTrigger() {

      if($(window).width() <= 899) {

        $('.notifications-trigger')
        .attr('href', '#notifications-panel')
        .addClass('modal-inline')
        .removeAttr('data-dropdown');

        $('#notifications-panel')
        .removeClass('dropdown dropdown-tip dropdown-anchor-right')
        .addClass('mfp-hide')
        .removeAttr('style');

        console.log('kleiner');

      } else if ($(window).width() > 900) {
        console.log('groter');
        $('.notifications-trigger')
        .removeClass('modal-inline')
        .attr('data-dropdown', '#notifications-panel')
        .attr('href', '#');

        $('#notifications-panel')
        .addClass('dropdown dropdown-tip dropdown-anchor-right')
        .removeClass('mfp-hide');
      }

    }

      // On resize, run the function and reset the timeout
    // 250 is the delay in milliseconds.
    $(window).resize(function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(notificationTrigger, 250);
    });

    notificationTrigger();

});
