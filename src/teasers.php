<?php include('modules/head.php'); ?>
<body class="not-front not-logged-in page-type-news l-has-sidebar">

<noscript><div id="javascript-disabled">Your JavaScript seems to be disabled, this might affect your experience on Greenpeace Greenwire.</div></noscript>

<div class="layout-base">

<?php include('modules/mobilenav.php'); ?>

<?php include('modules/header.php'); ?>

  <div id="main" class="l-main container">

<div class="action-menu">
  <ul>
    <li><a href="#"><i class="icon icon-user"></i> Login</a></li>
    <li><a href="#"><i class="icon icon-user-add"></i> Register</a></li>
  </ul>
</div>

  <nav class="breadcrumb" role="navigation">

    <h2 class="element-invisible">You are here</h2>

    <ol class="breadcrumbs"> <?php // add extra class here ?>
      <li class="breadcrumb-item">You are here:</li>
      <li class="breadcrumb-item">
        <a class="breadcrumb-link" href="#">Home</a> <?php // add extra class here ?>
      </li>
      <li class="breadcrumb-item">
        <a class="breadcrumb-link" href="#">News</a> <?php // add extra class here ?>
      </li>
      <li class="breadcrumb-item">Random news article</li>
    </ol>

  </nav>

  <div id="content" class="l-main-column">

    <div class="main-content">

      <i class="block-icon icon-bg-news-media icon-news"></i>
      <h1 id="page-title" class="block-title">Random news article titele which a kind of long for a title so we can see how it streches over multiple lines</h1>  <?php // add extra class here ?>

      <div class="content">

        <div class="views-row"> <!-- NEWS -->

          <article class="node-teaser-news node-teaser">

            <div class="field-type-image">
              <picture>
                <source media="(min-width: 48em)" srcset="http://placehold.it/130x90, http://placehold.it/260x180 2x">
                <img src="http://placehold.it/90x60" srcset="http://placehold.it/180x120 2x" alt="The president giving an award.">
              </picture>
            </div>

            <div class="field-type-wrapper">

              <h2 class="node-title">This is an example of a long news title</h2>

              <div class="submitted">
                <a href="#" class="news">News</a> by <a href="#">Ana Hristova</a>, 23rd July 2014
              </div>

              <div class="field-name-body">
                On touch devices, a click event has a 300ms delay before firing. The reason for this the delay  is that browsers need that buffer to make sure you aren’t going to double-tap on anything.
              </div>

            </div>

          </article>

        </div>



        <div class="views-row"> <!-- Event -->

          <article class="node-teaser-event node-teaser">

            <div class="field-type-image">
              <picture>
                <source media="(min-width: 48em)" srcset="http://placehold.it/130x90, http://placehold.it/260x180 2x">
                <img src="http://placehold.it/90x60" srcset="http://placehold.it/180x120 2x" alt="The president giving an award.">
              </picture>
            </div>

            <div class="field-type-wrapper">

              <h2 class="node-title">This is an example of a long event title</h2>

              <div class="submitted">
                <a href="#" class="event">Event</a>, 23rd July 2014
              </div>

              <div class="field-group-format">

                <div class="field-type-date"> <label>Time:</label>August 10th, 8:00PM until 11:30 PM</div>
                <div class="field-type-location"> <label> Address</label>Oude Markt 9B, Enschede (Market Square )</div>

              </div>

            </div>

          </article>

        </div>


        <div class="views-row"> <!-- Group -->

          <article class="node-teaser-group node-teaser">

            <div class="field-type-image">
              <picture>
                <source media="(min-width: 48em)" srcset="http://placehold.it/130x90, http://placehold.it/260x180 2x">
                <img src="http://placehold.it/90x60" srcset="http://placehold.it/180x120 2x" alt="The president giving an award.">
              </picture>
            </div>

            <div class="field-type-wrapper">

              <h2 class="node-title">This is an example of a long group title</h2>

              <div class="submitted">
                <a href="#" class="group">Group</a>, 3rd October 2013
              </div>

              <div class="field-group-format">

                <div class="field-type-taxonomy-term-reference"> <label>Group type:</label>Campaign group</div>

              </div>

            </div>

          </article>

        </div>


        <div class="views-row"> <!-- Album -->

          <article class="node-teaser-album node-teaser">

            <div class="field-type-image">
              <picture>
                <source media="(min-width: 48em)" srcset="http://placehold.it/130x90, http://placehold.it/260x180 2x">
                <img src="http://placehold.it/90x60" srcset="http://placehold.it/180x120 2x" alt="The president giving an award.">
              </picture>
            </div>

            <div class="field-type-wrapper">

              <h2 class="node-title">This is an example of a long photo album title</h2>

              <div class="submitted">
                <a href="#" class="album">Photos</a> by <a href="#">Ana Hristova</a>, 23rd July 2014
              </div>

              <div class="field-name-body">
                On touch devices, a click event has a 300ms delay before firing. The reason for this the delay  is that browsers need that buffer to make sure you aren’t going to double-tap on anything.
              </div>

            </div>

          </article>

        </div>

      </div>

    </div>

  </div>

    <aside class="l-sidebar sidebar">

    <a data-replace="modules/an-article-sidebar" <?php echo ($detect->isMobile() ? "data-media='(min-width: 900px)'" : ""); ?>><span class="element-invisible">
    Register instructions</span></a>

  </aside>

</div>

<footer class="l-footer footer">
  <a data-replace="modules/footer" data-media="(min-width: 900px)"><span class="element-invisible">
    Footer</span></a>
</footer>

</div>
<script src="js/theme.js"></script>
<!--[if (gte IE 6)&(lte IE 8)]>
  <script type="text/javascript" src="js/oldie.js"></script>
<![endif]-->
</body>
</html>
