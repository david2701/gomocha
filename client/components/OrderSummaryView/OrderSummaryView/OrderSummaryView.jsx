import React from 'react'
import OrderTotalOS from '../OrderTotalOS/OrderTotalOS'
import { Link } from 'react-router'
import sass from '../../App/app.scss'

var OrderSummaryView = React.createClass({

    render: function() {
        return (
            <div>
                <h1>Order Summary</h1>
                <OrderTotalOS />

                <Link to="/confirmation"><button className="next-button">Submit Order</button></Link>
                <button className="next-button">Edit my order</button>
            </div>
        )
    }
});

module.exports = OrderSummaryView;
