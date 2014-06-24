/**
 * @file
 * Greenpeace Greenwire Core JavaScript that makes the awesomebox even more
 * awesome.
 */

;(function($) {

  'use strict';

      // Define the context we will be operating in.
      var list = '.action-menu';
      var break_width = 68;

      // Act only if the more tab is not created yet.
      if (typeof $(list) != 'undefined' && $(list) != false && $(list).length > 0) {
        if ($('.awesomebox-more', list).length == 0) {
          // We define the actual list width here.
          list_width = Number($(list).css('width').replace(/[^-\d\.]/g, ''));

          // This is the width of the 'more' tab we might be using.
          listitems_width = 95;

          // We will store any items here that we want to move.
          items_to_move = new Array();

          // Foreach quicktab we want to find out if it exceeds the max width.
          $.each($('li', list), function(index, value) {
            item_width = Number($(value).outerWidth(true));
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
              $(list).append('<div class="awesomebox-more"><a href="#" class="tab-more">' + Drupal.t('More') + '</a><ul class="dropdown"></ul></div>');

              // Foreach items that need to moved place them in the newly created
              // awesomebox dropdown.
              $.each(items_to_move, function(index, value) {
                $('.awesomebox-more ul', list).append(value);
                $('.awesomebox-more ul').hide();
              });
            }
          }


          // Clicking on anything else than more tab should close the dropdown.
          $(':not(.awesomebox-more a.tab-more)').click(function() {
            $('.awesomebox-more ul.dropdown', list).hide();
          });

          // Clicking on the more tab will open or hide the other tabs.
          $('.awesomebox-more a.tab-more', list).click(function() {
            $('.awesomebox-more ul.dropdown', list).toggle();
            return false;
          });

          // Fix active class not doing the thing it should.
          $('.awesomebox-more li a', list).click(function() {
            $('li.active', list).removeClass('active');
          });
          $('li a', list).click(function() {
            $('.awesomebox-more li.active', list).removeClass('active');
          });
        }
      }

})(jQuery);
