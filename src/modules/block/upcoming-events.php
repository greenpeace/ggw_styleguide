<div class="block block-events" id="upcoming-events">

  <i class="block-icon icon-bg-event icon-event"></i>
  <h2 class="block-title">Upcoming events</h2>
  <div class="content">

    <div class="mapwrapper">
      <a href="#" class="button btn-primary map-trigger js-show-mobile-map"><i class="icon-map"></i> View on map</a>
      <div id="desktopmap"></div>
    </div>

    <article class="node-event-small">
      <h2><a href="#">Heb jij interesse in een Act for Arctic training of webinar?</a></h2>
      <div class="date-display-single">20 juli, 2014 - 09:00</div>
    </article>

    <article class="node-event-small">
      <h2><a href="#">Act for Arctic Kick-Off training</a></h2>
      <div class="date-display-single">24 juli, 2014 - 18:00</div>
    </article>

    <article class="node-event-small">
      <h2><a href="#">De héle Noordzeekust schoon van 1 t/m 31 augustus! Help je mee?</a></h2>
      <div class="date-display-single">1 augustus, 2014 - 00:00</div>
    </article>

    <article class="node-event-small">
      <h2><a href="#">Netwerkborrel 28 augustus</a></h2>
      <div class="date-display-single">28 augustus, 2014 - 17:00</div>
    </article>

    <article class="node-event-small">
      <h2><a href="#">Opschonen Enschede</a></h2>
      <div class="date-display-single">20 July, 2014 - 12:09</div>
    </article>

    <a class="button" href="#">See more events</a>
  </div>

</div>

<script src="leaflet/leaflet.js"></script>
<script>
  // create a map in the "map" div, set the view to a given place and zoom
  var mobileMap = L.map('mobilemap').setView([51.505, -0.09], 13);
  var deskMap= L.map('desktopmap').setView([51.505, -0.09], 13);

  // add an OpenStreetMap tile layer
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(deskMap);
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(mobileMap);

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
  L.marker([51.5, -0.09], {icon: greenIcon}).addTo(deskMap)
    .bindPopup('<h2 class="node-title"><a href="#">Ga mee naar Festival Mundial</a></h2> <div class="field field-name-field-event-date"><span class="date-display-single">25 September, 2014 - 14:57</span></div>');
  L.marker([51.5, -0.09], {icon: greenIcon}).addTo(mobileMap)
    .bindPopup('<h2 class="node-title"><a href="#">Ga mee naar Festival Mundial</a></h2> <div class="field field-name-field-event-date"><span class="date-display-single">25 September, 2014 - 14:57</span></div>');
</script>
