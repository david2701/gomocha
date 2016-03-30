import React from 'react'
import sass from './shop-list.scss'
import ShopListItem from '../ShopListItem/ShopListItem'
import ClickForMore from '../ClickForMore/ClickForMore'

var ShopList = React.createClass({


    render: function() {
        return (
            <div>
                <ShopListItem />
                <ShopListItem />
                <ShopListItem />
                <ClickForMore />
            </div>
        )
    }
});

module.exports = ShopList;
