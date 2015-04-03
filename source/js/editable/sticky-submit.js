/*
$(function() {

  if ( ($('#section-submit').length!=0) && ($(window).width() < 900) ) {

    $('#section-submit').clone(true).addClass('section-submit').attr('id', '').insertAfter('.l-branding-header');

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
        $('.section-submit').addClass('stick-to-top');
        $('#section-submit').addClass('element-invisible');
      } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
          $('.section-submit').removeClass('stick-to-top');
        }
      }

      lastScrollTop = st;
    }

  }

});
*/
