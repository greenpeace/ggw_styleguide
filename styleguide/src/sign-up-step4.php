<?php include('modules/header.php'); ?>
<body class="not-front not-logged-in domain-nl page-register page-register-step4 l-has-sidebar">

<noscript><div id="javascript-disabled">Your JavaScript seems to be disabled, this might affect your experience on Greenpeace Greenwire.</div></noscript>

<header class="l-header header" role="banner">

  <div class="container">

    <div class="l-branding">

      <a href="#" title="Home" rel="home" class="logo"> <span class="element-invisible">Greenpeace Greenwire Nederland </span></a>

    </div>

    <div class="l-header-navigation">
      <div class="mobile-nav">
        <a id="main-menu-show" href="#primary-navigation" class="icon-menu"><span class="element-invisible">Show Navigation</span></a>
        <a id="main-menu-hide" href="#" class="icon-menu"><span class="element-invisible">Hide Navigation</span></a>
      </div>
      <div id="primary-navigation">
      <!-- remove .block for all header blocks so we can style the rest of the blocks with a single selector -->
        <div class="block-search">
          <?php include('modules/search.php'); ?>
        </div>

        <nav class="main-menu" role="navigation">
          <?php include('modules/main-menu.php'); ?>
        </nav>

      </div>

      <div class="l-secondary-navigation">
        <div class="mobile-nav">
          <a id="secondary-menu-show" href="#secondary-menu" class="icon-user">
            <span class="element-invisible">Show Navigation</span>
          </a>
          <a id="secondary-menu-hide" href="#" class="icon-user">
            <span class="element-invisible">Hide Navigation</span>
          </a>
        </div>

        <div id="secondary-navigation">

        </div>

      </div> <!-- end l-secondary-navigation -->

    </div> <!-- end l-header-navigation -->

  </div>

</header>

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
      <span class="title-prefix">Overview</span>
      <h1 id="page-title" class="block-title">Register (step 4/4)</h1>  <?php // add extra class here ?>

      <div class="content">

       <div class="progress-bar-wrapper">
          <div class="progress-bar" style="width: 75%;">Progress: 75%</div>
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
                <input type="radio" name="language" value="nl" checked="checked" class="form-radio" />
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
                <input type="radio" name="language" value="en-us" checked="checked" class="form-radio" />
                <label class="option" for="edit-language-en-us">English, US </label>
              </div>
              <div class="form-type-radio">
                <input type="radio" name="language" value="nl" class="form-radio" /> <label class="option" for="edit-language-nl">Dutch </label>
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
          <input class="btn btn-primary pull-right" <?php // modify all classes here ?> type="submit" value="Next">
          <input class="btn pull-left" <?php // modify all classes here ?> type="submit" value="Back to previous step">
        </div>

       </form>

      </div>

    </div>

  </div>

  <aside class="l-sidebar sidebar">

    <div class="block">

      <h2 class="block-title">Help us save Planet Earth</h2>
      <div class="content">
        <img src="images/register-step4.png" alt="Sign up" />
      </div>

    </div>

  </aside>

</div>



<footer class="l-footer">

</footer>
<!-- put js here -->
</body>
</html>
