import React from 'react'
import sass from './directions-and-call.scss'

var DirectionsAndCall = React.createClass({

    propTypes: {
        selectedShop: React.PropTypes.object,
        userLocation: React.PropTypes.shape({
            lat: React.PropTypes.number,
            lng: React.PropTypes.number
        }),
        selectedShopLocation: React.PropTypes.shape({
            lat: React.PropTypes.number,
            lng: React.PropTypes.number
        })
    },

    render: function() {

        var callPhone = "tel: " + this.props.selectedShop.formatted_phone_number;

        // Example Google Maps Directions URL
        // 'http://maps.google.com/?saddr=34.1514058,-118.8042592&daddr=34.1482435,-118.7961565'

        var userLocation = this.props.userLocation;
        var selectedShopAddress = this.props.selectedShop.formatted_address.split(' ').join('+');

        var directions = 'http://maps.google.com/?saddr=' + userLocation.lat + ',' + userLocation.lng + '&daddr=' + selectedShopAddress;


        return (
            <div className="confirmation-button-wrap">
                <a href={directions} target="_blank">
                    <button className="next-button confirmation-button">
                        Directions
                        <i className="fa fa-map-marker fa-lg" aria-hidden="true"></i>
                    </button>
                </a>
                <a href={callPhone}>
                    <button className="next-button confirmation-button">
                        Call Shop
                        <i className="fa fa-mobile fa-lg" aria-hidden="true"></i>
                    </button>
                </a>
            </div>
        )
    }
});

module.exports = DirectionsAndCall;
