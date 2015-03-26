$(function() {

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

    $('<li class="menu-item"><a href="#" class="notifications-trigger" data-dropdown="#notifications-panel"><i class="icon icon-globe"></i><span class="num-notifications">'+ notifications +'</span></a></li>').insertBefore($('.user-menu .menu-item:nth-of-type(2)'));

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


});
