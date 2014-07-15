<?php include('modules/head.php'); ?>
<link rel="stylesheet" href="leaflet/leaflet.css" />
<body class="not-front not-logged-in page-type-news l-has-sidebar">
<noscript><div id="javascript-disabled">Your JavaScript seems to be disabled, this might affect your experience on Greenpeace Greenwire.</div></noscript>

<div class="layout-base">

<?php include('modules/mobilenav.php'); ?>

<?php include('modules/header.php'); ?>

<div id="main" class="l-main container">

<div class="original-action-menu">
  <ul>
    <li><a href="#"><i class="icon icon-users"></i> Go to group</a></li>
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
        <a class="breadcrumb-link" href="#">Events</a> <?php // add extra class here ?>
      </li>
      <li class="breadcrumb-item">Ga mee naar Festival Mundial</li>
    </ol>

  </nav>

  <div id="content" class="l-main-column">

    <div class="main-content">

      <i class="block-icon icon-bg-event icon-event"></i>
      <h1 id="page-title" class="block-title">Ga mee naar Festival Mundial</h1>  <?php // add extra class here ?>

      <div class="content">

        <article class="view-mode-full">

          <div class="submitted"><a href="#">Event</a> by milo_laureij - <span class="submitted-date">July 5th 2014 - 21:29</span>
          </div>

          <div class="field-name-body">

            <img class="field-type-image" src="https://static.greenwire.greenpeace.org/sites/default/files/styles/extra_large/public/nl/event/6fe8b6ee-d5ad-4942-a26d-9e8d58cb89aa.jpg" alt="De héle Noordzeekust schoon van 1 t/m 31 augustus! Help je mee?" />


            <div class="event-actions">
              <a href="#" class="button btn-primary">Enroll</a>
              <a href="#" class="button"> 343 attendees</a>
            </div>

            <div class="field-group-format">

                <div class="field field-name-field-event-date">
                  <div class="field-label">Date: </div>
                  <div>
                    <span class="date-display-start">13 July, 2014 - 09:00 CEST</span>
                    to
                    <span class="date-display-end">14 July, 2014 - 12:00 CEST</span>
                  </div>
                </div>

                <div class="field field-name-field-event-location">
                  <div class="field-label">Location: </div>
                  <div>
                    <a class="openMap" href="#"><span>Spoorzone Tilburg</span> <span>Spoorzone</span><span>Tilburg</span></a>
                  </div>

                </div>

                <div class="field field-name-field-event-type">

                  <div class="field-label">Event type: </div>
                  <div>
                    <span>Festival/Market</span>
                  </div>

                </div>

            </div>

            <div id="desktopmap"></div>

        <p><strong>Festival Mundial</strong></p>
<p>
  Ook dit jaar staat Greenpeace op het altijd gezellige en vriendelijke Festival Mundial in Tilburg. Greenpeace heeft een lange historie met dit wereldmuziekfestival en de bezoekers reageren altijd zeer positief op onze acitiviteiten. We staan op een strandje in een industrieel gebied met een leuke activiteit. </p>
<p>
  <strong>Bijenhotels knutselen</strong></p>
<p>
  In navolging van Keltfest gaan we op Mundial een weekend lang bijenhotels knutselen met het festivalpubliek. En natuurlijk zullen we zo veel mogelijk handtekeningen voor de petitie binnen halen. Het festival trekt een heel gemengd publiek aan. Jong, oud, families, hip en happening en mulitculti.</p>
<p>
  <strong>Schrijf je in!</strong></p>
<p>
  Dus kan jij het hele weekend van 28 en 29 juni? Hou je van swingende muziek, knutselen, samenwerken in een leuk team en vind jij onze campagne 'Red de bijen' ook te gek? Schrijf je nu in! We zullen op zaterdagochtend gaan opbouwen en op maandagochtend afbouwen. We slapen op een camping op het terrein. Het wordt te gek!</p>
<p>
  We zullen met een team van 8 vrijwilligers afreizen naar Tilburg onder leiding van Milo. Een inschrijving betekent niet automatisch ook deelname, aangezien we een goed evenwicht in het team moeten hebben tussen ervaren en minder ervaren mensen. Milo stelt het team dus samen op basis van de inschrijvingen en neemt vervolgens contact met je op.</p>
<p>
  Bekijk de site van Mundial voor meer info: <a href="http://www.festivalmundial.nl">www.festivalmundial.nl</a></p>
      </div>

 <div class="tags">Tags: <a class="tag" href="#">festivals</a></div>


      <div class="submitted submitted-extended">
        <div class="submitted-image">
          <img src="http://placehold.it/75x75" alt="Name of the author" /> <?php // change img size to 50px ?>
        </div>

        <div class="submitted-info">
            <div><a href="#">Event</a> by milo_laureij</div>
            <div class="submitted-bio">
              <p>Born in 1965 and hailing from South Africa, Willie MacKenzie has been Greenpeace’s International Executive Director since November 2009.</p>
            </div>
            <div class="submitted-all-reference"><a href="#">All Events by milo_laureij</a>.</div>

        </div>
      </div>
</article>

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
<div id="mobilemap"></div>
<a href="#" id="close-map" class="map-close-button"><span class="element-invisible">close</span></a>
<script src="js/theme.js"></script>
<script src="leaflet/leaflet.js"></script>
<script>
  // create a map in the "map" div, set the view to a given place and zoom
  var map = L.map('<?php echo ($detect->isMobile() ? "mobilemap" : "desktopmap"); ?>').setView([51.505, -0.09], 13);

  // add an OpenStreetMap tile layer
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);

  var greenIcon = L.icon({
    iconUrl: '/src/images/marker-green.png',
    iconRetinaUrl: '/src/images/marker-green@2x.png',
    shadowUrl: '/src/images/marker-shadow.png',
    shadowRetinaUrl: '/src/images/marker-shadow.png',
    iconSize:     [25, 41], // size of the icon
    shadowSize:   [41, 41], // size of the shadow
    iconAnchor:   [13, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [13, 41],  // the same for the shadow
    popupAnchor:  [1, -5] // point from which the popup should open relative to the iconAnchor
  });

  // add a marker in the given location, attach some popup content to it and open the popup
  L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map)
      .bindPopup('<h2 class="node-title"><a href="#">Ga mee naar Festival Mundial</a></h2> <div class="field field-name-field-event-date"><span class="date-display-single">25 September, 2014 - 14:57</span></div>');
</script>

<!--[if (gte IE 6)&(lte IE 8)]>
  <script type="text/javascript" src="js/oldie.js"></script>
<![endif]-->
</body>
</html>
