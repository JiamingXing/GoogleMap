$(function() {

  var DEFAULT_ZOOM = 15;
  var GOOGLE_API_KEY = 'AIzaSyAAerCc7M_7gAWfRE1_y_Ze8deCw2JwRZg';
  var DEFAULT_RADIUS = 500;
  //New York city location
  var DEFAULT_LAT = 40.785091;
  var DEFAULT_LNG = -73.968285;

  function initMap() {

    var map = new google.maps.Map($('#map')[0], {
      zoom: DEFAULT_ZOOM,
      center : {
        lat : DEFAULT_LAT,
        lng : DEFAULT_LNG
      }
    });

    var params = {
      'location': new google.maps.LatLng(DEFAULT_LAT, DEFAULT_LNG),
      'radius': DEFAULT_RADIUS,
      'type': 'restaurant'
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(params, function(places, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        var current_infowindow;

        //iterate over a list of array
        _.each(places, function(place) {
          //create all markers of all returned palces
          var marker = new google.maps.Marker({
            position: {
              'lat': place.geometry.location.lat(),
              'lng': place.geometry.location.lng()
            },
            map: map
          });

          var infowindow_content =
            '<div id="content">' +
              '<h1  class="firstHeading">' + place.name + '</h1>'+
            '</div>';

          var infowindow = new google.maps.InfoWindow({
            content: infowindow_content
          });

          marker.addListener('click', function() {
            //close former infowindow
            if (current_infowindow) { 
              current_infowindow.close();
            }
            infowindow.open(map, marker);
            current_infowindow = infowindow;
          });
        });
      }
    });
  }

  initMap();
});
