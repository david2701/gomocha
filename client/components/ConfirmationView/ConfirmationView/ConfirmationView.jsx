import React from 'react'
import OrderReadyTime from '../OrderReadyTime/OrderReadyTime'
import ShopDetails from '../ShopDetails/ShopDetails'
import DirectionsAndCall from '../DirectionsAndCall/DirectionsAndCall'
import { Link } from 'react-router'

var ConfirmationView = React.createClass({

    render: function() {
        return (
            <div>
                <h1>Order Confirmation</h1>
                <OrderReadyTime />
                <ShopDetails />
                <DirectionsAndCall />
                <Link to="/"><button className="next-button">Back to Dashboard</button></Link>
            </div>
        )
    }
});

module.exports = ConfirmationView;
