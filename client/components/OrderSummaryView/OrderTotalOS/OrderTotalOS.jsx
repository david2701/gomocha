import React from 'react'
import OrderTotalRowOS from '../OrderTotalRowOS/OrderTotalRowOS'
import OrderTaxOS from '../OrderTaxOS/OrderTaxOS'
import OrderTotalTotalOS from '../OrderTotalTotalOS/OrderTotalTotalOS'
import sass from './order-total.scss'


var OrderTotal = React.createClass({
    render: function() {

        return (
            <div>
                <section id="order-total">
                    <h2>Order Summary</h2>
                    <table className="order-total-table">
                        <tbody>
                            <OrderTotalRowOS />
                            <OrderTaxOS/>
                            <OrderTotalTotalOS />
                        </tbody>
                    </table>
                </section>
            </div>
        )
    }
});

module.exports = OrderTotal;
