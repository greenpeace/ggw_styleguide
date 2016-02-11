$(function() {

  // function to clone collection of fields, mainly used for social media
  // ! probably for prototype/ demo only

  $('.delete-clone').click(function(event) {
    event.preventDefault();
    var tr = $(this).closest('.row');
    tr.find('input').each(function(){
      $(this).val('');
    });
    tr.find('select').each(function(){
      $(this).val('').trigger('chosen:updated');
    });
  });

  var counter = 0;
  $('.clone-trigger').click(function(e){
    $('.clone-item').clone(true)
    .insertAfter('.clone-item')
    .removeClass('clone-item')
    .addClass('item' + counter)
    .find('input').val('');
    counter++;
    e.preventDefault();


    $('.field-event-roles-values').sortable({
      handle: '.tabledrag-handle',
      items: ':not(.disabled)'
    });

  });



  $('#section-social .form-select').on('change', function() {
    var channel = {fb: 'http://www.facebook.com/username', tw: 'http://www.twitter.com/username', in: 'http://www.linkedin.com/username', pi: 'http://www.pinterest.com/username', gp: 'http://plus.google.com/username', vk: 'http://www.vk.com/username'};
    $(this).closest('.row').find('.form-text').attr('placeholder', channel[$(this).val()]);
  });

  // When editing a group or event with an address,
  // disable the address field untill country has been selected
  var editableAddress = $('#edit-event-address, #edit-group-address')

  $(editableAddress).prop("disabled", true);
  $(editableAddress).prop("placeholder", "please select a country first...");

  $("#country-select").on("change", function() {
    $(editableAddress).prop("disabled", false);
    $(editableAddress).prop("placeholder", "venue, street, city etc.");
  });

  // When selecting a certain group type when editing a group, a new section will appear.
  // It can be local groups or skills-based groups sections.

  $('#section-localgroup, #section-skillsgroup').hide();

  $('input:radio[name="field_group_type"]').change(function(){
    if ($(this).is(':checked') && $(this).val() == '4') {
      $('#section-localgroup').show();

      if ($('.block .map').length != 0) {
        map.invalidateSize(); //solve map is not loading correctly
      }

    } else if ($(this).is(':checked') && $(this).val() != '4') {
      $('#section-localgroup').hide();
    }

    if ($(this).is(':checked') && $(this).val() == '5') {
      $('#section-skillsgroup').show();

    } else if ($(this).is(':checked') && $(this).val() != '5') {
      $('#section-skillsgroup').hide();
    }
  });

  // On the user edit account page, when selecting the option to specify a certain select choice
  // a fieldset with additional fields will show. This is always the next div with the class '.collapsible-fieldset-wrapper'.
  $('#section-notifications .form-select').change(function(){
    if( $(this).val() == "specify" ) {
      $(this).closest('.form-wrapper').next('.collapsible-fieldset-wrapper').removeClass('element-hidden');
    } else if( $(this).val() != "specify" ) {
      $(this).closest('.form-wrapper').next('.collapsible-fieldset-wrapper').addClass('element-hidden');
    }

  });

  $('.input-good').click(function(e) {
    e.preventDefault(); // stop default behaviour
    e.stopPropagation(); // stop the click event from bubbling up when we click on the trigger

    var target = $(this).data('target');
    if (target != undefined || target != null) {
      window.location = './' + target;
    }

  });

  $('.input-false').one('click', function(e) {
    e.preventDefault(); // stop default behaviour
    e.stopPropagation(); // stop the click event from bubbling up when we click on the trigger
    $('.help-block').removeClass('element-invisible');
    $('<div class="absolute_message"><div class="form-sent form-error"> <p>You need to fill in the required fields.</p></div></div>').insertBefore('.l-main').hide().fadeIn('slow');
    $('.has-error-hidden').removeClass('has-error-hidden').addClass('has-error');
    $('html, body').animate({
      scrollTop: $('.absolute_message').offset().top - 110
    }, 1000);
    showErrorIcons();
  });

  $(document).on('click', function() {
    $('.form-sent').fadeOut('slow');
  });


  // Image field upload for edit node

  // The button that triggers the selection of an image.
  $('.launcher').on('click', function(e) {
    e.preventDefault();
    $('#uploadimage').click();
  });

  // The button that removes an image.
  $('#remove-image').on('click', function(e) {
    e.preventDefault();
    $('#preview-image').attr('src', 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==');
    $('.preview-wrapper').removeAttr('style');
    $('#file-name').addClass('element-hidden').removeClass('filename').html('');
    $('.media-body .form-description').removeClass('element-hidden');
    $('.launcher').removeClass('element-hidden');
    $(this).addClass('element-hidden');
    return false;
  });

  // Image preview for uploading files
  function readURL(input) {

    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('#preview-image').attr('src', e.target.result);
        $('.preview-wrapper').css('background-color', '#fff');
        $('.launcher').addClass('element-hidden');
        $('.media-body .form-description').addClass('element-hidden');
        $('#remove-image').removeClass('element-hidden');
      }
      reader.readAsDataURL(input.files[0]);
    }

  }

  $("#uploadimage").change(function(){
    readURL(this);
    $('#file-name').removeClass('element-hidden').addClass('filename').html(this.files[0].name);
  });


    var formmodified=0;
    $('form *').change(function(){
        formmodified=1;
    });
    window.onbeforeunload = confirmExit;
    function confirmExit() {
        if (formmodified == 1) {
            return "You have made changes to this content which is not saved. Scroll down to save. Do you wish to leave the page?";
        }
    }
    $(".input-good").click(function() {
        formmodified = 0;
    });


});
