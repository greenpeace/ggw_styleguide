function truncateNodeTitle() {

var windowWidth = $(window).width();

  // define how much characters will fit one the screen
  var textFit = 48;

  if (windowWidth > 450) {
    textFit = 60;
  }

  if (windowWidth > 600) {
    textFit = 100;
  }

  $('.node-teaser .node-title').succinct({
    size: textFit
  });

}
