import React from 'react'
import SearchShop from '../SearchShop/SearchShop'
import PrevAndFavorites from '../PrevAndFavorites/PrevAndFavorites'
import { Link } from 'react-router'
import sass from '../../App/app.scss'
import sass2 from './dashboard-view.scss'

var DashboardView = React.createClass({


    render: function() {
        return (
            <div className="main-wrap">
                    <h1>Start - Search for a Coffee Shop!</h1>
                    {/*<SearchShop />*/}
                    <Link to="/select-shop" className="start-button-wrap"><button className="next-button start-button">Start</button></Link>
                    <PrevAndFavorites />
            </div>
        )
    }
});

module.exports = DashboardView;
