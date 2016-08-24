import React from 'react'
import sass from './shop-list-item.scss'
import { Link } from 'react-router'

var ShopListItem = React.createClass({

    propTypes: {
        shop: React.PropTypes.object.isRequired,
        handleSelectedShop: React.PropTypes.func
    },

    render: function() {

        return (
            <div className="shop-list-item-container"
                onClick={() => this.props.handleSelectedShop(this.props.shop)} >
                <Link to="/custom-order">
                    <div className="shop-list-item-details">
                        <h2>{this.props.shop.name}</h2>
                        <p>{this.props.shop.vicinity}</p>

                    <div className="shop-list-bottom-row">
                        {this.props.shop.hasOwnProperty('opening_hours') ?
                            this.props.shop.opening_hours.open_now ?
                            <div className="open-now"><i className="fa fa-clock-o" aria-hidden="true"></i> Open now!</div>
                            : <div className="closed-now"><i className="fa fa-clock-o" aria-hidden="true"></i> Currently closed</div>
                        : ''}
                        <p className="shop-list-distance">{this.props.shop.shopDistance}</p>
                    </div>
                </div>
                </Link>
            </div>
        )
    }
});


module.exports = ShopListItem;
