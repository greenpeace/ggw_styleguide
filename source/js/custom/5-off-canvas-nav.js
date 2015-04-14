$(function() {

  function isMobile() {
    try{ document.createEvent("TouchEvent"); return true; }
    catch(e){ return false; }
  }

  function offCanvasNav() {

    var root = $(document.documentElement)

    // Open and close the primary-nav clicking on
    $('#main-menu-show').click(function(e) {
      root.toggleClass('primary-nav');

      if(root.hasClass('secondary-nav')) {
        root.removeClass('secondary-nav')
      }
      e.preventDefault();

    });

    // Open and close the secondary-nav clicking on
    $('#secondary-menu-show').click(function(e) {
      root.toggleClass('secondary-nav');

      if(root.hasClass('primary-nav')) {
        root.removeClass('primary-nav')
      }
      e.preventDefault();
    });

    if ( isMobile() == true ) {
      root.swipe({
        // If primary-nav is open, close it with a left swipe
        swipeLeft: function(e) {
          if(checkOpenMenu()==1) {
            $('html').toggleClass('primary-nav');
          }
        },

        // If secondary-nav is open, close it with a right swipe
        swipeRight: function(e) {
          if(checkOpenMenu()==2) {
            $('html').toggleClass('secondary-nav');
          }
        }
      });
    }

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

    // On resize, close the menu
    // 250 is the delay in milliseconds.
    $(window).resize(function() {
      if(root.hasClass('primary-nav')) {
        root.removeClass('primary-nav')
      }
      if(root.hasClass('secondary-nav')) {
        root.removeClass('secondary-nav')
      }
    });

    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.l-branding-header').outerHeight();

    $(window).scroll(function(event){
      didScroll = true;
    });

    if ( isMobile() == true ) {
      root.swipe( {
        swipeDown:function(e) {
          didScroll = true;
        },
        threshold: 50 // user must at least swipe down 50px.
      });
    }

    setInterval(function() {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 50);

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
        $('.action-menu').addClass('stick-to-top');
        $('.l-main').addClass('with-action-bar');
      } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
          $('.l-branding-header').removeClass('nav-up').addClass('nav-down');
          $('.action-menu').removeClass('stick-to-top');
          $('.l-main').removeClass('with-action-bar');
        }
      }

      lastScrollTop = st;
    }

    if ( isMobile() == true ) {
      $('.form-text, textarea')
        .blur(function() {
          $('.l-branding-header, .header').removeClass('element-hidden');
        })
        .focus(function() {
          $('.l-branding-header, .header').addClass('element-hidden');
        });

    }

  }

  if($(window).width() <= 901) {
    offCanvasNav()
  }

});
