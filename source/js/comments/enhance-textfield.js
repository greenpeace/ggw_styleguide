$(function() {

  // 1. these element must autogrow as the user types on multiple lines
  // 2. Transform a normal input[type=file] into a styled button
  // 3. Restrict how mich characters the user can enter in a shout
  $('.comment-form textarea').autogrow({animate: false}); //1
  $('.comment-form input[type=file]').nicefileinput(); //2
  $('#shoutbox-comment').maxlength({ //3
    max: 255,
    feedbackTarget: '#remain',
    feedbackText: '{r} characters remaining'
  });

});
