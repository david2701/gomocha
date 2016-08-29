import React from 'react'
import { Link } from 'react-router'
import sass from './favorite-orders-view.scss'
import sass2 from '../../App/app.scss'
import PreviousOrder from '../../PreviousOrdersView/PreviousOrder/PreviousOrder'

var FavoriteOrdersView = React.createClass({

    propTypes: {
        handleFavoriteOrders: React.PropTypes.func,
        favoriteOrders: React.PropTypes.array
    },

    componentWillMount: function() {
        console.log('favorite orders mount');
        this.props.handleFavoriteOrders();
    },

    render: function() {
        var favoriteOrders = this.props.favoriteOrders.map(function(order, index) {
            return <PreviousOrder
                previousOrder={order}
                key={index} />
        })

        return (
            <div className="favorite-orders-container">
                <div className="title-cover">
                    <h1>Favorite Orders</h1>
                </div>
                <div className="previous-orders-wrap">
                {favoriteOrders}
                </div>
            </div>
        )
    }
});

module.exports = FavoriteOrdersView;
