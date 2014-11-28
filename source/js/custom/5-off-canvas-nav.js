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

}
