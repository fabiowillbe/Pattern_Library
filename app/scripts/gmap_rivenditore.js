




var centromappa = new google.maps.LatLng(45.458232,9.178512);

var markers = [
	   ['Furcht &amp; C.', 45.458232,9.178512, '/images/marker/rosso.png', 'xxx']
];

var map;

function initialize() {


var styles = 
  [
    {
        "featureType": "water",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#b5cbe4"
            }
        ]
    },
    {
        "featureType": "landscape",
        "stylers": [
            {
                "color": "#efefef"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#83a5b0"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#bdcdd3"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e3eed3"
            }
        ]
    },
    {
        "featureType": "administrative",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 33
            }
        ]
    },
    {
        "featureType": "road"
    },
    {
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 20
            }
        ]
    },
    {},
    {
        "featureType": "road",
        "stylers": [
            {
                "lightness": 20
            }
        ]
    }
];

  var mapOptions = {
          center: centromappa,
          zoom: 12,
          minZoom: 2,
          scrollwheel: false,
          navigationControl: true,
          //mapTypeControl: false,
          scaleControl: true,
          //draggable: false,
           
          zoomControl: true,
			zoomControlOptions: {
				style: google.maps.ZoomControlStyle.SMALL,
				position: google.maps.ControlPosition.LEFT_TOP
		    }, 
           
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: styles
  };


  map = new google.maps.Map(document.getElementById("gmap"),mapOptions);
  
  
  var infowindow = new google.maps.InfoWindow({  }), marker, i;
  for (i = 0; i < markers.length; i++) {  
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(markers[i][1], markers[i][2]),
        map: map,
        icon: markers[i][3]
    });
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
            infowindow.setContent(markers[i][0]);
            infowindow.open(map, marker);
        }
    })(marker, i));
  }
  
  
}



google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, "resize", function() {
 var center = map.getCenter();
 google.maps.event.trigger(map, "resize");
 map.setCenter(center); 
});


