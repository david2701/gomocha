import React from 'react'
import ShopList from '../ShopList/ShopList'
import { Link } from 'react-router'
import sass from '../../App/app.scss'
import sass2 from './select-shop-view.scss'

var SelectShopView = React.createClass({

    propTypes: {
        shops: React.PropTypes.arrayOf(React.PropTypes.object),
        handleSelectedShop: React.PropTypes.func
    },

    render: function() {

        var loadingIcon;
        if (this.props.shops.length === 0) {
            loadingIcon = <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>;
        } else if (this.props.shops.length > 0) {
            loadingIcon = <i className="hide fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>;
        }
        return (
            <div>
            <div className="title-cover">
                <h1>Select a Shop</h1>
                <div className="userProgress">
                    <div id="oneOfFive">
                    </div>
                </div>
            </div>

            <div className="main-wrap">
                {/*<ShopSearch />*/}
                <div className="loading-icon">{loadingIcon}</div>
                <ShopList
                shops={this.props.shops}
                handleSelectedShop={this.props.handleSelectedShop} />
            </div>
        </div>
        )
    }
});

module.exports = SelectShopView;
