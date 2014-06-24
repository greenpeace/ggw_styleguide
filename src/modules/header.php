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

          <div class="l-country-selector country-selector">
             <div class="dropdown-controller">
                 <a class="trigger" href="#" data-dropdown="#dropdown-content-country">International
                   <span class="country-img"></span>
                 </a>
             </div>
             <div id="dropdown-content-country" class="dropdown dropdown-scroll" style="display:none;">
                 <ul class="dropdown-list">
                     <li><a href="#">Belgium</a></li>
                     <li><a href="#">France</a></li>
                     <li><a href="#">India</a></li>
                     <li><a href="#">International</a></li>
                     <li><a href="#">Netherlands</a></li>
                     <li><a href="#">Russia</a></li>
                     <li><a href="#">Thailand</a></li>
                     <li><a href="#">USA</a></li>
                     <li><a href="#">UK</a></li>
                 </ul>
             </div>
           </div>

          <form class="l-language-switcher language-switcher" action="/belgium/fr/" method="post" accept-charset="UTF-8">
            <div class="form-item form-type-select form-item-languages">
              <label for="edit-languages">Language </label>
              <select class="form-select" id="edit-languages"><option value="fr">Français</option><option value="nl">Nederlands</option></select>
            </div>
            <input type="submit" value="Switch language" class="form-submit" />
          </form>

        </div>
      </div>


    </div> <!-- end l-header-navigation -->

  </div>

</header>
