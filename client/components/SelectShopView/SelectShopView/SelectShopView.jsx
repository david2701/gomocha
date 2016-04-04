import React from 'react'
import NavAndTitle from '../../NavAndTitle/NavAndTitle'
import ShopSearch from '../ShopSearch/ShopSearch'
import ShopList from '../ShopList/ShopList'
import NextButton from '../../NextButton/NextButton'

var SelectShopView = React.createClass({

    contextTypes: {
      router: React.PropTypes.object
    },

    _handleNext: function() {
        const path = `/custom-order`
        this.context.router.push(path)
    },

    render: function() {
        return (
            <div>
                <NavAndTitle title='Select a Coffee Shop!' />
                <ShopSearch />
                <ShopList />
                <button onClick={this._handleNext} className="next-button">Next</button>
            </div>
        )
    }
});

module.exports = SelectShopView;
