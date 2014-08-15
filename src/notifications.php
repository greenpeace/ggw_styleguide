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

      <i class="block-icon icon-bg-action icon-bell"></i>
      <h1 id="page-title" class="block-title">Notifications</h1>  <?php // add extra class here ?>

      <div class="content">

          <div class="view-ggw-user-activity">
            <div class="view-content">

              <article class="node-teaser-notification node-teaser">
                <div class="field-type-image">
                  <a href="#" title="View profile"><img src="http://placehold.it/60x60"></a>
                </div>
                <div class="field-type-wrapper">
                    <p><a href="#">Bob Hunter</a> has tagged you in a <a href="#">shout</a> in <a href="#">local group amsterdam</a></p>
                      <div class="submitted"><i class="icon-clock"></i> 7 days ago</div>
                </div>
              </article>

              <article class="node-teaser-notification node-teaser">
                <div class="field-type-image">
                  <a href="#" title="View profile"><img src="http://placehold.it/60x60"></a>
                </div>
                <div class="field-type-wrapper">
                    <p><a href="#">Chico Konink</a> has invited you for <a href="#">Cleaning up the north sea</a> in <a href="#">Greenpeace Greenwire Nederland</a></p>
                      <div class="submitted"><i class="icon-clock"></i> 2 days ago</div>
                </div>
              </article>

              <article class="node-teaser-notification node-teaser">
                <div class="field-type-image">
                  <a href="#" title="View profile"></a>
                </div>
                <div class="field-type-wrapper">
                    <p><a href="#">Bob Hunter</a> has tagged you in a <a href="#">shout</a> in <a href="#">local group amsterdam</a></p>
                      <div class="submitted"><i class="icon-clock"></i> 7 days ago</div>
                </div>

              </article>

          </div>

          <?php include('modules/pager.php'); ?>

          </div>

      </div>

    </div>

  </div>

    <aside class="l-sidebar sidebar">

    <a data-replace="modules/an-event-sidebar.php" <?php echo ($detect->isMobile() ? "data-media='(min-width: 900px)'" : ""); ?>>Register instructions</a>

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
