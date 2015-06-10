$(function() {

  lazyload_youtube.init({
    theme: 'dark',
    colour: 'white',
    controls: true,
    responsive: true,
    thumbnailquality: '0'
  });

  if ($('.node-full .container-lazyload').length != 0 && $(window).width() > 899) {
    $('.node-full .container-lazyload').insertBefore('.l-main-column');
  }

});
