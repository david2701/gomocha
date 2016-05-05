import React from 'react'
import PrevAndFavorites from '../PrevAndFavorites/PrevAndFavorites'
import { Link } from 'react-router'
import sass from '../../App/app.scss'
import sass2 from './dashboard-view.scss'

var DashboardView = React.createClass({


    render: function() {
        return (
            <div>
                <div className="title-cover">
                <h1>Search for a Coffee Shop!</h1>
                </div>

                <div className="main-wrap">
                        <Link to="/select-shop" className="start-button-wrap">
                            <button className="next-button start-button">
                                <i className="fa fa-coffee" aria-hidden="true"></i>
                                    Start
                            </button></Link>
                        <PrevAndFavorites />
                </div>
        </div>
        )
    }
});

module.exports = DashboardView;
