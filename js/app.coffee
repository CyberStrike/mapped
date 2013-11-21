

$('.map').click -> googlemaps()

map = {}

googlemaps = ->
  geocoder = new google.maps.Geocoder()
  myLatlng = new google.maps.LatLng(-25.363882,131.044922)
  mapOptions =
    center: myLatlng,
    zoom: 8
  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions)
  google.maps.event.addListener(map, 'click', (event) -> placeMarker(event.latLng))

placeMarker = (location) ->
  marker = new google.maps.Marker({
    position: location,
    map: map
  })
  map.setCenter(location)

#google.maps.event.addDomListener(window, 'load', googlemaps)

$test = $('.test')
$test.click -> console.log $('.address').val()

$('.go').click -> codeAddress()


codeAddress = () ->
  geocoder = new google.maps.Geocoder()
  geocoder.geocode({'address': $('.address').val()},
    (results, status) ->
      map.setCenter(results[0].geometry.location) if status = 'OK'
    )