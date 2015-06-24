$(function() {

  var resizeTimer;

  function once(fn, context) { 
    var result;

    return function() { 
      if(fn) {
        result = fn.apply(context || this, arguments);
        fn = null;
      }

      return result;
    };
  }

  // First function to create the action menu itself.
  var createActionMenu = once(function() {

    // create menu wrapper
    var action_menu_object = "<nav class='action-menu'><ul class='tabs'></ul></nav>";

    $(action_menu_object).insertBefore('header');

    // create menu items from sidebar
    $(blocks).each(function() {

      // get the ID to link to
      var blockId     = $(this).attr('id');

      // manipulate the classes, so we end with 1 class to use
      var blockIcon   = $(this).children('i').clone().removeClass(function (index, css) {
        var class1 = css.match(/(^|\s)block-\S+/g);
        var class2 = css.match(/(^|\s)icon-bg\S+/g);
        var class3 = 'element-hidden';
        return class1+ " "+class2+" "+class3
      });
      var blockIconClass = blockIcon.attr("class");

      // use the data attribute to set the anchor text
      var blockLabel = $(this).find('.block-title').attr("data-amtitle");

      // build the nav item
      var menuItem = "<li><a href='#"+ blockId +"' class='tab'><i class='icon "+ blockIconClass +"'></i>"+ blockLabel +" </a></li>";
      $(menuItem).appendTo($('nav.action-menu .tabs'));
    });

  });

  var blocks = '';

  if ($('.l-has-sidebar-first').length == 0) {

    //check if there are at least two blocks and they are not hidden on mobile nor in a modal window
    var blocksMain = $('.l-main-column > .block').not('.hidden-mobile').not('.white-popup');
    var blocksSidebar = $('.l-sidebar > .block').not('.hidden-mobile').not('.white-popup');
    var blocksHero = $('.region-highlight > .block').not('.hidden-mobile').not('.white-popup');
    blocks = blocksMain.add(blocksSidebar).add(blocksHero);
  }

  var no = $(blocks).length;

  if (no >= 2) {

    createActionMenu();

    if ($(window).width() < 900) {
      $('body').addClass('with-action-menu');
    }

  }

  // On resize, run the function and reset the timeout
  // 250 is the delay in milliseconds.
  $(window).resize(function() {

    if ($(window).width() < 900) {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(overflowDropdown, 350);

      if (no >= 2 && $('body:not(.with-action-menu)') ) {
        $('body').addClass('with-action-menu');
      }

    } else {
      $('body').removeClass('with-action-menu');
    }

  });

  if ($(window).width() < 900) {
    overflowDropdown();
  }

  // This script creates a dropdown of the action menu, when there are more then 2 buttons.
  function overflowDropdown() {

      $('.action-menu .tabs, .action-menu .tabs li').removeAttr('style');

      var menuWrapper = $('.action-menu');

      var fullMenu = menuWrapper.children('.tabs');

      fullMenu.removeClass('flexthis').removeAttr('style');

      $('.action-menu .tabs-overflow').remove();

      var overFlowMenu = "<ul class='tabs-overflow element-invisible'><li><a class='tab-overflow-trigger' href='#' data-dropdown='#am-dropdown'>more <i class='icon-down-mini'></i></a><div class='dropdown dropdown-tip dropdown-relative dropdown-anchor-right' id='am-dropdown'><ul class='dropdown-menu'></ul></div></li></ul>";
      $(overFlowMenu).appendTo('.action-menu');

      var fullHeight = menuWrapper.outerHeight();

      var triggerWidth = $('.action-menu .tab-overflow-trigger').outerWidth();

      //var handle = menuWrapper.find('.tab-overflow-trigger').addClass('element-invisible');

      // The 'more' button is translatable and must always fit
      newfullMenu = fullMenu.css('padding-right', triggerWidth);

      // Remove the moved class on each resize
      fullMenu.find('.moved').removeClass('moved');

      // remove all of the actions out of the overflow menu
      //overFlowMenu.('li').remove();

      // find all of the .items that arent visible and add/clone them to the overflow menu
      fullMenu.children('li:visible').filter(function() {
        var elementOffset = $(this).position().top;
        return elementOffset+$(this).height() > fullHeight;

      }).addClass('moved').clone(true).prependTo('#am-dropdown .dropdown-menu').children('a');

      // Calculate the width of the items the user sees, so we determine the position of the more  button
      var totalWidth = 0;

      fullMenu.children('li:visible:not(.moved)').each(function() {
        totalWidth += $(this).outerWidth(true);
      });

      // Position the 'more' button
      $('.action-menu .tabs-overflow').css("left", totalWidth);

      if ($('#am-dropdown .dropdown-menu').children('li').length!==0) {
        $('.tabs-overflow').removeClass('element-invisible');
      } else {
        //If it is empty hide the dropdown menu,
        fullMenu.addClass('flexthis').css({'padding-right': '0'});
      }

  };

  $('.action-menu li:first').addClass('current');

  if ( ($('.block .map').length != 0) && $(window).width() < 900) {

    var viewportHeight = $(window).height();
    var navbarHeight = $('.l-branding-header').outerHeight();
    var contentHeight = viewportHeight-navbarHeight-50;
    $('.map').not('.flexslider .map').css('height', contentHeight);
    map.invalidateSize();
  }

  if (window.location.hash) {
    var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
    if (hash.match("^block") ) {
      $('.action-menu li, .region-highlight .current, .l-main-column .current, .sidebar .current').removeClass('current');
      $('#' + hash).addClass('current');
      $('.action-menu li a[href="#' + hash + '"]').parent().addClass('current');
    }

  }

  $('.action-menu .tab').click(function(e){

    $('.action-menu li, .region-highlight .current, .l-main-column .current, .sidebar .current').removeClass('current');
    $(this).parent().addClass('current');
    var currentTab = $(this).attr('href');
    $(currentTab).addClass('current');

    e.preventDefault();

    var scrollTo = $('body').offset().top - 50;
    $(window).scrollTop(scrollTo);

    if ($('input[type=file]').length != 0) {
      $('input[type=file]').nicefileinput();
    }

    if ($('.block .map').length != 0) {
      map.invalidateSize(); //solve map is not loading correctly
    }

    $(this).closest('.dropdown').hide();

    $(window).trigger("resize");

  });

  if ($(window).width() < 900) {

    // Click on another button to trigger a action menu item switch
    $('.show-block').click(function(e){
      $('.action-menu li, .l-main-column .current, .sidebar .current').removeClass('current');
      var currentTab = $(this).attr('href');

      $('.action-menu li a').each(function() {
        var link = $(this).attr('href');
        if (link == currentTab) {
          $(this).parent().addClass('current');
        }
      });

      $(currentTab).addClass('current');

      e.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);

    });

  }



});

