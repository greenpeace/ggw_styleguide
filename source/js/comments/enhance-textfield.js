$(window).load(function() {

  function maxLength() {
    $('#shoutbox-comment').maxlength({
      max: 255,
      feedbackTarget: '#remain',
      feedbackText: '{r} characters remaining'
    });

  };

  // these element must autogrow as the user types on multiple lines
  function autoGrow() {
    $('.form-comment-message textarea').autogrow({
      animate: false
    });
  };

  function niceInput() {
    $('.comment-form input[type=file], .private-message-form input[type=file]').nicefileinput();
  };

  maxLength();
  autoGrow();
  niceInput();

});
