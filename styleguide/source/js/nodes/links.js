$(function() {  
  // add class to external links so they can be styled
  $('.field-name-body a').filter(function() {
    return this.hostname && this.hostname !== location.hostname;
  }).attr('target', '_blank').addClass('external');
});