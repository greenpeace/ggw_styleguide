// var didScroll;
// var lastScrollTop = 0;
// var delta = 5;
// var actionbarHeight = 100;

// // on scroll, let the interval function know the user has scrolled
// $('#main').scroll(function(event){
//   didScroll = true;
// });

//   // run hasScrolled() and reset didScroll status
// setInterval(function() {

//     if (didScroll) {
//       hasScrolled();
//       didScroll = false;
//     }

// }, 250);

// function hasScrolled() {

//   var st = $(this).scrollTop();

//     // Make sure they scroll more than delta
//     if(Math.abs(lastScrollTop - st) <= delta)
//         return;

//     // If they scrolled down and are past the navbar, add class .nav-up.
//     // This is necessary so you never see what is "behind" the navbar.
//     if (st > lastScrollTop && st > actionbarHeight){
//         // Scroll Down
//         $('.action-menu').addClass('hidden');
//         $('#dropdown-action-menu').hide();
//     } else {
//         // Scroll Up
//         if(st + $(window).height() < $(document).height()) {
//           $('.action-menu').removeClass('hidden');
//           $('#dropdown-action-menu').hide();
//         }
//     }

//     lastScrollTop = st;
//   }


