$(function() {

  var resizeTimer; // Set resizeTimer to empty so it resets on page load

  function mediaAlignment() {

    // Get the wisth of the container of the image
    var containerWidth = $('.node-full .field-name-body').width();

    // Find all images
    $('.node-full .field-name-body img').each(function(){

      // Calculate how much is left
      var spaceLeft = containerWidth - $(this).width();

      // If there is less than 100 pixels left, add a class
      if (spaceLeft <= 100) {
        $(this).addClass('nofloat');
      } else {
        $(this).removeClass('nofloat');
      }

    });
  }

  // On resize, run the function and reset the timeout
  // 250 is the delay in milliseconds.
  $(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(mediaAlignment, 250);
  });

  mediaAlignment();

});
