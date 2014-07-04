(function($) {

  var resizeTimer; // Set resizeTimer to empty so it resets on page load

  function resizeFunction() {
    mobileNav()
    //stickyForm()
    // when enabling this the browser freezes ???
    //overflowDropdown()
  };

  // On resize, run the function and reset the timeout
  // 250 is the delay in milliseconds. Change as you see fit.
  $(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resizeFunction, 1000);
  });

  resizeFunction();

})(jQuery);
