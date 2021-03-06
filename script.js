function initMap() {
            var map = new google.maps.Map(document.getElementById('map'), {
                  zoom: 14,
                  center: {lat: 36.7359019, lng: -119.7636316},
                  mapTypeId: google.maps.MapTypeId.TERRAIN
            });

            var eventCoords = [
                  {lat: 36.7359019, lng: -119.7725641},
                  {lat: 36.7359019, lng: -119.7545974}
            ];

            function drop() {
                  for (var i =0; i < markerArray.length; i++) {
                        setTimeout(function() {
                              addMarkerMethod();
                        }, i * 400);
                  }
            }

            marker = new google.maps.Marker({
                  map: map,
                  draggable: true,
                  animation: google.maps.Animation.DROP,
                  position: {lat: 36.7359019, lng: -119.7725641}
                  });
            marker.addListener('click', drop);

            marker = new google.maps.Marker({
                  map: map,
                  draggable: true,
                  animation: google.maps.Animation.DROP,
                  position: {lat: 36.7359019, lng: -119.7545974}
            });
            marker.addListener('click', drop);

        var eventLocation = new google.maps.Polyline({
          path: eventCoords,
          geodesic: true,
          strokeColor: 'rgba(150, 200, 0, 1)',
          strokeOpacity: 1.0,
          strokeWeight: 6
        });

        eventLocation.setMap(map);
      }
