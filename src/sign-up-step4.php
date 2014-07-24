<?php include('modules/head.php'); ?>
<body class="not-front not-logged-in domain-nl page-register page-register-step4 l-has-sidebar">

<noscript><div id="javascript-disabled">Your JavaScript seems to be disabled, this might affect your experience on Greenpeace Greenwire.</div></noscript>

<div class="layout-base">

<?php include('modules/mobilenav.php'); ?>

<?php include('modules/header.php'); ?>

<div class="original-action-menu">
  <ul>
    <li><a href="#" class="active"><i class="icon icon-user-add"></i> Get wired</a></li>
    <li><a href="#"><i class="icon icon-login"></i> Login</a></li>
  </ul>
</div>

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
      <h1 id="page-title" class="block-title">Register (step 4/4)</h1>  <?php // add extra class here ?>

      <div class="content">

       <div class="progress-bar-wrapper">
          <div class="progress-bar" style="width: 75%;">75%</div>
       </div>

       <form>

        <?php //We need to reorganise the use of form wrappers here, they should only be used to group form items, on this page on production it is used too much. ?>

        <div class="form-wrapper">
          <?php //remove extra wrapper here conditionally, is needed for autocomplete ?>
          <div class="form-item form-type-checkbox">
            <input type="checkbox" id="check1" value="1" checked="checked" class="form-checkbox" />
            <label class="option" for="check1">Subscribe to the  newsletter </label>
          </div>

          <div class="form-item">
            <label class="form-label">Language </label>
            <div class="form-description">The selected language will show content available in that language as well as serve as the preferred language for the interface and e-mails.</div>
            <div class="form-radios">
              <div class="form-type-radio">
                <input type="radio" name="language" id="edit-language-nl" value="nl" checked="checked" class="form-radio" />
                <label class="option" for="edit-language-nl">Dutch (Nederlands) </label>
              </div>
              <div class="form-type-radio">
                <input type="radio" id="edit-language-en-us" name="language" value="en-US" class="form-radio" /> <label class="option" for="edit-language-en-us">English, US </label>
              </div>
            </div>
          </div>

          <div class="form-item">
            <label class="form-label">Secondary language </label>
            <div class="form-description">When selected you will also see content that is available for this language.</div>
            <div class="form-radios">
              <div class="form-type-radio">
                <input type="radio" name="language2" id="edit-language-en-us2" value="en-us" checked="checked" class="form-radio" />
                <label class="option" for="edit-language-en-us2">English, US </label>
              </div>
              <div class="form-type-radio">
                <input type="radio" name="language2" id="edit-language-nl2" value="nl" class="form-radio" /> <label class="option" for="edit-language-nl2">Dutch </label>
              </div>
            </div>
          </div>

          <div class="form-item form-type-checkbox">
            <input type="checkbox" id="check2" value="1" checked="checked" class="form-checkbox" />
            <label class="option" for="check2">
              I want to signup as a volunteer at Greenpeace and agree to the
                <a class="modal" href="modules/agreement.html">user agreement</a>.
                <span class="form-required" title="This field is required.">*</span>
              </label>
          </div>

        </div> <?php //form-wrapper ?>

        <div class="form-actions form-wrapper">
          <input class="button pull-left" <?php // modify all classes here ?> type="submit" value="Back to previous step">
          <input class="button btn-primary pull-right" <?php // modify all classes here ?> type="submit" value="Next">
        </div>

       </form>

      </div>

    </div>

  </div>

    <aside class="l-sidebar sidebar">

    <a data-replace="modules/register-sidebar.php" <?php echo ($detect->isMobile() ? "data-media='(min-width: 900px)'" : ""); ?>>Register instructions</a>

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
