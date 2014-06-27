/**
 * @file
 * Greenpeace Greenwire Core JavaScript that makes the awesomebox even more
 * awesome.
 */

jQuery(document).ready(function ($) {

  'use strict';

  // Define the context we will be operating in.
  var list = '.action-menu ul';
  var break_width = 55;

  // Act only if the more tab is not created yet.
  if (typeof $(list) != 'undefined' && $(list) != false && $(list).length > 0) {
    if ($('.action-overflowing', list).length == 0) {

      // We define the actual list width here.
      var list_width = Number($(list).css('width').replace(/[^-\d\.]/g, ''));

      // This is the width of the 'more' tab we might be using.
      var listitems_width = 65;

      // We will store any items here that we want to move.
      var items_to_move = new Array();

      // Foreach quicktab we want to find out if it exceeds the max width.
      $.each($('li', list), function(index, value) {
        var item_width = Number($(value).outerWidth(true));
        listitems_width = listitems_width + item_width;

        // Max width exceeded? Add it to the items_to_move array.
        if (listitems_width >= list_width) {
          items_to_move[index] = value;
        }
      });

      // If there are items to move we proceed here.
      if (items_to_move.length > 0) {
        // Final check to see if we actually have to do something.
        if ((listitems_width - break_width) >= list_width) {
          // Add our new container div.
          $(list).append('<li class="action-overflowing"><a data-dropdown="#dropdown-action-menu" class="action-overflowing-trigger" href="#"><i class="icon icon-menu"></i> More </a><div id="dropdown-action-menu" class="dropdown dropdown-scroll"><ul class="dropdown-menu"></ul></li>');

          // Foreach items that need to moved place them in the newly created
          // awesomebox dropdown.
          $.each(items_to_move, function(index, value) {
            $('#dropdown-action-menu ul', list).append(value);
          });
        }
      }

    }
  }

});
