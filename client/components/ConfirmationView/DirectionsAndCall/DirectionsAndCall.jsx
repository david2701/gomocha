import React from 'react'
import sass from './directions-and-call.scss'

var DirectionsAndCall = React.createClass({
    render: function() {
        return (
            <div>
                <button className="next-button get-directions-button">Get Directions</button>
                <button className="next-button">Call Shop</button>
            </div>
        )
    }
});

module.exports = DirectionsAndCall;
