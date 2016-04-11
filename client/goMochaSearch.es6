var goMochaSearch = {

            getLocation: function() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(initialize);
                } else {
                    x.innerHTML = "Geolocation is not supported by this browser.";
                }
            },

            showPosition: function(position) {
                console.log("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude);
            },


            initialize: function(position) {
                var pyrmont = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

                var map = new google.maps.Map(document.getElementById('map'), {
                    center: pyrmont,
                    zoom: 15,
                    scrollwheel: false
                });

                // Specify location, radius and place types for your Places API search.
                var request = {
                    location: pyrmont,
                    radius: '500',
                    types: ['cafe']
                };

                // Create the PlaceService and send the request.
                // Handle the callback with an anonymous function.
                var service = new google.maps.places.PlacesService(map);
                service.nearbySearch(request, function(results, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                  for (var i = 0; i < results.length; i++) {
                    var place = results[i];
                    console.log(results[i])
                    // If the request succeeds, draw the place location on
                    // the map as a marker, and register an event to handle a
                    // click on the marker.
                    var marker = new google.maps.Marker({
                      map: map,
                      position: place.geometry.location
                    });
                  }
                }
                }); // set results on state, use forEach on results
            }

                // Run the initialize function when the window has finished loading.
                google.maps.event.addDomListener(window, 'load', getLocation);
                // get new function that gets current location, then calls initialize and passes it the latitude and longitude current location
                // onComponentWillMount ^^
                // make functions on app component, and take body of code here in its own function in a different file
                // call callback that sets state, isolate call to google maps api and setstate
}

module.exports = goMochaSearch;
