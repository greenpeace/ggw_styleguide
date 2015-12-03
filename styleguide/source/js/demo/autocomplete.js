$(function() {

  // autocomplete demo
  // when the input field with class .form-autocomplete is trigger with a key
  // the adjencing field with .auto complete is shown. Also a throbber is activated.

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
