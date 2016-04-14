module.exports = {

    getLocation: function(callback) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(callback);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    },

    getShops: function(position, callback) {
        var currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        // Specify location, radius and place types for your Places API search.
        var request = {
            location: currentLocation,
            radius: '2000',
            types: ['cafe']
        };
        // Create the PlaceService and send the request.
        // Handle the callback with an anonymous function.
        var service = new google.maps.places.PlacesService(map);

        service.nearbySearch(request, function(results, status) {
            console.log(status);
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                console.log(results);
                callback(results);
            }
        });
    },

    getDetails: function(placeId, callback) {
        var service = new google.maps.places.PlacesService(map);

        service.getDetails({
            placeId: placeId
        }, function(place, status) {
              if (status === google.maps.places.PlacesServiceStatus.OK) {
                  console.log(place);
                  console.log(status);
                  callback(place);
              }
        });
    }
}
