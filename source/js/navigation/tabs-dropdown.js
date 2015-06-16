$(function() {

  // This script creates a dropdown of the tabs menu, when there is not enough space to fit them on one row.
  $('.tabable-wrapper .tab').click(function(e) {
    // find only the closest mathcing elements, because the tabwrapper can be implemented multiple times on a page.
    $(this).closest('ul').find('.tab').removeClass('active');
    $(this).closest('.content').find('.tabable-block').removeClass('active');
    $(this).addClass('active');
    var currentTab = $(this).attr('href');
    $(currentTab).addClass('active');

    e.preventDefault();

  });

  // On resize, run the function and reset the timeout
  // 250 is the delay in milliseconds.
  var resizeTimer; // Set resizeTimer to empty so it resets on page load
  $(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout($('.tabwrapper').responsiveTabs(), 250);
  });

  $('.tabwrapper').responsiveTabs();

});