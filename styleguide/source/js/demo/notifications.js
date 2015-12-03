$(function() {

  var resizeTimer;

  if ($('.logged-in').length!==0) {

    // demo part start

    // Notifications
    var date = new Date();
    var minutes = 1;
    date.setTime(date.getTime() + (minutes * 60 * 1000));
    var notiValue = $.cookie("notifications");


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
    var messagesValue = $.cookie("messages");

    if (messagesValue == undefined) {
      $.cookie("messages", 2, { expires: date });
      var messages = 2;
    } else {
      var messages = messagesValue;
    }

    $('#messages-number').text(messages);

    if (messages == 0) {
      $('#messages-trigger').attr('href', './my-messages.html').removeAttr('data-dropdown');
      $('#messages-number').hide();
    }

    if (messages > 0) {

      $('#messages-panel .media').click(function(e) {
        messages--;
        $('#messages-number').text(messages);
        $.cookie('messages', messages, { expires: date });
        if (messages == 0) {
          $('#messages-number').hide();
          $('#messages-trigger').attr('href', './my-messages.html').removeAttr('data-dropdown');
        }
      });

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

    if ($.isNumeric(combinedNotifications) ) {

      var combinedNotifications = parseInt($('#notifications-number').text()) + parseInt($('#messages-number').text());
      $('#combined-number').text(combinedNotifications);
      if (combinedNotifications == 0) {
        $('#combined-number').hide();
      }

    }

    var vh = $(window).height();

    function notificationTrigger() {

      if($(window).width() <= 899) {

        $('#notifications-trigger').attr('href', '#notifications-panel');
        $('#messages-trigger').attr('href', './my-messages.html');

        $('.attention-trigger').removeAttr('data-dropdown');

        $('#notifications-trigger').addClass('modal-inline');

        $('.attention-panel').removeClass('dropdown dropdown-tip dropdown-anchor-right').addClass('mfp-hide').removeAttr('style');

        $('.attention-panel .tabable-block').css({
          'max-height': (vh - 70),
          'overflow': 'auto'
        });

      } else if ($(window).width() > 900) {

        $('.attention-trigger')
          .removeClass('modal-inline');

        $('#notifications-trigger').attr('data-dropdown', '#notifications-panel').attr('href', '#');

        if (messages > 0) {
          $('#messages-trigger').attr('data-dropdown', '#messages-panel').attr('href', '#');
        }

        $('.attention-panel').addClass('dropdown dropdown-tip dropdown-anchor-right');
        $('#notifications-panel').removeClass('mfp-hide');
      }

    }


    $(window).resize(function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(notificationTrigger, 250);
    });

    notificationTrigger();

  }

  var cookies_accepted = $.cookie("cookie_acceptance");

  $('#hide-cookies').click(function(event) {
    $(this).closest('.cookiewall').hide();
    $.cookie('cookie_acceptance', 'is_dismissed', { expires: 7, path: '/' });
    event.preventDefault();
  });

  if (cookies_accepted != 'is_dismissed') {
    $('.cookiewall').removeClass('element-hidden');
  }

});
