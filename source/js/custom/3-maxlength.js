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
    $('.comment-form input[type=file]').nicefileinput();
  };

  var intervalFunc = function () {
    $('#file-name').removeClass('element-hidden').addClass('filename').html($('#uploadimage').val());
  };

  $('.launcher').click(function() {
    $('#uploadimage').click();
    setInterval(intervalFunc, 1);
    return false;
  });

  maxLength();
  autoGrow();
  niceInput();

});
