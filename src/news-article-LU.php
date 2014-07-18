<?php include('modules/head.php'); ?>
<body class="not-front not-logged-in page-news l-has-sidebar">

<noscript><div id="javascript-disabled">Your JavaScript seems to be disabled, this might affect your experience on Greenpeace Greenwire.</div></noscript>

<div class="layout-base">
<?php // include('modules/members-quicknav.php'); ?>
<?php include('modules/mobilenav.php'); ?>

<?php include('modules/header.php'); ?>

<div id="main" class="l-main container">


<div class="original-action-menu">
  <ul>
    <li><a href="#"><i class="icon icon-users"></i> Go to group</a></li>
    <li><a href="#"><i class="icon icon-plus"></i> Get involved</a></li>
    <li><a href="#"><i class="icon icon-eye"></i> Follow</a></li>
    <li><a href="#"><i class="icon icon-user"></i> Example 4</a></li>
    <li><a href="#"><i class="icon icon-tag"></i> Example 4</a></li>
    <li><a href="#"><i class="icon icon-user-add"></i> Example 5</a></li>
    <li><a href="#"><i class="icon icon-news"></i> Example 6</a></li>
    <li><a href="#"><i class="icon icon-blog"></i> Example 7</a></li>
    <li><a href="#"><i class="icon icon-photo"></i> Example 8</a></li>
  </ul>
</div>


  <nav class="breadcrumb" role="navigation">

    <h2 class="element-invisible">You are here</h2>

    <ol class="breadcrumbs"> <?php // add extra class here ?>
      <li class="breadcrumb-item">You are here:</li>
      <li class="breadcrumb-item">
        <a class="breadcrumb-link" href="#">Home</a> <?php // add extra class here ?>
      </li>
      <li class="breadcrumb-item">
        <a class="breadcrumb-link" href="#">News</a> <?php // add extra class here ?>
      </li>
      <li class="breadcrumb-item">Random news article</li>
    </ol>

  </nav>

  <div id="content" class="l-main-column">

    <div class="main-content">

      <i class="block-icon icon-bg-news-media icon-news"></i>
      <h1 id="page-title" class="block-title">Community kickoff call - 2014 Activist Summit participants</h1>

      <div class="content">

      <article class="view-mode-full">

        <div class="submitted"><a href="#">News</a> by <a href="#">Willie Mackenzie</a> - <span class="submitted-date">June 5th 2014 - 11:29</span>
        <a class="comments-shortcut" href="#block-comments"><i class="icon-comment"></i> 10 <span class="element-invisible">comments</span></a></div>

          <div class="field-name-body">

        <p>On touch devices, a click event has a 300ms delay before firing. The reason for this the delay is that browsers need that buffer to make sure you aren’t going to double-tap on anything. The result is that if you use click events blindly, that delay creates a noticeable lag as users interact with elements on your page.</p>

        <p>There has been a Google + post by Rick Byers floating around the last few days claiming the best way to deal with the delay was to eliminate the double-tap zoom altogether. With no double-tap gesture to worry about, browsers no longer need that 300ms buffer and can now fire click events immediately.</p>

        <p>One of the recommendations made was to kill the double-tap gesture on Chrome and Firefox for Android. To do this, you have to kill scaling:</p>

    <blockquote><p>On Chrome Android and Firefox this involves using the &#8220;viewport&#8221; meta tag to disable zooming (with user-scalable=no or initial-scale=1,maximum-scale=1)</p></blockquote>

<p>The popularity of the post concerned me because while the comments discussed it a bit, the original post didn’t mention one massive, glaring issue with this recommendation: the impact on accessibility.</p>

<p>Disabling scaling means not only is there no double-tap to zoom, but there is no pinch-to-zoom either. Many users depend on this functionality for accessibility: for them, disabling scaling effectively renders your site broken and useless.</p>

<picture>
  <source media="(min-width: 64em)" srcset="http://placehold.it/603x250, http://placehold.it/1440x500 2x">
  <source media="(min-width: 48em)" srcset="http://placehold.it/768x384, http://placehold.it/1536x768 2x">
  <source media="(min-width: 24em)" srcset="http://placehold.it/640x320, http://placehold.it/1280x640 2x">
  <img src="http://placehold.it/320x160" srcset="http://placehold.it/640x320 2x" alt="The president giving an award.">
</picture>

<p>So my advice is to avoid this like the plague in nearly all scenarios, for several reasons:</p>

<ul>
<li>While only Chrome and Firefox for Android will benefit from it from a performance perspective, <strong>everyone</strong> loses out on an important accessibility feature. For users who require the ability to zoom to use a site, you’ve just broken the experience for them.</li>
<li>Chrome 32 is going to get clever and <a href="https://groups.google.com/a/chromium.org/forum/#!msg/blink-dev/8evES7o-QTY/FVCaNzCIvoAJ">disable the double-tap to zoom feature without requiring scaling to be disabled</a>. As long as as “the computed viewport width in CSS pixels is less than or equal to the window width” (so basically, if you’re using width=device-width in your viewport element). Double-tap zoom will be gone—as will the 300ms delay—but users will still be able to pinch-to-zoom if necessary. Cake&#8230;eating it too&#8230;all that.</li>
<li>iOS double-tap isn’t going anywhere anytime soon. iOS uses the double-tap gesture to provide a <a href="http://www.slideshare.net/mobile/redux/getting-touchy-an-introduction-to-touch-and-pointer-events-future-of-web-apps-london-24102013/64">scroll feature</a> so you’re still going to have to account for the delay on one of the most popular mobile browsers.</li>
</ul>


<p>As <a href="http://www.splintered.co.uk/">Patrick Lauke</a> <a href="https://twitter.com/patrick_h_lauke/status/398543924069142528">pointed</a> <a href="https://twitter.com/patrick_h_lauke/status/398544072883060736">out</a> on Twitter, this leaves three different solutions for developers, depending on the scenario:</p>

  <ol>
  <li>Use something like <a href="https://github.com/ftlabs/fastclick">FastClick</a>, to account for iOS.</li>
<li>Use FastClick or kill scalability (as we’ve just discussed, a bad idea) for Chrome versions 32 and under.</li>
<li>Use width=device-width in their meta tags and celebrate when Chrome 32 and later don’t have a delay.</li>
</ol>


<p>So what’s a performance and accessibility loving developer to do if they want to get rid of the delay?</p>

<p>At the end of the post, Rick states to “just switch to using FastClick”. That’s frequently my recommendation as well. FastClick does a good job of dealing with the issue—without losing the ability to pinch-to-zoom and does so at ~10kb minimized. That’s not super lightweight, but it’s not too painful either.</p>

<p>Another option is to use something like <a href="https://github.com/filamentgroup/tappy/">Tappy!</a>, a normalized tap event from the always-clever folks at Filament Group. Tappy! lets you use a “tap” event that works for touch, mouse and keyboard. Not only do you avoid the 300ms delay, but the script is under 1kb when minimized (though it does require the use of jQuery or a similar framework).</p>

<p>The point being: there are ways to successfully eliminate the click delay <em>without</em> negatively impacting performance. Until more browsers start solving this themselves, in the present day, preserving scaling and finding another way to combat the 300ms delay is our best option.</p>
      </div>

       <div class="tags">Tags: <a class="tag" href="#">oceans</a>, <a class="tag" href="#">Sustainable Fishery</a>, <a class="tag" href="#">conservation</a> </div>


      <div class="submitted submitted-extended">
        <div class="submitted-image">
          <img src="http://placehold.it/75x75" alt="Name of the author" /> <?php // change img size to 50px ?>
        </div>

        <div class="submitted-info">
            <div><a href="#">News</a> by <a href="#">Willie MacKenzie (community coach)</a></div>
            <div class="submitted-bio">
              <p>Born in 1965 and hailing from South Africa, Willie MacKenzie has been Greenpeace’s International Executive Director since November 2009.</p>
            </div>
            <div class="submitted-all-reference"><a href="#">All News by Willy MacKenzie</a>.</div>

        </div>
      </div>
</article>

      </div>

    </div>

    <a data-replace="modules/comments-lu"><span class="element-invisible">load comments</span></a>

  </div>
<aside class="l-sidebar sidebar">

    <?php include('modules/block/go-to-group.php'); ?>
<?php include('modules/block/get-involved.php'); ?>
<?php include('modules/block/subscribe.php'); ?>
<?php include('modules/block/find-events.php'); ?>

  </aside>

</div>

<footer class="l-footer footer">
  <a data-replace="modules/footer" data-media="(min-width: 900px)"><span class="element-invisible">
    Footer</span></a>
</footer>

</div>
<script src="js/theme.js"></script>
<!--[if (gte IE 6)&(lte IE 8)]>
  <script type="text/javascript" src="js/oldie.js"></script>
<![endif]-->
</body>
</html>
