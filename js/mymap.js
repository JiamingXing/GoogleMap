var DEFAULT_ZOOM = 15;
var GOOGLE_API_KEY = 'AIzaSyAAerCc7M_7gAWfRE1_y_Ze8deCw2JwRZg';
var DEFAULT_RADIUS = 500;
//New York city location
var DEFAULT_LAT = 40.785091;
var DEFAULT_LNG = -73.968285;

$(function() {
  function initMap() {
    var position = {
      lat: DEFAULT_LAT,
      lng: DEFAULT_LNG
    };

    var map = new google.maps.Map($('#map')[0], {
      zoom: DEFAULT_ZOOM,
      center: position
    });
    var marker = new google.maps.Marker({
      position: position,
      map: map
    });

    $.ajax({
      url: '/nearby_search',
      data: {
        'location': position.lat + ',' + position.lng,
        'type': 'restaurant',
        'key': GOOGLE_API_KEY,
        'radius': DEFAULT_RADIUS
      },
      success: function(data) {
        debugger;
      },
      failure: function(data) {
        debugger;
      }
    });
  }

  initMap();
});
