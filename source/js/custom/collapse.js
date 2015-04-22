$(function() {
  //show collapse content clicking on collapse title
  $('.node-collapse .node-title').on('click', function(e){
    e.preventDefault();
    $(this).next('.field-name-body').slideToggle(200).end().parent('article').toggleClass('content-visible');
  });

});
