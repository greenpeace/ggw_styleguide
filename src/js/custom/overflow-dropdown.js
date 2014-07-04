// This script creates a dropdown of the action menu, when there are more then 2 buttons.

function overflowDropdown() {

  'use strict';

  // Define the context we will be operating in.
  var list = '.action-menu ul';

  // Act only if the more tab is not created yet.
  if (typeof $(list) != 'undefined' && $(list) != false && $(list).length > 0) {

    // We will store any items here that we want to move.
    var itemsToMove = new Array();

    // get window width
    var windowWidth = $(window).width();

    // define how much items fit one the screen
    var itemsFit = 1;

    if (windowWidth > 450) {
      itemsFit = 2;
    }
    if (windowWidth > 600) {
      itemsFit = 3;
    }

    // Loop through all items and retrieve the index
    $.each($('li', list), function(index, value) {

      // Add everything except the first item to the items_to_move array.
      if (index > (itemsFit - 1)) {
       itemsToMove.push(value);
      }

    });

    // If there is more than one item to move we proceed here.
    if (itemsToMove.length > 1) {
    // Add our new container div.
      $(list).append('<li class="action-overflowing"><a data-dropdown="#dropdown-action-menu" class="action-overflowing-trigger" href="#"><i class="icon icon-menu"></i> More </a><div id="dropdown-action-menu" class="dropdown dropdown-scroll"><ul class="dropdown-menu"></ul></li>');

      // Foreach items that need to moved place them in the newly created awesomebox dropdown.
      $.each(itemsToMove, function(index, value) {
        $('#dropdown-action-menu ul', list).append(value);
        $('#dropdown-action-menu').hide();
      });
    }

  }

};



