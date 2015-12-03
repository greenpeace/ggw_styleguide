$(function() {

  $('#subscribe-toggle').on('click', function () {
    $(this).text(function(i, text){
      return text === "Follow" ? "Unfollow" : "Follow";
    })
    $(this).toggleClass('active')
  })

});
