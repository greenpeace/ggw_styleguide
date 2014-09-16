/*
 * Copyright (c) 2013 Mike King (@micjamking)
 *
 * jQuery Succinct plugin
 * Version 1.0.1 (July 2013)
 *
 * Licensed under the MIT License
 */
!function(i){i.fn.succinct=function(n){var t={size:240,omission:"...",ignore:!0},n=i.extend(t,n);return this.each(function(){var t,e,s=i(this),c=/[!-\/:-@\[-`{-~]$/,o=function(){s.each(function(){t=i(this).text(),t.length>n.size&&(e=i.trim(t).substring(0,n.size).split(" ").slice(0,-1).join(" "),n.ignore&&(e=e.replace(c,"")),i(this).text(e+n.omission))})},r=function(){o()};r()})}}(jQuery);