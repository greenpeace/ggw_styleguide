<?php include('modules/head.php'); ?>
<body class="not-front not-logged-in page-type-news l-has-sidebar">
<noscript><div id="javascript-disabled">Your JavaScript seems to be disabled, this might affect your experience on Greenpeace Greenwire.</div></noscript>

<div class="layout-base">

<?php include('modules/mobilenav.php'); ?>

<?php include('modules/header.php'); ?>

<div id="main" class="l-main container">

  <nav class="breadcrumb" role="navigation">

    <h2 class="element-invisible">You are here</h2>

    <ol class="breadcrumbs"> <?php // add extra class here ?>
      <li class="breadcrumb-item">You are here:</li>
      <li class="breadcrumb-item">
        <a class="breadcrumb-link" href="#">Home</a> <?php // add extra class here ?>
      </li>
      <li class="breadcrumb-item">Notifications</li>
    </ol>

  </nav>

  <div id="content" class="l-main-column">

    <div class="main-content">

      <i class="block-icon icon-bg-user icon-event"></i>
      <h1 id="page-title" class="block-title">My Events</h1>  <?php // add extra class here ?>

      <div class="content">

      <div class="view-header">
        <h2 class="section-heading">Upcoming events</h2>
      </div>

      <div class="views-row"> <!-- Event -->
          <?php include('modules/teasers/events-with-image.php'); ?>
      </div>

      <div class="views-row"> <!-- Event -->
        <?php include('modules/teasers/events-no-image.php'); ?>
      </div>

      <div class="view-header">
        <h2 class="section-heading">Past events</h2>
      </div>

      <div class="views-row"> <!-- Event -->
          <?php include('modules/teasers/events-with-image.php'); ?>
      </div>

      <div class="views-row"> <!-- Event -->
        <?php include('modules/teasers/events-no-image.php'); ?>
      </div>


          <?php include('modules/pager-loadmore.php'); ?>


      </div>

    </div>

  </div>

    <aside class="l-sidebar sidebar">

    <a href="modules/my-events-sidebar.php" data-replace="modules/my-events-sidebar.php" <?php echo ($detect->isMobile() ? "data-media='(min-width: 900px)'" : ""); ?>> Suggested Events</a>

  </aside>

</div>

<footer class="l-footer footer">
  <a data-replace="modules/footer.php" <?php echo ($detect->isMobile() ? "data-media='(min-width: 900px)'" : ""); ?>>Footer</a>
</footer>

</div>
<script src="js/theme.js"></script>
<!--[if (gte IE 6)&(lte IE 8)]>
  <script type="text/javascript" src="js/oldie.js"></script>
<![endif]-->
</body>
</html>
