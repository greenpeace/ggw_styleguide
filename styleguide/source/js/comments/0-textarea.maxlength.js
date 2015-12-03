/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
// Inspired by base2 and Prototype
(function(){
  var initializing = false;

  // The base JQClass implementation (does nothing)
  window.JQClass = function(){};

  // Collection of derived classes
  JQClass.classes = {};

  // Create a new JQClass that inherits from this class
  JQClass.extend = function extender(prop) {
    var base = this.prototype;

    // Instantiate a base class (but only create the instance,
    // don't run the init constructor)
    initializing = true;
    var prototype = new this();
    initializing = false;

    // Copy the properties over onto the new prototype
    for (var name in prop) {
      // Check if we're overwriting an existing function
      prototype[name] = typeof prop[name] == 'function' &&
        typeof base[name] == 'function' ?
        (function(name, fn){
          return function() {
            var __super = this._super;

            // Add a new ._super() method that is the same method
            // but on the super-class
            this._super = function(args) {
              return base[name].apply(this, args || []);
            };

            var ret = fn.apply(this, arguments);

            // The method only need to be bound temporarily, so we
            // remove it when we're done executing
            this._super = __super;

            return ret;
          };
        })(name, prop[name]) :
        prop[name];
    }

    // The dummy class constructor
    function JQClass() {
      // All construction is actually done in the init method
      if (!initializing && this._init) {
        this._init.apply(this, arguments);
      }
    }

    // Populate our constructed prototype object
    JQClass.prototype = prototype;

    // Enforce the constructor to be what we expect
    JQClass.prototype.constructor = JQClass;

    // And make this class extendable
    JQClass.extend = extender;

    return JQClass;
  };
})();

(function($) { // Ensure $, encapsulate

  /** Abstract base class for collection plugins v1.0.1.
    Written by Keith Wood (kbwood{at}iinet.com.au) December 2013.
    Licensed under the MIT (https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt) license.
    @module $.JQPlugin
    @abstract */
  JQClass.classes.JQPlugin = JQClass.extend({

    /** Name to identify this plugin.
      @example name: 'tabs' */
    name: 'plugin',

    /** Default options for instances of this plugin (default: {}).
      @example defaultOptions: {
  selectedClass: 'selected',
  triggers: 'click'
 } */
    defaultOptions: {},

    /** Options dependent on the locale.
      Indexed by language and (optional) country code, with '' denoting the default language (English/US).
      @example regionalOptions: {
  '': {
    greeting: 'Hi'
  }
 } */
    regionalOptions: {},

    /** Names of getter methods - those that can't be chained (default: []).
      @example _getters: ['activeTab'] */
    _getters: [],

    /** Retrieve a marker class for affected elements.
      @private
      @return {string} The marker class. */
    _getMarker: function() {
      return 'is-' + this.name;
    },

    /** Initialise the plugin.
      Create the jQuery bridge - plugin name <code>xyz</code>
      produces <code>$.xyz</code> and <code>$.fn.xyz</code>. */
    _init: function() {
      // Apply default localisations
      $.extend(this.defaultOptions, (this.regionalOptions && this.regionalOptions['']) || {});
      // Camel-case the name
      var jqName = camelCase(this.name);
      // Expose jQuery singleton manager
      $[jqName] = this;
      // Expose jQuery collection plugin
      $.fn[jqName] = function(options) {
        var otherArgs = Array.prototype.slice.call(arguments, 1);
        if ($[jqName]._isNotChained(options, otherArgs)) {
          return $[jqName][options].apply($[jqName], [this[0]].concat(otherArgs));
        }
        return this.each(function() {
          if (typeof options === 'string') {
            if (options[0] === '_' || !$[jqName][options]) {
              throw 'Unknown method: ' + options;
            }
            $[jqName][options].apply($[jqName], [this].concat(otherArgs));
          }
          else {
            $[jqName]._attach(this, options);
          }
        });
      };
    },

    /** Set default values for all subsequent instances.
      @param options {object} The new default options.
      @example $.plugin.setDefauls({name: value}) */
    setDefaults: function(options) {
      $.extend(this.defaultOptions, options || {});
    },

    /** Determine whether a method is a getter and doesn't permit chaining.
      @private
      @param name {string} The method name.
      @param otherArgs {any[]} Any other arguments for the method.
      @return {boolean} True if this method is a getter, false otherwise. */
    _isNotChained: function(name, otherArgs) {
      if (name === 'option' && (otherArgs.length === 0 ||
          (otherArgs.length === 1 && typeof otherArgs[0] === 'string'))) {
        return true;
      }
      return $.inArray(name, this._getters) > -1;
    },

    /** Initialise an element. Called internally only.
      Adds an instance object as data named for the plugin.
      @param elem {Element} The element to enhance.
      @param options {object} Overriding settings. */
    _attach: function(elem, options) {
      elem = $(elem);
      if (elem.hasClass(this._getMarker())) {
        return;
      }
      elem.addClass(this._getMarker());
      options = $.extend({}, this.defaultOptions, this._getMetadata(elem), options || {});
      var inst = $.extend({name: this.name, elem: elem, options: options},
        this._instSettings(elem, options));
      elem.data(this.name, inst); // Save instance against element
      this._postAttach(elem, inst);
      this.option(elem, options);
    },

    /** Retrieve additional instance settings.
      Override this in a sub-class to provide extra settings.
      @param elem {jQuery} The current jQuery element.
      @param options {object} The instance options.
      @return {object} Any extra instance values.
      @example _instSettings: function(elem, options) {
  return {nav: elem.find(options.navSelector)};
 } */
    _instSettings: function(elem, options) {
      return {};
    },

    /** Plugin specific post initialisation.
      Override this in a sub-class to perform extra activities.
      @param elem {jQuery} The current jQuery element.
      @param inst {object} The instance settings.
      @example _postAttach: function(elem, inst) {
  elem.on('click.' + this.name, function() {
    ...
  });
 } */
    _postAttach: function(elem, inst) {
    },

    /** Retrieve metadata configuration from the element.
      Metadata is specified as an attribute:
      <code>data-&lt;plugin name>="&lt;setting name>: '&lt;value>', ..."</code>.
      Dates should be specified as strings in this format: 'new Date(y, m-1, d)'.
      @private
      @param elem {jQuery} The source element.
      @return {object} The inline configuration or {}. */
    _getMetadata: function(elem) {
      try {
        var data = elem.data(this.name.toLowerCase()) || '';
        data = data.replace(/'/g, '"');
        data = data.replace(/([a-zA-Z0-9]+):/g, function(match, group, i) {
          var count = data.substring(0, i).match(/"/g); // Handle embedded ':'
          return (!count || count.length % 2 === 0 ? '"' + group + '":' : group + ':');
        });
        data = $.parseJSON('{' + data + '}');
        for (var name in data) { // Convert dates
          var value = data[name];
          if (typeof value === 'string' && value.match(/^new Date\((.*)\)$/)) {
            data[name] = eval(value);
          }
        }
        return data;
      }
      catch (e) {
        return {};
      }
    },

    /** Retrieve the instance data for element.
      @param elem {Element} The source element.
      @return {object} The instance data or {}. */
    _getInst: function(elem) {
      return $(elem).data(this.name) || {};
    },

    /** Retrieve or reconfigure the settings for a plugin.
      @param elem {Element} The source element.
      @param name {object|string} The collection of new option values or the name of a single option.
      @param [value] {any} The value for a single named option.
      @return {any|object} If retrieving a single value or all options.
      @example $(selector).plugin('option', 'name', value)
 $(selector).plugin('option', {name: value, ...})
 var value = $(selector).plugin('option', 'name')
 var options = $(selector).plugin('option') */
    option: function(elem, name, value) {
      elem = $(elem);
      var inst = elem.data(this.name);
      if  (!name || (typeof name === 'string' && value == null)) {
        var options = (inst || {}).options;
        return (options && name ? options[name] : options);
      }
      if (!elem.hasClass(this._getMarker())) {
        return;
      }
      var options = name || {};
      if (typeof name === 'string') {
        options = {};
        options[name] = value;
      }
      this._optionsChanged(elem, inst, options);
      $.extend(inst.options, options);
    },

    /** Plugin specific options processing.
      Old value available in <code>inst.options[name]</code>, new value in <code>options[name]</code>.
      Override this in a sub-class to perform extra activities.
      @param elem {jQuery} The current jQuery element.
      @param inst {object} The instance settings.
      @param options {object} The new options.
      @example _optionsChanged: function(elem, inst, options) {
  if (options.name != inst.options.name) {
    elem.removeClass(inst.options.name).addClass(options.name);
  }
 } */
    _optionsChanged: function(elem, inst, options) {
    },

    /** Remove all trace of the plugin.
      Override <code>_preDestroy</code> for plugin-specific processing.
      @param elem {Element} The source element.
      @example $(selector).plugin('destroy') */
    destroy: function(elem) {
      elem = $(elem);
      if (!elem.hasClass(this._getMarker())) {
        return;
      }
      this._preDestroy(elem, this._getInst(elem));
      elem.removeData(this.name).removeClass(this._getMarker());
    },

    /** Plugin specific pre destruction.
      Override this in a sub-class to perform extra activities and undo everything that was
      done in the <code>_postAttach</code> or <code>_optionsChanged</code> functions.
      @param elem {jQuery} The current jQuery element.
      @param inst {object} The instance settings.
      @example _preDestroy: function(elem, inst) {
  elem.off('.' + this.name);
 } */
    _preDestroy: function(elem, inst) {
    }
  });

  /** Convert names from hyphenated to camel-case.
    @private
    @param value {string} The original hyphenated name.
    @return {string} The camel-case version. */
  function camelCase(name) {
    return name.replace(/-([a-z])/g, function(match, group) {
      return group.toUpperCase();
    });
  }

  /** Expose the plugin base.
    @namespace "$.JQPlugin" */
  $.JQPlugin = {

    /** Create a new collection plugin.
      @memberof "$.JQPlugin"
      @param [superClass='JQPlugin'] {string} The name of the parent class to inherit from.
      @param overrides {object} The property/function overrides for the new class.
      @example $.JQPlugin.createPlugin({
  name: 'tabs',
  defaultOptions: {selectedClass: 'selected'},
  _initSettings: function(elem, options) { return {...}; },
  _postAttach: function(elem, inst) { ... }
 }); */
    createPlugin: function(superClass, overrides) {
      if (typeof superClass === 'object') {
        overrides = superClass;
        superClass = 'JQPlugin';
      }
      superClass = camelCase(superClass);
      var className = camelCase(overrides.name);
      JQClass.classes[className] = JQClass.classes[superClass].extend(overrides);
      new JQClass.classes[className]();
    }
  };

})(jQuery);

/* http://keith-wood.name/maxlength.html
   Textarea Max Length for jQuery v2.0.0.
   Written by Keith Wood (kwood{at}iinet.com.au) May 2009.
   Licensed under the MIT (https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt) license.
   Please attribute the author if you use it. */

(function($) { // hide the namespace

  var pluginName = 'maxlength';

  /** Create the maxlength plugin.
    <p>Sets a textarea to limit the number of characters that may be entered.</p>
    <p>Expects HTML like:</p>
    <pre>&lt;textarea></textarea>
    <p>Provide inline configuration like:</p>
    <pre>&lt;textarea data-maxlength="name: 'value'">&lt;/textarea></pre>
    @module MaxLength
    @augments JQPlugin
    @example $(selector).maxlength() */
  $.JQPlugin.createPlugin({

    /** The name of the plugin. */
    name: pluginName,

    /** Maxlength full callback.
      Triggered when the text area is full or overflowing.
      @callback fullCallback
      @param overflowing {boolean} True if overflowing, false if not.
      @example onFull: function(overflowing) {
  $(this).addClass(overflowing ? 'overflow' : 'full');
} */

    /** Default settings for the plugin.
      @property [max=200] {number} Maximum length.
      @property [truncate=true] {boolean} True to disallow further input, false to highlight only.
      @property [showFeedback=true] {boolean} True to always show user feedback, 'active' for hover/focus only.
      @property [feedbackTarget=null] {string|Element|jQuery|function} jQuery selector, element,
        or jQuery object, or function for element to fill with feedback.
      @property [onFull=null] {fullCallback} Callback when full or overflowing. */
    defaultOptions: {
      max: 200,
      truncate: true,
      showFeedback: true,
      feedbackTarget: null,
      onFull: null
    },

    /** Localisations for the plugin.
      Entries are objects indexed by the language code ('' being the default US/English).
      Each object has the following attributes.
      @property [feedbackText='{r}&nbsp;characters&nbsp;remaining&nbsp;({m}&nbsp;maximum)'] {string}
        Display text for feedback message, use {r} for remaining characters,
        {c} for characters entered, {m} for maximum.
      @property [overflowText='{o} characters too many ({m} maximum)'] {string}
        Display text when past maximum, use substitutions above and {o} for characters past maximum. */
    regionalOptions: { // Available regional settings, indexed by language/country code
      '': { // Default regional settings - English/US
        feedbackText: '{r} characters remaining ({m} maximum)',
        overflowText: '{o} characters too many ({m} maximum)'
      }
    },

    /** Names of getter methods - those that can't be chained. */
    _getters: ['curLength'],

    _feedbackClass: pluginName + '-feedback', //Class name for the feedback section
    _fullClass: pluginName + '-full', // Class name for indicating the textarea is full
    _overflowClass: pluginName + '-overflow', // Class name for indicating the textarea is overflowing
    _disabledClass: pluginName + '-disabled', // Class name for indicating the textarea is disabled

    _instSettings: function(elem, options) {
      return {feedbackTarget: $([])};
    },

    _postAttach: function(elem, inst) {
      elem.on('keypress.' + inst.name, function(event) {
          if (!inst.options.truncate) {
            return true;
          }
          var ch = String.fromCharCode(
            event.charCode == undefined ? event.keyCode : event.charCode);
          return (event.ctrlKey || event.metaKey || ch == '\u0000' ||
            $(this).val().length < inst.options.max);
        }).
        on('keyup.' + inst.name, function() { $.maxlength._checkLength(elem); });
    },

    _optionsChanged: function(elem, inst, options) {
      $.extend(inst.options, options);
      if (inst.feedbackTarget.length > 0) { // Remove old feedback element
        if (inst.hadFeedbackTarget) {
          inst.feedbackTarget.empty().val('').
            removeClass(this._feedbackClass + ' ' + this._fullClass + ' ' + this._overflowClass);
        }
        else {
          inst.feedbackTarget.remove();
        }
        inst.feedbackTarget = $([]);
      }
      if (inst.options.showFeedback) { // Add new feedback element
        inst.hadFeedbackTarget = !!inst.options.feedbackTarget;
        if ($.isFunction(inst.options.feedbackTarget)) {
          inst.feedbackTarget = inst.options.feedbackTarget.apply(elem[0], []);
        }
        else if (inst.options.feedbackTarget) {
          inst.feedbackTarget = $(inst.options.feedbackTarget);
        }
        else {
          inst.feedbackTarget = $('<span></span>').insertAfter(elem);
        }
        inst.feedbackTarget.addClass(this._feedbackClass);
      }
      elem.off('mouseover.' + inst.name + ' focus.' + inst.name +
        'mouseout.' + inst.name + ' blur.' + inst.name);
      if (inst.options.showFeedback == 'active') { // Additional event handlers
        elem.on('mouseover.' + inst.name, function() {
            inst.feedbackTarget.css('visibility', 'visible');
          }).on('mouseout.' + inst.name, function() {
            if (!inst.focussed) {
              inst.feedbackTarget.css('visibility', 'hidden');
            }
          }).on('focus.' + inst.name, function() {
            inst.focussed = true;
            inst.feedbackTarget.css('visibility', 'visible');
          }).on('blur.' + inst.name, function() {
            inst.focussed = false;
            inst.feedbackTarget.css('visibility', 'hidden');
          });
        inst.feedbackTarget.css('visibility', 'hidden');
      }
      this._checkLength(elem);
    },

    /** Retrieve the counts of characters used and remaining.
      @param elem {jQuery} The control to check.
      @return {object} The current counts with attributes used and remaining.
      @example var lengths = $(selector).maxlength('curLength'); */
    curLength: function(elem) {
      var inst = this._getInst(elem);
      var value = elem.val();
      var len = value.replace(/\r\n/g, '~~').replace(/\n/g, '~~').length;
      return {used: len, remaining: inst.options.max - len};
    },

    /** Check the length of the text and notify accordingly.
      @private
      @param elem {jQuery} The control to check. */
    _checkLength: function(elem) {
      var inst = this._getInst(elem);
      var value = elem.val();
      var len = value.replace(/\r\n/g, '~~').replace(/\n/g, '~~').length;
      elem.toggleClass(this._fullClass, len >= inst.options.max).
      toggleClass(this._overflowClass, len > inst.options.max);
      if (len > inst.options.max && inst.options.truncate) { // Truncation
        var lines = elem.val().split(/\r\n|\n/);
        value = '';
        var i = 0;
        while (value.length < inst.options.max && i < lines.length) {
          value += lines[i].substring(0, inst.options.max - value.length) + '\r\n';
          i++;
        }
        elem.val(value.substring(0, inst.options.max));
        elem[0].scrollTop = elem[0].scrollHeight; // Scroll to bottom
        len = inst.options.max;
      }
      inst.feedbackTarget.toggleClass(this._fullClass, len >= inst.options.max).
        toggleClass(this._overflowClass, len > inst.options.max);
      var feedback = (len > inst.options.max ? // Feedback
        inst.options.overflowText : inst.options.feedbackText).
          replace(/\{c\}/, len).replace(/\{m\}/, inst.options.max).
          replace(/\{r\}/, inst.options.max - len).
          replace(/\{o\}/, len - inst.options.max);
      try {
        inst.feedbackTarget.text(feedback);
      }
      catch(e) {
        // Ignore
      }
      try {
        inst.feedbackTarget.val(feedback);
      }
      catch(e) {
        // Ignore
      }
      if (len >= inst.options.max && $.isFunction(inst.options.onFull)) {
        inst.options.onFull.apply(elem, [len > inst.options.max]);
      }
    },

    /** Enable the control.
      @param elem {Element} The control to affect.
      @example $(selector).maxlength('enable'); */
    enable: function(elem) {
      elem = $(elem);
      if (!elem.hasClass(this._getMarker())) {
        return;
      }
      var inst = this._getInst(elem);
      elem.prop('disabled', false).removeClass(inst.name + '-disabled');
      inst.feedbackTarget.removeClass(inst.name + '-disabled');
    },

    /** Disable the control.
      @param elem {Element} The control to affect.
      @example $(selector).maxlength('disable'); */
    disable: function(elem) {
      elem = $(elem);
      if (!elem.hasClass(this._getMarker())) {
        return;
      }
      var inst = this._getInst(elem);
      elem.prop('disabled', true).addClass(inst.name + '-disabled');
      inst.feedbackTarget.addClass(inst.name + '-disabled');
    },

    _preDestroy: function(elem, inst) {
      if (inst.feedbackTarget.length > 0) {
        if (inst.hadFeedbackTarget) {
          inst.feedbackTarget.empty().val('').css('visibility', 'visible').
            removeClass(this._feedbackClass + ' ' + this._fullClass + ' ' + this._overflowClass);
        }
        else {
          inst.feedbackTarget.remove();
        }
      }
      elem.removeClass(this._fullClass + ' ' + this._overflowClass).off('.' + inst.name);
    }
  });

})(jQuery);
