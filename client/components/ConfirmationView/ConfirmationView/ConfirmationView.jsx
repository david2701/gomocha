import React from 'react'

var ConfirmationView = React.createClass({

    contextTypes: {
      router: React.PropTypes.object
    },

    _handleNext: function() {
        const path = `/dashboard`
        this.context.router.push(path)
    },

    render: function() {
        return (
            <div>
                Confirmation View
                <button onClick={this._handleNext} className="next-button">Back to Dashboard</button>
            </div>
        )
    }
});

module.exports = ConfirmationView;
