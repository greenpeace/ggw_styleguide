<?php include('modules/header.php'); ?>
<body class="not-front not-logged-in page-register page-register-step1 l-has-sidebar">

<noscript><div id="javascript-disabled">Your JavaScript seems to be disabled, this might affect your experience on Greenpeace Greenwire.</div></noscript>

<header class="l-header header" role="banner">

  <div class="container">

    <div class="l-branding">

      <a href="#" title="Home" rel="home" class="logo"> <span class="element-invisible">Greenpeace Greenwire Nederland </span></a>

    </div>

    <div class="l-header-navigation desk-navigation">
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

      </div>

    </div>

  </div>

  <aside class="l-sidebar">

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
