/*
 * jQuery sleepyHead v0.2
 * http://github.com/Moonfuse/sleepyHead
 *
 * Free to use under the MIT license.
 *
 * @author Jason Pescione <jay@moonfuse.co>
 */
/*
;(function($, win, doc, undefined) {
  var $doc    = $(doc),
      $win    = $(win),
      isRetina = (win.retina || win.devicePixelRatio > 1) ? true : false;

  // Limit resize/scroll event firing.
  // Combo btw a throtle and debounce fn.
  var throtle = (function(fn) {
    var i = 0, timeout,
    delay = function() {
      fn.apply(this, null);
      timeout = null;
    };

    return function() {
      if (timeout) clearTimeout(timeout);

      i += 1;
      if ( i > 10 ) {
        fn.apply(this, null);
        i = 0;
      }

      timeout = setTimeout(delay, 50);
    };
  });

  var inViewport = (function( yOffset, xOffset ) {
    var vp = {
      left: win.pageXOffset - xOffset,
      right: win.pageXOffset + win.innerWidth + xOffset,
      top: win.pageYOffset - yOffset,
      bottom: win.pageYOffset + win.innerHeight + yOffset
    };

    return function(element) {
      var pos = element.getBoundingClientRect(), el = {};

      // // Don't load hiden elements.
      if ( pos.top === 0 && pos.bottom === 0 ) return false;

      el.top    = pos.top + win.pageYOffset;
      el.bottom = el.top + element.offsetHeight;
      el.left   = pos.left + win.pageXOffset;
      el.right  = el.left + element.offsetWidth;

      return (!(vp.right < el.left || vp.left > el.right || vp.bottom < el.top || vp.top > el.bottom));
    };

  });

  // Constructor.
  var SleepyHead = function(elements, yOffset, xOffset) {
    this.elements = elements;
    this.yOffset = yOffset;
    this.xOffset = xOffset;
  };

  SleepyHead.prototype = {
    elements: [],
    yOffset: 0,
    xOffset: 0,

    listen: function() {
      var self = this;
      $(doc).on('sleepyHead', function() {
        self.scanElements();
      });
    },

    scanElements: function() {
      var inView = inViewport( this.yOffset, this.xOffset ),
          self   = this;

      this.elements.forEach(function(o, i) {
        if ( !inView(o) ) return;

        self.replaceElement(o);
        delete self.elements[i];
      });
    },

    replaceElement: function(el) {
      var src = ( isRetina && el.dataset.srcRetina ) ? el.dataset.srcRetina : el.dataset.src,
          tag = el.tagName.toLowerCase();

      // In the case the device is not retina, but there is only a retina attr.
      if ( typeof src === 'undefined' ) return;

      if ( tag === 'img' ) {
        var tmp = doc.createElement(tag);

        // Only replace src if we can first successfully load the el.
        tmp.onload = function() {
          el.src = src;
        };

        tmp.src = src;
      }
      else {
        el.src = src;
      }

    }
  };

  $.fn.sleepyHead = function(yOffset, xOffset) {
    var elements = [];

    // Filter elements.
    this.each(function(i, o) {
      if ( typeof o.dataset !== 'undefined' && (o.dataset.src || o.dataset.srcRetina) )
        elements.push(o);
    });

    if ( elements.length === 0 ) return this;

    // Add event listeners to each instance.
    var sleepy = new SleepyHead( elements, yOffset || 0, xOffset || 0 );
    sleepy.listen();

    return this;
  };

  $doc.ready(function() {
    // Fire on inital page load.
    setTimeout(function() {
      $doc.trigger('sleepyHead');
    },0);

    // Throtle resize/and scroll events for desktop.
    var throtledHandler = throtle(function(){
      $doc.trigger('sleepyHead');
    });

    $win.on('resize scroll', throtledHandler );

    // Mobile does not fire scroll events as frequently as
    // desktop. Need to respond to touch events as well.
    $doc.on('touchend orientationchange', function() {
      $doc.trigger('sleepyHead');
    });

  });


})(jQuery, window, document);
 */


/**
 * ES5 polyfils.
 */
 /*
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (fn, scope) {
        'use strict';
        var i, len;
        for (i = 0, len = this.length; i < len; ++i) {
            if (i in this) {
                fn.call(scope, this[i], i, this);
            }
        }
    };
}
 */
