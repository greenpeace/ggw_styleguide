<?php include('modules/head.php'); ?>
<body class="front logged-in page-home l-two-column">

<noscript><div id="javascript-disabled">Your JavaScript seems to be disabled, this might affect your experience on Greenpeace Greenwire.</div></noscript>

<div class="layout-base">

<?php include('modules/mobilenav.php'); ?>

<?php include('modules/header-LU.php'); ?>

  <div id="main" class="l-main container">

<div class="original-action-menu">
  <ul>
    <li><a class="tab" href="#content"><i class="icon icon-news"></i> Updates</a></li>
    <li><a class="tab" href="#shoutbox"><i class="icon icon-shout"></i> Shoutbox</a></li>
    <li><a class="tab" href="#upcoming-events"><i class="icon icon-event"></i> Events</a></li>
  </ul>
</div>

  <nav class="breadcrumb" role="navigation">

    <h2 class="element-invisible">You are here</h2>

    <ol class="breadcrumbs"> <?php // add extra class here ?>
      <li class="breadcrumb-item">You are here:</li>
      <li class="breadcrumb-item">
        Home
      </li>
    </ol>

  </nav>

  <?php include('modules/slider.php'); ?>

  <div id="content" class="l-main-column">

    <div class="main-content">

      <a title="Filter content" data-dropdown="#updates-filter" class="button btn-dropdown" href="#"><i class="icon-down-open"></i></a>

        <div id="updates-filter" class="dropdown-filter dropdown dropdown-tip dropdown-scroll">
          <div class="dropdown-panel">
          <form>
            <div class="form-wrapper">
              <p>Select the content you wish to see</p>

              <div class="form-item form-type-checkbox">
                <input type="checkbox" id="check1" value="1" checked="checked" class="form-checkbox" />
                <label class="option" for="check1">News</label>
              </div>

              <div class="form-item form-type-checkbox">
                <input type="checkbox" id="check2" value="1" checked="checked" class="form-checkbox" />
                <label class="option" for="check2">Blog</label>
              </div>

              <div class="form-item form-type-checkbox">
                <input type="checkbox" id="check3" value="1" checked="checked" class="form-checkbox" />
                <label class="option" for="check3">Event</label>
              </div>

              <div class="form-item form-type-checkbox">
                <input type="checkbox" id="check4" value="1" checked="checked" class="form-checkbox" />
                <label class="option" for="check4">Idea</label>
              </div>

              <div class="form-item form-type-checkbox">
                <input type="checkbox" id="check5" value="1" checked="checked" class="form-checkbox" />
                <label class="option" for="check5">Photo</label>
              </div>

              <div class="form-item form-type-checkbox">
                <input type="checkbox" id="check6" value="1" checked="checked" class="form-checkbox" />
                <label class="option" for="check6">Video</label>
              </div>

              <div class="form-item form-type-checkbox">
                <input type="checkbox" id="check7" value="1" checked="checked" class="form-checkbox" />
                <label class="option" for="check7">Document</label>
              </div>

            </div>

            <div class="form-actions form-wrapper">
              <input class="button btn-primary" type="submit" value="Submit">
              <input class="button" type="submit" value="Reset">
            </div>

          </form>
        </div>

        </div>

      <i class="block-icon icon-bg-news-media icon-news"></i>
      <h1 id="page-title" class="block-title">Updates</h1>  <?php // add extra class here ?>

      <?php include('modules/teasers.php'); ?>

    </div>

  </div>

    <aside class="l-sidebar sidebar">

    <a data-replace="modules/shoutbox"><span class="element-invisible">
    Shoutbox</span></a>

    <a data-replace="modules/block/upcoming-events"><span class="element-invisible">
    Upcoming events</span></a>

  </aside>

</div>

<footer class="l-footer footer">
  <a data-replace="modules/footer" data-media="(min-width: 900px)"><span class="element-invisible">
    Footer</span></a>
</footer>

</div>

<div id="mobilemap"></div>
<a href="#" id="close-map" class="map-close-button"><span class="element-invisible">close</span></a>
<script src="js/theme.js"></script>
<!--[if (gte IE 6)&(lte IE 8)]>
  <script type="text/javascript" src="js/oldie.js"></script>
<![endif]-->
</body>
</html>
