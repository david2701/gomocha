import React from 'react'
import sass from './shop-details.scss'

var ShopDetails = React.createClass({
    render: function() {
        return (
            <div className="shop-details-container">
                <h2>Coffee Shop Name</h2>
                <p>123 Main St.</p>
                <p>Santa Monica, CA 90237</p>
                <p>(818) 451-3284</p>
                <p>1.2 mi.</p>
            </div>
        )
    }
});

module.exports = ShopDetails;
