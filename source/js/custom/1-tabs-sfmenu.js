
$(function() {

  var resizeTimer;

  $('.sidebar-first .sf-navbtn:first').addClass('current');

  if (($(window).width() >= 900) && $('.sfmenu').length!=0) {

    // Create a clone of the menu, right next to original.
    $('.sfmenu').addClass('original-sfmenu').clone().insertAfter('.l-header').addClass('cloned-fixed-menu').removeClass('original-sfmenu');

    scrollIntervalID = setInterval(stickIt, 10);

    function stickIt() {

      var orgElementPos = $('.original-sfmenu').offset();
      orgElementTop = orgElementPos.top - 100;

      if ($(window).scrollTop() >= (orgElementTop)) {
      // scrolled past the original position; now only show the cloned, sticky element.

        // Cloned element should always have same left position and width as original element.
        orgElement = $('.original-sfmenu');
        coordsOrgElement = orgElement.offset();
        leftOrgElement = coordsOrgElement.left;
        widthOrgElement = orgElement.css('width');
        $('.cloned-fixed-menu').css('left',leftOrgElement+'px').css('top',100).css('width',widthOrgElement).addClass('deskvisible').removeClass('deskinvisible');
        $('.original-sfmenu').addClass('deskinvisible').removeClass('deskvisible');
      } else {
        // not scrolled past the menu; only show the original menu.
        $('.cloned-fixed-menu').addClass('deskinvisible').removeClass('deskvisible');
        $('.original-sfmenu').addClass('deskvisible').removeClass('deskinvisible');
      }
    }

  }

  $('.l-main-column section').each(function(i) {
    var position = $(this).position();

    $(this).scrollspy({
      min: position.top - 110,
      max: position.top + $(this).height() - 110,
      onEnter: function(element, position) {
        $('.cloned-fixed-menu a[href="#' + element.id +'"]').addClass('current');
      },
      onLeave: function(element, position) {
        $('.cloned-fixed-menu a[href="#' + element.id +'"]').removeClass('current');
      }
    });
  });

  $('.sf-navbtn').click(function(e){

    e.preventDefault();
    var selectedHref = $(this).attr('href'),
    target = $(selectedHref);

    //goto that anchor by setting the body scroll top to anchor top
    $('html, body').animate({scrollTop: target.offset().top - 100}, 300);
  });


});
