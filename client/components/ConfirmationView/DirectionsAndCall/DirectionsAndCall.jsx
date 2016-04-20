import React from 'react'
import sass from './directions-and-call.scss'

var DirectionsAndCall = React.createClass({
    render: function() {

        var callPhone = "tel: " + this.props.selectedShop.formatted_phone_number;

        return (
            <div className="confirmation-button-wrap">
                <button className="next-button confirmation-button">Get Directions</button>
                <a href={callPhone}><button className="next-button confirmation-button">Call Shop</button></a>
            </div>
        )
    }
});

module.exports = DirectionsAndCall;
