$(function() {

  function autocomplete() {

    $('.form-autocomplete').blur(function() {
      $(this).next('.autocomplete').fadeOut();
      $(this).removeClass("throbbing");
    });

    $('.form-autocomplete').keypress(function() {
      $(this).next('.autocomplete').fadeIn();
      $(this).addClass("throbbing");
    });

  };

  autocomplete();

});
