import React from 'react'
import SearchShop from '../SearchShop/SearchShop'
import PrevAndFavorites from '../PrevAndFavorites/PrevAndFavorites'
import { Link } from 'react-router'
import sass from '../../App/app.scss'

var DashboardView = React.createClass({


    render: function() {
        return (
            <div>
                <h1>Start - Search for a Coffee Shop!</h1>
                <SearchShop />
                <PrevAndFavorites />
                <Link to="/select-shop"><button className="next-button">Next</button></Link>
            </div>
        )
    }
});

module.exports = DashboardView;
