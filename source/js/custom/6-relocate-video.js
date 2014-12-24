$(function() {

  function relocateVideo() {

    if ($('.node-full .container-lazyload').length != 0) {
      $('.node-full .container-lazyload').insertBefore('.l-main-column');
    }

  }

  relocateVideo();

});
