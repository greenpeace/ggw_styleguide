// will only run once the page DOM is ready for JavaScript code to execute.
$( document ).ready(function() {
  'use strict';

  //improve user experience by altering zooming on orientation change
  var mobile_timer = false;
    $('#viewport').attr('content','width=device-width,minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0');
    $(window).bind('gesturestart',function () {
      clearTimeout(mobile_timer);
      $('#viewport').attr('content','width=device-width,minimum-scale=1.0,maximum-scale=10.0');
    }).bind('touchend',function () {
      clearTimeout(mobile_timer);
      mobile_timer = setTimeout(function () {
        $('#viewport').attr('content','width=device-width,minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0');
      },1000);
    });

   // add class to external links so they can be styled
  $('.field-name-body a').filter(function() {
    return this.hostname && this.hostname !== location.hostname;
  }).attr('target', '_blank').addClass('external');

  // Activate fastclick function
  //FastClick.attach(document.body);

  // for css regression testing
  console.log("dom_ready");
});


