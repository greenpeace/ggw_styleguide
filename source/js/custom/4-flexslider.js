(function($) {
  'use strict';

  var slider,
  // Global slider value to force playing and pausing by direct access of the slider control
  canSlide = true;
  // Global switch to monitor video state

  // Load the YouTube API. For some reason it's required to load it like this
  var tag = document.createElement('script');
  tag.src = '//www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

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

  // Iterate through only Vimeo videos
  var vimeoPlayers = $('.flexslider').find('.vimeo'), player;

  for (var i = 0, length = vimeoPlayers.length; i < length; i++) {
    player = vimeoPlayers[i];
    $f(player).addEvent('ready', ready);
  }

  function addEvent(element, eventName, callback) {
    if (element.addEventListener) {
      element.addEventListener(eventName, callback, false);
    } else {
      element.attachEvent(eventName, callback, false);
    }
  }

  function ready(player_id) {
    var froogaloop = $f(player_id);
    froogaloop.addEvent('play', function(data) {
      $('.flexslider').flexslider('pause');
    });
    froogaloop.addEvent('pause', function(data) {
      $('.flexslider').flexslider('play');
    });
  }

  slider = $('.flexslider')
  .fitVids()
  .flexslider({
      animation: 'slide',
      smoothHeight: true,
      animationLoop: true,
      video: true,
      useCSS: false,
      before: function(slider){
        // Vimeo stop
        if (slider.slides.eq(slider.currentSlide).find('.vimeo').length !== 0) {
          $f( slider.slides.eq(slider.currentSlide).find('.vimeo').attr('id') ).api('pause');
        }
        // Youtube stop
        else if(!canSlide) {
          slider.flexslider('stop');
        }
      }
    });

  slider.on('click', '.flex-prev, .flex-next', function(){
    canSlide = true;
    $('.flexslider .youtube').each(function(){
      $(this).data('player').pauseVideo();
    });
  });

})(jQuery);
