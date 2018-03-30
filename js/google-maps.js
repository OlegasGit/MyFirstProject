// Google Maps JS & Settings Coordinates
// When the window has finished loading create our google map below
// https://developers.google.com/maps/documentation/

// google.maps.event.addDomListener(window, 'load', initMap);

// window.addEventListener('load', initMap);

function initMap() {
// Basic options for a simple Google Map

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    let mapElement = document.getElementById('map');

    if (mapElement) {
        //----------------- ADD YOUR SETTINGS HERE -----------------//


        // Add your coordinates. How to know coordinates: https://support.google.com/maps/answer/18539?hl=en
        let myLatlng = new google.maps.LatLng(45.506881, -73.569508);

        // Add your company name and some text about company
        let maptooltipbold = 'Eidos Montréal';
        let maptooltip = 'Video game development';


        //---------------------------------------------------------//


        let mapOptions = {

            // How zoomed in you want the map to start at (always required)
            zoom: 16,

            //scroll zoom false
            scrollwheel: false,
            clickable: false,
            //on mobile
            draggable: !("ontouchend" in document),
            // The latitude and longitude to center the map (always required)
            center: myLatlng,

            // How you would like to style the map.
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{"featureType": "all","elementType": "all","stylers": [{"visibility": "on"}]},
            {"featureType": "all","elementType": "labels","stylers": [{"visibility": "off"},{"saturation": "-100"}]},
            {"featureType": "all","elementType": "labels.text.fill","stylers": [{"saturation": 36},{"color": "#000000"},{"lightness": 40},{"visibility": "off"}]},
            {"featureType": "all","elementType": "labels.text.stroke","stylers": [{"visibility": "off"},{"color": "#da972e"},{"lightness": 16}]},
            {"featureType": "all","elementType": "labels.icon","stylers": [{"visibility": "on"}]},
            {"featureType": "administrative","elementType": "geometry.fill","stylers": [{"color": "#000000"},{"lightness": 20}]},
            {"featureType": "administrative","elementType": "geometry.stroke","stylers": [{"color": "#000000"},{"lightness": 17},{"weight": 1.2}]},
            {"featureType": "landscape","elementType": "geometry","stylers": [{"color": "#000000"},{"lightness": 20}]},
            {"featureType": "landscape","elementType": "geometry.fill","stylers": [{"color": "#4d6059"}]},
            {"featureType": "landscape","elementType": "geometry.stroke","stylers": [{"color": "#4d6059"}]},
            {"featureType": "landscape.natural","elementType": "geometry.fill","stylers": [{"color": "#4d6059"}]},
            {"featureType": "poi","elementType": "geometry","stylers": [{"lightness": 21}]},
            {"featureType": "poi","elementType": "geometry.fill","stylers": [{"color": "#4d6059"}]},
            {"featureType": "poi","elementType": "geometry.stroke","stylers": [{"color": "#4d6059"}]},
            {"featureType": "road","elementType": "geometry","stylers": [{"visibility": "on"},{"color": "#7f8d89"}]},
            {"featureType": "road","elementType": "geometry.fill","stylers": [{"color": "#7f8d89"}]},
            {"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"color": "#7f8d89"},{"lightness": 17}]},
            {"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#7f8d89"},{"lightness": 29},{"weight": 0.2}]},
            {"featureType": "road.arterial","elementType": "geometry","stylers": [{"color": "#000000"},{"lightness": 18}]},
            {"featureType": "road.arterial","elementType": "geometry.fill","stylers": [{"color": "#7f8d89"}]},
            {"featureType": "road.arterial","elementType": "geometry.stroke","stylers": [{"color": "#7f8d89"}]},
            {"featureType": "road.local","elementType": "geometry","stylers": [{"color": "#000000"},{"lightness": 16}]},
            // А дальше я устал ровнять код этого скина карты! =)
               {
                   "featureType": "road.local",
                   "elementType": "geometry.fill",
                   "stylers": [
                       {
                           "color": "#7f8d89"
                       }
                   ]
               },
               {
                   "featureType": "road.local",
                   "elementType": "geometry.stroke",
                   "stylers": [
                       {
                           "color": "#7f8d89"
                       }
                   ]
               },
               {
                   "featureType": "transit",
                   "elementType": "geometry",
                   "stylers": [
                       {
                           "color": "#000000"
                       },
                       {
                           "lightness": 19
                       }
                   ]
               },
               {
                   "featureType": "water",
                   "elementType": "all",
                   "stylers": [
                       {
                           "color": "#2b3638"
                       },
                       {
                           "visibility": "on"
                       }
                   ]
               },
               {
                   "featureType": "water",
                   "elementType": "geometry",
                   "stylers": [
                       {
                           "color": "#2b3638"
                       },
                       {
                           "lightness": 17
                       }
                   ]
               },
               {
                   "featureType": "water",
                   "elementType": "geometry.fill",
                   "stylers": [
                       {
                           "color": "#24282b"
                       }
                   ]
               },
               {
                   "featureType": "water",
                   "elementType": "geometry.stroke",
                   "stylers": [
                       {
                           "color": "#24282b"
                       }
                   ]
               },
               {
                   "featureType": "water",
                   "elementType": "labels",
                   "stylers": [
                       {
                           "visibility": "on"
                       }
                   ]
               },
               {
                   "featureType": "water",
                   "elementType": "labels.text",
                   "stylers": [
                       {
                           "visibility": "off"
                       }
                   ]
               },
               {
                   "featureType": "water",
                   "elementType": "labels.text.fill",
                   "stylers": [
                       {
                           "visibility": "off"
                       }
                   ]
               },
               {
                   "featureType": "water",
                   "elementType": "labels.text.stroke",
                   "stylers": [
                       {
                           "visibility": "off"
                       }
                   ]
               },
               {
                   "featureType": "water",
                   "elementType": "labels.icon",
                   "stylers": [
                       {
                           "visibility": "on"
                       }
                   ]
               }
           ]
        };

        // Create the Google Map using out element and options defined above
        let map = new google.maps.Map(mapElement, mapOptions);

        // Image of toogle
        let image = 'img/contacts-map-marker.png';

        // Div's of toogle
        let content = document.createElement('div');
        content.innerHTML = "<div class="+"map-tooltip"+"><h4><strong>"+maptooltipbold+"</strong></h4><hr>"+"<h5>"+maptooltip+"</h5></div>";

        // Initialize tooltips
        let infowindow = new google.maps.InfoWindow({
            content: content
        });

        let marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            draggable: false,
            icon: image,
            animation: google.maps.Animation.DROP
        });


        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });
	}
}