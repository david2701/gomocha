import React from 'react'
import NavAndTitle from '../../NavAndTitle/NavAndTitle'
import OrderTotalOS from '../OrderTotalOS/OrderTotalOS'

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
                <NavAndTitle title='Order Summary' />
                <OrderTotalOS />

                <button onClick={this._handleNext} className="next-button">Submit Order</button>
                <button className="next-button">Edit my order</button>
            </div>
        )
    }
});

module.exports = OrderSummaryView;
