$(document).ready(function(){
    $('a[data-scroll]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-100 // - 100px (nav-height)
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});
