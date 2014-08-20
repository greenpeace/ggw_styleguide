<?php include('modules/head.php'); ?>
<body class="not-front not-logged-in page-profile l-has-sidebar">

<noscript><div id="javascript-disabled">Your JavaScript seems to be disabled, this might affect your experience on Greenpeace Greenwire.</div></noscript>

<div class="layout-base">
<?php // include('modules/members-quicknav.php'); ?>
<?php include('modules/mobilenav.php'); ?>

<?php include('modules/header-LU.php'); ?>

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
      <li class="breadcrumb-item">John Doe Claus</li>
    </ol>

  </nav>

  <div id="content" class="l-main-column">

    <div class="main-content">

      <i class="block-icon icon-bg-user icon-subscription"></i>
      <h1 id="page-title" class="block-title">Subscriptions</h1>

      <div class="content">

        <div class="view-ggw-subscribe-node">

          <div class="view-header">
              <h2 class="section-heading">Groups you follow</h2>
          </div>

          <div class="view-content">

            <ul class="data-grid">

              <li>
                  <div class="field views-field-title">
                    <a href="#">Vegan bbq at CeeCee</a>
                  </div>

                  <div class="field views-field-ops">
                      <a href="#" class="button btn-s">Unfollow</a>
                  </div>
              </li>
              <li>
                  <div class="field views-field-title">
                    <a href="#">Climbing training</a>
                  </div>

                  <div class="field views-field-ops">
                      <a href="#" class="button btn-s">Unfollow</a>
                  </div>
              </li>

              <li>
                  <div class="field views-field-title">
                    <a href="#">Local group Amsterdam</a>
                  </div>

                  <div class="field views-field-ops">
                      <a href="#" class="button btn-s">Unfollow</a>
                  </div>
              </li>


              <li>
                  <div class="field views-field-title">
                    <a href="#">Climate changing bootcampers</a>
                  </div>

                  <div class="field views-field-ops">
                      <a href="#" class="button btn-s">Unfollow</a>
                  </div>
              </li>

            </ul>

          </div>

        </div>

                <div class="view-ggw-subscribe-node">

          <div class="view-header">
              <h2 class="section-heading">Content you follow</h2>
          </div>

          <div class="view-content">

            <ul class="data-grid">

              <li>
                  <div class="field views-field-title">
                    <a href="#">Some photos album</a>
                  </div>

                  <div class="field views-field-ops">
                      <a href="#" class="button btn-s">Unfollow</a>
                  </div>
              </li>
              <li>
                  <div class="field views-field-title">
                    <a href="#">The weirdest and longest blog with animations you will ever read!</a>
                  </div>

                  <div class="field views-field-ops">
                      <a href="#" class="button btn-s">Unfollow</a>
                  </div>
              </li>

            </ul>

          </div>

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

          <a href="activity.php" class="box box-activity">
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

          <a href="subscriptions.php" class="box box-subscriptions active">
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
