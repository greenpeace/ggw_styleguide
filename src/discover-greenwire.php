<?php include('modules/header.php'); ?>
<body class="not-front not-logged-in">

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

<footer class="l-footer">

</footer>
<!-- put js here -->
</body>
</html>
