<?php include('modules/head.php'); ?>
<body class="not-front not-logged-in page-type-news l-has-sidebar">

<noscript><div id="javascript-disabled">Your JavaScript seems to be disabled, this might affect your experience on Greenpeace Greenwire.</div></noscript>

<div class="layout-base">

<?php include('modules/mobilenav.php'); ?>

<?php include('modules/header.php'); ?>

  <div id="main" class="l-main container">

<div class="original-action-menu">
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
          <?php include('modules/teasers/news.php'); ?>
        </div>

        <div class="views-row"> <!-- Blog -->
          <?php include('modules/teasers/blog-with-image.php'); ?>
        </div>

        <div class="views-row"> <!-- Event -->
          <?php include('modules/teasers/events-with-image.php'); ?>
        </div>

        <div class="views-row"> <!-- Event -->
          <?php include('modules/teasers/events-no-image.php'); ?>
        </div>

        <div class="views-row"> <!-- Group -->
          <?php include('modules/teasers/groups.php'); ?>
        </div>

        <div class="views-row"> <!-- Album -->
          <?php include('modules/teasers/photos.php'); ?>
        </div>

        <div class="views-row"> <!-- Video -->
          <?php include('modules/teasers/videos.php'); ?>
        </div>

        <div class="views-row"> <!-- Document -->
          <?php include('modules/teasers/documents.php'); ?>
        </div>

        <div class="views-row"> <!-- Idea -->
          <?php include('modules/teasers/idea-with-image.php'); ?>
        </div>
        <div class="views-row"> <!-- Idea -->
          <?php include('modules/teasers/idea-no-image.php'); ?>
        </div>

        <div class="views-row"> <!-- Faq -->
          <?php include('modules/teasers/faqs.php'); ?>
        </div>

        <div class="views-row"> <!-- Pages -->
          <?php include('modules/teasers/pages.php'); ?>
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
