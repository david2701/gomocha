import React from 'react'
import NavAndTitle from '../../NavAndTitle/NavAndTitle'
import SearchShop from '../SearchShop/SearchShop'
import PrevAndFavorites from '../PrevAndFavorites/PrevAndFavorites'

var DashboardView = React.createClass({

    contextTypes: {
      router: React.PropTypes.object
    },

    _handleNext: function() {
        const path = `/select-shop`
        this.context.router.push(path)
    },

    render: function() {
        return (
            <div>
                <NavAndTitle title='Dashboard' />
                <SearchShop />
                <PrevAndFavorites />
                <button onClick={this._handleNext} className="next-button">Next</button>
            </div>
        )
    }
});

module.exports = DashboardView;
