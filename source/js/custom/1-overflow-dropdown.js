$(function() {

  var resizeTimer;

  // This script creates a dropdown of the action menu, when there are more then 2 buttons.
  function overflowDropdown() {

    if ( ($('.action-menu').length!=0) && ($(window).width() < 900) ) {

       // Add class so we know to push down the content some more
      $('body').once().addClass('with-action-menu');

      $('.action-menu .tabs, .action-menu .tabs li').removeAttr('style');

      var menuWrapper = $('.action-menu');

      var fullMenu = menuWrapper.children('.tabs');

      var overFlowMenu = menuWrapper.find('.dropdown ul');

      var fullHeight = menuWrapper.outerHeight();

      var triggerWidth = $('.action-menu .tab-overflow-trigger').outerWidth();

      var handle = menuWrapper.find('.tab-overflow-trigger').addClass('element-invisible');

      // The 'more' button is translatable and must always fit
      newfullMenu = fullMenu.css('padding-right', triggerWidth);

      // Remove the moved class on each resize
      fullMenu.find('li.moved').removeClass('moved');

      // remove all of the actions out of the overflow menu
      overFlowMenu.children('li').remove();

      // find all of the .items that arent visible and add/clone them to the overflow menu
      fullMenu.children('li:visible').filter(function() {
        var elementOffset = $(this).position().top;
        return elementOffset+$(this).height() > fullHeight;

      }).addClass('moved').clone(true).prependTo(overFlowMenu[0]).children('a');

      // Calculte the width of the items the user sees, so we determine the position of the more  button
      var totalWidth = 0;

      fullMenu.children('li:visible:not(.moved)').each(function() {
        totalWidth += $(this).outerWidth(true) + 4;
      });

      // Position the 'more' button
      $('.action-menu .tabs-overflow').css("left", totalWidth);

      if (overFlowMenu.children('li').length!==0) {
        handle.removeClass('element-invisible');
      } else {
        //If it is empty hide the dropdown menu,
        $('.action-menu .tabs-overflow').hide();
        fullMenu.css({'padding-right': '0', 'display': 'flex'});
        fullMenu.children('li').css('flex', '1');
      }

    }

  };

  $('.action-menu li:first').addClass('current');

  $('.action-menu .tab').click(function(e){

    $('.action-menu li, .l-main-column .current, .sidebar .current').removeClass('current');
    $(this).parent().addClass('current');
    var currentTab = $(this).attr('href');
    $(currentTab).addClass('current');

    e.preventDefault();

    var scrollTo = $('body').offset().top - 50;
    $(window).scrollTop(scrollTo);

    $('input[type=file]').nicefileinput();

    $(this).closest('.dropdown').hide();

    $(window).trigger("resize");

  });


  function initiateResponsiveTabs() {
    $(window).trigger("resize");
  }

  // On resize, run the function and reset the timeout
  // 250 is the delay in milliseconds.
  $(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(overflowDropdown, 250);
  });

  overflowDropdown();

});

