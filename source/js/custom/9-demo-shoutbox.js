!function($, window, document) {
    "use strict";
    function Linkified(element, options) {
        this._defaults = defaults, this.element = element, this.setOptions(options), this.init();
    }
    var defaults = {
        tagName: "a",
        newLine: "\n",
        target: "_blank",
        linkClass: null,
        linkClasses: [],
        linkAttributes: null
    };
    Linkified.prototype = {
        constructor: Linkified,
        init: function() {
            1 === this.element.nodeType ? Linkified.linkifyNode.call(this, this.element) : this.element = Linkified.linkify.call(this, this.element.toString());
        },
        setOptions: function(options) {
            this.settings = Linkified.extendSettings(options, this.settings);
        },
        toString: function() {
            return this.element.toString();
        }
    }, Linkified.extendSettings = function(options, settings) {
        var prop;
        settings = settings || {};
        for (prop in defaults) settings[prop] || (settings[prop] = defaults[prop]);
        for (prop in options) settings[prop] = options[prop];
        return settings;
    }, Linkified.linkMatch = new RegExp([ "(", '\\s|[^a-zA-Z0-9.\\+_\\/"\\>\\-]|^', ")(?:", "(", "[a-zA-Z0-9\\+_\\-]+", "(?:", "\\.[a-zA-Z0-9\\+_\\-]+", ")*@", ")?(", "http:\\/\\/|https:\\/\\/|ftp:\\/\\/", ")?(", "(?:(?:[a-z0-9][a-z0-9_%\\-_+]*\\.)+)", ")(", "(?:com|ca|co|edu|gov|net|org|dev|biz|cat|int|pro|tel|mil|aero|asia|coop|info|jobs|mobi|museum|name|post|travel|local|[a-z]{2})", ")(", "(?::\\d{1,5})", ")?(", "(?:", "[\\/|\\?]", "(?:", "[\\-a-zA-Z0-9_%#*&+=~!?,;:.\\/]*", ")*", ")", "[\\-\\/a-zA-Z0-9_%#*&+=~]", "|", "\\/?", ")?", ")(", '[^a-zA-Z0-9\\+_\\/"\\<\\-]|$', ")" ].join(""), "g"),
    Linkified.emailLinkMatch = /(<[a-z]+ href=\")(http:\/\/)([a-zA-Z0-9\+_\-]+(?:\.[a-zA-Z0-9\+_\-]+)*@)/g,
    Linkified.linkify = function(text, options) {
        var attr, settings, linkClasses, linkReplace = [];
        this.constructor === Linkified && this.settings ? (settings = this.settings, options && (settings = Linkified.extendSettings(options, settings))) : settings = Linkified.extendSettings(options),
        linkClasses = settings.linkClass ? settings.linkClass.split(/\s+/) : [], linkClasses.push.apply(linkClasses, settings.linkClasses),
        text = text.replace(/</g, "&lt;").replace(/(\s)/g, "$1$1"), linkReplace.push("$1<" + settings.tagName, 'href="http://$2$4$5$6$7"'),
        linkReplace.push('class="linkified' + (linkClasses.length > 0 ? " " + linkClasses.join(" ") : "") + '"'),
        settings.target && linkReplace.push('target="' + settings.target + '"');
        for (attr in settings.linkAttributes) linkReplace.push([ attr, '="', settings.linkAttributes[attr].replace(/\"/g, "&quot;").replace(/\$/g, "&#36;"), '"' ].join(""));
        return linkReplace.push(">$2$3$4$5$6$7</" + settings.tagName + ">$8"), text = text.replace(Linkified.linkMatch, linkReplace.join(" ")),
        text = text.replace(Linkified.emailLinkMatch, "$1mailto:$3"), text = text.replace(/(\s){2}/g, "$1"),
        text = text.replace(/\n/g, settings.newLine);
    }, Linkified.linkifyNode = function(node) {
        var children, childNode, childCount, dummyElement, i;
        if (node && "object" == typeof node && 1 === node.nodeType && "a" !== node.tagName.toLowerCase() && !/[^\s]linkified[\s$]/.test(node.className)) {
            for (children = [], dummyElement = Linkified._dummyElement || document.createElement("div"),
            childNode = node.firstChild, childCount = node.childElementCount; childNode; ) {
                if (3 === childNode.nodeType) {
                    for (;dummyElement.firstChild; ) dummyElement.removeChild(dummyElement.firstChild);
                    for (dummyElement.innerHTML = Linkified.linkify.call(this, childNode.textContent || childNode.innerText || childNode.nodeValue),
                    children.push.apply(children, dummyElement.childNodes); dummyElement.firstChild; ) dummyElement.removeChild(dummyElement.firstChild);
                } else children.push(1 === childNode.nodeType ? Linkified.linkifyNode.call(this, childNode) : childNode);
                childNode = childNode.nextSibling;
            }
            for (;node.firstChild; ) node.removeChild(node.firstChild);
            for (i = 0; i < children.length; i++) node.appendChild(children[i]);
        }
        return node;
    }, Linkified._dummyElement = document.createElement("div"), $.fn.linkify = function(options) {
        return this.each(function() {
            var linkified;
            (linkified = $.data(this, "plugin-linkify")) ? (linkified.setOptions(options), linkified.init()) : $.data(this, "plugin-linkify", new Linkified(this, options));
        });
    }, $.fn.linkify.Constructor = Linkified, $(window).on("load", function() {
        $("[data-linkify]").each(function() {
            var $target, $this = $(this), target = $this.attr("data-linkify"), options = {
                tagName: $this.attr("data-linkify-tagname"),
                newLine: $this.attr("data-linkify-newline"),
                target: $this.attr("data-linkify-target"),
                linkClass: $this.attr("data-linkify-linkclass")
            };
            for (var option in options) "undefined" == typeof options[option] && delete options[option];
            $target = "this" === target ? $this : $this.find(target), $target.linkify(options);
        });
    }), $("body").on("click", ".linkified", function() {
        var $link = $(this), url = $link.attr("href"), isEmail = /^mailto:/i.test(url), target = $link.attr("target");
        return isEmail ? window.location.href = url : window.open(url, target), !1;
    });
}(jQuery, window, document);


!function($, window, document) {
    "use strict";

    var mentionRegex = "/\b(@(\S+))/g"

    $.fn.urlToLink = function (options) {
        options = $.extend({}, $.fn.urlToLink.defaults, options);
        return this.each(function () {
            $(this).html($(this).html().replace(
                mentionRegex,
                function (match, contents, offset, s) {
                    var href = match,
                        linkText = '',
                        rel = '',
                        lengthToSplit = 0;

                    if (options.removeHttp) {
                        href = href.replace("@", "")
                    }

                    linkText = href;

                    return ' <a href="' + match + '" title="' + match + '" target="' + options.target + '" rel="' + rel + '">' + linkText + '</a>';
                }
            ))
        });
        console.log('here');
    }

    /**
     * Default configuration
     */
    $.fn.urlToLink.defaults = {
        // Link target
        target : '_self',

    }
}(jQuery, window, document);

$(function() {
  $('.form-comment-submit').click(function(e) {
    var posttext = $('.form-comment-message textarea').val();
    var richLink = $('.comment-form-holder #linkinfo').html();
    console.log(posttext);

    var postmarkup = "<div class='avatar-holder'>";
    postmarkup +=  "<a href='./profile.html' title='View user profile'>";
    postmarkup +=  "<img alt='John Doe Claus' class='lazyload' data-srcset='/photos/60/people7.jpg 1x, /photos/120/people8.jpg 2x' src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='>";
    postmarkup +=  "<noscript>";
    postmarkup +=  "<img alt='John Doe Claus' src='/photos/60/people7.jpg' srcset='/photos/60/people7.jpg 1x, /photos/120/people8.jpg 2x'>";
    postmarkup +=  "    </noscript>";
    postmarkup +=  "  </a>";
    postmarkup +=  "</div>";
    postmarkup +=  "<div class='comment-holder'>";
    postmarkup +=  "  <div class='comment-head'>";
    postmarkup +=  "    <a class='comment-author' href='./my-profile.html' title='View profile'>";
    postmarkup +=  "      John Doe Claus";
    postmarkup +=  "    </a>";
    postmarkup +=  "  </div>";
    postmarkup +=  "  <div class='comment-body'>";
    postmarkup +=  posttext;
    if ($(richLink).length != 0) {
      postmarkup +=  richLink;
    }
    postmarkup +=  "  </div>";
    postmarkup +=  "  <div class='comment-footer'>";
    postmarkup +=  "    <span class='comment-timestamp'>now</span>";
    postmarkup +=  "    <span class='comment-actions'>";
    postmarkup +=  "      <a class='comment-actionlink modal-inline' href='#reply-comment'>reply</a>";
    postmarkup +=  "      <a class='comment-actionlink modal-inline' href='#edit-comment'>edit</a>";
    postmarkup +=  "      <a class='comment-actionlink modal-inline' href='#delete-comment'>delete</a>";
    postmarkup +=  "    </span>";
    postmarkup +=  "  </div>";
    postmarkup +=  "</div>";
    $("<article class='comment'>").html(postmarkup).prependTo('.comments');
    $('.form-comment-message textarea').val('');
    $('.form-comment-submit').addClass('disabled');
    $('.comment-form-holder #linkinfo').remove();
    e.preventDefault();
    $('.comment-body').linkify().urlToLink();
  });

  $('.form-comment-message textarea').keyup(function() {
    var postLength = $('.form-comment-message textarea').val().length;
    var charactersLeft = 255 - postLength;

    if(charactersLeft < 0) {
      $('.form-comment-submit').addClass('disabled');
    }
    else if(charactersLeft == 255) {
      $('.form-comment-submit').addClass('disabled');
    }
    else {
      $('.form-comment-submit').removeClass('disabled');
    }
  });

  $('.form-comment-submit').addClass('disabled');


  $('.show-linkinfo').click(function(e) {
    $('#shoutbox-comment-link').urlive({
      container: '#linkinfo',
      imageSize: 'small',
      callbacks: {
        onStart: function () {
          $('#shoutbox-comment-link').addClass('throbbing');
          $('.show-linkinfo').html('loading ...');
          $('.urlive-container').urlive('remove');
          $('#linkinfo p').remove();
          $('.close-linkinfo').addClass('element-hidden');
        },
        onSuccess: function() {
          $('#linkinfo').show();
        },
        onFail: function() {
          $('#linkinfo').show().prepend('<p>Cannot find a website here...</p>');
          $('.show-linkinfo').html('Check link');
        },
        noData: function () {
          $('#linkinfo').show().prepend('<p>Cannot find a website here...</p>');
          $('#shoutbox-comment-link').removeClass('throbbing');
          $('.show-linkinfo').html('Check link');
        },
        onLoadEnd: function() {
          $('#shoutbox-comment-link').removeClass('throbbing');
          $('.close-linkinfo').removeClass('element-hidden');
          $('.show-linkinfo').html('Check link');
          $('.btn-primary').prop('disabled', false);
        }
      }
    });
    e.preventDefault();
  });

  $('.close-linkinfo').click(function(e) {
    $('#shoutbox-comment-link').urlive("remove", 400);
    $(this).addClass('element-hidden');
    $('#linkinfo').hide();
    e.preventDefault();
  });

  $('.form-addlink .btn-primary').click(function(e) {
    $('.urlive-container .close-linkinfo').remove();
    $('.urlive-container').clone().insertAfter('.block-comments .form-comment-message');
    $.magnificPopup.close();
    e.preventDefault();
  });
});
