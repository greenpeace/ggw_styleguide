$(function() {

  if(window.location.hash) {
    var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character

    // used to giev feedback a form has been saved
    if (hash == 'form-saved') {
      $('<div class="form-sent form-success"><i class="icon icon-check"></i> <p>Your changes have been saved.</p></div>').insertBefore('.l-main').show().delay(5000).fadeOut('slow');
    }

    if (hash == 'album-created') {
      $('<div class="form-sent form-success"><i class="icon icon-check"></i> <p>The album "Photos of induction training" has been published.</p></div>').insertBefore('.l-main').show().delay(5000).fadeOut('slow');
    }

  }

});
