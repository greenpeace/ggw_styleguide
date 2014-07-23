<?php include('modules/head.php'); ?>
<body class="not-front not-logged-in page-register page-register-step1 l-has-sidebar">

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
      <li class="breadcrumb-item">Register</li>
    </ol>

  </nav>

  <div id="content" class="l-main-column">


    <div class="main-content">

      <i class="block-icon icon-bg-user icon-user-add"></i>
      <h1 id="page-title" class="block-title">Register</h1>  <?php // add extra class here ?>

      <div class="content">

       <form>

        <div class="signup-wrapper social-signup-wrapper" data-title="OR">

          <h3 class="form-title">Sign up with social media</h3>

          <a href="#" class="button btn-l btn-block btn-social-fb"><i class="icon icon-facebook"></i> Register with Facebook</a>
          <a href="#" class="button btn-l btn-block btn-social-gp"><i class="icon icon-gplus"></i> Register with Google+</a>

        </div>

        <div class="signup-wrapper">

        <div class="form-wrapper">

          <h3 class="form-title">Sign up with email</h3>

          <div class="form-item">

            <label class="form-label" for="edit-name">
              Username <span class="form-required" title="This field is required.">*</span>
            </label>

            <div class="form-description">Spaces are NOT allowed; punctuation is not allowed except for periods, hyphens, apostrophes, and underscores.</div>

            <input id="edit-name" class="username form-text" type="text" maxlength="60" size="60" value="" name="name" />
          </div>

          <div class="form-item">

            <label class="form-label" for="edit-email">
              E-mail address <span class="form-required" title="This field is required.">*</span>
            </label>

            <div class="form-description">A valid e-mail address. All e-mails from the system will be sent to this address. The e-mail address is not made public and will only be used if you wish to receive a new password or wish to receive certain news or notifications by e-mail.</div>

            <input id="edit-email" class="email form-text" type="text" maxlength="60" size="60" value="" name="email" />
         </div>

        </div> <?php //form-wrapper ?>

        <div class="form-actions form-wrapper">
          <input class="button btn-primary pull-right" <?php // modify all classes here ?> type="submit" value="Next">
        </div>

      </div>

       </form>

      </div>

    </div>

  </div>

  <aside class="l-sidebar sidebar">

    <a data-replace="modules/register-sidebar" <?php echo ($detect->isMobile() ? "data-media='(min-width: 900px)'" : ""); ?>><span class="element-invisible">
    Register instructions</span></a>

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


