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
       <li class="breadcrumb-item">
        <a class="breadcrumb-link" href="#">Members</a> <?php // add extra class here ?>
      </li>
       <li class="breadcrumb-item">
        <a class="breadcrumb-link" href="#">John Doe Claus</a> <?php // add extra class here ?>
      </li>
      <li class="breadcrumb-item">Recent activity</li>
    </ol>

  </nav>

  <div id="content" class="l-main-column">

    <div class="main-content">

      <i class="block-icon icon-bg-user icon-clock"></i>
      <h1 id="page-title" class="block-title">Recent activity</h1>

      <div class="content">

        <div class="view-ggw-user-activity">

          <div class="view-content">

            <div class="views-row">

              <div class="views-field views-field-timestamp">
                16 August 2014
              </div>

              <div class="views-field views-field-rendered-entity">
                <p><a href="#">John Doe Claus</a> created <a href="#">Kom wachtlopen aan boord van de Arctic Sunrise</a></p>
              </div>

            </div>

            <div class="views-row">

              <div class="views-field views-field-timestamp">
                14 July 2014
              </div>

              <div class="views-field views-field-rendered-entity">
                <p><a href="#">John Doe Claus</a> created <a href="#" class="">Windenergy</a></p>
              </div>

            </div>

            <div class="views-row">

              <div class="views-field views-field-timestamp">
                1 May 2014
              </div>

              <div class="views-field views-field-rendered-entity">
                <p><a href="#">John Doe Claus</a> went to <a href="#" class="">Debating on solar energy solutions</a></p>
                <p><a href="#">John Doe Claus</a> replied on <a href="#" class="">Forests in Europe</a></p>
              </div>

            </div>

            <div class="views-row">

              <div class="views-field views-field-timestamp">
                29 April 2014
              </div>

              <div class="views-field views-field-rendered-entity">
                <p><a href="#">John Doe Claus</a> replied on <a href="#" class="">Why bother?</a></p>
              </div>

            </div>

          </div>

          <?php include('modules/pager-loadmore.php'); ?>

        </div>

      </div>

    </div>

  </div>

    <aside class="l-sidebar sidebar">

    <div class="box-container">

          <a href="my-profile.php" class="box box-profile">
              <h3 class="box-label">Profile</h3>
                <i class="box-icon icon-user"></i>
          </a>

          <a href="my-friends.php" class="box box-profile">
              <h3 class="box-label">Friends</h3>
                <i class="box-icon icon-users"></i>
          </a>

          <a href="activity.php" class="box box-activity active">
              <h3 class="box-label">Activity</h3>
                <i class="box-icon icon-clock"></i>
          </a>

          <a href="my-groups.php" class="box box-groups">
              <h3 class="box-label">Groups</h3>
                <i class="box-icon icon-users"></i>
          </a>

          <a href="my-events.php" class="box box-events">
              <h3 class="box-label">Events</h3>
                <i class="box-icon icon-event"></i>
          </a>

          <a href="#" class="box box-subscriptions">
              <h3 class="box-label">Subscriptions</h3>
                <i class="box-icon icon-subscription"></i>
          </a>

        </div>


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
