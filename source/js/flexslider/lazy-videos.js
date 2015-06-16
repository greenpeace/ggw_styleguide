/*
 * Lazy Load Youtube
 * by Kevin Weber (kevinw.de)
 */

$(function(lazyload_youtube) {

  // Classes
  var classPreviewYoutube = 'preview-youtube';

  // Helpers
  var videoratio = 0.5625;
  var thumbnailurl = '';

  lazyload_youtube.init = function( options ) {
    setOptionsYoutube( options );

    /*
     * Use ajaxStop function to prevent plugin from breaking when another plugin uses Ajax
     */
    $(document).ready(doload_lly()).ajaxStop(function() {
      doload_lly();
    });

    if (typeof responsiveVideos.init === 'function' && $_o.responsive === true ) {
      responsiveVideos.init();
    }

  };

  var $_o;
  var setOptionsYoutube = function(options) {
    $_o = $.extend({
        theme: 'dark', // possible: dark, light
        colour: 'red', // possible: red, white
        controls: true,
        loadpolicy: true,
        showinfo: true,
        relations: false,
        buttonstyle: '',
        preroll: '',
        postroll: '',
        videoseo: true,
        responsive: true,
        thumbnailquality: '0',
      },
      options);
  };

  var doload_lly = function() {

    $("a.lazy-load-youtube").each(function(index) {
      var that = this;

      /*
       * Load parameters from user's original Youtube URL
       */
      var load_embedparms = function() {
        var embedparms = $(that).attr("href").split("/embed/")[1];
        if (!embedparms) {
          embedparms = $(that).attr("href").split("://youtu.be/")[1];
        }
        if (!embedparms) {
          embedparms = $(that).attr("href").split("v=")[1].replace(/\&/, '?');
        }
        return embedparms;
      };
      var embedparms = load_embedparms();

      /*
       * Load Youtube ID
       */
      var loadYouId = function() {
        return embedparms.split("?")[0].split("#")[0];
      };
      var youid = loadYouId();

      var loadYouIdPreroll = function() {
        var preroll = '';
        if ($_o.preroll !== preroll && $_o.preroll !== undefined) {
          return $_o.preroll;
        }
        else {
          // Fallback when no preroll ID should be loaded
          return embedparms;
        }
      };
      var preroll = loadYouIdPreroll();

      var start = embedparms.match(/[#&]t=(\d+)s/);
      if (start) {
        start = start[1];
      } else {
        start = embedparms.match(/[#&]t=(\d+)m(\d+)s/);
        if (start) {
          start = parseInt(start[1]) * 60 + parseInt(start[2]);
        } else {
          start = embedparms.match(/[?&]start=(\d+)/);
          if (start) {
            start = start[1];
          }
        }
      }

      var emu = '//www.youtube.com/embed/' + loadYouIdPreroll();

      var videoTitle = function() {
        if ( $(that).attr('video-title') !== undefined ) {
          return $(that).attr("video-title");
        }
        else if ( $(this).html() !== '' && $(this).html() !== undefined ) {
          return $(this).html();
        }
        else {
          return "";
        }
      };

      var youtubeUrl = function( id ) {
        return '//www.youtube.com/watch?v=' + id;
      };

      /*
       * Helpers to calculate dimensions
       */
      var getWidth = function( element ) {
        var calc = (parseInt(element.css("width")) - 4);
        return calc;
      };
      var getHeight = function( element ) {
        var calc = 0;
        if ( $_o.responsive === false ) {
          calc = (parseInt(element.css("height")) - 4);
        }
        else {
          var width = getWidth( element );
          calc = Math.round( width * videoratio );
        }
        return calc;
      };

      embedparms = embedparms.split("#")[0];
      if (start && embedparms.indexOf("start=") === -1) {
        embedparms += ((embedparms.indexOf("?") === -1) ? "?" : "&") + "start=" + start;
      }

      var itemprop_name = '';
      if ($_o.videoseo === true ) {
        itemprop_name = ' itemprop="name"';
      }

      if (embedparms.indexOf("showinfo=0") !== -1) {
        $(this).html('');
      } else {
        $(this).html('<p><span class="youtube"'+itemprop_name+'>' + videoTitle() + '</span></p>');
      }

      $(this).prepend('<div style="height:' + getHeight($(this)) + 'px;width:' + getWidth($(this)) + 'px;" class="lazy-load-youtube-div"></div>').addClass($_o.buttonstyle);


      /*
       * Set thumbnail URL
       */
      var setThumbnailUrl = function( youid ) {
        var $url = "//i2.ytimg.com/vi/" + youid + "/" + $_o.thumbnailquality + ".jpg";

        thumbnailurl = $url;
      };
      setThumbnailUrl(youid);

      /*
       * Get thumbnail URL
       */
      var getThumbnailUrl = function() {
        return thumbnailurl;
      };

      $(this).css("background", "#000 url(" + getThumbnailUrl() + ") center center no-repeat");

      if ($_o.videoseo === true) {
        $(that).append('<meta itemprop="contentLocation" content="'+ youtubeUrl( youid ) +'" />');
        $(that).append('<meta itemprop="embedUrl" content="'+ emu +'" />');
        $(this).append('<meta itemprop="thumbnail" content="'+ getThumbnailUrl() +'" />');

        $.getJSON('http://gdata.youtube.com/feeds/api/videos/'+youid+'?v=2&alt=jsonc&callback=?',function( data ){
            $(that).append('<meta itemprop="datePublished" content="'+ data.data.uploaded +'" />');
            $(that).append('<meta itemprop="duration" content="'+ data.data.duration +'" />');
            $(that).append('<meta itemprop="aggregateRating" content="'+ data.data.rating +'" />');
            // TODO: Retrieve and use even more data for Video SEO.
              // Get possible response data with http://www.jsoneditoronline.org/ and http://gdata.youtube.com/feeds/api/videos/pk99sSGF0YE?v=2&alt=jsonc
        });

      }

      $(this).attr("id", youid + index);
      $(this).attr("href", youtubeUrl( youid ) + (start ? "#t=" + start + "s" : ""));

      /*
       * Configure URL parameters
       */
      var theme = '';
      if ($_o.theme !== theme && $_o.theme !== undefined && $_o.theme !== 'dark') {
        theme = '&theme=' + $_o.theme;
      }
      var colour = '';
      if ($_o.colour !== colour && $_o.colour !== undefined && $_o.colour !== 'red') {
        colour = '&color=' + $_o.colour;
      }
      var showinfo = '';
      if (!$_o.showinfo) {
        showinfo = '&showinfo=0';
      }
      var relations = '';
      if (!$_o.relations) {
        relations = '&rel=0';
      }
      var controls = '';
      if (!$_o.controls) {
        controls = '&controls=0';
      }
      var loadpolicy = '';
      if (!$_o.loadpolicy) {
        loadpolicy = '&iv_load_policy=3';
      }

      /*
       * Generate Youtube URL parameter 'playlist'
       */
      if (preroll !== youid) {
        preroll = youid + ',';
      }
      else {
        preroll = '';
      }
      var postroll = '';
      if ($_o.postroll !== postroll && $_o.postroll !== undefined) {
        postroll = $_o.postroll;
      }

      var jsapi = '&enablejsapi=1';

      var apiv = '&version=3';

      var videoid = $(that).parent().attr("id");
      var playerapiid = '&playerapiid=' + videoid;

      /*
       * Generate URL
       */
      emu += ((emu.indexOf("?") === -1) ? "?" : "&") + "autoplay=1" + theme + colour + controls + loadpolicy + showinfo + relations + jsapi + apiv + playerapiid;

      /*
       * Generate iFrame
       */
      var videoFrame = '<iframe width="' + parseInt($(this).css("width")) + '" height="' + parseInt($(this).css("height")) + '" class="youtube" style="vertical-align:top;" src="' + emu + '?" frameborder="0" allowfullscreen></iframe>';

      /*
       * Register "onclick" event handler
       */
      $( this ).on( "click", function() {

        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        removePlayerControls(this);

        $('.flexslider').on('click', '.flex-prev, .flex-next', function(){
          $('.flexslider .youtube').each(function(){
            $(this).data('player').pauseVideo();
          });
        });

        $('#' + youid + index).replaceWith( videoFrame );
        if (typeof responsiveVideos.resize === 'function' && $_o.responsive === true) {
          responsiveVideos.resize();
        }
        return false;
      });

      var removePlayerControls = function( element ) {
        $(element).removeClass(classPreviewYoutube);
      };

    });

  };

  /*
   * Ensure that a handler is run before any other registered handlers,
   * independent of the order in which they were bound
   * As seen on http://stackoverflow.com/questions/2360655/jquery-event-handlers-always-execute-in-order-they-were-bound-any-way-around-t
   * and on https://gist.github.com/infostreams/6540654
   */
  $.fn.bindFirst = function(which, handler) {
        // ensures a handler is run before any other registered handlers,
        // independent of the order in which they were bound
        var $el = $(this);
        $el.unbind(which, handler);
        $el.bind(which, handler);

        var events = $._data($el[0]).events;
        var registered = events[which];
        registered.unshift(registered.pop());

        events[which] = registered;
      };

  /*
   * The following code bases on "Responsive Video Embeds" by Kevin Leary, www.kevinleary.net, WordPress development in Boston, MA
   */
  var responsiveVideos = {

    config: {
      container: $( '.container-lazyload' ),
      selector: 'object, embed, iframe, .preview-lazyload, .lazy-load-youtube-div, .lazy-load-vimeo-div'
    },

    init: function() {
      if ( responsiveVideos.config.container.length > 0 ) {
        $( window ).on( 'resize', responsiveVideos.resize );
        // Use bindFirst() to ensure that other plugins like Inline Comments work correctly (in case they depend on the video heights)
        $( window ).bindFirst( 'load', function() { responsiveVideos.resize(); } );
        $( window ).on( 'load', function() { responsiveVideos.resize(); } );
      }
    },

    resize: function() {
      $( responsiveVideos.config.selector, responsiveVideos.config.container ).each( function () {

        var $this = $( this );
        var width = $this.parent().width();
        var height = Math.round( width * videoratio );

        $this.attr( 'height', height );
        $this.attr( 'width', width );
        $this.css({
            'height': height,
            'width': width,
          });

      });
    },

  };

}( window.lazyload_youtube = window.lazyload_youtube || {}, jQuery ));

/*
 * Lazy Load Vimeo
 * by Kevin Weber (kevinw.de)
 */
/*
(function( lazyload_vimeo ) {

  // Classes
  var classPreviewVimeo = 'preview-vimeo';
    var classPreviewVimeoDot = '.' + classPreviewVimeo;
  var classBranding = 'lazyload-info-icon';
    var classBrandingDot = '.' + classBranding;

  // Helpers
  var videoratio = 0.5625;

  lazyload_vimeo.init = function( options ) {
    setOptionsYoutube( options );


     // Use ajaxStop function to prevent plugin from breaking when another plugin uses Ajax

    $(document).ready(doload_llv()).ajaxStop(function() {
      doload_llv();
    });

    if (typeof responsiveVideos.init === 'function' && $_o.responsive === true ) {
      responsiveVideos.init();
    }

  };

  var $_o;
  var setOptionsYoutube = function(options) {
    $_o = $.extend({
        buttonstyle: '',
        playercolour: '',
        videoseo: false,
        responsive: true,
      },
      options);
  };

  function doload_llv() {
    vimeoCreateThumbProcess();

    createPluginInfo();

    // Replace thumbnail with iframe
    vimeoCreatePlayer();
  }


   // Load plugin info

  var loadPluginInfo = function() {
    return '<a class="' + classBranding + '" href="http://kevinw.de/lazy-load-videos/" title="Lazy Load for Videos by Kevin Weber" target="_blank">i</a>';
  };


   // Create info element

  var createPluginInfo = function() {
      if (
          ( $_o.displayBranding !== false ) &&
          ( $( classPreviewVimeoDot ).siblings(classBrandingDot).length === 0 ) // This prevents the site from creating unnecessary duplicate brandings
        )
      {
      // source = Video
      var source = $( classPreviewVimeoDot );
      // element = Plugin info element
      var element = $( loadPluginInfo() );
      // Prepend element to source
      source.before( element );
    }
  };


  var vimeoCreatePlayer = function() {
    $(classPreviewVimeoDot).on('click', function() {
      var vid = getAttrId(this);

      removePlayerControls(this);
      removeBranding(this);

      var playercolour = '';
      if ($_o.playercolour !== playercolour) {
        $_o.playercolour = filterDotHash($_o.playercolour);
        playercolour = '&color=' + $_o.playercolour;
      }

      $(this).html('<iframe src="' + vimeoUrl( vid ) + '?autoplay=1' + playercolour + '" style="height:' + (parseInt($("#" + vid).css("height"))) + 'px;width:100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen autoPlay allowFullScreen></iframe>');
      if (typeof responsiveVideos.resize === 'function' && $_o.responsive === true) {
        responsiveVideos.resize();
      }
    });
  };

  var removePlayerControls = function( element ) {
      $(element).removeClass(classPreviewVimeo);
  };
  var removeBranding = function( element ) {
    $(element).prev(classBrandingDot).remove();
  };

  var vimeoUrl = function( id ) {
    return '//player.vimeo.com/video/' + id;
  };

  // Remove dots and hashs from a string
  var filterDotHash = function(variable) {
    var filterdothash = variable.toString().replace(/[.#]/g, "");
    return filterdothash;
  };

  var vimeoCreateThumbProcess = function() {
    $(classPreviewVimeoDot).each(function() {
      var vid = getAttrId(this);
      $(this).empty();  // Remove no longer needed title (title is necessary for preview in text editor)
      vimeoLoadingThumb(vid);
    });
  };

  var vimeoLoadingThumb = function(id) {
    var url = vimeoCallbackUrl(id) + ".json?callback=showThumb";

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    var itemprop_name = '';
    if ($_o.videoseo === true ) {
      itemprop_name = ' itemprop="name"';
    }

    $("#" + id).prepend(script).prepend('<div style="height:' + (parseInt($("#" + id).css("height"))) + 'px;width:' + (parseInt($("#" + id).css("width"))) + 'px;" class="lazy-load-vimeo-div"><span class="titletext vimeo"'+itemprop_name+'></span></div>').addClass($_o.buttonstyle);

    vimeoVideoSeo( id );
  };

  var vimeoVideoSeo = function( id ) {
    if ($_o.videoseo === true) {

      $.getJSON( vimeoCallbackUrl( id ) + '?callback=?', {format: "json"}, function(data) {

        $("#" + id).append('<meta itemprop="contentLocation" content="' + data[0].url +'" />');
        $("#" + id).append('<meta itemprop="embedUrl" content="' + vimeoUrl(id) +'" />');
        $("#" + id).append('<meta itemprop="thumbnail" content="'+ data[0].thumbnail_large +'" />');
        $("#" + id).append('<meta itemprop="datePublished" content="'+ data[0].upload_date +'" />');
        $("#" + id).append('<meta itemprop="duration" content="'+ data[0].duration +'" />');
        $("#" + id).append('<meta itemprop="aggregateRating" content="'+ data.data.rating +'" />');
        // TODO: Retrieve and use even more data for Video SEO. Possible data: https://developer.vimeo.com/apis/simple#response-data

      });

    }
  };

  var vimeoCallbackUrl = function( id ) {
    return '//vimeo.com/api/v2/video/' + id + '.json';
  };

  var getAttrId = function(element) {
    var vid = $(element).attr('id');
    return vid;
  };


  /*
   * Ensure that a handler is run before any other registered handlers,
   * independent of the order in which they were bound
   * As seen on http://stackoverflow.com/questions/2360655/jquery-event-handlers-always-execute-in-order-they-were-bound-any-way-around-t
   * and on https://gist.github.com/infostreams/6540654
   */
   /*
  $.fn.bindFirst = function(which, handler) {
    // ensures a handler is run before any other registered handlers,
    // independent of the order in which they were bound
    var $el = $(this);
    $el.unbind(which, handler);
    $el.bind(which, handler);

    var events = $._data($el[0]).events;
    var registered = events[which];
    registered.unshift(registered.pop());

    events[which] = registered;
  };

  /*
   * The following code bases on "Responsive Video Embeds" by Kevin Leary, www.kevinleary.net, WordPress development in Boston, MA

  var responsiveVideos = {

    config: {
      container: $( '.container-lazyload' ),
      selector: 'object, embed, iframe, .preview-lazyload, .lazy-load-youtube-div, .lazy-load-vimeo-div'
    },

    init: function() {
      if ( responsiveVideos.config.container.length > 0 ) {
        $( window ).on( 'resize', responsiveVideos.resize );
        // Use bindFirst() to ensure that other plugins like Inline Comments work correctly (in case they depend on the video heights)
        $( window ).bindFirst( 'load', function() { responsiveVideos.resize(); } );
        $( window ).on( 'load', function() { responsiveVideos.resize(); } );
      }
    },

    resize: function() {
      $( responsiveVideos.config.selector, responsiveVideos.config.container ).each( function () {

        var $this = $( this );
        var width = $this.parent().width();
        var height = Math.round( width * videoratio );

        $this.attr( 'height', height );
        $this.attr( 'width', width );
        $this.css({
            'height': height,
            'width': width,
          });

      });
    },

  };

}( window.lazyload_vimeo = window.lazyload_vimeo || {}, jQuery ));
*/
