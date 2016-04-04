import React from 'react'

var OrderSummaryView = React.createClass({

    contextTypes: {
      router: React.PropTypes.object
    },

    _handleNext: function() {
        const path = `/confirmation`
        this.context.router.push(path)
    },

    render: function() {
        return (
            <div>
                Order Summary
                <button onClick={this._handleNext} className="next-button">Next</button>
            </div>
        )
    }
});

module.exports = OrderSummaryView;
