import React from 'react'
import OrderTotal from '../../CustomOrderView/OrderTotal/OrderTotal'
import SpecialInstructionsOS from '../SpecialInstructionsOS/SpecialInstructionsOS'
import { Link } from 'react-router'
import sass from '../../App/app.scss'
import sass2 from './order-summary.scss'

var OrderSummaryView = React.createClass({

    render: function() {
        return (
            <div>
            <div className="title-cover">
                <h1>Order Summary</h1>
            </div>

            <div className="main-wrap">
            <div className="order-summary-container">
                <div className="os-order-total-container">
                    <OrderTotal
                        orderItems={this.props.items}
                        handleDeleteItemFromOrder={this.props.handleDeleteItemFromOrder} />
                </div>
                <SpecialInstructionsOS
                    specialInstructions={this.props.specialInstructions} />
                <Link to="/confirmation" className="order-summary-link">
                    <button className="next-button order-summary-button">Submit Order
                    </button>
                </Link>

                <Link to="/custom-order">
                    <button className="next-button order-summary-edit-button">Edit my order
                    </button>
                </Link>
            </div>
            </div>
        </div>
        )
    }
});

module.exports = OrderSummaryView;
