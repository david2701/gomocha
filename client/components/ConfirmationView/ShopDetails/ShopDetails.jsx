import React from 'react'
import sass from './shop-details.scss'

var ShopDetails = React.createClass({
    render: function() {

        var selectedShop = this.props.selectedShop;

        return (
            <div className="shop-details-container">
                <h2>{selectedShop.name}</h2>
                <p>{selectedShop.vicinity}</p>
            <p>Phone: Not available at this time.</p>
        <p>Distance: Not available at this time.</p>
            </div>
        )
    }
});

module.exports = ShopDetails;
