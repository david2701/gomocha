import React from 'react'
import PrevAndFavorites from '../PrevAndFavorites/PrevAndFavorites'
import { Link } from 'react-router'
import sass from '../../App/app.scss'
import sass2 from './dashboard-view.scss'

var DashboardView = React.createClass({

    propTypes: {
        username: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            <div>
                <div className="title-cover">
                <h1>Hey {this.props.username}, just click start to be on your way!</h1>
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
