// Generated by CoffeeScript 1.6.3
(function() {
  var $test, codeAddress, googlemaps, map, placeMarker;

  $('.map').click(function() {
    return googlemaps();
  });

  map = {};

  googlemaps = function() {
    var geocoder, mapOptions, myLatlng;
    geocoder = new google.maps.Geocoder();
    myLatlng = new google.maps.LatLng(-25.363882, 131.044922);
    mapOptions = {
      center: myLatlng,
      zoom: 8
    };
    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    return google.maps.event.addListener(map, 'click', function(event) {
      return placeMarker(event.latLng);
    });
  };

  placeMarker = function(location) {
    var marker;
    marker = new google.maps.Marker({
      position: location,
      map: map
    });
    return map.setCenter(location);
  };

  $test = $('.test');

  $test.click(function() {
    return console.log($('.address').val());
  });

  $('.go').click(function() {
    return codeAddress();
  });

  codeAddress = function() {
    var geocoder;
    geocoder = new google.maps.Geocoder();
    return geocoder.geocode({
      'address': $('.address').val()
    }, function(results, status) {
      if (status = 'OK') {
        return map.setCenter(results[0].geometry.location);
      }
    });
  };

}).call(this);

/*
//@ sourceMappingURL=app.map
*/
