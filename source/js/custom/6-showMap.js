$(function() {

  function showMap() {
    $('.js-show-mobile-map').click(function(e) {
      // with this function we set the z-index higher
      $('#mobilemap, #close-map').addClass('ontop');
      e.preventDefault();
    });

    if ($('#mobilemap').has('.ontop')) {
      $('#close-map').click(function(){
        //with this class we change the z-index back to 0
        $('#mobilemap, #close-map').removeClass('ontop');
      });
      $('#main-menu-show, #secondary-menu-show').click(function(){
        //with this class we change the z-index back to 0
        $('#mobilemap, #close-map').removeClass('ontop');
      });
    }
  }

});
