$(function() {

  function autocomplete() {

    $('.sidebar .form-autocomplete').blur(function() {
      $(this).next('.autocomplete').fadeOut();
      $(this).removeClass("throbbing");
    });

    $('.sidebar .form-autocomplete').keypress(function() {
      $(this).next('.autocomplete').fadeIn();
      $(this).addClass("throbbing");
    });

  };

  autocomplete();

});
