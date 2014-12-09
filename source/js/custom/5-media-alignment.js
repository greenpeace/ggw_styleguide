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
