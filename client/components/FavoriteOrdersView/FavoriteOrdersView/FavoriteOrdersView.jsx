import React from 'react'
import { Link } from 'react-router'
import sass from './favorite-orders-view.scss'
import sass2 from '../../App/app.scss'

var FavoriteOrdersView = React.createClass({
    render: function() {

        return (
            <div>
                <div className="title-cover">
                    <h1>Favorite Orders</h1>
                </div>

            </div>
        )
    }
});

module.exports = FavoriteOrdersView;
