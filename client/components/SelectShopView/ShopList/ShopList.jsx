import React from 'react'
import sass from './shop-list.scss'
import ShopListItem from '../ShopListItem/ShopListItem'
import ClickForMore from '../ClickForMore/ClickForMore'

var ShopList = React.createClass({


    render: function() {

        var shops = this.props.shops.map(
            (shop, index) => {
                return <ShopListItem
                            shop={shop}
                            handleSelectedShop={this.props.handleSelectedShop}
                            key={index} />
        });

        return (
            <div>
                {shops}
                {/*<ClickForMore />*/}
            </div>
        )
    }
});

module.exports = ShopList;
