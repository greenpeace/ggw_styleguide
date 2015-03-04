$(function() {

  $('.sidebar-first .sf-navbtn:first').addClass('current');

  $('.sidebar-first .sf-navbtn').click(function(e){

    $('.sidebar-first .sf-navbtn, .l-main-column .current').removeClass('current');
    $(this).addClass('current');
    var currentTab = $(this).attr('href');
    $(currentTab).addClass('current');

    e.preventDefault();

    if($(window).width() <= 901) {

      var scrollTo = $('body').offset().top - 50;
      $(window).scrollTop(scrollTo);
      $('input[type=file]').nicefileinput();

      $('.chosen-select').trigger('chosen:updated');

    } else {

      $('html,body').animate({scrollTop: $(currentTab).offset().top -100},'slow');

    }

  });

});
