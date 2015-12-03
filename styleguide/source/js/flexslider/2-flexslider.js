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
      var player = $(this).closest('.container-lazyload').find('iframe');
      $f(player).addEvent('ready', ready);
    });

    function ready(playerID) {
      Froogaloop(playerID).addEvent('play', function(data) {
        $('.flexslider').flexslider('pause');
      });
      Froogaloop(playerID).addEvent('pause', function(data) {
        $('.flexslider').flexslider('play');
      });

      $('.flex-next, .flex-prev').click(function() {
        player.api("pause");
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
      slideshow: false,
      allowOneSlide: true,
      video: true,
      start: function(slider){
        if ($('.flexslider .map').length != 0) {
          map.invalidateSize(); //solve map is not loading correctly
        }
      },
      before: function(slider){
        // Vimeo stop
        if (slider.slides.eq(slider.currentSlide).find('iframe').length !== 0) {
          $f( slider.slides.eq(slider.currentSlide).find('iframe').attr('id') ).api('pause');
          playVideoAndPauseOthers($('.container-vimeo iframe')[0]);
        }
        // Youtube stop
        else if(!canSlide) {
          slider.flexslider('stop');
        }
      },
    });

    function playVideoAndPauseOthers(frame) {
      $('.container-vimeo iframe').each(function(i) {
        var func = this === frame ? 'playVideo' : 'stopVideo';
        this.contentWindow.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
      });
    }

    // check if the slider is still visible for the user, otherwise pause the slider.
    slider.on('inview', function(event, isVisible) {
      if (!isVisible) {
        $('.flexslider').flexslider('pause');
      }
    });

    $('iframe.youtube').iframeTracker({
      blurCallback: function(){
        console.log('clicked');
        slider.flexslider('stop');
      }
    });

    $('iframe.vimeo').iframeTracker({
      blurCallback: function(){
        player.api("pause");
      }
    });

    if ( slider.find('.flex-viewport').length != 0) {
      slider.addClass('active');
    }


    

  }

});
