$(function() {

  if ($('.flexslider').length != 0) {

    var slider,
    // Global slider value to force playing and pausing by direct access of the slider control
    canSlide = true;

    // Setup a callback for the YouTube api to attach video event handlers
    window.onYouTubeIframeAPIReady = function(){
      // Iterate through only YT videos
      $('.flexslider .youtube').each(function(){
        // Create a new player pointer; "this" is a DOMElement of the player's iframe
        var player = new YT.Player(this, {
          playerVars: {
            autoplay: 0
          }
        });

        // Watch for changes on the Youtube player
        player.addEventListener('onStateChange', function(state){
          switch(state.data) {
          // If the user is playing a video, stop the slider
          case YT.PlayerState.PLAYING:
            slider.flexslider('stop');
            canSlide = false;
            break;
            // The video is no longer player, give the go-ahead to start the slider back up
          case YT.PlayerState.ENDED:
          case YT.PlayerState.PAUSED:
            slider.flexslider("play");
            canSlide = true;
            break;
          }
        });

        $(this).data('player', player);
      });
    };

    function addEvent(element, eventName, callback) {
      if (element.addEventListener) {
        element.addEventListener(eventName, callback, false);
      } else {
        element.attachEvent(eventName, callback, false);
      }
    }

    // Iterate through only Vimeo videos
    $('.flexslider .vimeo').each(function(){
    //  Froogaloop(this).addEvent('ready', ready);
    });

    function ready(playerID) {
      Froogaloop(playerID).addEvent('play', function(data) {
        $('.flexslider').flexslider('pause');
      });
      Froogaloop(playerID).addEvent('pause', function(data) {
        $('.flexslider').flexslider('play');
      });
    }

    slider = $('.flexslider')
    .fitVids()
    .flexslider({
      animation: 'slide',
      useCSS: true,
      animationLoop: true,
      smoothHeight: true,
      pauseOnHover: true,
      slideshow: true,
      allowOneSlide: true,
      video: true,
      before: function(slider){
        // Vimeo stop
        if (slider.slides.eq(slider.currentSlide).find('.vimeo').length !== 0) {
          $f( slider.slides.eq(slider.currentSlide).find('.vimeo').attr('id') ).api('pause');
        }
        // Youtube stop
        else if(!canSlide) {
          slider.flexslider('stop');
        }
      },
    });

    // check if the slider is still visible for the user, otherwise pause the slider.
    slider.on('inview', function(event, isVisible) {
      if (!isVisible) {
        $('.flexslider').flexslider('pause');
      }
    });

    $('iframe.youtube').iframeTracker({
      blurCallback: function(){
        slider.flexslider('stop');
      }
    });

    if ( slider.find('.flex-viewport').length != 0) {
      slider.addClass('active');
    }

  }

});
