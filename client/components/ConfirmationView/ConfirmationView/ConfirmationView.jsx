import React from 'react'
import NavAndTitle from '../../NavAndTitle/NavAndTitle'
import OrderReadyTime from '../OrderReadyTime/OrderReadyTime'
import ShopDetails from '../ShopDetails/ShopDetails'
import DirectionsAndCall from '../DirectionsAndCall/DirectionsAndCall'

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
                <NavAndTitle title="Order Confirmation" />
                <OrderReadyTime />
                <ShopDetails />
                <DirectionsAndCall />
                <button onClick={this._handleNext} className="next-button">Back to Dashboard</button>
            </div>
        )
    }
});

module.exports = ConfirmationView;
