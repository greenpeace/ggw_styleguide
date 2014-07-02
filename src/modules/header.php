<header class="l-header header" role="banner">

  <div class="container">

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
             <div id="dropdown-content-country" class="dropdown dropdown-scroll">
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

          <div class="l-language-selector language-selector">
            <div class="dropdown-controller">
                 <a class="trigger" href="#" data-dropdown="#dropdown-content-language">Language</a>
             </div>
            <div id="dropdown-content-language" class="dropdown dropdown-scroll">
              <ul class="dropdown-list">
                <li><a href="#">Francais</a></li>
                <li><a href="#">Nederlands</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>

  </div>

</header>
