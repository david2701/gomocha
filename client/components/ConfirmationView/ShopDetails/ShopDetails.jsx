import React from 'react'
import sass from './shop-details.scss'

var ShopDetails = React.createClass({
    render: function() {

        var selectedShop = this.props.selectedShop;

        return (
            <div className="shop-details-container">
                <h2>{selectedShop.name}</h2>
            <p>{selectedShop.address_components[0].short_name + ' ' + selectedShop.address_components[1].short_name}</p>

            <p>{selectedShop.address_components[2].short_name + ', ' + selectedShop.address_components[3].short_name + ' ' + selectedShop.address_components[5].short_name}</p>
            <p>{selectedShop.formatted_phone_number}</p>
            <p>Distance: {this.props.distance}</p>
            </div>
        )
    }
});

module.exports = ShopDetails;
