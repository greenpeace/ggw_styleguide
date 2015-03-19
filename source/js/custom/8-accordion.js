$(function() {
  //show accordion content clicking on accordion title
  $('.node-accordion .node-title').on('click', function(event){
    event.preventDefault();
    $(this).next('.field-name-body').slideToggle(200).end().parent('article').toggleClass('content-visible');
  });

});
