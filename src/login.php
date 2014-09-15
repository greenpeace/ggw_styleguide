<?php include('modules/head.php'); ?>
<body class="not-front not-logged-in page-login l-has-sidebar">

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
      <li class="breadcrumb-item">Login</li>
    </ol>

  </nav>

  <div id="content" class="l-main-column">


    <div class="main-content">

      <i class="block-icon icon-bg-user icon-login"></i>
      <h1 id="page-title" class="block-title">Login</h1>  <?php // add extra class here ?>

      <div class="content">

       <form>

        <div class="signup-wrapper social-signup-wrapper" data-title="OR">

          <h3 class="form-title">Log in with social media</h3>

          <a href="#" class="button btn-l btn-block btn-social-fb"><i class="icon icon-facebook"></i> Log in with Facebook</a>
          <a href="#" class="button btn-l btn-block btn-social-gp"><i class="icon icon-gplus"></i> Log in with Google+</a>

        </div>

        <div class="signup-wrapper">

        <div class="form-wrapper">

          <h3 class="form-title">Log in with email</h3>

          <div class="form-item">

            <label class="form-label" for="edit-name">
              Username <span class="form-required" title="This field is required.">*</span>
            </label>

            <div class="form-description">Enter your Greenpeace Greenwire Nederland username or email address.</div>

            <input id="edit-name" class="username form-text" type="text" maxlength="60" size="60" value="" name="name" />
          </div>

          <div class="form-item">

            <label class="form-label" for="edit-password">
              Password <span class="form-required" title="This field is required.">*</span>
            </label>

            <div class="form-description">Enter the password that accompanies your username.</div>

            <input id="edit-password" class="form-text" type="password" maxlength="60" size="60" value="" name="password" />
         </div>

        </div> <?php //form-wrapper ?>

        <div class="form-actions form-wrapper">
          <input class="button btn-primary pull-right" <?php // modify all classes here ?> type="submit" value="Log in">
        </div>

      </div>

       </form>

      </div>

    </div>

  </div>

  <aside class="l-sidebar sidebar">

      <?php include('modules/block/create-account.php'); ?>

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


