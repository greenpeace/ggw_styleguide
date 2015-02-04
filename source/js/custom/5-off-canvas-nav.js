$(function() {

  function offCanvasNav() {

    var root = $(document.documentElement)

    // Open and close the primary-nav clicking on
    $('#main-menu-show').click(function(e) {
      root.toggleClass('primary-nav');

      if(root.hasClass('secondary-nav')) {
        root.removeClass('secondary-nav')
      }
      if(root.hasClass('sidebar-active')) {
        root.removeClass('sidebar-active')
      }

      e.preventDefault();

    });

    // When the primary-nav is open, you can close it with a left swipe
    root.touchwipe({
      wipeLeft: function(e) {
        e.preventDefault();
        if(checkOpenMenu()==1)
        {
          $('html').toggleClass('primary-nav');
        }
      }
    });

    // Open and close the secondary-nav clicking on
    $('#secondary-menu-show').click(function(e) {
      root.toggleClass('secondary-nav');

      if(root.hasClass('primary-nav')) {
        root.removeClass('primary-nav')
      }
      if(root.hasClass('sidebar-active')) {
        root.removeClass('sidebar-active')
      }
      e.preventDefault();
    });

    // When the secondary-nav is open, you can close it with a right swipe
    root.touchwipe({
      wipeRight: function(e) {
        e.preventDefault();
        if(checkOpenMenu()==2)
        {
          $('html').toggleClass('secondary-nav');
        }
      }
    });

    //function to check if the primary-nav or secondary-nav is opened
    var menuOpen=0;

    function checkOpenMenu() {
      var tempOpenMenuVar = $('html').attr('class').split(/\s+/);
      var rightopen = false;
      var leftopen = false;
      for(var i = 0 ; i < tempOpenMenuVar.length ; i ++)
      {
        if(tempOpenMenuVar[i] == "primary-nav")
        {
          leftopen = true;
          i = tempOpenMenuVar.length;
        }
        if(tempOpenMenuVar[i] == "secondary-nav")
        {
          rightopen = true;
          i = tempOpenMenuVar.length;
        }
      }
      if(!rightopen && !leftopen)
      {
        menuOpen = 0;
      }
      if(leftopen)
      {
        menuOpen = 1;
      }
      if(rightopen )
      {
        menuOpen = 2;
      }
      return menuOpen;
    }

    if ($('.logged-in').length!==0) {
      var totalNotifications = 0

      $('.user-menu .num-notifications').each(function() {
        var notification =+ Number($(this).text());
        totalNotifications = totalNotifications + notification;
      });

      $('<li class="menu-item notifications-trigger" data-dropdown="notifications-panel"><i class="icon icon-globe"></i><span class="num-notifications">' + totalNotifications +'</span></li>').insertBefore($('.user-menu .menu-item:nth-of-type(2)'));
    }

    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.l-branding-header').outerHeight();

    $(window).scroll(function(event){
      didScroll = true;
    });

    setInterval(function() {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 150);

    function hasScrolled() {
      var st = $(this).scrollTop();

      // Make sure they scroll more than delta
      if(Math.abs(lastScrollTop - st) <= delta)
          return;

      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.l-branding-header').removeClass('nav-down').addClass('nav-up');
      } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
          $('.l-branding-header').removeClass('nav-up').addClass('nav-down');
        }
      }

      lastScrollTop = st;
    }

  }

  offCanvasNav()

});
