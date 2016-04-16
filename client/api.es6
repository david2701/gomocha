module.exports = {

    getLocation: function(callback, callback2) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(callback);
            navigator.geolocation.getCurrentPosition(callback2);
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
    },

    calculateTravelTime: function(userLocation, selectedShopLocation, callback) {
        var bounds = new google.maps.LatLngBounds;

        var origin1 = userLocation;
        var destinationA = selectedShopLocation;

        var geocoder = new google.maps.Geocoder;

        var service = new google.maps.DistanceMatrixService;
        service.getDistanceMatrix({
            origins: [origin1],
            destinations: [destinationA],
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false
        }, function(response, status) {
            if (status !== google.maps.DistanceMatrixStatus.OK) {
                alert('Error was: ' + status);
            } else {
                var originList = response.originAddresses;
                var destinationList = response.destinationAddresses;
            console.log(response);
            callback(response);
        }
      });
    }
}
