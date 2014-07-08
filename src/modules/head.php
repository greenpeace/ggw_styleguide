<?php require_once 'Mobile_Detect.php';
$detect = new Mobile_Detect;
?>
<!DOCTYPE html>
<!--[if (IE 7)&(!IEMobile)]><html class="no-js ie lt-ie10 lt-ie9 lt-ie8" lang="nl" dir="ltr"><![endif]-->
<!--[if IE 8]><html class="no-js ie lt-ie10 lt-ie9" lang="nl" dir="ltr"><![endif]-->
<!--[if IE 9]><html class="no-js ie lt-ie10" lang="nl" dir="ltr"><![endif]-->
<!--[if (gte IE 9)|(gt IEMobile 7)]><html class="no-js ie" lang="nl" dir="ltr"><![endif]-->
<!--[if !IE]><!--><html class="<?php echo ($detect->isMobile() ? "mobile" : "desktop"); ?> no-js" lang="en" dir="ltr"><!--<![endif]-->
<head>

<title>Discover Greenwire | Greenpeace Greenwire Nederland</title>
<meta charset="utf-8" />
<meta name="HandheldFriendly" content="true" />
<meta name="MobileOptimized" content="width" />
<link rel="profile" href="http://www.w3.org/1999/xhtml/vocab" />
<link rel="shortcut icon" href="favicon.ico" type="image/vnd.microsoft.icon" />
<meta name="Generator" content="Drupal 7 (http://drupal.org)" />
<meta name="viewport" id="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=10.0,initial-scale=1.0" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

<!-- INLINE THIS FILE -->
<script src="js/before.js"></script>

<script>
  eCSSential({
    "all": "css/ggw.mobile.css",
    "(min-width: 480px)": "css/ggw.mobile.responsive.css",
    "IE6 IE7 IE8": "css/ggw.no-query.css"
  });
</script>

<noscript>
  <!--[if (gte IE 9)|(gt IEMobile 7)|(!IE)]><!-->
    <link rel="stylesheet" href="css/ggw.styles.css" />
  <!--<![endif]-->

  <!--[if (gte IE 6)&(lte IE 8)]>
    <link rel="stylesheet" href="css/ggw.no-query.css" />
  <![endif]-->
</noscript>

</head>
