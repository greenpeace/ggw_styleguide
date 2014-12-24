$(function() {

  var resizeTimer;

  var root = $(document.documentElement);

  var sidebarButton = $('<div class="trigger-sidebar js-show-sidebar"><i class="button icon-button"></i></div>');

  if ($('.l-has-sidebar').length != 0 && $('.sidebar').length != 0) {
    $(sidebarButton).insertBefore('.l-main').hide();
    var sidebarClone = $('.sidebar').clone();
    $(sidebarClone).insertBefore('.l-main').addClass('sidebar-mob').removeClass('l-sidebar');
  }

  function showSidebarTrigger() {

    if ($(window).width() <= 901) {
      sidebarButton.show();
      $('.l-sidebar').hide();
    } else {
      sidebarButton.hide();
      $('.l-sidebar').show();
    }

  }

  function offCanvasSidebar() {

    // Open and close the sidebar clicking on the trigger
    $('.js-show-sidebar').click(function(e) {
      root.toggleClass('sidebar-active');
      e.preventDefault();
    });

    // When the sidebar is open, you can close it with a right swipe
    root.touchwipe({
      wipeRight: function(e) {
        e.preventDefault();
        if(checkOpenSidebar()==1)
        {
          $('html').removeClass('sidebar-active');
        }
      }
    });

    //function to check if the sidebar is opened
    var sidebarOpen=0;

    function checkOpenSidebar() {
      var tempOpenSidebarVar = $('html').attr('class').split(/\s+/);
      var rightopen = false;
      for(var i = 0 ; i < tempOpenSidebarVar.length ; i ++)
      {
        if(tempOpenSidebarVar[i] == "sidebar-active")
        {
          rightopen = true;
          i = tempOpenSidebarVar.length;
        }
      }
      if(rightopen )
      {
        sidebarOpen = 1;
      }
      return sidebarOpen;
    }

    // Create a Mask
    // Append the mask inside <body>
    $('.l-main').prepend('<div class="mask"></div>');

    // Disable mask transitions on Android to boost performance
    if (navigator.userAgent.match(/Android/i) !== null) {
      $('.l-main').addClass('android');
    }

    // Close sidebar when tapping the mask under it
    $('.mask').click(function(e) {
      e.preventDefault();
      root.removeClass('sidebar-active');
    });

  }

    // On resize, run the function and reset the timeout
  // 250 is the delay in milliseconds.
  $(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(showSidebarTrigger, 250);
  });

  showSidebarTrigger(),
  offCanvasSidebar()

});
