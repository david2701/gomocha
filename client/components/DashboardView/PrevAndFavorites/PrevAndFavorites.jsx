import React from 'react'
import sass from './prev-and-favorites.scss'
import { Link } from 'react-router'

var PrevAndFavorites = React.createClass({


    render: function() {
        return (
            <div className="prev-and-fav-wrap">
                <Link to="/previous-orders" className="prev-orders-link">
                    <div className="prev-orders-button"><i className="fa fa-reply fa-lg"></i>  Previous Orders</div>
                </Link>
                <Link to="favorite-orders" className="fav-orders-link">
                    <div className="fav-orders-button"><i className="fa fa-heart fa-lg"></i>  Fav Orders</div>
                </Link>
            </div>
        )
    }
});

module.exports = PrevAndFavorites;
