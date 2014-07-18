<?php include('modules/head.php'); ?>
<body class="front logged-in page-home l-two-column">

<noscript><div id="javascript-disabled">Your JavaScript seems to be disabled, this might affect your experience on Greenpeace Greenwire.</div></noscript>

<div class="layout-base">

<?php include('modules/mobilenav.php'); ?>

<?php include('modules/header.php'); ?>

  <div id="main" class="l-main container">

<div class="original-action-menu">
  <ul>
    <li><a class="tab" href="#content"><i class="icon icon-news"></i> Updates</a></li>
    <li><a class="tab" href="#shoutbox"><i class="icon icon-shout"></i> Shoutbox</a></li>
    <li><a class="tab" href="#upcoming-events"><i class="icon icon-event"></i> Events</a></li>
  </ul>
</div>

  <nav class="breadcrumb" role="navigation">

    <h2 class="element-invisible">You are here</h2>

    <ol class="breadcrumbs"> <?php // add extra class here ?>
      <li class="breadcrumb-item">You are here:</li>
      <li class="breadcrumb-item">
        Home
      </li>
    </ol>

  </nav>

  <?php include('modules/slider.php'); ?>

  <div id="content" class="l-main-column">

    <div class="main-content">

      <i class="block-icon icon-bg-news-media icon-news"></i>
      <h1 id="page-title" class="block-title">Updates</h1>  <?php // add extra class here ?>

      <?php include('modules/teasers.php'); ?>

    </div>

  </div>

    <aside class="l-sidebar sidebar">

    <a data-replace="modules/shoutbox"><span class="element-invisible">
    Shoutbox</span></a>

    <a data-replace="modules/block/upcoming-events"><span class="element-invisible">
    Upcoming events</span></a>

  </aside>

</div>

<footer class="l-footer footer">
  <a data-replace="modules/footer" data-media="(min-width: 900px)"><span class="element-invisible">
    Footer</span></a>
</footer>

</div>

<div id="mobilemap"></div>
<a href="#" id="close-map" class="map-close-button"><span class="element-invisible">close</span></a>
<script src="js/theme.js"></script>
<!--[if (gte IE 6)&(lte IE 8)]>
  <script type="text/javascript" src="js/oldie.js"></script>
<![endif]-->
</body>
</html>
