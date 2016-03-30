import React from 'react'
import NavAndTitle from '../NavAndTitle/NavAndTitle'
import ShopSearch from '../ShopSearch/ShopSearch'
import ShopList from '../ShopList/ShopList'

var SelectShop = React.createClass({


    render: function() {
        return (
            <div>
                <NavAndTitle title='Select a Coffee Shop!' />
                <ShopSearch />
                <ShopList />
            </div>
        )
    }
});

module.exports = SelectShop;
