$(function() {

  var resizeTimer;

  if ($('.logged-in').length!==0) {

    // demo part start

    // Notifications
    var date = new Date();
    var minutes = 1;
    date.setTime(date.getTime() + (minutes * 60 * 1000));
    var notiValue = $.cookie("notifications");
    var messagesValue = $.cookie("messages");

    if (notiValue == undefined) {
      $.cookie("notifications", "6", { expires: date });
      var notifications = '6';
    } else {
      var notifications = notiValue;
    }

    $('#notifications-number').text(notifications);

    if (notiValue == "0") {
      $('#notifications-number').hide();
    }

    $('#notifications-trigger').click(function(e) {
      $('#notifications-number').text('2');
      if (notiValue == "6") {
        $.cookie('notifications', '2', { expires: date });
      }

      $('.tab:last-child').click(function(e) {
        $('#notifications-number').hide();
        if (notiValue == "2") {
          $.cookie('notifications', '0', { expires: date });
        }
      });
    });

    // Messages
    if (messagesValue == undefined) {
      $.cookie("messages", "2", { expires: date });
      var messages = '2';
    } else {
      var messages = messagesValue;
    }

    $('#messages-number').text(messages);

    if (messagesValue == "0") {
      $('#messages-number').hide();
    }
    // demo part end

    $('#showallnotifications').click(function(e) {
      var extraalerts = $('#hidden-notifications').html();
      $('#notialerts .notifications-section').append(extraalerts);
      $("#notialerts .notifications-section").animate({
        scrollTop: 518
      });
      $(this).addClass('disabled');
      e.preventDefault();
    });

  }

    function notificationTrigger() {

      if($(window).width() <= 899) {

        $('#notifications-trigger').attr('href', '#notifications-panel');
        $('#messages-trigger').attr('href', '#messages-panel');

        $('.attention-trigger')
          .addClass('modal-inline')
          .removeAttr('data-dropdown');

        $('.attention-panel')
          .removeClass('dropdown dropdown-tip dropdown-anchor-right')
          .addClass('mfp-hide')
          .removeAttr('style');

      } else if ($(window).width() > 900) {

        $('.attention-trigger')
          .removeClass('modal-inline')
          .attr('href', '#');

        $('#notifications-trigger').attr('data-dropdown', '#notifications-panel');
        $('#messages-trigger').attr('data-dropdown', '#messages-panel');

        $('.attention-panel')
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
