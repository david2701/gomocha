import React from 'react'
import sass from './shop-list.scss'
import ShopListItem from '../ShopListItem/ShopListItem'
import _ from 'lodash'

var ShopList = React.createClass({
    propTypes: {
        shops: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
        handleSelectedShop: React.PropTypes.func
    },

    render: function() {

        var sortedShops = _.sortBy(this.props.shops, 'shopDistance');

        var shops = sortedShops.map(
            (shop) => {
                return <ShopListItem
                            shop={shop}
                            handleSelectedShop={this.props.handleSelectedShop}
                            key={shop.place_id} />
        });

        return (
            <div>
                {shops}
            </div>
        )
    }
});

module.exports = ShopList;
