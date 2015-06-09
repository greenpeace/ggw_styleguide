// This will run once the entire page (including ajax requests), not just the DOM, is ready
$( window ).load(function() {

  // Universal selector for modal windows with external source
  $('body').magnificPopup({
    delegate: '.modal-inline',
    type: 'inline',
    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
      beforeOpen: function() {
        if($(window).width() < 700) {
          this.st.focus = false;
        } else {
          // find the first form element in this popup and focus here
          var selectors = $(this.st.el.attr('href') + ' form').find('input:text, input:radio, input:checkbox, textarea');
          var focus = selectors.first();
          this.st.focus = '#' + focus.attr('id');
        }
      },
      open: function() {
        $(window).trigger("load");
        $('.form-comment-message textarea').trigger('keyup');
      }
    }
  });

  $('.popup-iframe').magnificPopup({
    type: 'iframe',
    fixedContentPos: false
  });

  $('.popup-ajax').magnificPopup({
    type: 'ajax',
    fixedContentPos: true,
    callbacks: {
      ajaxContentAdded: function() {
        $('.private-message-form input[type=file]').nicefileinput();
      }
    }
  });

  $('.album-thumbnail').magnificPopup({
    preloader: true,
    type: 'image',
    verticalFit: true,
    mainClass: 'mfp-img-mobile',
    gallery:{
      enabled:true,
      navigateByImgClick: true,
      preload: [1,2] //pre load one image before and two images after
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: 'title'
    },
    callbacks: {
      close: function () {
        $(document).trigger('sleepyHead');
      }
    }
  });

  $('.mfp-content .btn-close').click(function(e) {
    $.magnificPopup.close();
    e.preventDefault();
  });

});
