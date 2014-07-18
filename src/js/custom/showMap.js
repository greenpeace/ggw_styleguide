function showMap() {
  $('.js-show-mobile-map').click(function(e) {
    $('#mobilemap, #close-map').addClass('ontop');
    e.preventDefault();
  });

  if ($('#mobilemap').has('.ontop')) {
    $('#close-map').click( function(){
      $('#mobilemap, #close-map').removeClass('ontop');
    });
  }
}
