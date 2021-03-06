$(function() {
  $('.approve-friend').click(function(e) {
    $(this).closest('.field-friend-status').html('<div class="btn-group"><a class="button btn-s" href="#"><i class="icon-trash"></i>Unfriend</a></div>');
    $('<div class="form-sent form-success"><i class="icon icon-check"></i> <p>Friend request approved.</p></div>').insertBefore('.l-main').show().delay(5000).fadeOut('slow');
  });

  $('.decline-friend').click(function(e) {
    $(this).closest('.node-teaser-user').remove();
    $('<div class="form-sent form-success"><i class="icon icon-cancel"></i> <p>Friend request declined.</p></div>').insertBefore('.l-main').show().delay(5000).fadeOut('slow');
  });

  $('.unfriend').click(function(e) {
    $(this).parent('.btn-group').html('<a class="button btn-s" href="#"><i class="icon-user-add"></i>Add as friend</a></div>');
    $('<div class="form-sent form-success"><i class="icon icon-cancel"></i> <p>You are no longer friends with this person.</p></div>').insertBefore('.l-main').show().delay(5000).fadeOut('slow');
  });
});
