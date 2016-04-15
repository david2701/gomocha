import React from 'react'
import sass from './directions-and-call.scss'

var DirectionsAndCall = React.createClass({
    render: function() {

        var callPhone = "tel: " + this.props.selectedShop.formatted_phone_number;

        return (
            <div>
                <button className="next-button get-directions-button">Get Directions</button>
                <a href={callPhone}><button className="next-button">Call Shop</button></a>
                {callPhone}
            </div>
        )
    }
});

module.exports = DirectionsAndCall;
