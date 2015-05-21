(function( $ ) {
     $.fn.responsiveTabs = function() {

      $(this).each(function() {
        
        var menuWrapper = $(this);

        var fullMenu = menuWrapper.children('.tabs');
        var overFlowMenu = menuWrapper.find('.dropdown ul');
        var fullHeight = menuWrapper.outerHeight();
        var triggerWidth = menuWrapper.find('.tab-overflow-trigger').outerWidth();
        var handle = menuWrapper.find('.tab-overflow-trigger').addClass('element-invisible');
        // Calculate the width of the items the user sees, so we determine the position of the more button
        var totalWidth = 0;

        // The 'more' button is translatable and must always fit
        newfullMenu = fullMenu.css('padding-right', triggerWidth);

        // Remove the moved class on each resize
        fullMenu.find('li.moved').removeClass('moved');

        // remove all of the actions out of the overflow menu
        overFlowMenu.children('li').remove();

        // find all of the .items that arent visible and add/clone them to the overflow menu
        fullMenu.children('li').filter(function() {
            var elementOffset = $(this).position().top;
            return elementOffset + $(this).height() > fullHeight;
        }).addClass('moved').clone(true).prependTo(overFlowMenu[0]).children('a').removeClass('tab');

        fullMenu.children('li:not(.moved)').each(function() {
            
            console.log($(this).outerWidth(true));

            totalWidth += $(this).outerWidth(true);
            console.log(totalWidth);
        });

        // Position the 'more' button
        menuWrapper.find('.tabs-overflow').css("left", totalWidth);

        if (overFlowMenu.children('li').length != 0) {
            handle.removeClass('element-invisible');
        } else {
            //If it is empty hide the dropdown menu,
            fullMenu.css('padding-right', '0');
        }
      }); 
    };
}( jQuery ));