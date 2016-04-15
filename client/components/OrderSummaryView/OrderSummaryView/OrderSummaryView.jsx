import React from 'react'
import OrderTotal from '../../CustomOrderView/OrderTotal/OrderTotal'
import SpecialInstructionsOS from '../SpecialInstructionsOS/SpecialInstructionsOS'
import { Link } from 'react-router'
import sass from '../../App/app.scss'
import sass2 from './order-summary.scss'

var OrderSummaryView = React.createClass({

    render: function() {
        return (
            <div className="main-wrap">
                <h1>Order Summary</h1>
            <div className="order-summary-container">
                <div className="os-order-total-container">
                    <OrderTotal
                        orderItems={this.props.items}
                        handleDeleteItemFromOrder={this.props.handleDeleteItemFromOrder} />
                </div>
                <SpecialInstructionsOS
                    specialInstructions={this.props.specialInstructions} />
                <Link to="/confirmation">
                    <button className="next-button">Submit Order
                    </button>
                </Link>

                <Link to="/custom-order">
                    <button className="next-button">Edit my order
                    </button>
                </Link>
            </div>
            </div>
        )
    }
});

module.exports = OrderSummaryView;
