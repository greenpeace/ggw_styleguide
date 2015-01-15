$(function() {

  function autocomplete() {

    // tags
    $("#tagsinput").blur(function() {
      $('#tagsautocomplete').fadeOut();
      $(this).removeClass("throbbing");
    });

    $("#tagsinput").keypress(function(){
      $('#tagsautocomplete').fadeIn();
      $(this).addClass("throbbing");
    });

    // Author
    $("#authorinput").blur(function() {
      $('#authorautocomplete').fadeOut();
      $(this).removeClass("throbbing");
    });

    $("#authorinput").keypress(function(){
      $('#authorautocomplete').fadeIn();
      $(this).addClass("throbbing");
    });

    // Skills
    $("#skillsinput").blur(function() {
      $('#skillsautocomplete').fadeOut();
      $(this).removeClass("throbbing");
    });

    $("#skillsinput").keypress(function(){
      $('#skillsautocomplete').fadeIn();
      $(this).addClass("throbbing");
    });

    // Profession
    $("#professioninput").blur(function() {
      $('#professionautocomplete').fadeOut();
      $(this).removeClass("throbbing");
    });

    $("#professioninput").keypress(function(){
      $('#professionautocomplete').fadeIn();
      $(this).addClass("throbbing");
    });

    // School
    $("#schoolinput").blur(function() {
      $('#schoolautocomplete').fadeOut();
      $(this).removeClass("throbbing");
    });

    $("#schoolinput").keypress(function(){
      $('#schoolautocomplete').fadeIn();
      $(this).addClass("throbbing");
    });

  };

  autocomplete();

});
