$(function() {
  'use strict';

  function toggleCode() {
    $('.code').each(function(){
      $('<div class="js-show-code" style="margin-bottom: 1em; font-size: 12px; cursor: pointer;">Show source code</div>').insertBefore(this);
      $(this).hide();
    });
  }

  toggleCode();

  $('.js-show-code').each(function(){
    $(this).click(function(event) {
      event.preventDefault();
      $(this).next().slideToggle(400);
      $(this).text(function(i, v){
        return v === 'Hide source code' ? 'Show source code' : 'Hide source code'
      })

    });
  });



});
