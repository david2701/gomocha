import React from 'react'
import OrderTotal from '../../CustomOrderView/OrderTotal/OrderTotal'
import SpecialInstructionsOS from '../SpecialInstructionsOS/SpecialInstructionsOS'
import { Link } from 'react-router'
import sass from '../../App/app.scss'

var OrderSummaryView = React.createClass({

    render: function() {
        return (
            <div className="main-wrap">
                <h1>Order Summary</h1>
                <OrderTotal
                    orderItems={this.props.items}
                    handleDeleteItemFromOrder={this.props.handleDeleteItemFromOrder} />
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
        )
    }
});

module.exports = OrderSummaryView;
