// This script creates a dropdown of the tabs menu, when there is not enough space to fit them on one row.

$(function() {

  var resizeTimer; // Set resizeTimer to empty so it resets on page load

  if ($('.tabwrapper').length!=0) {

    function responsiveTabs() {

      $('.tabwrapper').each(function() {

      var menuWrapper = $(this);

      var fullMenu = menuWrapper.children('.tabs');

      var overFlowMenu = menuWrapper.find('.dropdown ul');

      var fullHeight = menuWrapper.outerHeight();

      var triggerWidth = $(this).find('.tab-overflow-trigger').outerWidth();

      var handle = menuWrapper.find('.tab-overflow-trigger').addClass('element-invisible');

      // The 'more' button is translatable and must always fit
      newfullMenu = fullMenu.css('padding-right', triggerWidth);

      // Remove the moved class on each resize
      fullMenu.find('li.moved').removeClass('moved');

      // remove all of the actions out of the overflow menu
      overFlowMenu.children('li').remove();

      // find all of the .items that arent visible and add/clone them to the overflow menu
      fullMenu.children('li').filter(function() {
        var elementOffset = $(this).position().top;
        return elementOffset+$(this).height() > fullHeight;
      }).addClass('moved').clone(true).prependTo(overFlowMenu[0]).children('a').removeClass('tab');

      // Calculte the width of the items the user sees, so we determine the position of the more  button
      var totalWidth = 0;

      fullMenu.children('li:not(.moved)').each(function() {
        totalWidth += $(this).outerWidth(true) + 4;
      });

      // Position the 'more' button
      $(this).find('.tabs-overflow').css("left", totalWidth);

      // For desktop we need extra space
      if ($(window).width() > 900) {
        $(this).find('.tabs-overflow').css("left", totalWidth + 15);
      }

      if (overFlowMenu.children('li').length!=0) {
        handle.removeClass('element-invisible');
      } else {
        //If it is empty hide the dropdown menu,
        fullMenu.css('padding-right', '0');
      }

      $(this).find('.tabs li:first .tab').addClass('active');

    });

    };

    $('.tabwrapper .tab').click(function(e){
      // find only the closest mathcing elements, because the tabwrapper can be implemented multiple times on a page.
      $(this).closest('ul').find('.tab').removeClass('active');
      $(this).closest('.content').find('.tabable-block').removeClass('active');
      $(this).addClass('active');
      var currentTab = $(this).attr('href');
      $(currentTab).addClass('active');

      e.preventDefault();

    });

  }

  // On resize, run the function and reset the timeout
  // 250 is the delay in milliseconds.
  $(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(responsiveTabs, 250);
  });

  responsiveTabs();

});
