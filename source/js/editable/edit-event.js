$(function() {

  var counter = 0;
  $('.clone-role').click(function(e){
    $('.role-item').clone(true).insertAfter('.role-item').removeClass('role-item').addClass('item' + counter);
    $('.item' + counter).append('<a href="#" class="button btn-s delete-role"><i class="icon-trash"></i></a>');
    counter++;
    e.preventDefault();

    $('.delete-role').click(function(e){
      $(this).parent().remove();
      e.preventDefault();
    });

  });

});
