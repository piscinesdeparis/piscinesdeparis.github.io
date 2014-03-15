function initialize() {
  $map = $("#map")

  var center = new google.maps.LatLng($map.data("center").lat, $map.data("center").lng);
  var mapOptions = { zoom: 12, center: center }
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var markers = $map.data("markers")
  markers.forEach(function(entry){
    var myLatlng = new google.maps.LatLng(entry.lat,entry.lng);

    var marker = new google.maps.Marker({
      position: myLatlng,
      animation: google.maps.Animation.DROP,
      map: map
    })

    var infowindow = new google.maps.InfoWindow({
      content: "<span style='color:#444'>" + entry.address + "<br>" + entry.more + "</div>"
    })

    if(typeof entry.more != "undefined"){
      google.maps.event.addListener(marker, 'click', function(){
        infowindow.open(map, this)
        $("#hide-when-map-click").hide()
        $("#map-info").show()
        $("#more-map").html(entry.address)
      })
    }
  })
}


google.maps.event.addDomListener(window, 'load', initialize)
