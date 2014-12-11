$(function() {

  var resizeTimer; // Set resizeTimer to empty so it resets on page load

  function mobileNav() {

        // only for small devices
        if($(window).width() <= 901) {

          //add contrib navigation script
          $('.main-menu .menu').navgoco({
            caretHtml: '<i class="navcaret"></i>',
            accordion: true,
            openClass: 'open',
            save: true,
            cookie: {
              name: 'navgoco',
              expires: false,
              path: '/'
            },
            slide: {
              duration: 300,
              easing: 'swing'
            }
          });

          // undo the removing of style attr when switching from wide display
          $('.main-menu .menu .menu').css('display', 'none');
        }
        // for desktop remove the style attribute.
        else if($('.mobile-nav').is(':hidden')) {
          $('.main-menu .menu .menu').removeAttr('style');
        }
    };

  // On resize, run the function and reset the timeout
  // 250 is the delay in milliseconds.
  $(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(mobileNav, 250);
  });

  mobileNav();

});
