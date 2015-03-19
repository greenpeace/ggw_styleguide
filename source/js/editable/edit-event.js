$(function() {

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

  // disable address field untill country has been selected
  $('#edit-event-address').prop("disabled", true);
  $('#edit-event-address').prop("placeholder", "please select a country first...");

  $("#country-select").on("change", function() {
    $('#edit-event-address').prop("disabled", false);
    $('#edit-event-address').prop("placeholder", "venue, street, city etc.");
  });

});
