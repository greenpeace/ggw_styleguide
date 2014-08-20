<?php include('modules/head.php'); ?>
<body class="not-front not-logged-in page-profile l-has-sidebar">

<noscript><div id="javascript-disabled">Your JavaScript seems to be disabled, this might affect your experience on Greenpeace Greenwire.</div></noscript>

<div class="layout-base">
<?php // include('modules/members-quicknav.php'); ?>
<?php include('modules/mobilenav.php'); ?>

<?php include('modules/header-LU.php'); ?>

<div id="main" class="l-main container">


  <nav class="breadcrumb" role="navigation">

    <h2 class="element-invisible">You are here</h2>

    <ol class="breadcrumbs"> <?php // add extra class here ?>
      <li class="breadcrumb-item">You are here:</li>
      <li class="breadcrumb-item">
        <a class="breadcrumb-link" href="#">Home</a> <?php // add extra class here ?>
      </li>
      <li class="breadcrumb-item">
        <a class="breadcrumb-link" href="#">Members</a> <?php // add extra class here ?>
      </li>
      <li class="breadcrumb-item">John Doe Claus</li>
    </ol>

  </nav>

  <div id="content" class="l-main-column">

    <div class="main-content">

      <i class="block-icon icon-bg-user icon-user"></i>
      <h1 id="page-title" class="block-title">John Doe Claus <span class="secondary-title">(johnny_has_a_nickname)</span></h1>

      <div class="content">

        <div class="profile">

          <a href="#" class="button btn-s btn-edit"><i class="icon-edit"></i> edit</a>

          <div class="field-type-image">
            <img src="http://lorempixel.com/130/130/people" alt="John Doe Claus">
          </div>
          <div class="field-type-wrapper">

            <div class="field field-name-field-social-media">
              <a href="#" class="social-icon twitter" target="_blank"><span class="element-hidden">twitter</span></a>
              <a href="#" class="social-icon facebook" target="_blank"><span class="element-hidden">facebook</span></a>
              <a href="#" class="social-icon googleplus" target="_blank"><span class="element-hidden">googleplus</span></a>
              <a href="#" class="social-icon linkedin" target="_blank"><span class="element-hidden">linkedin</span></a>
              <a href="#" class="social-icon pinterest" target="_blank"><span class="element-hidden">pinterest</span></a>
              <a href="#" class="social-icon vk" target="_blank"><span class="element-hidden">vkontakte</span></a>
            </div>

            <div class="field field-name-field-skype">
              <div class="field-label"><span class="element-hidden">Skype:</span></div>
              <div class="field-item"> <i class="icon-skype"></i> <span>john_doe_north_pole</span></div>
            </div>

          </div>

          <div class="clear"></div>

          <div class="field-type-wrapper">

            <div class="field field-name-field-birthdate">

              <div class="field-label">Date of birth:</div>
              <div class="field-item">
                October 25th, 1980
              </div>

            </div>

            <div class="field field-name-field-mail">

              <div class="field-label">Email:</div>
              <div class="field-item">
                john_doe_claus@greenpeace.org
              </div>

            </div>

            <div class="field field-name-field-user-about">

              <div class="field-label">About me:</div>
              <div class="field-item">
                In et sagittis turpis, quis malesuada urna! Duis tempus pellentesque eros, eget bibendum quam rhoncus posuere. Duis commodo lobortis elit; eu condimentum ante feugiat ut. In dictum risus sed tempor rhoncus. Pellentesque tellus risus, sodales ut eleifend vel, porta sit amet nisi. Praesent vestibulum vitae nibh nec ultricies. Vivamus semper, ipsum ut eleifend eleifend, dui dui tempor neque, sit amet gravida ligula sapien et est.
              </div>

            </div>

            <div class="field field-name-field-location">

              <div class="field-label">Home town:</div>
              <div class="field-item">
                North Pole, Greenland
              </div>

            </div>

            <div class="field field-name-field-profession">

              <div class="field-label">Profession:</div>
              <div class="field-item">
                Accountmanager at Greenpeace International
              </div>

            </div>

            <div class="field field-name-field-user-education">

              <div class="field-label">Education:</div>
              <div class="field-item">
                 Cras porttitor convallis porta. Praesent nibh sapien, tempus vitae lacus ut, convallis molestie odio. Sed porttitor turpis sed velit feugiat, at consequat dolor mattis. Aenean bibendum dolor id orci facilisis, non vestibulum odio posuere. Vivamus lobortis nulla in neque ullamcorper mattis.
              </div>

            </div>

            <div class="field field-name-field-profession">

              <div class="field-label">Skills:</div>
              <div class="field-item">
                Research, Oceans, Storytelling, Blogging, Painting, French, Custome design, Fundraising
              </div>

            </div>


          </div>

        </div>


      </div>

    </div>

  </div>

  <aside class="l-sidebar sidebar">

      <div class="box-container">

          <a href="my-profile.php" class="box box-profile active">
              <h3 class="box-label">Profile</h3>
                <i class="box-icon icon-user"></i>
          </a>

          <a href="my-friends.php" class="box box-profile">
              <h3 class="box-label">Friends</h3>
                <i class="box-icon icon-users"></i>
          </a>

          <a href="activity.php" class="box box-activity">
              <h3 class="box-label">Activity</h3>
                <i class="box-icon icon-clock"></i>
          </a>

          <a href="my-groups.php" class="box box-groups">
              <h3 class="box-label">Groups</h3>
                <i class="box-icon icon-users"></i>
          </a>

          <a href="my-events.php" class="box box-events">
              <h3 class="box-label">Events</h3>
                <i class="box-icon icon-event"></i>
          </a>

          <a href="subscriptions.php" class="box box-subscriptions">
              <h3 class="box-label">Subscriptions</h3>
                <i class="box-icon icon-subscription"></i>
          </a>

      </div>

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
