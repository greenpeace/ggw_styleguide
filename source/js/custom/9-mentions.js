/*jslint forin: true */

;(function($) {
    $.fn.extend({
        mention: function(options) {
            this.opts = {
                users: [],
                delimiter: '@',
                sensitive: true,
                emptyQuery: false,
                queryBy: ['name', 'username', 'location'],
                typeaheadOpts: {}
            };

            var settings = $.extend({}, this.opts, options),
                _checkDependencies = function() {
                    if (typeof $ == 'undefined') {
                        throw new Error("jQuery is Required");
                    }
                    else {
                        if (typeof $.fn.typeahead == 'undefined') {
                            throw new Error("Typeahead is Required");
                        }
                    }
                    return true;
                },
                _extractCurrentQuery = function(query, caratPos) {
                    var i;
                    for (i = caratPos; i >= 0; i--) {
                        if (query[i] == settings.delimiter) {
                            break;
                        }
                    }
                    return query.substring(i, caratPos);
                },
                _matcher = function(itemProps) {
                    var i;

                    if(settings.emptyQuery){
                      var q = (this.query.toLowerCase()),
                        caratPos = this.$element[0].selectionStart,
                        lastChar = q.slice(caratPos-1,caratPos);
                      if(lastChar==settings.delimiter){
                        return true;
                      }
                    }

                    for (i in settings.queryBy) {
                        if (itemProps[settings.queryBy[i]]) {
                            var item = itemProps[settings.queryBy[i]].toLowerCase(),
                                usernames = (this.query.toLowerCase()).match(new RegExp(settings.delimiter + '\\w+', "g")),
                                j;
                            if ( !! usernames) {
                                for (j = 0; j < usernames.length; j++) {
                                    var username = (usernames[j].substring(1)).toLowerCase(),
                                        re = new RegExp(settings.delimiter + item, "g"),
                                        used = ((this.query.toLowerCase()).match(re));

                                    if (item.indexOf(username) != -1 && used === null) {
                                        return true;
                                    }
                                }
                            }
                        }
                    }
                },
                _updater = function(item) {
                    var data = this.query,
                        caratPos = this.$element[0].selectionStart,
                        i;

                    for (i = caratPos; i >= 0; i--) {
                        if (data[i] == settings.delimiter) {
                            break;
                        }
                    }
                    var replace = data.substring(i, caratPos),
                      textBefore = data.substring(0, i),
                      textAfter = data.substring(caratPos),
                      data = textBefore + settings.delimiter + item + textAfter;

                    this.tempQuery = data;

                    return data;
                },
                _sorter = function(items) {
                    if (items.length && settings.sensitive) {
                        var currentUser = _extractCurrentQuery(this.query, this.$element[0].selectionStart).substring(1),
                            i, len = items.length,
                            priorities = {
                                highest: [],
                                high: [],
                                med: [],
                                low: []
                            }, finals = [];
                        if (currentUser.length == 1) {
                            for (i = 0; i < len; i++) {
                                var currentRes = items[i];

                                if ((currentRes.username[0] == currentUser)) {
                                    priorities.highest.push(currentRes);
                                }
                                else if ((currentRes.username[0].toLowerCase() == currentUser.toLowerCase())) {
                                    priorities.high.push(currentRes);
                                }
                                else if (currentRes.username.indexOf(currentUser) != -1) {
                                    priorities.med.push(currentRes);
                                }
                                else {
                                    priorities.low.push(currentRes);
                                }
                            }
                            for (i in priorities) {
                                var j;
                                for (j in priorities[i]) {
                                    finals.push(priorities[i][j]);
                                }
                            }
                            return finals;
                        }
                    }
                    return items;
                },
                _render = function(items) {
                    var that = this;
                    items = $(items).map(function(i, item) {

                        i = $(that.options.item).attr('data-value', item.username);

                        var _linkHtml = $('<div />');

                        if (item.image) {
                            _linkHtml.append('<img class="mention_image" src="' + item.image + '">');
                        }
                        if (item.name) {
                            _linkHtml.append('<span class="mention_name">' + item.name + '</span>');
                        }
                        if (item.username) {
                            _linkHtml.append('<span class="mention_username"> ('+ item.username + ')</span>');
                        }
                        if (item.location) {
                            _linkHtml.append('<div class="mention_location"> '+ item.location + '</div>');
                        }

                        i.find('a').html(that.highlighter(_linkHtml.html()));
                        return i[0];
                    });

                    items.first().addClass('active');
                    this.$menu.html(items);
                    return this;
                };

            $.fn.typeahead.Constructor.prototype.render = _render;

            return this.each(function() {
                var _this = $(this);
                if (_checkDependencies()) {
                    _this.typeahead($.extend({
                        source: settings.users,
                        matcher: _matcher,
                        updater: _updater,
                        sorter: _sorter
                    }, settings.typeaheadOpts));
                }
            });
        }
    });
})(jQuery);

$(function() {
  $("#shoutbox-comment").mention({
    users: [{
      name: 'Lindsay Made Lindsay Made Lindsay Made',
      username: 'LindsayMLindsayMLindsayM',
      image: 'http://placeimg.com/34/34/people/1',
      location: 'Amsterdam'
    }, {
      name: 'Rob Dyrdek',
      username: 'robdyrdek',
      image: 'http://placeimg.com/34/34/people/2',
      location: 'London'
    }, {
      name: 'Rick Bahner',
      username: 'RickyBahner',
      image: 'http://placeimg.com/34/34/people/3',
      location: 'Berlin'
    }, {
      name: 'Jacob Kelley',
      username: 'jakiestfu',
      image: 'http://placeimg.com/34/34/people/4',
      location: 'Shanghai'
    }, {
      name: 'John Doe',
      username: 'HackMurphy',
      image: 'http://placeimg.com/34/34/people/5',
      location: 'Rome'
    }, {
      name: 'Charlie Edmiston',
      username: 'charlie',
      image: 'http://placeimg.com/34/34/people/6',
      location: 'Paris'
    }, {
      name: 'Andrea Montoya',
      username: 'andream',
      image: 'http://placeimg.com/34/34/people/7',
      location: 'New York'
    }, {
      name: 'Jenna Talbert',
      username: 'calisunshine',
      image: 'http://placeimg.com/34/34/people/8',
      location: 'Mexico city'
    }, {
      name: 'Street League',
      username: 'streetleague',
      image: 'http://placeimg.com/34/34/people/9',
      location: 'Athens'
    }, {
      name: 'Loud Mouth Burrito',
      username: 'Loudmouthfoods',
      image: 'http://placeimg.com/34/34/people/10',
      location: 'Cape Town'
    }]
  });
});
