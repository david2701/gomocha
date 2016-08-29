import React from 'react'
import OrderTotal from '../../CustomOrderView/OrderTotal/OrderTotal'
import SpecialInstructionsOS from '../SpecialInstructionsOS/SpecialInstructionsOS'
import Footer from '../../DashboardView/Footer/Footer'
import { Link } from 'react-router'
import sass from '../../App/app.scss'
import sass2 from './order-summary.scss'

var OrderSummaryView = React.createClass({

    propTypes: {
        items: React.PropTypes.array,
        handleDeleteItemFromOrder: React.PropTypes.func,
        specialInstructions: React.PropTypes.string,
        handlePostOrder: React.PropTypes.func
    },

    render: function() {
        return (
            <div>
            <div className="main-wrap">
            <div className="order-summary-container">
                <div className="title-cover">
                    <h1>Order Summary</h1>
                    <div className="userProgress">
                        <div id="fourOfFive">
                        </div>
                    </div>
                </div>

                <div className="os-order-total-container">
                    <OrderTotal
                        orderItems={this.props.items}
                        handleDeleteItemFromOrder={this.props.handleDeleteItemFromOrder} />
                </div>

                <SpecialInstructionsOS
                    specialInstructions={this.props.specialInstructions} />
                <Link to="/confirmation" className="order-summary-link">
                    <button
                        onClick={this.props.handlePostOrder}
                        className="next-button order-summary-button">
                            Submit Order
                            <i className="fa fa-check fa-lg" aria-hidden="true"></i>
                    </button>
                </Link>

                <Link to="/custom-order">
                    <button className="next-button order-summary-edit-button">
                        Edit my order
                        <i className="fa fa-pencil fa-lg" aria-hidden="true"></i>
                    </button>
                </Link>
            </div>
            </div>
            <Footer />
        </div>
        )
    }
});

module.exports = OrderSummaryView;
