import React from 'react'
import sass from './order-ready-time.scss'

var OrderReadyTime = React.createClass({
    render: function() {
        return (
            <div className="order-ready-time-container">
                <h2>Your order will be ready in...</h2>
                <div className="order-ready-time">17 min</div>
                <p>by</p>
                <p>Method of transportation</p>
            </div>
        )
    }
});

module.exports = OrderReadyTime;
