$(function() {

  function maxLength() {
    $('#shoutbox-comment').maxlength({
      max: 255,
      feedbackTarget: '#remain',
      feedbackText: '{r} characters remaining'
    });

  };

  maxLength();

});
