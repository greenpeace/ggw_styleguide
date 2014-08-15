<?php include('modules/head.php'); ?>
<body class="not-front not-logged-in page-news l-has-sidebar">

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

      <i class="block-icon icon-bg-user icon-user"></i>
      <h1 id="page-title" class="block-title">John Doe Claus <span class="secondary-title">(johnny_has_a_nickname)</span></h1>

      <div class="content">

        <div class="profile">

          <div class="field-type-image">
            <img src="http://lorempixel.com/130/130/people" alt="John Doe Claus">
          </div>

          <div class="field-type-wrapper">

            <div class="field field-name-field-location">

              <div class="field-label">Home town:</div>
              <div>
                <span>North Pole</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
<aside class="l-sidebar sidebar">

    <?php include('modules/block/go-to-group.php'); ?>
<?php include('modules/block/get-involved.php'); ?>
<?php include('modules/block/subscribe.php'); ?>

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
