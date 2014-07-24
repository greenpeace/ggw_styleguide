function showMap() {
  $('.js-show-mobile-map').click(function(e) {
    // with this function we set the z-index higher
    $('#mobilemap, #close-map').addClass('ontop');
    e.preventDefault();
    // when we show the map the navigation should be disabled.
    $('#main-menu-show, #secondary-menu-show').off('click');
  });

  if ($('#mobilemap').has('.ontop')) {
    $('#close-map').click(function(){
      //with this class we change the z-index back to 0
      $('#mobilemap, #close-map').removeClass('ontop');
      // when we close the map the navigation should be activated again
      $('#main-menu-show, #secondary-menu-show').on('click', offCanvasNav());
    });
  }
}
