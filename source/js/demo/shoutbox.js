$(function() {

  function readURL(input) {

    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('#preview-image').attr('src', e.target.result).removeClass('element-hidden');
        $('#remove-image').removeClass('element-hidden');
        $('.preview-wrapper').css('display', 'inline-block');
        $('.form-comment-submit').removeClass('disabled');
      }

    reader.readAsDataURL(input.files[0]);

    }

  }

  $('#remove-image').on('click', function(e) {
    e.preventDefault();
    $('#preview-image').attr('src', 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==');
    $('.preview-wrapper').removeAttr('style');
    $(this).addClass('element-hidden');
    return false;
  });

  $(".form-comment-file").change(function(){
    readURL(this);
  });

  $('.form-comment-submit').click(function(e) {
    var posttext = $('.form-comment-message textarea').val();
    var shoutImage = $('.comment-form-holder .preview-wrapper').html();
    var richLink = $('.comment-form-holder #linkinfo').html();

    var postmarkup = "<div class='avatar-holder media-figure'>";
    postmarkup +=  "<a href='./profile.html' title='View user profile'>";
    postmarkup +=  "<img alt='John Doe Claus' class='lazyload' data-srcset='/photos/60/people7.jpg 1x, /photos/120/people8.jpg 2x' src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='>";
    postmarkup +=  "<noscript>";
    postmarkup +=  "<img alt='John Doe Claus' src='/photos/60/people7.jpg' srcset='/photos/60/people7.jpg 1x, /photos/120/people8.jpg 2x'>";
    postmarkup +=  "    </noscript>";
    postmarkup +=  "  </a>";
    postmarkup +=  "</div>";
    postmarkup +=  "<div class='comment-holder media-body'>";
    postmarkup +=  "  <div class='comment-head'>";
    postmarkup +=  "    <a class='comment-author' href='./my-profile.html' title='View profile'>";
    postmarkup +=  "      John Doe Claus";
    postmarkup +=  "    </a>";
    postmarkup +=  "  </div>";
    postmarkup +=  "  <div class='comment-body'>";
    postmarkup +=  posttext;
    if ($(shoutImage).length != 0) {
      postmarkup +=  shoutImage;
    }
    if ($(richLink).length != 0) {
      postmarkup +=  richLink;
    }
    postmarkup +=  "  </div>";
    postmarkup +=  "  <div class='comment-footer'>";
    postmarkup +=  "    <span class='comment-timestamp'>now</span>";
    postmarkup +=  "    <span class='comment-actions'>";
    postmarkup +=  "      <a class='comment-actionlink modal-inline' href='#reply-comment'>reply</a>";
    postmarkup +=  "      <a class='comment-actionlink modal-inline' href='#edit-comment'>edit</a>";
    postmarkup +=  "      <a class='comment-actionlink modal-inline' href='#delete-comment'>delete</a>";
    postmarkup +=  "    </span>";
    postmarkup +=  "  </div>";
    postmarkup +=  "</div>";
    $("<article class='comment media'>").html(postmarkup).prependTo('.comments');
    $('.form-comment-message textarea').val('');
    $('.form-comment-submit').addClass('disabled');
    $('.comment-form-holder #linkinfo').remove();
    $('.comment-form-holder #preview-image').addClass('element-hidden');
    e.preventDefault();
    $('.comment-body').linkify().urlToLink();
  });

  $('.form-comment-message textarea').keyup(function() {
    var postLength = $('.form-comment-message textarea').val().length;
    var charactersLeft = 255 - postLength;

    if(charactersLeft < 0) {
      $('.form-comment-submit').addClass('disabled');
    }
    else if(charactersLeft == 255) {
      $('.form-comment-submit').addClass('disabled');
    }
    else {
      $('.form-comment-submit').removeClass('disabled');
    }
  });

  $('.comment-form .form-comment-submit').addClass('disabled');


  $('.show-linkinfo').click(function(e) {
    $('#shoutbox-comment-link').urlive({
      container: '#linkinfo',
      imageSize: 'small',
      callbacks: {
        onStart: function () {
          $('#shoutbox-comment-link').addClass('throbbing');
          $('.show-linkinfo').html('loading ...');
          $('.urlive-container').urlive('remove');
          $('#linkinfo p').remove();
          $('.close-linkinfo').addClass('element-hidden');
        },
        onSuccess: function() {
          $('#linkinfo').show();
        },
        onFail: function() {
          $('#linkinfo').show().prepend('<p>Cannot find a website here...</p>');
          $('.show-linkinfo').html('Check link');
        },
        noData: function () {
          $('#linkinfo').show().prepend('<p>Cannot find a website here...</p>');
          $('#shoutbox-comment-link').removeClass('throbbing');
          $('.show-linkinfo').html('Check link');
        },
        onLoadEnd: function() {
          $('#shoutbox-comment-link').removeClass('throbbing');
          $('.close-linkinfo').removeClass('element-hidden');
          $('.show-linkinfo').html('Check link');
          $('.btn-primary').prop('disabled', false);
          $('.urlive-img-wrapper').append('<a href="#" class="remove-image"></a>');
          $('.remove-image').click(function(e) {
            $('.urlive-img-wrapper').remove();
            e.preventDefault();
          });
        }
      }
    });
    e.preventDefault();
  });

  $('.close-linkinfo').click(function(e) {
    $('#shoutbox-comment-link').urlive("remove", 400);
    $(this).addClass('element-hidden');
    $('#linkinfo').hide();
    e.preventDefault();
  });

  $('.form-addlink .btn-primary').click(function(e) {
    if ($('.comment-form-holder .urlive-container').length) {
      $('.comment-form-holder .urlive-container').remove();
    }
    var linkclone = $('.urlive-container').clone().wrapInner('<div class="linkclone"></div>');
    linkclone.insertAfter('.block-comments .form-comment-message');

    $('.form-comment-submit').removeClass('disabled');
    $.magnificPopup.close();
    e.preventDefault();

    $('.linkclone .remove-image').click(function(e) {
      $('.linkclone .urlive-img-wrapper').remove();
      e.preventDefault();
    });

    $('.linkclone .close-linkinfo').click(function(e) {
      $(this).closest('.urlive-container').remove();
      e.preventDefault();
    });

  });

  $('.form-comment-submit').click(function(event) {
     event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 300);
    $('<div class="form-sent form-success"><i class="icon icon-check"></i> <p>Your comment has been posted.</p></div>').insertBefore('.l-main').hide().slideDown('slow').delay(6000).slideUp();
    $('.remove-image').addClass('element-hidden');
    $('.comment-body .remove-image, .comment-body .close-linkinfo').remove();
  });

});
