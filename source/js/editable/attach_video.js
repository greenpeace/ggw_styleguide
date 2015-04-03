$(function() {

  // Needs further improvement to catch errors

  function processURL(url, success){
    var id;

    if (url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/)) {

      id = RegExp.$6;

      if (RegExp.$3.indexOf('youtu') > -1) {
          return processYouTube(id);
      } else if (RegExp.$3.indexOf('vimeo') > -1) {
          $.ajax({
          url: 'http://vimeo.com/api/v2/video/' + id + '.json',
          jsonp: 'callback',
          dataType: 'jsonp',
          success: function(data) {
            var image = (data[0].thumbnail_large);
            $('.media-figure').empty().prepend('<img src=' + image + ' />');
            $("#mediainvalid").addClass('element-hidden');
          },
          error: function(xhr, status, error) {
            alert(error);
            $('.media-figure').empty();
          },
        });
      }

    } else {
      $('.media-figure').empty();
      $("#mediainvalid").removeClass('element-hidden');
    }

    function processYouTube(id) {
      if (!id) {
        throw new Error('Unsupported YouTube URL');
      }
      var image = 'http://img.youtube.com/vi/' + id + '/mqdefault.jpg';

      $('.media-figure').empty().prepend('<img src=' + image + ' />');
      $("#mediainvalid").addClass('element-hidden');
    }

  }


  $("#selectmedia").focusout(function() {
    processURL(this.value);
  });

});
