import React from 'react'
import ShopSearch from '../ShopSearch/ShopSearch'
import ShopList from '../ShopList/ShopList'
import { Link } from 'react-router'
import sass from '../../App/app.scss'

var SelectShopView = React.createClass({

    render: function() {
        return (
            <div className="main-wrap">
                <h1>Select a Shop</h1>
                {/*<ShopSearch />*/}
                <ShopList
                shops={this.props.shops}
                handleSelectedShop={this.props.handleSelectedShop} />
                {/*<Link to="/custom-order"><button className="next-button">Next</button></Link>*/}
            </div>
        )
    }
});

module.exports = SelectShopView;
