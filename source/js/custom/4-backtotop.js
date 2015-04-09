// Global Back to back button is shown when scrolling down

$(function() {

  function backToTop() {
    // Button label.
    label = 'Back to top',
    // Container selector.
    container_selector = 'body',
    // Start displaying at top height.
    display_at = 400,
    // The jQuery button.
    $bt = null,
    // The jQuery button container.
    $bt_container = $(container_selector);

    // Initialize the button.
    var bt_html = '<a id="back-top-button" class="backtotop-button">'
      + label
      + '</a>';
    $bt = $(bt_html).prependTo($bt_container);

    // Show/Hide the back to top button.
    $(window).scroll(function() {
      if ($(this).scrollTop() > display_at) {
        // If the button is not yet visible, display it.
        if ($bt.css('display') == 'none') {
          $bt.fadeIn(500);
        }
        //check_offset();
      }
      else {
        $bt.fadeOut(300);
      }
    });

    // Animate the scroll to top.
    $bt.click(function(event) {
      event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
    });

  };

  backToTop();

});


