// This script creates a dropdown of the tabs menu, when there is not enough space to fit them on one row.

function tabsDropdown() {

  var windowWidth = $(window).width();

  // define how much items fit one the screen
  var itemsFit = 5;

  if (windowWidth < 480) {
    var itemsFit = 2;
  }

  // Define the context we will be operating in.
  var originallist = $('.tabs ul');
  var list = $('.tabs ul').clone();
  $('.tabs').hide();

  if ( $('.new-tabs').length ) {
    $('.new-tabs').remove();
  }

  // We will store any items here that we want to move.
  var itemsToMove = new Array();

  // Loop through all items and retrieve the index
  $.each($('li', list), function(index, value) {

    // Add everything except the first item to the itemsToMove array.
    if (index > itemsFit) {
      itemsToMove.push(value);
    }

  });


  // If there is more than one item to move we proceed here.
  if (itemsToMove.length > 0) {
  // Add our new container div.
    $(list).append('<li class="tabs-overflowing"><a data-dropdown="#dropdown-tabs" class="action- overflowing-trigger" href="#"> More </a><div id="dropdown-tabs" class="dropdown dropdown-tip dropdown-relative"><ul class="dropdown-menu"></ul></li>');

    // Foreach items that need to moved place them in the newly created awesomebox dropdown.
    $.each(itemsToMove, function(index, value) {
      $('#dropdown-tabs ul', list).append(value);
    });

    $('#dropdown-tabs').hide();
  }

  list.insertAfter('.tabs');
  list.wrapAll('<div class="new-tabs">');
  $('.new-tabs .dropdown-menu a').unwrap().removeClass("tab");


};



