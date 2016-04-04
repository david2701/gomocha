import React from 'react'
import NavAndTitle from '../../NavAndTitle/NavAndTitle'

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
                <button onClick={this._handleNext} className="next-button">Next</button>
            </div>
        )
    }
});

module.exports = DashboardView;
