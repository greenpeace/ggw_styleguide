<header class="l-header header" role="banner">

  <div class="container">

    <div class="l-branding-header">

      <a href="#" title="Home" rel="home" class="logo"> <span class="element-invisible">Greenpeace Greenwire Nederland </span></a>

    </div>

    <div class="l-header-navigation">

      <div class="mobile-nav">
        <a id="main-menu-show" href="#primary-nav" data-nav="js-nav" class="nav-btn icon-menu">
          <span class="element-invisible">Show primary navigation</span>
        </a>
        <a id="secondary-menu-show" href="#secondary-nav" data-nav="js-nav2" class="nav-btn icon-user">
          <span class="element-invisible">Show secondary navigation</span>
        </a>
      </div>

      <div id="primary-nav" class="off-canvas">
        <div class="nav-inner-wrap">
          <!-- remove .block for all header blocks so we can style the rest of the blocks with a single selector -->
          <div class="block-search">
            <?php include('modules/search.php'); ?>
          </div>

          <nav class="main-menu" role="navigation">
            <?php include('modules/main-menu.php'); ?>
          </nav>
        </div>

      </div>

      <div id="secondary-nav" class="off-canvas">

        <div class="nav-inner-wrap">
          <?php include('modules/user-menu.php'); ?>

          <form class="l-country-selector country-selector" accept-charset="UTF-8" action="/usa/en/" method="post">
            <div class="form-item form-type-select form-item-countries">
              <select class="form-select"><option value="belgium">Belgium</option><option value="france">France</option><option value="india">India</option><option value="international" selected="selected">International</option><option value="netherlands">Nederland</option><option value="russia">Russia</option><option value="thailand">Thailand</option><option value="usa">USA</option><option value="uk">United Kingdom</option></select>
            </div>
            <input type="submit" value="Switch country" class="form-submit" />
          </form>

          <form class="l-language-switcher language-switcher" action="/belgium/fr/" method="post" accept-charset="UTF-8">
            <div class="form-item form-type-select form-item-languages">
              <label for="edit-languages">Language </label>
              <select class="form-select" id="edit-languages"><option value="fr" selected="selected">Français</option><option value="nl">Nederlands</option></select>
            </div>
            <input type="submit" value="Switch language" class="form-submit" />
          </form>

        </div>
      </div>


    </div> <!-- end l-header-navigation -->

  </div>

</header>
