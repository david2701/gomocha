import React from 'react'
import sass from './shop-list-item.scss'

var ShopListItem = React.createClass({


    render: function() {
        return (
            <div>
                <div className="shop-list-item-container">
                    <div className="shop-list-item-details">
                    <h2>Coffee Company XYZ</h2>
                    <p>123 Main St.</p>
                    <p>Santa Monica, CA 90238</p>
                </div>
                <p className="shop-list-distance">2.3 mi.</p>
                </div>
            </div>
        )
    }
});

module.exports = ShopListItem;
