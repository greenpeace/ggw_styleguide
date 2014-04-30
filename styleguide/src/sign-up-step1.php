<?php include('modules/header.php'); ?>
<body class="not-front not-logged-in page-register page-register-step1 l-has-sidebar">

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
      <h1 id="page-title" class="block-title">Register (step 1/4)</h1>  <?php // add extra class here ?>

      <div class="content">

       <div class="progress-bar-wrapper">
          <div class="progress-bar">Progress: 0%</div>
       </div>

       <form>

        <div class="form-wrapper">

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
          <input class="btn btn-primary pull-right" <?php // modify all classes here ?> type="submit" value="Next">
        </div>

       </form>

      </div>

    </div>

  </div>

  <aside class="l-sidebar sidebar">

    <div class="block">

      <h2 class="block-title">Help us save Planet Earth</h2>
      <div class="content">
        <img src="images/register-step1.png" alt="Sign up" />
      </div>

    </div>

  </aside>

</div>



<footer class="l-footer">

</footer>
<!-- put js here -->
</body>
</html>
