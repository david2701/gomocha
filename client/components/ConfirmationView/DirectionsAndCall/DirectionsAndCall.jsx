import React from 'react'

var DirectionsAndCall = React.createClass({
    render: function() {
        return (
            <div>
                <button className="next-button">Get Directions</button>
                <button className="next-button">Call Shop</button>
            </div>
        )
    }
});

module.exports = DirectionsAndCall;
