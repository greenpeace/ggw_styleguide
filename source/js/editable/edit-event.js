$(function() {

  // function to clone collection of fields, mainly used for social media
  // ! probably for prototype/ demo only

  var counter = 0;
  $('.clone-trigger').click(function(e){
    $('.clone-item').clone(true)
    .insertAfter('.clone-item')
    .removeClass('clone-item')
    .addClass('item' + counter)
    .find('input').val('');
    $('.item' + counter).append('<a href="#" class="button btn-s delete-clone"><i class="icon-trash"></i></a>');
    counter++;
    e.preventDefault();

    $('.delete-clone').click(function(e){
      $(this).parent().remove();
      e.preventDefault();
    });

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
    $('<div class="form-sent form-error"><i class="icon icon-cancel"></i> <p>You need to fill in the required fields.</p></div>').insertBefore('.l-main').hide().fadeIn('slow');
    $('.has-error-hidden').removeClass('has-error-hidden').addClass('has-error');
    $('html, body').animate({
      scrollTop: $('.has-error:visible:first').offset().top - 110
    }, 1000);
    showErrorIcons();
  });

  $(document).click(function(e) {
    $('.form-sent').fadeOut('slow');
  });

});
